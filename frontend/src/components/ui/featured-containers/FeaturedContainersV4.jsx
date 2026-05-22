export function getFeaturedContainersV4Code(config = {}) {
  const bgColor         = config.bgColor         || "#f9f9f7";
  const textColor       = config.textColor       || "#1a1a1a";
  const mutedColor      = config.mutedColor      || "#555555";
  const headingText     = config.headingText     || "Supercharge Your Workflow";

  const card1Bg         = config.card1Bg         || "#FFF3E0";
  const card1Tag        = config.card1Tag        || "Automate Tasks";
  const card1Title      = config.card1Title      || "Save Hours with AI-Powered Automation";
  const card1Desc       = config.card1Desc       || "Reduce manual work with smart automation that streamlines repetitive tasks, freeing up time for what matters most.";
  const card1LinkLabel  = config.card1LinkLabel  || "Get Started →";
  const card1LinkUrl    = config.card1LinkUrl    || "#";

  const card2Bg         = config.card2Bg         || "#E8F1FB";
  const card2Tag        = config.card2Tag        || "Real-Time Collaboration";
  const card2Title      = config.card2Title      || "Work Seamlessly with Your Team";
  const card2Desc       = config.card2Desc       || "Bring your team together with live collaboration, instant feedback, and version control—no more messy email threads.";
  const card2LinkLabel  = config.card2LinkLabel  || "Try It Now →";
  const card2LinkUrl    = config.card2LinkUrl    || "#";

  const card3Bg         = config.card3Bg         || "#EEE8F8";
  const card3Tag        = config.card3Tag        || "Powerful Integrations";
  const card3Title      = config.card3Title      || "Connect with Your Favorite Tools";
  const card3Desc       = config.card3Desc       || "Integrate with Slack, Notion, Zapier, and more to keep your workflow efficient and connected across all platforms.";
  const card3LinkLabel  = config.card3LinkLabel  || "Explore Integrations →";
  const card3LinkUrl    = config.card3LinkUrl    || "#";

  const card4Bg         = config.card4Bg         || "#E8F4EC";
  const card4Tag        = config.card4Tag        || "Advanced Analytics";
  const card4Title      = config.card4Title      || "Make Data-Driven Decisions";
  const card4Desc       = config.card4Desc       || "Gain insights with real-time analytics and reports, helping you optimize performance and drive better results.";
  const card4LinkLabel  = config.card4LinkLabel  || "View Insights →";
  const card4LinkUrl    = config.card4LinkUrl    || "#";

  return `<!-- FeaturedContainers V4 — Workflow 2x2 Cards | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fcv4-body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${bgColor};
    color: ${textColor};
  }

  .fcv4-section {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
  }

  .fcv4-title {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    color: ${textColor};
    margin-bottom: 1.75rem;
    letter-spacing: -0.3px;
  }

  .fcv4-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .fcv4-card {
    border-radius: 16px;
    padding: 1.3rem 1.3rem 1.1rem;
    position: relative;
    overflow: hidden;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .fcv4-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .fcv4-card-tag {
    font-size: 11px;
    font-weight: 500;
    color: ${mutedColor};
    border: 0.5px solid rgba(0,0,0,0.15);
    border-radius: 20px;
    padding: 3px 10px;
    display: inline-block;
    margin-bottom: 10px;
    background: rgba(255,255,255,0.5);
  }

  .fcv4-card-title {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 8px;
    color: #111;
    max-width: 62%;
  }

  .fcv4-card-desc {
    font-size: 12.5px;
    color: ${mutedColor};
    line-height: 1.55;
    margin-bottom: 14px;
    max-width: 62%;
  }

  .fcv4-card-link {
    font-size: 12.5px;
    font-weight: 600;
    color: #111;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .fcv4-card-link:hover { text-decoration: underline; }

  .fcv4-icon {
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 100px;
    height: 100px;
    opacity: 0.45;
    pointer-events: none;
  }

  @media (max-width: 560px) {
    .fcv4-grid { grid-template-columns: 1fr; }
    .fcv4-card-title,
    .fcv4-card-desc { max-width: 80%; }
    .fcv4-section { padding: 2rem 1rem; }
    .fcv4-title { font-size: 22px; }
  }
</style>

<div class="fcv4-body">
  <div class="fcv4-section">

    <h2 class="fcv4-title">${headingText}</h2>

    <div class="fcv4-grid">

      <!-- Card 1 -->
      <div class="fcv4-card" style="background:${card1Bg};">
        <div>
          <span class="fcv4-card-tag">${card1Tag}</span>
          <p class="fcv4-card-title">${card1Title}</p>
          <p class="fcv4-card-desc">${card1Desc}</p>
        </div>
        <a href="${card1LinkUrl}" class="fcv4-card-link">${card1LinkLabel}</a>
        <svg class="fcv4-icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="32" height="32" rx="6" fill="#F4A835" opacity="0.55" transform="rotate(15 34 26)"/>
          <rect x="30" y="30" width="32" height="32" rx="6" fill="#E07B10" opacity="0.5" transform="rotate(15 46 46)"/>
        </svg>
      </div>

      <!-- Card 2 -->
      <div class="fcv4-card" style="background:${card2Bg};">
        <div>
          <span class="fcv4-card-tag">${card2Tag}</span>
          <p class="fcv4-card-title">${card2Title}</p>
          <p class="fcv4-card-desc">${card2Desc}</p>
        </div>
        <a href="${card2LinkUrl}" class="fcv4-card-link">${card2LinkLabel}</a>
        <svg class="fcv4-icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" rx="4" fill="#4A90D9" opacity="0.5"/>
          <rect x="48" y="10" width="30" height="30" rx="4" fill="#2563C0" opacity="0.35"/>
          <rect x="10" y="48" width="30" height="30" rx="4" fill="#2563C0" opacity="0.35"/>
          <rect x="48" y="48" width="30" height="30" rx="4" fill="#4A90D9" opacity="0.25"/>
        </svg>
      </div>

      <!-- Card 3 -->
      <div class="fcv4-card" style="background:${card3Bg};">
        <div>
          <span class="fcv4-card-tag">${card3Tag}</span>
          <p class="fcv4-card-title">${card3Title}</p>
          <p class="fcv4-card-desc">${card3Desc}</p>
        </div>
        <a href="${card3LinkUrl}" class="fcv4-card-link">${card3LinkLabel}</a>
        <svg class="fcv4-icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="45" rx="22" ry="22" fill="#9B7FD4" opacity="0.45"/>
          <ellipse cx="58" cy="45" rx="22" ry="22" fill="#7C5CC4" opacity="0.35"/>
        </svg>
      </div>

      <!-- Card 4 -->
      <div class="fcv4-card" style="background:${card4Bg};">
        <div>
          <span class="fcv4-card-tag">${card4Tag}</span>
          <p class="fcv4-card-title">${card4Title}</p>
          <p class="fcv4-card-desc">${card4Desc}</p>
        </div>
        <a href="${card4LinkUrl}" class="fcv4-card-link">${card4LinkLabel}</a>
        <svg class="fcv4-icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="28" height="28" rx="5" fill="#3BAD6A" opacity="0.4" transform="rotate(20 34 34)"/>
          <rect x="36" y="36" width="28" height="28" rx="5" fill="#2E8A52" opacity="0.35" transform="rotate(20 50 50)"/>
        </svg>
      </div>

    </div>
  </div>
</div>`;
}

export default function FeaturedContainersV4({ config }) {
  return null;
}