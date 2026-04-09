export function getTestimonialV2Code(config = {}) {
  const sectionBg = config.sectionBg || "#f3f5f8";
  const sectionPadding = config.sectionPadding || "70px 3.5rem";
  const headingText = config.headingText || "What our customers say";
  const subheadingText = config.subheadingText || "Over 3 million people trust DigitalBank with their everyday finances.";
  const headingColor = config.headingColor || "#0f172a";
  const subheadingColor = config.subheadingColor || "#6b7280";
  const cardBg = config.cardBg || "#ffffff";
  const cardBorder = config.cardBorder || "#f3f4f6";
  const cardRadius = config.cardRadius || "16px";
  const starColor = config.starColor || "#facc15";
  const quoteColor = config.quoteColor || "#4b5563";
  const nameColor = config.nameColor || "#0f172a";
  const roleColor = config.roleColor || "#9ca3af";
  const badgeBg = config.badgeBg || "#111827";
  const badgeTextColor = config.badgeTextColor || "#ffffff";
  const appStoreLabel = config.appStoreLabel || "Download on the";
  const appStoreTitle = config.appStoreTitle || "App Store";
  const appStoreUrl = config.appStoreUrl || "#";
  const googlePlayLabel = config.googlePlayLabel || "Get it on";
  const googlePlayTitle = config.googlePlayTitle || "Google Play";
  const googlePlayUrl = config.googlePlayUrl || "#";
  const card1Stars = config.card1Stars || "5";
  const card1Quote = config.card1Quote || "I opened my account in literally 4 minutes. The virtual card was ready immediately — I used it online the same day. Absolutely seamless.";
  const card1Img = config.card1Img || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80";
  const card1Name = config.card1Name || "Sarah M.";
  const card1Role = config.card1Role || "Freelance designer, NY";
  const card2Stars = config.card2Stars || "5";
  const card2Quote = config.card2Quote || "The real-time FX rates saved me hundreds in international payments last year. The fee transparency is something traditional banks never offered me.";
  const card2Img = config.card2Img || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80";
  const card2Name = config.card2Name || "James K.";
  const card2Role = config.card2Role || "E-commerce founder, UK";
  const card3Stars = config.card3Stars || "4.5";
  const card3Quote = config.card3Quote || "Switched from my old bank after 10 years. The budgeting tools and instant notifications have completely changed how I manage my money.";
  const card3Img = config.card3Img || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80";
  const card3Name = config.card3Name || "Priya R.";
  const card3Role = config.card3Role || "Marketing manager, SG";

  function buildStars(val) {
    const num = parseFloat(val) || 5;
    const full = Math.floor(num);
    const half = num % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    let s = "";
    for (let i = 0; i < full; i++) s += `<i class="fas fa-star"></i>`;
    if (half) s += `<i class="fas fa-star-half-alt"></i>`;
    for (let i = 0; i < empty; i++) s += `<i class="far fa-star"></i>`;
    return s;
  }

  return `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
<style>
  .tv2-section { padding: ${sectionPadding}; background: ${sectionBg}; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  .tv2-heading { text-align: center; font-size: 28px; font-weight: 700; color: ${headingColor}; margin-bottom: 0.5rem; }
  .tv2-subheading { text-align: center; max-width: 520px; margin: 0 auto 2.5rem auto; font-size: 14px; color: ${subheadingColor}; line-height: 1.6; }
  .tv2-grid { max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
  .tv2-card { background: ${cardBg}; border-radius: ${cardRadius}; padding: 1.25rem; border: 1px solid ${cardBorder}; box-shadow: 0 8px 24px rgba(15,23,42,0.06); display: flex; flex-direction: column; }
  .tv2-stars { display: flex; gap: 2px; margin-bottom: 0.75rem; color: ${starColor}; font-size: 14px; }
  .tv2-quote { font-size: 14px; color: ${quoteColor}; line-height: 1.7; margin-bottom: 1rem; flex: 1; }
  .tv2-author { display: flex; align-items: center; gap: 0.75rem; }
  .tv2-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .tv2-name { font-size: 14px; font-weight: 600; color: ${nameColor}; line-height: 1.3; }
  .tv2-role { font-size: 12px; color: ${roleColor}; }
  .tv2-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 2rem; }
  .tv2-badge { display: flex; align-items: center; gap: 0.625rem; background: ${badgeBg}; color: ${badgeTextColor}; border-radius: 12px; padding: 0.625rem 1rem; cursor: pointer; text-decoration: none; transition: background 0.2s ease; }
  .tv2-badge:hover { background: #1f2937; }
  .tv2-badge i { font-size: 24px; color: ${badgeTextColor}; }
  .tv2-badge-label { font-size: 10px; color: #9ca3af; line-height: 1; margin-bottom: 2px; }
  .tv2-badge-title { font-size: 14px; font-weight: 600; color: ${badgeTextColor}; line-height: 1; }
  @media (min-width: 768px) { .tv2-grid { grid-template-columns: repeat(3, 1fr); } }
</style>

<section class="tv2-section">
  <h2 class="tv2-heading">${headingText}</h2>
  <p class="tv2-subheading">${subheadingText}</p>
  <div class="tv2-grid">
    <div class="tv2-card">
      <div class="tv2-stars">${buildStars(card1Stars)}</div>
      <p class="tv2-quote">"${card1Quote}"</p>
      <div class="tv2-author">
        <img src="${card1Img}" alt="${card1Name}" class="tv2-avatar" />
        <div><div class="tv2-name">${card1Name}</div><div class="tv2-role">${card1Role}</div></div>
      </div>
    </div>
    <div class="tv2-card">
      <div class="tv2-stars">${buildStars(card2Stars)}</div>
      <p class="tv2-quote">"${card2Quote}"</p>
      <div class="tv2-author">
        <img src="${card2Img}" alt="${card2Name}" class="tv2-avatar" />
        <div><div class="tv2-name">${card2Name}</div><div class="tv2-role">${card2Role}</div></div>
      </div>
    </div>
    <div class="tv2-card">
      <div class="tv2-stars">${buildStars(card3Stars)}</div>
      <p class="tv2-quote">"${card3Quote}"</p>
      <div class="tv2-author">
        <img src="${card3Img}" alt="${card3Name}" class="tv2-avatar" />
        <div><div class="tv2-name">${card3Name}</div><div class="tv2-role">${card3Role}</div></div>
      </div>
    </div>
  </div>
  <div class="tv2-badges">
    <a href="${appStoreUrl}" class="tv2-badge">
      <i class="fab fa-apple"></i>
      <div><div class="tv2-badge-label">${appStoreLabel}</div><div class="tv2-badge-title">${appStoreTitle}</div></div>
    </a>
    <a href="${googlePlayUrl}" class="tv2-badge">
      <i class="fab fa-google-play"></i>
      <div><div class="tv2-badge-label">${googlePlayLabel}</div><div class="tv2-badge-title">${googlePlayTitle}</div></div>
    </a>
  </div>
</section>
  `;
}

export default function TestimonialV2({ config }) {
  return null;
}