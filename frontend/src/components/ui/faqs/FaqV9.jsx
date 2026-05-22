export function getFaqV9Code(config = {}) {
  const bgColor       = config.bgColor       || "#f5f5f5";
  const accentColor   = config.accentColor   || "purple";
  const headingColor  = config.headingColor  || "#111111";
  const titleColor    = config.titleColor    || "#333333";
  const answerColor   = config.answerColor   || "#555555";
  const borderColor   = config.borderColor   || "#dddddd";

  const headingText   = config.headingText   || "Frequently<br>asked questions";

  const q1            = config.q1            || "What should I do if I lose my password?";
  const a1            = config.a1            || "You can reset your password using the \"Forgot Password\" option on the login page.";
  const q2            = config.q2            || "What discounts do you offer?";
  const a2            = config.a2            || "We offer seasonal discounts, loyalty rewards, and promotional offers throughout the year.";
  const q3            = config.q3            || "How do I deposit money into my account?";
  const a3            = config.a3            || "You can deposit funds via bank transfer, credit/debit card, or supported payment gateways.";
  const q4            = config.q4            || "What is the minimum deposit?";
  const a4            = config.a4            || "The minimum deposit depends on your region and payment method, typically starting from $10.";
  const q5            = config.q5            || "How is my money protected?";
  const a5            = config.a5            || "Your funds are secured with encryption, regulated banking partners, and strict compliance standards.";

  return `<!-- FAQ V9 — 2-Col Left Heading + Purple Circle Icon Accordion | Shopify Bazzar -->
<style>
  * { box-sizing: border-box; }

  .fv9-wrap {
    font-family: inherit;
    background: ${bgColor};
    margin: 0;
    padding: 40px 20px;
  }

  .fv9-section {
    display: flex;
    max-width: 1100px;
    margin: auto;
    gap: 60px;
  }

  .fv9-left {
    flex: 1;
  }

  .fv9-left h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${headingColor};
    line-height: 1.2;
    font-family: inherit;
  }

  .fv9-line {
    width: 50px;
    height: 4px;
    background: ${accentColor};
    border-radius: 10px;
  }

  .fv9-right {
    flex: 2;
  }

  .fv9-item {
    border-bottom: 1px solid ${borderColor};
    padding: 18px 0;
    cursor: pointer;
  }

  .fv9-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .fv9-title {
    font-size: 18px;
    font-weight: 600;
    color: ${titleColor};
    line-height: 1.4;
    font-family: inherit;
  }

  .fv9-icon {
    width: 32px;
    height: 32px;
    border: 2px solid ${accentColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${accentColor};
    font-size: 20px;
    flex-shrink: 0;
    transition: background 0.3s ease, color 0.3s ease;
    user-select: none;
    font-family: inherit;
  }

  .fv9-item.fv9-active .fv9-icon {
    background: ${accentColor};
    color: #ffffff;
  }

  .fv9-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    color: ${answerColor};
    font-size: 15px;
    margin-top: 10px;
    line-height: 1.6;
    font-family: inherit;
  }

  .fv9-item.fv9-active .fv9-content {
    max-height: 200px;
  }

  @media (max-width: 768px) {
    .fv9-section {
      flex-direction: column;
      gap: 32px;
    }
    .fv9-left h2 { font-size: 28px; }
    .fv9-title { font-size: 16px; }
  }

  @media (max-width: 480px) {
    .fv9-wrap { padding: 28px 14px; }
    .fv9-title { font-size: 15px; }
    .fv9-icon { width: 28px; height: 28px; font-size: 18px; }
  }
</style>

<div class="fv9-wrap">
  <div class="fv9-section">

    <div class="fv9-left">
      <h2>${headingText}</h2>
      <div class="fv9-line"></div>
    </div>

    <div class="fv9-right">

      <div class="fv9-item">
        <div class="fv9-header">
          <div class="fv9-title">${q1}</div>
          <div class="fv9-icon">+</div>
        </div>
        <div class="fv9-content">${a1}</div>
      </div>

      <div class="fv9-item">
        <div class="fv9-header">
          <div class="fv9-title">${q2}</div>
          <div class="fv9-icon">+</div>
        </div>
        <div class="fv9-content">${a2}</div>
      </div>

      <div class="fv9-item">
        <div class="fv9-header">
          <div class="fv9-title">${q3}</div>
          <div class="fv9-icon">+</div>
        </div>
        <div class="fv9-content">${a3}</div>
      </div>

      <div class="fv9-item">
        <div class="fv9-header">
          <div class="fv9-title">${q4}</div>
          <div class="fv9-icon">+</div>
        </div>
        <div class="fv9-content">${a4}</div>
      </div>

      <div class="fv9-item">
        <div class="fv9-header">
          <div class="fv9-title">${q5}</div>
          <div class="fv9-icon">+</div>
        </div>
        <div class="fv9-content">${a5}</div>
      </div>

    </div>
  </div>
</div>

<script>
  (function() {
    var items = document.querySelectorAll('.fv9-item');

    items.forEach(function(item) {
      item.addEventListener('click', function() {
        var isActive = item.classList.contains('fv9-active');

        items.forEach(function(i) {
          i.classList.remove('fv9-active');
          i.querySelector('.fv9-icon').textContent = '+';
        });

        if (!isActive) {
          item.classList.add('fv9-active');
          item.querySelector('.fv9-icon').textContent = '\\u2212';
        }
      });
    });
  })();
</script>`;
}

export default function FaqV9({ config }) {
  return null;
}