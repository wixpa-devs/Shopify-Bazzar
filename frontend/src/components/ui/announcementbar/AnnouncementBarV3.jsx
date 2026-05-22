export function getAnnouncementBarV3Code(config = {}) {
  const bgColor = config.bgColor || "#0f172a";
  const textColor = config.textColor || "#f8fafc";
  const accentColor = config.accentColor || "#38bdf8";
  const accentHover = config.accentHover || "#7dd3fc";
  const height = config.height || "48px";
  const fontSize = config.fontSize || "14px";

  const messageText = config.messageText || "Free shipping on orders over $50";
  const ctaText = config.ctaText || "Shop Now";
  const ctaUrl = config.ctaUrl || "/shop";

  return `<!-- AnnouncementBar V3 — Theme Font Inherited | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ab3 {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${bgColor};
    color: ${textColor};
    font-family: inherit;
    font-size: ${fontSize};
    line-height: 1.5;
    min-height: ${height};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .ab3__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    text-align: center;
    min-width: 0;
  }

  .ab3__message {
    overflow-wrap: anywhere;
  }

  .ab3__cta {
    color: ${accentColor};
    text-decoration: none;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 4px;
    transition: color 0.2s, background-color 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .ab3__cta:hover {
    color: ${accentHover};
    background: rgba(255,255,255,0.08);
  }

  .ab3__cta:focus-visible {
    outline: 2px solid ${accentColor};
    outline-offset: 2px;
  }

  @media (min-width: 640px) {
    .ab3 {
      font-size: 15px;
      padding: 0 24px;
    }
  }

  @media (max-width: 639px) {
    .ab3 {
      padding-top: 10px;
      padding-bottom: 10px;
      min-height: auto;
    }
  }
</style>

<div id="ab3-bar" class="ab3" role="status" aria-live="polite">
  <div class="ab3__inner">
    <span class="ab3__message">${messageText}</span>
    <a href="${ctaUrl}" class="ab3__cta">${ctaText}</a>
  </div>
</div>`;
}

export default function AnnouncementBarV3({ config }) {
  return null;
}