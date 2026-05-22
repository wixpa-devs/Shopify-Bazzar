export function getProductCardSliderV6Code(config = {}) {
  const sectionBg       = config.sectionBg       || "#ffffff";
  const headingText     = config.headingText      || "Featured products for you";
  const headingColor    = config.headingColor     || "#1a1a1a";
  const viewAllText     = config.viewAllText      || "View all";
  const viewAllUrl      = config.viewAllUrl       || "#";
  const accentColor     = config.accentColor      || "#e65100";
  const accentHover     = config.accentHover      || "#bf360c";
  const cardBorderColor = config.cardBorderColor  || "#e8e8e8";
  const btnTextColor    = config.btnTextColor     || "#ffffff";
  const starColor       = config.starColor        || "#f5a623";

  // Card 1
  const card1Vendor     = config.card1Vendor      || "Acer";
  const card1Title      = config.card1Title       || "Swift 3 Ultra-thin AMD Ryzen™ 3 14\" Laptop";
  const card1Price      = config.card1Price       || "$699.99";
  const card1Stock      = config.card1Stock       || "In stock (66 units)";
  const card1Label      = config.card1Label       || "New arrival";
  const card1LabelBg    = config.card1LabelBg     || "#5cb85c";
  const card1Rating     = config.card1Rating      || "4";
  const card1Reviews    = config.card1Reviews     || "2";
  const card1Img1       = config.card1Img1        || "https://picsum.photos/seed/laptop1/460/460";
  const card1Img2       = config.card1Img2        || "https://picsum.photos/seed/laptop2/460/460";
  const card1Img3       = config.card1Img3        || "https://picsum.photos/seed/laptop3/460/460";

  // Card 2
  const card2Vendor     = config.card2Vendor      || "Meridian";
  const card2Title      = config.card2Title       || "Special Edition DSP5200HC Digital Active Loudspeaker";
  const card2Price      = config.card2Price       || "$2,649.00";
  const card2Stock      = config.card2Stock       || "In stock (96 units)";
  const card2Rating     = config.card2Rating      || "4.5";
  const card2Reviews    = config.card2Reviews     || "2";
  const card2Img1       = config.card2Img1        || "https://picsum.photos/seed/speaker1/460/460";
  const card2Img2       = config.card2Img2        || "https://picsum.photos/seed/speaker2/460/460";
  const card2Img3       = config.card2Img3        || "https://picsum.photos/seed/speaker3/460/460";
  const card2Img4       = config.card2Img4        || "https://picsum.photos/seed/speaker4/460/460";

  // Card 3 (Nikon — swatches + sale)
  const card3Vendor     = config.card3Vendor      || "Nikon";
  const card3Title      = config.card3Title       || "Nikon 1 S2 Point & Shoot Camera";
  const card3Rating     = config.card3Rating      || "4";
  const card3Reviews    = config.card3Reviews     || "2";
  const card3Img1       = config.card3Img1        || "https://picsum.photos/seed/cam1/460/460";
  const card3Img2       = config.card3Img2        || "https://picsum.photos/seed/cam2/460/460";
  const card3Img3       = config.card3Img3        || "https://picsum.photos/seed/cam3/460/460";
  const card3Img4       = config.card3Img4        || "https://picsum.photos/seed/cam4/460/460";
  const card3Img5       = config.card3Img5        || "https://picsum.photos/seed/cam5/460/460";
  const card3Img6       = config.card3Img6        || "https://picsum.photos/seed/cam6/460/460";

  // Card 4
  const card4Vendor     = config.card4Vendor      || "E-store";
  const card4Title      = config.card4Title       || "ecobee SmartThermostat with voice control";
  const card4Price      = config.card4Price       || "$219.99";
  const card4Stock      = config.card4Stock       || "In stock (16 units)";
  const card4Rating     = config.card4Rating      || "4";
  const card4Reviews    = config.card4Reviews     || "2";
  const card4Img1       = config.card4Img1        || "https://picsum.photos/seed/eco1/460/460";
  const card4Img2       = config.card4Img2        || "https://picsum.photos/seed/eco2/460/460";

  // Card 5
  const card5Vendor     = config.card5Vendor      || "Polar";
  const card5Title      = config.card5Title       || "Polar M430 Fitness Tracker";
  const card5Price      = config.card5Price       || "$180.00";
  const card5Stock      = config.card5Stock       || "In stock (176 units)";
  const card5Img1       = config.card5Img1        || "https://picsum.photos/seed/watch1/460/460";
  const card5Img2       = config.card5Img2        || "https://picsum.photos/seed/watch2/460/460";
  const card5Img3       = config.card5Img3        || "https://picsum.photos/seed/watch3/460/460";
  const card5Img4       = config.card5Img4        || "https://picsum.photos/seed/watch4/460/460";

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

  .cc-featured-collection {
    padding: 32px 0 24px;
    background: ${sectionBg};
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .section__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .section__heading {
    font-size: 20px;
    font-weight: 700;
    color: ${headingColor};
    letter-spacing: -0.01em;
  }
  .section__link {
    font-size: 13px;
    color: ${headingColor};
    text-decoration: underline;
    text-underline-offset: 2px;
    white-space: nowrap;
  }
  .section__link:hover { color: ${accentColor}; }

  .slider-wrapper {
    position: relative;
    overflow: hidden;
  }
  .slider-track {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 4px;
    cursor: grab;
    user-select: none;
  }
  .slider-track::-webkit-scrollbar { display: none; }
  .slider-track.is-dragging { cursor: grabbing; }

  .product-card {
    flex: 0 0 calc(20% - 13px);
    min-width: 200px;
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    background: #fff;
    border: 1px solid ${cardBorderColor};
    border-radius: 4px;
    overflow: hidden;
    transition: box-shadow 0.2s ease;
  }
  .product-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.10); }

  .card__media {
    position: relative;
    background: #f5f5f5;
  }
  .card__media-inner { position: relative; overflow: hidden; }
  .card__image-slider { display: flex; overflow: hidden; }
  .card__image-slide {
    flex: 0 0 100%;
    position: relative;
    padding-top: 100%;
    display: none;
  }
  .card__image-slide.active { display: block; }
  .card__image-slide img {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .card__img-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 4px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 2;
  }
  .card__media:hover .card__img-nav { opacity: 1; }
  .card__img-nav button {
    pointer-events: all;
    background: rgba(255,255,255,0.85);
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 28px; height: 28px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    color: #333;
    transition: background 0.15s;
  }
  .card__img-nav button:hover { background: #fff; }
  .card__img-nav button:disabled { opacity: 0.35; cursor: default; }

  .card__img-dots {
    position: absolute;
    bottom: 6px;
    left: 0; right: 0;
    display: flex;
    justify-content: center;
    gap: 4px;
    z-index: 2;
  }
  .card__img-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #ccc;
    transition: background 0.2s;
    cursor: pointer;
  }
  .card__img-dot.active { background: #1a1a1a; }

  .product-label-container {
    position: absolute;
    top: 8px; left: 8px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .product-label {
    display: inline-block;
    padding: 2px 7px;
    font-size: 11px;
    font-weight: 600;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1.6;
    color: #fff;
  }

  .card__info-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 12px 12px 0;
  }
  .card__info { flex: 1; }
  .card__vendor {
    font-size: 11px;
    color: #888;
    margin-bottom: 3px;
    text-transform: capitalize;
  }
  .card__title {
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 6px;
    color: ${headingColor};
  }
  .card__title a { color: inherit; text-decoration: none; }
  .card__title a:hover { color: ${accentColor}; }

  .rating-row {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 7px;
  }
  .rating__stars {
    --rating: 4;
    --rating-max: 5;
    --star-size: 13px;
    --star-color: ${starColor};
    --star-empty: #ddd;
    display: inline-block;
    font-size: var(--star-size);
    line-height: 1;
    background:
      linear-gradient(90deg,
        var(--star-color) calc(var(--rating) / var(--rating-max) * 100%),
        var(--star-empty) calc(var(--rating) / var(--rating-max) * 100%)
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .rating__count { font-size: 11px; color: #888; }

  .price-row { margin-bottom: 8px; }
  .price__current { font-size: 15px; font-weight: 700; color: #1a1a1a; }
  .price__was {
    font-size: 13px;
    color: #999;
    text-decoration: line-through;
    margin-left: 6px;
  }

  .swatches-row {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .swatch {
    width: 18px; height: 18px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.15s, transform 0.15s;
    outline: none;
    flex-shrink: 0;
  }
  .swatch.active, .swatch:hover {
    border-color: #1a1a1a;
    transform: scale(1.1);
  }
  .swatch-more { font-size: 11px; color: #888; }

  .product-inventory {
    font-size: 11px;
    color: #888;
    padding-top: 8px;
    border-top: 1px solid #ebebeb;
    margin-top: 2px;
    margin-bottom: 10px;
  }
  .inventory--low { color: #d97706; }

  .card__quick-add {
    padding: 0 12px 12px;
    margin-top: auto;
  }
  .btn--primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
    background: ${accentColor};
    color: ${btnTextColor};
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.18s;
    font-family: inherit;
    line-height: 1;
  }
  .btn--primary:hover { background: ${accentHover}; }
  .btn--primary:active { background: ${accentHover}; }
  .btn--primary svg { flex-shrink: 0; }

  .btn--choose {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
    background: ${accentColor};
    color: ${btnTextColor};
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.18s;
    font-family: inherit;
    line-height: 1;
  }
  .btn--choose:hover { background: ${accentHover}; }

  .cart-toast {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #1a1a1a;
    color: #fff;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    z-index: 9999;
    transform: translateY(80px);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s;
    pointer-events: none;
  }
  .cart-toast.show { transform: translateY(0); opacity: 1; }

  @media (max-width: 1100px) {
    .product-card { flex: 0 0 calc(25% - 12px); }
  }
  @media (max-width: 768px) {
    .product-card { flex: 0 0 calc(33.333% - 11px); }
    .container { padding: 0 16px; }
  }
  @media (max-width: 600px) {
    .product-card { flex: 0 0 calc(50% - 8px); min-width: 150px; }
  }
</style>

<section class="cc-featured-collection">
  <div class="container">
    <div class="section__header">
      <h2 class="section__heading">${headingText}</h2>
      <a href="${viewAllUrl}" class="section__link">${viewAllText}</a>
    </div>
  </div>

  <div class="container">
    <div class="slider-wrapper">
      <div class="slider-track" id="mainSlider">

        <!-- CARD 1 -->
        <div class="product-card">
          <div class="card__media">
            <div class="card__img-nav">
              <button class="img-prev" aria-label="Previous image" disabled>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"/></svg>
              </button>
              <button class="img-next" aria-label="Next image">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9.693 4.5 7.5 7.5-7.5 7.5"/></svg>
              </button>
            </div>
            <div class="card__media-inner">
              <div class="card__image-slider">
                <div class="card__image-slide active">
                  <img src="${card1Img1}" alt="${card1Title}" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide">
                  <img src="${card1Img2}" alt="${card1Title} view 2" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide">
                  <img src="${card1Img3}" alt="${card1Title} view 3" width="460" height="460" loading="lazy">
                </div>
              </div>
            </div>
            <div class="card__img-dots"></div>
            <div class="product-label-container">
              <span class="product-label" style="background:${card1LabelBg}">${card1Label}</span>
            </div>
          </div>
          <div class="card__info-container">
            <div class="card__info">
              <p class="card__vendor">${card1Vendor}</p>
              <p class="card__title"><a href="#">${card1Title}</a></p>
              <div class="rating-row">
                <span class="rating__stars" style="--rating:${card1Rating};--rating-max:5">★★★★★</span>
                <span class="rating__count">(${card1Reviews})</span>
              </div>
              <div class="price-row">
                <span class="price__current">${card1Price}</span>
              </div>
              <div class="product-inventory">${card1Stock}</div>
            </div>
          </div>
          <div class="card__quick-add">
            <button class="btn--primary add-to-cart-btn" data-product="${card1Title}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.12 20.44H5.6V9.56h12.8v3.73c.06.4.4.69.8.7.44 0 .8-.35.8-.8v-4.5a.792.792 0 0 0-.8-.69H17V6.5C16.9 4 14.7 2 12 2S7 4.09 7 6.67V8H4.71c-.4.04-.71.37-.71.78v12.53a.8.8 0 0 0 .8.69h7.43c.38-.06.67-.39.67-.78 0-.43-.35-.78-.78-.78ZM8.66 6.67c0-1.72 1.49-3.11 3.33-3.11s3.33 1.39 3.33 3.11V8H8.65V6.67Z"/><path d="M20 17.25h-2.4v-2.5a.817.817 0 0 0-.8-.7c-.44 0-.8.36-.8.8v2.4h-2.5c-.4.06-.7.4-.7.8 0 .44.36.8.8.8H16v2.5c.06.4.4.7.8.7.44 0 .8-.36.8-.8v-2.4h2.5c.4-.06.69-.4.7-.8 0-.44-.35-.8-.8-.8Z"/></svg>
              Add to cart
            </button>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="product-card">
          <div class="card__media">
            <div class="card__img-nav">
              <button class="img-prev" aria-label="Previous" disabled>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"/></svg>
              </button>
              <button class="img-next" aria-label="Next">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9.693 4.5 7.5 7.5-7.5 7.5"/></svg>
              </button>
            </div>
            <div class="card__media-inner">
              <div class="card__image-slider">
                <div class="card__image-slide active">
                  <img src="${card2Img1}" alt="${card2Title}" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide">
                  <img src="${card2Img2}" alt="${card2Title} view 2" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide">
                  <img src="${card2Img3}" alt="${card2Title} view 3" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide">
                  <img src="${card2Img4}" alt="${card2Title} view 4" width="460" height="460" loading="lazy">
                </div>
              </div>
            </div>
            <div class="card__img-dots"></div>
          </div>
          <div class="card__info-container">
            <div class="card__info">
              <p class="card__vendor">${card2Vendor}</p>
              <p class="card__title"><a href="#">${card2Title}</a></p>
              <div class="rating-row">
                <span class="rating__stars" style="--rating:${card2Rating};--rating-max:5">★★★★★</span>
                <span class="rating__count">(${card2Reviews})</span>
              </div>
              <div class="price-row">
                <span class="price__current">${card2Price}</span>
              </div>
              <div class="product-inventory">${card2Stock}</div>
            </div>
          </div>
          <div class="card__quick-add">
            <button class="btn--primary add-to-cart-btn" data-product="${card2Title}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.12 20.44H5.6V9.56h12.8v3.73c.06.4.4.69.8.7.44 0 .8-.35.8-.8v-4.5a.792.792 0 0 0-.8-.69H17V6.5C16.9 4 14.7 2 12 2S7 4.09 7 6.67V8H4.71c-.4.04-.71.37-.71.78v12.53a.8.8 0 0 0 .8.69h7.43c.38-.06.67-.39.67-.78 0-.43-.35-.78-.78-.78ZM8.66 6.67c0-1.72 1.49-3.11 3.33-3.11s3.33 1.39 3.33 3.11V8H8.65V6.67Z"/><path d="M20 17.25h-2.4v-2.5a.817.817 0 0 0-.8-.7c-.44 0-.8.36-.8.8v2.4h-2.5c-.4.06-.7.4-.7.8 0 .44.36.8.8.8H16v2.5c.06.4.4.7.8.7.44 0 .8-.36.8-.8v-2.4h2.5c.4-.06.69-.4.7-.8 0-.44-.35-.8-.8-.8Z"/></svg>
              Add to cart
            </button>
          </div>
        </div>

        <!-- CARD 3: Nikon — swatches + sale -->
        <div class="product-card" id="card-nikon">
          <div class="card__media">
            <div class="card__img-nav">
              <button class="img-prev" aria-label="Previous" disabled>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"/></svg>
              </button>
              <button class="img-next" aria-label="Next">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9.693 4.5 7.5 7.5-7.5 7.5"/></svg>
              </button>
            </div>
            <div class="card__media-inner">
              <div class="card__image-slider">
                <div class="card__image-slide active" data-swatch="yellow">
                  <img src="${card3Img1}" alt="${card3Title} Yellow 1" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="yellow">
                  <img src="${card3Img2}" alt="${card3Title} Yellow 2" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="yellow">
                  <img src="${card3Img3}" alt="${card3Title} Yellow 3" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="black" style="display:none">
                  <img src="${card3Img4}" alt="${card3Title} Black 1" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="black" style="display:none">
                  <img src="${card3Img5}" alt="${card3Title} Black 2" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="white" style="display:none">
                  <img src="${card3Img6}" alt="${card3Title} White" width="460" height="460" loading="lazy">
                </div>
              </div>
            </div>
            <div class="card__img-dots"></div>
            <div class="product-label-container">
              <span class="product-label" style="background:${accentColor}">Now</span>
              <span class="product-label" style="background:${accentColor}">Up to 33% off</span>
            </div>
          </div>
          <div class="card__info-container">
            <div class="card__info">
              <p class="card__vendor">${card3Vendor}</p>
              <p class="card__title"><a href="#">${card3Title}</a></p>
              <div class="rating-row">
                <span class="rating__stars" style="--rating:${card3Rating};--rating-max:5">★★★★★</span>
                <span class="rating__count">(${card3Reviews})</span>
              </div>
              <div class="swatches-row" id="nikon-swatches">
                <button class="swatch active" style="background:#e8c830" data-swatch="yellow" title="Yellow" aria-label="Yellow"></button>
                <button class="swatch" style="background:#c0392b" data-swatch="black" title="Red/Black" aria-label="Red/Black"></button>
                <button class="swatch" style="background:#f0f0f0;border:1px solid #ccc" data-swatch="white" title="White" aria-label="White"></button>
              </div>
              <div class="price-row">
                <span class="price__current" id="nikon-price">$240.00</span>
                <span class="price__was" id="nikon-was">$360.00</span>
              </div>
              <div class="product-inventory inventory--low">In stock (384 units) — selling fast</div>
            </div>
          </div>
          <div class="card__quick-add">
            <button class="btn--choose" data-product="${card3Title}">Choose options</button>
          </div>
        </div>

        <!-- CARD 4 -->
        <div class="product-card">
          <div class="card__media">
            <div class="card__img-nav">
              <button class="img-prev" aria-label="Previous" disabled>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"/></svg>
              </button>
              <button class="img-next" aria-label="Next">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9.693 4.5 7.5 7.5-7.5 7.5"/></svg>
              </button>
            </div>
            <div class="card__media-inner">
              <div class="card__image-slider">
                <div class="card__image-slide active">
                  <img src="${card4Img1}" alt="${card4Title}" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide">
                  <img src="${card4Img2}" alt="${card4Title} view 2" width="460" height="460" loading="lazy">
                </div>
              </div>
            </div>
            <div class="card__img-dots"></div>
            <div class="product-label-container">
              <span class="product-label" style="background:#888">On sale</span>
            </div>
          </div>
          <div class="card__info-container">
            <div class="card__info">
              <p class="card__vendor">${card4Vendor}</p>
              <p class="card__title"><a href="#">${card4Title}</a></p>
              <div class="rating-row">
                <span class="rating__stars" style="--rating:${card4Rating};--rating-max:5">★★★★★</span>
                <span class="rating__count">(${card4Reviews})</span>
              </div>
              <div class="price-row">
                <span class="price__current">${card4Price}</span>
              </div>
              <div class="product-inventory">${card4Stock}</div>
            </div>
          </div>
          <div class="card__quick-add">
            <button class="btn--primary add-to-cart-btn" data-product="${card4Title}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.12 20.44H5.6V9.56h12.8v3.73c.06.4.4.69.8.7.44 0 .8-.35.8-.8v-4.5a.792.792 0 0 0-.8-.69H17V6.5C16.9 4 14.7 2 12 2S7 4.09 7 6.67V8H4.71c-.4.04-.71.37-.71.78v12.53a.8.8 0 0 0 .8.69h7.43c.38-.06.67-.39.67-.78 0-.43-.35-.78-.78-.78ZM8.66 6.67c0-1.72 1.49-3.11 3.33-3.11s3.33 1.39 3.33 3.11V8H8.65V6.67Z"/><path d="M20 17.25h-2.4v-2.5a.817.817 0 0 0-.8-.7c-.44 0-.8.36-.8.8v2.4h-2.5c-.4.06-.7.4-.7.8 0 .44.36.8.8.8H16v2.5c.06.4.4.7.8.7.44 0 .8-.36.8-.8v-2.4h2.5c.4-.06.69-.4.7-.8 0-.44-.35-.8-.8-.8Z"/></svg>
              Add to cart
            </button>
          </div>
        </div>

        <!-- CARD 5: Polar — swatches -->
        <div class="product-card" id="card-polar">
          <div class="card__media">
            <div class="card__img-nav">
              <button class="img-prev" aria-label="Previous" disabled>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"/></svg>
              </button>
              <button class="img-next" aria-label="Next">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9.693 4.5 7.5 7.5-7.5 7.5"/></svg>
              </button>
            </div>
            <div class="card__media-inner">
              <div class="card__image-slider">
                <div class="card__image-slide active" data-swatch="green">
                  <img src="${card5Img1}" alt="${card5Title} Green" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="orange">
                  <img src="${card5Img2}" alt="${card5Title} Orange" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="blue">
                  <img src="${card5Img3}" alt="${card5Title} Blue" width="460" height="460" loading="lazy">
                </div>
                <div class="card__image-slide" data-swatch="black">
                  <img src="${card5Img4}" alt="${card5Title} Black" width="460" height="460" loading="lazy">
                </div>
              </div>
            </div>
            <div class="card__img-dots"></div>
          </div>
          <div class="card__info-container">
            <div class="card__info">
              <p class="card__vendor">${card5Vendor}</p>
              <p class="card__title"><a href="#">${card5Title}</a></p>
              <div class="price-row">
                <span class="price__current">${card5Price}</span>
              </div>
              <div class="swatches-row" id="polar-swatches">
                <button class="swatch active" style="background:#3aaa35" data-swatch="green" title="Green" aria-label="Green"></button>
                <button class="swatch" style="background:#e65100" data-swatch="orange" title="Orange" aria-label="Orange"></button>
                <button class="swatch" style="background:#1565c0" data-swatch="blue" title="Blue" aria-label="Blue"></button>
                <button class="swatch" style="background:#212121" data-swatch="black" title="Black" aria-label="Black"></button>
                <span class="swatch-more">+7</span>
              </div>
              <div class="product-inventory">${card5Stock}</div>
            </div>
          </div>
          <div class="card__quick-add">
            <button class="btn--choose" data-product="${card5Title}">Choose options</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<div class="cart-toast" id="cartToast">✓ Added to cart</div>

<script>
(function () {
  function initCardSliders() {
    document.querySelectorAll('.product-card').forEach(function (card) {
      var slider   = card.querySelector('.card__image-slider');
      var dotsWrap = card.querySelector('.card__img-dots');
      var btnPrev  = card.querySelector('.img-prev');
      var btnNext  = card.querySelector('.img-next');
      if (!slider) return;

      var allSlides    = Array.from(slider.querySelectorAll('.card__image-slide'));
      var activeSlides = allSlides.filter(function (s) { return s.style.display !== 'none'; });
      var current = 0;

      function buildDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = '';
        if (activeSlides.length <= 1) return;
        activeSlides.forEach(function (_, i) {
          var dot = document.createElement('span');
          dot.className = 'card__img-dot' + (i === 0 ? ' active' : '');
          dot.addEventListener('click', function () { goTo(i); });
          dotsWrap.appendChild(dot);
        });
      }

      function goTo(n) {
        activeSlides = allSlides.filter(function (s) { return s.style.display !== 'none'; });
        if (!activeSlides.length) return;
        n = Math.max(0, Math.min(n, activeSlides.length - 1));
        activeSlides.forEach(function (s, i) { s.classList.toggle('active', i === n); });
        current = n;
        if (btnPrev) btnPrev.disabled = current === 0;
        if (btnNext) btnNext.disabled = current === activeSlides.length - 1;
        var dots = dotsWrap ? dotsWrap.querySelectorAll('.card__img-dot') : [];
        dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
      }

      if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); });
      if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });

      buildDots();
      goTo(0);

      card._sliderRefresh = function (activeSwatch) {
        allSlides.forEach(function (s) {
          var sw = s.dataset.swatch;
          if (!sw || sw === activeSwatch) {
            s.style.display = '';
          } else {
            s.style.display = 'none';
            s.classList.remove('active');
          }
        });
        activeSlides = allSlides.filter(function (s) { return s.style.display !== 'none'; });
        buildDots();
        goTo(0);
      };
    });
  }

  function initNikonSwatches() {
    var card = document.getElementById('card-nikon');
    if (!card) return;
    var prices = { yellow: ['$240.00','$360.00'], black: ['$220.00','$330.00'], white: ['$230.00','$345.00'] };
    card.querySelectorAll('#nikon-swatches .swatch').forEach(function (btn) {
      btn.addEventListener('click', function () {
        card.querySelectorAll('#nikon-swatches .swatch').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (card._sliderRefresh) card._sliderRefresh(btn.dataset.swatch);
        var p = prices[btn.dataset.swatch] || ['$240.00','$360.00'];
        card.querySelector('#nikon-price').textContent = p[0];
        card.querySelector('#nikon-was').textContent   = p[1];
      });
    });
  }

  function initPolarSwatches() {
    var card = document.getElementById('card-polar');
    if (!card) return;
    card.querySelectorAll('#polar-swatches .swatch').forEach(function (btn) {
      btn.addEventListener('click', function () {
        card.querySelectorAll('#polar-swatches .swatch').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (card._sliderRefresh) card._sliderRefresh(btn.dataset.swatch);
      });
    });
  }

  function initCartButtons() {
    var toast = document.getElementById('cartToast');
    var toastTimer;
    function showToast(name) {
      toast.textContent = '\u2713 "' + name + '" added to cart';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2400);
    }
    document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name = this.dataset.product;
        var orig = this.innerHTML;
        this.innerHTML = '\u2713 Added!';
        this.style.background = '#2e7d32';
        var self = this;
        setTimeout(function () {
          self.innerHTML = orig;
          self.style.background = '';
        }, 1200);
        showToast(name);
      });
    });
    document.querySelectorAll('.btn--choose').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showToast(this.dataset.product + ' \u2014 select your options');
      });
    });
  }

  function initDragSlider() {
    var track = document.getElementById('mainSlider');
    if (!track) return;
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
      var x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.2;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initCardSliders();
      initNikonSwatches();
      initPolarSwatches();
      initCartButtons();
      initDragSlider();
    });
  } else {
    initCardSliders();
    initNikonSwatches();
    initPolarSwatches();
    initCartButtons();
    initDragSlider();
  }
})();
</script>
  `;
}

export default function ProductCardSliderV6({ config }) {
  return null;
}