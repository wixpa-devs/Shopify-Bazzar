export function getFeaturedContainersV5Code(config = {}) {
  const bgColor        = config.bgColor        || "#ffffff";
  const textColor      = config.textColor      || "#111111";
  const mutedColor     = config.mutedColor     || "#666666";
  const iconStroke     = config.iconStroke     || "#111111";

  const headingText    = config.headingText    || "An accountant who handles everything from A to Z";
  const subtitleText   = config.subtitleText   || "You are never redirected to an assistant or anonymous support. I am your direct point of contact — available and committed to the success of your business.";

  const card1Title     = config.card1Title     || "Business Setup Advice & Support";
  const card1Desc      = config.card1Desc      || "From choosing your legal structure to registration and financial forecasting, I maximize your grants and optimize your setup from day one.";

  const card2Title     = config.card2Title     || "Accounting Handled in Real Time";
  const card2Desc      = config.card2Desc      || "No more stress from documents requested 6 months late. I record your entries monthly and manage all your tax filings (VAT, corporate tax, etc.) on time.";

  const card3Title     = config.card3Title     || "Monthly Dashboard Reports";
  const card3Desc      = config.card3Desc      || "Manage your business with clear indicators updated every month. Revenue, margin, forecast, cash flow — your essential KPIs without technical jargon.";

  const card4Title     = config.card4Title     || "Year-Round Balance Sheet Preparation";
  const card4Desc      = config.card4Desc      || "No surprises at year-end. Your balance sheet is built progressively for maximum tax optimization and zero stress.";

  const card5Title     = config.card5Title     || "Legal Compliance Management";
  const card5Desc      = config.card5Desc      || "Annual general meetings, account filings, amendments — I handle all your legal obligations with proactive reminders.";

  const card6Title     = config.card6Title     || "Available 5 Days a Week";
  const card6Desc      = config.card6Desc      || "An urgent question? A doubt about a decision? I am directly reachable — no need to wait for the annual appointment.";

  return `<!-- FeaturedContainers V5 — Serif 3x2 Service Grid | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fcv5-body {
    font-family: Georgia, 'Times New Roman', serif;
    background: ${bgColor};
    color: ${textColor};
  }

  .fcv5-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    text-align: center;
  }

  .fcv5-title {
    font-size: 38px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.2;
    color: ${textColor};
    margin-bottom: 1.2rem;
    letter-spacing: -0.5px;
  }

  .fcv5-subtitle {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
    color: ${mutedColor};
    line-height: 1.7;
    max-width: 500px;
    margin: 0 auto 3.5rem;
  }

  .fcv5-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem 2rem;
  }

  .fcv5-card {
    text-align: center;
    padding: 0 0.5rem;
  }

  .fcv5-card-icon {
    width: 36px;
    height: 36px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fcv5-card-icon svg {
    width: 36px;
    height: 36px;
    stroke: ${iconStroke};
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .fcv5-card-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 13.5px;
    font-weight: 700;
    color: ${textColor};
    margin-bottom: 0.6rem;
    line-height: 1.3;
  }

  .fcv5-card-desc {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 12.5px;
    color: ${mutedColor};
    line-height: 1.65;
  }

  .fcv5-row-divider {
    grid-column: 1 / -1;
    height: 1px;
    background: #e5e7eb;
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    .fcv5-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem 1.5rem; }
    .fcv5-title { font-size: 30px; }
  }

  @media (max-width: 500px) {
    .fcv5-grid { grid-template-columns: 1fr; gap: 2rem; }
    .fcv5-title { font-size: 24px; }
    .fcv5-section { padding: 2rem 1rem; }
  }
</style>

<div class="fcv5-body">
  <div class="fcv5-section">

    <h2 class="fcv5-title">${headingText}</h2>
    <p class="fcv5-subtitle">${subtitleText}</p>

    <div class="fcv5-grid">

      <!-- Card 1 -->
      <div class="fcv5-card">
        <div class="fcv5-card-icon">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="2" width="14" height="18" rx="2"/>
            <line x1="8" y1="7" x2="14" y2="7"/>
            <line x1="8" y1="10" x2="14" y2="10"/>
            <line x1="8" y1="13" x2="11" y2="13"/>
            <path d="M15 15 L17 17 L21 13" stroke-width="1.8"/>
          </svg>
        </div>
        <p class="fcv5-card-title">${card1Title}</p>
        <p class="fcv5-card-desc">${card1Desc}</p>
      </div>

      <!-- Card 2 -->
      <div class="fcv5-card">
        <div class="fcv5-card-icon">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="2" width="16" height="20" rx="2"/>
            <path d="M9 12 L11 14 L15 10"/>
            <line x1="8" y1="7" x2="16" y2="7"/>
          </svg>
        </div>
        <p class="fcv5-card-title">${card2Title}</p>
        <p class="fcv5-card-desc">${card2Desc}</p>
      </div>

      <!-- Card 3 -->
      <div class="fcv5-card">
        <div class="fcv5-card-icon">
          <svg viewBox="0 0 24 24">
            <line x1="4" y1="20" x2="4" y2="14"/>
            <line x1="9" y1="20" x2="9" y2="10"/>
            <line x1="14" y1="20" x2="14" y2="13"/>
            <line x1="19" y1="20" x2="19" y2="6"/>
            <polyline points="4,14 9,10 14,13 19,6"/>
          </svg>
        </div>
        <p class="fcv5-card-title">${card3Title}</p>
        <p class="fcv5-card-desc">${card3Desc}</p>
      </div>

      <div class="fcv5-row-divider"></div>

      <!-- Card 4 -->
      <div class="fcv5-card">
        <div class="fcv5-card-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 3 C7 3 4 6.5 4 10 C4 14 7 16 9 17 L9 20 L15 20 L15 17 C17 16 20 14 20 10 C20 6.5 17 3 12 3Z"/>
            <line x1="9" y1="20" x2="15" y2="20"/>
            <line x1="9" y1="22" x2="15" y2="22"/>
          </svg>
        </div>
        <p class="fcv5-card-title">${card4Title}</p>
        <p class="fcv5-card-desc">${card4Desc}</p>
      </div>

      <!-- Card 5 -->
      <div class="fcv5-card">
        <div class="fcv5-card-icon">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <line x1="8" y1="9" x2="16" y2="9"/>
            <line x1="8" y1="12" x2="14" y2="12"/>
            <line x1="8" y1="15" x2="12" y2="15"/>
          </svg>
        </div>
        <p class="fcv5-card-title">${card5Title}</p>
        <p class="fcv5-card-desc">${card5Desc}</p>
      </div>

      <!-- Card 6 -->
      <div class="fcv5-card">
        <div class="fcv5-card-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="4,17 8,12 12,15 16,9 20,6"/>
            <polyline points="17,6 20,6 20,9"/>
          </svg>
        </div>
        <p class="fcv5-card-title">${card6Title}</p>
        <p class="fcv5-card-desc">${card6Desc}</p>
      </div>

    </div>
  </div>
</div>`;
}

export default function FeaturedContainersV5({ config }) {
  return null;
}