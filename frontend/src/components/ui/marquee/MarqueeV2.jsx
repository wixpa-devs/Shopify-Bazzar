export function getMarqueeV2Code(config = {}) {
  const bgColor          = config.bgColor          || "#f7f5f0";
  const textColor        = config.textColor        || "#1a1a1a";
  const speed            = config.speed            || "28s";
  const sectionPaddingTop    = config.sectionPaddingTop    || "clamp(32px, 4vw, 36px)";
  const sectionPaddingBottom = config.sectionPaddingBottom || "clamp(32px, 4vw, 36px)";

  const text1   = config.text1   || "For all skin types";
  const text2   = config.text2   || "Beauty in simplicity.";
  const text3   = config.text3   || "Glow with confidence";

  const img1Url = config.img1Url || "https://smootify-theme-pralise.myshopify.com/cdn/shop/files/pralise-scrolltext-2.jpg?v=1743565193&width=232";
  const img1Alt = config.img1Alt || "Skin care product";

  const img2Url = config.img2Url || "https://smootify-theme-pralise.myshopify.com/cdn/shop/files/pralise-scrolltext-1.jpg?v=1743565142&width=232";
  const img2Alt = config.img2Alt || "Beauty product";

  const img3Url = config.img3Url || "https://smootify-theme-pralise.myshopify.com/cdn/shop/files/pralise-test.jpg?v=1743565620&width=232";
  const img3Alt = config.img3Alt || "Glow product";

  return `<!-- Marquee V2 — Scrolling Text & Images | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --fs: clamp(20px, 3.5vw, 54px);
    --gap-item: clamp(30px, 5vw, 76px);
    --icon-size: clamp(44px, 8vw, 116px);
    --section-pt: ${sectionPaddingTop};
    --section-pb: ${sectionPaddingBottom};
    --bg: ${bgColor};
    --text: ${textColor};
    --speed: ${speed};
  }

  .scrolling-marquee {
    width: 100%;
    background: var(--bg);
    padding-top: var(--section-pt);
    padding-bottom: var(--section-pb);
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  }

  .scrolling-marquee__track {
    display: flex;
    align-items: center;
    width: max-content;
    will-change: transform;
    animation: marquee-rtl var(--speed) linear infinite;
  }

  .scrolling-marquee:hover .scrolling-marquee__track {
    animation-play-state: paused;
  }

  .scrolling-marquee__group {
    display: inline-flex;
    align-items: center;
    gap: var(--gap-item);
    padding-inline: calc(var(--gap-item) / 2);
    flex-shrink: 0;
    white-space: nowrap;
  }

  .scrolling-marquee__text {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: var(--fs);
    font-weight: 300;
    font-style: italic;
    color: var(--text);
    letter-spacing: 0.01em;
    line-height: 1.1;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scrolling-marquee__image-wrap {
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #e0dbd3;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  }

  .scrolling-marquee__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @keyframes marquee-rtl {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (max-width: 480px) {
    :root { --speed: 18s; }
  }

  @media (prefers-reduced-motion: reduce) {
    .scrolling-marquee__track {
      animation: none;
    }
    .scrolling-marquee {
      -webkit-mask-image: none;
      mask-image: none;
      overflow-x: auto;
    }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet">

<section class="scrolling-marquee" aria-label="Scrolling content marquee">
  <div class="scrolling-marquee__track" id="marqueeTrackV2">
    <div class="scrolling-marquee__group" id="marqueeGroupV2">

      <div class="scrolling-marquee__text">${text1}</div>

      <div class="scrolling-marquee__image-wrap">
        <img class="scrolling-marquee__image"
          src="${img1Url}"
          alt="${img1Alt}" width="232" height="232" loading="lazy">
      </div>

      <div class="scrolling-marquee__text">${text2}</div>

      <div class="scrolling-marquee__image-wrap">
        <img class="scrolling-marquee__image"
          src="${img2Url}"
          alt="${img2Alt}" width="232" height="232" loading="lazy">
      </div>

      <div class="scrolling-marquee__text">${text3}</div>

      <div class="scrolling-marquee__image-wrap">
        <img class="scrolling-marquee__image"
          src="${img3Url}"
          alt="${img3Alt}" width="232" height="232" loading="lazy">
      </div>

    </div>
  </div>
</section>

<script>
  (function () {
    var track = document.getElementById('marqueeTrackV2');
    var group = document.getElementById('marqueeGroupV2');

    var clone = group.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.removeAttribute('id');
    track.appendChild(clone);

    document.addEventListener('visibilitychange', function () {
      track.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });

    var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    function handleMotionPreference(e) {
      track.style.animationPlayState = e.matches ? 'paused' : 'running';
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionPreference);
    } else {
      mediaQuery.addListener(handleMotionPreference);
    }
  })();
</script>`;
}

export default function MarqueeV2({ config }) {
  return null;
}