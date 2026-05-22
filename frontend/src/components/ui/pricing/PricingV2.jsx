export function getPricingV2Code(config = {}) {
  const bgColor         = config.bgColor         || "#F4F7FB";
  const accentColor     = config.accentColor     || "#2B7FFF";
  const accentDark      = config.accentDark      || "#1A5FCC";
  const accentLight     = config.accentLight     || "#E8F0FF";
  const textPrimary     = config.textPrimary     || "#0D1B2A";
  const textMuted       = config.textMuted       || "#6B7A8D";
  const borderColor     = config.borderColor     || "#E4E9F0";
  const saveBadgeBg     = config.saveBadgeBg     || "#27C27A";

  const eyebrowText     = config.eyebrowText     || "Pricing";
  const titleText       = config.titleText       || "Simple, transparent pricing";
  const subtitleText    = config.subtitleText    || "No hidden fees. Cancel anytime. Pick the plan that works for you.";
  const saveBadgeText   = config.saveBadgeText   || "Save 20%";

  // Card 1 — Basic
  const card1Tier       = config.card1Tier       || "Starter";
  const card1Name       = config.card1Name       || "Basic";
  const card1Desc       = config.card1Desc       || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const card1PriceMonth = config.card1PriceMonth || "12";
  const card1PriceYear  = config.card1PriceYear  || "10";
  const card1F1         = config.card1F1         || "Lorem ipsum dolor sit amet";
  const card1F2         = config.card1F2         || "Pellentesque hendrerit";
  const card1F3         = config.card1F3         || "Aliquam at orci aliquam";
  const card1F4         = config.card1F4         || "Praesent non sapien laoreet";
  const card1Btn        = config.card1Btn        || "Get Basic";

  // Card 2 — Pro (popular)
  const card2Tier       = config.card2Tier       || "Best Value";
  const card2Name       = config.card2Name       || "Pro";
  const card2Desc       = config.card2Desc       || "Maecenas ut justo molestie, pharetra arcu ac, mollis est.";
  const card2PriceMonth = config.card2PriceMonth || "15";
  const card2PriceYear  = config.card2PriceYear  || "12";
  const card2Badge      = config.card2Badge      || "Most Popular";
  const card2F1         = config.card2F1         || "Lorem ipsum dolor sit amet";
  const card2F2         = config.card2F2         || "Pellentesque hendrerit";
  const card2F3         = config.card2F3         || "Aliquam at orci aliquam";
  const card2F4         = config.card2F4         || "Praesent non sapien laoreet";
  const card2Btn        = config.card2Btn        || "Get Pro";

  // Card 3 — Premium
  const card3Tier       = config.card3Tier       || "Advanced";
  const card3Name       = config.card3Name       || "Premium";
  const card3Desc       = config.card3Desc       || "Duis quis sem auctor, convallis felis vitae, placerat sapien.";
  const card3PriceMonth = config.card3PriceMonth || "20";
  const card3PriceYear  = config.card3PriceYear  || "16";
  const card3F1         = config.card3F1         || "Lorem ipsum dolor sit amet";
  const card3F2         = config.card3F2         || "Pellentesque hendrerit";
  const card3F3         = config.card3F3         || "Aliquam at orci aliquam";
  const card3F4         = config.card3F4         || "Praesent non sapien laoreet";
  const card3Btn        = config.card3Btn        || "Get Premium";

  return `<!-- Pricing V2 — 3-Col Cards with Billing Toggle | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pv2-wrap {
    font-family: 'DM Sans', Arial, sans-serif;
    background: ${bgColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 16px;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Header ── */
  .pv2-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .pv2-eyebrow {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: ${accentColor};
    background: ${accentLight};
    padding: 4px 14px;
    border-radius: 50px;
    margin-bottom: 14px;
  }

  .pv2-title {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: clamp(28px, 4vw, 40px);
    color: ${textPrimary};
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .pv2-subtitle {
    font-size: 16px;
    color: ${textMuted};
    max-width: 420px;
    margin: 0 auto;
  }

  /* ── Toggle ── */
  .pv2-toggle {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }

  .pv2-toggle-label {
    font-size: 14px;
    font-weight: 500;
    color: ${textMuted};
    cursor: pointer;
    transition: color .28s cubic-bezier(.4,0,.2,1);
  }

  .pv2-toggle-label.pv2-active { color: ${textPrimary}; }

  .pv2-switch {
    position: relative;
    width: 48px;
    height: 26px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .pv2-switch input { display: none; }

  .pv2-track {
    position: absolute;
    inset: 0;
    background: ${borderColor};
    border-radius: 50px;
    transition: background .28s cubic-bezier(.4,0,.2,1);
  }

  .pv2-switch input:checked ~ .pv2-track { background: ${accentColor}; }

  .pv2-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,.2);
    transition: transform .28s cubic-bezier(.4,0,.2,1);
  }

  .pv2-switch input:checked ~ .pv2-thumb { transform: translateX(22px); }

  .pv2-save-badge {
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    background: ${saveBadgeBg};
    padding: 2px 8px;
    border-radius: 50px;
    letter-spacing: .04em;
  }

  /* ── Grid ── */
  .pv2-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
    max-width: 960px;
    align-items: start;
  }

  /* ── Card ── */
  .pv2-card {
    background: #ffffff;
    border: 1.5px solid ${borderColor};
    border-radius: 20px;
    padding: 36px 32px 32px;
    position: relative;
    box-shadow: 0 2px 16px rgba(0,0,0,.06);
    transition: transform .28s cubic-bezier(.4,0,.2,1), box-shadow .28s cubic-bezier(.4,0,.2,1), border-color .28s cubic-bezier(.4,0,.2,1);
    display: flex;
    flex-direction: column;
    animation: pv2FadeUp .5s ease both;
  }

  .pv2-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(43,127,255,.18);
    border-color: rgba(43,127,255,.35);
  }

  .pv2-card:nth-child(1) { animation-delay: .05s; }
  .pv2-card:nth-child(2) { animation-delay: .15s; }
  .pv2-card:nth-child(3) { animation-delay: .25s; }

  .pv2-card--popular {
    background: ${textPrimary};
    border-color: ${textPrimary};
    padding-top: 44px;
  }

  .pv2-card--popular:hover { border-color: ${textPrimary}; }

  /* ── Ribbon ── */
  .pv2-ribbon {
    position: absolute;
    top: -1px;
    right: 24px;
    background: ${accentColor};
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: 4px 14px 6px;
    border-radius: 0 0 10px 10px;
  }

  /* ── Card header ── */
  .pv2-tier {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: ${textMuted};
    margin-bottom: 8px;
  }

  .pv2-card--popular .pv2-tier { color: rgba(255,255,255,.5); }

  .pv2-name {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 26px;
    color: ${textPrimary};
    margin-bottom: 8px;
    line-height: 1.1;
  }

  .pv2-card--popular .pv2-name { color: #fff; }

  .pv2-desc {
    font-size: 14px;
    line-height: 1.6;
    color: ${textMuted};
    padding-bottom: 24px;
    border-bottom: 1px solid ${borderColor};
    margin-bottom: 24px;
  }

  .pv2-card--popular .pv2-desc {
    color: rgba(255,255,255,.55);
    border-color: rgba(255,255,255,.12);
  }

  /* ── Price ── */
  .pv2-price {
    display: flex;
    align-items: flex-start;
    gap: 2px;
    margin-bottom: 6px;
  }

  .pv2-currency {
    font-size: 18px;
    font-weight: 700;
    color: ${textMuted};
    margin-top: 8px;
    line-height: 1;
  }

  .pv2-card--popular .pv2-currency { color: rgba(255,255,255,.6); }

  .pv2-amount {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 54px;
    line-height: 1;
    color: ${textPrimary};
    transition: opacity .22s ease, transform .22s ease;
  }

  .pv2-card--popular .pv2-amount { color: ${accentColor}; }

  .pv2-period {
    font-size: 12px;
    color: ${textMuted};
    margin-bottom: 28px;
    font-weight: 500;
    letter-spacing: .04em;
    text-transform: uppercase;
  }

  .pv2-card--popular .pv2-period { color: rgba(255,255,255,.45); }

  /* ── Features ── */
  .pv2-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    flex: 1;
  }

  .pv2-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${textMuted};
    font-weight: 500;
  }

  .pv2-card--popular .pv2-feature { color: rgba(255,255,255,.7); }

  .pv2-check {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${accentLight};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pv2-card--popular .pv2-check { background: rgba(43,127,255,.25); }

  .pv2-check svg {
    width: 10px;
    height: 10px;
    stroke: ${accentColor};
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* ── Button ── */
  .pv2-btn {
    display: block;
    width: 100%;
    padding: 15px 24px;
    border-radius: 50px;
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid ${accentColor};
    background: transparent;
    color: ${accentColor};
    transition: background .28s cubic-bezier(.4,0,.2,1), color .28s cubic-bezier(.4,0,.2,1), transform .28s cubic-bezier(.4,0,.2,1), box-shadow .28s cubic-bezier(.4,0,.2,1);
  }

  .pv2-btn:hover {
    background: ${accentColor};
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(43,127,255,.35);
  }

  .pv2-btn:active { transform: translateY(0); }

  .pv2-card--popular .pv2-btn {
    background: ${accentColor};
    color: #fff;
    border-color: ${accentColor};
    box-shadow: 0 4px 20px rgba(43,127,255,.4);
  }

  .pv2-card--popular .pv2-btn:hover {
    background: ${accentDark};
    border-color: ${accentDark};
    box-shadow: 0 8px 28px rgba(43,127,255,.5);
  }

  /* ── Animation ── */
  @keyframes pv2FadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 860px) {
    .pv2-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
    }
    .pv2-card--popular { order: -1; }
  }

  @media (max-width: 480px) {
    .pv2-wrap { padding: 32px 12px; }
    .pv2-card { padding: 28px 20px 24px; }
    .pv2-card--popular { padding-top: 36px; }
    .pv2-amount { font-size: 44px; }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />

<div class="pv2-wrap">

  <header class="pv2-header">
    <span class="pv2-eyebrow">${eyebrowText}</span>
    <h1 class="pv2-title">${titleText}</h1>
    <p class="pv2-subtitle">${subtitleText}</p>
  </header>

  <div class="pv2-toggle" role="group" aria-label="Billing period">
    <span class="pv2-toggle-label pv2-active" id="pv2-label-monthly">Monthly</span>
    <label class="pv2-switch" aria-label="Switch to annual billing">
      <input type="checkbox" id="pv2-billing-toggle" />
      <span class="pv2-track"></span>
      <span class="pv2-thumb"></span>
    </label>
    <span class="pv2-toggle-label" id="pv2-label-annual">Annual</span>
    <span class="pv2-save-badge">${saveBadgeText}</span>
  </div>

  <section class="pv2-grid" aria-label="Pricing plans">

    <article class="pv2-card" data-plan="basic">
      <p class="pv2-tier">${card1Tier}</p>
      <h2 class="pv2-name">${card1Name}</h2>
      <p class="pv2-desc">${card1Desc}</p>
      <div class="pv2-price">
        <span class="pv2-currency">$</span>
        <span class="pv2-amount" data-monthly="${card1PriceMonth}" data-annual="${card1PriceYear}">${card1PriceMonth}</span>
      </div>
      <p class="pv2-period">per month</p>
      <ul class="pv2-features">
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F1}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F2}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F3}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F4}</li>
      </ul>
      <button class="pv2-btn" type="button">${card1Btn}</button>
    </article>

    <article class="pv2-card pv2-card--popular" data-plan="pro">
      <span class="pv2-ribbon">${card2Badge}</span>
      <p class="pv2-tier">${card2Tier}</p>
      <h2 class="pv2-name">${card2Name}</h2>
      <p class="pv2-desc">${card2Desc}</p>
      <div class="pv2-price">
        <span class="pv2-currency">$</span>
        <span class="pv2-amount" data-monthly="${card2PriceMonth}" data-annual="${card2PriceYear}">${card2PriceMonth}</span>
      </div>
      <p class="pv2-period">per month</p>
      <ul class="pv2-features">
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F1}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F2}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F3}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F4}</li>
      </ul>
      <button class="pv2-btn" type="button">${card2Btn}</button>
    </article>

    <article class="pv2-card" data-plan="premium">
      <p class="pv2-tier">${card3Tier}</p>
      <h2 class="pv2-name">${card3Name}</h2>
      <p class="pv2-desc">${card3Desc}</p>
      <div class="pv2-price">
        <span class="pv2-currency">$</span>
        <span class="pv2-amount" data-monthly="${card3PriceMonth}" data-annual="${card3PriceYear}">${card3PriceMonth}</span>
      </div>
      <p class="pv2-period">per month</p>
      <ul class="pv2-features">
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F1}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F2}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F3}</li>
        <li class="pv2-feature"><span class="pv2-check"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F4}</li>
      </ul>
      <button class="pv2-btn" type="button">${card3Btn}</button>
    </article>

  </section>
</div>

<script>
  (function() {
    var toggle  = document.getElementById('pv2-billing-toggle');
    var lblMon  = document.getElementById('pv2-label-monthly');
    var lblAnn  = document.getElementById('pv2-label-annual');
    var amounts = document.querySelectorAll('.pv2-amount');

    if (!toggle) return;

    toggle.addEventListener('change', function() {
      var isAnnual = toggle.checked;

      lblMon.classList.toggle('pv2-active', !isAnnual);
      lblAnn.classList.toggle('pv2-active',  isAnnual);

      amounts.forEach(function(el) {
        var val = isAnnual ? el.dataset.annual : el.dataset.monthly;
        el.style.opacity = '0';
        el.style.transform = 'translateY(6px)';
        setTimeout(function() {
          el.textContent = val;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 120);
      });
    });
  })();
</script>`;
}

export default function PricingV2({ config }) {
  return null;
}