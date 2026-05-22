export function getMarqueeV4Code(config = {}) {
  const bgColor = config.bgColor || "#000000";
  const textColor = config.textColor || "#ffffff";
  const strokeColor = config.strokeColor || "#ffffff";
  const borderColor = config.borderColor || "rgba(255,255,255,0.1)";
  const baseSpeed = config.baseSpeed || "1.2";
  const scrollBoost = config.scrollBoost || "18";
  const lerpSpeed = config.lerpSpeed || "0.07";

  const item1Text = config.item1Text || "We do a little Trolling";
  const item2Text = config.item2Text || "We do a little Scrolling";
  const item3Text = config.item3Text || "We do a little Trolling";
  const item4Text = config.item4Text || "We do a little Scrolling";
  const item5Text = config.item5Text || "We do a little Trolling";
  const item6Text = config.item6Text || "We do a little Scrolling";

  return `<!-- Marquee V4 — Scroll-Velocity Sticky | Shopify Bazzar -->
<style>
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .mq4-body {
    color: ${textColor};
    font-family: inherit;
    overflow-x: hidden;
    background: transparent;
  }

  .mq4-marquee-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 1.75rem 0;
    background: ${bgColor};
    border-top: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};
    cursor: default;
  }

  .mq4-marquee__inner {
    display: flex;
    width: max-content;
    will-change: transform;
  }

  .mq4-marquee__item {
    font-family: inherit;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 900;
    text-transform: uppercase;
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 1.5px ${strokeColor};
    padding: 0 2rem;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    user-select: none;
  }

  .mq4-marquee__item::after {
    content: "•";
    color: ${textColor};
    -webkit-text-stroke: 0;
    opacity: 0.3;
    font-size: 0.4em;
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }
</style>

<div class="mq4-body" id="mq4Body">
  <div class="mq4-marquee-section" id="mq4Section">
    <div class="mq4-marquee__inner" id="mq4ScrollingText">
      <span class="mq4-marquee__item">${item1Text}</span>
      <span class="mq4-marquee__item">${item2Text}</span>
      <span class="mq4-marquee__item">${item3Text}</span>
      <span class="mq4-marquee__item">${item4Text}</span>
      <span class="mq4-marquee__item">${item5Text}</span>
      <span class="mq4-marquee__item">${item6Text}</span>

      <span class="mq4-marquee__item" aria-hidden="true">${item1Text}</span>
      <span class="mq4-marquee__item" aria-hidden="true">${item2Text}</span>
      <span class="mq4-marquee__item" aria-hidden="true">${item3Text}</span>
      <span class="mq4-marquee__item" aria-hidden="true">${item4Text}</span>
      <span class="mq4-marquee__item" aria-hidden="true">${item5Text}</span>
      <span class="mq4-marquee__item" aria-hidden="true">${item6Text}</span>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  (function () {
    var el = document.getElementById('mq4ScrollingText');
    var section = document.getElementById('mq4Section');
    var stripWidth = el.scrollWidth / 2;

    var BASE_SPEED = ${baseSpeed};
    var SCROLL_BOOST = ${scrollBoost};
    var LERP_SPEED = ${lerpSpeed};

    var baseX = 0;
    var scrollVelocity = 0;
    var currentBoost = 0;
    var isHovered = false;

    var lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
      var dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      scrollVelocity = dy;
    }, { passive: true });

    section.addEventListener('mouseenter', function () {
      isHovered = true;
    });

    section.addEventListener('mouseleave', function () {
      isHovered = false;
    });

    function tick() {
      requestAnimationFrame(tick);

      currentBoost += (scrollVelocity - currentBoost) * LERP_SPEED;
      scrollVelocity += (0 - scrollVelocity) * LERP_SPEED;

      if (!isHovered) {
        baseX -= BASE_SPEED + (currentBoost * (SCROLL_BOOST / 20));
      }

      if (baseX <= -stripWidth) baseX += stripWidth;
      if (baseX > 0) baseX -= stripWidth;

      gsap.set(el, { x: baseX, force3D: true });
    }

    requestAnimationFrame(tick);
  })();
</script>`;
}

export default function MarqueeV4({ config }) {
  return null;
}