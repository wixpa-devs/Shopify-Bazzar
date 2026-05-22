// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV7Code(config = {}) {
  const sectionBg = config.sectionBg || "#ffffff";
  const headingText = config.headingText || "20,000+ Real Results From Real People";
  const headingColor = config.headingColor || "#111111";
  const starColor = config.starColor || "#f5c842";

  // Optional: allow passing theme font explicitly (e.g. "var(--font-body-family)" or "'Inter', sans-serif")
  const fontFamily = config.fontFamily || "inherit";

  // Arrow colors
  const arrowBorder = config.arrowBorder || "#111111";
  const arrowBg = config.arrowBg || "#ffffff";
  const arrowColor = config.arrowColor || "#111111";
  const arrowHoverBg = config.arrowHoverBg || "#111111";
  const arrowHoverColor = config.arrowHoverColor || "#ffffff";

  // Card colors
  const cardImgBg = config.cardImgBg || "#f0ede8";
  const usernameColor = config.usernameColor || "#888888";
  const reviewColor = config.reviewColor || "#111111";

  // Cards — username, review, image URL
  const c1User = config.c1User || "@glowwithsophia";
  const c1Review = config.c1Review || "Leaves skin soft, glowing, and hydrated—absolute must-have!";
  const c1Img = config.c1Img || "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=600&fit=crop&crop=face";

  const c2User = config.c2User || "@skinbyamelia";
  const c2Review = config.c2Review || "Lightweight, absorbs quickly, and brightens beautifully.";
  const c2Img = config.c2Img || "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=600&fit=crop&crop=face";

  const c3User = config.c3User || "@radiantmia";
  const c3Review = config.c3Review || "Transforms dull skin into a radiant glow effortlessly.";
  const c3Img = config.c3Img || "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=600&fit=crop&crop=face";

  const c4User = config.c4User || "@beautybylinda";
  const c4Review = config.c4Review || "Non-greasy and perfect under makeup. Game changer!";
  const c4Img = config.c4Img || "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=600&fit=crop&crop=face";

  const c5User = config.c5User || "@tonedbykayla";
  const c5Review = config.c5Review || "Fades dark spots and evens skin tone — I'm obsessed.";
  const c5Img = config.c5Img || "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&crop=face";

  const c6User = config.c6User || "@pureglowjess";
  const c6Review = config.c6Review || "My pores look so much smaller after just two weeks!";
  const c6Img = config.c6Img || "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=600&fit=crop&crop=face";

  const c7User = config.c7User || "@dewyskinclub";
  const c7Review = config.c7Review || "Finally cleared my hormonal breakouts — nothing else worked.";
  const c7Img = config.c7Img || "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face";

  const c8User = config.c8User || "@naturalskinzoe";
  const c8Review = config.c8Review || "Smells amazing and keeps my skin hydrated all day long.";
  const c8Img = config.c8Img || "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=face";

  const c9User = config.c9User || "@glowqueenrosa";
  const c9Review = config.c9Review || "Best serum I've ever tried — worth every single penny.";
  const c9Img = config.c9Img || "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=400&h=600&fit=crop&crop=face";

  const c10User = config.c10User || "@clearskindiaries";
  const c10Review = config.c10Review || "I've repurchased this 4 times already — says it all!";
  const c10Img = config.c10Img || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=600&fit=crop&crop=face";

  // Arrow SVG paths (structural — not config-driven)
  const arrowLeft = `M37.35 6.1C23.892 6.6 5.887 6.1 1.85 6.1M1.85 6.1C2.972 4.767 5.719 1.9 7.738 1.1M1.85 6.1C3.813 6.933 7.906 8.9 8.579 10.1`;
  const arrowRight = `M0.85 6.1C14.308 6.6 32.313 6.1 36.35 6.1M36.35 6.1C35.229 4.767 32.481 1.9 30.462 1.1M36.35 6.1C34.388 6.933 30.294 8.9 29.621 10.1`;

  return `<!-- Testimonials V7 — Pill Photo Slider | Shopify Bazzar -->
<style>
  .tv7, .tv7 * , .tv7 *::before, .tv7 *::after {
    box-sizing: border-box;
  }

  .tv7 {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .tv7__section {
    background: ${sectionBg};
    padding: 80px 0 52px;
    overflow: hidden;
  }

  @media (max-width: 749px) {
    .tv7__section { padding: 40px 0; }
  }

  /* ── Header ── */
  .tv7__head {
    text-align: center;
    padding: 0 clamp(16px, 5vw, 40px);
    margin-bottom: clamp(28px, 4vw, 48px);
  }

  .tv7__stars {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 14px;
  }

  .tv7__stars span {
    font-size: 1.5rem;
    color: ${starColor};
    line-height: 1;
  }

  .tv7__head h2 {
    margin: 0;
    font-size: clamp(1.7rem, 4vw, 2.6rem);
    font-weight: 600;
    color: ${headingColor};
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-family: inherit;
  }

  /* ── Body ── */
  .tv7__body {
    display: flex;
    align-items: flex-start;
  }

  /* ── Arrow column ── */
  .tv7__arrows {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: clamp(55px, 8vw, 88px) 10px 0 clamp(16px, 3vw, 40px);
    z-index: 2;
  }

  @media (max-width: 749px) {
    .tv7__arrows { display: none; }
  }

  .tv7__arrow-btn {
    width: 36px;
    height: 36px;
    border: 1.5px solid ${arrowBorder};
    border-radius: 50%;
    background: ${arrowBg};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 180ms ease, color 180ms ease;
    padding: 0;
    color: ${arrowColor};
    font: inherit;
    appearance: none;
    -webkit-appearance: none;
  }

  .tv7__arrow-btn:hover {
    background: ${arrowHoverBg};
    color: ${arrowHoverColor};
  }

  .tv7__arrow-btn svg {
    width: 28px;
    height: 9px;
    display: block;
  }

  .tv7__arrow-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .tv7__arrow-btn:disabled:hover {
    background: ${arrowBg};
    color: ${arrowColor};
  }

  /* ── Viewport ── */
  .tv7__vp {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    cursor: grab;
  }

  .tv7__vp.is-dragging { cursor: grabbing; }

  .tv7__vp.is-dragging * {
    user-select: none;
    -webkit-user-select: none;
  }

  .tv7__track {
    display: flex;
    gap: 30px;
    padding: 0 clamp(16px, 3vw, 40px) 0 clamp(12px, 2vw, 20px);
    align-items: flex-start;
    will-change: transform;
  }

  .tv7__track.is-snapping {
    transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (max-width: 749px) {
    .tv7__track {
      gap: 15px;
      padding: 0 clamp(12px, 4vw, 20px);
    }
  }

  /* ── Card ── */
  .tv7__card {
    flex: 0 0 220px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: inherit;
  }

  @media (max-width: 989px) {
    .tv7__card { flex: 0 0 180px; }
  }

  @media (max-width: 499px) {
    .tv7__card { flex: 0 0 160px; }
  }

  .tv7__img-wrap {
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 999px;
    overflow: hidden;
    background: ${cardImgBg};
  }

  .tv7__img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  .tv7__card-content {
    padding: 0 4px;
  }

  .tv7__username {
    font-size: 0.78rem;
    color: ${usernameColor};
    font-weight: 400;
    margin-bottom: 5px;
    display: block;
    font-family: inherit;
  }

  .tv7__review {
    font-size: clamp(0.76rem, 1.05vw, 0.85rem);
    color: ${reviewColor};
    line-height: 1.55;
    font-family: inherit;
  }
</style>

<div class="tv7">
<section class="tv7__section" id="tv7-section">

  <div class="tv7__head">
    <div class="tv7__stars" aria-label="5 stars">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
    <h2>${headingText}</h2>
  </div>

  <div class="tv7__body">

    <div class="tv7__arrows">
      <button class="tv7__arrow-btn" id="tv7-prev" aria-label="Slide left" type="button">
        <svg viewBox="0 0 38 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="${arrowLeft}" stroke="currentColor" stroke-width="1.82" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="tv7__arrow-btn" id="tv7-next" aria-label="Slide right" type="button">
        <svg viewBox="0 0 38 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="${arrowRight}" stroke="currentColor" stroke-width="1.82" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <div class="tv7__vp" id="tv7-vp">
      <div class="tv7__track" id="tv7-track">

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c1Img}" alt="${c1User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c1User}</span>
            <p class="tv7__review">${c1Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c2Img}" alt="${c2User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c2User}</span>
            <p class="tv7__review">${c2Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c3Img}" alt="${c3User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c3User}</span>
            <p class="tv7__review">${c3Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c4Img}" alt="${c4User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c4User}</span>
            <p class="tv7__review">${c4Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c5Img}" alt="${c5User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c5User}</span>
            <p class="tv7__review">${c5Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c6Img}" alt="${c6User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c6User}</span>
            <p class="tv7__review">${c6Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c7Img}" alt="${c7User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c7User}</span>
            <p class="tv7__review">${c7Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c8Img}" alt="${c8User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c8User}</span>
            <p class="tv7__review">${c8Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c9Img}" alt="${c9User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c9User}</span>
            <p class="tv7__review">${c9Review}</p>
          </div>
        </div>

        <div class="tv7__card">
          <div class="tv7__img-wrap">
            <img src="${c10Img}" alt="${c10User}" loading="lazy" width="400" height="600"/>
          </div>
          <div class="tv7__card-content">
            <span class="tv7__username">${c10User}</span>
            <p class="tv7__review">${c10Review}</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
</div>

<script>
(function () {
  var vp      = document.getElementById('tv7-vp');
  var track   = document.getElementById('tv7-track');
  var btnPrev = document.getElementById('tv7-prev');
  var btnNext = document.getElementById('tv7-next');

  var offset   = 0;
  var startX   = 0;
  var startOff = 0;
  var isDrag   = false;
  var velX     = 0;
  var lastX    = 0;
  var lastT    = 0;

  function gap() {
    return parseFloat(getComputedStyle(track).gap) || 30;
  }

  function cardW() {
    var c = track.querySelector('.tv7__card');
    return c ? c.offsetWidth + gap() : 250;
  }

  function maxOffset() {
    var totalW = 0;
    Array.from(track.querySelectorAll('.tv7__card')).forEach(function (c) {
      totalW += c.offsetWidth + gap();
    });
    totalW -= gap();
    var pl = parseFloat(getComputedStyle(track).paddingLeft)  || 0;
    var pr = parseFloat(getComputedStyle(track).paddingRight) || 0;
    return Math.max(0, totalW + pl + pr - vp.offsetWidth);
  }

  function clampOffset(v) {
    return Math.max(0, Math.min(v, maxOffset()));
  }

  function setOffset(v, snap) {
    offset = clampOffset(v);
    if (snap) {
      track.classList.add('is-snapping');
    } else {
      track.classList.remove('is-snapping');
    }
    track.style.transform = 'translateX(-' + offset + 'px)';
    updateArrows();
  }

  function updateArrows() {
    btnPrev.disabled = offset <= 0;
    btnNext.disabled = offset >= maxOffset();
  }

  btnPrev.addEventListener('click', function () {
    setOffset(offset - cardW() * 3, true);
  });

  btnNext.addEventListener('click', function () {
    setOffset(offset + cardW() * 3, true);
  });

  /* Mouse drag */
  vp.addEventListener('mousedown', function (e) {
    isDrag   = true;
    startX   = e.clientX;
    startOff = offset;
    lastX    = e.clientX;
    lastT    = Date.now();
    velX     = 0;
    track.classList.remove('is-snapping');
    vp.classList.add('is-dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDrag) return;
    var now = Date.now();
    var dt  = now - lastT || 1;
    velX    = (e.clientX - lastX) / dt;
    lastX   = e.clientX;
    lastT   = now;
    setOffset(startOff - (e.clientX - startX), false);
  });

  document.addEventListener('mouseup', function () {
    if (!isDrag) return;
    isDrag = false;
    vp.classList.remove('is-dragging');
    var momentum = -velX * 200;
    setOffset(offset + momentum, true);
  });

  /* Mouse wheel */
  vp.addEventListener('wheel', function (e) {
    var delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta === 0) return;
    e.preventDefault();
    track.classList.remove('is-snapping');
    setOffset(offset + delta * 1.2, false);
    clearTimeout(vp._wt);
    vp._wt = setTimeout(function () {
      track.classList.add('is-snapping');
      setOffset(offset, false);
    }, 120);
  }, { passive: false });

  /* Touch */
  var touchStartX = 0;
  var touchOff = 0;

  vp.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    touchOff    = offset;
    track.classList.remove('is-snapping');
  }, { passive: true });

  vp.addEventListener('touchmove', function (e) {
    setOffset(touchOff - (e.touches[0].clientX - touchStartX), false);
  }, { passive: true });

  vp.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) setOffset(offset, true);
  }, { passive: true });

  /* Keyboard */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') setOffset(offset + cardW(), true);
    if (e.key === 'ArrowLeft')  setOffset(offset - cardW(), true);
  });

  window.addEventListener('resize', function () {
    setOffset(offset, false);
  });

  setOffset(0, false);
})();
</script>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV7({ config }) {
  return null;
}