// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV9Code(config = {}) {
  const sectionBg = config.sectionBg || "#f5f0e8";
  const textColor = config.textColor || "#222222";
  const starColor = config.starColor || "#d4a843";
  const starLabelColor = config.starLabelColor || "#888888";
  const headlinePart1 = config.headlinePart1 || "Loved by";
  const headlinePart2 = config.headlinePart2 || "Modern Parents";
  const gradientFrom = config.gradientFrom || "#d8ae83";
  const gradientTo = config.gradientTo || "#3483be";
  const subtext = config.subtext || "Real stories from families who sleep better knowing their baby is safe.";
  const subtextColor = config.subtextColor || "#666666";

  const cardBg = config.cardBg || "#ffffff";
  const cardTitleColor = config.cardTitleColor || "#1a1a1a";
  const cardTextColor = config.cardTextColor || "#555555";
  const authorColor = config.authorColor || "#444444";
  const badgeColor = config.badgeColor || "#999999";
  const cardStarColor = config.cardStarColor || "#d4a843";
  const avatarBg = config.avatarBg || "#e8e0d5";

  const btnText = config.btnText || "See all Parent Reviews";
  const btnUrl = config.btnUrl || "#";
  const btnColor = config.btnColor || "#333333";
  const btnBorderColor = config.btnBorderColor || "#bbbbbb";
  const btnHoverBg = config.btnHoverBg || "#333333";
  const btnHoverColor = config.btnHoverColor || "#ffffff";

  const scrollSpeed = config.scrollSpeed || "60";

  // Optional theme font support
  const fontFamily = config.fontFamily || "inherit";

  // Cards — 8 original (duplicated in HTML for seamless loop)
  const c1Title = config.c1Title || "Simple, Reliable, and Beautifully Designed";
  const c1Text = config.c1Text || "PETIT was so easy to set up and fits perfectly into our home. It does exactly what we need — no stress, no complicated settings.";
  const c1Name = config.c1Name || "Maria";
  const c1Badge = config.c1Badge || "verified parent";
  const c1Img = config.c1Img || "https://i.pravatar.cc/72?img=5";

  const c2Title = config.c2Title || "A Must-Have for New Parents";
  const c2Text = config.c2Text || "This monitor gave us confidence from day one. The picture is sharp, the app is smooth, and it just works when you need it most.";
  const c2Name = config.c2Name || "Mark R.";
  const c2Badge = config.c2Badge || "verified parent";
  const c2Img = config.c2Img || "https://i.pravatar.cc/72?img=33";

  const c3Title = config.c3Title || "Worth Every Penny";
  const c3Text = config.c3Text || "We've tried other baby monitors, but this one is in a league of its own. Reliable performance, modern design, and total peace of mind.";
  const c3Name = config.c3Name || "Michael T.";
  const c3Badge = config.c3Badge || "verified parent";
  const c3Img = config.c3Img || "https://i.pravatar.cc/72?img=47";

  const c4Title = config.c4Title || "We Sleep So Much Better Now";
  const c4Text = config.c4Text || "I check the app once and fall right back asleep. The night vision is incredible and the breathing alerts give us real confidence.";
  const c4Name = config.c4Name || "Sophie L.";
  const c4Badge = config.c4Badge || "verified parent";
  const c4Img = config.c4Img || "https://i.pravatar.cc/72?img=9";

  const c5Title = config.c5Title || "Crystal Clear Video, Zero Lag";
  const c5Text = config.c5Text || "The live stream is smooth even over WiFi from another room. Setup took under 5 minutes and the app hasn't crashed once in 6 months.";
  const c5Name = config.c5Name || "Tom H.";
  const c5Badge = config.c5Badge || "verified parent";
  const c5Img = config.c5Img || "https://i.pravatar.cc/72?img=60";

  const c6Title = config.c6Title || "Gifted to Three Friends Already";
  const c6Text = config.c6Text || "I've gifted this to three expecting friends. Every single one of them messaged to say it changed their life. Enough said!";
  const c6Name = config.c6Name || "Olivia K.";
  const c6Badge = config.c6Badge || "verified parent";
  const c6Img = config.c6Img || "https://i.pravatar.cc/72?img=21";

  const c7Title = config.c7Title || "Best Baby Purchase We Made";
  const c7Text = config.c7Text || "Out of everything we bought for our baby, this monitor was the most useful. Simple, elegant, and the sound quality is outstanding.";
  const c7Name = config.c7Name || "Emma R.";
  const c7Badge = config.c7Badge || "verified parent";
  const c7Img = config.c7Img || "https://i.pravatar.cc/72?img=45";

  const c8Title = config.c8Title || "No More Midnight Panic Checks";
  const c8Text = config.c8Text || "Before PETIT I was up every hour. Now I glance at my phone, see the baby is peacefully sleeping, and drift right back off. Life-changing.";
  const c8Name = config.c8Name || "Jake W.";
  const c8Badge = config.c8Badge || "verified parent";
  const c8Img = config.c8Img || "https://i.pravatar.cc/72?img=52";

  // Helper: render a single card (used twice for seamless loop)
  function card(title, text, name, badge, img) {
    return `
        <div class="tv9__card">
          <div class="tv9__card-title">${title}</div>
          <p class="tv9__card-text">${text}</p>
          <div class="tv9__card-footer">
            <div class="tv9__avatar"><img src="${img}" alt="${name}" loading="lazy" width="36" height="36"/></div>
            <div>
              <div class="tv9__author-name">- ${name} · <span class="tv9__author-badge">${badge}</span></div>
              <div class="tv9__card-stars">★★★★★</div>
            </div>
          </div>
        </div>`;
  }

  const allCards = [
    card(c1Title, c1Text, c1Name, c1Badge, c1Img),
    card(c2Title, c2Text, c2Name, c2Badge, c2Img),
    card(c3Title, c3Text, c3Name, c3Badge, c3Img),
    card(c4Title, c4Text, c4Name, c4Badge, c4Img),
    card(c5Title, c5Text, c5Name, c5Badge, c5Img),
    card(c6Title, c6Text, c6Name, c6Badge, c6Img),
    card(c7Title, c7Text, c7Name, c7Badge, c7Img),
    card(c8Title, c8Text, c8Name, c8Badge, c8Img),
  ].join('');

  return `<!-- Testimonials V9 — Auto-Scroll Marquee with Drag | Shopify Bazzar -->
<style>
  .tv9 *, .tv9 *::before, .tv9 *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .tv9 {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${textColor};
  }

  .tv9__section {
    background: ${sectionBg};
    padding: 48px 0 0;
    overflow: hidden;
  }

  /* ── Header ── */
  .tv9__head {
    text-align: center;
    padding: 0 16px;
    margin-bottom: 36px;
  }

  .tv9__stars-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 10px;
  }

  .tv9__stars-row .tv9__stars {
    color: ${starColor};
    font-size: 0.9rem;
    letter-spacing: 2px;
  }

  .tv9__stars-row .tv9__star-label {
    font-size: 0.78rem;
    color: ${starLabelColor};
    letter-spacing: 0.03em;
    font-family: inherit;
  }

  .tv9__headline {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    color: ${textColor};
    margin-bottom: 10px;
    font-family: inherit;
  }

  .tv9__headline strong {
    font-weight: 700;
    background: linear-gradient(89deg, ${gradientFrom} 7%, ${gradientTo} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tv9__subtext {
    font-size: 0.88rem;
    color: ${subtextColor};
    line-height: 1.5;
    font-family: inherit;
  }

  /* ── Marquee ── */
  .tv9__marquee-wrap {
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    cursor: grab;
  }

  .tv9__marquee-wrap.is-dragging { cursor: grabbing; }

  .tv9__marquee-wrap.is-dragging * {
    user-select: none;
    -webkit-user-select: none;
  }

  .tv9__marquee-track {
    display: flex;
    gap: 20px;
    width: max-content;
    will-change: transform;
  }

  /* ── Card ── */
  .tv9__card {
    flex: 0 0 300px;
    background: ${cardBg};
    border-radius: 12px;
    padding: 22px 22px 18px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: box-shadow 200ms ease;
    font-family: inherit;
  }

  .tv9__card:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }

  .tv9__card-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${cardTitleColor};
    line-height: 1.35;
    font-family: inherit;
  }

  .tv9__card-text {
    font-size: 0.8rem;
    color: ${cardTextColor};
    line-height: 1.65;
    flex: 1;
    font-family: inherit;
  }

  .tv9__card-footer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
  }

  .tv9__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: ${avatarBg};
  }

  .tv9__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tv9__author-name {
    font-size: 0.75rem;
    color: ${authorColor};
    font-weight: 500;
    font-family: inherit;
  }

  .tv9__author-badge {
    font-size: 0.7rem;
    color: ${badgeColor};
    font-family: inherit;
  }

  .tv9__card-stars {
    color: ${cardStarColor};
    font-size: 0.75rem;
    letter-spacing: 1px;
    margin-top: 1px;
  }

  /* ── CTA ── */
  .tv9__cta {
    text-align: center;
    padding: 36px 16px 52px;
  }

  .tv9__btn {
    display: inline-block;
    border: 1.5px solid ${btnBorderColor};
    border-radius: 999px;
    padding: 12px 32px;
    font-size: 0.82rem;
    font-weight: 500;
    color: ${btnColor};
    background: transparent;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: border-color 200ms ease, color 200ms ease, background 200ms ease;
    text-decoration: none;
    font-family: inherit;
  }

  .tv9__btn:hover {
    border-color: ${btnHoverBg};
    background: ${btnHoverBg};
    color: ${btnHoverColor};
  }
</style>

<div class="tv9">
<section class="tv9__section">

  <div class="tv9__head">
    <div class="tv9__stars-row">
      <span class="tv9__stars">★★★★★</span>
      <span class="tv9__star-label">5-Star Reviews</span>
    </div>
    <h2 class="tv9__headline">${headlinePart1}<br><strong>${headlinePart2}</strong></h2>
    <p class="tv9__subtext">${subtext}</p>
  </div>

  <div class="tv9__marquee-wrap" id="tv9-wrap">
    <div class="tv9__marquee-track" id="tv9-track">
      ${allCards}
      ${allCards}
    </div>
  </div>

  <div class="tv9__cta">
    <a href="${btnUrl}" class="tv9__btn" target="_blank" rel="noopener noreferrer">${btnText}</a>
  </div>

</section>
</div>

<script>
(function () {
  var wrap  = document.getElementById('tv9-wrap');
  var track = document.getElementById('tv9-track');

  var dragOffset  = 0;
  var halfWidth   = 0;
  var isDragging  = false;
  var isHovering  = false;
  var startX      = 0;
  var startDrag   = 0;
  var velX        = 0;
  var lastX       = 0;
  var lastT       = 0;
  var rafId       = null;
  var resumeTimer = null;
  var lastTs      = null;

  var SPEED = ${scrollSpeed};

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    SPEED = 0;
  }

  function init() {
    halfWidth  = track.scrollWidth / 2;
    dragOffset = 0;
    startRAF();
  }

  function tick(ts) {
    rafId = requestAnimationFrame(tick);
    if (!lastTs) lastTs = ts;
    var dt = Math.min(ts - lastTs, 50);
    lastTs = ts;

    if (!isDragging && !isHovering) {
      dragOffset += SPEED * (dt / 1000);
    }

    if (dragOffset >= halfWidth) dragOffset -= halfWidth;
    if (dragOffset < 0) dragOffset += halfWidth;

    track.style.transform = 'translateX(-' + dragOffset + 'px)';
  }

  function startRAF() {
    if (rafId) return;
    lastTs = null;
    rafId = requestAnimationFrame(tick);
  }

  /* Hover — pause */
  wrap.addEventListener('mouseenter', function () {
    if (!isDragging) isHovering = true;
  });

  wrap.addEventListener('mouseleave', function () {
    isHovering = false;
  });

  /* Mouse drag */
  wrap.addEventListener('mousedown', function (e) {
    isDragging = true;
    isHovering = false;
    startX = e.clientX;
    startDrag = dragOffset;
    lastX = e.clientX;
    lastT = Date.now();
    velX = 0;
    wrap.classList.add('is-dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    var now = Date.now();
    var dt = now - lastT || 1;
    velX = (e.clientX - lastX) / dt;
    lastX = e.clientX;
    lastT = now;
    dragOffset = startDrag - (e.clientX - startX);
    if (dragOffset >= halfWidth) dragOffset -= halfWidth;
    if (dragOffset < 0) dragOffset += halfWidth;
  });

  document.addEventListener('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    wrap.classList.remove('is-dragging');
    dragOffset += -velX * 200;
    if (dragOffset >= halfWidth) dragOffset -= halfWidth;
    if (dragOffset < 0) dragOffset += halfWidth;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(function () {
      isHovering = false;
    }, 1200);
  });

  /* Touch */
  var tx = 0, tsd = 0, tvx = 0, tlx = 0, tlt = 0;

  wrap.addEventListener('touchstart', function (e) {
    isDragging = true;
    tx = e.touches[0].clientX;
    tsd = dragOffset;
    tlx = tx;
    tlt = Date.now();
    tvx = 0;
  }, { passive: true });

  wrap.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    var now = Date.now();
    var dt = now - tlt || 1;
    tvx = (e.touches[0].clientX - tlx) / dt;
    tlx = e.touches[0].clientX;
    tlt = now;
    dragOffset = tsd - (e.touches[0].clientX - tx);
    if (dragOffset >= halfWidth) dragOffset -= halfWidth;
    if (dragOffset < 0) dragOffset += halfWidth;
  }, { passive: true });

  wrap.addEventListener('touchend', function () {
    isDragging = false;
    dragOffset += -tvx * 250;
    if (dragOffset >= halfWidth) dragOffset -= halfWidth;
    if (dragOffset < 0) dragOffset += halfWidth;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(function () {}, 1200);
  }, { passive: true });

  window.addEventListener('load', init);
  if (document.readyState === 'complete') init();
})();
</script>
  `;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV9({ config }) {
  return null;
}