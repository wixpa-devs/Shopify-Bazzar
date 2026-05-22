export function getProcessCardV3Code(config = {}) {
  const bgColor = config.bgColor || "#141414";
  const bg2Color = config.bg2Color || "#1a1a1a";
  const lineColor = config.lineColor || "#2a2a2a";
  const redColor = config.redColor || "#E03A2F";
  const red2Color = config.red2Color || "#c42e24";
  const whiteColor = config.whiteColor || "#F5F4F0";
  const midColor = config.midColor || "#999";
  const mutedColor = config.mutedColor || "#666";

  const headingLine1 = config.headingLine1 || "The <em>Right</em> Way.";
  const headingLine2 = config.headingLine2 || "Every Time.";
  const subText =
    config.subText ||
    "We don't do one-size-fits-all. Every order, every customer, every step — handled with the same care and precision.";

  const cell1Label = config.cell1Label || "Step 01";
  const cell1Title = config.cell1Title || "Browse on Your Terms";
  const cell1Body =
    config.cell1Body ||
    "Filter by what matters to you — category, price, material, size. Our catalogue is built to get you to the right product without the noise.";

  const cell2Label = config.cell2Label || "Step 02";
  const cell2Title = config.cell2Title || "Checkout Without the Friction";
  const cell2Body =
    config.cell2Body ||
    "Saved addresses, multiple payment options, instant confirmation. From cart to complete in under two minutes — every single time.";

  const cell3Label = config.cell3Label || "Step 03";
  const cell3Title = config.cell3Title || "Packed by People Who Care";
  const cell3Body =
    config.cell3Body ||
    "Every item is handpicked and quality-checked by our team within 24 hours. Packed right — not rushed, not forgotten, not damaged.";

  const cell4Label = config.cell4Label || "Step 04";
  const cell4Title = config.cell4Title || "Delivered to Your Door";
  const cell4Body =
    config.cell4Body ||
    "2 to 5 days with live tracking from the moment it leaves us. You'll know exactly where your order is — no chasing, no guessing, no waiting.";

  const stat1Val = config.stat1Val || "24";
  const stat1Unit = config.stat1Unit || "H";
  const stat1Label = config.stat1Label || "Dispatch";

  const stat2Val = config.stat2Val || "5";
  const stat2Unit = config.stat2Unit || "D";
  const stat2Label = config.stat2Label || "Delivery";

  const stat3Val = config.stat3Val || "30";
  const stat3Unit = config.stat3Unit || "D";
  const stat3Label = config.stat3Label || "Returns";

  const stat4Val = config.stat4Val || "7";
  const stat4Unit = config.stat4Unit || "/7";
  const stat4Label = config.stat4Label || "Support";

  const btnLabel = config.btnLabel || "Start shopping";
  const btnUrl = config.btnUrl || "#";

  // Optional: theme font override (for iframe usage)
  const fontFamily = config.fontFamily || "inherit";

  return `<!-- Process Card V3 — Dark Grid with Stats Footer | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --pcv3-bg:     ${bgColor};
    --pcv3-bg2:    ${bg2Color};
    --pcv3-line:   ${lineColor};
    --pcv3-red:    ${redColor};
    --pcv3-red2:   ${red2Color};
    --pcv3-muted:  ${mutedColor};
    --pcv3-mid:    ${midColor};
    --pcv3-white:  ${whiteColor};
  }

  .pcv3-body {
    font-family: ${fontFamily};
    background: var(--pcv3-bg);
    color: var(--pcv3-white);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 72px 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ── Wrapper ── */
  .pcv3-hiw {
    width: 100%;
    max-width: 960px;
  }

  /* ── Header ── */
  .pcv3-hiw__header {
    text-align: center;
    margin-bottom: 72px;
    animation: pcv3FadeUp .6s .05s both;
  }

  .pcv3-hiw__heading {
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 800;
    line-height: .95;
    letter-spacing: .01em;
    color: var(--pcv3-white);
    margin-bottom: 24px;
    font-family: inherit;
  }

  .pcv3-hiw__heading em {
    font-style: normal;
    color: var(--pcv3-red);
  }

  .pcv3-hiw__sub {
    font-size: 15px;
    font-weight: 300;
    color: var(--pcv3-mid);
    line-height: 1.75;
    max-width: 460px;
    margin: 0 auto;
    font-family: inherit;
  }

  /* ── Grid ── */
  .pcv3-hiw__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--pcv3-line);
    border: 1px solid var(--pcv3-line);
  }

  /* ── Cell ── */
  .pcv3-hiw__cell {
    background: var(--pcv3-bg);
    padding: 48px 44px 52px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: background .3s ease;
  }

  .pcv3-hiw__cell:hover {
    background: var(--pcv3-bg2);
  }

  .pcv3-hiw__cell::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: var(--pcv3-red);
    transition: height .4s cubic-bezier(.16,1,.3,1);
  }

  .pcv3-hiw__cell:hover::before {
    height: 100%;
  }

  /* ── Big ghost number ── */
  .pcv3-hiw__num {
    font-size: 88px;
    line-height: .85;
    letter-spacing: .01em;
    color: var(--pcv3-red);
    opacity: .18;
    position: absolute;
    top: 28px;
    right: 32px;
    user-select: none;
    transition: opacity .3s;
    font-family: inherit;
  }

  .pcv3-hiw__cell:hover .pcv3-hiw__num {
    opacity: .28;
  }

  /* ── Step label ── */
  .pcv3-hiw__step-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--pcv3-red);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: inherit;
  }

  .pcv3-hiw__step-label::after {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    background: var(--pcv3-red);
    opacity: .5;
  }

  /* ── Cell title ── */
  .pcv3-hiw__cell-title {
    font-size: 22px;
    font-weight: 700;
    color: var(--pcv3-white);
    line-height: 1.25;
    margin-bottom: 16px;
    letter-spacing: -.01em;
    max-width: 280px;
    position: relative;
    z-index: 1;
    font-family: inherit;
  }

  /* ── Cell body ── */
  .pcv3-hiw__cell-body {
    font-size: 14px;
    font-weight: 300;
    color: var(--pcv3-mid);
    line-height: 1.8;
    max-width: 320px;
    position: relative;
    z-index: 1;
    font-family: inherit;
  }

  /* ── Footer ── */
  .pcv3-hiw__foot {
    margin-top: 1px;
    background: var(--pcv3-bg2);
    border: 1px solid var(--pcv3-line);
    border-top: none;
    padding: 32px 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    animation: pcv3FadeUp .5s .54s both;
  }

  .pcv3-hiw__foot-stats {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .pcv3-hiw__stat {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .pcv3-hiw__stat-val {
    font-size: 32px;
    color: var(--pcv3-white);
    line-height: 1;
    letter-spacing: .02em;
    font-family: inherit;
  }

  .pcv3-hiw__stat-val span {
    font-size: 18px;
    color: var(--pcv3-red);
  }

  .pcv3-hiw__stat-label {
    font-size: 11px;
    font-weight: 400;
    color: var(--pcv3-muted);
    letter-spacing: .08em;
    text-transform: uppercase;
    font-family: inherit;
  }

  .pcv3-hiw__foot-sep {
    width: 1px;
    height: 36px;
    background: var(--pcv3-line);
    flex-shrink: 0;
  }

  /* ── Button ── */
  .pcv3-hiw__btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--pcv3-white);
    background: var(--pcv3-red);
    padding: 14px 32px;
    text-decoration: none;
    white-space: nowrap;
    transition: background .2s, transform .15s;
    flex-shrink: 0;
    font-family: inherit;
  }

  .pcv3-hiw__btn:hover {
    background: var(--pcv3-red2);
    transform: translateY(-2px);
  }

  .pcv3-hiw__btn svg {
    width: 13px;
    height: 13px;
    transition: transform .2s;
  }

  .pcv3-hiw__btn:hover svg { transform: translateX(4px); }

  /* ── Animations ── */
  @keyframes pcv3FadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pcv3-hiw__cell:nth-child(1) { animation: pcv3FadeUp .5s .20s both; }
  .pcv3-hiw__cell:nth-child(2) { animation: pcv3FadeUp .5s .30s both; }
  .pcv3-hiw__cell:nth-child(3) { animation: pcv3FadeUp .5s .38s both; }
  .pcv3-hiw__cell:nth-child(4) { animation: pcv3FadeUp .5s .46s both; }

  /* ── Large tablet 768px–1024px ── */
  @media (max-width: 1024px) and (min-width: 768px) {
    .pcv3-body { padding: 60px 32px; }
    .pcv3-hiw__header { margin-bottom: 56px; }
    .pcv3-hiw__cell { padding: 40px 36px 44px; }
    .pcv3-hiw__num { font-size: 72px; top: 22px; right: 24px; }
    .pcv3-hiw__cell-title { font-size: 20px; max-width: 240px; }
    .pcv3-hiw__cell-body { font-size: 13.5px; max-width: 280px; }
    .pcv3-hiw__foot { padding: 28px 36px; gap: 20px; }
    .pcv3-hiw__foot-stats { gap: 28px; }
    .pcv3-hiw__stat-val { font-size: 28px; }
    .pcv3-hiw__btn { padding: 12px 24px; font-size: 12px; }
  }

  /* ── Small tablet 540px–767px ── */
  @media (max-width: 767px) and (min-width: 541px) {
    .pcv3-body { padding: 52px 24px; }
    .pcv3-hiw__header { margin-bottom: 48px; }
    .pcv3-hiw__sub { font-size: 14px; max-width: 400px; }
    .pcv3-hiw__cell { padding: 36px 28px 40px; }
    .pcv3-hiw__num { font-size: 60px; top: 18px; right: 20px; }
    .pcv3-hiw__cell-title { font-size: 18px; max-width: 220px; }
    .pcv3-hiw__cell-body { font-size: 13px; max-width: 260px; }
    .pcv3-hiw__foot {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      padding: 28px 28px;
    }
    .pcv3-hiw__foot-stats { gap: 20px; }
    .pcv3-hiw__stat-val { font-size: 26px; }
    .pcv3-hiw__btn { width: 100%; justify-content: center; padding: 14px 24px; }
  }

  /* ── Mobile 400px–540px ── */
  @media (max-width: 540px) {
    .pcv3-body { padding: 48px 16px; }
    .pcv3-hiw__header { margin-bottom: 40px; }
    .pcv3-hiw__sub { font-size: 14px; }
    .pcv3-hiw__grid { grid-template-columns: 1fr; }
    .pcv3-hiw__cell { padding: 36px 28px 40px; }
    .pcv3-hiw__num { font-size: 60px; top: 18px; right: 20px; }
    .pcv3-hiw__cell-title { font-size: 19px; max-width: 100%; }
    .pcv3-hiw__cell-body { font-size: 13.5px; max-width: 100%; }
    .pcv3-hiw__foot {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      padding: 28px 28px;
    }
    .pcv3-hiw__foot-stats { gap: 20px; }
    .pcv3-hiw__stat-val { font-size: 28px; }
    .pcv3-hiw__btn { width: 100%; justify-content: center; }
  }

  /* ── Small phones under 400px ── */
  @media (max-width: 400px) {
    .pcv3-body { padding: 36px 12px 48px; }
    .pcv3-hiw__header { margin-bottom: 32px; }
    .pcv3-hiw__heading { font-size: clamp(36px, 10vw, 52px); }
    .pcv3-hiw__sub { font-size: 13px; }
    .pcv3-hiw__cell { padding: 28px 20px 32px; }
    .pcv3-hiw__num { font-size: 48px; top: 14px; right: 16px; }
    .pcv3-hiw__step-label { font-size: 10px; }
    .pcv3-hiw__cell-title { font-size: 17px; }
    .pcv3-hiw__cell-body { font-size: 13px; }
    .pcv3-hiw__foot { padding: 20px 20px; gap: 20px; }
    .pcv3-hiw__foot-stats { gap: 14px; }
    .pcv3-hiw__foot-sep { display: none; }
    .pcv3-hiw__stat-val { font-size: 24px; }
    .pcv3-hiw__stat-val span { font-size: 15px; }
    .pcv3-hiw__stat-label { font-size: 10px; }
    .pcv3-hiw__btn { font-size: 12px; padding: 13px 20px; }
  }
</style>

<div class="pcv3-body">
<section class="pcv3-hiw">

  <!-- Header -->
  <div class="pcv3-hiw__header">
    <h2 class="pcv3-hiw__heading">${headingLine1}<br>${headingLine2}</h2>
    <p class="pcv3-hiw__sub">${subText}</p>
  </div>

  <!-- Grid -->
  <div class="pcv3-hiw__grid">
    <div class="pcv3-hiw__cell">
      <span class="pcv3-hiw__num">01</span>
      <p class="pcv3-hiw__step-label">${cell1Label}</p>
      <p class="pcv3-hiw__cell-title">${cell1Title}</p>
      <p class="pcv3-hiw__cell-body">${cell1Body}</p>
    </div>

    <div class="pcv3-hiw__cell">
      <span class="pcv3-hiw__num">02</span>
      <p class="pcv3-hiw__step-label">${cell2Label}</p>
      <p class="pcv3-hiw__cell-title">${cell2Title}</p>
      <p class="pcv3-hiw__cell-body">${cell2Body}</p>
    </div>

    <div class="pcv3-hiw__cell">
      <span class="pcv3-hiw__num">03</span>
      <p class="pcv3-hiw__step-label">${cell3Label}</p>
      <p class="pcv3-hiw__cell-title">${cell3Title}</p>
      <p class="pcv3-hiw__cell-body">${cell3Body}</p>
    </div>

    <div class="pcv3-hiw__cell">
      <span class="pcv3-hiw__num">04</span>
      <p class="pcv3-hiw__step-label">${cell4Label}</p>
      <p class="pcv3-hiw__cell-title">${cell4Title}</p>
      <p class="pcv3-hiw__cell-body">${cell4Body}</p>
    </div>
  </div>

  <!-- Footer bar -->
  <div class="pcv3-hiw__foot">
    <div class="pcv3-hiw__foot-stats">
      <div class="pcv3-hiw__stat">
        <span class="pcv3-hiw__stat-val">${stat1Val}<span>${stat1Unit}</span></span>
        <span class="pcv3-hiw__stat-label">${stat1Label}</span>
      </div>
      <div class="pcv3-hiw__foot-sep"></div>
      <div class="pcv3-hiw__stat">
        <span class="pcv3-hiw__stat-val">${stat2Val}<span>${stat2Unit}</span></span>
        <span class="pcv3-hiw__stat-label">${stat2Label}</span>
      </div>
      <div class="pcv3-hiw__foot-sep"></div>
      <div class="pcv3-hiw__stat">
        <span class="pcv3-hiw__stat-val">${stat3Val}<span>${stat3Unit}</span></span>
        <span class="pcv3-hiw__stat-label">${stat3Label}</span>
      </div>
      <div class="pcv3-hiw__foot-sep"></div>
      <div class="pcv3-hiw__stat">
        <span class="pcv3-hiw__stat-val">${stat4Val}<span>${stat4Unit}</span></span>
        <span class="pcv3-hiw__stat-label">${stat4Label}</span>
      </div>
    </div>
    <a href="${btnUrl}" class="pcv3-hiw__btn">
      ${btnLabel}
      <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6.5h11M7.5 2.5l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>

</section>
</div>`;
}

export default function ProcessCardV3({ config }) {
  return null;
}