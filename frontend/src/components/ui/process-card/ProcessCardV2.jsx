export function getProcessCardV2Code(config = {}) {
  const bgColor = config.bgColor || "#f5f6f8";
  const surfaceColor = config.surfaceColor || "#ffffff";
  const inkColor = config.inkColor || "#111827";
  const inkMid = config.inkMid || "#4b5563";
  const color1 = config.color1 || "#3b82f6";
  const color2 = config.color2 || "#10b981";
  const color3 = config.color3 || "#f59e0b";
  const color4 = config.color4 || "#8b5cf6";

  const pillIcon = config.pillIcon || "⚡";
  const pillText = config.pillText || "Simple Process";
  const titleText = config.titleText || "How Your Shopify Store Works";
  const subtitleText = config.subtitleText || "From product discovery to delivery — here's the seamless journey your customers experience every time they shop.";

  const step1Text = config.step1Text || "Customer browses your Shopify store and adds products to cart";
  const step1Num = config.step1Num || "01";
  const step2Text = config.step2Text || "Secure checkout with multiple payment options — cards, Shop Pay & more";
  const step2Num = config.step2Num || "02";
  const step3Text = config.step3Text || "Order confirmed instantly — customer receives email & tracking details";
  const step3Num = config.step3Num || "03";
  const step4Text = config.step4Text || "Product packed & shipped — delivered right to the customer's door";
  const step4Num = config.step4Num || "04";

  // Theme font support
  const fontFamily = config.fontFamily || "inherit";

  // Optional custom icon images
  const step1IconImg = config.step1IconImg || "";
  const step2IconImg = config.step2IconImg || "";
  const step3IconImg = config.step3IconImg || "";
  const step4IconImg = config.step4IconImg || "";

  function renderStepIcon(imgUrl, imgAlt, svgMarkup) {
    if (imgUrl && String(imgUrl).trim() !== "") {
      return `<img class="pcv2-step__icon-img" src="${imgUrl}" alt="${imgAlt}" loading="lazy" width="36" height="36">`;
    }
    return svgMarkup;
  }

  return `<!-- Process Card V2 — 4-Step Coloured Timeline | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --pcv2-bg:      ${bgColor};
    --pcv2-surface: ${surfaceColor};
    --pcv2-border:  rgba(0,0,0,.07);
    --pcv2-c1:      ${color1};
    --pcv2-c2:      ${color2};
    --pcv2-c3:      ${color3};
    --pcv2-c4:      ${color4};
    --pcv2-ink:     ${inkColor};
    --pcv2-ink-mid: ${inkMid};
    --pcv2-line:    rgba(0,0,0,.12);
    --pcv2-t:       .28s cubic-bezier(.4,0,.2,1);
  }

  .pcv2-wrap {
    font-family: ${fontFamily};
    background: var(--pcv2-bg);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 20px 80px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pcv2-section {
    width: 100%;
    max-width: 1100px;
  }

  /* ── Header ── */
  .pcv2-hdr {
    text-align: center;
    margin-bottom: 64px;
  }

  .pcv2-hdr__pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--pcv2-c1);
    background: rgba(59,130,246,.1);
    border: 1px solid rgba(59,130,246,.2);
    padding: 5px 14px;
    border-radius: 50px;
    margin-bottom: 18px;
    font-family: inherit;
  }

  .pcv2-hdr__title {
    font-size: clamp(24px, 4vw, 46px);
    font-weight: 800;
    color: var(--pcv2-ink);
    letter-spacing: -.025em;
    line-height: 1.1;
    margin-bottom: 14px;
    font-family: inherit;
  }

  .pcv2-hdr__sub {
    font-size: 16px;
    color: var(--pcv2-ink-mid);
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.65;
    font-family: inherit;
  }

  /* ── Timeline wrapper ── */
  .pcv2-timeline {
    position: relative;
  }

  .pcv2-timeline::before {
    content: '';
    position: absolute;
    top: 68px;
    left: calc(12.5% + 16px);
    right: calc(12.5% + 16px);
    height: 2px;
    background: var(--pcv2-line);
    z-index: 0;
  }

  /* ── Steps grid ── */
  .pcv2-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    position: relative;
    z-index: 1;
  }

  /* ── Single step ── */
  .pcv2-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: pcv2Up .5s ease both;
  }

  .pcv2-step:nth-child(1) { animation-delay: .06s; --pcv2-c: var(--pcv2-c1); }
  .pcv2-step:nth-child(2) { animation-delay: .14s; --pcv2-c: var(--pcv2-c2); }
  .pcv2-step:nth-child(3) { animation-delay: .22s; --pcv2-c: var(--pcv2-c3); }
  .pcv2-step:nth-child(4) { animation-delay: .30s; --pcv2-c: var(--pcv2-c4); }

  @keyframes pcv2Up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Icon bubble */
  .pcv2-step__bubble {
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: var(--pcv2-surface);
    border: 3px solid var(--pcv2-c);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0,0,0,.08);
    transition: transform var(--pcv2-t), box-shadow var(--pcv2-t);
    flex-shrink: 0;
    overflow: hidden;
  }

  .pcv2-step:hover .pcv2-step__bubble {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 12px 36px rgba(0,0,0,.14);
  }

  .pcv2-step__bubble svg {
    width: 36px;
    height: 36px;
    stroke: var(--pcv2-c);
    fill: none;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .pcv2-step__icon-img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    display: block;
  }

  /* Connector arrow bubble → card */
  .pcv2-step__arrow {
    width: 2px;
    height: 28px;
    background: var(--pcv2-c);
    opacity: .35;
    margin: 0 auto;
    position: relative;
  }

  .pcv2-step__arrow::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--pcv2-c);
  }

  /* Card */
  .pcv2-step__card {
    background: var(--pcv2-surface);
    border: 1.5px solid var(--pcv2-c);
    border-radius: 14px;
    padding: 22px 18px;
    width: 100%;
    min-height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px rgba(0,0,0,.05);
    transition: box-shadow var(--pcv2-t), transform var(--pcv2-t);
  }

  .pcv2-step:hover .pcv2-step__card {
    box-shadow: 0 8px 28px rgba(0,0,0,.1);
    transform: translateY(-2px);
  }

  .pcv2-step__card p {
    font-size: 15px;
    font-weight: 600;
    color: var(--pcv2-ink);
    line-height: 1.5;
    font-family: inherit;
  }

  /* Dashed connector card → number */
  .pcv2-step__dash {
    width: 2px;
    height: 20px;
    border-left: 2px dashed var(--pcv2-c);
    opacity: .4;
    margin: 0 auto;
  }

  /* Number badge */
  .pcv2-step__num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    padding: 10px 24px;
    border-radius: 50px;
    background: var(--pcv2-c);
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: .04em;
    box-shadow: 0 4px 14px rgba(0,0,0,.15);
    font-family: inherit;
  }

  /* ── 1280px+ wide desktop ── */
  @media (min-width: 1280px) {
    .pcv2-wrap { padding: 80px 40px 100px; }
    .pcv2-steps { gap: 28px; }
    .pcv2-step__bubble { width: 96px; height: 96px; }
    .pcv2-timeline::before { top: 72px; }
  }

  /* ── 900px–1023px ── */
  @media (max-width: 1023px) and (min-width: 901px) {
    .pcv2-steps { gap: 14px; }
    .pcv2-step__card p { font-size: 14px; }
    .pcv2-step__num { font-size: 15px; min-width: 76px; padding: 9px 18px; }
  }

  /* ── 900px tablet — 2-column ── */
  @media (max-width: 900px) {
    .pcv2-timeline::before { display: none; }
    .pcv2-steps { grid-template-columns: repeat(2, 1fr); gap: 28px; }
    .pcv2-hdr { margin-bottom: 48px; }
  }

  /* ── 600px — single column vertical ── */
  @media (max-width: 600px) {
    .pcv2-wrap { padding: 48px 16px 64px; }
    .pcv2-hdr { margin-bottom: 40px; }
    .pcv2-hdr__sub { font-size: 15px; }
    .pcv2-steps { grid-template-columns: 1fr; gap: 0; align-items: stretch; }
    .pcv2-step {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
      gap: 18px;
      padding-bottom: 36px;
      position: relative;
    }
    .pcv2-step:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 43px;
      top: 88px;
      bottom: 0;
      width: 2px;
      background: var(--pcv2-line);
      z-index: 0;
    }
    .pcv2-step__bubble { flex-shrink: 0; margin: 0; }
    .pcv2-step__body { display: flex; flex-direction: column; gap: 10px; flex: 1; padding-top: 6px; }
    .pcv2-step__arrow { display: none; }
    .pcv2-step__dash  { display: none; }
    .pcv2-step__card { min-height: auto; padding: 16px 14px; text-align: left; justify-content: flex-start; }
    .pcv2-step__card p { font-size: 14px; }
    .pcv2-step__num { align-self: flex-start; min-width: 70px; padding: 8px 18px; font-size: 14px; }
  }

  /* ── 400px — small phones ── */
  @media (max-width: 400px) {
    .pcv2-wrap { padding: 36px 12px 52px; }
    .pcv2-step__bubble { width: 72px; height: 72px; }
    .pcv2-step__bubble svg,
    .pcv2-step__icon-img { width: 28px; height: 28px; }
    .pcv2-step:not(:last-child)::after { left: 35px; top: 72px; }
    .pcv2-step__card p { font-size: 13px; }
    .pcv2-step__num { font-size: 13px; min-width: 60px; padding: 7px 14px; }
    .pcv2-hdr__title { font-size: clamp(22px, 7vw, 32px); }
    .pcv2-hdr__sub { font-size: 14px; }
  }
</style>

<div class="pcv2-wrap">
<section class="pcv2-section" aria-label="How it works">

  <header class="pcv2-hdr">
    <p class="pcv2-hdr__pill">${pillIcon} ${pillText}</p>
    <h2 class="pcv2-hdr__title">${titleText}</h2>
    <p class="pcv2-hdr__sub">${subtitleText}</p>
  </header>

  <div class="pcv2-timeline">
    <div class="pcv2-steps">

      <!-- Step 1 -->
      <div class="pcv2-step">
        <div class="pcv2-step__bubble" aria-hidden="true">
          ${renderStepIcon(
            step1IconImg,
            "Step 1 icon",
            `<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`
          )}
        </div>
        <div class="pcv2-step__body">
          <div class="pcv2-step__arrow"></div>
          <div class="pcv2-step__card"><p>${step1Text}</p></div>
          <div class="pcv2-step__dash"></div>
          <span class="pcv2-step__num">${step1Num}</span>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="pcv2-step">
        <div class="pcv2-step__bubble" aria-hidden="true">
          ${renderStepIcon(
            step2IconImg,
            "Step 2 icon",
            `<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`
          )}
        </div>
        <div class="pcv2-step__body">
          <div class="pcv2-step__arrow"></div>
          <div class="pcv2-step__card"><p>${step2Text}</p></div>
          <div class="pcv2-step__dash"></div>
          <span class="pcv2-step__num">${step2Num}</span>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="pcv2-step">
        <div class="pcv2-step__bubble" aria-hidden="true">
          ${renderStepIcon(
            step3IconImg,
            "Step 3 icon",
            `<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`
          )}
        </div>
        <div class="pcv2-step__body">
          <div class="pcv2-step__arrow"></div>
          <div class="pcv2-step__card"><p>${step3Text}</p></div>
          <div class="pcv2-step__dash"></div>
          <span class="pcv2-step__num">${step3Num}</span>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="pcv2-step">
        <div class="pcv2-step__bubble" aria-hidden="true">
          ${renderStepIcon(
            step4IconImg,
            "Step 4 icon",
            `<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
          )}
        </div>
        <div class="pcv2-step__body">
          <div class="pcv2-step__arrow"></div>
          <div class="pcv2-step__card"><p>${step4Text}</p></div>
          <div class="pcv2-step__dash"></div>
          <span class="pcv2-step__num">${step4Num}</span>
        </div>
      </div>

    </div>
  </div>

</section>
</div>`;
}

export default function ProcessCardV2({ config }) {
  return null;
}