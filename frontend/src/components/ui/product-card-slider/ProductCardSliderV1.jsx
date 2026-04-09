export function getProductCardSliderV1Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const eyebrowText = config.eyebrowText || "NEW IN";
  const eyebrowColor = config.eyebrowColor || "#111111";
  const tab1Label = config.tab1Label || "MAIN SS26";
  const tab2Label = config.tab2Label || "BEST SELLERS";
  const tab3Label = config.tab3Label || "NEW ARRIVALS";
  const tabActiveBg = config.tabActiveBg || "#111111";
  const tabActiveColor = config.tabActiveColor || "#ffffff";
  const tabInactiveColor = config.tabInactiveColor || "rgba(17,17,17,0.4)";
  const navColor = config.navColor || "#111111";
  const cardBg = config.cardBg || "#f4f4f4";
  const textColor = config.textColor || "#111111";
  const vendorName = config.vendorName || "8PM";

  return `
<style>
  .featured-selection {
    padding: 24px 0;
    background: ${bgColor};
  }
  .featured-selection .page-width {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .featured-selection__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 16px;
  }
  .featured-selection__header-left {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
  }
  .featured-selection__eyebrow {
    margin: 0;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${eyebrowColor};
  }
  .featured-selection__tabs {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .featured-selection__tab {
    border: 0;
    background: transparent;
    padding: 0;
    margin: 0;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${tabInactiveColor};
    cursor: pointer;
  }
  .featured-selection__tab.is-active {
    color: ${tabActiveColor};
    background: ${tabActiveBg};
    padding: 4px 8px;
  }
  .featured-selection__controls {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: auto;
  }
  .featured-selection__counter,
  .featured-selection__nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .featured-selection__counter,
  .featured-selection__nav-btn {
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${navColor};
  }
  .featured-selection__nav-btn {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }
  .featured-selection__nav-btn.is-disabled {
    opacity: 0.35;
    pointer-events: none;
  }
  .featured-selection__viewport {
    overflow: hidden;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: pan-y;
  }
  .featured-selection__viewport.is-dragging {
    cursor: grabbing;
  }
  .featured-selection__track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% - (16px * (var(--desktop-columns) - 1))) / var(--desktop-columns));
    gap: 16px;
    transition: transform 0.35s ease;
    will-change: transform;
  }
  .featured-selection__viewport.is-dragging .featured-selection__track {
    transition: none;
  }
  .featured-selection__card {
    min-width: 0;
  }
  .featured-selection__card,
  .featured-selection__card * {
    user-select: none;
    -webkit-user-select: none;
  }
  .featured-selection__card-media {
    position: relative;
    overflow: hidden;
    background: ${cardBg};
  }
  .featured-selection__card-link {
    display: block;
    text-decoration: none;
  }
  .featured-selection__image {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    pointer-events: none;
  }
  .featured-selection__quick-add {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 2;
    width: 34px;
    height: 34px;
    padding: 0;
    border: 1px solid black;
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
  }
  .featured-selection__quick-add svg {
    display: block;
    width: 22px;
    height: 22px;
  }
  .featured-selection__quick-add line {
    stroke: ${textColor};
    stroke-width: 2.8;
    stroke-linecap: square;
  }
  .featured-selection__quick-add:hover {
    transform: scale(1.05);
  }
  .featured-selection__quick-add.is-loading {
    opacity: 0.6;
    pointer-events: none;
  }
  .featured-selection__card-content {
    padding-top: 10px;
  }
  .featured-selection__vendor,
  .featured-selection__title,
  .featured-selection__price {
    margin: 0;
    color: ${textColor};
  }
  .featured-selection__vendor,
  .featured-selection__title,
  .featured-selection__price,
  .featured-selection__title a {
    font-size: 12px;
    line-height: 1.45;
    letter-spacing: 0.01em;
    text-decoration: none;
    color: ${textColor};
  }
  .featured-selection__title {
    margin-top: 2px;
  }
  .featured-selection__price {
    margin-top: 4px;
  }
  .featured-selection__price-compare {
    opacity: 0.5;
    margin-left: 4px;
  }
  .featured-selection__panel[hidden] {
    display: none !important;
  }
  @media screen and (max-width: 989px) {
    .featured-selection__header {
      flex-direction: column;
      align-items: stretch;
    }
    .featured-selection__controls {
      justify-content: space-between;
      margin-left: 0;
      gap: 16px;
    }
    .featured-selection__track {
      grid-auto-columns: calc((100% - (12px * (var(--mobile-columns) - 1))) / var(--mobile-columns));
      gap: 12px;
    }
  }
  @media screen and (max-width: 749px) {
    .featured-selection {
      padding: 20px 0;
    }
    .featured-selection .page-width {
      padding-left: 10px;
      padding-right: 10px;
    }
    .featured-selection__header-left {
      gap: 12px;
      align-items: flex-start;
      flex-direction: column;
    }
    .featured-selection__tabs {
      gap: 10px;
    }
    .featured-selection__quick-add {
      left: 8px;
      bottom: 8px;
      width: 30px;
      height: 30px;
    }
    .featured-selection__quick-add svg {
      width: 20px;
      height: 20px;
    }
  }
</style>

<section class="featured-selection" data-featured-selection>
  <div class="featured-selection__inner page-width">
    <div class="featured-selection__header">
      <div class="featured-selection__header-left">
        <p class="featured-selection__eyebrow">${eyebrowText}</p>
        <div class="featured-selection__tabs" role="tablist" aria-label="Product collections">
          <button class="featured-selection__tab is-active" type="button" role="tab" aria-selected="true"
            aria-controls="panel-1" id="tab-1" data-tab-trigger data-target="1">
            ${tab1Label}
          </button>
          <button class="featured-selection__tab" type="button" role="tab" aria-selected="false"
            aria-controls="panel-2" id="tab-2" data-tab-trigger data-target="2">
            ${tab2Label}
          </button>
          <button class="featured-selection__tab" type="button" role="tab" aria-selected="false"
            aria-controls="panel-3" id="tab-3" data-tab-trigger data-target="3">
            ${tab3Label}
          </button>
        </div>
      </div>
      <div class="featured-selection__controls">
        <div class="featured-selection__counter" aria-live="polite">
          <span data-current>1</span>
          <span>/</span>
          <span data-total>2</span>
        </div>
        <div class="featured-selection__nav">
          <button class="featured-selection__nav-btn is-disabled" type="button" data-prev>PREVIOUS</button>
          <button class="featured-selection__nav-btn" type="button" data-next>NEXT</button>
        </div>
      </div>
    </div>

    <div class="featured-selection__panels">

      <!-- Panel 1 -->
      <div class="featured-selection__panel is-active" id="panel-1" role="tabpanel" aria-labelledby="tab-1"
        data-tab-panel data-panel="1">
        <div class="featured-selection__viewport" data-viewport>
          <div class="featured-selection__track" data-track style="--desktop-columns: 4; --mobile-columns: 1;">
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-01/600/800" alt="Cairo shirt" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Cairo Milk Shirt</a></h3>
                <div class="featured-selection__price"><span>249.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-02/600/800" alt="Manila denim skirt" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Manila Denim Skirt</a></h3>
                <div class="featured-selection__price"><span>245.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-03/600/800" alt="Lima powder pants" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Lima Powder Pants</a></h3>
                <div class="featured-selection__price"><span>189.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-04/600/800" alt="Lahore bomber denim" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Lahore Bomber Denim</a></h3>
                <div class="featured-selection__price"><span>330.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-05/600/800" alt="Ljubljana grey vest" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Ljubljana Grey Vest</a></h3>
                <div class="featured-selection__price"><span>215.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-06/600/800" alt="Istanbul butter pants" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Istanbul Butter Pants</a></h3>
                <div class="featured-selection__price"><span>239.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-07/600/800" alt="Perth tobacco pants" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Perth Tobacco Pants</a></h3>
                <div class="featured-selection__price"><span>249.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <button type="button" class="featured-selection__quick-add" aria-label="Add to cart" data-quick-add>
                  <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
                    <line x1="25" y1="9" x2="25" y2="41"></line>
                    <line x1="9" y1="25" x2="41" y2="25"></line>
                  </svg>
                </button>
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-08/600/800" alt="Siena english rose sweatshirt" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Siena English Rose Sweatshirt</a></h3>
                <div class="featured-selection__price"><span>119.00 EUR</span></div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Panel 2 -->
      <div class="featured-selection__panel" id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden
        data-tab-panel data-panel="2">
        <div class="featured-selection__viewport" data-viewport>
          <div class="featured-selection__track" data-track style="--desktop-columns: 4; --mobile-columns: 1;">
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-09/600/800" alt="Best seller 1" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Honolulu Cardigan Blu</a></h3>
                <div class="featured-selection__price"><span>195.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-10/600/800" alt="Best seller 2" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Sirmione Tank Top</a></h3>
                <div class="featured-selection__price"><span>145.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-11/600/800" alt="Best seller 3" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Nizza Gilet Burro</a></h3>
                <div class="featured-selection__price"><span>175.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-12/600/800" alt="Best seller 4" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Amalfi Leggings</a></h3>
                <div class="featured-selection__price"><span>135.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-13/600/800" alt="Best seller 5" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Phuket Trousers</a></h3>
                <div class="featured-selection__price"><span>235.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-14/600/800" alt="Best seller 6" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Portofino Bomber</a></h3>
                <div class="featured-selection__price"><span>255.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-15/600/800" alt="Best seller 7" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Biarritz Denim Pants</a></h3>
                <div class="featured-selection__price"><span>220.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-16/600/800" alt="Best seller 8" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Ibiza Rose T-Shirt</a></h3>
                <div class="featured-selection__price"><span>99.00 EUR</span></div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Panel 3 -->
      <div class="featured-selection__panel" id="panel-3" role="tabpanel" aria-labelledby="tab-3" hidden
        data-tab-panel data-panel="3">
        <div class="featured-selection__viewport" data-viewport>
          <div class="featured-selection__track" data-track style="--desktop-columns: 4; --mobile-columns: 1;">
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-17/600/800" alt="New arrival 1" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Praiano Meringa Pants</a></h3>
                <div class="featured-selection__price"><span>235.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-18/600/800" alt="New arrival 2" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Manarola Shirt Azzurro</a></h3>
                <div class="featured-selection__price"><span>215.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-19/600/800" alt="New arrival 3" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Riviera Soft Jacket</a></h3>
                <div class="featured-selection__price"><span>275.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-20/600/800" alt="New arrival 4" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Verona Satin Top</a></h3>
                <div class="featured-selection__price"><span>165.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-21/600/800" alt="New arrival 5" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Milano Soft Knit</a></h3>
                <div class="featured-selection__price"><span>185.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-22/600/800" alt="New arrival 6" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Florence Wide Pants</a></h3>
                <div class="featured-selection__price"><span>210.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-23/600/800" alt="New arrival 7" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Capri Linen Shirt</a></h3>
                <div class="featured-selection__price"><span>155.00 EUR</span></div>
              </div>
            </article>
            <article class="featured-selection__card" data-slide>
              <div class="featured-selection__card-media">
                <a href="#" class="featured-selection__card-link">
                  <img src="https://picsum.photos/seed/fashion-24/600/800" alt="New arrival 8" class="featured-selection__image">
                </a>
              </div>
              <div class="featured-selection__card-content">
                <p class="featured-selection__vendor">${vendorName}</p>
                <h3 class="featured-selection__title"><a href="#">Napoli Summer Dress</a></h3>
                <div class="featured-selection__price"><span>205.00 EUR</span></div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<script>
  (function () {
    document.addEventListener('DOMContentLoaded', function () {
      const sections = document.querySelectorAll('[data-featured-selection]');

      sections.forEach(function (section) {
        const tabs = section.querySelectorAll('[data-tab-trigger]');
        const panels = section.querySelectorAll('[data-tab-panel]');
        const prevBtn = section.querySelector('[data-prev]');
        const nextBtn = section.querySelector('[data-next]');
        const currentEl = section.querySelector('[data-current]');
        const totalEl = section.querySelector('[data-total]');

        let activePanel = section.querySelector('[data-tab-panel].is-active');
        let index = 0;

        let isPointerDown = false;
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        const dragThreshold = 50;

        const getViewport = function () { return activePanel ? activePanel.querySelector('[data-viewport]') : null; };
        const getTrack = function () { return activePanel ? activePanel.querySelector('[data-track]') : null; };

        const getColumns = function (track) {
          if (!track) return 1;
          const styles = window.getComputedStyle(track);
          const desktopColumns = parseInt(styles.getPropertyValue('--desktop-columns')) || 4;
          const mobileColumns = parseInt(styles.getPropertyValue('--mobile-columns')) || 1;
          return window.innerWidth > 989 ? desktopColumns : mobileColumns;
        };

        const getStepCount = function (panel) {
          if (!panel) return 1;
          const track = panel.querySelector('[data-track]');
          const slides = panel.querySelectorAll('[data-slide]');
          const columns = getColumns(track);
          return Math.max(1, Math.ceil(slides.length / columns));
        };

        const clampIndex = function () {
          const totalSteps = getStepCount(activePanel);
          index = Math.max(0, Math.min(index, totalSteps - 1));
        };

        const updateSlider = function () {
          const viewport = getViewport();
          const track = getTrack();
          const totalSteps = getStepCount(activePanel);
          if (!viewport || !track) return;
          clampIndex();
          prevTranslate = -(index * viewport.clientWidth);
          currentTranslate = prevTranslate;
          track.style.transform = \`translate3d(\${prevTranslate}px, 0, 0)\`;
          if (currentEl) currentEl.textContent = index + 1;
          if (totalEl) totalEl.textContent = totalSteps;
          if (prevBtn) prevBtn.classList.toggle('is-disabled', index === 0);
          if (nextBtn) nextBtn.classList.toggle('is-disabled', index >= totalSteps - 1);
        };

        const setPositionByTranslate = function () {
          const track = getTrack();
          if (!track) return;
          track.style.transform = \`translate3d(\${currentTranslate}px, 0, 0)\`;
        };

        const goNext = function () {
          const totalSteps = getStepCount(activePanel);
          if (index < totalSteps - 1) { index += 1; updateSlider(); }
        };

        const goPrev = function () {
          if (index > 0) { index -= 1; updateSlider(); }
        };

        const activateTab = function (targetId) {
          tabs.forEach(function (tab) {
            const isMatch = tab.dataset.target === targetId;
            tab.classList.toggle('is-active', isMatch);
            tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
          });
          panels.forEach(function (panel) {
            const isMatch = panel.dataset.panel === targetId;
            panel.classList.toggle('is-active', isMatch);
            panel.hidden = !isMatch;
            if (isMatch) { activePanel = panel; }
          });
          index = 0;
          updateSlider();
          bindDrag();
        };

        const pointerDown = function (event) {
          const viewport = getViewport();
          const track = getTrack();
          if (!viewport || !track) return;
          if (event.pointerType === 'mouse' && event.button !== 0) return;
          isPointerDown = true;
          isDragging = false;
          startX = event.clientX;
          currentTranslate = prevTranslate;
          viewport.classList.add('is-dragging');
          if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
        };

        const pointerMove = function (event) {
          if (!isPointerDown) return;
          const viewport = getViewport();
          const track = getTrack();
          const totalSteps = getStepCount(activePanel);
          if (!viewport || !track || totalSteps <= 1) return;
          const movedBy = event.clientX - startX;
          if (Math.abs(movedBy) > 6) { isDragging = true; }
          currentTranslate = prevTranslate + movedBy;
          setPositionByTranslate();
        };

        const pointerUp = function (event) {
          const viewport = getViewport();
          if (!viewport || !isPointerDown) return;
          isPointerDown = false;
          viewport.classList.remove('is-dragging');
          const movedBy = currentTranslate - prevTranslate;
          if (movedBy < -dragThreshold) { goNext(); }
          else if (movedBy > dragThreshold) { goPrev(); }
          else { updateSlider(); }
          setTimeout(function () { isDragging = false; }, 0);
        };

        const preventClickAfterDrag = function (event) {
          if (isDragging) { event.preventDefault(); event.stopPropagation(); }
        };

        const bindDrag = function () {
          const viewport = getViewport();
          if (!viewport || viewport.dataset.dragBound === 'true') return;
          viewport.dataset.dragBound = 'true';
          viewport.addEventListener('pointerdown', pointerDown);
          viewport.addEventListener('pointermove', pointerMove);
          viewport.addEventListener('pointerup', pointerUp);
          viewport.addEventListener('pointercancel', pointerUp);
          viewport.addEventListener('pointerleave', pointerUp);
          viewport.querySelectorAll('a, button').forEach(function (el) {
            el.addEventListener('click', preventClickAfterDrag);
          });
        };

        tabs.forEach(function (tab) {
          tab.addEventListener('click', function () { activateTab(tab.dataset.target); });
        });

        if (prevBtn) prevBtn.addEventListener('click', goPrev);
        if (nextBtn) nextBtn.addEventListener('click', goNext);

        window.addEventListener('resize', updateSlider);

        bindDrag();
        updateSlider();
      });
    });
  })();
</script>
  `;
}

export default function ProductCardSliderV1({ config }) {
  return null;
}