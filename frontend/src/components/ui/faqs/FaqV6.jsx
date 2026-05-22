// Named export — used by registry and generateComponentCode.js
export function getFaqV6Code(config = {}) {
  const bgColor       = config.bgColor || "#1e2352";
  const headingText   = config.headingText || "Any<br>questions&nbsp;?";
  const headingColor  = config.headingColor || "#f0a0a8";
  const accentColor   = config.accentColor || "#f0a0a8";
  const dividerColor  = config.dividerColor || "rgba(255,255,255,0.15)";
  const questionColor = config.questionColor || "#ffffff";
  const answerColor   = config.answerColor || "rgba(255,255,255,0.65)";

  const q1 = config.q1 || "How many events can I create?";
  const a1 = config.a1 || "You can create unlimited events on any plan. Whether you're hosting one event a year or hundreds, our platform scales with your needs without any restrictions on event count.";
  const q2 = config.q2 || "How many collaborators can I invite?";
  const a2 = config.a2 || "You can invite as many collaborators as you need, completely free in both free and paid events. Pro tip: You can also invite other stakeholders in for co-creation; for example, your Venue might want to see your Programme to prepare accordingly.";
  const q3 = config.q3 || "Transparent and simple pricing";
  const a3 = config.a3 || "We believe in straightforward pricing with no hidden fees. Our plans are clearly defined, and you only pay for what you use. Upgrades and downgrades can be done at any time without penalties.";
  const q4 = config.q4 || "Is my data safe?";
  const a4 = config.a4 || "Absolutely. We take data security seriously. All data is encrypted in transit and at rest. We are GDPR compliant and never share your data with third parties without your explicit consent.";
  const q5 = config.q5 || "I have more questions, can you help me?";
  const a5 = config.a5 || "Of course! Our support team is available 7 days a week. You can reach us via live chat, email, or schedule a demo call with one of our specialists who will be happy to walk you through anything.";

  return `<!-- FAQ V6 — Dark 2-Col Plus/Minus Accordion | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv6-wrap {
    font-family: inherit;
    background: ${bgColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 20px;
  }

  .fv6-section {
    width: 100%;
    max-width: 860px;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 48px;
    align-items: start;
  }

  .fv6-heading {
    font-size: clamp(2rem, 4vw + 1rem, 3rem);
    font-weight: 800;
    color: ${headingColor};
    line-height: 1.1;
    letter-spacing: -0.02em;
    padding-top: 4px;
    font-family: inherit;
  }

  .fv6-accordion {
    width: 100%;
    border-top: 1px solid ${dividerColor};
  }

  .fv6-item {
    border-bottom: 1px solid ${dividerColor};
  }

  .fv6-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 0;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    color: ${questionColor};
    font-family: inherit;
  }

  .fv6-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 300;
    color: ${questionColor};
    line-height: 1;
    transition: color 0.2s;
    user-select: none;
    font-family: inherit;
  }

  .fv6-trigger .fv6-label {
    font-size: 0.92rem;
    font-weight: 600;
    color: ${questionColor};
    line-height: 1.4;
    transition: color 0.2s;
    font-family: inherit;
  }

  .fv6-item.fv6-open .fv6-trigger .fv6-label { color: ${accentColor}; }
  .fv6-item.fv6-open .fv6-icon { color: ${accentColor}; }

  .fv6-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  .fv6-item.fv6-open .fv6-panel { max-height: 500px; }

  .fv6-panel-inner {
    padding: 0 0 20px 34px;
    font-size: 0.82rem;
    color: ${answerColor};
    line-height: 1.8;
    max-width: 58ch;
    font-family: inherit;
  }

  @media (max-width: 620px) {
    .fv6-section {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .fv6-heading { font-size: 2.2rem; }
    .fv6-panel-inner { max-width: 100%; }
  }

  @media (max-width: 380px) {
    .fv6-wrap { padding: 24px 14px; }
    .fv6-trigger { padding: 14px 0; }
  }
</style>

<div class="fv6-wrap">
  <div class="fv6-section">

    <h2 class="fv6-heading">${headingText}</h2>

    <div class="fv6-accordion" role="list">

      <div class="fv6-item" role="listitem">
        <button class="fv6-trigger" type="button" aria-expanded="false" onclick="fv6Toggle(this)">
          <span class="fv6-icon">+</span>
          <span class="fv6-label">${q1}</span>
        </button>
        <div class="fv6-panel">
          <div class="fv6-panel-inner">${a1}</div>
        </div>
      </div>

      <div class="fv6-item" role="listitem">
        <button class="fv6-trigger" type="button" aria-expanded="false" onclick="fv6Toggle(this)">
          <span class="fv6-icon">+</span>
          <span class="fv6-label">${q2}</span>
        </button>
        <div class="fv6-panel">
          <div class="fv6-panel-inner">${a2}</div>
        </div>
      </div>

      <div class="fv6-item" role="listitem">
        <button class="fv6-trigger" type="button" aria-expanded="false" onclick="fv6Toggle(this)">
          <span class="fv6-icon">+</span>
          <span class="fv6-label">${q3}</span>
        </button>
        <div class="fv6-panel">
          <div class="fv6-panel-inner">${a3}</div>
        </div>
      </div>

      <div class="fv6-item" role="listitem">
        <button class="fv6-trigger" type="button" aria-expanded="false" onclick="fv6Toggle(this)">
          <span class="fv6-icon">+</span>
          <span class="fv6-label">${q4}</span>
        </button>
        <div class="fv6-panel">
          <div class="fv6-panel-inner">${a4}</div>
        </div>
      </div>

      <div class="fv6-item" role="listitem">
        <button class="fv6-trigger" type="button" aria-expanded="false" onclick="fv6Toggle(this)">
          <span class="fv6-icon">+</span>
          <span class="fv6-label">${q5}</span>
        </button>
        <div class="fv6-panel">
          <div class="fv6-panel-inner">${a5}</div>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
  function fv6Toggle(trigger) {
    var item = trigger.closest('.fv6-item');
    var isOpen = item.classList.contains('fv6-open');
    var icon = trigger.querySelector('.fv6-icon');

    document.querySelectorAll('.fv6-item').forEach(function(el) {
      el.classList.remove('fv6-open');
      el.querySelector('.fv6-trigger').setAttribute('aria-expanded', 'false');
      el.querySelector('.fv6-icon').innerHTML = '+';
    });

    if (!isOpen) {
      item.classList.add('fv6-open');
      trigger.setAttribute('aria-expanded', 'true');
      icon.innerHTML = '\\u2212';
    }
  }
</script>`;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — the editor and card preview render
// via getCode() → iframe, NOT via this JSX component directly.
export default function FaqV6({ config }) {
  return null;
}