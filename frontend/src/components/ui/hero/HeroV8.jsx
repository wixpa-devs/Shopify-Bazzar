export function getHeroV8Code(config = {}) {
  const wrapperBg   = config.wrapperBg   || "#1a1814";
  const autoplayMs  = config.autoplayMs  || 5500;

  // Frame 1
  const f1LeftImg   = config.f1LeftImg   || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85";
  const f1LeftTitle = config.f1LeftTitle || "Simple, Stylish, and Functional Furniture";
  const f1LeftCta   = config.f1LeftCta   || "Shop All";
  const f1LeftUrl   = config.f1LeftUrl   || "#";

  const f1Sub1Img   = config.f1Sub1Img   || "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=700&q=80";
  const f1Sub1Title = config.f1Sub1Title || "Quality Furniture for Every Room";
  const f1Sub1Cta   = config.f1Sub1Cta   || "Shop New In";
  const f1Sub1Url   = config.f1Sub1Url   || "#";

  const f1Sub2Img   = config.f1Sub2Img   || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80";
  const f1Sub2Title = config.f1Sub2Title || "Shop Furniture for Your Entire Home";
  const f1Sub2Cta   = config.f1Sub2Cta   || "Shop Bestsellers";
  const f1Sub2Url   = config.f1Sub2Url   || "#";

  // Frame 2
  const f2LeftImg   = config.f2LeftImg   || "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85";
  const f2LeftTitle = config.f2LeftTitle || "Modern Living Room Essentials";
  const f2LeftCta   = config.f2LeftCta   || "Explore Now";
  const f2LeftUrl   = config.f2LeftUrl   || "#";

  const f2Sub1Img   = config.f2Sub1Img   || "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&q=80";
  const f2Sub1Title = config.f2Sub1Title || "Bedroom Sets for Every Style";
  const f2Sub1Cta   = config.f2Sub1Cta   || "Shop Bedrooms";
  const f2Sub1Url   = config.f2Sub1Url   || "#";

  const f2Sub2Img   = config.f2Sub2Img   || "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80";
  const f2Sub2Title = config.f2Sub2Title || "Elegant Dining Collections";
  const f2Sub2Cta   = config.f2Sub2Cta   || "View Dining";
  const f2Sub2Url   = config.f2Sub2Url   || "#";

  // Frame 3
  const f3LeftImg   = config.f3LeftImg   || "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=900&q=85";
  const f3LeftTitle = config.f3LeftTitle || "Outdoor Furniture Built to Last";
  const f3LeftCta   = config.f3LeftCta   || "Shop Outdoor";
  const f3LeftUrl   = config.f3LeftUrl   || "#";

  const f3Sub1Img   = config.f3Sub1Img   || "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=700&q=80";
  const f3Sub1Title = config.f3Sub1Title || "Home Office Solutions";
  const f3Sub1Cta   = config.f3Sub1Cta   || "Shop Office";
  const f3Sub1Url   = config.f3Sub1Url   || "#";

  const f3Sub2Img   = config.f3Sub2Img   || "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=700&q=80";
  const f3Sub2Title = config.f3Sub2Title || "Storage &amp; Organisation";
  const f3Sub2Cta   = config.f3Sub2Cta   || "Browse Storage";
  const f3Sub2Url   = config.f3Sub2Url   || "#";

  return `<!-- Hero V8 — Split Slider | Shopify Bazzar -->
<style>
  .hv8,
  .hv8 *,
  .hv8 *::before,
  .hv8 *::after {
    box-sizing: border-box;
  }

  .hv8 {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
  }

  .hv8__wrap {
    position: relative;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    background: ${wrapperBg};
  }

  .hv8__track {
    display: flex;
    width: 100%;
    transition: transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
  }

  .hv8__frame {
    min-width: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 49% 51%;
    gap: 3px;
    flex-shrink: 0;
  }

  .hv8__panel {
    position: relative;
    overflow: hidden;
    height: clamp(300px, 36vw, 560px);
  }

  .hv8__panel-right {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3px;
    height: clamp(300px, 36vw, 560px);
  }

  .hv8__sub {
    position: relative;
    overflow: hidden;
  }

  .hv8__panel img,
  .hv8__sub img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .hv8__panel:hover img,
  .hv8__sub:hover img {
    transform: scale(1.04);
  }

  .hv8__overlay,
  .hv8__sub-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: clamp(16px, 3vw, 36px);
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.58) 0%,
      rgba(0,0,0,0.1) 50%,
      rgba(0,0,0,0) 100%
    );
    font-family: inherit;
  }

  .hv8__title {
    font-size: clamp(1.05rem, 2.4vw, 2rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: clamp(10px, 1.5vw, 18px);
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    max-width: 320px;
    font-family: inherit;
  }

  .hv8__sub-title {
    font-size: clamp(0.82rem, 1.4vw, 1.15rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    letter-spacing: -0.015em;
    margin-bottom: clamp(8px, 1.2vw, 14px);
    text-shadow: 0 1px 6px rgba(0,0,0,0.35);
    max-width: 240px;
    font-family: inherit;
  }

  .hv8__btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 40px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(6px);
    color: #fff;
    font-size: clamp(0.65rem, 1vw, 0.78rem);
    font-weight: 600;
    padding: clamp(6px, 1vw, 9px) clamp(14px, 2vw, 22px);
    border-radius: 4px;
    border: 1.5px solid rgba(255,255,255,0.7);
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    transition: background 160ms, border-color 160ms, transform 150ms;
    font: inherit;
  }

  .hv8__btn:hover {
    background: rgba(255,255,255,0.26);
    border-color: #fff;
    transform: translateY(-1px);
  }

  .hv8__btn:active {
    transform: translateY(0);
  }

  .hv8__btn:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }

  .hv8__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(36px, 4vw, 50px);
    height: clamp(36px, 4vw, 50px);
    background: rgba(255,255,255,0.14);
    backdrop-filter: blur(8px);
    border: 1.5px solid rgba(255,255,255,0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
    transition: background 160ms, transform 160ms;
    font: inherit;
  }

  .hv8__arrow:hover {
    background: rgba(255,255,255,0.28);
    transform: translateY(-50%) scale(1.08);
  }

  .hv8__arrow:active {
    transform: translateY(-50%) scale(0.95);
  }

  .hv8__arrow svg {
    pointer-events: none;
  }

  .hv8__prev { left: clamp(10px, 2vw, 22px); }
  .hv8__next { right: clamp(10px, 2vw, 22px); }

  .hv8__dots {
    position: absolute;
    bottom: clamp(12px, 2vw, 20px);
    right: clamp(16px, 3vw, 32px);
    display: flex;
    gap: 6px;
    z-index: 20;
  }

  .hv8__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 200ms, transform 200ms;
  }

  .hv8__dot.active {
    background: #fff;
    transform: scale(1.25);
  }

  .hv8__frame.entering .hv8__title,
  .hv8__frame.entering .hv8__sub-title,
  .hv8__frame.entering .hv8__btn {
    animation: hv8Up 480ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .hv8__frame.entering .hv8__title      { animation-delay: 80ms; }
  .hv8__frame.entering .hv8__sub-title  { animation-delay: 100ms; }
  .hv8__frame.entering .hv8__btn        { animation-delay: 150ms; }

  @keyframes hv8Up {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .hv8__panel,
    .hv8__panel-right {
      height: clamp(260px, 40vw, 420px);
    }
    .hv8__title {
      font-size: clamp(0.95rem, 2.2vw, 1.5rem);
    }
    .hv8__sub-title {
      font-size: clamp(0.78rem, 1.6vw, 1rem);
    }
    .hv8__btn {
      font-size: 0.68rem;
      padding: 6px 14px;
    }
    .hv8__arrow {
      width: 38px;
      height: 38px;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    .hv8__frame {
      grid-template-columns: 48% 52%;
    }
    .hv8__panel,
    .hv8__panel-right {
      height: clamp(240px, 44vw, 360px);
    }
    .hv8__title {
      font-size: clamp(0.85rem, 2.4vw, 1.2rem);
      max-width: 180px;
    }
    .hv8__sub-title {
      font-size: clamp(0.7rem, 1.8vw, 0.9rem);
      max-width: 150px;
    }
    .hv8__btn {
      font-size: 0.63rem;
      padding: 5px 11px;
    }
    .hv8__overlay,
    .hv8__sub-overlay {
      padding: clamp(10px, 2.5vw, 18px);
    }
    .hv8__arrow {
      width: 34px;
      height: 34px;
    }
    .hv8__arrow svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 480px) {
    .hv8__frame {
      grid-template-columns: 1fr;
      gap: 3px;
    }
    .hv8__panel {
      height: clamp(200px, 56vw, 300px);
    }
    .hv8__panel-right {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 3px;
      height: clamp(220px, 60vw, 300px);
    }
    .hv8__sub {
      height: auto;
    }
    .hv8__title {
      font-size: clamp(0.9rem, 4.5vw, 1.15rem);
      max-width: 240px;
    }
    .hv8__sub-title {
      font-size: clamp(0.75rem, 3.5vw, 0.92rem);
      max-width: 210px;
    }
    .hv8__btn {
      font-size: 0.65rem;
      padding: 5px 12px;
    }
    .hv8__overlay,
    .hv8__sub-overlay {
      padding: clamp(10px, 3vw, 16px);
    }
    .hv8__arrow {
      display: none;
    }
    .hv8__dots {
      bottom: 8px;
      right: 10px;
    }
    .hv8__dot {
      width: 6px;
      height: 6px;
    }
  }

  @media (max-width: 360px) {
    .hv8__panel {
      height: 185px;
    }
    .hv8__panel-right {
      height: 210px;
    }
    .hv8__title {
      font-size: 0.85rem;
    }
    .hv8__sub-title {
      font-size: 0.7rem;
    }
  }
</style>

<div class="hv8">
  <div class="hv8__wrap" id="hv8-wrap">
    <div class="hv8__track" id="hv8-track">
      <!-- Frame 1 -->
      <div class="hv8__frame">
        <div class="hv8__panel">
          <img src="${f1LeftImg}" alt="${f1LeftTitle}" loading="eager" />
          <div class="hv8__overlay">
            <h2 class="hv8__title">${f1LeftTitle}</h2>
            <a href="${f1LeftUrl}" class="hv8__btn">${f1LeftCta}</a>
          </div>
        </div>
        <div class="hv8__panel hv8__panel-right">
          <div class="hv8__sub">
            <img src="${f1Sub1Img}" alt="${f1Sub1Title}" loading="eager" />
            <div class="hv8__sub-overlay">
              <h3 class="hv8__sub-title">${f1Sub1Title}</h3>
              <a href="${f1Sub1Url}" class="hv8__btn">${f1Sub1Cta}</a>
            </div>
          </div>
          <div class="hv8__sub">
            <img src="${f1Sub2Img}" alt="${f1Sub2Title}" loading="eager" />
            <div class="hv8__sub-overlay">
              <h3 class="hv8__sub-title">${f1Sub2Title}</h3>
              <a href="${f1Sub2Url}" class="hv8__btn">${f1Sub2Cta}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Frame 2 -->
      <div class="hv8__frame">
        <div class="hv8__panel">
          <img src="${f2LeftImg}" alt="${f2LeftTitle}" loading="lazy" />
          <div class="hv8__overlay">
            <h2 class="hv8__title">${f2LeftTitle}</h2>
            <a href="${f2LeftUrl}" class="hv8__btn">${f2LeftCta}</a>
          </div>
        </div>
        <div class="hv8__panel hv8__panel-right">
          <div class="hv8__sub">
            <img src="${f2Sub1Img}" alt="${f2Sub1Title}" loading="lazy" />
            <div class="hv8__sub-overlay">
              <h3 class="hv8__sub-title">${f2Sub1Title}</h3>
              <a href="${f2Sub1Url}" class="hv8__btn">${f2Sub1Cta}</a>
            </div>
          </div>
          <div class="hv8__sub">
            <img src="${f2Sub2Img}" alt="${f2Sub2Title}" loading="lazy" />
            <div class="hv8__sub-overlay">
              <h3 class="hv8__sub-title">${f2Sub2Title}</h3>
              <a href="${f2Sub2Url}" class="hv8__btn">${f2Sub2Cta}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Frame 3 -->
      <div class="hv8__frame">
        <div class="hv8__panel">
          <img src="${f3LeftImg}" alt="${f3LeftTitle}" loading="lazy" />
          <div class="hv8__overlay">
            <h2 class="hv8__title">${f3LeftTitle}</h2>
            <a href="${f3LeftUrl}" class="hv8__btn">${f3LeftCta}</a>
          </div>
        </div>
        <div class="hv8__panel hv8__panel-right">
          <div class="hv8__sub">
            <img src="${f3Sub1Img}" alt="${f3Sub1Title}" loading="lazy" />
            <div class="hv8__sub-overlay">
              <h3 class="hv8__sub-title">${f3Sub1Title}</h3>
              <a href="${f3Sub1Url}" class="hv8__btn">${f3Sub1Cta}</a>
            </div>
          </div>
          <div class="hv8__sub">
            <img src="${f3Sub2Img}" alt="${f3Sub2Title}" loading="lazy" />
            <div class="hv8__sub-overlay">
              <h3 class="hv8__sub-title">${f3Sub2Title}</h3>
              <a href="${f3Sub2Url}" class="hv8__btn">${f3Sub2Cta}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="hv8__arrow hv8__prev" id="hv8-prev" aria-label="Previous" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    </button>
    <button class="hv8__arrow hv8__next" id="hv8-next" aria-label="Next" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>

    <div class="hv8__dots" id="hv8-dots"></div>
  </div>
</div>

<script>
  (function () {
    var track   = document.getElementById('hv8-track');
    var frames  = track.querySelectorAll('.hv8__frame');
    var dotsWrap = document.getElementById('hv8-dots');
    var prevBtn = document.getElementById('hv8-prev');
    var nextBtn = document.getElementById('hv8-next');
    var wrapper = document.getElementById('hv8-wrap');

    var total = frames.length;
    var current = 0;
    var isAnimating = false;
    var autoTimer = null;

    frames.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'hv8__dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      d.setAttribute('type', 'button');
      d.addEventListener('click', function () { resetAuto(); goTo(i); });
      dotsWrap.appendChild(d);
    });

    function getDots() { return dotsWrap.querySelectorAll('.hv8__dot'); }

    function goTo(index) {
      if (isAnimating || index === current) return;
      isAnimating = true;
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;

      frames.forEach(function (f) { f.classList.remove('entering'); });
      track.style.transform = 'translateX(-' + index * 100 + '%)';
      setTimeout(function () { frames[index].classList.add('entering'); }, 80);

      getDots().forEach(function (d, i) {
        d.classList.toggle('active', i === index);
      });

      current = index;
      setTimeout(function () { isAnimating = false; }, 680);
    }

    setTimeout(function () { frames[0].classList.add('entering'); }, 120);

    prevBtn.addEventListener('click', function () { resetAuto(); goTo(current - 1); });
    nextBtn.addEventListener('click', function () { resetAuto(); goTo(current + 1); });

    function startAuto() {
      autoTimer = setInterval(function () { goTo(current + 1); }, ${autoplayMs});
    }
    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }
    startAuto();

    wrapper.addEventListener('mouseenter', function () { clearInterval(autoTimer); });
    wrapper.addEventListener('mouseleave', startAuto);

    var tx = 0;
    wrapper.addEventListener('touchstart', function (e) {
      tx = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) {
        resetAuto();
        goTo(dx < 0 ? current + 1 : current - 1);
      }
    }, { passive: true });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { resetAuto(); goTo(current - 1); }
      if (e.key === 'ArrowRight') { resetAuto(); goTo(current + 1); }
    });
  })();
</script>
  `;
}

export default function HeroV8({ config }) {
  return null;
}