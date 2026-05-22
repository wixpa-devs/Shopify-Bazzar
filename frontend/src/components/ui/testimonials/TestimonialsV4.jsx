// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV4Code(config = {}) {
  const sectionBg      = config.sectionBg      || "linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)";
  const headingText    = config.headingText    || "Who, us?";
  const headingColor   = config.headingColor   || "#ffffff";

  // Stat 1 — Gold
  const stat1Label     = config.stat1Label     || "Over";
  const stat1D1        = config.stat1D1        || "1";
  const stat1D2        = config.stat1D2        || "4";
  const stat1D3        = config.stat1D3        || "2";
  const stat1Suffix    = config.stat1Suffix    || "k";
  const stat1Sub       = config.stat1Sub       || "products sold";
  const stat1Grad      = config.stat1Grad      || "linear-gradient(276deg, #ffe431, #f99520 59%)";

  // Stat 2 — Purple
  const stat2Label     = config.stat2Label     || "With";
  const stat2D1        = config.stat2D1        || "9";
  const stat2D2        = config.stat2D2        || "5";
  const stat2Suffix    = config.stat2Suffix    || "%";
  const stat2Sub       = config.stat2Sub       || "positive reviews";
  const stat2Grad      = config.stat2Grad      || "linear-gradient(238deg, #f977ff 8%, #ba36ff 69%)";

  // Stat 3 — Cyan
  const stat3Label     = config.stat3Label     || "Selling in";
  const stat3D1        = config.stat3D1        || "1";
  const stat3D2        = config.stat3D2        || "2";
  const stat3Suffix    = config.stat3Suffix    || "";
  const stat3Sub       = config.stat3Sub       || "territories";
  const stat3Grad      = config.stat3Grad      || "linear-gradient(106deg, #57f7ff 6%, #21f9ef 68%)";

  // Card BG / borders
  const cardBg         = config.cardBg         || "#1c1c1c";
  const cardBorder     = config.cardBorder     || "rgba(255,255,255,0.07)";
  const starColor      = config.starColor      || "#fc9b2c";
  const reviewTitle    = config.reviewTitle    || "#ffffff";
  const reviewText     = config.reviewText     || "#aaaaaa";
  const reviewName     = config.reviewName     || "#dddddd";
  const reviewLocation = config.reviewLocation || "#777777";
  const dotActive      = config.dotActive      || "#888888";
  const dotInactive    = config.dotInactive    || "#333333";

  // Review cards
  const r1Stars    = config.r1Stars    || "★★★★★";
  const r1Title    = config.r1Title    || "Great selection";
  const r1Text     = config.r1Text     || "Wide variety of tech products from phones to laptops. I found everything I needed in one place, very convenient.";
  const r1Name     = config.r1Name     || "Alex Williams";
  const r1Location = config.r1Location || "London, England";
  const r1Avatar   = config.r1Avatar   || "https://i.pravatar.cc/72?img=11";

  const r2Stars    = config.r2Stars    || "★★★★★";
  const r2Title    = config.r2Title    || "Top quality";
  const r2Text     = config.r2Text     || "The smartphone I bought exceeded my expectations. Top-notch quality, sleek design, and it came with a free case.";
  const r2Name     = config.r2Name     || "Sam Davis";
  const r2Location = config.r2Location || "San Francisco, California";
  const r2Avatar   = config.r2Avatar   || "https://i.pravatar.cc/72?img=32";

  const r3Stars    = config.r3Stars    || "★★★★★";
  const r3Title    = config.r3Title    || "Reliable store";
  const r3Text     = config.r3Text     || "Have ordered multiple times, always received exactly what was described. Products are genuine and fully functional.";
  const r3Name     = config.r3Name     || "Casey Brown";
  const r3Location = config.r3Location || "Denver, Colorado";
  const r3Avatar   = config.r3Avatar   || "https://i.pravatar.cc/72?img=47";

  const r4Stars    = config.r4Stars    || "★★★★★";
  const r4Title    = config.r4Title    || "User-friendly";
  const r4Text     = config.r4Text     || "Easy to navigate and find what I need. A hassle-free shopping experience with clear descriptions and fast checkout.";
  const r4Name     = config.r4Name     || "Riley Wilson";
  const r4Location = config.r4Location || "Boston, Massachusetts";
  const r4Avatar   = config.r4Avatar   || "https://i.pravatar.cc/72?img=25";

  const r5Stars    = config.r5Stars    || "★★★★★";
  const r5Title    = config.r5Title    || "Fast shipping";
  const r5Text     = config.r5Text     || "Ordered a laptop on Monday and it arrived Wednesday. Packaging was secure and the product was in perfect condition.";
  const r5Name     = config.r5Name     || "Jordan Lee";
  const r5Location = config.r5Location || "Austin, Texas";
  const r5Avatar   = config.r5Avatar   || "https://i.pravatar.cc/72?img=60";

  const r6Stars    = config.r6Stars    || "★★★★★";
  const r6Title    = config.r6Title    || "Great support";
  const r6Text     = config.r6Text     || "Had a small issue with my order and customer service resolved it within the hour. Truly outstanding after-sales care.";
  const r6Name     = config.r6Name     || "Morgan Chen";
  const r6Location = config.r6Location || "Seattle, Washington";
  const r6Avatar   = config.r6Avatar   || "https://i.pravatar.cc/72?img=15";

  return `<!-- Testimonials V4 — Dark Stats + Review Slider | Shopify Bazzar -->
<style>
  .tv4 *, .tv4 *::before, .tv4 *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .tv4 { font-family: inherit; -webkit-font-smoothing: antialiased; }

  .tv4__section {
    background: ${sectionBg};
    padding: clamp(52px, 8vw, 100px) clamp(16px, 5vw, 60px) clamp(40px, 6vw, 80px);
  }

  .tv4__heading {
    text-align: center;
    margin-bottom: clamp(32px, 5vw, 64px);
  }
  .tv4__heading h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: ${headingColor};
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .tv4__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    max-width: 960px;
    margin: 0 auto clamp(40px, 6vw, 72px);
    background: rgba(255,255,255,0.06);
    border-radius: 16px;
    overflow: hidden;
  }
  @media (min-width: 640px) {
    .tv4__grid { grid-template-columns: repeat(3, 1fr); }
  }

  .tv4__stat {
    background: #111111;
    padding: clamp(28px, 4vw, 48px) clamp(20px, 3vw, 40px);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .tv4__stat-label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 4px;
  }

  .tv4__stat-number {
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.03em;
    overflow: hidden;
    height: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tv4__digit-wrap {
    height: 1em;
    overflow: hidden;
    position: relative;
  }
  .tv4__digit-track {
    display: flex;
    flex-direction: column;
    transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .tv4__digit-track span {
    display: block;
    height: 1em;
    line-height: 1;
  }

  .tv4__stat-suffix {
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .tv4__stat--gold .tv4__digit-track span,
  .tv4__stat--gold .tv4__stat-suffix {
    background: ${stat1Grad};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .tv4__stat--purple .tv4__digit-track span,
  .tv4__stat--purple .tv4__stat-suffix {
    background: ${stat2Grad};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .tv4__stat--cyan .tv4__digit-track span,
  .tv4__stat--cyan .tv4__stat-suffix {
    background: ${stat3Grad};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  .tv4__stat-sub {
    font-size: clamp(0.8rem, 1.2vw, 0.95rem);
    font-weight: 500;
    color: #aaa;
    margin-top: 6px;
    letter-spacing: 0.01em;
  }

  .tv4__reviews-wrap {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
  }
  .tv4__reviews-wrap:active { cursor: grabbing; }

  .tv4__reviews-track {
    display: flex;
    gap: clamp(12px, 2vw, 20px);
    transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  .tv4__card {
    flex: 0 0 calc(88% - 8px);
    min-width: 0;
    background: ${cardBg};
    border: 1px solid ${cardBorder};
    border-radius: 12px;
    padding: clamp(18px, 2.5vw, 28px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 600px)  { .tv4__card { flex: 0 0 calc(50% - 10px); } }
  @media (min-width: 900px)  { .tv4__card { flex: 0 0 calc(33.333% - 14px); } }
  @media (min-width: 1150px) { .tv4__card { flex: 0 0 calc(25% - 15px); } }

  .tv4__card-stars {
    color: ${starColor};
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
  .tv4__card-title {
    font-size: clamp(0.95rem, 1.2vw, 1rem);
    font-weight: 700;
    color: ${reviewTitle};
    line-height: 1.3;
  }
  .tv4__card-text {
    font-size: 0.8rem;
    color: ${reviewText};
    line-height: 1.65;
    flex: 1;
  }
  .tv4__card-author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
  }
  .tv4__avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: #333;
  }
  .tv4__avatar img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .tv4__card-name {
    font-size: 0.82rem;
    font-weight: 600;
    color: ${reviewName};
    line-height: 1.2;
  }
  .tv4__card-location {
    font-size: 0.72rem;
    color: ${reviewLocation};
  }

  .tv4__dots {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: clamp(18px, 3vw, 28px);
  }
  .tv4__dot {
    width: 28px; height: 3px;
    border-radius: 999px;
    background: ${dotInactive};
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 250ms, width 250ms;
  }
  .tv4__dot.active {
    background: ${dotActive};
    width: 44px;
  }
</style>

<div class="tv4">
<section class="tv4__section" id="tv4-section">

  <div class="tv4__heading">
    <h2>${headingText}</h2>
  </div>

  <div class="tv4__grid">

    <div class="tv4__stat tv4__stat--gold">
      <p class="tv4__stat-label">${stat1Label}</p>
      <div class="tv4__stat-number" aria-label="${stat1D1}${stat1D2}${stat1D3}${stat1Suffix}">
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat1D1}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat1D2}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat1D3}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        <span class="tv4__stat-suffix">${stat1Suffix}</span>
      </div>
      <p class="tv4__stat-sub">${stat1Sub}</p>
    </div>

    <div class="tv4__stat tv4__stat--purple">
      <p class="tv4__stat-label">${stat2Label}</p>
      <div class="tv4__stat-number" aria-label="${stat2D1}${stat2D2}${stat2Suffix}">
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat2D1}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat2D2}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        <span class="tv4__stat-suffix">${stat2Suffix}</span>
      </div>
      <p class="tv4__stat-sub">${stat2Sub}</p>
    </div>

    <div class="tv4__stat tv4__stat--cyan">
      <p class="tv4__stat-label">${stat3Label}</p>
      <div class="tv4__stat-number" aria-label="${stat3D1}${stat3D2}${stat3Suffix}">
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat3D1}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        <div class="tv4__digit-wrap"><div class="tv4__digit-track" data-target="${stat3D2}"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></div></div>
        ${stat3Suffix ? `<span class="tv4__stat-suffix">${stat3Suffix}</span>` : ""}
      </div>
      <p class="tv4__stat-sub">${stat3Sub}</p>
    </div>

  </div>

  <div class="tv4__reviews-wrap" id="tv4-wrap">
    <div class="tv4__reviews-track" id="tv4-track">

      <div class="tv4__card">
        <div class="tv4__card-stars">${r1Stars}</div>
        <h3 class="tv4__card-title">${r1Title}</h3>
        <p class="tv4__card-text">${r1Text}</p>
        <div class="tv4__card-author">
          <div class="tv4__avatar"><img src="${r1Avatar}" alt="${r1Name}" loading="lazy"/></div>
          <div>
            <div class="tv4__card-name">${r1Name}</div>
            <div class="tv4__card-location">${r1Location}</div>
          </div>
        </div>
      </div>

      <div class="tv4__card">
        <div class="tv4__card-stars">${r2Stars}</div>
        <h3 class="tv4__card-title">${r2Title}</h3>
        <p class="tv4__card-text">${r2Text}</p>
        <div class="tv4__card-author">
          <div class="tv4__avatar"><img src="${r2Avatar}" alt="${r2Name}" loading="lazy"/></div>
          <div>
            <div class="tv4__card-name">${r2Name}</div>
            <div class="tv4__card-location">${r2Location}</div>
          </div>
        </div>
      </div>

      <div class="tv4__card">
        <div class="tv4__card-stars">${r3Stars}</div>
        <h3 class="tv4__card-title">${r3Title}</h3>
        <p class="tv4__card-text">${r3Text}</p>
        <div class="tv4__card-author">
          <div class="tv4__avatar"><img src="${r3Avatar}" alt="${r3Name}" loading="lazy"/></div>
          <div>
            <div class="tv4__card-name">${r3Name}</div>
            <div class="tv4__card-location">${r3Location}</div>
          </div>
        </div>
      </div>

      <div class="tv4__card">
        <div class="tv4__card-stars">${r4Stars}</div>
        <h3 class="tv4__card-title">${r4Title}</h3>
        <p class="tv4__card-text">${r4Text}</p>
        <div class="tv4__card-author">
          <div class="tv4__avatar"><img src="${r4Avatar}" alt="${r4Name}" loading="lazy"/></div>
          <div>
            <div class="tv4__card-name">${r4Name}</div>
            <div class="tv4__card-location">${r4Location}</div>
          </div>
        </div>
      </div>

      <div class="tv4__card">
        <div class="tv4__card-stars">${r5Stars}</div>
        <h3 class="tv4__card-title">${r5Title}</h3>
        <p class="tv4__card-text">${r5Text}</p>
        <div class="tv4__card-author">
          <div class="tv4__avatar"><img src="${r5Avatar}" alt="${r5Name}" loading="lazy"/></div>
          <div>
            <div class="tv4__card-name">${r5Name}</div>
            <div class="tv4__card-location">${r5Location}</div>
          </div>
        </div>
      </div>

      <div class="tv4__card">
        <div class="tv4__card-stars">${r6Stars}</div>
        <h3 class="tv4__card-title">${r6Title}</h3>
        <p class="tv4__card-text">${r6Text}</p>
        <div class="tv4__card-author">
          <div class="tv4__avatar"><img src="${r6Avatar}" alt="${r6Name}" loading="lazy"/></div>
          <div>
            <div class="tv4__card-name">${r6Name}</div>
            <div class="tv4__card-location">${r6Location}</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="tv4__dots" id="tv4-dots"></div>

</section>
</div>

<script>
(function () {

  function animateCounters() {
    document.querySelectorAll('.tv4__digit-track[data-target]').forEach(function (track) {
      var target = parseInt(track.getAttribute('data-target'), 10);
      track.style.transform = 'translateY(-' + (target * 10) + '%)';
    });
  }

  var tv4Section = document.getElementById('tv4-section');
  var tv4Observed = false;
  var tv4IO = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !tv4Observed) {
      tv4Observed = true;
      setTimeout(animateCounters, 200);
    }
  }, { threshold: 0.3 });
  tv4IO.observe(tv4Section);

  var wrap    = document.getElementById('tv4-wrap');
  var track   = document.getElementById('tv4-track');
  var dotsEl  = document.getElementById('tv4-dots');
  var cards   = Array.from(track.querySelectorAll('.tv4__card'));
  var total   = cards.length;
  var current = 0;
  var startX  = 0, dragDx = 0, isDrag = false;
  var autoTimer;

  function visible() {
    var w = window.innerWidth;
    if (w >= 1150) return 4;
    if (w >= 900)  return 3;
    if (w >= 600)  return 2;
    return 1;
  }

  function maxIdx() { return Math.max(0, total - visible()); }
  function gap()    { return parseFloat(getComputedStyle(track).gap) || 20; }
  function cw()     { return cards[0] ? cards[0].offsetWidth + gap() : 0; }

  function goTo(idx) {
    idx = Math.max(0, Math.min(idx, maxIdx()));
    current = idx;
    track.style.transition = 'transform 0.45s cubic-bezier(0.25,1,0.5,1)';
    track.style.transform  = 'translateX(-' + (current * cw()) + 'px)';
    buildDots();
  }

  function buildDots() {
    var pages = maxIdx() + 1;
    if (pages <= 1) { dotsEl.innerHTML = ''; return; }
    if (dotsEl.children.length !== pages) {
      dotsEl.innerHTML = '';
      for (var i = 0; i < pages; i++) {
        (function (idx) {
          var btn = document.createElement('button');
          btn.className = 'tv4__dot' + (idx === current ? ' active' : '');
          btn.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
          btn.addEventListener('click', function () { goTo(idx); resetAuto(); });
          dotsEl.appendChild(btn);
        })(i);
      }
    } else {
      Array.from(dotsEl.children).forEach(function (d, i) {
        d.className = 'tv4__dot' + (i === current ? ' active' : '');
      });
    }
  }

  function startAuto() {
    autoTimer = setInterval(function () {
      goTo(current >= maxIdx() ? 0 : current + 1);
    }, 4000);
  }

  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  wrap.addEventListener('mousedown', function (e) {
    isDrag = true;
    startX = e.clientX;
    dragDx = 0;
    track.style.transition = 'none';
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDrag) return;
    dragDx = e.clientX - startX;
    track.style.transform = 'translateX(' + (-current * cw() + dragDx) + 'px)';
  });

  document.addEventListener('mouseup', function () {
    if (!isDrag) return;
    isDrag = false;
    if (dragDx < -60) goTo(current + 1);
    else if (dragDx > 60) goTo(current - 1);
    else goTo(current);
    dragDx = 0;
    resetAuto();
  });

  wrap.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  wrap.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (dx < -50) goTo(current + 1);
    else if (dx > 50) goTo(current - 1);
    resetAuto();
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
  });

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { goTo(Math.min(current, maxIdx())); }, 120);
  });

  goTo(0);
  startAuto();

})();
</script>
  `;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV4({ config }) {
  return null;
}