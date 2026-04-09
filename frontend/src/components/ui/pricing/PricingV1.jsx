export function getPricingV1Code(config = {}) {
  const sectionBg       = config.sectionBg       || "#f3f5f8";
  const sectionPadding  = config.sectionPadding  || "70px 3.5rem";
  const headingText     = config.headingText     || "Simple, transparent pricing";
  const subheadingText  = config.subheadingText  || "No hidden fees. No surprises. Pick the plan that matches your lifestyle and upgrade anytime.";
  const headingColor    = config.headingColor    || "#0f172a";
  const subheadingColor = config.subheadingColor || "#6b7280";

  // Card colors
  const cardBg          = config.cardBg          || "#ffffff";
  const cardBorder      = config.cardBorder      || "#e5e7eb";
  const cardRadius      = config.cardRadius      || "16px";

  // Featured card
  const featuredBg      = config.featuredBg      || "#0050d8";
  const featuredBadge   = config.featuredBadge   || "Most Popular";
  const featuredBadgeBg = config.featuredBadgeBg || "#facc15";
  const featuredBadgeColor = config.featuredBadgeColor || "#0b1120";

  // Accent / brand color
  const accentColor     = config.accentColor     || "#0050d8";

  // ── Plan 1 — Starter ──────────────────────────────────────────────────
  const plan1Tier       = config.plan1Tier       || "Starter";
  const plan1Price      = config.plan1Price      || "$0";
  const plan1Period     = config.plan1Period     || "/mo";
  const plan1Desc       = config.plan1Desc       || "Everything you need to get started with digital banking.";
  const plan1BtnText    = config.plan1BtnText    || "Get started free";
  const plan1BtnUrl     = config.plan1BtnUrl     || "#";
  const plan1F1         = config.plan1F1         || "1 virtual card";
  const plan1F2         = config.plan1F2         || "Free local transfers";
  const plan1F3         = config.plan1F3         || "Basic spending analytics";
  const plan1F4         = config.plan1F4         || "2 ATM withdrawals/month";
  const plan1X1         = config.plan1X1         || "International transfers";
  const plan1X2         = config.plan1X2         || "Priority support";

  // ── Plan 2 — Plus (Featured) ─────────────────────────────────────────
  const plan2Tier       = config.plan2Tier       || "Plus";
  const plan2Price      = config.plan2Price      || "$9";
  const plan2Period     = config.plan2Period     || "/mo";
  const plan2Desc       = config.plan2Desc       || "The complete toolkit for everyday banking power users.";
  const plan2BtnText    = config.plan2BtnText    || "Start Plus plan";
  const plan2BtnUrl     = config.plan2BtnUrl     || "#";
  const plan2F1         = config.plan2F1         || "5 virtual + 1 physical card";
  const plan2F2         = config.plan2F2         || "Free local & SEPA transfers";
  const plan2F3         = config.plan2F3         || "Advanced analytics & budgets";
  const plan2F4         = config.plan2F4         || "Unlimited ATM withdrawals";
  const plan2F5         = config.plan2F5         || "International transfers (low fee)";
  const plan2X1         = config.plan2X1         || "Dedicated account manager";

  // ── Plan 3 — Business ────────────────────────────────────────────────
  const plan3Tier       = config.plan3Tier       || "Business";
  const plan3Price      = config.plan3Price      || "$29";
  const plan3Period     = config.plan3Period     || "/mo";
  const plan3Desc       = config.plan3Desc       || "Built for teams, freelancers, and growing businesses.";
  const plan3BtnText    = config.plan3BtnText    || "Contact sales";
  const plan3BtnUrl     = config.plan3BtnUrl     || "#";
  const plan3F1         = config.plan3F1         || "Unlimited virtual cards";
  const plan3F2         = config.plan3F2         || "Free international transfers";
  const plan3F3         = config.plan3F3         || "Multi-user team access";
  const plan3F4         = config.plan3F4         || "Accounting integrations";
  const plan3F5         = config.plan3F5         || "International transfers (free)";
  const plan3F6         = config.plan3F6         || "Dedicated account manager";

  return `
<style>
  .pv1-section {
    padding: ${sectionPadding};
    background: ${sectionBg};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .pv1-heading {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    color: ${headingColor};
    margin-bottom: 0.5rem;
  }

  .pv1-subheading {
    text-align: center;
    max-width: 560px;
    margin: 0 auto 2.5rem auto;
    font-size: 14px;
    color: ${subheadingColor};
    line-height: 1.6;
  }

  .pv1-grid {
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  /* ── Base card ── */
  .pv1-card {
    background: ${cardBg};
    border-radius: ${cardRadius};
    padding: 1.5rem;
    border: 1px solid ${cardBorder};
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
    display: flex;
    flex-direction: column;
  }

  /* ── Featured card ── */
  .pv1-card--featured {
    background: ${featuredBg};
    border-color: rgba(147, 197, 253, 0.3);
    box-shadow: 0 20px 48px rgba(0, 80, 216, 0.36);
    position: relative;
    overflow: hidden;
  }

  .pv1-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: ${featuredBadgeBg};
    color: ${featuredBadgeColor};
    font-size: 10px;
    font-weight: 700;
    padding: 0.2rem 0.65rem;
    border-radius: 9999px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pv1-tier {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #9ca3af;
    margin-bottom: 0.75rem;
  }

  .pv1-card--featured .pv1-tier {
    color: #93c5fd;
  }

  .pv1-price {
    font-size: 36px;
    font-weight: 700;
    color: ${headingColor};
    margin-bottom: 0.25rem;
    line-height: 1;
  }

  .pv1-card--featured .pv1-price {
    color: #ffffff;
  }

  .pv1-price-period {
    font-size: 15px;
    font-weight: 400;
    color: #9ca3af;
  }

  .pv1-card--featured .pv1-price-period {
    color: #bfdbfe;
  }

  .pv1-desc {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }

  .pv1-card--featured .pv1-desc {
    color: #bfdbfe;
  }

  .pv1-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: grid;
    gap: 0.625rem;
    flex: 1;
  }

  .pv1-feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    color: #4b5563;
  }

  .pv1-card--featured .pv1-feature {
    color: #ffffff;
  }

  .pv1-feature--off {
    color: #9ca3af;
  }

  .pv1-card--featured .pv1-feature--off {
    color: #93c5fd;
  }

  .pv1-check {
    color: #22c55e;
    font-size: 11px;
    flex-shrink: 0;
  }

  .pv1-card--featured .pv1-check {
    color: #86efac;
  }

  .pv1-cross {
    color: #d1d5db;
    font-size: 11px;
    flex-shrink: 0;
  }

  .pv1-card--featured .pv1-cross {
    color: #60a5fa;
  }

  /* ── Buttons ── */
  .pv1-btn {
    width: 100%;
    padding: 0.625rem 0;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: block;
    transition: background 0.2s ease, color 0.2s ease;
    border: 2px solid ${accentColor};
    background: transparent;
    color: ${accentColor};
    font-family: inherit;
  }

  .pv1-btn:hover {
    background: ${accentColor};
    color: #ffffff;
  }

  .pv1-btn--featured {
    background: #ffffff;
    color: ${accentColor};
    border-color: #ffffff;
  }

  .pv1-btn--featured:hover {
    background: #eff6ff;
    color: ${accentColor};
  }

  @media (min-width: 768px) {
    .pv1-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

<section class="pv1-section">
  <h2 class="pv1-heading">${headingText}</h2>
  <p class="pv1-subheading">${subheadingText}</p>

  <div class="pv1-grid">

    <!-- Plan 1 — Starter -->
    <div class="pv1-card">
      <div class="pv1-tier">${plan1Tier}</div>
      <div class="pv1-price">${plan1Price}<span class="pv1-price-period">${plan1Period}</span></div>
      <p class="pv1-desc">${plan1Desc}</p>
      <ul class="pv1-features">
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan1F1}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan1F2}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan1F3}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan1F4}</li>
        <li class="pv1-feature pv1-feature--off"><i class="fas fa-times pv1-cross"></i>${plan1X1}</li>
        <li class="pv1-feature pv1-feature--off"><i class="fas fa-times pv1-cross"></i>${plan1X2}</li>
      </ul>
      <a href="${plan1BtnUrl}" class="pv1-btn">${plan1BtnText}</a>
    </div>

    <!-- Plan 2 — Plus (Featured) -->
    <div class="pv1-card pv1-card--featured">
      <span class="pv1-badge">${featuredBadge}</span>
      <div class="pv1-tier">${plan2Tier}</div>
      <div class="pv1-price">${plan2Price}<span class="pv1-price-period">${plan2Period}</span></div>
      <p class="pv1-desc">${plan2Desc}</p>
      <ul class="pv1-features">
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan2F1}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan2F2}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan2F3}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan2F4}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan2F5}</li>
        <li class="pv1-feature pv1-feature--off"><i class="fas fa-times pv1-cross"></i>${plan2X1}</li>
      </ul>
      <a href="${plan2BtnUrl}" class="pv1-btn pv1-btn--featured">${plan2BtnText}</a>
    </div>

    <!-- Plan 3 — Business -->
    <div class="pv1-card">
      <div class="pv1-tier">${plan3Tier}</div>
      <div class="pv1-price">${plan3Price}<span class="pv1-price-period">${plan3Period}</span></div>
      <p class="pv1-desc">${plan3Desc}</p>
      <ul class="pv1-features">
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan3F1}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan3F2}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan3F3}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan3F4}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan3F5}</li>
        <li class="pv1-feature"><i class="fas fa-check pv1-check"></i>${plan3F6}</li>
      </ul>
      <a href="${plan3BtnUrl}" class="pv1-btn">${plan3BtnText}</a>
    </div>

  </div>
</section>
  `;
}

export default function PricingV1({ config }) {
  return null;
}