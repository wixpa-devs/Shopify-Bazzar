// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV3Code(config = {}) {
  const bgColor       = config.bgColor       || "#ffffff";
  const headingText   = config.headingText   || "Loved by our community";
  const headingColor  = config.headingColor  || "#0f172a";
  const subText       = config.subText       || "See what our customers are saying about our products";
  const subColor      = config.subColor      || "#6b7280";
  const cardBg        = config.cardBg        || "#f9f9f7";
  const starColor     = config.starColor     || "#fc9b2c";
  const textColor     = config.textColor     || "#111827";
  const quoteColor    = config.quoteColor    || "#374151";
  const mutedColor    = config.mutedColor    || "#6b7280";
  const dotActive     = config.dotActive     || "#111827";
  const dotInactive   = config.dotInactive   || "#d1d5db";

  const c1Stars       = config.c1Stars       || "★★★★★";
  const c1Title       = config.c1Title       || "Super Comfortable!";
  const c1Quote       = config.c1Quote       || "Wearing this set feels just like being at home – super comfy! No matter how much I move around, it never feels tight.";
  const c1Author      = config.c1Author      || "Anna";
  const c1ImgUrl      = config.c1ImgUrl      || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=90&q=80";
  const c1ImgAlt      = config.c1ImgAlt      || "Breezeflow midi jumpsuit dress";
  const c1ProductName = config.c1ProductName || "Breezeflow midi jumpsuit dress";
  const c1ProductUrl  = config.c1ProductUrl  || "#";
  const c1Price       = config.c1Price       || "$120.00";

  const c2Stars       = config.c2Stars       || "★★★★★";
  const c2Title       = config.c2Title       || "Cute & Practical";
  const c2Quote       = config.c2Quote       || "The fabric is super soft and absorbs sweat quickly, so I still feel fresh after workouts. My friends even said the outfit looks cute on me";
  const c2Author      = config.c2Author      || "May";
  const c2ImgUrl      = config.c2ImgUrl      || "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=90&q=80";
  const c2ImgAlt      = config.c2ImgAlt      || "Coral sports bra";
  const c2ProductName = config.c2ProductName || "Coral sports bra";
  const c2ProductUrl  = config.c2ProductUrl  || "#";
  const c2Price       = config.c2Price       || "$180.00";

  const c3Stars       = config.c3Stars       || "★★★★★";
  const c3Title       = config.c3Title       || "Sporty & Stylish";
  const c3Quote       = config.c3Quote       || "I wear this set to class then head straight to the gym, no outfit change. Comfy for workouts yet stylish enough for hanging out";
  const c3Author      = config.c3Author      || "Nicole";
  const c3ImgUrl      = config.c3ImgUrl      || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=90&q=80";
  const c3ImgAlt      = config.c3ImgAlt      || "Breeze active tank";
  const c3ProductName = config.c3ProductName || "Breeze active tank";
  const c3ProductUrl  = config.c3ProductUrl  || "#";
  const c3Price       = config.c3Price       || "$150.00";

  const c4Stars       = config.c4Stars       || "★★★★★";
  const c4Title       = config.c4Title       || "Breathable & Confident";
  const c4Quote       = config.c4Quote       || "Even after heavy cardio, the outfit stays breathable. Squats or planks? No worries about losing shape – still confident";
  const c4Author      = config.c4Author      || "Tramy";
  const c4ImgUrl      = config.c4ImgUrl      || "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=90&q=80";
  const c4ImgAlt      = config.c4ImgAlt      || "Enduro mesh top";
  const c4ProductName = config.c4ProductName || "Enduro mesh top";
  const c4ProductUrl  = config.c4ProductUrl  || "#";
  const c4Price       = config.c4Price       || "$180.00";

  const c5Stars       = config.c5Stars       || "★★★★★";
  const c5Title       = config.c5Title       || "Premium but Affordable";
  const c5Quote       = config.c5Quote       || "Great price for students yet really good quality. I bought one set and now I just want them in more colors too.";
  const c5Author      = config.c5Author      || "Hannah";
  const c5ImgUrl      = config.c5ImgUrl      || "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=90&q=80";
  const c5ImgAlt      = config.c5ImgAlt      || "Energy flow long tank";
  const c5ProductName = config.c5ProductName || "Energy flow long tank";
  const c5ProductUrl  = config.c5ProductUrl  || "#";
  const c5Price       = config.c5Price       || "$150.00";

  const c6Stars       = config.c6Stars       || "★★★★★";
  const c6Title       = config.c6Title       || "Chill While Running";
  const c6Quote       = config.c6Quote       || "This set makes me feel more confident. Lightweight, stretchy, and still super chill even after outdoor runs and workouts.";
  const c6Author      = config.c6Author      || "Vivian";
  const c6ImgUrl      = config.c6ImgUrl      || "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=90&q=80";
  const c6ImgAlt      = config.c6ImgAlt      || "Flexi bolero workout set";
  const c6ProductName = config.c6ProductName || "Flexi bolero workout set";
  const c6ProductUrl  = config.c6ProductUrl  || "#";
  const c6Price       = config.c6Price       || "$250.00";

  const quickViewText = config.quickViewText || "Quick view";

  return `<!-- Testimonials V3 — Product Review Slider | Shopify Bazzar -->
<style>
  .tv3 *, .tv3 *::before, .tv3 *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .tv3 {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
  }

  .tv3__section {
    padding: clamp(48px, 7vw, 100px) 0 clamp(48px, 6vw, 84px);
    background: ${bgColor};
    overflow: hidden;
  }

  .tv3__container {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 48px);
  }

  .tv3__header {
    text-align: center;
    margin-bottom: clamp(28px, 4vw, 48px);
  }

  .tv3__heading {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 700;
    color: ${headingColor};
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .tv3__sub {
    font-size: clamp(0.875rem, 1.3vw, 1rem);
    color: ${subColor};
    line-height: 1.6;
  }

  .tv3__slider-wrap {
    position: relative;
    overflow: hidden;
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
  }

  .tv3__slider-wrap:active { cursor: grabbing; }

  .tv3__track {
    display: flex;
    gap: clamp(14px, 1.8vw, 24px);
    transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  .tv3__card {
    flex: 0 0 calc(85% - 7px);
    min-width: 0;
    background: ${cardBg};
    border-radius: 14px;
    padding: clamp(18px, 2.2vw, 26px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 640px)  { .tv3__card { flex: 0 0 calc(50% - 12px); } }
  @media (min-width: 900px)  { .tv3__card { flex: 0 0 calc(33.333% - 16px); } }
  @media (min-width: 1150px) { .tv3__card { flex: 0 0 calc(25% - 18px); } }

  .tv3__stars {
    color: ${starColor};
    font-size: 0.9rem;
    letter-spacing: 2px;
    line-height: 1;
  }

  .tv3__rtitle {
    font-size: clamp(0.95rem, 1.2vw, 1.05rem);
    font-weight: 700;
    color: ${textColor};
    line-height: 1.3;
  }

  .tv3__quote {
    font-size: clamp(0.8rem, 1vw, 0.875rem);
    color: ${quoteColor};
    line-height: 1.7;
    flex: 1;
  }

  .tv3__author {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${textColor};
  }

  .tv3__author-icon {
    width: 16px;
    height: 16px;
    color: ${textColor};
    flex-shrink: 0;
  }

  .tv3__divider {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 2px 0;
  }

  .tv3__product {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tv3__product-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tv3__img-wrap {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: #e5e7eb;
  }

  .tv3__img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tv3__product-info {
    min-width: 0;
    flex: 1;
  }

  .tv3__product-name {
    display: block;
    font-size: 0.78rem;
    font-weight: 500;
    color: ${textColor};
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.35;
    transition: opacity 160ms;
  }

  .tv3__product-name:hover { opacity: 0.65; }

  .tv3__product-price {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${textColor};
    line-height: 1.4;
  }

  .tv3__qv {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.78rem;
    font-weight: 500;
    color: ${mutedColor};
    text-align: left;
    padding: 0;
    width: fit-content;
    position: relative;
    transition: color 160ms;
  }

  .tv3__qv::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 1px;
    background: currentColor;
    opacity: 0.4;
    transition: opacity 160ms;
  }

  .tv3__qv:hover { color: ${textColor}; }

  .tv3__qv:hover::after { opacity: 0.9; }

  .tv3__dots {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: clamp(20px, 3vw, 32px);
  }

  .tv3__dot {
    width: 28px;
    height: 3px;
    border-radius: 999px;
    background: ${dotInactive};
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 250ms, width 250ms;
  }

  .tv3__dot.active {
    background: ${dotActive};
    width: 44px;
  }
</style>

<div class="tv3">
<section class="tv3__section" id="tv3-section">
  <div class="tv3__container">

    <div class="tv3__header">
      <h2 class="tv3__heading">${headingText}</h2>
      <p class="tv3__sub">${subText}</p>
    </div>

    <div class="tv3__slider-wrap" id="tv3-wrap">
      <div class="tv3__track" id="tv3-track">

        <div class="tv3__card">
          <div class="tv3__stars">${c1Stars}</div>
          <h3 class="tv3__rtitle">${c1Title}</h3>
          <p class="tv3__quote">${c1Quote}</p>
          <div class="tv3__author">
            <svg class="tv3__author-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00066 14.6667C8.87629 14.6677 9.74351 14.4958 10.5525 14.1607C11.3615 13.8256 12.0963 13.3339 12.7147 12.714C13.3346 12.0956 13.8263 11.3608 14.1614 10.5518C14.4965 9.74286 14.6684 8.87564 14.6673 8C14.6684 7.12436 14.4965 6.25714 14.1614 5.44816C13.8263 4.63918 13.3346 3.90439 12.7147 3.286C12.0963 2.66605 11.3615 2.17441 10.5525 1.83931C9.74351 1.5042 8.87629 1.33225 8.00066 1.33333C7.12502 1.33225 6.2578 1.5042 5.44882 1.83931C4.63984 2.17441 3.90505 2.66605 3.28666 3.286C2.66671 3.90439 2.17506 4.63918 1.83996 5.44816C1.50486 6.25714 1.33291 7.12436 1.33399 8C1.33291 8.87564 1.50486 9.74286 1.83996 10.5518C2.17506 11.3608 2.66671 12.0956 3.28666 12.714C3.90505 13.3339 4.63984 13.8256 5.44882 14.1607C6.2578 14.4958 7.12502 14.6677 8.00066 14.6667Z" fill="currentColor"/><path d="M5.33398 8L7.33398 10L11.334 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${c1Author}
          </div>
          <hr class="tv3__divider"/>
          <div class="tv3__product">
            <div class="tv3__product-row">
              <div class="tv3__img-wrap"><img src="${c1ImgUrl}" alt="${c1ImgAlt}" loading="lazy"/></div>
              <div class="tv3__product-info">
                <a href="${c1ProductUrl}" class="tv3__product-name">${c1ProductName}</a>
                <div class="tv3__product-price">${c1Price}</div>
              </div>
            </div>
            <button class="tv3__qv">${quickViewText}</button>
          </div>
        </div>

        <div class="tv3__card">
          <div class="tv3__stars">${c2Stars}</div>
          <h3 class="tv3__rtitle">${c2Title}</h3>
          <p class="tv3__quote">${c2Quote}</p>
          <div class="tv3__author">
            <svg class="tv3__author-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00066 14.6667C8.87629 14.6677 9.74351 14.4958 10.5525 14.1607C11.3615 13.8256 12.0963 13.3339 12.7147 12.714C13.3346 12.0956 13.8263 11.3608 14.1614 10.5518C14.4965 9.74286 14.6684 8.87564 14.6673 8C14.6684 7.12436 14.4965 6.25714 14.1614 5.44816C13.8263 4.63918 13.3346 3.90439 12.7147 3.286C12.0963 2.66605 11.3615 2.17441 10.5525 1.83931C9.74351 1.5042 8.87629 1.33225 8.00066 1.33333C7.12502 1.33225 6.2578 1.5042 5.44882 1.83931C4.63984 2.17441 3.90505 2.66605 3.28666 3.286C2.66671 3.90439 2.17506 4.63918 1.83996 5.44816C1.50486 6.25714 1.33291 7.12436 1.33399 8C1.33291 8.87564 1.50486 9.74286 1.83996 10.5518C2.17506 11.3608 2.66671 12.0956 3.28666 12.714C3.90505 13.3339 4.63984 13.8256 5.44882 14.1607C6.2578 14.4958 7.12502 14.6677 8.00066 14.6667Z" fill="currentColor"/><path d="M5.33398 8L7.33398 10L11.334 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${c2Author}
          </div>
          <hr class="tv3__divider"/>
          <div class="tv3__product">
            <div class="tv3__product-row">
              <div class="tv3__img-wrap"><img src="${c2ImgUrl}" alt="${c2ImgAlt}" loading="lazy"/></div>
              <div class="tv3__product-info">
                <a href="${c2ProductUrl}" class="tv3__product-name">${c2ProductName}</a>
                <div class="tv3__product-price">${c2Price}</div>
              </div>
            </div>
            <button class="tv3__qv">${quickViewText}</button>
          </div>
        </div>

        <div class="tv3__card">
          <div class="tv3__stars">${c3Stars}</div>
          <h3 class="tv3__rtitle">${c3Title}</h3>
          <p class="tv3__quote">${c3Quote}</p>
          <div class="tv3__author">
            <svg class="tv3__author-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00066 14.6667C8.87629 14.6677 9.74351 14.4958 10.5525 14.1607C11.3615 13.8256 12.0963 13.3339 12.7147 12.714C13.3346 12.0956 13.8263 11.3608 14.1614 10.5518C14.4965 9.74286 14.6684 8.87564 14.6673 8C14.6684 7.12436 14.4965 6.25714 14.1614 5.44816C13.8263 4.63918 13.3346 3.90439 12.7147 3.286C12.0963 2.66605 11.3615 2.17441 10.5525 1.83931C9.74351 1.5042 8.87629 1.33225 8.00066 1.33333C7.12502 1.33225 6.2578 1.5042 5.44882 1.83931C4.63984 2.17441 3.90505 2.66605 3.28666 3.286C2.66671 3.90439 2.17506 4.63918 1.83996 5.44816C1.50486 6.25714 1.33291 7.12436 1.33399 8C1.33291 8.87564 1.50486 9.74286 1.83996 10.5518C2.17506 11.3608 2.66671 12.0956 3.28666 12.714C3.90505 13.3339 4.63984 13.8256 5.44882 14.1607C6.2578 14.4958 7.12502 14.6677 8.00066 14.6667Z" fill="currentColor"/><path d="M5.33398 8L7.33398 10L11.334 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${c3Author}
          </div>
          <hr class="tv3__divider"/>
          <div class="tv3__product">
            <div class="tv3__product-row">
              <div class="tv3__img-wrap"><img src="${c3ImgUrl}" alt="${c3ImgAlt}" loading="lazy"/></div>
              <div class="tv3__product-info">
                <a href="${c3ProductUrl}" class="tv3__product-name">${c3ProductName}</a>
                <div class="tv3__product-price">${c3Price}</div>
              </div>
            </div>
            <button class="tv3__qv">${quickViewText}</button>
          </div>
        </div>

        <div class="tv3__card">
          <div class="tv3__stars">${c4Stars}</div>
          <h3 class="tv3__rtitle">${c4Title}</h3>
          <p class="tv3__quote">${c4Quote}</p>
          <div class="tv3__author">
            <svg class="tv3__author-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00066 14.6667C8.87629 14.6677 9.74351 14.4958 10.5525 14.1607C11.3615 13.8256 12.0963 13.3339 12.7147 12.714C13.3346 12.0956 13.8263 11.3608 14.1614 10.5518C14.4965 9.74286 14.6684 8.87564 14.6673 8C14.6684 7.12436 14.4965 6.25714 14.1614 5.44816C13.8263 4.63918 13.3346 3.90439 12.7147 3.286C12.0963 2.66605 11.3615 2.17441 10.5525 1.83931C9.74351 1.5042 8.87629 1.33225 8.00066 1.33333C7.12502 1.33225 6.2578 1.5042 5.44882 1.83931C4.63984 2.17441 3.90505 2.66605 3.28666 3.286C2.66671 3.90439 2.17506 4.63918 1.83996 5.44816C1.50486 6.25714 1.33291 7.12436 1.33399 8C1.33291 8.87564 1.50486 9.74286 1.83996 10.5518C2.17506 11.3608 2.66671 12.0956 3.28666 12.714C3.90505 13.3339 4.63984 13.8256 5.44882 14.1607C6.2578 14.4958 7.12502 14.6677 8.00066 14.6667Z" fill="currentColor"/><path d="M5.33398 8L7.33398 10L11.334 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${c4Author}
          </div>
          <hr class="tv3__divider"/>
          <div class="tv3__product">
            <div class="tv3__product-row">
              <div class="tv3__img-wrap"><img src="${c4ImgUrl}" alt="${c4ImgAlt}" loading="lazy"/></div>
              <div class="tv3__product-info">
                <a href="${c4ProductUrl}" class="tv3__product-name">${c4ProductName}</a>
                <div class="tv3__product-price">${c4Price}</div>
              </div>
            </div>
            <button class="tv3__qv">${quickViewText}</button>
          </div>
        </div>

        <div class="tv3__card">
          <div class="tv3__stars">${c5Stars}</div>
          <h3 class="tv3__rtitle">${c5Title}</h3>
          <p class="tv3__quote">${c5Quote}</p>
          <div class="tv3__author">
            <svg class="tv3__author-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00066 14.6667C8.87629 14.6677 9.74351 14.4958 10.5525 14.1607C11.3615 13.8256 12.0963 13.3339 12.7147 12.714C13.3346 12.0956 13.8263 11.3608 14.1614 10.5518C14.4965 9.74286 14.6684 8.87564 14.6673 8C14.6684 7.12436 14.4965 6.25714 14.1614 5.44816C13.8263 4.63918 13.3346 3.90439 12.7147 3.286C12.0963 2.66605 11.3615 2.17441 10.5525 1.83931C9.74351 1.5042 8.87629 1.33225 8.00066 1.33333C7.12502 1.33225 6.2578 1.5042 5.44882 1.83931C4.63984 2.17441 3.90505 2.66605 3.28666 3.286C2.66671 3.90439 2.17506 4.63918 1.83996 5.44816C1.50486 6.25714 1.33291 7.12436 1.33399 8C1.33291 8.87564 1.50486 9.74286 1.83996 10.5518C2.17506 11.3608 2.66671 12.0956 3.28666 12.714C3.90505 13.3339 4.63984 13.8256 5.44882 14.1607C6.2578 14.4958 7.12502 14.6677 8.00066 14.6667Z" fill="currentColor"/><path d="M5.33398 8L7.33398 10L11.334 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${c5Author}
          </div>
          <hr class="tv3__divider"/>
          <div class="tv3__product">
            <div class="tv3__product-row">
              <div class="tv3__img-wrap"><img src="${c5ImgUrl}" alt="${c5ImgAlt}" loading="lazy"/></div>
              <div class="tv3__product-info">
                <a href="${c5ProductUrl}" class="tv3__product-name">${c5ProductName}</a>
                <div class="tv3__product-price">${c5Price}</div>
              </div>
            </div>
            <button class="tv3__qv">${quickViewText}</button>
          </div>
        </div>

        <div class="tv3__card">
          <div class="tv3__stars">${c6Stars}</div>
          <h3 class="tv3__rtitle">${c6Title}</h3>
          <p class="tv3__quote">${c6Quote}</p>
          <div class="tv3__author">
            <svg class="tv3__author-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00066 14.6667C8.87629 14.6677 9.74351 14.4958 10.5525 14.1607C11.3615 13.8256 12.0963 13.3339 12.7147 12.714C13.3346 12.0956 13.8263 11.3608 14.1614 10.5518C14.4965 9.74286 14.6684 8.87564 14.6673 8C14.6684 7.12436 14.4965 6.25714 14.1614 5.44816C13.8263 4.63918 13.3346 3.90439 12.7147 3.286C12.0963 2.66605 11.3615 2.17441 10.5525 1.83931C9.74351 1.5042 8.87629 1.33225 8.00066 1.33333C7.12502 1.33225 6.2578 1.5042 5.44882 1.83931C4.63984 2.17441 3.90505 2.66605 3.28666 3.286C2.66671 3.90439 2.17506 4.63918 1.83996 5.44816C1.50486 6.25714 1.33291 7.12436 1.33399 8C1.33291 8.87564 1.50486 9.74286 1.83996 10.5518C2.17506 11.3608 2.66671 12.0956 3.28666 12.714C3.90505 13.3339 4.63984 13.8256 5.44882 14.1607C6.2578 14.4958 7.12502 14.6677 8.00066 14.6667Z" fill="currentColor"/><path d="M5.33398 8L7.33398 10L11.334 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${c6Author}
          </div>
          <hr class="tv3__divider"/>
          <div class="tv3__product">
            <div class="tv3__product-row">
              <div class="tv3__img-wrap"><img src="${c6ImgUrl}" alt="${c6ImgAlt}" loading="lazy"/></div>
              <div class="tv3__product-info">
                <a href="${c6ProductUrl}" class="tv3__product-name">${c6ProductName}</a>
                <div class="tv3__product-price">${c6Price}</div>
              </div>
            </div>
            <button class="tv3__qv">${quickViewText}</button>
          </div>
        </div>

      </div>
    </div>

    <div class="tv3__dots" id="tv3-dots"></div>

  </div>
</section>
</div>

<script>
(function () {
  var wrap    = document.getElementById('tv3-wrap');
  var track   = document.getElementById('tv3-track');
  var dotsEl  = document.getElementById('tv3-dots');
  var cards   = Array.from(track.querySelectorAll('.tv3__card'));
  var total   = cards.length;
  var current = 0;
  var startX  = 0;
  var dragDx  = 0;
  var isDrag  = false;
  var autoTimer;

  function visibleCount() {
    var w = window.innerWidth;
    if (w >= 1150) return 4;
    if (w >= 900)  return 3;
    if (w >= 640)  return 2;
    return 1;
  }

  function maxIndex() { return Math.max(0, total - visibleCount()); }

  function gapPx() {
    var gap = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '20px';
    return parseFloat(gap) || 20;
  }

  function cardWidth() { return cards[0] ? cards[0].offsetWidth + gapPx() : 0; }

  function goTo(idx) {
    idx = Math.max(0, Math.min(idx, maxIndex()));
    current = idx;
    track.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
    track.style.transform  = 'translateX(-' + (current * cardWidth()) + 'px)';
    buildDots();
  }

  function buildDots() {
    var pages = maxIndex() + 1;
    if (pages <= 1) { dotsEl.innerHTML = ''; return; }
    if (dotsEl.children.length !== pages) {
      dotsEl.innerHTML = '';
      for (var i = 0; i < pages; i++) {
        (function (idx) {
          var btn = document.createElement('button');
          btn.className = 'tv3__dot' + (idx === current ? ' active' : '');
          btn.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
          btn.addEventListener('click', function () { goTo(idx); resetAuto(); });
          dotsEl.appendChild(btn);
        })(i);
      }
    } else {
      Array.from(dotsEl.children).forEach(function (d, i) {
        d.className = 'tv3__dot' + (i === current ? ' active' : '');
      });
    }
  }

  function startAuto() {
    autoTimer = setInterval(function () {
      goTo(current >= maxIndex() ? 0 : current + 1);
    }, 5000);
  }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  wrap.addEventListener('mousedown', function (e) {
    isDrag = true; startX = e.clientX; dragDx = 0;
    track.style.transition = 'none';
  });
  document.addEventListener('mousemove', function (e) {
    if (!isDrag) return;
    dragDx = e.clientX - startX;
    track.style.transform = 'translateX(' + (-current * cardWidth() + dragDx) + 'px)';
  });
  document.addEventListener('mouseup', function () {
    if (!isDrag) return;
    isDrag = false;
    if (dragDx < -60)      goTo(current + 1);
    else if (dragDx > 60)  goTo(current - 1);
    else                   goTo(current);
    dragDx = 0;
    resetAuto();
  });

  wrap.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  wrap.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (dx < -50)      goTo(current + 1);
    else if (dx > 50)  goTo(current - 1);
    resetAuto();
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      goTo(Math.min(current, maxIndex()));
    }, 120);
  });

  goTo(0);
  startAuto();
})();
</script>
  `;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV3({ config }) {
  return null;
}