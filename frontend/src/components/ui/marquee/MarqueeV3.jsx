export function getMarqueeV3Code(config = {}) {
  const accentColor  = config.accentColor  || "#f3bb0b";
  const bgImageUrl   = config.bgImageUrl   || "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=1587&auto=format&fit=crop";
  const bgBrightness = config.bgBrightness || "0.25";

  const row1Text      = config.row1Text      || "You have brains in your head";
  const row1CharCount = config.row1CharCount || "28";
  const row2Text      = config.row2Text      || "You have feet in your shoes";
  const row2CharCount = config.row2CharCount || "30";
  const row3Text      = config.row3Text      || "You can steer yourself";
  const row3CharCount = config.row3CharCount || "22";
  const row4Text      = config.row4Text      || "Any direction you choose";
  const row4CharCount = config.row4CharCount || "24";

  return `<!-- Marquee V3 — Tilted Text Rows | Shopify Bazzar -->
<style>
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .mq3-shell {
    position: relative;
    width: 100%;
    height: clamp(320px, 60vw, 640px);
    background: #111;
    overflow: hidden;
  }

  .mq3-shell::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("${bgImageUrl}");
    background-size: cover;
    background-position: center;
    filter: brightness(${bgBrightness});
    z-index: 0;
  }

  .mq3-marquees {
    position: relative;
    z-index: 1;
    display: grid;
    align-content: center;
    gap: 4vw;
    height: 100%;
    overflow: hidden;
  }

  .mq3-marquee {
    --marquee-color:        ${accentColor};
    --marquee-repeat-count: 6;
    --marquee-base-dur:     1s;
    --marquee-repeat-size:  calc(100% / var(--marquee-repeat-count));
    --marquee-double-size:  calc(var(--marquee-repeat-size) * 2);
    --marquee-duration:     calc(var(--marquee-base-dur) * var(--char-count, 20));

    overflow: hidden;
    width: 110%;
    margin-left: -5%;
    mix-blend-mode: screen;
    background: var(--marquee-color);
    color: #000;
  }

  .mq3-marquee:nth-child(odd) {
    transform: rotate(-5deg);
  }

  .mq3-marquee:nth-child(even) {
    transform: rotate(5deg);
    background: #000;
    color: var(--marquee-color);
  }

  .mq3-marquee__inner {
    display: flex;
    width: max-content;
    text-transform: uppercase;
  }

  @media (prefers-reduced-motion: no-preference) {
    .mq3-marquee[data-direction="ltr"] .mq3-marquee__inner {
      animation: mq3-ltr var(--marquee-duration) linear infinite;
    }
    .mq3-marquee[data-direction="rtl"] .mq3-marquee__inner {
      animation: mq3-rtl var(--marquee-duration) linear infinite;
    }
    .mq3-marquee:hover .mq3-marquee__inner {
      animation-play-state: paused;
    }
  }

  .mq3-marquee__item {
    display: flex;
    align-items: baseline;
    gap: 0.5em;
    font-family: "Bebas Neue", sans-serif;
    font-size: clamp(2.5rem, 12vw, 6.2rem);
    font-weight: 700;
    line-height: 1.1;
    white-space: nowrap;
    transform: translateY(0.07em);
  }

  .mq3-marquee__item::after {
    content: "*";
    display: inline-block;
    transform: translateY(0.175em);
  }

  .mq3-marquee__item::before {
    content: "";
    display: inline-block;
    width: 0.25em;
  }

  @keyframes mq3-ltr {
    from { transform: translateX(calc(var(--marquee-double-size) * -1)); }
    to   { transform: translateX(0); }
  }

  @keyframes mq3-rtl {
    from { transform: translateX(0); }
    to   { transform: translateX(calc(var(--marquee-double-size) * -1)); }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

<div class="mq3-shell">
  <section class="mq3-marquees" aria-label="Scrolling text banners">

    <div class="mq3-marquee" data-direction="ltr" style="--char-count: ${row1CharCount}">
      <div class="mq3-marquee__inner">
        <p class="mq3-marquee__item">${row1Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row1Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row1Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row1Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row1Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row1Text}</p>
      </div>
    </div>

    <div class="mq3-marquee" data-direction="ltr" style="--char-count: ${row2CharCount}">
      <div class="mq3-marquee__inner">
        <p class="mq3-marquee__item">${row2Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row2Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row2Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row2Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row2Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row2Text}</p>
      </div>
    </div>

    <div class="mq3-marquee" data-direction="rtl" style="--char-count: ${row3CharCount}">
      <div class="mq3-marquee__inner">
        <p class="mq3-marquee__item">${row3Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row3Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row3Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row3Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row3Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row3Text}</p>
      </div>
    </div>

    <div class="mq3-marquee" data-direction="rtl" style="--char-count: ${row4CharCount}">
      <div class="mq3-marquee__inner">
        <p class="mq3-marquee__item">${row4Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row4Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row4Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row4Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row4Text}</p>
        <p class="mq3-marquee__item" aria-hidden="true">${row4Text}</p>
      </div>
    </div>

  </section>
</div>`;
}

export default function MarqueeV3({ config }) {
  return null;
}