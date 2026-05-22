export function getPricingV4Code(config = {}) {
  const bgColor = config.bgColor || "#f0f0fa";
  const purple1 = config.purple1 || "#a3a8f0";
  const purple2 = config.purple2 || "#696fdd";
  const textDark = config.textDark || "#2d2f4e";
  const textMid = config.textMid || "#6b6d8a";

  const titleText = config.titleText || "Our Pricing";

  // Card 1 — Basic
  const card1Name = config.card1Name || "Basic";
  const card1Annual = config.card1Annual || "$199.99";
  const card1Monthly = config.card1Monthly || "$19.99";
  const card1Spec1 = config.card1Spec1 || "500 GB Storage";
  const card1Spec2 = config.card1Spec2 || "2 Users Allowed";
  const card1Spec3 = config.card1Spec3 || "Send up to 3 GB";
  const card1Btn = config.card1Btn || "Learn More";

  // Card 2 — Pro
  const card2Name = config.card2Name || "Professional";
  const card2Annual = config.card2Annual || "$249.99";
  const card2Monthly = config.card2Monthly || "$24.99";
  const card2Spec1 = config.card2Spec1 || "1 TB Storage";
  const card2Spec2 = config.card2Spec2 || "5 Users Allowed";
  const card2Spec3 = config.card2Spec3 || "Send up to 10 GB";
  const card2Btn = config.card2Btn || "Learn More";

  // Card 3 — Master
  const card3Name = config.card3Name || "Master";
  const card3Annual = config.card3Annual || "$399.99";
  const card3Monthly = config.card3Monthly || "$39.99";
  const card3Spec1 = config.card3Spec1 || "2 TB Storage";
  const card3Spec2 = config.card3Spec2 || "10 Users Allowed";
  const card3Spec3 = config.card3Spec3 || "Send up to 20 GB";
  const card3Btn = config.card3Btn || "Learn More";

  return `<!-- Pricing V4 — Purple Gradient Overlap Cards | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pv4-wrap {
    font-family: 'Inter', Arial, sans-serif;
    background: ${bgColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Header ── */
  .pv4-header {
    text-align: center;
    margin-bottom: 36px;
    width: 100%;
  }

  .pv4-title {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 800;
    color: ${textDark};
    letter-spacing: -.02em;
    margin-bottom: 24px;
  }

  /* ── Toggle ── */
  .pv4-toggle {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pv4-lbl {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: ${textMid};
    cursor: pointer;
    user-select: none;
    transition: color .24s cubic-bezier(.4,0,.2,1);
  }

  .pv4-lbl.pv4-active { color: ${textDark}; }

  .pv4-switch {
    position: relative;
    width: 52px;
    height: 28px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .pv4-switch input { display: none; }

  .pv4-track {
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(135deg, ${purple1} 0%, ${purple2} 100%);
    transition: opacity .24s cubic-bezier(.4,0,.2,1);
  }

  .pv4-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,.25);
    transition: transform .24s cubic-bezier(.4,0,.2,1);
  }

  .pv4-switch input:checked ~ .pv4-thumb { transform: translateX(24px); }

  /* ── Grid ── */
  .pv4-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    width: 100%;
    max-width: 920px;
    align-items: center;
  }

  /* ── Card ── */
  .pv4-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 40px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 24px rgba(105,111,221,.10);
    position: relative;
    z-index: 1;
    transition: box-shadow .24s cubic-bezier(.4,0,.2,1), transform .24s cubic-bezier(.4,0,.2,1);
    animation: pv4Up .45s ease both;
  }

  .pv4-card:hover {
    box-shadow: 0 12px 40px rgba(105,111,221,.18);
    transform: translateY(-3px);
  }

  .pv4-card--basic  { border-radius: 16px 0 0 16px; }
  .pv4-card--master { border-radius: 0 16px 16px 0; }

  .pv4-card--pro {
    background: linear-gradient(135deg, ${purple1} 0%, ${purple2} 100%);
    color: #fff;
    border-radius: 16px;
    z-index: 2;
    margin: -24px -8px;
    padding: 56px 36px 44px;
    box-shadow: 0 16px 56px rgba(105,111,221,.45);
  }

  .pv4-card--pro:hover {
    box-shadow: 0 24px 64px rgba(105,111,221,.55);
    transform: translateY(-5px);
  }

  .pv4-card:nth-child(1) { animation-delay: .05s; }
  .pv4-card:nth-child(2) { animation-delay: .15s; }
  .pv4-card:nth-child(3) { animation-delay: .25s; }

  @keyframes pv4Up {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Card name ── */
  .pv4-name {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: ${textDark};
    margin-bottom: 16px;
  }

  .pv4-card--pro .pv4-name { color: #fff; }

  /* ── Price ── */
  .pv4-price {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: clamp(32px, 5vw, 50px);
    font-weight: 800;
    letter-spacing: -.03em;
    color: ${textDark};
    margin-bottom: 24px;
    transition: opacity .16s ease, transform .16s ease;
  }

  .pv4-card--pro .pv4-price { color: #fff; }

  /* ── Divider ── */
  .pv4-divider {
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,.08);
    margin-bottom: 0;
  }

  .pv4-card--pro .pv4-divider { background: rgba(255,255,255,.22); }

  /* ── Specs ── */
  .pv4-specs {
    list-style: none;
    width: 100%;
    margin-bottom: 28px;
  }

  .pv4-spec {
    font-size: 14px;
    font-weight: 600;
    color: ${textDark};
    padding: 16px 0;
    border-bottom: 1px solid rgba(0,0,0,.08);
  }

  .pv4-spec:last-child { border-bottom: none; }

  .pv4-card--pro .pv4-spec {
    color: #fff;
    border-color: rgba(255,255,255,.22);
  }

  /* ── Button ── */
  .pv4-btn {
    width: 100%;
    padding: 14px 20px;
    border-radius: 8px;
    border: none;
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    cursor: pointer;
    background: linear-gradient(135deg, ${purple1} 0%, ${purple2} 100%);
    color: #fff;
    box-shadow: 0 4px 16px rgba(105,111,221,.35);
    transition: opacity .24s cubic-bezier(.4,0,.2,1), transform .24s cubic-bezier(.4,0,.2,1), box-shadow .24s cubic-bezier(.4,0,.2,1);
  }

  .pv4-btn:hover {
    opacity: .88;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(105,111,221,.45);
  }

  .pv4-btn:active { transform: translateY(0); opacity: 1; }

  .pv4-card--pro .pv4-btn {
    background: #fff;
    color: ${purple2};
    box-shadow: 0 4px 16px rgba(0,0,0,.12);
  }

  .pv4-card--pro .pv4-btn:hover { box-shadow: 0 8px 24px rgba(0,0,0,.18); }

  /* ── Responsive ── */
  @media (max-width: 820px) {
    .pv4-grid {
      grid-template-columns: repeat(2, 1fr);
      max-width: 580px;
      gap: 16px;
    }
    .pv4-card,
    .pv4-card--basic,
    .pv4-card--master,
    .pv4-card--pro {
      border-radius: 16px;
      margin: 0;
      padding: 36px 28px 32px;
    }
    .pv4-card--pro {
      grid-column: 1 / -1;
      max-width: 340px;
      width: 100%;
      justify-self: center;
      order: -1;
    }
  }

  @media (max-width: 560px) {
    .pv4-grid {
      grid-template-columns: 1fr;
      max-width: 360px;
      gap: 14px;
    }
    .pv4-card--pro { max-width: 100%; }
    .pv4-wrap { padding: 40px 16px; }
  }

  @media (max-width: 380px) {
    .pv4-card { padding: 28px 18px 24px; }
    .pv4-price { font-size: 28px; }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

<div class="pv4-wrap">

  <header class="pv4-header">
    <h1 class="pv4-title">${titleText}</h1>
    <div class="pv4-toggle" role="group" aria-label="Billing period">
      <span class="pv4-lbl pv4-active" id="pv4-lbl-annual">Annually</span>
      <label class="pv4-switch" aria-label="Toggle billing">
        <input type="checkbox" id="pv4-billing" />
        <span class="pv4-track"></span>
        <span class="pv4-thumb"></span>
      </label>
      <span class="pv4-lbl" id="pv4-lbl-monthly">Monthly</span>
    </div>
  </header>

  <section class="pv4-grid" aria-label="Pricing plans">

    <article class="pv4-card pv4-card--basic" data-plan="basic">
      <h2 class="pv4-name">${card1Name}</h2>
      <p class="pv4-price" data-annual="${card1Annual}" data-monthly="${card1Monthly}">${card1Annual}</p>
      <div class="pv4-divider"></div>
      <ul class="pv4-specs">
        <li class="pv4-spec">${card1Spec1}</li>
        <li class="pv4-spec">${card1Spec2}</li>
        <li class="pv4-spec">${card1Spec3}</li>
      </ul>
      <button class="pv4-btn" type="button">${card1Btn}</button>
    </article>

    <article class="pv4-card pv4-card--pro" data-plan="professional">
      <h2 class="pv4-name">${card2Name}</h2>
      <p class="pv4-price" data-annual="${card2Annual}" data-monthly="${card2Monthly}">${card2Annual}</p>
      <div class="pv4-divider"></div>
      <ul class="pv4-specs">
        <li class="pv4-spec">${card2Spec1}</li>
        <li class="pv4-spec">${card2Spec2}</li>
        <li class="pv4-spec">${card2Spec3}</li>
      </ul>
      <button class="pv4-btn" type="button">${card2Btn}</button>
    </article>

    <article class="pv4-card pv4-card--master" data-plan="master">
      <h2 class="pv4-name">${card3Name}</h2>
      <p class="pv4-price" data-annual="${card3Annual}" data-monthly="${card3Monthly}">${card3Annual}</p>
      <div class="pv4-divider"></div>
      <ul class="pv4-specs">
        <li class="pv4-spec">${card3Spec1}</li>
        <li class="pv4-spec">${card3Spec2}</li>
        <li class="pv4-spec">${card3Spec3}</li>
      </ul>
      <button class="pv4-btn" type="button">${card3Btn}</button>
    </article>

  </section>
</div>

<script>
  (function() {
    var billing    = document.getElementById('pv4-billing');
    var lblAnnual  = document.getElementById('pv4-lbl-annual');
    var lblMonthly = document.getElementById('pv4-lbl-monthly');
    var prices     = document.querySelectorAll('.pv4-price');

    if (!billing) return;

    billing.addEventListener('change', function() {
      var isMonthly = billing.checked;

      lblAnnual.classList.toggle('pv4-active',  !isMonthly);
      lblMonthly.classList.toggle('pv4-active',  isMonthly);

      prices.forEach(function(el) {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(6px)';
        setTimeout(function() {
          el.textContent      = isMonthly ? el.dataset.monthly : el.dataset.annual;
          el.style.transition = 'opacity .2s ease, transform .2s ease';
          el.style.opacity    = '1';
          el.style.transform  = 'translateY(0)';
        }, 120);
      });
    });
  })();
</script>`;
}

export default function PricingV4({ config }) {
  return null;
}