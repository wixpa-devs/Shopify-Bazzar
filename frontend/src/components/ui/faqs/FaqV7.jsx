export function getFaqV7Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const accentColor = config.accentColor || "#e85c26";
  const titleColor = config.titleColor || "#1a1a1a";
  const questionColor = config.questionColor || "#1a1a1a";
  const answerColor = config.answerColor || "#555555";
  const openItemBg = config.openItemBg || "#fff4ec";

  const badgeText = config.badgeText || "FAQ";
  const titleText = config.titleText || "Questions You Might Have";
  const titleHighlight = config.titleHighlight || "Questions";

  const photoUrl =
    config.photoUrl ||
    "https://picsum.photos/seed/businessmen/600/640";
  const photoAlt =
    config.photoAlt || "Two business professionals in an office";

  const ctaCardBg = config.ctaCardBg || "#3d1fa3";
  const ctaTitle =
    config.ctaTitle || "Still Have Questions?";
  const ctaBody =
    config.ctaBody ||
    "We're Here To Assist With Any Queries. Reach Out And Get Precise Answers Directly From Our Team.";
  const callLabel = config.callLabel || "CALL US";
  const callUrl = config.callUrl || "tel:+1234567890";
  const whatsappLabel =
    config.whatsappLabel || "TALK TO US ON WHATSAPP";
  const whatsappUrl =
    config.whatsappUrl || "https://wa.me/1234567890";

  const q1 =
    config.q1 ||
    "What Support Will I Receive After Onboarding?";
  const a1 =
    config.a1 ||
    "You'll receive dedicated onboarding support including training sessions, documentation, and a personal account manager for the first 90 days to ensure a smooth start.";
  const q2 =
    config.q2 ||
    "How Long Does It Take To Start The Studio After Signing Up?";
  const a2 =
    config.a2 ||
    "Typically 20–30 Days, Depending On Your Readiness And Local Setup Timelines, For Most Studios To Launch.";
  const q3 =
    config.q3 ||
    "Can I Run The Studio Alongside My Existing Business?";
  const a3 =
    config.a3 ||
    "Yes. Many of our partners operate the studio as a complementary revenue stream. Our model is designed to be flexible enough to run alongside other business commitments.";
  const q4 =
    config.q4 ||
    "What Determines My Monthly Earnings?";
  const a4 =
    config.a4 ||
    "Your earnings depend on student enrollment numbers, class frequency, local pricing, and your marketing efforts. Our top partners generate significant recurring income month over month.";
  const q5 =
    config.q5 ||
    "Do I Need Experience In Education?";
  const a5 =
    config.a5 ||
    "No prior teaching experience is required. We provide full curriculum, trainer support, and operational guidance so you can run a professional studio from day one.";

  return `<!-- FAQ V7 — 2-Col with Photo, CTA Card & Orange Chevron Accordion | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv7-wrap {
    font-family: inherit;
    background: ${bgColor};
    color: #1a1a1a;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }

  .fv7-section {
    width: 100%;
    max-width: 900px;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
    align-items: start;
  }

  /* ── Left column ── */
  .fv7-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .fv7-photo {
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 4/4.2;
    background: #e0e0e0;
  }

  .fv7-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .fv7-cta-card {
    background: ${ctaCardBg};
    border-radius: 16px;
    padding: 20px 22px;
    color: #fff;
  }

  .fv7-cta-card h4 {
    font-size: 0.88rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .fv7-cta-card p {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .fv7-cta-buttons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .fv7-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.15s;
    white-space: nowrap;
  }

  .fv7-cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }

  .fv7-cta-btn.fv7-call {
    background: rgba(255,255,255,0.15);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .fv7-cta-btn.fv7-whatsapp {
    background: #25d366;
    color: #fff;
  }

  .fv7-cta-btn svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
    flex-shrink: 0;
  }

  /* ── Right column ── */
  .fv7-right { padding-top: 4px; }

  .fv7-badge {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    color: ${accentColor};
    border: 1.5px solid ${accentColor};
    border-radius: 999px;
    padding: 2px 10px;
    letter-spacing: 0.06em;
    margin-bottom: 12px;
  }

  .fv7-title {
    font-size: clamp(1.4rem, 2vw + 0.8rem, 1.9rem);
    font-weight: 800;
    color: ${titleColor};
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    line-height: 1.2;
  }

  .fv7-title .fv7-highlight { color: ${accentColor}; }

  /* ── Accordion ── */
  .fv7-accordion { border-top: 1px solid #e5e5e5; }

  .fv7-item {
    border-bottom: 1px solid #e5e5e5;
    transition: background 0.25s ease;
    border-radius: 0;
  }

  .fv7-item.fv7-open {
    background: ${openItemBg};
    border-radius: 10px;
    border-bottom: none;
    margin-bottom: 1px;
  }

  .fv7-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 18px 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .fv7-trigger .fv7-q {
    font-size: 0.88rem;
    font-weight: 600;
    color: ${questionColor};
    line-height: 1.4;
  }

  .fv7-chevron {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${accentColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .fv7-chevron svg {
    width: 14px;
    height: 14px;
    stroke: #fff;
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.3s ease;
  }

  .fv7-item.fv7-open .fv7-chevron svg { transform: rotate(180deg); }

  .fv7-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  .fv7-item.fv7-open .fv7-panel { max-height: 300px; }

  .fv7-panel-inner {
    padding: 0 16px 18px;
    font-size: 0.8rem;
    color: ${answerColor};
    line-height: 1.7;
    max-width: 56ch;
  }

  @media (max-width: 700px) {
    .fv7-section {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .fv7-photo { aspect-ratio: 4/3; }
    .fv7-panel-inner { max-width: 100%; }
  }

  @media (max-width: 380px) {
    .fv7-wrap { padding: 28px 14px; }
    .fv7-trigger { padding: 14px 12px; }
  }
</style>

<div class="fv7-wrap">
  <div class="fv7-section">

    <!-- Left -->
    <div class="fv7-left">
      <div class="fv7-photo">
        <img src="${photoUrl}" alt="${photoAlt}" width="600" height="640" loading="lazy" />
      </div>
      <div class="fv7-cta-card">
        <h4>${ctaTitle}</h4>
        <p>${ctaBody}</p>
        <div class="fv7-cta-buttons">
          <a href="${callUrl}" class="fv7-cta-btn fv7-call">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.22 16z" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="fill:none"/></svg>
            ${callLabel}
          </a>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="fv7-cta-btn fv7-whatsapp">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            ${whatsappLabel}
          </a>
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="fv7-right">
      <span class="fv7-badge">${badgeText}</span>
      <h2 class="fv7-title"><span class="fv7-highlight">${titleHighlight}</span> You Might Have</h2>

      <div class="fv7-accordion" role="list">

        <div class="fv7-item" role="listitem">
          <button class="fv7-trigger" aria-expanded="false" onclick="fv7Toggle(this)">
            <span class="fv7-q">${q1}</span>
            <div class="fv7-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
          </button>
          <div class="fv7-panel"><div class="fv7-panel-inner">${a1}</div></div>
        </div>

        <div class="fv7-item fv7-open" role="listitem">
          <button class="fv7-trigger" aria-expanded="true" onclick="fv7Toggle(this)">
            <span class="fv7-q">${q2}</span>
            <div class="fv7-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
          </button>
          <div class="fv7-panel"><div class="fv7-panel-inner">${a2}</div></div>
        </div>

        <div class="fv7-item" role="listitem">
          <button class="fv7-trigger" aria-expanded="false" onclick="fv7Toggle(this)">
            <span class="fv7-q">${q3}</span>
            <div class="fv7-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
          </button>
          <div class="fv7-panel"><div class="fv7-panel-inner">${a3}</div></div>
        </div>

        <div class="fv7-item" role="listitem">
          <button class="fv7-trigger" aria-expanded="false" onclick="fv7Toggle(this)">
            <span class="fv7-q">${q4}</span>
            <div class="fv7-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
          </button>
          <div class="fv7-panel"><div class="fv7-panel-inner">${a4}</div></div>
        </div>

        <div class="fv7-item" role="listitem">
          <button class="fv7-trigger" aria-expanded="false" onclick="fv7Toggle(this)">
            <span class="fv7-q">${q5}</span>
            <div class="fv7-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
          </button>
          <div class="fv7-panel"><div class="fv7-panel-inner">${a5}</div></div>
        </div>

      </div>
    </div>

  </div>
</div>

<script>
  function fv7Toggle(trigger) {
    var item = trigger.closest('.fv7-item');
    var isOpen = item.classList.contains('fv7-open');

    document.querySelectorAll('.fv7-item').forEach(function(el) {
      el.classList.remove('fv7-open');
      el.querySelector('.fv7-trigger').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('fv7-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }
</script>`;
}

export default function FaqV7({ config }) {
  return null;
}