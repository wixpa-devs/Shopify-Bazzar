export function getCollectionSliderV9Code(config = {}) {
  const sectionBg      = config.sectionBg      || "#f5f4f0";
  const textColor      = config.textColor      || "#111111";
  const ctaBg          = config.ctaBg          || "#ffffff";
  const ctaColor       = config.ctaColor       || "#111111";
  const overlayColor   = config.overlayColor   || "rgba(0,0,0,0.22)";
  const progressColor  = config.progressColor  || "rgba(255,255,255,0.7)";
  const slideDelay     = config.slideDelay     || 7000;

  // Slide 1
  const slide1Tag      = config.slide1Tag      || "Hot Deals";
  const slide1Title    = config.slide1Title    || "The Bow Chairs<br>Under $200";
  const slide1Desc     = config.slide1Desc     || "Introducing the latest styles in chairs tailored for every occasion and taste.";
  const slide1Cta      = config.slide1Cta      || "Shop Now";
  const slide1Url      = config.slide1Url      || "/collections/bow-chairs-v2";
  const slide1Img      = config.slide1Img      || "https://picsum.photos/seed/slv9s1/1100/1100";
  const slide1ImgMob   = config.slide1ImgMob   || "https://picsum.photos/seed/slv9s1m/800/800";

  // Slide 2
  const slide2Tag      = config.slide2Tag      || "Dining & Kitchen";
  const slide2Title    = config.slide2Title    || "Difference in<br>the Details";
  const slide2Desc     = config.slide2Desc     || "Highlighting the unique touches that set every piece apart, crafted to elevate your style.";
  const slide2Cta      = config.slide2Cta      || "Shop Now";
  const slide2Url      = config.slide2Url      || "/collections/dining-kitchen-v2";
  const slide2Img      = config.slide2Img      || "https://picsum.photos/seed/slv9s2/1100/1100";
  const slide2ImgMob   = config.slide2ImgMob   || "https://picsum.photos/seed/slv9s2m/800/800";

  // Card 1
  const card1Title     = config.card1Title     || "Select Table Lamps";
  const card1Sub       = config.card1Sub       || "Get up to $100 Off";
  const card1Url       = config.card1Url       || "/collections/table-lamps-v2";
  const card1Img       = config.card1Img       || "https://picsum.photos/seed/slv9c1/658/659";

  // Card 2
  const card2Title     = config.card2Title     || "Select Lounge Chairs";
  const card2Sub       = config.card2Sub       || "From $200";
  const card2Url       = config.card2Url       || "/collections/lounge-chairs-v2";
  const card2Img       = config.card2Img       || "https://picsum.photos/seed/slv9c2/658/658";

  // Card 3
  const card3Title     = config.card3Title     || "Select Side Tables";
  const card3Sub       = config.card3Sub       || "Get up to $1,000";
  const card3Url       = config.card3Url       || "/collections/side-tables-v2";
  const card3Img       = config.card3Img       || "https://picsum.photos/seed/slv9c3/658/658";

  // Card 4
  const card4Title     = config.card4Title     || "Select Home Decors";
  const card4Sub       = config.card4Sub       || "Buy One Get One";
  const card4Url       = config.card4Url       || "/collections/home-decor-v2";
  const card4Img       = config.card4Img       || "https://picsum.photos/seed/slv9c4/658/658";

  return `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: ${sectionBg};
    color: ${textColor};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ─── Section ─── */
  .section { padding: 48px 40px; }
  .section-inner { margin-inline: auto; }

  /* ─── Desktop: two equal columns ─── */
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  /* ══ LEFT — SLIDER ══ */
  .slider-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .slider-img-box {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: #1a1a1a;
    aspect-ratio: 1 / 1;
    width: 100%;
  }

  .slide {
    position: absolute; inset: 0;
    opacity: 0; pointer-events: none;
    transition: opacity 650ms ease;
  }
  .slide.is-active { opacity: 1; pointer-events: auto; z-index: 2; }

  .slide img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    display: block;
    transition: transform 7s linear;
  }
  .slide.is-active img { transform: scale(1.05); }

  .slide-overlay {
    position: absolute; inset: 0;
    background: ${overlayColor};
    pointer-events: none; z-index: 1;
  }

  .slide-content {
    position: absolute; inset: 0; z-index: 3;
    display: flex; flex-direction: column;
    justify-content: center;
    padding: 28px;
    color: #fff;
  }

  .anim {
    opacity: 0; transform: translateY(14px);
    transition: opacity 500ms ease, transform 500ms ease;
  }
  .slide.is-active .anim              { opacity: 1; transform: translateY(0); }
  .slide.is-active .anim:nth-child(1) { transition-delay: 150ms; }
  .slide.is-active .anim:nth-child(2) { transition-delay: 260ms; }
  .slide.is-active .anim:nth-child(3) { transition-delay: 360ms; }
  .slide.is-active .anim:nth-child(4) { transition-delay: 450ms; }

  .slide-tag {
    font-size: 0.68rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em;
    color: rgba(255,255,255,0.72); margin-bottom: 10px;
  }
  .slide-title {
    font-size: clamp(1.25rem, 2vw, 2rem);
    font-weight: 800; line-height: 1.08;
    letter-spacing: -0.03em; color: #fff;
    margin-bottom: 10px;
  }
  .slide-desc {
    font-size: 0.8rem; line-height: 1.6;
    color: rgba(255,255,255,0.75);
    max-width: 28ch; margin-bottom: 18px;
  }
  .slide-cta {
    display: inline-flex; align-items: center;
    height: 40px; padding: 0 20px;
    background: ${ctaBg}; color: ${ctaColor};
    font-family: inherit;
    font-size: 0.8rem; font-weight: 700;
    border: none; border-radius: 999px;
    text-decoration: none; cursor: pointer;
    align-self: flex-start;
    transition: opacity 160ms ease;
  }
  .slide-cta:hover { opacity: 0.85; }

  /* Progress bar */
  .progress-bar {
    position: absolute; bottom: 0; left: 0;
    height: 3px; width: 0%;
    background: ${progressColor};
    z-index: 10; border-radius: 0 2px 2px 0;
    transition: width linear;
  }

  /* ══ RIGHT — 2×2 CARDS ══ */
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .card-link {
    display: block; text-decoration: none; color: inherit;
    border-radius: 10px; overflow: hidden;
  }
  .card-box {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden; border-radius: 10px;
    background: #ddd;
  }
  .card-box img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    display: block;
    transition: transform 480ms cubic-bezier(0.16,1,0.3,1);
  }
  .card-link:hover .card-box img { transform: scale(1.06); }
  .card-label {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
    background: linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 100%);
    padding: 32px 12px 12px;
    text-align: center; color: #fff;
  }
  .card-label h3 {
    font-size: clamp(0.7rem, 1.1vw, 0.95rem);
    font-weight: 700; margin-bottom: 3px; line-height: 1.2;
  }
  .card-label p {
    font-size: clamp(0.62rem, 0.85vw, 0.75rem);
    color: rgba(255,255,255,0.78); font-weight: 500;
  }

  /* ── Tablet ≤ 900px ── */
  @media (max-width: 900px) {
    .section   { padding: 36px 24px; }
    .layout    { gap: 10px; }
    .card-grid { gap: 10px; }
  }

  /* ── Tablet Portrait ≤ 700px ── */
  @media (max-width: 700px) {
    .section { padding: 28px 16px; }
    .layout  { grid-template-columns: 1fr; gap: 14px; }
    .slider-img-box {
      aspect-ratio: unset;
      height: clamp(220px, 55vw, 380px);
    }
    .slide-content { padding: 22px 22px 20px; }
    .slide-title   { font-size: clamp(1.25rem, 5vw, 1.9rem); }
    .card-grid     { grid-template-columns: 1fr 1fr; gap: 10px; }
    .card-box      { aspect-ratio: 4 / 3; }
  }

  /* ── Mobile ≤ 480px ── */
  @media (max-width: 480px) {
    .section { padding: 20px 12px; }
    .layout  { gap: 12px; }
    .slider-img-box {
      height: clamp(200px, 58vw, 300px);
      border-radius: 10px;
    }
    .slide-content { padding: 16px 16px 14px; }
    .slide-desc    { display: none; }
    .slide-title   { font-size: clamp(1.1rem, 5.5vw, 1.5rem); }
    .slide-cta     { height: 36px; font-size: 0.75rem; padding: 0 14px; }
    .card-grid     { grid-template-columns: 1fr 1fr; gap: 8px; }
    .card-box      { aspect-ratio: 1 / 1; }
    .card-label    { padding: 22px 8px 10px; }
    .card-label h3 { font-size: 0.72rem; }
    .card-label p  { font-size: 0.62rem; }
  }

  /* ── Small Phone ≤ 360px ── */
  @media (max-width: 360px) {
    .section { padding: 16px 10px; }
    .slide-tag   { display: none; }
    .slide-title { font-size: 1rem; }
    .slide-cta   { height: 32px; font-size: 0.72rem; }
    .card-label h3 { font-size: 0.65rem; }
  }
</style>

<section class="section">
  <div class="section-inner">
    <div class="layout">

      <!-- ══ LEFT: SLIDER ══ -->
      <div class="slider-col">
        <div class="slider-img-box" id="sliderBox">

          <!-- Slide 1 -->
          <div class="slide is-active">
            <picture>
              <source media="(max-width: 600px)" srcset="${slide1ImgMob}" />
              <img src="${slide1Img}" alt="${slide1Tag}" width="1100" height="1100" loading="eager" />
            </picture>
            <div class="slide-overlay"></div>
            <div class="slide-content">
              <span class="slide-tag anim">${slide1Tag}</span>
              <h2 class="slide-title anim">${slide1Title}</h2>
              <p class="slide-desc anim">${slide1Desc}</p>
              <a href="${slide1Url}" class="slide-cta anim">${slide1Cta}</a>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="slide">
            <picture>
              <source media="(max-width: 600px)" srcset="${slide2ImgMob}" />
              <img src="${slide2Img}" alt="${slide2Tag}" width="1100" height="1100" loading="lazy" />
            </picture>
            <div class="slide-overlay"></div>
            <div class="slide-content">
              <span class="slide-tag anim">${slide2Tag}</span>
              <h2 class="slide-title anim">${slide2Title}</h2>
              <p class="slide-desc anim">${slide2Desc}</p>
              <a href="${slide2Url}" class="slide-cta anim">${slide2Cta}</a>
            </div>
          </div>

          <div class="progress-bar" id="progressBar"></div>
        </div>
      </div>

      <!-- ══ RIGHT: 2×2 CARDS ══ -->
      <div>
        <div class="card-grid">

          <a href="${card1Url}" class="card-link" aria-label="${card1Title}">
            <div class="card-box">
              <img src="${card1Img}" alt="${card1Title}" width="658" height="659" loading="lazy" />
              <div class="card-label"><h3>${card1Title}</h3><p>${card1Sub}</p></div>
            </div>
          </a>

          <a href="${card2Url}" class="card-link" aria-label="${card2Title}">
            <div class="card-box">
              <img src="${card2Img}" alt="${card2Title}" width="658" height="658" loading="lazy" />
              <div class="card-label"><h3>${card2Title}</h3><p>${card2Sub}</p></div>
            </div>
          </a>

          <a href="${card3Url}" class="card-link" aria-label="${card3Title}">
            <div class="card-box">
              <img src="${card3Img}" alt="${card3Title}" width="658" height="658" loading="lazy" />
              <div class="card-label"><h3>${card3Title}</h3><p>${card3Sub}</p></div>
            </div>
          </a>

          <a href="${card4Url}" class="card-link" aria-label="${card4Title}">
            <div class="card-box">
              <img src="${card4Img}" alt="${card4Title}" width="658" height="658" loading="lazy" />
              <div class="card-label"><h3>${card4Title}</h3><p>${card4Sub}</p></div>
            </div>
          </a>

        </div>
      </div>

    </div>
  </div>
</section>

<script>
(function(){
  var DELAY  = ${slideDelay};
  var slides = document.querySelectorAll('#sliderBox .slide');
  var bar    = document.getElementById('progressBar');
  var cur = 0, total = slides.length, timer;

  function goTo(i){
    slides[cur].classList.remove('is-active');
    cur = ((i % total) + total) % total;
    slides[cur].classList.add('is-active');
    bar.style.transition = 'none';
    bar.style.width = '0%';
    void bar.offsetWidth;
    bar.style.transition = 'width ' + DELAY + 'ms linear';
    bar.style.width = '100%';
    clearTimeout(timer);
    timer = setTimeout(function(){ goTo(cur + 1); }, DELAY);
  }

  /* swipe */
  var box = document.getElementById('sliderBox'), tx = 0;
  box.addEventListener('touchstart', function(e){ tx = e.touches[0].clientX; }, {passive:true});
  box.addEventListener('touchend', function(e){
    var dx = e.changedTouches[0].clientX - tx;
    if(Math.abs(dx) > 40) goTo(dx < 0 ? cur + 1 : cur - 1);
  }, {passive:true});

  goTo(0);
})();
</script>
  `;
}

export default function CollectionSliderV9({ config }) {
  return null;
}