// Named export — used by registry and generateComponentCode.js
export function getHeroV11Code(config = {}) {
  const logoAccentColor = config.logoAccentColor || "#818cf8";

  const badgeText = config.badgeText || "✨ New Collection — Just Launched";
  const titleLine1 = config.titleLine1 || "Build Your Shopify";
  const titleLine2 = config.titleLine2 || "Store";
  const titleAccent = config.titleAccent || "Faster";
  const subtitleText =
    config.subtitleText ||
    "Beautiful, ready-to-use components for your storefront — crafted for speed, conversion, and pixel-perfect design.";

  const btn1Text = config.btn1Text || "Browse Components";
  const btn1Link = config.btn1Link || "#";
  const btn2Text = config.btn2Text || "View Templates";
  const btn2Link = config.btn2Link || "#";
  const btn1Bg = config.btn1Bg || "#6366f1";
  const btn1BgHover = config.btn1BgHover || "#4f46e5";

  const proofCount = config.proofCount || "2,400+ stores";
  const proofLabel = config.proofLabel || "trust Bazzar";
  const proofRating = config.proofRating || "4.9 / 5 rating";

  const slide1Poster =
    config.slide1Poster ||
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80";
  const slide1Thumb =
    config.slide1Thumb ||
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&q=70";
  const slide1Label = config.slide1Label || "Scene 01";
  const slide1Src1 =
    config.slide1Src1 || "https://media.w3.org/2010/05/sintel/trailer.mp4";
  const slide1Src2 =
    config.slide1Src2 || "https://www.w3schools.com/html/mov_bbb.mp4";

  const slide2Poster =
    config.slide2Poster ||
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80";
  const slide2Thumb =
    config.slide2Thumb ||
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&q=70";
  const slide2Label = config.slide2Label || "Scene 02";
  const slide2Src1 =
    config.slide2Src1 || "https://media.w3.org/2010/05/video/movie_300.mp4";
  const slide2Src2 =
    config.slide2Src2 || "https://www.w3schools.com/html/mov_bbb.mp4";

  const slide3Poster =
    config.slide3Poster ||
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80";
  const slide3Thumb =
    config.slide3Thumb ||
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70";
  const slide3Label = config.slide3Label || "Scene 03";
  const slide3Src1 =
    config.slide3Src1 || "https://www.w3schools.com/html/mov_bbb.mp4";
  const slide3Src2 =
    config.slide3Src2 || "https://media.w3.org/2010/05/sintel/trailer.mp4";

  return `<!-- Hero V11 — Full Viewport 3-Video Slider | Shopify Bazzar -->
<style>
  .hv11 *, .hv11 *::before, .hv11 *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .hv11 {
    font-family: inherit;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    background: #000;
  }

  .hv11__hero {
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    min-height: 600px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
  }

  .hv11__track {
    position: absolute;
    inset: 0;
    display: flex;
    width: 300%;
    height: 100%;
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    will-change: transform;
    z-index: 0;
  }

  .hv11__slide {
    position: relative;
    width: 33.3333%;
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
  }

  .hv11__slide video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .hv11__slide-poster {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: 1;
    transition: opacity 1s ease;
  }

  .hv11__slide-poster.hide {
    opacity: 0;
    pointer-events: none;
  }

  .hv11__overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.15) 0%,
        rgba(0,0,0,0.04) 30%,
        rgba(0,0,0,0.08) 55%,
        rgba(0,0,0,0.70) 82%,
        rgba(0,0,0,0.88) 100%
      ),
      radial-gradient(ellipse 80% 100% at 50% 60%, transparent 40%, rgba(0,0,0,0.28) 100%);
  }

  .hv11__grain {
    position: absolute;
    inset: 0;
    z-index: 3;
    opacity: 0.028;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 256px 256px;
  }

  .hv11__glow {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(480px, 80vw, 1100px);
    height: 320px;
    background: radial-gradient(ellipse at center bottom, rgba(99,102,241,0.13) 0%, transparent 72%);
    z-index: 3;
    pointer-events: none;
  }

  .hv11__inner {
    position: relative;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 880px;
    padding: 0 clamp(20px, 5vw, 60px);
    font-family: inherit;
  }

  .hv11__inner > * {
    opacity: 0;
    animation: hv11up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hv11__badge { animation-delay: 0.20s; }
  .hv11__title { animation-delay: 0.32s; }
  .hv11__subtitle { animation-delay: 0.44s; }
  .hv11__actions { animation-delay: 0.56s; }
  .hv11__proof { animation-delay: 0.68s; }

  @keyframes hv11up {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hv11__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(99,102,241,0.14);
    border: 1px solid rgba(99,102,241,0.32);
    color: #c7d2fe;
    padding: 6px 16px 6px 10px;
    border-radius: 999px;
    font-size: clamp(0.65rem, 0.9vw, 0.75rem);
    font-weight: 600;
    letter-spacing: 0.04em;
    margin-bottom: clamp(18px, 2.8vw, 28px);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    font-family: inherit;
  }

  .hv11__badge-pulse {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${logoAccentColor};
    animation: hv11pulse 2.2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes hv11pulse {
    0% { box-shadow: 0 0 0 0 rgba(129,140,248,0.6); }
    60% { box-shadow: 0 0 0 7px rgba(129,140,248,0); }
    100% { box-shadow: 0 0 0 0 rgba(129,140,248,0); }
  }

  .hv11__title {
    font-family: inherit;
    font-size: clamp(2.4rem, 7vw, 5.6rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.02;
    letter-spacing: -0.04em;
    margin-bottom: clamp(14px, 2vw, 22px);
    text-wrap: balance;
    text-shadow: 0 2px 40px rgba(0,0,0,0.5);
  }

  .hv11__title em {
    font-style: normal;
    background: linear-gradient(115deg, #c7d2fe 0%, #a5b4fc 30%, #818cf8 65%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hv11__subtitle {
    font-family: inherit;
    font-size: clamp(0.92rem, 1.5vw, 1.14rem);
    font-weight: 400;
    color: rgba(255,255,255,0.58);
    max-width: 520px;
    line-height: 1.72;
    margin-bottom: clamp(26px, 4vw, 42px);
  }

  .hv11__actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: clamp(28px, 4.5vw, 52px);
  }

  .hv11__btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: ${btn1Bg};
    color: #fff;
    font-family: inherit;
    font-size: clamp(0.82rem, 1.05vw, 0.94rem);
    font-weight: 700;
    letter-spacing: 0.01em;
    padding: clamp(13px, 1.6vw, 16px) clamp(26px, 3.2vw, 40px);
    border-radius: 12px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 0 0 1px rgba(99,102,241,0.5), 0 6px 24px rgba(99,102,241,0.42), 0 1px 4px rgba(0,0,0,0.4);
    transition: background 180ms, box-shadow 180ms, transform 150ms;
  }

  .hv11__btn-primary:hover {
    background: ${btn1BgHover};
    box-shadow: 0 0 0 1px rgba(99,102,241,0.7), 0 10px 36px rgba(99,102,241,0.55), 0 1px 4px rgba(0,0,0,0.4);
    transform: translateY(-2px);
  }

  .hv11__btn-primary svg { transition: transform 200ms; }
  .hv11__btn-primary:hover svg { transform: translateX(4px); }

  .hv11__btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.88);
    font-family: inherit;
    font-size: clamp(0.82rem, 1.05vw, 0.94rem);
    font-weight: 600;
    padding: clamp(13px, 1.6vw, 16px) clamp(26px, 3.2vw, 40px);
    border-radius: 12px;
    border: 1.5px solid rgba(255,255,255,0.16);
    cursor: pointer;
    text-decoration: none;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: background 180ms, border-color 180ms, transform 150ms;
  }

  .hv11__btn-ghost:hover {
    background: rgba(255,255,255,0.13);
    border-color: rgba(255,255,255,0.30);
    transform: translateY(-2px);
  }

  .hv11__proof {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
    font-family: inherit;
  }

  .hv11__avatars { display: flex; }

  .hv11__av {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid rgba(0,0,0,0.6);
    object-fit: cover;
    display: block;
    margin-left: -9px;
  }

  .hv11__av:first-child { margin-left: 0; }
  .hv11__proof-sep { width: 1px; height: 26px; background: rgba(255,255,255,0.14); flex-shrink: 0; }
  .hv11__proof-stat { text-align: left; }

  .hv11__proof-stat strong {
    display: block;
    font-size: clamp(0.8rem, 1vw, 0.88rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    font-family: inherit;
  }

  .hv11__proof-stat span {
    font-size: clamp(0.62rem, 0.8vw, 0.7rem);
    color: rgba(255,255,255,0.45);
    font-family: inherit;
  }

  .hv11__stars {
    color: #fbbf24;
    font-size: 0.82rem;
    letter-spacing: 1px;
  }

  .hv11__controls {
    position: absolute;
    bottom: clamp(18px, 3.5vw, 36px);
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(20px, 5vw, 60px);
    gap: 16px;
  }

  .hv11__slider-tabs {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .hv11__tab {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    align-items: flex-start;
    transition: opacity 200ms;
    opacity: 0.5;
    min-width: clamp(60px, 8vw, 100px);
    max-width: 120px;
    font-family: inherit;
  }

  .hv11__tab.active { opacity: 1; }
  .hv11__tab:hover { opacity: 0.8; }

  .hv11__tab-thumb {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 6px;
    overflow: hidden;
    border: 1.5px solid rgba(255,255,255,0.10);
    position: relative;
    transition: border-color 200ms;
  }

  .hv11__tab.active .hv11__tab-thumb {
    border-color: rgba(255,255,255,0.55);
    box-shadow: 0 0 0 1px rgba(99,102,241,0.4);
  }

  .hv11__tab-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hv11__tab-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5px;
    background: rgba(255,255,255,0.18);
  }

  .hv11__tab-progress-fill {
    height: 100%;
    width: 0%;
    background: ${logoAccentColor};
    transition: width 0.25s linear;
  }

  .hv11__tab-label {
    font-size: clamp(0.58rem, 0.78vw, 0.66rem);
    font-weight: 600;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.04em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    line-height: 1.2;
    transition: color 200ms;
    font-family: inherit;
  }

  .hv11__tab.active .hv11__tab-label { color: rgba(255,255,255,0.9); }

  .hv11__scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.30);
    font-family: inherit;
  }

  .hv11__scroll-bar {
    width: 1px;
    height: 28px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
    animation: hv11scroll 2s ease-in-out infinite;
  }

  @keyframes hv11scroll {
    0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
    30% { opacity: 1; }
    100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
  }

  .hv11__right-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hv11__arrow-btn,
  .hv11__icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.09);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.16);
    color: rgba(255,255,255,0.8);
    cursor: pointer;
    transition: background 180ms, transform 140ms;
    font-family: inherit;
  }

  .hv11__icon-btn {
    color: rgba(255,255,255,0.75);
  }

  .hv11__arrow-btn:hover,
  .hv11__icon-btn:hover {
    background: rgba(255,255,255,0.20);
    transform: scale(1.1);
  }

  .hv11__arrow-btn svg,
  .hv11__icon-btn svg {
    pointer-events: none;
    display: block;
  }

  @media (max-width: 640px) {
    .hv11__tab-label { display: none; }
    .hv11__tab { min-width: 48px; }
    .hv11__scroll { display: none; }
  }

  @media (max-width: 480px) {
    .hv11__actions { flex-direction: column; align-items: center; }
    .hv11__btn-primary, .hv11__btn-ghost { width: 100%; max-width: 300px; justify-content: center; }
    .hv11__proof-sep { display: none; }
    .hv11__slider-tabs { gap: 6px; }
    .hv11__tab { min-width: 44px; max-width: 64px; }
  }
</style>

<div class="hv11">
<section class="hv11__hero" id="hv11-hero">
  <div class="hv11__track" id="hv11-track">
    <div class="hv11__slide">
      <div class="hv11__slide-poster" id="hv11-poster0" style="background-image:url('${slide1Poster}')"></div>
      <video id="hv11-vid0" muted playsinline preload="auto" poster="${slide1Poster}">
        <source src="${slide1Src1}" type="video/mp4"/>
        <source src="${slide1Src2}" type="video/mp4"/>
      </video>
    </div>

    <div class="hv11__slide">
      <div class="hv11__slide-poster" id="hv11-poster1" style="background-image:url('${slide2Poster}')"></div>
      <video id="hv11-vid1" muted playsinline preload="auto" poster="${slide2Poster}">
        <source src="${slide2Src1}" type="video/mp4"/>
        <source src="${slide2Src2}" type="video/mp4"/>
      </video>
    </div>

    <div class="hv11__slide">
      <div class="hv11__slide-poster" id="hv11-poster2" style="background-image:url('${slide3Poster}')"></div>
      <video id="hv11-vid2" muted playsinline preload="auto" poster="${slide3Poster}">
        <source src="${slide3Src1}" type="video/mp4"/>
        <source src="${slide3Src2}" type="video/mp4"/>
      </video>
    </div>
  </div>

  <div class="hv11__overlay"></div>
  <div class="hv11__grain"></div>
  <div class="hv11__glow"></div>

  <div class="hv11__inner">
    <div class="hv11__badge">
      <span class="hv11__badge-pulse"></span>
      ${badgeText}
    </div>

    <h1 class="hv11__title">
      ${titleLine1}<br>${titleLine2} <em>${titleAccent}</em>
    </h1>

    <p class="hv11__subtitle">${subtitleText}</p>

    <div class="hv11__actions">
      <a href="${btn1Link}" class="hv11__btn-primary">
        ${btn1Text}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="${btn2Link}" class="hv11__btn-ghost">${btn2Text}</a>
    </div>

    <div class="hv11__proof">
      <div class="hv11__avatars">
        <img class="hv11__av" src="https://i.pravatar.cc/64?img=1" alt="" width="32" height="32" loading="lazy"/>
        <img class="hv11__av" src="https://i.pravatar.cc/64?img=5" alt="" width="32" height="32" loading="lazy"/>
        <img class="hv11__av" src="https://i.pravatar.cc/64?img=11" alt="" width="32" height="32" loading="lazy"/>
        <img class="hv11__av" src="https://i.pravatar.cc/64?img=20" alt="" width="32" height="32" loading="lazy"/>
        <img class="hv11__av" src="https://i.pravatar.cc/64?img=32" alt="" width="32" height="32" loading="lazy"/>
      </div>

      <div class="hv11__proof-stat">
        <strong>${proofCount}</strong><span>${proofLabel}</span>
      </div>

      <div class="hv11__proof-sep"></div>

      <div class="hv11__proof-stat">
        <div class="hv11__stars">★★★★★</div>
        <span>${proofRating}</span>
      </div>
    </div>
  </div>

  <div class="hv11__controls">
    <div class="hv11__slider-tabs" id="hv11-tabs">
      <button class="hv11__tab active" data-index="0" aria-label="Video 1">
        <div class="hv11__tab-thumb">
          <img src="${slide1Thumb}" alt="${slide1Label}" loading="lazy"/>
          <div class="hv11__tab-progress"><div class="hv11__tab-progress-fill" id="hv11-fill0"></div></div>
        </div>
        <span class="hv11__tab-label">${slide1Label}</span>
      </button>

      <button class="hv11__tab" data-index="1" aria-label="Video 2">
        <div class="hv11__tab-thumb">
          <img src="${slide2Thumb}" alt="${slide2Label}" loading="lazy"/>
          <div class="hv11__tab-progress"><div class="hv11__tab-progress-fill" id="hv11-fill1"></div></div>
        </div>
        <span class="hv11__tab-label">${slide2Label}</span>
      </button>

      <button class="hv11__tab" data-index="2" aria-label="Video 3">
        <div class="hv11__tab-thumb">
          <img src="${slide3Thumb}" alt="${slide3Label}" loading="lazy"/>
          <div class="hv11__tab-progress"><div class="hv11__tab-progress-fill" id="hv11-fill2"></div></div>
        </div>
        <span class="hv11__tab-label">${slide3Label}</span>
      </button>
    </div>

    <div class="hv11__scroll">
      <div class="hv11__scroll-bar"></div>
      Scroll
    </div>

    <div class="hv11__right-controls">
      <button class="hv11__arrow-btn" id="hv11-prev" aria-label="Previous video">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      </button>

      <button class="hv11__arrow-btn" id="hv11-next" aria-label="Next video">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>

      <button class="hv11__icon-btn" id="hv11-mute" aria-label="Unmute video">
        <svg id="hv11-muted-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
        </svg>

        <svg id="hv11-sound-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      </button>
    </div>
  </div>
</section>
</div>

<script>
(function () {
  var TOTAL = 3;
  var current = 0;
  var isMuted = true;
  var autoTimer = null;

  var track = document.getElementById('hv11-track');
  var tabs = document.querySelectorAll('.hv11__tab');
  var fills = [
    document.getElementById('hv11-fill0'),
    document.getElementById('hv11-fill1'),
    document.getElementById('hv11-fill2')
  ];
  var posters = [
    document.getElementById('hv11-poster0'),
    document.getElementById('hv11-poster1'),
    document.getElementById('hv11-poster2')
  ];
  var videos = [
    document.getElementById('hv11-vid0'),
    document.getElementById('hv11-vid1'),
    document.getElementById('hv11-vid2')
  ];
  var prevBtn = document.getElementById('hv11-prev');
  var nextBtn = document.getElementById('hv11-next');
  var muteBtn = document.getElementById('hv11-mute');
  var mutedSvg = document.getElementById('hv11-muted-svg');
  var soundSvg = document.getElementById('hv11-sound-svg');
  var heroEl = document.getElementById('hv11-hero');

  videos.forEach(function (v) {
    v.muted = true;
    v.volume = 0;
    v.load();
  });

  function goTo(index, skipAuto) {
    if (index < 0) index = TOTAL - 1;
    if (index >= TOTAL) index = 0;

    videos[current].pause();
    fills[current].style.width = '0%';
    current = index;

    track.style.transform = 'translateX(-' + (current * 33.3333) + '%)';
    tabs.forEach(function (t, i) {
      t.classList.toggle('active', i === current);
    });

    var v = videos[current];
    v.muted = isMuted;
    v.volume = isMuted ? 0 : 0.65;
    v.currentTime = 0;
    v.play().catch(function(){});

    posters[current].classList.remove('hide');
    v.addEventListener('playing', function onPlay() {
      posters[current].classList.add('hide');
      v.removeEventListener('playing', onPlay);
    });

    if (!skipAuto) resetAuto();
  }

  function tick() {
    var v = videos[current];
    if (v.duration) {
      var pct = (v.currentTime / v.duration) * 100;
      fills[current].style.width = pct + '%';
      if (pct >= 99.5) {
        goTo(current + 1, true);
        resetAuto();
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function startAuto() {
    autoTimer = setInterval(function () {
      goTo(current + 1, true);
    }, 12000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  function syncMute() {
    mutedSvg.style.display = isMuted ? 'block' : 'none';
    soundSvg.style.display = isMuted ? 'none' : 'block';
    muteBtn.setAttribute('aria-label', isMuted ? 'Unmute video' : 'Mute video');

    var v = videos[current];
    v.muted = isMuted;
    v.volume = isMuted ? 0 : 0.65;
  }

  muteBtn.addEventListener('click', function () {
    isMuted = !isMuted;
    syncMute();
  });

  prevBtn.addEventListener('click', function () {
    goTo(current - 1);
  });

  nextBtn.addEventListener('click', function () {
    goTo(current + 1);
  });

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      goTo(parseInt(tab.getAttribute('data-index')));
    });
  });

  var tx = 0;
  heroEl.addEventListener('touchstart', function (e) {
    tx = e.touches[0].clientX;
  }, { passive: true });

  heroEl.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'm' || e.key === 'M') {
      isMuted = !isMuted;
      syncMute();
    }
  });

  goTo(0, true);
  startAuto();

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) {
        videos[current].pause();
        clearInterval(autoTimer);
      } else {
        videos[current].play().catch(function(){});
        startAuto();
      }
    }, { threshold: 0.15 }).observe(heroEl);
  }
})();
</script>
  `;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function HeroV11({ config }) {
  return null;
}

