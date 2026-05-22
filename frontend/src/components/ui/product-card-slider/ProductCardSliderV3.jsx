import React, { useMemo, useRef, useState, useEffect } from 'react';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, '&#39;');
}

function uid(prefix = 'pcsv3') {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeCollections(collections = []) {
  return collections
    .filter(Boolean)
    .map((collection, index) => ({
      id: collection.id || `collection-${index + 1}`,
      name: collection.name || `Collection ${index + 1}`,
      url: collection.url || '#',
      heroImage: collection.heroImage || '',
      products: Array.isArray(collection.products)
        ? collection.products.slice(0, 4).map((product, productIndex) => ({
            id: product.id || `product-${index + 1}-${productIndex + 1}`,
            title: product.title || `Product ${productIndex + 1}`,
            price: product.price || '$0.00',
            image: product.image || '',
            url: product.url || '#',
            cartUrl: product.cartUrl || product.url || '#',
          }))
        : [],
    }))
    .filter((collection) => collection.products.length > 0);
}

function productCardMarkup(product) {
  return `
    <article class="pcsv3-product-card">
      <a class="pcsv3-cart-btn" href="${escapeAttr(product.cartUrl || product.url || '#')}" aria-label="Add ${escapeAttr(product.title)} to cart">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 5h2l2.2 9.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="19" r="1.4" fill="currentColor"/>
          <circle cx="17" cy="19" r="1.4" fill="currentColor"/>
        </svg>
      </a>
      <a href="${escapeAttr(product.url || '#')}" class="pcsv3-product-link" aria-label="${escapeAttr(product.title)}">
        <img src="${escapeAttr(product.image)}" alt="${escapeAttr(product.title)}" loading="lazy">
      </a>
      <div class="pcsv3-product-title">${escapeHtml(product.title)}</div>
      <div class="pcsv3-product-price">${escapeHtml(product.price)}</div>
    </article>
  `;
}

export function getProductCardSliderV3Code(config = {}) {
  const c = {
    sectionBg: '#3f2316',
    cardBg: '#f3e7db',
    sectionRadius: '28px',
    collections: [
      {
        id: 'ready-to-wear',
        name: 'Ready to Wear',
        url: '/collections/ready-to-wear',
        heroImage: 'https://cdn.shopify.com/s/files/1/0000/0001/files/hero-1.jpg?v=1',
        products: [
          {
            id: 'rtw-1',
            title: 'Hazel Brown Shirt',
            price: '$120.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-1.jpg?v=1',
            url: '/products/hazel-brown-shirt',
            cartUrl: '/cart/add?id=11111111111111&quantity=1',
          },
          {
            id: 'rtw-2',
            title: 'Soft Tailored Jacket',
            price: '$160.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-2.jpg?v=1',
            url: '/products/soft-tailored-jacket',
            cartUrl: '/cart/add?id=11111111111112&quantity=1',
          },
          {
            id: 'rtw-3',
            title: 'Classic Cotton Set',
            price: '$98.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-3.jpg?v=1',
            url: '/products/classic-cotton-set',
            cartUrl: '/cart/add?id=11111111111113&quantity=1',
          },
          {
            id: 'rtw-4',
            title: 'Signature Pleated Dress',
            price: '$189.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-4.jpg?v=1',
            url: '/products/signature-pleated-dress',
            cartUrl: '/cart/add?id=11111111111114&quantity=1',
          },
        ],
      },
      {
        id: 'bags',
        name: 'Bags',
        url: '/collections/bags',
        heroImage: 'https://cdn.shopify.com/s/files/1/0000/0001/files/hero-2.jpg?v=1',
        products: [
          {
            id: 'bags-1',
            title: 'Leather Carry Tote',
            price: '$210.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-1.jpg?v=1',
            url: '/products/leather-carry-tote',
            cartUrl: '/cart/add?id=11111111111121&quantity=1',
          },
          {
            id: 'bags-2',
            title: 'Mini Saddle Bag',
            price: '$145.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-2.jpg?v=1',
            url: '/products/mini-saddle-bag',
            cartUrl: '/cart/add?id=11111111111122&quantity=1',
          },
          {
            id: 'bags-3',
            title: 'Canvas Market Bag',
            price: '$85.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-3.jpg?v=1',
            url: '/products/canvas-market-bag',
            cartUrl: '/cart/add?id=11111111111123&quantity=1',
          },
          {
            id: 'bags-4',
            title: 'Evening Chain Bag',
            price: '$175.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-4.jpg?v=1',
            url: '/products/evening-chain-bag',
            cartUrl: '/cart/add?id=11111111111124&quantity=1',
          },
        ],
      },
      {
        id: 'footwear',
        name: 'Footwear',
        url: '/collections/footwear',
        heroImage: 'https://cdn.shopify.com/s/files/1/0000/0001/files/hero-3.jpg?v=1',
        products: [
          {
            id: 'fw-1',
            title: 'Classic Mule Sandals',
            price: '$130.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-1.jpg?v=1',
            url: '/products/classic-mule-sandals',
            cartUrl: '/cart/add?id=11111111111131&quantity=1',
          },
          {
            id: 'fw-2',
            title: 'Soft Leather Flats',
            price: '$118.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-2.jpg?v=1',
            url: '/products/soft-leather-flats',
            cartUrl: '/cart/add?id=11111111111132&quantity=1',
          },
          {
            id: 'fw-3',
            title: 'Block Heel Sandals',
            price: '$142.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-3.jpg?v=1',
            url: '/products/block-heel-sandals',
            cartUrl: '/cart/add?id=11111111111133&quantity=1',
          },
          {
            id: 'fw-4',
            title: 'Everyday Suede Loafers',
            price: '$155.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-4.jpg?v=1',
            url: '/products/everyday-suede-loafers',
            cartUrl: '/cart/add?id=11111111111134&quantity=1',
          },
        ],
      },
    ],
    ...config,
  };

  const collections = normalizeCollections(c.collections);
  const instanceId = uid();
  const wrapId = `${instanceId}-wrap`;

  const headingsMarkup = collections
    .map(
      (collection, index) => `
      <div class="pcsv3-heading-row">
        <div class="pcsv3-cs-name ${index === 0 ? 'active' : ''}" data-collection-trigger="${escapeAttr(collection.id)}">
          ${escapeHtml(collection.name)}
        </div>
        <a class="pcsv3-heading-link" href="${escapeAttr(collection.url)}">Shop now</a>
      </div>
    `
    )
    .join('');

  const mobileTabsMarkup = collections
    .map(
      (collection, index) => `
      <button class="pcsv3-mobile-tab ${index === 0 ? 'active' : ''}" type="button" data-collection-trigger="${escapeAttr(collection.id)}">
        ${escapeHtml(collection.name)}
      </button>
    `
    )
    .join('');

  const deckMarkup = collections
    .map(
      (collection, index) => `
      <div
        class="pcsv3-rummy-card"
        data-deck-card="${escapeAttr(collection.id)}"
        style="transform: translate(${index * 8}px, ${index * 8}px) rotate(${index === 0 ? '-5deg' : index === 1 ? '2deg' : '6deg'}); z-index: ${collections.length - index}; opacity: ${index < 3 ? 1 : 0};"
      >
        <img src="${escapeAttr(collection.heroImage || collection.products[0]?.image || '')}" alt="${escapeAttr(collection.name)}" loading="lazy">
      </div>
    `
    )
    .join('');

  const panelsMarkup = collections
    .map(
      (collection, index) => `
      <div class="pcsv3-products-panel ${index === 0 ? 'active' : ''}" data-panel="${escapeAttr(collection.id)}">
        ${collection.products.map(productCardMarkup).join('')}
      </div>
    `
    )
    .join('');

  return `
<section id="${escapeAttr(instanceId)}-section" class="pcsv3-section">
  <div id="${escapeAttr(wrapId)}">
    <section id="${escapeAttr(instanceId)}" class="pcsv3-root" aria-label="Product card slider">
      <div class="pcsv3-inner">
        <div class="pcsv3-left">
          <div class="pcsv3-heading-list">
            ${headingsMarkup}
          </div>

          <div class="pcsv3-mobile-tabs" role="tablist" aria-label="Collections">
            ${mobileTabsMarkup}
          </div>

          <div class="pcsv3-rummy-deck">
            ${deckMarkup}
          </div>
        </div>

        <div class="pcsv3-right">
          <div class="pcsv3-panels-wrapper">
            ${panelsMarkup}
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    #${instanceId}, #${instanceId} *, #${instanceId} *::before, #${instanceId} *::after {
      box-sizing: border-box;
    }

    #${wrapId} {
      position: relative;
      height: 300vh;
      width: 100%;
    }

    #${instanceId} {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: hidden;
      background: ${escapeAttr(c.sectionBg)};
      border-radius: ${escapeAttr(c.sectionRadius)};
      margin: 0 16px;
    }

    #${instanceId} .pcsv3-inner {
      height: 100%;
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
      gap: 32px;
      padding: 32px;
      align-items: center;
    }

    #${instanceId} .pcsv3-left,
    #${instanceId} .pcsv3-right {
      min-width: 0;
    }

    #${instanceId} .pcsv3-right {
      height: 100%;
    }

    #${instanceId} .pcsv3-heading-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    #${instanceId} .pcsv3-heading-row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    #${instanceId} .pcsv3-cs-name {
      font-size: clamp(24px, 3vw, 42px);
      font-weight: 700;
      line-height: 1.06;
      color: rgba(255,255,255,.24);
      cursor: pointer;
      transition: color .35s ease;
      word-break: break-word;
    }

    #${instanceId} .pcsv3-cs-name.active {
      color: #fff;
    }

    #${instanceId} .pcsv3-heading-link {
      color: rgba(255,255,255,.8);
      text-decoration: none;
      font-size: 12px;
      line-height: 1;
      border: 1px solid rgba(255,255,255,.18);
      padding: 6px 10px;
      border-radius: 999px;
      transition: all .25s ease;
      white-space: nowrap;
    }

    #${instanceId} .pcsv3-heading-link:hover {
      border-color: rgba(255,255,255,.5);
      color: #fff;
      background: rgba(255,255,255,.06);
    }

    #${instanceId} .pcsv3-rummy-deck {
      position: relative;
      width: min(180px, 100%);
      aspect-ratio: 7 / 10;
      margin-top: 20px;
    }

    #${instanceId} .pcsv3-rummy-card {
      position: absolute;
      inset: 0;
      border-radius: 14px;
      overflow: hidden;
      transition: transform .7s cubic-bezier(.34,1.3,.64,1), opacity .35s ease;
      box-shadow: 0 8px 32px rgba(0,0,0,.35);
      background: rgba(255,255,255,.08);
    }

    #${instanceId} .pcsv3-rummy-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    #${instanceId} .pcsv3-panels-wrapper {
      position: relative;
      height: 100%;
      min-height: 560px;
    }

    #${instanceId} .pcsv3-products-panel {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      align-content: center;
      opacity: 0;
      transform: translateY(18px) scale(.98);
      pointer-events: none;
      transition: opacity .45s cubic-bezier(.16,1,.3,1), transform .45s cubic-bezier(.16,1,.3,1);
    }

    #${instanceId} .pcsv3-products-panel.active {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    #${instanceId} .pcsv3-product-card {
      background: ${escapeAttr(c.cardBg)};
      border-radius: 14px;
      padding: 10px;
      position: relative;
      overflow: hidden;
      min-width: 0;
    }

    #${instanceId} .pcsv3-product-link {
      display: block;
      text-decoration: none;
    }

    #${instanceId} .pcsv3-product-card img {
      width: 100%;
      aspect-ratio: 1 / 1.15;
      object-fit: cover;
      border-radius: 10px;
      display: block;
    }

    #${instanceId} .pcsv3-cart-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      border-radius: 999px;
      background: rgba(255,255,255,.88);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #2c1a10;
      z-index: 2;
    }

    #${instanceId} .pcsv3-cart-btn svg {
      width: 18px;
      height: 18px;
      display: block;
    }

    #${instanceId} .pcsv3-product-title {
      color: #2c1a10;
      font-size: 14px;
      line-height: 1.35;
      font-weight: 600;
      margin-top: 10px;
      word-break: break-word;
    }

    #${instanceId} .pcsv3-product-price {
      color: #2c1a10;
      font-size: 13px;
      font-weight: 700;
      margin-top: 4px;
    }

    #${instanceId} .pcsv3-mobile-tabs {
      display: none;
    }

    @media (max-width: 1199px) {
      #${instanceId} .pcsv3-inner {
        grid-template-columns: minmax(180px, 230px) minmax(0, 1fr);
        gap: 24px;
        padding: 28px 24px;
      }

      #${instanceId} .pcsv3-cs-name {
        font-size: clamp(22px, 2.5vw, 34px);
      }

      #${instanceId} .pcsv3-rummy-deck {
        width: 150px;
        margin-top: 16px;
      }

      #${instanceId} .pcsv3-panels-wrapper {
        min-height: 520px;
      }

      #${instanceId} .pcsv3-products-panel {
        gap: 12px;
      }

      #${instanceId} .pcsv3-product-card {
        padding: 8px;
        border-radius: 12px;
      }

      #${instanceId} .pcsv3-product-card img {
        border-radius: 8px;
      }
    }

    @media (max-width: 991px) {
      #${wrapId} {
        height: auto;
      }

      #${instanceId} {
        position: relative;
        top: auto;
        height: auto;
        min-height: auto;
        margin: 0 12px;
      }

      #${instanceId} .pcsv3-inner {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 24px 18px 26px;
        align-items: start;
      }

      #${instanceId} .pcsv3-left {
        display: grid;
        gap: 14px;
      }

      #${instanceId} .pcsv3-heading-list {
        display: none;
      }

      #${instanceId} .pcsv3-mobile-tabs {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      #${instanceId} .pcsv3-mobile-tab {
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,.22);
        background: transparent;
        color: rgba(255,255,255,.65);
        cursor: pointer;
        font: inherit;
        font-size: 13px;
        line-height: 1.2;
        white-space: nowrap;
      }

      #${instanceId} .pcsv3-mobile-tab.active {
        background: rgba(255,255,255,.12);
        color: #fff;
      }

      #${instanceId} .pcsv3-rummy-deck {
        width: 120px;
        margin-top: 0;
      }

      #${instanceId} .pcsv3-panels-wrapper {
        min-height: 0;
        height: auto;
      }

      #${instanceId} .pcsv3-products-panel {
        position: static;
        display: none;
        opacity: 1;
        transform: none;
        pointer-events: auto;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        align-content: start;
      }

      #${instanceId} .pcsv3-products-panel.active {
        display: grid;
      }
    }

    @media (max-width: 767px) {
      #${instanceId} {
        margin: 0;
        border-radius: 0;
      }

      #${instanceId} .pcsv3-inner {
        padding: 20px 14px 24px;
        gap: 18px;
      }

      #${instanceId} .pcsv3-left {
        gap: 12px;
      }

      #${instanceId} .pcsv3-mobile-tabs {
        gap: 8px;
        overflow-x: auto;
        flex-wrap: nowrap;
        padding-bottom: 4px;
        scrollbar-width: none;
      }

      #${instanceId} .pcsv3-mobile-tabs::-webkit-scrollbar {
        display: none;
      }

      #${instanceId} .pcsv3-mobile-tab {
        flex: 0 0 auto;
        padding: 8px 12px;
        font-size: 12px;
      }

      #${instanceId} .pcsv3-rummy-deck {
        width: 104px;
      }

      #${instanceId} .pcsv3-products-panel {
        gap: 10px;
      }

      #${instanceId} .pcsv3-product-card {
        padding: 8px;
        border-radius: 12px;
      }

      #${instanceId} .pcsv3-product-card img {
        aspect-ratio: 1 / 1.18;
        border-radius: 8px;
      }

      #${instanceId} .pcsv3-cart-btn {
        top: 12px;
        right: 12px;
        width: 34px;
        height: 34px;
      }

      #${instanceId} .pcsv3-cart-btn svg {
        width: 16px;
        height: 16px;
      }

      #${instanceId} .pcsv3-product-title {
        font-size: 13px;
        margin-top: 8px;
      }

      #${instanceId} .pcsv3-product-price {
        font-size: 12px;
      }
    }

    @media (max-width: 479px) {
      #${instanceId} .pcsv3-inner {
        padding: 18px 12px 22px;
      }

      #${instanceId} .pcsv3-rummy-deck {
        width: 92px;
      }

      #${instanceId} .pcsv3-products-panel {
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      #${instanceId} .pcsv3-product-card {
        padding: 7px;
        border-radius: 10px;
      }

      #${instanceId} .pcsv3-product-title {
        font-size: 12px;
        line-height: 1.3;
      }

      #${instanceId} .pcsv3-product-price {
        font-size: 11px;
      }

      #${instanceId} .pcsv3-cart-btn {
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
      }

      #${instanceId} .pcsv3-cart-btn svg {
        width: 14px;
        height: 14px;
      }
    }
  </style>

  <script>
    (function() {
      var root = document.getElementById('${escapeAttr(instanceId)}');
      var wrap = document.getElementById('${escapeAttr(wrapId)}');
      if (!root || !wrap) return;

      var collections = ${JSON.stringify(collections)};
      var activeIndex = 0;
      var triggers = root.querySelectorAll('[data-collection-trigger]');
      var deckCards = root.querySelectorAll('[data-deck-card]');
      var panels = root.querySelectorAll('[data-panel]');
      var mobileTabs = root.querySelectorAll('.pcsv3-mobile-tab');

      function updateDeck(index) {
        deckCards.forEach(function(card, i) {
          var relative = (i - index + collections.length) % collections.length;
          var visible = relative < 3;
          var x = relative * 8;
          var y = relative * 8;
          var rotate = relative === 0 ? -5 : relative === 1 ? 2 : 6;

          card.style.opacity = visible ? '1' : '0';
          card.style.zIndex = String(collections.length - relative);
          card.style.transform = 'translate(' + x + 'px, ' + y + 'px) rotate(' + rotate + 'deg)';
        });
      }

      function setActive(index) {
        activeIndex = index;

        panels.forEach(function(panel, i) {
          panel.classList.toggle('active', i === index);
        });

        root.querySelectorAll('.pcsv3-cs-name').forEach(function(item, i) {
          item.classList.toggle('active', i === index);
        });

        mobileTabs.forEach(function(tab, i) {
          tab.classList.toggle('active', i === index);
        });

        updateDeck(index);
      }

      triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
          var id = trigger.getAttribute('data-collection-trigger');
          var index = collections.findIndex(function(item) { return item.id === id; });
          if (index >= 0) setActive(index);
        });
      });

      function handleScroll() {
        if (window.innerWidth <= 991) return;
        var rect = wrap.getBoundingClientRect();
        var scrollable = Math.max(wrap.offsetHeight - window.innerHeight, 1);
        var progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
        var nextIndex = Math.min(collections.length - 1, Math.floor(progress * collections.length));
        if (nextIndex !== activeIndex) setActive(nextIndex);
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
      setActive(0);
      handleScroll();
    })();
  </script>
</section>
`;
}

export const productCardSliderV3Definition = {
  type: 'product-card-slider-v3',
  label: 'Product Card Slider V3',
  defaultConfig: {
    sectionBg: '#3f2316',
    cardBg: '#f3e7db',
    sectionRadius: '28px',
    collections: [
      {
        id: 'ready-to-wear',
        name: 'Ready to Wear',
        url: '/collections/ready-to-wear',
        heroImage: 'https://cdn.shopify.com/s/files/1/0000/0001/files/hero-1.jpg?v=1',
        products: [
          {
            id: 'rtw-1',
            title: 'Hazel Brown Shirt',
            price: '$120.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-1.jpg?v=1',
            url: '/products/hazel-brown-shirt',
            cartUrl: '/cart/add?id=11111111111111&quantity=1',
          },
          {
            id: 'rtw-2',
            title: 'Soft Tailored Jacket',
            price: '$160.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-2.jpg?v=1',
            url: '/products/soft-tailored-jacket',
            cartUrl: '/cart/add?id=11111111111112&quantity=1',
          },
          {
            id: 'rtw-3',
            title: 'Classic Cotton Set',
            price: '$98.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-3.jpg?v=1',
            url: '/products/classic-cotton-set',
            cartUrl: '/cart/add?id=11111111111113&quantity=1',
          },
          {
            id: 'rtw-4',
            title: 'Signature Pleated Dress',
            price: '$189.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/p-4.jpg?v=1',
            url: '/products/signature-pleated-dress',
            cartUrl: '/cart/add?id=11111111111114&quantity=1',
          },
        ],
      },
      {
        id: 'bags',
        name: 'Bags',
        url: '/collections/bags',
        heroImage: 'https://cdn.shopify.com/s/files/1/0000/0001/files/hero-2.jpg?v=1',
        products: [
          {
            id: 'bags-1',
            title: 'Leather Carry Tote',
            price: '$210.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-1.jpg?v=1',
            url: '/products/leather-carry-tote',
            cartUrl: '/cart/add?id=11111111111121&quantity=1',
          },
          {
            id: 'bags-2',
            title: 'Mini Saddle Bag',
            price: '$145.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-2.jpg?v=1',
            url: '/products/mini-saddle-bag',
            cartUrl: '/cart/add?id=11111111111122&quantity=1',
          },
          {
            id: 'bags-3',
            title: 'Canvas Market Bag',
            price: '$85.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-3.jpg?v=1',
            url: '/products/canvas-market-bag',
            cartUrl: '/cart/add?id=11111111111123&quantity=1',
          },
          {
            id: 'bags-4',
            title: 'Evening Chain Bag',
            price: '$175.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/b-4.jpg?v=1',
            url: '/products/evening-chain-bag',
            cartUrl: '/cart/add?id=11111111111124&quantity=1',
          },
        ],
      },
      {
        id: 'footwear',
        name: 'Footwear',
        url: '/collections/footwear',
        heroImage: 'https://cdn.shopify.com/s/files/1/0000/0001/files/hero-3.jpg?v=1',
        products: [
          {
            id: 'fw-1',
            title: 'Classic Mule Sandals',
            price: '$130.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-1.jpg?v=1',
            url: '/products/classic-mule-sandals',
            cartUrl: '/cart/add?id=11111111111131&quantity=1',
          },
          {
            id: 'fw-2',
            title: 'Soft Leather Flats',
            price: '$118.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-2.jpg?v=1',
            url: '/products/soft-leather-flats',
            cartUrl: '/cart/add?id=11111111111132&quantity=1',
          },
          {
            id: 'fw-3',
            title: 'Block Heel Sandals',
            price: '$142.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-3.jpg?v=1',
            url: '/products/block-heel-sandals',
            cartUrl: '/cart/add?id=11111111111133&quantity=1',
          },
          {
            id: 'fw-4',
            title: 'Everyday Suede Loafers',
            price: '$155.00',
            image: 'https://cdn.shopify.com/s/files/1/0000/0001/files/f-4.jpg?v=1',
            url: '/products/everyday-suede-loafers',
            cartUrl: '/cart/add?id=11111111111134&quantity=1',
          },
        ],
      },
    ],
  },
};

function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 5h2l2.2 9.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.4" fill="currentColor" />
      <circle cx="17" cy="19" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function ProductCardSliderV3(config) {
  const c = {
    ...productCardSliderV3Definition.defaultConfig,
    ...config,
  };

  const collections = useMemo(() => normalizeCollections(c.collections), [c.collections]);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth <= 991 || !wrapRef.current || !collections.length) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const scrollable = Math.max(wrapRef.current.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const nextIndex = Math.min(collections.length - 1, Math.floor(progress * collections.length));
      setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [collections]);

  if (!collections.length) return null;

  return (
    <>
      <style>{`
        .pcsv3-preview * { box-sizing: border-box; }

        .pcsv3-preview-wrap {
          position: relative;
        }

        .pcsv3-preview {
          background: ${c.sectionBg};
          border-radius: ${c.sectionRadius};
          padding: 28px;
          overflow: hidden;
        }

        .pcsv3-preview-inner {
          display: grid;
          grid-template-columns: minmax(200px, 240px) minmax(0, 1fr);
          gap: 28px;
          align-items: start;
        }

        .pcsv3-preview-left {
          min-width: 0;
        }

        .pcsv3-preview-headings {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pcsv3-preview-heading-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pcsv3-preview-heading {
          font-size: 32px;
          font-weight: 700;
          color: rgba(255,255,255,.35);
          cursor: pointer;
          line-height: 1.08;
          word-break: break-word;
        }

        .pcsv3-preview-heading.active {
          color: #fff;
        }

        .pcsv3-preview-shop {
          color: #fff;
          font-size: 12px;
          text-decoration: none;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.06);
          white-space: nowrap;
        }

        .pcsv3-preview-mobile-tabs {
          display: none;
        }

        .pcsv3-preview-deck {
          position: relative;
          width: 150px;
          aspect-ratio: 7 / 10;
          margin-top: 18px;
        }

        .pcsv3-preview-deck-card {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,.34);
          background: rgba(255,255,255,.08);
          transition: transform .35s ease, opacity .35s ease;
        }

        .pcsv3-preview-deck-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pcsv3-preview-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .pcsv3-product-card {
          background: ${c.cardBg};
          border-radius: 12px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
          overflow: hidden;
          min-width: 0;
        }

        .pcsv3-product-link {
          display: block;
          text-decoration: none;
        }

        .pcsv3-product-card img {
          width: 100%;
          aspect-ratio: 1 / 1.15;
          object-fit: cover;
          border-radius: 8px;
          display: block;
        }

        .pcsv3-cart-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border: 0;
          border-radius: 999px;
          background: rgba(255,255,255,.86);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #2c1a10;
        }

        .pcsv3-cart-btn svg {
          width: 18px;
          height: 18px;
        }

        .pcsv3-product-title {
          color: #2c1a10;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .pcsv3-product-price {
          color: #2c1a10;
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .pcsv3-preview {
            padding: 24px;
          }

          .pcsv3-preview-inner {
            grid-template-columns: 180px 1fr;
            gap: 20px;
          }

          .pcsv3-preview-heading {
            font-size: 26px;
          }

          .pcsv3-preview-deck {
            width: 128px;
          }
        }

        @media (max-width: 768px) {
          .pcsv3-preview {
            border-radius: 18px;
            padding: 18px;
          }

          .pcsv3-preview-inner {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .pcsv3-preview-headings {
            display: none;
          }

          .pcsv3-preview-mobile-tabs {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            scrollbar-width: none;
          }

          .pcsv3-preview-mobile-tabs::-webkit-scrollbar {
            display: none;
          }

          .pcsv3-preview-mobile-tab {
            flex: 0 0 auto;
            padding: 8px 12px;
            font-size: 12px;
            line-height: 1.2;
            border-radius: 999px;
            border: 1px solid rgba(255,255,255,.22);
            background: transparent;
            color: rgba(255,255,255,.68);
            cursor: pointer;
          }

          .pcsv3-preview-mobile-tab.active {
            background: rgba(255,255,255,.12);
            color: #fff;
          }

          .pcsv3-preview-deck {
            width: 104px;
            margin-top: 0;
          }

          .pcsv3-preview-grid {
            gap: 10px;
          }

          .pcsv3-cart-btn {
            width: 34px;
            height: 34px;
            top: 12px;
            right: 12px;
          }

          .pcsv3-cart-btn svg {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .pcsv3-preview {
            padding: 16px 12px;
            border-radius: 0;
          }

          .pcsv3-preview-grid {
            gap: 8px;
          }

          .pcsv3-product-card {
            padding: 7px;
          }

          .pcsv3-product-title {
            font-size: 12px;
          }

          .pcsv3-product-price {
            font-size: 11px;
          }

          .pcsv3-cart-btn {
            width: 30px;
            height: 30px;
            top: 10px;
            right: 10px;
          }

          .pcsv3-cart-btn svg {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>

      <section ref={wrapRef} className="pcsv3-preview-wrap">
        <div className="pcsv3-preview">
          <div className="pcsv3-preview-inner">
            <div className="pcsv3-preview-left">
              <div className="pcsv3-preview-headings">
                {collections.map((collection, index) => (
                  <div className="pcsv3-preview-heading-row" key={collection.id}>
                    <div
                      className={`pcsv3-preview-heading ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {collection.name}
                    </div>
                    <a className="pcsv3-preview-shop" href={collection.url}>
                      Shop now
                    </a>
                  </div>
                ))}
              </div>

              <div className="pcsv3-preview-mobile-tabs">
                {collections.map((collection, index) => (
                  <button
                    key={collection.id}
                    type="button"
                    className={`pcsv3-preview-mobile-tab ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {collection.name}
                  </button>
                ))}
              </div>

              <div className="pcsv3-preview-deck">
                {collections.map((collection, index) => {
                  const relative = (index - activeIndex + collections.length) % collections.length;
                  const visible = relative < 3;
                  const rotate = relative === 0 ? -5 : relative === 1 ? 2 : 6;

                  return (
                    <div
                      key={collection.id}
                      className="pcsv3-preview-deck-card"
                      style={{
                        transform: `translate(${relative * 8}px, ${relative * 8}px) rotate(${rotate}deg)`,
                        zIndex: collections.length - relative,
                        opacity: visible ? 1 : 0,
                      }}
                    >
                      <img
                        src={collection.heroImage || collection.products[0]?.image}
                        alt={collection.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pcsv3-preview-right">
              <div className="pcsv3-preview-grid">
                {collections[activeIndex]?.products?.map((product) => (
                  <article className="pcsv3-product-card" key={product.id}>
                    <button className="pcsv3-cart-btn" type="button" aria-label={`Add ${product.title} to cart`}>
                      <IconCart />
                    </button>
                    <a className="pcsv3-product-link" href={product.url}>
                      <img src={product.image} alt={product.title} />
                    </a>
                    <div className="pcsv3-product-title">{product.title}</div>
                    <div className="pcsv3-product-price">{product.price}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
