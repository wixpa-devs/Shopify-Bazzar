export function getCollectionSliderV10Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const textColor = config.textColor || "#1a1a1a";
  const headingText = config.headingText || "Top selling collections";
  const viewAllLabel = config.viewAllLabel || "View all collections";
  const viewAllUrl = config.viewAllUrl || "/collections";
  const itemBg = config.itemBg || "#f5f5f5";

  const items = [
    {
      label: config.col1Label || "Homewear",
      url: config.col1Url || "/collections/homewear",
      img: config.col1Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/Group_2159.jpg?crop=center&height=240&v=1690368697&width=240"
    },
    {
      label: config.col2Label || "Beauty Sleep",
      url: config.col2Url || "/collections/beauty-sleep",
      img: config.col2Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/beauty.png?crop=center&height=240&v=1752747790&width=240"
    },
    {
      label: config.col3Label || "Dog toys",
      url: config.col3Url || "/collections/dog-toys",
      img: config.col3Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/Group_2164.jpg?crop=center&height=240&v=1690368431&width=240"
    },
    {
      label: config.col4Label || "Headphones",
      url: config.col4Url || "/collections/headphones",
      img: config.col4Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/electronics_9a9aa821-7282-43f6-8932-e4aed4497914.png?crop=center&height=240&v=1752748094&width=240"
    },
    {
      label: config.col5Label || "Plant terrariums",
      url: config.col5Url || "/collections/plant-terrariums",
      img: config.col5Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/Group_2160.jpg?crop=center&height=240&v=1690376729&width=240"
    },
    {
      label: config.col6Label || "Desk",
      url: config.col6Url || "/collections/desk",
      img: config.col6Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/Group_2166.jpg?crop=center&height=240&v=1690378053&width=240"
    },
    {
      label: config.col7Label || "Socks",
      url: config.col7Url || "/collections/socks",
      img: config.col7Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/Group_2161.jpg?crop=center&height=240&v=1690378962&width=240"
    },
    {
      label: config.col8Label || "Candles",
      url: config.col8Url || "/collections/dinercandles",
      img: config.col8Img || "https://xtra-warehouse.myshopify.com/cdn/shop/collections/Group_2163.jpg?crop=center&height=240&v=1690378905&width=240"
    }
  ];

  const desktopItems = items.map(item => `
    <li class="cs10-item">
      <figure class="cs10-figure">
        <img src="${item.img}" alt="${item.label}" loading="lazy" width="240" height="240" />
      </figure>
      <p class="cs10-title">
        <a href="${item.url}">${item.label} <span class="cs10-chevron">&#8250;</span></a>
      </p>
    </li>
  `).join("");

  const mobileItems = items.map(item => `
    <li class="cs10-item">
      <figure class="cs10-figure">
        <img src="${item.img}" alt="${item.label}" loading="lazy" width="240" height="240" />
      </figure>
      <p class="cs10-title">
        <a href="${item.url}">${item.label}</a>
      </p>
    </li>
  `).join("");

  return `
<section class="cs10-slider-section">
  <style>
    .cs10-slider-section {
      width: 100%;
      background: ${bgColor};
      color: ${textColor};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .cs10-slider-section,
    .cs10-slider-section * {
      box-sizing: border-box;
    }

    .cs10-slider-wrap {
      max-width: 1280px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .cs10-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }

    .cs10-heading {
      margin: 0;
      font-size: clamp(1.1rem, 1rem + 0.75vw, 1.5rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      color: ${textColor};
    }

    .cs10-view-all {
      font-size: 0.82rem;
      color: ${textColor};
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .cs10-view-all:hover {
      text-decoration: underline;
    }

    .cs10-grid,
    .cs10-carousel {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .cs10-grid {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 12px;
    }

    .cs10-carousel-holder {
      display: none;
      position: relative;
    }

    .cs10-item {
      min-width: 0;
    }

    .cs10-figure {
      width: 100%;
      margin: 0;
      aspect-ratio: 1 / 1;
      border-radius: 12px;
      overflow: hidden;
      background: ${itemBg};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: box-shadow 0.25s ease;
    }

    .cs10-item:hover .cs10-figure {
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    }

    .cs10-figure img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      mix-blend-mode: multiply;
      transition: transform 0.3s ease;
    }

    .cs10-item:hover .cs10-figure img {
      transform: scale(1.06);
    }

    .cs10-title {
      margin: 8px 0 0;
      font-size: 0.72rem;
      font-weight: 600;
      text-align: center;
      line-height: 1.3;
    }

    .cs10-title a {
      color: ${textColor};
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }

    .cs10-title a:hover {
      text-decoration: underline;
    }

    .cs10-chevron {
      font-size: 0.65rem;
      opacity: 0.55;
      display: inline;
    }

    .cs10-mobile-view-all {
      display: none;
      margin-top: 14px;
      text-align: center;
    }

    .cs10-mobile-view-all a {
      font-size: 0.85rem;
      font-weight: 600;
      color: ${textColor};
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .cs10-mobile-view-all a:hover {
      text-decoration: underline;
    }

    @media (min-width: 761px) and (max-width: 1024px) {
      .cs10-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    @media (max-width: 760px) {
      .cs10-slider-wrap {
        padding: 32px 16px;
      }

      .cs10-view-all {
        display: none;
      }

      .cs10-grid {
        display: none;
      }

      .cs10-carousel-holder {
        display: block;
      }

      .cs10-carousel {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        touch-action: pan-x;
        padding: 0 0 8px;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .cs10-carousel::-webkit-scrollbar {
        display: none;
      }

      .cs10-carousel .cs10-item {
        flex: 0 0 110px;
        width: 110px;
        min-width: 110px;
        max-width: 110px;
        scroll-snap-align: start;
      }

      .cs10-carousel .cs10-figure {
        border-radius: 10px;
      }

      .cs10-title {
        font-size: 0.7rem;
      }

      .cs10-chevron {
        display: none;
      }

      .cs10-carousel-holder::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 36px;
        height: calc(100% - 8px);
        background: linear-gradient(to right, rgba(255,255,255,0), ${bgColor});
        pointer-events: none;
      }

      .cs10-mobile-view-all {
        display: block;
      }
    }

    @media (max-width: 480px) {
      .cs10-slider-wrap {
        padding: 28px 14px;
      }

      .cs10-carousel {
        gap: 8px;
      }

      .cs10-carousel .cs10-item {
        flex-basis: 98px;
        width: 98px;
        min-width: 98px;
        max-width: 98px;
      }

      .cs10-title {
        font-size: 0.68rem;
      }
    }
  </style>

  <div class="cs10-slider-wrap">
    <div class="cs10-header">
      <h2 class="cs10-heading">${headingText}</h2>
      <a href="${viewAllUrl}" class="cs10-view-all">${viewAllLabel} <span>&#8250;</span></a>
    </div>

    <ul class="cs10-grid">
      ${desktopItems}
    </ul>

    <div class="cs10-carousel-holder">
      <ul class="cs10-carousel" role="list">
        ${mobileItems}
      </ul>
    </div>

    <p class="cs10-mobile-view-all">
      <a href="${viewAllUrl}">${viewAllLabel} &#8250;</a>
    </p>
  </div>

  <script>
    (function () {
      var root = document.currentScript.closest('.cs10-slider-section');
      if (!root) return;

      var carousel = root.querySelector('.cs10-carousel');
      if (!carousel) return;

      carousel.style.scrollBehavior = 'smooth';
    })();
  </script>
</section>`;
}

export default function CollectionSliderV10({ config }) {
  return null;
}