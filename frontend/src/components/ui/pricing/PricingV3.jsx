export function getPricingV3Code(config = {}) {
  const bgColor = config.bgColor || "#0c0c10";
  const surfaceColor = config.surfaceColor || "#13131a";
  const surface2Color = config.surface2Color || "#1c1c26";
  const inkColor = config.inkColor || "#f0f0f5";
  const accentColor = config.accentColor || "#e8ff47";
  const accentDark = config.accentDark || "#c8df20";

  const eyebrowText = config.eyebrowText || "Storage Plans";
  const titleLine1 = config.titleLine1 || "Pay for what";
  const titleEmphasis = config.titleEmphasis || "actually";
  const titleLine2 = config.titleLine2 || "need";
  const subtitleText = config.subtitleText || "Flat pricing, no overages. Upgrade or downgrade at any time, no questions asked.";
  const saveBadgeText = config.saveBadgeText || "−20%";

  const card1Tag = config.card1Tag || "Starter";
  const card1Name = config.card1Name || "Basic";
  const card1AnnualP = config.card1AnnualP || "199.99";
  const card1MonthlyP = config.card1MonthlyP || "239.99";
  const card1S1Key = config.card1S1Key || "Storage";
  const card1S1Val = config.card1S1Val || "500 GB";
  const card1S2Key = config.card1S2Key || "Users";
  const card1S2Val = config.card1S2Val || "2 seats";
  const card1S3Key = config.card1S3Key || "Transfer";
  const card1S3Val = config.card1S3Val || "Up to 3 GB";
  const card1S4Key = config.card1S4Key || "Support";
  const card1S4Val = config.card1S4Val || "Email";
  const card1Btn = config.card1Btn || "Get Basic";

  const card2Tag = config.card2Tag || "Most Popular";
  const card2Name = config.card2Name || "Professional";
  const card2AnnualP = config.card2AnnualP || "249.99";
  const card2MonthlyP = config.card2MonthlyP || "299.99";
  const card2S1Key = config.card2S1Key || "Storage";
  const card2S1Val = config.card2S1Val || "1 TB";
  const card2S2Key = config.card2S2Key || "Users";
  const card2S2Val = config.card2S2Val || "5 seats";
  const card2S3Key = config.card2S3Key || "Transfer";
  const card2S3Val = config.card2S3Val || "Up to 10 GB";
  const card2S4Key = config.card2S4Key || "Support";
  const card2S4Val = config.card2S4Val || "Priority";
  const card2Btn = config.card2Btn || "Get Professional";

  const card3Tag = config.card3Tag || "Enterprise";
  const card3Name = config.card3Name || "Master";
  const card3AnnualP = config.card3AnnualP || "399.99";
  const card3MonthlyP = config.card3MonthlyP || "479.99";
  const card3S1Key = config.card3S1Key || "Storage";
  const card3S1Val = config.card3S1Val || "2 TB";
  const card3S2Key = config.card3S2Key || "Users";
  const card3S2Val = config.card3S2Val || "10 seats";
  const card3S3Key = config.card3S3Key || "Transfer";
  const card3S3Val = config.card3S3Val || "Up to 20 GB";
  const card3S4Key = config.card3S4Key || "Support";
  const card3S4Val = config.card3S4Val || "Dedicated";
  const card3Btn = config.card3Btn || "Get Master";

  return `<!-- Pricing V3 — Dark Electric with Billing Toggle | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pv3-wrap {
    font-family: 'Epilogue', Arial, sans-serif;
    background: ${bgColor};
    color: ${inkColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px 80px;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── Header ── */
  .pv3-header {
    text-align: center;
    margin-bottom: 52px;
    width: 100%;
    max-width: 980px;
  }

  .pv3-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'Syne', Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: ${accentColor};
    margin-bottom: 18px;
  }
  .pv3-eyebrow::before,
  .pv3-eyebrow::after {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    background: ${accentColor};
    opacity: .5;
  }

  .pv3-title {
    font-family: 'Syne', Arial, sans-serif;
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -.02em;
    margin-bottom: 14px;
    color: ${inkColor};
  }
  .pv3-title em {
    font-style: normal;
    color: ${accentColor};
  }

  .pv3-sub {
    font-size: clamp(13px, 2vw, 15px);
    color: rgba(240,240,245,.45);
    max-width: 380px;
    margin: 0 auto 32px;
    line-height: 1.65;
  }

  /* ── Toggle ── */
  .pv3-toggle {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    background: ${surfaceColor};
    border: 1px solid rgba(255,255,255,.07);
    border-radius: 50px;
    padding: 6px 18px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pv3-lbl {
    font-family: 'Syne', Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: rgba(240,240,245,.45);
    cursor: pointer;
    transition: color .26s cubic-bezier(.4,0,.2,1);
    user-select: none;
  }
  .pv3-lbl.pv3-on { color: ${inkColor}; }

  .pv3-switch {
    position: relative;
    width: 42px;
    height: 23px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .pv3-switch input { display: none; }
  .pv3-track {
    position: absolute;
    inset: 0;
    background: ${surface2Color};
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 50px;
    transition: background .26s cubic-bezier(.4,0,.2,1), border-color .26s cubic-bezier(.4,0,.2,1);
  }
  .pv3-switch input:checked ~ .pv3-track {
    background: ${accentColor};
    border-color: ${accentColor};
  }
  .pv3-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 17px;
    height: 17px;
    background: rgba(240,240,245,.45);
    border-radius: 50%;
    transition: transform .26s cubic-bezier(.4,0,.2,1), background .26s cubic-bezier(.4,0,.2,1);
  }
  .pv3-switch input:checked ~ .pv3-thumb {
    transform: translateX(19px);
    background: ${bgColor};
  }
  .pv3-save {
    font-size: 10px;
    font-weight: 700;
    font-family: 'Syne', Arial, sans-serif;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: ${bgColor};
    background: ${accentColor};
    padding: 2px 8px;
    border-radius: 50px;
  }

  /* ── Grid ── */
  .pv3-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
    max-width: min(980px, 100%);
    margin-top: 52px;
    align-items: start;
  }

  /* ── Card ── */
  .pv3-card {
    background: ${surfaceColor};
    border: 1px solid rgba(255,255,255,.07);
    border-radius: 18px;
    padding: 28px 20px 24px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    transition: transform .26s cubic-bezier(.4,0,.2,1), box-shadow .26s cubic-bezier(.4,0,.2,1), border-color .26s cubic-bezier(.4,0,.2,1);
    animation: pv3Rise .5s cubic-bezier(.4,0,.2,1) both;
  }
  .pv3-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255,255,255,.14);
    box-shadow: 0 24px 60px rgba(0,0,0,.5);
  }
  .pv3-card:nth-child(1) { animation-delay: .05s; }
  .pv3-card:nth-child(2) { animation-delay: .15s; }
  .pv3-card:nth-child(3) { animation-delay: .25s; }

  .pv3-card--pro {
    background: ${accentColor};
    border-color: ${accentColor};
    color: ${bgColor};
    margin-top: -16px;
    margin-bottom: -16px;
    padding-bottom: 40px;
  }
  .pv3-card--pro:hover {
    border-color: ${accentDark};
    box-shadow: 0 28px 70px rgba(232,255,71,.18), 0 0 0 1px ${accentColor};
    transform: translateY(-9px);
  }

  @keyframes pv3Rise {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Card internals ── */
  .pv3-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: 'Syne', Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(240,240,245,.22);
    margin-bottom: 20px;
  }
  .pv3-card--pro .pv3-tag { color: rgba(12,12,16,.45); }

  .pv3-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(240,240,245,.22);
    flex-shrink: 0;
  }
  .pv3-card--pro .pv3-dot { background: rgba(12,12,16,.4); }
  .pv3-dot--live {
    background: #4ade80;
    animation: pv3Pulse 2s ease infinite;
  }
  @keyframes pv3Pulse {
    0%,100% { opacity: 1; }
    50%      { opacity: .4; }
  }

  .pv3-name {
    font-family: 'Syne', Arial, sans-serif;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -.02em;
    color: ${inkColor};
    margin-bottom: 20px;
  }
  .pv3-card--pro .pv3-name { color: ${bgColor}; }

  .pv3-divider {
    height: 1px;
    background: rgba(255,255,255,.07);
    margin-bottom: 24px;
  }
  .pv3-card--pro .pv3-divider { background: rgba(12,12,16,.15); }

  /* ── Price ── */
  .pv3-price {
    display: flex;
    align-items: flex-start;
    gap: 3px;
    margin-bottom: 4px;
  }
  .pv3-curr {
    font-family: 'Syne', Arial, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: rgba(240,240,245,.45);
    margin-top: 10px;
    line-height: 1;
  }
  .pv3-card--pro .pv3-curr { color: rgba(12,12,16,.5); }

  .pv3-amount {
    font-family: 'Syne', Arial, sans-serif;
    font-size: clamp(28px, 3.6vw, 52px);
    font-weight: 800;
    letter-spacing: -.04em;
    line-height: 1;
    color: ${inkColor};
    transition: opacity .18s cubic-bezier(.4,0,.2,1), transform .18s cubic-bezier(.4,0,.2,1);
  }
  .pv3-card--pro .pv3-amount { color: ${bgColor}; }

  .pv3-period {
    font-size: 12px;
    color: rgba(240,240,245,.22);
    font-weight: 500;
    letter-spacing: .05em;
    text-transform: uppercase;
    margin-bottom: 28px;
  }
  .pv3-card--pro .pv3-period { color: rgba(12,12,16,.4); }

  /* ── Specs ── */
  .pv3-specs {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 30px;
    flex: 1;
  }
  .pv3-spec {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 0;
    border-bottom: 1px solid rgba(255,255,255,.07);
    font-size: 13.5px;
    color: rgba(240,240,245,.45);
    gap: 12px;
  }
  .pv3-spec:last-child { border-bottom: none; }
  .pv3-card--pro .pv3-spec {
    border-color: rgba(12,12,16,.12);
    color: rgba(12,12,16,.65);
  }
  .pv3-spec-key { font-weight: 500; }
  .pv3-spec-val {
    font-family: 'Syne', Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: ${inkColor};
    white-space: normal;
    word-break: break-word;
    text-align: right;
  }
  .pv3-card--pro .pv3-spec-val { color: ${bgColor}; }

  /* ── Button ── */
  .pv3-btn {
    display: block;
    width: 100%;
    padding: 14px 20px;
    border-radius: 10px;
    font-family: 'Syne', Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    cursor: pointer;
    border: 1.5px solid rgba(255,255,255,.14);
    background: transparent;
    color: ${inkColor};
    transition: background .26s cubic-bezier(.4,0,.2,1), color .26s cubic-bezier(.4,0,.2,1), border-color .26s cubic-bezier(.4,0,.2,1), transform .26s cubic-bezier(.4,0,.2,1);
  }
  .pv3-btn:hover {
    background: ${inkColor};
    color: ${bgColor};
    border-color: ${inkColor};
    transform: translateY(-1px);
  }
  .pv3-btn:active { transform: translateY(0); }
  .pv3-card--pro .pv3-btn {
    background: ${bgColor};
    color: ${accentColor};
    border-color: ${bgColor};
  }
  .pv3-card--pro .pv3-btn:hover {
    background: rgba(12,12,16,.8);
    transform: translateY(-1px);
  }

  /* ════════════════════════════════════════
     RESPONSIVE — ALL BREAKPOINTS
  ════════════════════════════════════════ */

  /* ── 1280px+ wide desktop ── */
  @media (min-width: 1280px) {
    .pv3-wrap { padding: 80px 40px 100px; }
    .pv3-grid { max-width: 1020px; gap: 20px; }
    .pv3-card { padding: 34px 28px 28px; }
    .pv3-card--pro { padding-bottom: 48px; }
  }

  /* ── 1024px tight desktop ── */
  @media (max-width: 1024px) and (min-width: 861px) {
    .pv3-wrap { padding: 52px 16px 72px; }
    .pv3-grid { gap: 12px; }
    .pv3-card { padding: 24px 16px 20px; border-radius: 14px; }
    .pv3-card--pro { padding-bottom: 36px; }
    .pv3-name { font-size: 19px; }
    .pv3-spec { font-size: 12.5px; padding: 9px 0; gap: 8px; }
    .pv3-btn { font-size: 12px; padding: 12px 14px; letter-spacing: .06em; }
    .pv3-tag { font-size: 9px; margin-bottom: 14px; }
    .pv3-period { font-size: 11px; margin-bottom: 20px; }
  }

  /* ── 860px tablet — single column ── */
  @media (max-width: 860px) {
    .pv3-wrap { padding: 48px 20px 64px; justify-content: flex-start; }
    .pv3-header { margin-bottom: 36px; }
    .pv3-grid {
      grid-template-columns: 1fr;
      max-width: 480px;
      margin: 32px auto 0;
      gap: 16px;
    }
    .pv3-card--pro {
      order: -1;
      margin: 0;
      padding-bottom: 28px;
    }
  }

  /* ── 640px–541px small tablet ── */
  @media (max-width: 640px) and (min-width: 541px) {
    .pv3-wrap { padding: 44px 16px 60px; }
    .pv3-grid { max-width: 440px; gap: 14px; }
    .pv3-card { padding: 28px 22px 24px; border-radius: 16px; }
    .pv3-card--pro { padding: 28px 22px 28px; }
    .pv3-name { font-size: 20px; }
    .pv3-toggle { gap: 12px; padding: 6px 16px; }
  }

  /* ── 540px mobile ── */
  @media (max-width: 540px) {
    .pv3-wrap { padding: 40px 14px 56px; }
    .pv3-grid { max-width: 100%; gap: 14px; }
    .pv3-card { padding: 24px 18px 20px; border-radius: 14px; }
    .pv3-card--pro { padding: 24px 18px 24px; }
    .pv3-name { font-size: 20px; }
    .pv3-toggle { gap: 10px; padding: 6px 14px; }
    .pv3-eyebrow::before,
    .pv3-eyebrow::after { width: 20px; }
    .pv3-spec { font-size: 13px; padding: 10px 0; }
  }

  /* ── 400px small phones ── */
  @media (max-width: 400px) {
    .pv3-wrap { padding: 32px 12px 48px; }
    .pv3-grid { gap: 12px; }
    .pv3-header { margin-bottom: 28px; }
    .pv3-card { padding: 20px 14px 18px; border-radius: 12px; }
    .pv3-card--pro { padding: 20px 14px 20px; }
    .pv3-name { font-size: 18px; }
    .pv3-spec { font-size: 12.5px; padding: 9px 0; gap: 8px; }
    .pv3-toggle { padding: 5px 12px; gap: 8px; }
    .pv3-lbl { font-size: 11px; }
    .pv3-save { font-size: 9px; padding: 2px 6px; }
    .pv3-btn { font-size: 12px; padding: 13px 16px; }
    .pv3-eyebrow { font-size: 10px; }
    .pv3-eyebrow::before,
    .pv3-eyebrow::after { width: 14px; }
    .pv3-curr { font-size: 14px; margin-top: 8px; }
    .pv3-period { font-size: 11px; margin-bottom: 22px; }
    .pv3-tag { font-size: 9px; margin-bottom: 16px; }
    .pv3-divider { margin-bottom: 18px; }
    .pv3-specs { margin-bottom: 22px; }
  }

  /* ── 320px very small phones ── */
  @media (max-width: 320px) {
    .pv3-wrap { padding: 28px 10px 40px; }
    .pv3-card { padding: 18px 12px 16px; }
    .pv3-name { font-size: 16px; }
    .pv3-spec { font-size: 12px; padding: 8px 0; }
    .pv3-btn { font-size: 11px; padding: 12px 14px; letter-spacing: .05em; }
    .pv3-toggle { padding: 5px 10px; gap: 6px; }
    .pv3-eyebrow::before,
    .pv3-eyebrow::after { display: none; }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

<div class="pv3-wrap">

  <header class="pv3-header">
    <p class="pv3-eyebrow">${eyebrowText}</p>
    <h1 class="pv3-title">${titleLine1}<br>you <em>${titleEmphasis}</em> ${titleLine2}</h1>
    <p class="pv3-sub">${subtitleText}</p>

    <div class="pv3-toggle" role="group" aria-label="Billing frequency">
      <span class="pv3-lbl pv3-on" id="pv3-lbl-annual">Annual</span>
      <label class="pv3-switch" aria-label="Toggle billing period">
        <input type="checkbox" id="pv3-billing" />
        <span class="pv3-track"></span>
        <span class="pv3-thumb"></span>
      </label>
      <span class="pv3-lbl" id="pv3-lbl-monthly">Monthly</span>
      <span class="pv3-save">${saveBadgeText}</span>
    </div>
  </header>

  <section class="pv3-grid" aria-label="Pricing plans">

    <article class="pv3-card" data-plan="basic">
      <div class="pv3-tag"><span class="pv3-dot"></span>${card1Tag}</div>
      <h2 class="pv3-name">${card1Name}</h2>
      <div class="pv3-divider"></div>
      <div class="pv3-price">
        <span class="pv3-curr">$</span>
        <span class="pv3-amount" data-annual="${card1AnnualP}" data-monthly="${card1MonthlyP}">${card1AnnualP}</span>
      </div>
      <p class="pv3-period">per year</p>
      <ul class="pv3-specs">
        <li class="pv3-spec"><span class="pv3-spec-key">${card1S1Key}</span><span class="pv3-spec-val">${card1S1Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card1S2Key}</span><span class="pv3-spec-val">${card1S2Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card1S3Key}</span><span class="pv3-spec-val">${card1S3Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card1S4Key}</span><span class="pv3-spec-val">${card1S4Val}</span></li>
      </ul>
      <button class="pv3-btn" type="button">${card1Btn}</button>
    </article>

    <article class="pv3-card pv3-card--pro" data-plan="professional">
      <div class="pv3-tag"><span class="pv3-dot pv3-dot--live"></span>${card2Tag}</div>
      <h2 class="pv3-name">${card2Name}</h2>
      <div class="pv3-divider"></div>
      <div class="pv3-price">
        <span class="pv3-curr">$</span>
        <span class="pv3-amount" data-annual="${card2AnnualP}" data-monthly="${card2MonthlyP}">${card2AnnualP}</span>
      </div>
      <p class="pv3-period">per year</p>
      <ul class="pv3-specs">
        <li class="pv3-spec"><span class="pv3-spec-key">${card2S1Key}</span><span class="pv3-spec-val">${card2S1Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card2S2Key}</span><span class="pv3-spec-val">${card2S2Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card2S3Key}</span><span class="pv3-spec-val">${card2S3Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card2S4Key}</span><span class="pv3-spec-val">${card2S4Val}</span></li>
      </ul>
      <button class="pv3-btn" type="button">${card2Btn}</button>
    </article>

    <article class="pv3-card" data-plan="master">
      <div class="pv3-tag"><span class="pv3-dot"></span>${card3Tag}</div>
      <h2 class="pv3-name">${card3Name}</h2>
      <div class="pv3-divider"></div>
      <div class="pv3-price">
        <span class="pv3-curr">$</span>
        <span class="pv3-amount" data-annual="${card3AnnualP}" data-monthly="${card3MonthlyP}">${card3AnnualP}</span>
      </div>
      <p class="pv3-period">per year</p>
      <ul class="pv3-specs">
        <li class="pv3-spec"><span class="pv3-spec-key">${card3S1Key}</span><span class="pv3-spec-val">${card3S1Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card3S2Key}</span><span class="pv3-spec-val">${card3S2Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card3S3Key}</span><span class="pv3-spec-val">${card3S3Val}</span></li>
        <li class="pv3-spec"><span class="pv3-spec-key">${card3S4Key}</span><span class="pv3-spec-val">${card3S4Val}</span></li>
      </ul>
      <button class="pv3-btn" type="button">${card3Btn}</button>
    </article>

  </section>
</div>

<script>
  (function() {
    var billing = document.getElementById('pv3-billing');
    var lblAnn  = document.getElementById('pv3-lbl-annual');
    var lblMon  = document.getElementById('pv3-lbl-monthly');
    var amounts = document.querySelectorAll('.pv3-amount');
    var periods = document.querySelectorAll('.pv3-period');

    if (!billing) return;

    billing.addEventListener('change', function() {
      var isMonthly = billing.checked;

      lblAnn.classList.toggle('pv3-on', !isMonthly);
      lblMon.classList.toggle('pv3-on',  isMonthly);

      amounts.forEach(function(el) {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(8px)';
        setTimeout(function() {
          el.textContent      = isMonthly ? el.dataset.monthly : el.dataset.annual;
          el.style.transition = 'opacity .2s ease, transform .2s ease';
          el.style.opacity    = '1';
          el.style.transform  = 'translateY(0)';
        }, 130);
      });

      periods.forEach(function(el) {
        el.textContent = isMonthly ? 'per month' : 'per year';
      });
    });

    document.querySelectorAll('.pv3-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var plan = btn.closest('[data-plan]').dataset.plan;
        console.log('Selected:', plan, '| Billing:', billing.checked ? 'monthly' : 'annual');
      });
    });
  })();
</script>`;
}

export default function PricingV3({ config }) {
  return null;
}