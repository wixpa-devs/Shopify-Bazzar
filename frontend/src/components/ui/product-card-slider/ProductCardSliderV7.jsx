export function getProductCardSliderV7Code(config = {}) {
  const sectionBg        = config.sectionBg        || "#ffffff";
  const headingText      = config.headingText       || "New Arrivals";
  const headingColor     = config.headingColor      || "#111111";
  const subheadingText   = config.subheadingText    || "Traditional divides between personal and professional space.";
  const subheadingColor  = config.subheadingColor   || "#888888";
  const tab1Label        = config.tab1Label         || "New Arrivals";
  const tab2Label        = config.tab2Label         || "Hot Items";
  const activeTabColor   = config.activeTabColor    || "#111111";
  const saleBadgeBg      = config.saleBadgeBg       || "#ee0033";
  const newBadgeBg       = config.newBadgeBg        || "#111111";
  const saleColor        = config.saleColor         || "#ee0033";
  const progressBarColor = config.progressBarColor  || "#111111";

  // Promo Banner — Tab 1
  const promo1Img        = config.promo1Img         || "https://picsum.photos/seed/promobanner1/520/784";
  const promo1Sub        = config.promo1Sub         || "Promotion";
  const promo1Heading    = config.promo1Heading     || "Soft Stools Design";
  const promo1Btn        = config.promo1Btn         || "Shop now";
  const promo1Url        = config.promo1Url         || "#";

  // Tab 1 Products (7 cards)
  const p1Type    = config.p1Type    || "Chairs";
  const p1Title   = config.p1Title   || "Cross Chair Heritage";
  const p1Price   = config.p1Price   || "$589.00";
  const p1Was     = config.p1Was     || "$600.00";
  const p1Sale    = config.p1Sale    || "true";
  const p1Img1    = config.p1Img1    || "https://picsum.photos/seed/chair1a/535/535";
  const p1Img2    = config.p1Img2    || "https://picsum.photos/seed/chair1b/535/535";

  const p2Type    = config.p2Type    || "Sofas";
  const p2Title   = config.p2Title   || "Ray Sofa Basic";
  const p2Price   = config.p2Price   || "$3,289.00";
  const p2Was     = config.p2Was     || "";
  const p2Img1    = config.p2Img1    || "https://picsum.photos/seed/sofa2a/535/535";
  const p2Img2    = config.p2Img2    || "https://picsum.photos/seed/sofa2b/535/535";

  const p3Type    = config.p3Type    || "Chairs";
  const p3Title   = config.p3Title   || "Turn Chair Vivid";
  const p3Price   = config.p3Price   || "$309.00";
  const p3Was     = config.p3Was     || "";
  const p3Img1    = config.p3Img1    || "https://picsum.photos/seed/chair3a/535/535";
  const p3Img2    = config.p3Img2    || "https://picsum.photos/seed/chair3b/535/535";

  const p4Type    = config.p4Type    || "Sofa";
  const p4Title   = config.p4Title   || "Loop Sofa Armrest";
  const p4Price   = config.p4Price   || "$3,289.00";
  const p4Was     = config.p4Was     || "$3,369.00";
  const p4Sale    = config.p4Sale    || "true";
  const p4Img1    = config.p4Img1    || "https://picsum.photos/seed/sofa4a/535/535";
  const p4Img2    = config.p4Img2    || "https://picsum.photos/seed/sofa4b/535/535";

  const p5Type    = config.p5Type    || "Chairs";
  const p5Title   = config.p5Title   || "Flex Chair White";
  const p5Price   = config.p5Price   || "$459.00";
  const p5Was     = config.p5Was     || "";
  const p5Img1    = config.p5Img1    || "https://picsum.photos/seed/chair5a/535/535";
  const p5Img2    = config.p5Img2    || "https://picsum.photos/seed/chair5b/535/535";

  const p6Type    = config.p6Type    || "Lighting";
  const p6Title   = config.p6Title   || "Arc Floor Lamp";
  const p6Price   = config.p6Price   || "$749.00";
  const p6Was     = config.p6Was     || "";
  const p6New     = config.p6New     || "true";
  const p6Img1    = config.p6Img1    || "https://picsum.photos/seed/lamp6a/535/535";
  const p6Img2    = config.p6Img2    || "https://picsum.photos/seed/lamp6b/535/535";

  const p7Type    = config.p7Type    || "Tables";
  const p7Title   = config.p7Title   || "Nest Coffee Table";
  const p7Price   = config.p7Price   || "$899.00";
  const p7Was     = config.p7Was     || "$1,099.00";
  const p7Sale    = config.p7Sale    || "true";
  const p7Img1    = config.p7Img1    || "https://picsum.photos/seed/table7a/535/535";
  const p7Img2    = config.p7Img2    || "https://picsum.photos/seed/table7b/535/535";

  // Promo Banner — Tab 2
  const promo2Img     = config.promo2Img     || "https://picsum.photos/seed/promobanner2/520/784";
  const promo2Sub     = config.promo2Sub     || "Hot Deal";
  const promo2Heading = config.promo2Heading || "Summer Sale 2025";
  const promo2Btn     = config.promo2Btn     || "Shop sale";
  const promo2Url     = config.promo2Url     || "#";

  // Tab 2 Products (5 cards — reuse same keys for simplicity, different defaults)
  const h1Type  = config.h1Type  || "Sofa";
  const h1Title = config.h1Title || "Loop Sofa Armrest";
  const h1Price = config.h1Price || "$3,289.00";
  const h1Was   = config.h1Was   || "$3,369.00";
  const h1Sale  = config.h1Sale  || "true";
  const h1Img1  = config.h1Img1  || "https://picsum.photos/seed/sofa4a/535/535";
  const h1Img2  = config.h1Img2  || "https://picsum.photos/seed/sofa4b/535/535";

  const h2Type  = config.h2Type  || "Chairs";
  const h2Title = config.h2Title || "Turn Chair Vivid";
  const h2Price = config.h2Price || "$309.00";
  const h2Was   = config.h2Was   || "";
  const h2Img1  = config.h2Img1  || "https://picsum.photos/seed/chair3a/535/535";
  const h2Img2  = config.h2Img2  || "https://picsum.photos/seed/chair3b/535/535";

  const h3Type  = config.h3Type  || "Sofas";
  const h3Title = config.h3Title || "Ray Sofa Basic";
  const h3Price = config.h3Price || "$3,289.00";
  const h3Was   = config.h3Was   || "";
  const h3Img1  = config.h3Img1  || "https://picsum.photos/seed/sofa2a/535/535";
  const h3Img2  = config.h3Img2  || "https://picsum.photos/seed/sofa2b/535/535";

  const h4Type  = config.h4Type  || "Chairs";
  const h4Title = config.h4Title || "Cross Chair Heritage";
  const h4Price = config.h4Price || "$589.00";
  const h4Was   = config.h4Was   || "$600.00";
  const h4Sale  = config.h4Sale  || "true";
  const h4Img1  = config.h4Img1  || "https://picsum.photos/seed/chair1a/535/535";
  const h4Img2  = config.h4Img2  || "https://picsum.photos/seed/chair1b/535/535";

  const h5Type  = config.h5Type  || "Tables";
  const h5Title = config.h5Title || "Nest Coffee Table";
  const h5Price = config.h5Price || "$899.00";
  const h5Was   = config.h5Was   || "$1,099.00";
  const h5Sale  = config.h5Sale  || "true";
  const h5Img1  = config.h5Img1  || "https://picsum.photos/seed/table7a/535/535";
  const h5Img2  = config.h5Img2  || "https://picsum.photos/seed/table7b/535/535";

  return `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    color: #1a1a1a;
    background: ${sectionBg};
    -webkit-font-smoothing: antialiased;
  }

  .featured-collection-section {
    padding: 40px 0 32px;
    background: ${sectionBg};
  }
  .page-width {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .section__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 24px;
  }
  .section__header--text h2 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 6px;
    color: ${headingColor};
  }
  .section__header--text p {
    font-size: 13px;
    color: ${subheadingColor};
    line-height: 1.5;
  }

  .tabs-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0;
  }
  .tabs__btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #888;
    padding: 6px 14px;
    position: relative;
    transition: color 0.2s;
    font-family: inherit;
    border-bottom: 2px solid transparent;
  }
  .tabs__btn.active {
    color: ${activeTabColor};
    border-bottom: 2px solid ${activeTabColor};
  }
  .tabs__btn:hover:not(.active) { color: #444; }

  .slider-outer { position: relative; }

  .products-slider {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    cursor: grab;
    padding-bottom: 24px;
  }
  .products-slider::-webkit-scrollbar { display: none; }
  .products-slider.is-dragging { cursor: grabbing; }

  .slider-progress {
    height: 2px;
    background: #e5e5e5;
    border-radius: 2px;
    margin-top: 0;
    position: relative;
    overflow: hidden;
  }
  .slider-progress__bar {
    height: 100%;
    background: ${progressBarColor};
    border-radius: 2px;
    transition: width 0.3s ease;
    width: 60%;
  }

  .slider-nav-btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
  }
  .slider-nav-btn {
    width: 36px; height: 36px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: background 0.18s, border-color 0.18s;
    font-family: inherit;
  }
  .slider-nav-btn:hover { background: #f5f5f5; border-color: #bbb; }
  .slider-nav-btn:disabled { opacity: 0.35; cursor: default; }
  .slider-nav-btn svg { display: block; }

  .f-column {
    flex: 0 0 calc(20% - 16px);
    min-width: 200px;
    scroll-snap-align: start;
  }

  .card-media--promo {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    aspect-ratio: 1/1.35;
    background: #2a2a2a;
    display: block;
    text-decoration: none;
    color: #fff;
  }
  .card-media--promo img {
    position: absolute;
    inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .card-media--promo .bg-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.22);
    z-index: 1;
  }
  .card-media__content {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px 18px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .card-media__subheading {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.85);
  }
  .card-media__heading {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 4px;
  }
  .btn--promo {
    display: inline-block;
    background: #fff;
    color: #111;
    border: none;
    border-radius: 4px;
    padding: 9px 18px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.18s;
    margin-top: 4px;
  }
  .btn--promo:hover { background: #f0f0f0; }

  .product-card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .product-card__image-wrapper {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    background: #f5f5f5;
    aspect-ratio: 1/1;
  }
  .product-card__image-wrapper a { display: block; height: 100%; }

  .product-card__image {
    position: absolute;
    inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    transition: opacity 0.35s ease;
  }
  .product-card__image--second { opacity: 0; }
  .product-card__image-wrapper:hover .product-card__image--second { opacity: 1; }
  .product-card__image-wrapper:hover .product-card__image--main { opacity: 0; }

  .product-card__badge {
    position: absolute;
    top: 10px; left: 10px;
    z-index: 3;
  }
  .f-badge {
    display: inline-block;
    padding: 3px 8px;
    font-size: 11px;
    font-weight: 700;
    border-radius: 2px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .f-badge--sale { background: ${saleBadgeBg}; color: #fff; }
  .f-badge--new  { background: ${newBadgeBg};  color: #fff; }

  .product-card__actions {
    position: absolute;
    bottom: 10px; left: 10px; right: 10px;
    z-index: 4;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.22s ease, transform 0.22s ease;
  }
  .product-card__image-wrapper:hover .product-card__actions {
    opacity: 1;
    transform: translateY(0);
  }
  .btn--white {
    width: 100%;
    background: #fff;
    color: #111;
    border: none;
    border-radius: 4px;
    padding: 9px 14px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.18s;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }
  .btn--white:hover { background: #f5f5f5; }
  .btn--white svg { flex-shrink: 0; }

  .product-card__info {
    padding: 12px 2px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .product-card__type {
    font-size: 11px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 500;
  }
  .product-card__type a { color: inherit; text-decoration: none; }
  .product-card__type a:hover { color: #555; }

  .product-card__title {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.35;
    color: ${headingColor};
  }
  .product-card__title a { color: inherit; text-decoration: none; }
  .product-card__title a:hover { text-decoration: underline; }

  .f-price {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 2px;
  }
  .f-price-item--regular {
    font-size: 14px;
    font-weight: 600;
    color: #111;
  }
  .f-price--on-sale .f-price-item--sale {
    font-size: 14px;
    font-weight: 700;
    color: ${saleColor};
  }
  .f-price--on-sale .f-price-item--was {
    font-size: 13px;
    color: #aaa;
    text-decoration: line-through;
    font-weight: 400;
  }

  .product-card__swatches {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    list-style: none;
    margin-top: 6px;
  }
  .swatch-color {
    display: block;
    width: 16px; height: 16px;
    border-radius: 2px;
    border: 1.5px solid transparent;
    background: var(--swatch-background, #ccc);
    position: relative;
    cursor: pointer;
    transition: border-color 0.15s, transform 0.15s;
  }
  .swatch-color:hover,
  .swatch-color.active {
    border-color: #111;
    transform: scale(1.15);
  }
  .swatch-color .tooltip {
    display: none;
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    background: #111;
    color: #fff;
    font-size: 11px;
    white-space: nowrap;
    padding: 3px 7px;
    border-radius: 3px;
    pointer-events: none;
    z-index: 10;
  }
  .swatch-color:hover .tooltip { display: block; }

  .tabs__panel { display: none; }
  .tabs__panel.active { display: block; }

  @media (max-width: 1100px) {
    .f-column { flex: 0 0 calc(25% - 15px); }
  }
  @media (max-width: 768px) {
    .f-column { flex: 0 0 calc(33.333% - 14px); }
    .page-width { padding: 0 20px; }
    .section__header--text h2 { font-size: 22px; }
    .section__header { align-items: flex-start; flex-direction: column; }
  }
  @media (max-width: 560px) {
    .f-column { flex: 0 0 calc(50% - 10px); min-width: 150px; }
  }
</style>

<section class="featured-collection-section">
  <div class="page-width">

    <div class="section__header">
      <div class="section__header--text">
        <h2>${headingText}</h2>
        <p>${subheadingText}</p>
      </div>
      <div class="tabs-nav" role="tablist">
        <button class="tabs__btn active" role="tab" data-tab="0">${tab1Label}</button>
        <button class="tabs__btn" role="tab" data-tab="1">${tab2Label}</button>
      </div>
    </div>

    <!-- TAB 0: NEW ARRIVALS -->
    <div class="tabs__panel active" data-panel="0">
      <div class="slider-outer">
        <div class="products-slider" id="slider-tab0">

          <!-- Promo Banner -->
          <div class="f-column">
            <a href="${promo1Url}" class="card-media--promo">
              <img src="${promo1Img}" alt="${promo1Heading}" width="520" height="784" loading="lazy">
              <div class="bg-overlay"></div>
              <div class="card-media__content">
                <span class="card-media__subheading">${promo1Sub}</span>
                <h3 class="card-media__heading">${promo1Heading}</h3>
                <button class="btn--promo">${promo1Btn}</button>
              </div>
            </a>
          </div>

          <!-- Product 1 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p1Title}">
                  <img class="product-card__image product-card__image--main" src="${p1Img1}" alt="${p1Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p1Img2}" alt="${p1Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${p1Sale === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--sale">Sale</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p1Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p1Title}</a></h3>
                ${p1Sale === "true" && p1Was ? `<div class="f-price f-price--on-sale"><span class="f-price-item f-price-item--sale">${p1Price}</span><span class="f-price-item f-price-item--was"><s>${p1Was}</s></span></div>` : `<div class="f-price"><span class="f-price-item f-price-item--regular">${p1Price}</span></div>`}
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#d7c8b9" href="#" title="Light Beige"><span class="tooltip">Light Beige</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#573a19" href="#" title="Chocolate"><span class="tooltip">Chocolate</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p2Title}">
                  <img class="product-card__image product-card__image--main" src="${p2Img1}" alt="${p2Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p2Img2}" alt="${p2Title} alternate" width="535" height="535" loading="lazy">
                </a>
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p2Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p2Title}</a></h3>
                <div class="f-price"><span class="f-price-item f-price-item--regular">${p2Price}</span></div>
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#e3e3e3" href="#" title="Grey"><span class="tooltip">Grey</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#cedbba" href="#" title="Soft Green"><span class="tooltip">Soft Green</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p3Title}">
                  <img class="product-card__image product-card__image--main" src="${p3Img1}" alt="${p3Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p3Img2}" alt="${p3Title} alternate" width="535" height="535" loading="lazy">
                </a>
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p3Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p3Title}</a></h3>
                <div class="f-price"><span class="f-price-item f-price-item--regular">${p3Price}</span></div>
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#c0392b" href="#" title="Red"><span class="tooltip">Red</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#4a7c59" href="#" title="Green"><span class="tooltip">Green</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#d4a843" href="#" title="Yellow"><span class="tooltip">Yellow</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 4 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p4Title}">
                  <img class="product-card__image product-card__image--main" src="${p4Img1}" alt="${p4Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p4Img2}" alt="${p4Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${p4Sale === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--sale">Sale</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p4Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p4Title}</a></h3>
                ${p4Sale === "true" && p4Was ? `<div class="f-price f-price--on-sale"><span class="f-price-item f-price-item--sale">${p4Price}</span><span class="f-price-item f-price-item--was"><s>${p4Was}</s></span></div>` : `<div class="f-price"><span class="f-price-item f-price-item--regular">${p4Price}</span></div>`}
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#b0bec5" href="#" title="Light Blue Grey"><span class="tooltip">Light Blue Grey</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#78909c" href="#" title="Steel Blue"><span class="tooltip">Steel Blue</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#212121" href="#" title="Black"><span class="tooltip">Black</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 5 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p5Title}">
                  <img class="product-card__image product-card__image--main" src="${p5Img1}" alt="${p5Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p5Img2}" alt="${p5Title} alternate" width="535" height="535" loading="lazy">
                </a>
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p5Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p5Title}</a></h3>
                <div class="f-price"><span class="f-price-item f-price-item--regular">${p5Price}</span></div>
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#f5f5f5;border:1px solid #ddd" href="#" title="White"><span class="tooltip">White</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#3e2723" href="#" title="Dark Brown"><span class="tooltip">Dark Brown</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 6 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p6Title}">
                  <img class="product-card__image product-card__image--main" src="${p6Img1}" alt="${p6Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p6Img2}" alt="${p6Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${p6New === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--new">New</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p6Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p6Title}</a></h3>
                <div class="f-price"><span class="f-price-item f-price-item--regular">${p6Price}</span></div>
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#f0d080" href="#" title="Brass"><span class="tooltip">Brass</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#888" href="#" title="Chrome"><span class="tooltip">Chrome</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product 7 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${p7Title}">
                  <img class="product-card__image product-card__image--main" src="${p7Img1}" alt="${p7Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${p7Img2}" alt="${p7Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${p7Sale === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--sale">Sale</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${p7Type}</a></p>
                <h3 class="product-card__title"><a href="#">${p7Title}</a></h3>
                ${p7Sale === "true" && p7Was ? `<div class="f-price f-price--on-sale"><span class="f-price-item f-price-item--sale">${p7Price}</span><span class="f-price-item f-price-item--was"><s>${p7Was}</s></span></div>` : `<div class="f-price"><span class="f-price-item f-price-item--regular">${p7Price}</span></div>`}
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#8d6e63" href="#" title="Walnut"><span class="tooltip">Walnut</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#f5f5f5;border:1px solid #ddd" href="#" title="White Oak"><span class="tooltip">White Oak</span></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div class="slider-progress"><div class="slider-progress__bar" id="progress-tab0"></div></div>
        <div class="slider-nav-btns">
          <button class="slider-nav-btn" id="prev-tab0" aria-label="Previous" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button class="slider-nav-btn" id="next-tab0" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- TAB 1: HOT ITEMS -->
    <div class="tabs__panel" data-panel="1">
      <div class="slider-outer">
        <div class="products-slider" id="slider-tab1">

          <!-- Promo Banner -->
          <div class="f-column">
            <a href="${promo2Url}" class="card-media--promo" style="background:#1a1a2e">
              <img src="${promo2Img}" alt="${promo2Heading}" width="520" height="784" loading="lazy">
              <div class="bg-overlay"></div>
              <div class="card-media__content">
                <span class="card-media__subheading">${promo2Sub}</span>
                <h3 class="card-media__heading">${promo2Heading}</h3>
                <button class="btn--promo">${promo2Btn}</button>
              </div>
            </a>
          </div>

          <!-- Hot 1 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${h1Title}">
                  <img class="product-card__image product-card__image--main" src="${h1Img1}" alt="${h1Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${h1Img2}" alt="${h1Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${h1Sale === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--sale">Sale</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${h1Type}</a></p>
                <h3 class="product-card__title"><a href="#">${h1Title}</a></h3>
                ${h1Sale === "true" && h1Was ? `<div class="f-price f-price--on-sale"><span class="f-price-item f-price-item--sale">${h1Price}</span><span class="f-price-item f-price-item--was"><s>${h1Was}</s></span></div>` : `<div class="f-price"><span class="f-price-item f-price-item--regular">${h1Price}</span></div>`}
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#b0bec5" href="#" title="Grey"><span class="tooltip">Grey</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#212121" href="#" title="Black"><span class="tooltip">Black</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Hot 2 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${h2Title}">
                  <img class="product-card__image product-card__image--main" src="${h2Img1}" alt="${h2Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${h2Img2}" alt="${h2Title} alternate" width="535" height="535" loading="lazy">
                </a>
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${h2Type}</a></p>
                <h3 class="product-card__title"><a href="#">${h2Title}</a></h3>
                <div class="f-price"><span class="f-price-item f-price-item--regular">${h2Price}</span></div>
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#c0392b" href="#" title="Red"><span class="tooltip">Red</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#4a7c59" href="#" title="Green"><span class="tooltip">Green</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#d4a843" href="#" title="Yellow"><span class="tooltip">Yellow</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Hot 3 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${h3Title}">
                  <img class="product-card__image product-card__image--main" src="${h3Img1}" alt="${h3Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${h3Img2}" alt="${h3Title} alternate" width="535" height="535" loading="lazy">
                </a>
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${h3Type}</a></p>
                <h3 class="product-card__title"><a href="#">${h3Title}</a></h3>
                <div class="f-price"><span class="f-price-item f-price-item--regular">${h3Price}</span></div>
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#cedbba" href="#" title="Soft Green"><span class="tooltip">Soft Green</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#e3e3e3" href="#" title="Grey"><span class="tooltip">Grey</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Hot 4 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${h4Title}">
                  <img class="product-card__image product-card__image--main" src="${h4Img1}" alt="${h4Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${h4Img2}" alt="${h4Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${h4Sale === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--sale">Sale</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${h4Type}</a></p>
                <h3 class="product-card__title"><a href="#">${h4Title}</a></h3>
                ${h4Sale === "true" && h4Was ? `<div class="f-price f-price--on-sale"><span class="f-price-item f-price-item--sale">${h4Price}</span><span class="f-price-item f-price-item--was"><s>${h4Was}</s></span></div>` : `<div class="f-price"><span class="f-price-item f-price-item--regular">${h4Price}</span></div>`}
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#d7c8b9" href="#" title="Light Beige"><span class="tooltip">Light Beige</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#573a19" href="#" title="Chocolate"><span class="tooltip">Chocolate</span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Hot 5 -->
          <div class="f-column">
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <a href="#" aria-label="${h5Title}">
                  <img class="product-card__image product-card__image--main" src="${h5Img1}" alt="${h5Title}" width="535" height="535" loading="lazy">
                  <img class="product-card__image product-card__image--second" src="${h5Img2}" alt="${h5Title} alternate" width="535" height="535" loading="lazy">
                </a>
                ${h5Sale === "true" ? `<div class="product-card__badge"><span class="f-badge f-badge--sale">Sale</span></div>` : ""}
                <div class="product-card__actions">
                  <button class="btn--white" type="button">
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M16.38 16.25H3.62a.78.78 0 0 1-.63-.55L1.88 6.32A.63.63 0 0 1 2.51 5.6h14.99c.4 0 .72.33.63.73L17.02 15.7a.78.78 0 0 1-.64.55Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.875 5.625V5a3.125 3.125 0 0 1 6.25 0v.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Choose options
                  </button>
                </div>
              </div>
              <div class="product-card__info">
                <p class="product-card__type"><a href="#">${h5Type}</a></p>
                <h3 class="product-card__title"><a href="#">${h5Title}</a></h3>
                ${h5Sale === "true" && h5Was ? `<div class="f-price f-price--on-sale"><span class="f-price-item f-price-item--sale">${h5Price}</span><span class="f-price-item f-price-item--was"><s>${h5Was}</s></span></div>` : `<div class="f-price"><span class="f-price-item f-price-item--regular">${h5Price}</span></div>`}
                <ul class="product-card__swatches">
                  <li><a class="swatch-color active" style="--swatch-background:#8d6e63" href="#" title="Walnut"><span class="tooltip">Walnut</span></a></li>
                  <li><a class="swatch-color" style="--swatch-background:#f5f5f5;border:1px solid #ddd" href="#" title="White Oak"><span class="tooltip">White Oak</span></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div class="slider-progress"><div class="slider-progress__bar" id="progress-tab1"></div></div>
        <div class="slider-nav-btns">
          <button class="slider-nav-btn" id="prev-tab1" aria-label="Previous" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button class="slider-nav-btn" id="next-tab1" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

<script>
(function () {
  document.querySelectorAll('.tabs__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = btn.dataset.tab;
      document.querySelectorAll('.tabs__btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.tabs__panel').forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.querySelector('.tabs__panel[data-panel="' + idx + '"]').classList.add('active');
    });
  });

  function initSlider(sliderId, prevId, nextId, progressId) {
    var track   = document.getElementById(sliderId);
    var btnPrev = document.getElementById(prevId);
    var btnNext = document.getElementById(nextId);
    var progBar = document.getElementById(progressId);
    if (!track) return;

    function getSlideWidth() {
      var firstSlide = track.querySelector('.f-column');
      if (!firstSlide) return 220;
      var gap = parseFloat(getComputedStyle(track).gap) || 20;
      return firstSlide.offsetWidth + gap;
    }

    function updateUI() {
      var maxScroll = track.scrollWidth - track.clientWidth;
      var scrolled  = track.scrollLeft;
      if (btnPrev) btnPrev.disabled = scrolled <= 2;
      if (btnNext) btnNext.disabled = scrolled >= maxScroll - 2;
      if (progBar) {
        var pct          = maxScroll > 0 ? scrolled / maxScroll : 0;
        var visibleRatio = track.clientWidth / track.scrollWidth;
        progBar.style.width = (visibleRatio + pct * (1 - visibleRatio)) * 100 + '%';
      }
    }

    if (btnPrev) btnPrev.addEventListener('click', function () {
      track.scrollBy({ left: -getSlideWidth() * 2, behavior: 'smooth' });
    });
    if (btnNext) btnNext.addEventListener('click', function () {
      track.scrollBy({ left: getSlideWidth() * 2, behavior: 'smooth' });
    });

    track.addEventListener('scroll', updateUI, { passive: true });
    window.addEventListener('resize', updateUI);
    updateUI();

    var isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', function (e) {
      isDown = true;
      track.classList.add('is-dragging');
      startX     = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    document.addEventListener('mouseup', function () {
      isDown = false;
      track.classList.remove('is-dragging');
    });
    track.addEventListener('mouseleave', function () {
      isDown = false;
      track.classList.remove('is-dragging');
    });
    track.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.1;
    });
  }

  function initSwatches() {
    document.querySelectorAll('.product-card').forEach(function (card) {
      card.querySelectorAll('.swatch-color').forEach(function (sw) {
        sw.addEventListener('click', function (e) {
          e.preventDefault();
          card.querySelectorAll('.swatch-color').forEach(function (s) { s.classList.remove('active'); });
          sw.classList.add('active');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initSlider('slider-tab0', 'prev-tab0', 'next-tab0', 'progress-tab0');
      initSlider('slider-tab1', 'prev-tab1', 'next-tab1', 'progress-tab1');
      initSwatches();
    });
  } else {
    initSlider('slider-tab0', 'prev-tab0', 'next-tab0', 'progress-tab0');
    initSlider('slider-tab1', 'prev-tab1', 'next-tab1', 'progress-tab1');
    initSwatches();
  }
})();
</script>
  `;
}

export default function ProductCardSliderV7({ config }) {
  return null;
}