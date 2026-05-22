export function getFaqV10Code(config = {}) {
  const bgColor     = config.bgColor     || "#f4f6f5";
  const textColor   = config.textColor   || "#1f2d2b";
  const mutedColor  = config.mutedColor  || "#5f6f6c";
  const headingText = config.headingText || "Frequently Asked Questions";
  const subText     = config.subText     || "Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.";

  const q1 = config.q1 || "Is there a free trial available?";
  const a1 = config.a1 || "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running.";
  const q2 = config.q2 || "Can I change my plan later?";
  const a2 = config.a2 || "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.";
  const q3 = config.q3 || "What is your cancellation policy?";
  const a3 = config.a3 || "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.";
  const q4 = config.q4 || "Can other info be added to an invoice?";
  const a4 = config.a4 || "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.";
  const q5 = config.q5 || "How does billing work?";
  const a5 = config.a5 || "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.";
  const q6 = config.q6 || "How do I change my account email?";
  const a6 = config.a6 || "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.";

  return `<!-- FAQ V10 — Static 3-Col Grid | Shopify Bazzar -->
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .fv10-wrap {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
  }

  .fv10-section {
    max-width: 1100px;
    margin: auto;
    padding: 60px 20px;
  }

  .fv10-header {
    margin-bottom: 40px;
  }

  .fv10-header h2 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${textColor};
    line-height: 1.2;
    font-family: inherit;
  }

  .fv10-header p {
    color: ${mutedColor};
    max-width: 600px;
    line-height: 1.6;
    font-size: 15px;
    font-family: inherit;
  }

  .fv10-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .fv10-item h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${textColor};
    line-height: 1.3;
    font-family: inherit;
  }

  .fv10-item p {
    font-size: 14px;
    color: ${mutedColor};
    line-height: 1.6;
    font-family: inherit;
  }

  @media (max-width: 900px) {
    .fv10-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .fv10-grid { grid-template-columns: 1fr; gap: 28px; }
    .fv10-header h2 { font-size: 26px; }
    .fv10-section { padding: 40px 16px; }
  }
</style>

<div class="fv10-wrap">
  <section class="fv10-section">

    <div class="fv10-header">
      <h2>${headingText}</h2>
      <p>${subText}</p>
    </div>

    <div class="fv10-grid">

      <div class="fv10-item">
        <h4>${q1}</h4>
        <p>${a1}</p>
      </div>

      <div class="fv10-item">
        <h4>${q2}</h4>
        <p>${a2}</p>
      </div>

      <div class="fv10-item">
        <h4>${q3}</h4>
        <p>${a3}</p>
      </div>

      <div class="fv10-item">
        <h4>${q4}</h4>
        <p>${a4}</p>
      </div>

      <div class="fv10-item">
        <h4>${q5}</h4>
        <p>${a5}</p>
      </div>

      <div class="fv10-item">
        <h4>${q6}</h4>
        <p>${a6}</p>
      </div>

    </div>
  </section>
</div>`;
}

export default function FaqV10({ config }) {
  return null;
}