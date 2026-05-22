export function getPricingV5Code(config = {}) {
  const bgColor = config.bgColor || "#f0f0f0";
  const pageColor = config.pageColor || "#e8e8e8";
  const inkColor = config.inkColor || "#111114";
  const inkMuted = config.inkMuted || "#6b6b78";
  const eyebrowIcon = config.eyebrowIcon || "🎙";
  const eyebrowText = config.eyebrowText || "Our Pricing Plan";
  const titleText = config.titleText || "Get started for free";

  // Card 1 — Starter
  const card1Name = config.card1Name || "Starter";
  const card1Desc = config.card1Desc || "Your writing partner. Unlock instant, world-class Voice to Text with a simple monthly free.";
  const card1Price = config.card1Price || "Free Plan";
  const card1BtnLabel = config.card1BtnLabel || "Download for Windows";
  const card1FeatLabel = config.card1FeatLabel || "Get started with";
  const card1F1 = config.card1F1 || "1,000 free words";
  const card1F2 = config.card1F2 || "Speak ai Engine";
  const card1F3 = config.card1F3 || "5 Custom Dictionary values";
  const card1F4 = config.card1F4 || "10 Language translations";
  const card1F5 = config.card1F5 || "Content optimization tools";

  // Card 2 — Pro
  const card2Name = config.card2Name || "Pro Plan";
  const card2Desc = config.card2Desc || "Your writing partner. Unlock instant, world-class Voice to Text with a simple monthly fee.";
  const card2Price = config.card2Price || "$8.00";
  const card2Period = config.card2Period || "/Month";
  const card2BtnLabel = config.card2BtnLabel || "Go Pro Plan";
  const card2FeatLabel = config.card2FeatLabel || "Everything in Starter";
  const card2F1 = config.card2F1 || "Unlimited words";
  const card2F2 = config.card2F2 || "Speak ai Engine";
  const card2F3 = config.card2F3 || "Avalon model";
  const card2F4 = config.card2F4 || "800 Custom Dictionary values";
  const card2F5 = config.card2F5 || "Tune with Custom Instructions";
  const card2F6 = config.card2F6 || "Real-time language translation";

  // Card 3 — Team
  const card3Name = config.card3Name || "Team Plan";
  const card3Desc = config.card3Desc || "Your team writing partner. Unlock instant, world-class Voice to Text with a simple monthly fee.";
  const card3Price = config.card3Price || "$12.00";
  const card3Period = config.card3Period || "/Month";
  const card3BtnLabel = config.card3BtnLabel || "Get Started";
  const card3FeatLabel = config.card3FeatLabel || "Everything in Pro";
  const card3F1 = config.card3F1 || "Avalon model";
  const card3F2 = config.card3F2 || "Centralized team billing";
  const card3F3 = config.card3F3 || "Team wide settings";
  const card3F4 = config.card3F4 || "Enforce privacy mode org-wide";
  const card3F5 = config.card3F5 || "Real-time Feedback System";
  const card3F6 = config.card3F6 || "Advanced Analytics Tools";

  return `<!-- Pricing V5 — Glass Cards with Mobile Carousel | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --pv5-bg:          ${bgColor};
    --pv5-page:        ${pageColor};
    --pv5-surface:     rgba(255,255,255,0.62);
    --pv5-surface-hi:  rgba(255,255,255,0.80);
    --pv5-border:      rgba(255,255,255,0.85);
    --pv5-border-lo:   rgba(0,0,0,0.07);
    --pv5-glass-blur:  16px;
    --pv5-ink:         ${inkColor};
    --pv5-ink-muted:   ${inkMuted};
    --pv5-ink-dim:     #9999a8;
    --pv5-check-bg:    ${inkColor};
    --pv5-check-tick:  #ffffff;
    --pv5-btn-dark-bg: ${inkColor};
    --pv5-btn-dark-ink:#ffffff;
    --pv5-btn-lite-bg: rgba(255,255,255,0.75);
    --pv5-btn-lite-ink:${inkColor};
    --pv5-radius-page: 20px;
    --pv5-radius-card: 18px;
    --pv5-radius-btn:  50px;
    --pv5-t:           .22s cubic-bezier(.4,0,.2,1);
  }

  .pv5-body {
    font-family: 'Inter', Arial, sans-serif;
    background: var(--pv5-bg);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 16px 60px;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Page shell ── */
  .pv5-page {
    width: 100%;
    max-width: 1120px;
    background: var(--pv5-page);
    border-radius: var(--pv5-radius-page);
    border: 1px solid rgba(255,255,255,0.6);
    padding: 56px 40px 60px;
    box-shadow: 0 2px 40px rgba(0,0,0,.06);
  }

  /* ── Header ── */
  .pv5-ph {
    text-align: center;
    margin-bottom: 48px;
  }
  .pv5-ph__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    font-weight: 500;
    color: var(--pv5-ink);
    background: rgba(255,255,255,0.75);
    border: 1px solid var(--pv5-border-lo);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 20px;
  }
  .pv5-ph__eyebrow-icon { font-size: 15px; }
  .pv5-ph__title {
    font-size: clamp(28px, 5vw, 58px);
    font-weight: 800;
    letter-spacing: -.03em;
    color: var(--pv5-ink);
    line-height: 1.05;
  }

  /* ── Grid ── */
  .pv5-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    align-items: start;
  }

  /* ── Card ── */
  .pv5-card {
    background: var(--pv5-surface);
    border: 1px solid var(--pv5-border);
    border-radius: var(--pv5-radius-card);
    backdrop-filter: blur(var(--pv5-glass-blur));
    -webkit-backdrop-filter: blur(var(--pv5-glass-blur));
    box-shadow:
      0 1px 0 rgba(255,255,255,0.9) inset,
      0 4px 24px rgba(0,0,0,.06);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform var(--pv5-t), box-shadow var(--pv5-t);
    animation: pv5Rise .46s ease both;
  }
  .pv5-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 1px 0 rgba(255,255,255,0.9) inset,
      0 20px 48px rgba(0,0,0,.12);
  }
  .pv5-card:nth-child(1) { animation-delay: .04s; }
  .pv5-card:nth-child(2) { animation-delay: .12s; }
  .pv5-card:nth-child(3) { animation-delay: .20s; }

  @keyframes pv5Rise {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Card top block ── */
  .pv5-card__top {
    padding: 28px 28px 24px;
    border-bottom: 1px solid var(--pv5-border-lo);
  }
  .pv5-card__name {
    font-size: 22px;
    font-weight: 700;
    color: var(--pv5-ink);
    letter-spacing: -.02em;
    margin-bottom: 6px;
  }
  .pv5-card__desc {
    font-size: 13px;
    color: var(--pv5-ink-muted);
    line-height: 1.6;
    margin-bottom: 22px;
  }

  /* Price row */
  .pv5-card__price {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 20px;
  }
  .pv5-card__amount {
    font-size: clamp(24px, 4vw, 40px);
    font-weight: 800;
    letter-spacing: -.04em;
    color: var(--pv5-ink);
    line-height: 1;
  }
  .pv5-card__period {
    font-size: 14px;
    font-weight: 500;
    color: var(--pv5-ink-muted);
  }

  /* CTA button */
  .pv5-card__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px 20px;
    border-radius: var(--pv5-radius-btn);
    border: none;
    font-family: 'Inter', Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity var(--pv5-t), transform var(--pv5-t), box-shadow var(--pv5-t);
  }
  .pv5-card__btn:hover  { opacity: .86; transform: translateY(-1px); }
  .pv5-card__btn:active { transform: translateY(0); opacity: 1; }

  .pv5-card__btn--dark {
    background: var(--pv5-btn-dark-bg);
    color: var(--pv5-btn-dark-ink);
    box-shadow: 0 4px 18px rgba(0,0,0,.22);
  }
  .pv5-card__btn--lite {
    background: var(--pv5-btn-lite-bg);
    color: var(--pv5-btn-lite-ink);
    border: 1px solid var(--pv5-border-lo);
    box-shadow: 0 2px 8px rgba(0,0,0,.06);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  /* Windows icon */
  .pv5-win-icon {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
  .pv5-win-icon span {
    display: block;
    border-radius: 1.5px;
    background: currentColor;
  }

  .pv5-arrow { font-size: 16px; }

  /* ── Card bottom block ── */
  .pv5-card__bottom {
    padding: 24px 28px 28px;
    flex: 1;
  }
  .pv5-card__feat-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--pv5-ink-dim);
    margin-bottom: 16px;
  }
  .pv5-card__features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .pv5-card__feature {
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 14px;
    font-weight: 500;
    color: var(--pv5-ink);
    line-height: 1.3;
  }

  /* check badge */
  .pv5-chk {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--pv5-check-bg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pv5-chk svg {
    width: 11px;
    height: 11px;
    stroke: var(--pv5-check-tick);
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* ── Dots ── */
  .pv5-dots {
    display: none;
    justify-content: center;
    gap: 6px;
    margin-top: 20px;
  }
  .pv5-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(0,0,0,.18);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background var(--pv5-t), width var(--pv5-t);
  }
  .pv5-dot.is-active {
    background: var(--pv5-ink);
    width: 22px;
    border-radius: 4px;
  }

  /* ══════════════════════════════════════════
     RESPONSIVE
  ══════════════════════════════════════════ */

  /* ── 1280px — wide desktop breathing room ── */
  @media (min-width: 1280px) {
    .pv5-page { padding: 64px 56px 72px; }
    .pv5-grid { gap: 22px; }
  }

  /* ── 1024px–1279px — standard desktop ── */
  @media (max-width: 1279px) and (min-width: 1024px) {
    .pv5-page { padding: 48px 32px 56px; }
    .pv5-grid { gap: 16px; }
    .pv5-card__top { padding: 24px 22px 20px; }
    .pv5-card__bottom { padding: 20px 22px 24px; }
    .pv5-card__amount { font-size: 34px; }
  }

  /* ── 768px–1023px — tablet landscape, 2-col ── */
  @media (max-width: 1023px) and (min-width: 768px) {
    .pv5-page { padding: 44px 24px 52px; }
    .pv5-grid { grid-template-columns: repeat(2, 1fr); }
    .pv5-card:nth-child(3) {
      grid-column: 1 / -1;
      max-width: 420px;
      justify-self: center;
      width: 100%;
    }
  }

  /* ── 600px–767px — tablet portrait, single col ── */
  @media (max-width: 767px) and (min-width: 600px) {
    .pv5-page { padding: 40px 20px 48px; }
    .pv5-grid {
      grid-template-columns: 1fr;
      max-width: 460px;
      margin: 0 auto;
      gap: 14px;
    }
  }

  /* ── < 600px — mobile carousel ── */
  @media (max-width: 599px) {
    .pv5-body { padding: 24px 0 48px; }
    .pv5-page {
      border-radius: 0;
      border-left: none;
      border-right: none;
      padding: 40px 0 48px;
      box-shadow: none;
    }
    .pv5-ph { padding: 0 20px; }
    .pv5-ph__title { font-size: clamp(26px, 8vw, 34px); }

    .pv5-grid {
      display: flex;
      gap: 14px;
      padding: 8px 24px 20px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      max-width: 100%;
    }
    .pv5-grid::-webkit-scrollbar { display: none; }
    .pv5-card {
      flex: 0 0 84vw;
      max-width: 310px;
      scroll-snap-align: center;
    }
    .pv5-dots { display: flex; }
  }

  /* ── < 400px — small phones ── */
  @media (max-width: 400px) {
    .pv5-card__top { padding: 20px 18px 18px; }
    .pv5-card__bottom { padding: 18px 18px 22px; }
    .pv5-card__name { font-size: 19px; }
    .pv5-card__desc { font-size: 12px; }
    .pv5-card__feature { font-size: 13px; }
    .pv5-card__btn { font-size: 13px; padding: 12px 16px; }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

<div class="pv5-body">
<div class="pv5-page">

  <header class="pv5-ph">
    <p class="pv5-ph__eyebrow">
      <span class="pv5-ph__eyebrow-icon">${eyebrowIcon}</span>
      ${eyebrowText}
    </p>
    <h1 class="pv5-ph__title">${titleText}</h1>
  </header>

  <div style="overflow:hidden">
    <section class="pv5-grid" id="pv5-carousel" aria-label="Pricing plans">

      <!-- Card 1 — Starter -->
      <article class="pv5-card" data-plan="starter">
        <div class="pv5-card__top">
          <h2 class="pv5-card__name">${card1Name}</h2>
          <p class="pv5-card__desc">${card1Desc}</p>
          <div class="pv5-card__price">
            <span class="pv5-card__amount">${card1Price}</span>
          </div>
          <button class="pv5-card__btn pv5-card__btn--lite" type="button">
            <span class="pv5-win-icon" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </span>
            ${card1BtnLabel}
          </button>
        </div>
        <div class="pv5-card__bottom">
          <p class="pv5-card__feat-label">${card1FeatLabel}</p>
          <ul class="pv5-card__features">
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F1}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F2}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F3}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F4}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card1F5}</li>
          </ul>
        </div>
      </article>

      <!-- Card 2 — Pro -->
      <article class="pv5-card" data-plan="pro">
        <div class="pv5-card__top">
          <h2 class="pv5-card__name">${card2Name}</h2>
          <p class="pv5-card__desc">${card2Desc}</p>
          <div class="pv5-card__price">
            <span class="pv5-card__amount">${card2Price}</span>
            <span class="pv5-card__period">${card2Period}</span>
          </div>
          <button class="pv5-card__btn pv5-card__btn--dark" type="button">${card2BtnLabel}</button>
        </div>
        <div class="pv5-card__bottom">
          <p class="pv5-card__feat-label">${card2FeatLabel}</p>
          <ul class="pv5-card__features">
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F1}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F2}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F3}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F4}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F5}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card2F6}</li>
          </ul>
        </div>
      </article>

      <!-- Card 3 — Team -->
      <article class="pv5-card" data-plan="team">
        <div class="pv5-card__top">
          <h2 class="pv5-card__name">${card3Name}</h2>
          <p class="pv5-card__desc">${card3Desc}</p>
          <div class="pv5-card__price">
            <span class="pv5-card__amount">${card3Price}</span>
            <span class="pv5-card__period">${card3Period}</span>
          </div>
          <button class="pv5-card__btn pv5-card__btn--lite" type="button">
            ${card3BtnLabel} <span class="pv5-arrow">→</span>
          </button>
        </div>
        <div class="pv5-card__bottom">
          <p class="pv5-card__feat-label">${card3FeatLabel}</p>
          <ul class="pv5-card__features">
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F1}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F2}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F3}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F4}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F5}</li>
            <li class="pv5-card__feature"><span class="pv5-chk"><svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3"/></svg></span>${card3F6}</li>
          </ul>
        </div>
      </article>

    </section>

    <div class="pv5-dots" id="pv5-dots" role="tablist">
      <button class="pv5-dot is-active" data-index="0" aria-label="Starter"></button>
      <button class="pv5-dot"           data-index="1" aria-label="Pro"></button>
      <button class="pv5-dot"           data-index="2" aria-label="Team"></button>
    </div>
  </div>

</div>
</div>

<script>
  (function() {
    var carousel = document.getElementById('pv5-carousel');
    var dots     = document.querySelectorAll('.pv5-dot');
    var cards    = carousel.querySelectorAll('.pv5-card');
    var current  = 0;
    var timer    = null;

    function isMobile() { return window.innerWidth < 600; }

    function goTo(idx) {
      var card   = cards[idx];
      var offset = card.offsetLeft - (carousel.offsetWidth - card.offsetWidth) / 2;
      carousel.scrollTo({ left: offset, behavior: 'smooth' });
      dots.forEach(function(d, i) { d.classList.toggle('is-active', i === idx); });
      current = idx;
    }

    function startAuto() {
      if (!isMobile()) return;
      clearInterval(timer);
      timer = setInterval(function() { goTo((current + 1) % cards.length); }, 2800);
    }

    function stopAuto() { clearInterval(timer); }

    dots.forEach(function(d) {
      d.addEventListener('click', function() {
        stopAuto();
        goTo(+d.dataset.index);
        startAuto();
      });
    });

    carousel.addEventListener('touchstart', stopAuto, { passive: true });
    carousel.addEventListener('touchend', function() { if (isMobile()) startAuto(); }, { passive: true });

    carousel.addEventListener('scroll', function() {
      if (!isMobile()) return;
      var mid = carousel.scrollLeft + carousel.offsetWidth / 2;
      var near = 0, minD = Infinity;
      cards.forEach(function(c, i) {
        var d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
        if (d < minD) { minD = d; near = i; }
      });
      if (near !== current) {
        current = near;
        dots.forEach(function(d, i) { d.classList.toggle('is-active', i === near); });
      }
    }, { passive: true });

    function init() {
      if (isMobile()) { goTo(0); startAuto(); }
      else stopAuto();
    }

    window.addEventListener('resize', init);
    init();
  })();
</script>`;
}

export default function PricingV5({ config }) {
  return null;
}