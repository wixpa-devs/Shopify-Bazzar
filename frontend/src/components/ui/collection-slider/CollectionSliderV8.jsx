export function getCollectionSliderV8Code(config = {}) {
  const sectionBg        = config.sectionBg        || "#ffffff";
  const textColor        = config.textColor         || "#111111";
  const borderColor      = config.borderColor       || "#e2e2e2";
  const badge1Bg         = config.badge1Bg          || "#e9d944";
  const badge1Color      = config.badge1Color       || "#111111";
  const badge2Bg         = config.badge2Bg          || "#c84a2b";
  const badge2Color      = config.badge2Color       || "#ffffff";
  const promoBtnBg       = config.promoBtnBg        || "#111111";
  const promoBtnColor    = config.promoBtnColor     || "#ffffff";
  const pillNavBg        = config.pillNavBg         || "#ffffff";
  const pillBorderHover  = config.pillBorderHover   || "#111111";

  // Banner 1
  const banner1Url       = config.banner1Url        || "/collections/turn-chairs";
  const banner1Img       = config.banner1Img        || "https://picsum.photos/seed/banner1desk/1300/526";
  const banner1ImgMobile = config.banner1ImgMobile  || "https://picsum.photos/seed/banner1mob/800/562";
  const banner1BadgeType = config.banner1BadgeType  || "yellow";
  const banner1BadgeSave = config.banner1BadgeSave  || "Save";
  const banner1BadgeAmt  = config.banner1BadgeAmt   || "40%";
  const banner1Title     = config.banner1Title      || "Turn Chairs";
  const banner1Text      = config.banner1Text       || "Elevate your space with 40% off our timeless designs!";
  const banner1Btn       = config.banner1Btn        || "Shop Now";

  // Banner 2
  const banner2Url       = config.banner2Url        || "/collections/cross-chairs";
  const banner2Img       = config.banner2Img        || "https://picsum.photos/seed/banner2desk/1300/526";
  const banner2ImgMobile = config.banner2ImgMobile  || "https://picsum.photos/seed/banner2mob/800/562";
  const banner2BadgeType = config.banner2BadgeType  || "red";
  const banner2BadgeSave = config.banner2BadgeSave  || "Save";
  const banner2BadgeAmt  = config.banner2BadgeAmt   || "30%";
  const banner2Title     = config.banner2Title      || "Cross Chairs";
  const banner2Text      = config.banner2Text       || "Get 30% off elegant, timeless seating—don't miss out!";
  const banner2Btn       = config.banner2Btn        || "Shop Now";

  // Pills
  const pill1Label  = config.pill1Label  || "Living Room";
  const pill1Url    = config.pill1Url    || "/collections/living-room";
  const pill1Img    = config.pill1Img    || "https://picsum.photos/seed/pill1/96/96";

  const pill2Label  = config.pill2Label  || "Planters";
  const pill2Url    = config.pill2Url    || "/collections/planters";
  const pill2Img    = config.pill2Img    || "https://picsum.photos/seed/pill2/96/96";

  const pill3Label  = config.pill3Label  || "Gravel Rug";
  const pill3Url    = config.pill3Url    || "/collections/gravel-rug";
  const pill3Img    = config.pill3Img    || "https://picsum.photos/seed/pill3/96/96";

  const pill4Label  = config.pill4Label  || "Table Mirror";
  const pill4Url    = config.pill4Url    || "/collections/table-mirror";
  const pill4Img    = config.pill4Img    || "https://picsum.photos/seed/pill4/96/96";

  const pill5Label  = config.pill5Label  || "Table Wears";
  const pill5Url    = config.pill5Url    || "/collections/table-wears";
  const pill5Img    = config.pill5Img    || "https://picsum.photos/seed/pill5/96/96";

  const pill6Label  = config.pill6Label  || "Dining Decor";
  const pill6Url    = config.pill6Url    || "/collections/dining-decor";
  const pill6Img    = config.pill6Img    || "https://picsum.photos/seed/pill6/96/96";

  const pill7Label  = config.pill7Label  || "Ray Table Lamp";
  const pill7Url    = config.pill7Url    || "/collections/ray-table-lamp";
  const pill7Img    = config.pill7Img    || "https://picsum.photos/seed/pill7/96/96";

  const pill8Label  = config.pill8Label  || "Chairs";
  const pill8Url    = config.pill8Url    || "/collections/chairs";
  const pill8Img    = config.pill8Img    || "https://picsum.photos/seed/pill8/96/96";

  const pill9Label  = config.pill9Label  || "Living Room";
  const pill9Url    = config.pill9Url    || "/collections/living-room-2";
  const pill9Img    = config.pill9Img    || "https://picsum.photos/seed/pill9/96/96";

  const pill10Label = config.pill10Label || "Planters";
  const pill10Url   = config.pill10Url   || "/collections/planters-2";
  const pill10Img   = config.pill10Img   || "https://picsum.photos/seed/pill10/96/96";

  return `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: ${sectionBg};
    color: ${textColor};
    -webkit-font-smoothing: antialiased;
  }

  .page-width {
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 40px;
  }

  /* ── Promo Section ── */
  .promo-section { padding: 40px 0 0; background: ${sectionBg}; }

  .promo-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .promo-card-link {
    display: block;
    text-decoration: none;
    color: inherit;
    border-radius: 10px;
    overflow: hidden;
  }

  .promo-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 2 / 1;
    background: #f0f0ee;
  }

  .promo-media { position: absolute; inset: 0; }
  .promo-media picture { display: block; width: 100%; height: 100%; }
  .promo-media img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .promo-card-link:hover .promo-media img { transform: scale(1.04); }

  .promo-badge {
    position: absolute;
    top: 18px; right: 18px;
    z-index: 3;
    width: 66px; height: 66px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.1;
  }
  .promo-badge--yellow { background: ${badge1Bg}; color: ${badge1Color}; }
  .promo-badge--red    { background: ${badge2Bg}; color: ${badge2Color}; }
  .promo-badge small {
    display: block;
    font-size: 0.58rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 2px;
  }
  .promo-badge strong {
    display: block;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .promo-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 22px 26px 26px;
    max-width: 54%;
  }
  .promo-title {
    font-size: clamp(1.1rem, 2vw, 1.75rem);
    font-weight: 700;
    letter-spacing: -0.025em;
    color: ${textColor};
    margin-bottom: 8px;
    line-height: 1.1;
  }
  .promo-text {
    font-size: 0.8rem;
    color: #444;
    line-height: 1.55;
    margin-bottom: 16px;
  }
  .promo-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 18px;
    background: ${promoBtnBg};
    color: ${promoBtnColor};
    font-family: inherit;
    font-size: 0.8125rem;
    font-weight: 600;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: opacity 180ms ease;
  }
  .promo-btn:hover { opacity: 0.8; }

  /* ── Pill Section ── */
  .pill-section { padding: 60px 0 0; background: ${sectionBg}; }

  .pill-slider-wrapper { position: relative; }

  .pill-track {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 2px;
    cursor: grab;
  }
  .pill-track::-webkit-scrollbar { display: none; }
  .pill-track.is-dragging { cursor: grabbing; }

  .pill-item a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    text-decoration: none;
    color: ${textColor};
    background: ${sectionBg};
    border: 1px solid ${borderColor};
    border-radius: 999px;
    padding: 6px 16px 6px 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: border-color 180ms ease, box-shadow 180ms ease;
    user-select: none;
  }
  .pill-item a:hover {
    border-color: ${pillBorderHover};
    box-shadow: 0 1px 5px rgba(0,0,0,0.08);
  }

  .pill-icon {
    width: 36px; height: 36px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: #f2f2f0;
  }
  .pill-icon img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .pill-nav {
    display: none;
    position: absolute;
    top: 50%; transform: translateY(-50%);
    z-index: 5;
    width: 36px; height: 36px;
    border-radius: 50%;
    background: ${pillNavBg};
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: box-shadow 180ms ease, opacity 180ms ease;
    font-family: inherit;
  }
  .pill-nav:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.15); }
  .pill-nav:disabled { opacity: 0.3; pointer-events: none; }
  .pill-nav svg { width: 16px; height: 16px; }
  .pill-nav--prev { left: -18px; }
  .pill-nav--next { right: -18px; }

  @media (min-width: 768px) {
    .pill-nav { display: inline-flex; }
  }

  /* ── Responsive ── */
  @media (min-width: 768px) and (max-width: 1100px) {
    .promo-card { aspect-ratio: 1.4 / 1; }
    .promo-content { max-width: 75%; padding: 20px 22px 22px; }
  }

  @media (max-width: 991px) {
    .promo-content { max-width: 60%; }
  }

  @media (max-width: 767px) {
    .page-width { padding-inline: 16px; }
    .promo-grid { grid-template-columns: 1fr; gap: 10px; }
    .promo-card { aspect-ratio: 1.2 / 1; }
    .promo-content { max-width: 70%; padding: 16px 18px 18px; }
    .promo-text { font-size: 0.75rem; margin-bottom: 12px; }
    .promo-badge { width: 58px; height: 58px; top: 12px; right: 12px; }
    .pill-section { padding: 36px 0 0; }
    .pill-icon { width: 30px; height: 30px; }
    .pill-item a { font-size: 0.8rem; padding: 5px 12px 5px 5px; gap: 8px; }
  }
</style>

<!-- SECTION 1: PROMO BANNERS -->
<section class="promo-section">
  <div class="page-width">
    <div class="promo-grid">

      <!-- Banner 1 -->
      <a href="${banner1Url}" class="promo-card-link" aria-label="${banner1Title}">
        <article class="promo-card">
          <div class="promo-media">
            <picture>
              <source media="(max-width: 767px)" srcset="${banner1ImgMobile}" />
              <img src="${banner1Img}" alt="${banner1Title}" width="1300" height="526" loading="lazy" />
            </picture>
          </div>
          <div class="promo-badge promo-badge--${banner1BadgeType}">
            <small>${banner1BadgeSave}</small>
            <strong>${banner1BadgeAmt}</strong>
          </div>
          <div class="promo-content">
            <h2 class="promo-title">${banner1Title}</h2>
            <p class="promo-text">${banner1Text}</p>
            <button class="promo-btn" type="button">${banner1Btn}</button>
          </div>
        </article>
      </a>

      <!-- Banner 2 -->
      <a href="${banner2Url}" class="promo-card-link" aria-label="${banner2Title}">
        <article class="promo-card">
          <div class="promo-media">
            <picture>
              <source media="(max-width: 767px)" srcset="${banner2ImgMobile}" />
              <img src="${banner2Img}" alt="${banner2Title}" width="1300" height="526" loading="lazy" />
            </picture>
          </div>
          <div class="promo-badge promo-badge--${banner2BadgeType}">
            <small>${banner2BadgeSave}</small>
            <strong>${banner2BadgeAmt}</strong>
          </div>
          <div class="promo-content">
            <h2 class="promo-title">${banner2Title}</h2>
            <p class="promo-text">${banner2Text}</p>
            <button class="promo-btn" type="button">${banner2Btn}</button>
          </div>
        </article>
      </a>

    </div>
  </div>
</section>

<!-- SECTION 2: PILL SLIDER -->
<section class="pill-section">
  <div class="page-width">
    <div class="pill-slider-wrapper">

      <button class="pill-nav pill-nav--prev" id="pillPrev" aria-label="Previous slide" disabled>
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 16.25L6.25 10L12.5 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="pill-track" id="pillTrack">

        <div class="pill-item">
          <a href="${pill1Url}">
            <span class="pill-icon"><img src="${pill1Img}" alt="${pill1Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill1Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill2Url}">
            <span class="pill-icon"><img src="${pill2Img}" alt="${pill2Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill2Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill3Url}">
            <span class="pill-icon"><img src="${pill3Img}" alt="${pill3Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill3Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill4Url}">
            <span class="pill-icon"><img src="${pill4Img}" alt="${pill4Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill4Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill5Url}">
            <span class="pill-icon"><img src="${pill5Img}" alt="${pill5Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill5Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill6Url}">
            <span class="pill-icon"><img src="${pill6Img}" alt="${pill6Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill6Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill7Url}">
            <span class="pill-icon"><img src="${pill7Img}" alt="${pill7Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill7Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill8Url}">
            <span class="pill-icon"><img src="${pill8Img}" alt="${pill8Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill8Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill9Url}">
            <span class="pill-icon"><img src="${pill9Img}" alt="${pill9Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill9Label}</span>
          </a>
        </div>
        <div class="pill-item">
          <a href="${pill10Url}">
            <span class="pill-icon"><img src="${pill10Img}" alt="${pill10Label}" width="96" height="96" loading="lazy" /></span>
            <span>${pill10Label}</span>
          </a>
        </div>

      </div>

      <button class="pill-nav pill-nav--next" id="pillNext" aria-label="Next slide">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

    </div>
  </div>
</section>

<script>
(function () {
  var track   = document.getElementById('pillTrack');
  var btnPrev = document.getElementById('pillPrev');
  var btnNext = document.getElementById('pillNext');
  var STEP    = 280;

  /* ── Button nav + progress ── */
  function update() {
    btnPrev.disabled = track.scrollLeft <= 0;
    btnNext.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
  }
  btnPrev.addEventListener('click', function () {
    track.scrollBy({ left: -STEP, behavior: 'smooth' });
  });
  btnNext.addEventListener('click', function () {
    track.scrollBy({ left: STEP, behavior: 'smooth' });
  });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  /* ── Mouse drag to scroll (desktop + tablet) ── */
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
    track.scrollLeft = scrollLeft - (x - startX) * 1.1;
  });

  /* ── Touch drag to scroll (mobile + tablet) ── */
  var touchStartX = 0, touchScrollLeft = 0;
  track.addEventListener('touchstart', function (e) {
    touchStartX     = e.touches[0].pageX;
    touchScrollLeft = track.scrollLeft;
  }, { passive: true });
  track.addEventListener('touchmove', function (e) {
    var diff = touchStartX - e.touches[0].pageX;
    track.scrollLeft = touchScrollLeft + diff;
  }, { passive: true });
})();
</script>
  `;
}

export default function CollectionSliderV8({ config }) {
  return null;
}