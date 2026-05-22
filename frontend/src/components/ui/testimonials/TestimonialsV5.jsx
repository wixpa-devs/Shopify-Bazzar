// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV5Code(config = {}) {
  const sectionBg      = config.sectionBg      || "#ffffff";
  const headingText    = config.headingText    || "What Our Customers Say About Us";
  const headingColor   = config.headingColor   || "#0f172a";

  // Theme font support
  const fontFamily     = config.fontFamily     || "inherit";

  // Arrow colors
  const arrowBorder    = config.arrowBorder    || "#e2e8f0";
  const arrowBg        = config.arrowBg        || "#ffffff";
  const arrowColor     = config.arrowColor     || "#334155";
  const arrowHoverBg   = config.arrowHoverBg   || "#f8fafc";

  // Card colors
  const cardBg         = config.cardBg         || "#ffffff";
  const cardBorder     = config.cardBorder     || "#e2e8f0";
  const starColor      = config.starColor      || "#f59e0b";
  const quoteColor     = config.quoteColor     || "rgba(15,23,42,0.10)";
  const titleColor     = config.titleColor     || "#0f172a";
  const bodyColor      = config.bodyColor      || "#475569";
  const authorDivider  = config.authorDivider  || "#f1f5f9";
  const nameColor      = config.nameColor      || "#0f172a";

  // Review cards
  const r1Stars  = config.r1Stars  || "★★★★★";
  const r1Title  = config.r1Title  || "Barista-Level Coffee at Home";
  const r1Text   = config.r1Text   || "Makes perfect coffee every morning. Super easy to use and clean. It feels like having a little café at home!";
  const r1Name   = config.r1Name   || "Mark D.";
  const r1Avatar = config.r1Avatar || "https://i.pravatar.cc/80?img=47";

  const r2Stars  = config.r2Stars  || "★★★★★";
  const r2Title  = config.r2Title  || "Great Value and Fantastic Flavor";
  const r2Text   = config.r2Text   || "Great value for the price. Brews fast and the aroma is fantastic. I just wish the water tank was a bit bigger.";
  const r2Name   = config.r2Name   || "Saka T.";
  const r2Avatar = config.r2Avatar || "https://i.pravatar.cc/80?img=32";

  const r3Stars  = config.r3Stars  || "★★★★★";
  const r3Title  = config.r3Title  || "Crispy Perfection with Less Oil";
  const r3Text   = config.r3Text   || "I've been using this air fryer almost daily. Crispy fries, juicy chicken, and way less oil. Healthy eating has never been easier!";
  const r3Name   = config.r3Name   || "Rose M.";
  const r3Avatar = config.r3Avatar || "https://i.pravatar.cc/80?img=9";

  const r4Stars  = config.r4Stars  || "★★★★★";
  const r4Title  = config.r4Title  || "Powerful Performance";
  const r4Text   = config.r4Text   || "Excellent phone for the price — fast performance, great camera, and the battery lasts all day. Totally worth it!";
  const r4Name   = config.r4Name   || "Linda M.";
  const r4Avatar = config.r4Avatar || "https://i.pravatar.cc/80?img=20";

  const r5Stars  = config.r5Stars  || "★★★★★";
  const r5Title  = config.r5Title  || "Perfect Toast Every Time";
  const r5Text   = config.r5Text   || "Toasts evenly every single time. I love the retro design — it looks great on my kitchen counter!";
  const r5Name   = config.r5Name   || "Kevin F.";
  const r5Avatar = config.r5Avatar || "https://i.pravatar.cc/80?img=53";

  const r6Stars  = config.r6Stars  || "★★★★★";
  const r6Title  = config.r6Title  || "Immersive Sound";
  const r6Text   = config.r6Text   || "The sound quality is amazing — crisp highs and deep bass! I use them every day for work calls and music, and the noise cancellation is a game changer.";
  const r6Name   = config.r6Name   || "Sarah L.";
  const r6Avatar = config.r6Avatar || "https://i.pravatar.cc/80?img=25";

  const r7Stars  = config.r7Stars  || "★★★★★";
  const r7Title  = config.r7Title  || "Smooth Typing, Stunning Design";
  const r7Text   = config.r7Text   || "Typing feels smooth and quiet. The RGB lighting looks awesome, especially at night. Ideal for both work and gaming!";
  const r7Name   = config.r7Name   || "Jason B.";
  const r7Avatar = config.r7Avatar || "https://i.pravatar.cc/80?img=60";

  const quotePath = `M20.183 25.84c1.12-.32 2.133-.827 3.04-1.52.907-.693 1.68-1.467 2.32-2.32.64-.907 1.093-1.867 1.36-2.88.32-1.013.453-2 .4-2.96h-4.56c-.427-.64-.773-1.28-1.04-1.92-.267-.693-.4-1.413-.4-2.16 0-.64.053-1.227.16-1.76.16-.587.347-1.12.56-1.6.213-.48.453-.933.72-1.36h8.88c.427 1.067.773 2.107 1.04 3.12.267 1.013.4 2.053.4 3.12 0 1.493-.267 3.067-.8 4.72-.48 1.653-1.227 3.12-2.24 4.4-.8 1.067-1.92 2.133-3.36 3.2-1.387 1.067-3.067 1.813-5.04 2.24l-1.44-2.32ZM3.703 25.84c1.12-.32 2.133-.827 3.04-1.52.907-.693 1.68-1.467 2.32-2.32.64-.907 1.093-1.867 1.36-2.88.32-1.013.453-2 .4-2.96H6.263c-.427-.64-.773-1.28-1.04-1.92-.267-.693-.4-1.413-.4-2.16 0-.64.053-1.227.16-1.76.16-.587.347-1.12.56-1.6.213-.48.453-.933.72-1.36h8.88c.427 1.067.773 2.107 1.04 3.12.267 1.013.4 2.053.4 3.12 0 1.493-.267 3.067-.8 4.72-.48 1.653-1.227 3.12-2.24 4.4-.8 1.067-1.92 2.133-3.36 3.2-1.387 1.067-3.067 1.813-5.04 2.24l-1.44-2.32Z`;

  const arrowSvgPath = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.606 1.014a.75.75 0 0 1 1.059.07l5.661 6.353a.75.75 0 0 1 0 1.126L5.665 14.916a.75.75 0 1 1-1.13-.988L9.695 8 4.535 2.072a.75.75 0 0 1 .071-1.058Z" fill="currentColor"/>`;

  return `<!-- Testimonials V5 — Light Slider with Side Arrows | Shopify Bazzar -->
<style>
  .tv5, .tv5 * , .tv5 *::before, .tv5 *::after {
    box-sizing: border-box;
  }

  .tv5 {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .tv5__section {
    padding: clamp(36px, 5vw, 64px) 0 clamp(36px, 5vw, 60px);
    background: ${sectionBg};
    overflow: hidden;
  }

  .tv5__heading {
    text-align: center;
    margin-bottom: clamp(24px, 4vw, 44px);
    padding: 0 clamp(16px, 4vw, 40px);
  }

  .tv5__heading h2 {
    margin: 0;
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 700;
    color: ${headingColor};
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-family: inherit;
  }

  .tv5__shell {
    position: relative;
  }

  .tv5__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid ${arrowBorder};
    background: ${arrowBg};
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${arrowColor};
    transition: background 180ms ease, box-shadow 180ms ease, color 180ms ease, opacity 180ms ease;
    padding: 0;
    font: inherit;
    appearance: none;
    -webkit-appearance: none;
  }

  .tv5__arrow:hover {
    background: ${arrowHoverBg};
    box-shadow: 0 4px 16px rgba(0,0,0,0.14);
    color: ${headingColor};
  }

  .tv5__arrow:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .tv5__arrow--prev { left: clamp(4px, 1.5vw, 16px); }
  .tv5__arrow--next { right: clamp(4px, 1.5vw, 16px); }

  .tv5__arrow svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    display: block;
  }

  .tv5__arrow--prev svg {
    transform: rotate(180deg);
  }

  .tv5__viewport {
    overflow: hidden;
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
    padding: 0 clamp(32px, 5vw, 60px);
  }

  .tv5__viewport:active {
    cursor: grabbing;
  }

  .tv5__track {
    display: flex;
    gap: clamp(10px, 1.5vw, 16px);
    transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  .tv5__card {
    flex: 0 0 calc(86% - 5px);
    min-width: 0;
    background: ${cardBg};
    border: 1px solid ${cardBorder};
    border-radius: 12px;
    padding: clamp(16px, 2.2vw, 24px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: inherit;
  }

  @media (min-width: 600px)  { .tv5__card { flex: 0 0 calc(50% - 8px); } }
  @media (min-width: 900px)  { .tv5__card { flex: 0 0 calc(33.333% - 11px); } }
  @media (min-width: 1150px) { .tv5__card { flex: 0 0 calc(25% - 12px); } }

  .tv5__quote-icon {
    color: ${quoteColor};
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .tv5__stars {
    color: ${starColor};
    font-size: 0.85rem;
    letter-spacing: 1px;
    line-height: 1;
    font-family: inherit;
  }

  .tv5__card-title {
    margin: 0;
    font-size: clamp(0.92rem, 1.15vw, 1rem);
    font-weight: 700;
    color: ${titleColor};
    line-height: 1.3;
    font-family: inherit;
  }

  .tv5__card-body {
    margin: 0;
    font-size: clamp(0.78rem, 1vw, 0.85rem);
    color: ${bodyColor};
    line-height: 1.7;
    flex: 1;
    font-family: inherit;
  }

  .tv5__author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
    padding-top: 12px;
    border-top: 1px solid ${authorDivider};
  }

  .tv5__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: #e2e8f0;
  }

  .tv5__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tv5__author-name {
    font-size: 0.82rem;
    font-weight: 600;
    color: ${nameColor};
    line-height: 1.2;
    font-family: inherit;
  }

  @media (max-width: 640px) {
    .tv5__arrow {
      width: 32px;
      height: 32px;
    }

    .tv5__arrow svg {
      width: 14px;
      height: 14px;
    }
  }
</style>

<div class="tv5">
  <section class="tv5__section" id="tv5-section">
    <div class="tv5__heading">
      <h2>${headingText}</h2>
    </div>

    <div class="tv5__shell">
      <button class="tv5__arrow tv5__arrow--prev" id="tv5-prev" aria-label="Previous" type="button">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">${arrowSvgPath}</svg>
      </button>

      <div class="tv5__viewport" id="tv5-viewport">
        <div class="tv5__track" id="tv5-track">
          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r1Stars}</div>
            <h3 class="tv5__card-title">${r1Title}</h3>
            <p class="tv5__card-body">${r1Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r1Avatar}" alt="${r1Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r1Name}</div>
            </div>
          </div>

          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r2Stars}</div>
            <h3 class="tv5__card-title">${r2Title}</h3>
            <p class="tv5__card-body">${r2Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r2Avatar}" alt="${r2Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r2Name}</div>
            </div>
          </div>

          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r3Stars}</div>
            <h3 class="tv5__card-title">${r3Title}</h3>
            <p class="tv5__card-body">${r3Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r3Avatar}" alt="${r3Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r3Name}</div>
            </div>
          </div>

          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r4Stars}</div>
            <h3 class="tv5__card-title">${r4Title}</h3>
            <p class="tv5__card-body">${r4Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r4Avatar}" alt="${r4Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r4Name}</div>
            </div>
          </div>

          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r5Stars}</div>
            <h3 class="tv5__card-title">${r5Title}</h3>
            <p class="tv5__card-body">${r5Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r5Avatar}" alt="${r5Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r5Name}</div>
            </div>
          </div>

          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r6Stars}</div>
            <h3 class="tv5__card-title">${r6Title}</h3>
            <p class="tv5__card-body">${r6Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r6Avatar}" alt="${r6Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r6Name}</div>
            </div>
          </div>

          <div class="tv5__card">
            <svg class="tv5__quote-icon" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${quotePath}" fill="currentColor"/></svg>
            <div class="tv5__stars">${r7Stars}</div>
            <h3 class="tv5__card-title">${r7Title}</h3>
            <p class="tv5__card-body">${r7Text}</p>
            <div class="tv5__author">
              <div class="tv5__avatar"><img src="${r7Avatar}" alt="${r7Name}" loading="lazy"/></div>
              <div class="tv5__author-name">${r7Name}</div>
            </div>
          </div>
        </div>
      </div>

      <button class="tv5__arrow tv5__arrow--next" id="tv5-next" aria-label="Next" type="button">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">${arrowSvgPath}</svg>
      </button>
    </div>
  </section>
</div>

<script>
(function () {
  var viewport = document.getElementById('tv5-viewport');
  var track = document.getElementById('tv5-track');
  var prevBtn = document.getElementById('tv5-prev');
  var nextBtn = document.getElementById('tv5-next');
  var cards = Array.from(track.querySelectorAll('.tv5__card'));
  var total = cards.length;
  var current = 0;
  var startX = 0;
  var dragDx = 0;
  var isDrag = false;
  var autoTimer;

  function visible() {
    var w = window.innerWidth;
    if (w >= 1150) return 4;
    if (w >= 900) return 3;
    if (w >= 600) return 2;
    return 1;
  }

  function maxIdx() {
    return Math.max(0, total - visible());
  }

  function gap() {
    return parseFloat(getComputedStyle(track).gap) || 12;
  }

  function cw() {
    return cards[0] ? cards[0].offsetWidth + gap() : 0;
  }

  function updateArrows() {
    prevBtn.disabled = current <= 0;
    nextBtn.disabled = current >= maxIdx();
  }

  function goTo(idx) {
    idx = Math.max(0, Math.min(idx, maxIdx()));
    current = idx;
    track.style.transition = 'transform 0.45s cubic-bezier(0.25,1,0.5,1)';
    track.style.transform = 'translateX(-' + (current * cw()) + 'px)';
    updateArrows();
  }

  function next() {
    if (current >= maxIdx()) {
      goTo(0);
    } else {
      goTo(current + 1);
    }
  }

  function prev() {
    if (current <= 0) {
      goTo(maxIdx());
    } else {
      goTo(current - 1);
    }
  }

  function startAuto() {
    autoTimer = setInterval(function () {
      next();
    }, 4000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  prevBtn.addEventListener('click', function () {
    prev();
    resetAuto();
  });

  nextBtn.addEventListener('click', function () {
    next();
    resetAuto();
  });

  viewport.addEventListener('mousedown', function (e) {
    isDrag = true;
    startX = e.clientX;
    dragDx = 0;
    track.style.transition = 'none';
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDrag) return;
    dragDx = e.clientX - startX;
    track.style.transform = 'translateX(' + (-current * cw() + dragDx) + 'px)';
  });

  document.addEventListener('mouseup', function () {
    if (!isDrag) return;
    isDrag = false;

    if (dragDx < -60) next();
    else if (dragDx > 60) prev();
    else goTo(current);

    dragDx = 0;
    resetAuto();
  });

  viewport.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;

    if (dx < -50) next();
    else if (dx > 50) prev();
    else goTo(current);

    resetAuto();
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prev();
      resetAuto();
    }
    if (e.key === 'ArrowRight') {
      next();
      resetAuto();
    }
  });

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      goTo(Math.min(current, maxIdx()));
    }, 120);
  });

  goTo(0);
  startAuto();
})();
</script>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV5({ config }) {
  return null;
}