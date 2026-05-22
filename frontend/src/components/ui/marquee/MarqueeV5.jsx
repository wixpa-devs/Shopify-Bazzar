export function getMarqueeV5Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const backTextColor = config.backTextColor || "#000000";
  const frontTextColor = config.frontTextColor || "wheat";
  const marqueeText = config.marqueeText || "Recent Work";
  const separatorChar = config.separatorChar || "—";
  const imageUrl = config.imageUrl || "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1260&fit=crop";
  const animDuration = config.animDuration || "20s";
  const sceneHeight = config.sceneHeight || "100vh";

  return `<!-- Marquee V5 — Image Clip Text | Shopify Bazzar -->
<style>
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .mq5-scene {
    position: relative;
    width: 100%;
    height: ${sceneHeight};
    overflow: hidden;
    background: ${bgColor};
    -webkit-font-smoothing: antialiased;
  }

  .mq5-title {
    font-family: inherit;
    font-weight: 900;
    font-size: clamp(4rem, 14vw, 14rem);
    letter-spacing: -0.02em;
    text-transform: uppercase;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.25em;
    line-height: 1;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .mq5-title span {
    display: inline-block;
    flex-shrink: 0;
  }

  .mq5-text--back {
    z-index: 1;
    color: ${backTextColor};
    animation: mq5-drift ${animDuration} linear infinite;
  }

  .mq5-clip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: clamp(280px, 60vw, 900px);
    height: clamp(180px, 40vw, 600px);
    overflow: hidden;
    background-image: url("${imageUrl}");
    background-size: cover;
    background-position: center top;
  }

  .mq5-text--front {
    z-index: 3;
    color: ${frontTextColor};
    position: absolute;
    top: 50%;
    left: 50%;
    animation: mq5-drift ${animDuration} linear infinite;
  }

  @keyframes mq5-drift {
    0%   { transform: translate(-20%, -50%); }
    100% { transform: translate(-70%, -50%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .mq5-text--back,
    .mq5-text--front {
      animation: none;
      transform: translate(-45%, -50%);
    }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<div class="mq5-scene" aria-label="${marqueeText}">

  <h2 class="mq5-title mq5-text--back" aria-hidden="true">
    <span>${marqueeText}</span>
    <span>${separatorChar}</span>
    <span>${marqueeText}</span>
    <span>${separatorChar}</span>
    <span>${marqueeText}</span>
    <span>${separatorChar}</span>
  </h2>

  <div class="mq5-clip" role="img" aria-label="Marquee background photo">
    <h2 class="mq5-title mq5-text--front" aria-label="${marqueeText}">
      <span>${marqueeText}</span>
      <span>${separatorChar}</span>
      <span>${marqueeText}</span>
      <span>${separatorChar}</span>
      <span>${marqueeText}</span>
      <span>${separatorChar}</span>
    </h2>
  </div>

</div>`;
}

export default function MarqueeV5({ config }) {
  return null;
}