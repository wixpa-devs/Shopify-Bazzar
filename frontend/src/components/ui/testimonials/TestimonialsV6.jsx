// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV6Code(config = {}) {
  const sectionBg = config.sectionBg || "#103a3a";
  const headingText = config.headingText || "Testimonials";
  const headingColor = config.headingColor || "#f6f6f0";
  const subText = config.subText || "We take pride in our work and our customer testimonials reflect that.";
  const subColor = config.subColor || "rgba(246,246,240,0.65)";
  const fadeColor = config.fadeColor || "#103a3a";

  // Optional: allow passing theme font explicitly (e.g. "var(--font-body-family)" or "'Inter', sans-serif")
  const fontFamily = config.fontFamily || "inherit";

  // Quote text color / font
  const quoteColor = config.quoteColor || "#f6f6f0";
  const authorColor = config.authorColor || "rgba(246,246,240,0.75)";

  // Stars
  const starFull = config.starFull || "#d4a843";
  const starEmpty = config.starEmpty || "rgba(246,246,240,0.18)";

  // Dots
  const dotBorder = config.dotBorder || "rgba(246,246,240,0.5)";
  const dotActive = config.dotActive || "#f6f6f0";

  // Slide 1
  const s1Stars = config.s1Stars || "4";
  const s1Quote = config.s1Quote || "Outstanding customer service. We purchased 7 items for our office, including chairs, filing cabinets, &amp; a bench.";
  const s1Author = config.s1Author || "Adaline Carter";

  // Slide 2
  const s2Stars = config.s2Stars || "4.5";
  const s2Quote = config.s2Quote || "It took me a long time to find what I liked so I love the end tables. The delivery men were nice and efficient.";
  const s2Author = config.s2Author || "Lukas Larson";

  // Slide 3
  const s3Stars = config.s3Stars || "5";
  const s3Quote = config.s3Quote || "Furniture came in beautiful condition. Very pleased with the quality. Customer Service was really excellent.";
  const s3Author = config.s3Author || "Destiny Morgan";

  // Star SVG path (hardcoded — structural)
  const starPath = `M10 1l2.39 4.84L18 6.74l-4 3.9.94 5.5L10 13.77l-4.94 2.37.94-5.5-4-3.9 5.61-.9z`;

  // Helper: build star rating HTML for a given value like "4", "4.5", "5"
  function buildStars(ratingStr, id) {
    const rating = parseFloat(ratingStr);
    const full = Math.floor(rating);
    const half = (rating % 1) >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    const svgFull = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="${starPath}" fill="${starFull}"/></svg>`;
    const svgEmpty = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="${starPath}" fill="${starEmpty}"/></svg>`;
    const svgHalf = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="${id}-half"><rect x="0" y="0" width="10" height="20"/></clipPath></defs><path d="${starPath}" fill="${starEmpty}"/><path d="${starPath}" fill="${starFull}" clip-path="url(#${id}-half)"/></svg>`;
    let html = "";
    for (let i = 0; i < full; i++) html += `<span class="tv6__star">${svgFull}</span>`;
    if (half) html += `<span class="tv6__star">${svgHalf}</span>`;
    for (let i = 0; i < empty; i++) html += `<span class="tv6__star">${svgEmpty}</span>`;
    return html;
  }

  const stars1 = buildStars(s1Stars, "tv6-s1");
  const stars2 = buildStars(s2Stars, "tv6-s2");
  const stars3 = buildStars(s3Stars, "tv6-s3");

  return `<!-- Testimonials V6 — Dark Elegant Carousel | Shopify Bazzar -->
<style>
  .tv6, .tv6 * , .tv6 *::before, .tv6 *::after {
    box-sizing: border-box;
  }

  .tv6 {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .tv6__section {
    background: ${sectionBg};
    color: ${headingColor};
    padding: clamp(48px, 6vw, 80px) 0;
    overflow: hidden;
  }

  /* ── Header ── */
  .tv6__header {
    text-align: center;
    margin-bottom: clamp(28px, 4vw, 44px);
    padding: 0 clamp(16px, 5vw, 40px);
  }

  .tv6__header h2 {
    margin: 0 0 10px 0;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 600;
    color: ${headingColor};
    letter-spacing: 0.01em;
    line-height: 1.2;
    font-family: inherit;
  }

  .tv6__header p {
    margin: 0;
    font-size: clamp(0.82rem, 1.4vw, 0.92rem);
    color: ${subColor};
    letter-spacing: 0.02em;
    line-height: 1.6;
    font-family: inherit;
  }

  /* ── Carousel wrap + side fades ── */
  .tv6__wrap {
    position: relative;
  }

  .tv6__wrap::before,
  .tv6__wrap::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(60px, 14vw, 180px);
    z-index: 2;
    pointer-events: none;
  }

  .tv6__wrap::before {
    left: 0;
    background: linear-gradient(to right, ${fadeColor} 20%, transparent);
  }

  .tv6__wrap::after {
    right: 0;
    background: linear-gradient(to left, ${fadeColor} 20%, transparent);
  }

  .tv6__viewport {
    overflow: hidden;
  }

  .tv6__track {
    display: flex;
    transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  /* ── Slide ── */
  .tv6__slide {
    flex: 0 0 100%;
    padding: 0 clamp(60px, 16vw, 220px);
    display: flex;
    justify-content: center;
  }

  .tv6__inner {
    text-align: center;
    max-width: 620px;
    width: 100%;
  }

  /* Stars */
  .tv6__stars {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 20px;
  }

  .tv6__star {
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .tv6__star svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Quote */
  .tv6__inner blockquote {
    margin: 0 0 20px 0;
    font-size: clamp(1.1rem, 2.4vw, 1.55rem);
    font-weight: 400;
    font-style: normal;
    color: ${quoteColor};
    line-height: 1.55;
    font-family: inherit;
  }

  /* Author */
  .tv6__author {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${authorColor};
    font-family: inherit;
  }

  /* ── Dots ── */
  .tv6__dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: clamp(24px, 3.5vw, 36px);
    list-style: none;
    padding: 0;
  }

  .tv6__dots li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid ${dotBorder};
    background: transparent;
    cursor: pointer;
    transition: background 220ms ease, border-color 220ms ease;
  }

  .tv6__dots li.is-active {
    background: ${dotActive};
    border-color: ${dotActive};
  }
</style>

<div class="tv6">
  <section class="tv6__section" id="tv6-section">
    <div class="tv6__header">
      <h2>${headingText}</h2>
      <p>${subText}</p>
    </div>

    <div class="tv6__wrap">
      <div class="tv6__viewport" id="tv6-vp">
        <div class="tv6__track" id="tv6-track">
          <div class="tv6__slide">
            <div class="tv6__inner">
              <div class="tv6__stars" aria-label="${s1Stars} out of 5 stars">${stars1}</div>
              <blockquote>${s1Quote}</blockquote>
              <div class="tv6__author">${s1Author}</div>
            </div>
          </div>

          <div class="tv6__slide">
            <div class="tv6__inner">
              <div class="tv6__stars" aria-label="${s2Stars} out of 5 stars">${stars2}</div>
              <blockquote>${s2Quote}</blockquote>
              <div class="tv6__author">${s2Author}</div>
            </div>
          </div>

          <div class="tv6__slide">
            <div class="tv6__inner">
              <div class="tv6__stars" aria-label="${s3Stars} out of 5 stars">${stars3}</div>
              <blockquote>${s3Quote}</blockquote>
              <div class="tv6__author">${s3Author}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ol class="tv6__dots" id="tv6-dots">
      <li class="is-active" data-idx="0" aria-label="Slide 1"></li>
      <li data-idx="1" aria-label="Slide 2"></li>
      <li data-idx="2" aria-label="Slide 3"></li>
    </ol>
  </section>
</div>

<script>
(function () {
  var track = document.getElementById('tv6-track');
  var dots = Array.from(document.querySelectorAll('#tv6-dots li'));
  var total = 3;
  var cur = 0;
  var startX = 0;
  var auto;

  function goTo(idx) {
    idx = ((idx % total) + total) % total;
    cur = idx;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('is-active', i === cur);
    });
  }

  dots.forEach(function (d) {
    d.addEventListener('click', function () {
      goTo(+d.dataset.idx);
      reset();
    });
  });

  function startAuto() {
    auto = setInterval(function () { goTo(cur + 1); }, 5000);
  }

  function reset() {
    clearInterval(auto);
    startAuto();
  }

  var vp = document.getElementById('tv6-vp');
  vp.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  vp.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) goTo(cur + 1);
    else if (dx > 40) goTo(cur - 1);
    reset();
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { goTo(cur + 1); reset(); }
    if (e.key === 'ArrowLeft')  { goTo(cur - 1); reset(); }
  });

  goTo(0);
  startAuto();
})();
</script>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV6({ config }) {
  return null;
}