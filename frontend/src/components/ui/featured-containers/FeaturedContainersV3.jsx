export function getFeaturedContainersV3Code(config = {}) {
  const bgColor = config.bgColor || "#f8fafc";
  const textColor = config.textColor || "#111827";
  const mutedColor = config.mutedColor || "#6b7280";
  const cardBg = config.cardBg || "#ffffff";
  const cardBorder = config.cardBorder || "#e5e7eb";
  const badgeBg = config.badgeBg || "#eef2ff";
  const badgeColor = config.badgeColor || "#6366f1";
  const badgeText = config.badgeText || "Our Features";
  const headingText = config.headingText || "We do it for the love of the Game. (Managing Projects)";
  const subtitleText = config.subtitleText || "Streamline your projects with our powerful features and gain insights with comprehensive project performance metrics.";
  const footerText = config.footerText || "Mynaul offers comprehensive project management solutions for businesses of all sizes.";

  const card1Icon = config.card1Icon || "📋";
  const card1IconUrl = config.card1IconUrl || "";
  const card1IconBg = config.card1IconBg || "#fee2e2";
  const card1IconColor = config.card1IconColor || "#ef4444";
  const card1Title = config.card1Title || "Task Management";
  const card1Text = config.card1Text || "Organize and prioritize tasks efficiently for your team's success.";

  const card2Icon = config.card2Icon || "⚡";
  const card2IconUrl = config.card2IconUrl || "";
  const card2IconBg = config.card2IconBg || "#dbeafe";
  const card2IconColor = config.card2IconColor || "#3b82f6";
  const card2Title = config.card2Title || "Real-time Updates";
  const card2Text = config.card2Text || "Stay informed with instant notifications on project progress.";

  const card3Icon = config.card3Icon || "👥";
  const card3IconUrl = config.card3IconUrl || "";
  const card3IconBg = config.card3IconBg || "#dcfce7";
  const card3IconColor = config.card3IconColor || "#22c55e";
  const card3Title = config.card3Title || "Team Collaboration";
  const card3Text = config.card3Text || "Foster teamwork with integrated communication tools.";

  const card4Icon = config.card4Icon || "🎯";
  const card4IconUrl = config.card4IconUrl || "";
  const card4IconBg = config.card4IconBg || "#fef9c3";
  const card4IconColor = config.card4IconColor || "#eab308";
  const card4Title = config.card4Title || "Goal Tracking";
  const card4Text = config.card4Text || "Set and monitor project milestones and objectives easily.";

  const card5Icon = config.card5Icon || "📊";
  const card5IconUrl = config.card5IconUrl || "";
  const card5IconBg = config.card5IconBg || "#ede9fe";
  const card5IconColor = config.card5IconColor || "#8b5cf6";
  const card5Title = config.card5Title || "Analytics Dashboard";
  const card5Text = config.card5Text || "Gain insights with comprehensive project performance metrics.";

  const card6Icon = config.card6Icon || "📅";
  const card6IconUrl = config.card6IconUrl || "";
  const card6IconBg = config.card6IconBg || "#ffedd5";
  const card6IconColor = config.card6IconColor || "#f97316";
  const card6Title = config.card6Title || "Resource Scheduling";
  const card6Text = config.card6Text || "Optimize resource allocation for maximum efficiency.";

  const card7Icon = config.card7Icon || "💬";
  const card7IconUrl = config.card7IconUrl || "";
  const card7IconBg = config.card7IconBg || "#fce7f3";
  const card7IconColor = config.card7IconColor || "#ec4899";
  const card7Title = config.card7Title || "Client Communication";
  const card7Text = config.card7Text || "Streamline client interactions within the project platform.";

  const card8Icon = config.card8Icon || "📁";
  const card8IconUrl = config.card8IconUrl || "";
  const card8IconBg = config.card8IconBg || "#e5e7eb";
  const card8IconColor = config.card8IconColor || "#6b7280";
  const card8Title = config.card8Title || "Project Templates";
  const card8Text = config.card8Text || "Kickstart projects quickly with customizable templates.";

  // Helper function to render icon
  const renderIcon = (icon, iconUrl, iconBg, iconColor) => {
    if (iconUrl && iconUrl.trim()) {
      return `<img src="${iconUrl}" alt="icon" class="fcv3-icon-img" style="background:${iconBg};" />`;
    }
    return `<div class="fcv3-icon" style="background:${iconBg};color:${iconColor};">${icon}</div>`;
  };

  return `<!-- FeaturedContainers V3 — 8-Card Features Grid | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fcv3-body {
    font-family: Arial, sans-serif;
    background: ${bgColor};
    color: ${textColor};
  }

  .fcv3-section {
    max-width: 1100px;
    margin: auto;
    padding: 80px 20px;
    text-align: center;
  }

  .fcv3-badge {
    display: inline-block;
    background: ${badgeBg};
    color: ${badgeColor};
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 15px;
  }

  .fcv3-heading {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${textColor};
    line-height: 1.3;
  }

  .fcv3-subtitle {
    max-width: 600px;
    margin: 0 auto;
    color: ${mutedColor};
    font-size: 15px;
    line-height: 1.6;
  }

  .fcv3-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 50px;
  }

  .fcv3-card {
    background: ${cardBg};
    border: 1px solid ${cardBorder};
    border-radius: 12px;
    padding: 20px;
    text-align: left;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .fcv3-card:hover {
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    transform: translateY(-3px);
  }

  .fcv3-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 18px;
  }

  .fcv3-icon-img {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: block;
    margin-bottom: 12px;
    object-fit: contain;
    padding: 4px;
  }

  .fcv3-card h4 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 6px;
    color: ${textColor};
  }

  .fcv3-card p {
    font-size: 13px;
    color: ${mutedColor};
    line-height: 1.5;
    max-width: 100%;
  }

  .fcv3-footer {
    margin-top: 30px;
    font-size: 13px;
    color: #9ca3af;
  }

  @media (max-width: 1000px) {
    .fcv3-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .fcv3-grid { grid-template-columns: 1fr; }
    .fcv3-heading { font-size: 24px; }
    .fcv3-section { padding: 50px 16px; }
  }
</style>

<div class="fcv3-body">
  <section class="fcv3-section">

    <div class="fcv3-badge">${badgeText}</div>

    <h2 class="fcv3-heading">${headingText}</h2>

    <p class="fcv3-subtitle">${subtitleText}</p>

    <div class="fcv3-grid">

      <div class="fcv3-card">
        ${renderIcon(card1Icon, card1IconUrl, card1IconBg, card1IconColor)}
        <h4>${card1Title}</h4>
        <p>${card1Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card2Icon, card2IconUrl, card2IconBg, card2IconColor)}
        <h4>${card2Title}</h4>
        <p>${card2Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card3Icon, card3IconUrl, card3IconBg, card3IconColor)}
        <h4>${card3Title}</h4>
        <p>${card3Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card4Icon, card4IconUrl, card4IconBg, card4IconColor)}
        <h4>${card4Title}</h4>
        <p>${card4Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card5Icon, card5IconUrl, card5IconBg, card5IconColor)}
        <h4>${card5Title}</h4>
        <p>${card5Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card6Icon, card6IconUrl, card6IconBg, card6IconColor)}
        <h4>${card6Title}</h4>
        <p>${card6Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card7Icon, card7IconUrl, card7IconBg, card7IconColor)}
        <h4>${card7Title}</h4>
        <p>${card7Text}</p>
      </div>

      <div class="fcv3-card">
        ${renderIcon(card8Icon, card8IconUrl, card8IconBg, card8IconColor)}
        <h4>${card8Title}</h4>
        <p>${card8Text}</p>
      </div>

    </div>

    <div class="fcv3-footer">${footerText}</div>

  </section>
</div>`;
}

export default function FeaturedContainersV3({ config }) {
  return null;
}