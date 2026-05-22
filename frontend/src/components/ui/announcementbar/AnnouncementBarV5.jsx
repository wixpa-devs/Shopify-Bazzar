export function getAnnouncementBarV5Code(config = {}) {
  const bgColor        = config.bgColor        || "#0f172a";
  const textColor      = config.textColor      || "#cbd5e1";
  const strongColor    = config.strongColor    || "#f1f5f9";
  const accentColor    = config.accentColor    || "#38bdf8";
  const separatorColor = config.separatorColor || "#334155";
  const height         = config.height         || "40px";
  const fontSize       = config.fontSize       || "13px";
  const speed          = config.speed          || "35";
  const gap            = config.gap            || "80px";

  const item1Icon      = config.item1Icon      || "🚚";
  const item1Text      = config.item1Text      || "<strong>Free shipping</strong> on all orders over $50";

  const item2Icon      = config.item2Icon      || "🔥";
  const item2Text      = config.item2Text      || "<strong>Flash Sale</strong> — 30% OFF sitewide today only";

  const item3Icon      = config.item3Icon      || "⭐";
  const item3Text      = config.item3Text      || "Over <strong>1,200 five-star reviews</strong> and counting";

  const item4Icon      = config.item4Icon      || "🎁";
  const item4Text      = config.item4Text      || "Subscribe &amp; <strong>save 15%</strong> on your first order";

  const item5Icon      = config.item5Icon      || "✨";
  const item5Text      = config.item5Text      || "New summer collection <strong>just dropped</strong> — limited stock";

  return `<!-- AnnouncementBar V5 — Seamless Marquee | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ab6 {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: ${height};
    background: ${bgColor};
    overflow: hidden;
    font-family: inherit;
    font-size: ${fontSize};
    color: ${textColor};
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .ab6::before,
  .ab6::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }

  .ab6::before {
    left: 0;
    background: linear-gradient(to right, ${bgColor}, transparent);
  }

  .ab6::after {
    right: 0;
    background: linear-gradient(to left, ${bgColor}, transparent);
  }

  .ab6-track {
    display: flex;
    align-items: center;
    width: max-content;
    animation: ab6Scroll ${speed}s linear infinite;
    will-change: transform;
  }

  .ab6:hover .ab6-track {
    animation-play-state: paused;
  }

  @keyframes ab6Scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .ab6-track { animation: none; }
  }

  .ab6-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 0 ${gap};
    white-space: nowrap;
    flex-shrink: 0;
  }

  .ab6-icon {
    font-size: 14px;
    line-height: 1;
  }

  .ab6-text {
    color: ${textColor};
    line-height: 1;
  }

  .ab6-text strong {
    color: ${strongColor};
    font-weight: 600;
  }

  .ab6-sep {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${separatorColor};
    flex-shrink: 0;
    margin: 0 calc(${gap} - 4px) 0 0;
  }

  .ab6-cta {
    display: inline-flex;
    align-items: center;
    color: ${accentColor};
    font-size: 11px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid rgba(56,189,248,0.3);
    border-radius: 99px;
    padding: 2px 8px;
    margin-left: 8px;
    transition: background 0.2s, color 0.2s;
    white-space: nowrap;
  }

  .ab6-cta:hover {
    background: rgba(56,189,248,0.1);
    color: #7dd3fc;
  }
</style>

<div class="ab6" role="region" aria-label="Site announcements">
  <div class="ab6-track" id="ab6-track">

    <span class="ab6-item">
      <span class="ab6-icon">${item1Icon}</span>
      <span class="ab6-text">${item1Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item2Icon}</span>
      <span class="ab6-text">${item2Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item3Icon}</span>
      <span class="ab6-text">${item3Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item4Icon}</span>
      <span class="ab6-text">${item4Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item5Icon}</span>
      <span class="ab6-text">${item5Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item1Icon}</span>
      <span class="ab6-text">${item1Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item2Icon}</span>
      <span class="ab6-text">${item2Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item3Icon}</span>
      <span class="ab6-text">${item3Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item4Icon}</span>
      <span class="ab6-text">${item4Text}</span>
    </span>
    <span class="ab6-sep"></span>

    <span class="ab6-item">
      <span class="ab6-icon">${item5Icon}</span>
      <span class="ab6-text">${item5Text}</span>
    </span>
    <span class="ab6-sep"></span>

  </div>
</div>`;
}

export default function AnnouncementBarV5({ config }) {
  return null;
}