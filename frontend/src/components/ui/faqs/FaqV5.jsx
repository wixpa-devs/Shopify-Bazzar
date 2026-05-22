// Named export — used by registry and generateComponentCode.js
export function getFaqV5Code(config = {}) {
  const sectionBgColor = config.sectionBgColor || "#f8fbff";
  const bgGradient     = config.bgGradient || "linear-gradient(160deg, #ddeeff 0%, #eaf4ff 40%, #f0f8ff 70%, #e8f0fa 100%)";
  const eyebrowText    = config.eyebrowText || "Frequently Asked Question";
  const eyebrowColor   = config.eyebrowColor || "#7a9ab5";
  const titleText      = config.titleText || "Everything You Need to Know:<br>Real Estate FAQs";
  const titleColor     = config.titleColor || "#111111";

  const btn1Label      = config.btn1Label || "Get Started";
  const btn1Url        = config.btn1Url || "#";
  const btn1Bg         = config.btn1Bg || "#1a1a1a";
  const btn1Color      = config.btn1Color || "#ffffff";
  const btn2Label      = config.btn2Label || "Learn More";
  const btn2Url        = config.btn2Url || "#";

  const cardBg         = config.cardBg || "rgba(255,255,255,0.72)";
  const questionColor  = config.questionColor || "#111111";
  const answerColor    = config.answerColor || "#666666";

  const q1             = config.q1 || "How do you ensure your strategies are effective?";
  const a1             = config.a1 || "We combine in-depth market research, cutting-edge design, and targeted content creation to deliver strategies that generate engagement and drive conversions.";
  const q2             = config.q2 || "Can you help improve our current digital presence?";
  const a2             = config.a2 || "Absolutely. We conduct a thorough audit of your existing digital channels and develop a tailored roadmap to strengthen your online visibility, brand consistency, and user engagement.";
  const q3             = config.q3 || "What makes your approach different?";
  const a3             = config.a3 || "Our approach is rooted in data-driven decision making combined with creative storytelling. We don't believe in one-size-fits-all — every strategy is custom-built around your specific goals and market position.";
  const q4             = config.q4 || "Who can benefit from your services?";
  const a4             = config.a4 || "Our services are designed for real estate agents, brokers, developers, and property management firms of all sizes — from independent agents looking to grow their personal brand to large firms seeking enterprise-level marketing solutions.";
  const q5             = config.q5 || "How involved will we be in the creative process?";
  const a5             = config.a5 || "As involved as you'd like. We offer both full-service management where we handle everything, and collaborative models where you stay closely involved at each stage of ideation, creation, and review.";

  return `<!-- FAQ V5 — Glassmorphism Accordion | Shopify Bazzar -->
<style>
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .fv5-wrap {
    font-family: inherit;
    min-height: 100vh;
    background-color: ${sectionBgColor};
    background-image: ${bgGradient};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 48px 20px 64px;
  }

  .fv5-section {
    width: 100%;
    max-width: 660px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fv5-eyebrow {
    font-size: 0.8rem;
    color: ${eyebrowColor};
    letter-spacing: 0.01em;
    margin-bottom: 12px;
    text-align: center;
    font-family: inherit;
  }

  .fv5-title {
    font-size: clamp(1.8rem, 3vw + 1rem, 2.6rem);
    font-weight: 700;
    color: ${titleColor};
    text-align: center;
    line-height: 1.2;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
    font-family: inherit;
  }

  .fv5-btn-group {
    display: flex;
    gap: 10px;
    margin-bottom: 36px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .fv5-btn {
    padding: 11px 24px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: opacity 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-block;
    font-family: inherit;
  }

  .fv5-btn:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  .fv5-btn-primary {
    background: ${btn1Bg};
    color: ${btn1Color};
  }

  .fv5-btn-outline {
    background: transparent;
    color: #1a1a1a;
    border: 1.5px solid #ccc;
  }

  .fv5-accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .fv5-item {
    background: ${cardBg};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(100,140,180,0.08);
    transition: box-shadow 0.25s ease;
  }

  .fv5-item:hover {
    box-shadow: 0 4px 20px rgba(100,140,180,0.14);
  }

  .fv5-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    gap: 16px;
    font-family: inherit;
  }

  .fv5-trigger span {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${questionColor};
    line-height: 1.4;
    font-family: inherit;
  }

  .fv5-chevron {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    color: #666;
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fv5-chevron svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .fv5-item.fv5-open .fv5-chevron {
    transform: rotate(180deg);
    color: #333;
  }

  .fv5-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  .fv5-panel-inner {
    padding: 0 24px 20px;
    font-size: 0.85rem;
    color: ${answerColor};
    line-height: 1.7;
    font-family: inherit;
  }

  .fv5-item.fv5-open .fv5-panel {
    max-height: 400px;
  }

  @media (max-width: 480px) {
    .fv5-wrap {
      padding: 36px 16px 48px;
    }

    .fv5-trigger {
      padding: 16px 18px;
    }

    .fv5-panel-inner {
      padding: 0 18px 16px;
    }

    .fv5-btn-group {
      gap: 8px;
    }

    .fv5-btn {
      padding: 10px 20px;
      font-size: 0.82rem;
    }
  }
</style>

<div class="fv5-wrap">
  <section class="fv5-section">
    <p class="fv5-eyebrow">${eyebrowText}</p>
    <h2 class="fv5-title">${titleText}</h2>

    <div class="fv5-btn-group">
      <a href="${btn1Url}" class="fv5-btn fv5-btn-primary">${btn1Label}</a>
      <a href="${btn2Url}" class="fv5-btn fv5-btn-outline">${btn2Label}</a>
    </div>

    <div class="fv5-accordion" role="list">
      <div class="fv5-item fv5-open" role="listitem">
        <button class="fv5-trigger" type="button" aria-expanded="true" onclick="fv5Toggle(this)">
          <span>${q1}</span>
          <div class="fv5-chevron">
            <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
          </div>
        </button>
        <div class="fv5-panel">
          <div class="fv5-panel-inner">${a1}</div>
        </div>
      </div>

      <div class="fv5-item" role="listitem">
        <button class="fv5-trigger" type="button" aria-expanded="false" onclick="fv5Toggle(this)">
          <span>${q2}</span>
          <div class="fv5-chevron">
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>
        <div class="fv5-panel">
          <div class="fv5-panel-inner">${a2}</div>
        </div>
      </div>

      <div class="fv5-item" role="listitem">
        <button class="fv5-trigger" type="button" aria-expanded="false" onclick="fv5Toggle(this)">
          <span>${q3}</span>
          <div class="fv5-chevron">
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>
        <div class="fv5-panel">
          <div class="fv5-panel-inner">${a3}</div>
        </div>
      </div>

      <div class="fv5-item" role="listitem">
        <button class="fv5-trigger" type="button" aria-expanded="false" onclick="fv5Toggle(this)">
          <span>${q4}</span>
          <div class="fv5-chevron">
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>
        <div class="fv5-panel">
          <div class="fv5-panel-inner">${a4}</div>
        </div>
      </div>

      <div class="fv5-item" role="listitem">
        <button class="fv5-trigger" type="button" aria-expanded="false" onclick="fv5Toggle(this)">
          <span>${q5}</span>
          <div class="fv5-chevron">
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>
        <div class="fv5-panel">
          <div class="fv5-panel-inner">${a5}</div>
        </div>
      </div>
    </div>
  </section>
</div>

<script>
  function fv5Toggle(trigger) {
    var item = trigger.closest('.fv5-item');
    var isOpen = item.classList.contains('fv5-open');
    var chevronPoly = trigger.querySelector('.fv5-chevron svg polyline');

    document.querySelectorAll('.fv5-item').forEach(function(el) {
      el.classList.remove('fv5-open');
      el.querySelector('.fv5-trigger').setAttribute('aria-expanded', 'false');
      el.querySelector('.fv5-chevron svg polyline').setAttribute('points', '6 9 12 15 18 9');
    });

    if (!isOpen) {
      item.classList.add('fv5-open');
      trigger.setAttribute('aria-expanded', 'true');
      chevronPoly.setAttribute('points', '18 15 12 9 6 15');
    }
  }
</script>`;
}

export default function FaqV5({ config }) {
  return null;
}