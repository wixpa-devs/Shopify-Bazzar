export function getFaqV8Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const textColor = config.textColor || "#111111";
  const mutedColor = config.mutedColor || "#6f6f6f";
  const answerColor = config.answerColor || "#666666";
  const borderColor = config.borderColor || "#e5e5e5";

  const introLine1 = config.introLine1 || "Got questions?";
  const introLine2 = config.introLine2 || "Say less, we've got answers!";
  const headingText = config.headingText || "FAQ's ↗";

  const q1 = config.q1 || "HOW LONG DOES A PROJECT TAKE?";
  const a1 = config.a1 || "Each project's timeline depends on the scope. A simple landing page can be completed within 2 weeks while a full e-commerce platform might take 3–6 weeks. Once we understand your needs, we'll give you a clear, realistic timeline.";
  const q2 = config.q2 || "CAN I MANAGE A SITE AFTER IT'S BUILT?";
  const a2 = config.a2 || "Yes, the site can be built with a user-friendly backend or CMS so you can manage content easily after launch.";
  const q3 = config.q3 || "HOW DOES PRICING WORK?";
  const a3 = config.a3 || "Pricing is usually based on project scope, features, and timeline. We can provide a custom quote after reviewing your requirements.";
  const q4 = config.q4 || "WHAT TOOLS ARE USED IN BUILDING?";
  const a4 = config.a4 || "We use modern front-end and back-end tools depending on the project, such as HTML, CSS, JavaScript, Shopify, React, or other relevant frameworks.";
  const q5 = config.q5 || "HOW MUCH DOES IT COST TO BUILD AN APP?";
  const a5 = config.a5 || "The cost depends on complexity, features, and platform requirements. A simple app costs less than a highly customized product with advanced integrations.";

  return `<!-- FAQ V8 — Editorial Serif Header + Plus/Times Accordion | Shopify Bazzar -->
<style>
  * { box-sizing: border-box; }

  .fv8-wrap {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
    margin: 0;
  }

  .fv8-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  .fv8-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 28px;
  }

  .fv8-intro p {
    margin: 0;
    font-size: 14px;
    color: ${mutedColor};
    line-height: 1.3;
    font-family: inherit;
  }

  .fv8-heading {
    margin: 0;
    font-size: 56px;
    font-family: inherit;
    font-weight: 400;
    letter-spacing: -1px;
    color: ${textColor};
  }

  .fv8-list {
    border-top: 1px solid ${borderColor};
  }

  .fv8-item {
    border-bottom: 1px solid ${borderColor};
  }

  .fv8-question {
    width: 100%;
    background: none;
    border: 0;
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.5px;
    color: ${textColor};
    gap: 12px;
    font-family: inherit;
  }

  .fv8-icon {
    font-size: 28px;
    line-height: 1;
    min-width: 30px;
    text-align: center;
    flex-shrink: 0;
    font-family: inherit;
  }

  .fv8-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.35s ease;
  }

  .fv8-answer p {
    margin: 0;
    max-width: 430px;
    margin-left: auto;
    padding-bottom: 18px;
    color: ${answerColor};
    font-size: 15px;
    line-height: 1.6;
    font-family: inherit;
  }

  .fv8-item.fv8-active .fv8-answer {
    max-height: 220px;
  }

  @media (max-width: 768px) {
    .fv8-header { flex-direction: column; }
    .fv8-heading { font-size: 40px; }
    .fv8-question { font-size: 18px; gap: 12px; }
    .fv8-answer p { max-width: 100%; margin-left: 0; }
  }

  @media (max-width: 480px) {
    .fv8-section { padding: 28px 16px; }
    .fv8-question { font-size: 15px; }
    .fv8-heading { font-size: 32px; }
  }
</style>

<div class="fv8-wrap">
  <section class="fv8-section">

    <div class="fv8-header">
      <div class="fv8-intro">
        <p>${introLine1}</p>
        <p>${introLine2}</p>
      </div>
      <h2 class="fv8-heading">${headingText}</h2>
    </div>

    <div class="fv8-list">

      <div class="fv8-item fv8-active">
        <button class="fv8-question" type="button" aria-expanded="true">
          <span>${q1}</span>
          <span class="fv8-icon">&times;</span>
        </button>
        <div class="fv8-answer">
          <p>${a1}</p>
        </div>
      </div>

      <div class="fv8-item">
        <button class="fv8-question" type="button" aria-expanded="false">
          <span>${q2}</span>
          <span class="fv8-icon">+</span>
        </button>
        <div class="fv8-answer">
          <p>${a2}</p>
        </div>
      </div>

      <div class="fv8-item">
        <button class="fv8-question" type="button" aria-expanded="false">
          <span>${q3}</span>
          <span class="fv8-icon">+</span>
        </button>
        <div class="fv8-answer">
          <p>${a3}</p>
        </div>
      </div>

      <div class="fv8-item">
        <button class="fv8-question" type="button" aria-expanded="false">
          <span>${q4}</span>
          <span class="fv8-icon">+</span>
        </button>
        <div class="fv8-answer">
          <p>${a4}</p>
        </div>
      </div>

      <div class="fv8-item">
        <button class="fv8-question" type="button" aria-expanded="false">
          <span>${q5}</span>
          <span class="fv8-icon">+</span>
        </button>
        <div class="fv8-answer">
          <p>${a5}</p>
        </div>
      </div>

    </div>
  </section>
</div>

<script>
  (function() {
    var items = document.querySelectorAll('.fv8-item');

    items.forEach(function(item) {
      var btn = item.querySelector('.fv8-question');

      btn.addEventListener('click', function() {
        var isActive = item.classList.contains('fv8-active');

        items.forEach(function(el) {
          el.classList.remove('fv8-active');
          el.querySelector('.fv8-question').setAttribute('aria-expanded', 'false');
          el.querySelector('.fv8-icon').innerHTML = '+';
        });

        if (!isActive) {
          item.classList.add('fv8-active');
          btn.setAttribute('aria-expanded', 'true');
          item.querySelector('.fv8-icon').innerHTML = '&times;';
        }
      });
    });
  })();
</script>`;
}

export default function FaqV8({ config }) {
  return null;
}