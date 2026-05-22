// Named export — used by registry and generateComponentCode.js
export function getTestimonialsV8Code(config = {}) {
  const sectionBg = config.sectionBg || "#f5f5f5";
  const textColor = config.textColor || "#121212";
  const headingText = config.headingText || "Customer Feedback";
  const arrowColor = config.arrowColor || "#121212";
  const cardBg = config.cardBg || "#ffffff";
  const cardTitleColor = config.cardTitleColor || "#121212";
  const cardTextColor = config.cardTextColor || "#555555";
  const starColor = config.starColor || "#ffce31";
  const borderColor = config.borderColor || "#f0f0f0";
  const avatarBg = config.avatarBg || "#e8e8e8";
  const authorNameColor = config.authorNameColor || "#121212";
  const authorRoleColor = config.authorRoleColor || "#888888";

  // Optional: theme font (e.g. "var(--font-body-family)" or "'Poppins', sans-serif")
  const fontFamily = config.fontFamily || "inherit";

  // Card data
  const c1Title = config.c1Title || "Excellent Quality and Service";
  const c1Text = config.c1Text || "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.";
  const c1Stars = config.c1Stars || "★★★★★";
  const c1Name = config.c1Name || "James Carter";
  const c1Role = config.c1Role || "Product Designer";
  const c1Img = config.c1Img || "https://i.pravatar.cc/88?img=12";

  const c2Title = config.c2Title || "Exactly What I Needed";
  const c2Text = config.c2Text || "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.";
  const c2Stars = config.c2Stars || "★★★★★";
  const c2Name = config.c2Name || "Daniel Smith";
  const c2Role = config.c2Role || "CO - Founder";
  const c2Img = config.c2Img || "https://i.pravatar.cc/88?img=33";

  const c3Title = config.c3Title || "Amazing Shopping Experience";
  const c3Text = config.c3Text || "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.";
  const c3Stars = config.c3Stars || "★★★★★";
  const c3Name = config.c3Name || "Ethan Williams";
  const c3Role = config.c3Role || "Founder";
  const c3Img = config.c3Img || "https://i.pravatar.cc/88?img=47";

  const c4Title = config.c4Title || "Top-Notch Performance";
  const c4Text = config.c4Text || "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.";
  const c4Stars = config.c4Stars || "★★★★★";
  const c4Name = config.c4Name || "Liam Brown";
  const c4Role = config.c4Role || "UI/UX Designer";
  const c4Img = config.c4Img || "https://i.pravatar.cc/88?img=52";

  const c5Title = config.c5Title || "Fast Delivery, Great Quality";
  const c5Text = config.c5Text || "I was pleasantly surprised by how quickly the order arrived. The quality of packaging and product exceeded my expectations completely.";
  const c5Stars = config.c5Stars || "★★★★★";
  const c5Name = config.c5Name || "Olivia Hayes";
  const c5Role = config.c5Role || "Marketing Lead";
  const c5Img = config.c5Img || "https://i.pravatar.cc/88?img=21";

  const c6Title = config.c6Title || "Outstanding Customer Support";
  const c6Text = config.c6Text || "The support team went above and beyond to resolve my issue. Quick, friendly, and incredibly helpful — I'll definitely be back.";
  const c6Stars = config.c6Stars || "★★★★★";
  const c6Name = config.c6Name || "Sophie Turner";
  const c6Role = config.c6Role || "Entrepreneur";
  const c6Img = config.c6Img || "https://i.pravatar.cc/88?img=9";

  const c7Title = config.c7Title || "Will Buy Again for Sure";
  const c7Text = config.c7Text || "Genuinely one of the best purchases I've made this year. The product delivered on every promise and the checkout process was seamless.";
  const c7Stars = config.c7Stars || "★★★★☆";
  const c7Name = config.c7Name || "Noah Miller";
  const c7Role = config.c7Role || "Developer";
  const c7Img = config.c7Img || "https://i.pravatar.cc/88?img=60";

  const c8Title = config.c8Title || "Seamless and Smooth Process";
  const c8Text = config.c8Text || "From browsing to checkout to delivery — everything worked flawlessly. I appreciated the real-time tracking and clear communication.";
  const c8Stars = config.c8Stars || "★★★★★";
  const c8Name = config.c8Name || "Ava Johnson";
  const c8Role = config.c8Role || "Brand Strategist";
  const c8Img = config.c8Img || "https://i.pravatar.cc/88?img=45";

  // Arrow SVG paths (structural — not config-driven)
  const arrowLeftPath = `M0.646447 4.35355C0.451184 4.15829 0.451184 3.84171 0.646447 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646447 4.35355ZM41 4V4.5H1V4V3.5H41V4Z`;
  const arrowRightPath = `M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4V4.5H40V4V3.5H0V4Z`;

  return `<!-- Testimonials V8 — Customer Feedback Card Slider | Shopify Bazzar -->
<style>
  .tv8, .tv8 * , .tv8 *::before, .tv8 *::after {
    box-sizing: border-box;
  }

  .tv8 {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${textColor};
  }

  .tv8__section {
    background: ${sectionBg};
    padding: 36px 0 60px;
  }

  @media (min-width: 750px) {
    .tv8__section { padding: 100px 0 60px; }
  }

  .tv8__container {
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 48px);
  }

  /* ── Header row ── */
  .tv8__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: clamp(24px, 3vw, 40px);
    gap: 16px;
  }

  .tv8__title {
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
    font-weight: 700;
    color: ${textColor};
    line-height: 1.15;
    letter-spacing: -0.02em;
    font-family: inherit;
  }

  .tv8__arrows {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
  }

  @media (max-width: 599px) {
    .tv8__arrows { display: none; }
  }

  .tv8__arrow {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 0;
    color: ${arrowColor};
    opacity: 0.85;
    transition: opacity 180ms ease;
    line-height: 0;
    font: inherit;
  }

  .tv8__arrow:hover { opacity: 1; }
  .tv8__arrow:disabled { opacity: 0.25; cursor: default; }

  .tv8__arrow svg { display: block; }

  /* ── Slider ── */
  .tv8__vp {
    overflow: hidden;
    cursor: grab;
  }

  .tv8__vp.is-dragging { cursor: grabbing; }

  .tv8__vp.is-dragging * {
    user-select: none;
    -webkit-user-select: none;
  }

  .tv8__track {
    display: flex;
    gap: 20px;
    will-change: transform;
  }

  .tv8__track.snapping {
    transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* ── Card ── */
  .tv8__card {
    flex: 0 0 calc(33.333% - 14px);
    min-width: 260px;
    background: ${cardBg};
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(20px, 2.5vw, 28px);
    min-height: 220px;
    font-family: inherit;
  }

  @media (max-width: 999px) {
    .tv8__card { flex: 0 0 calc(50% - 10px); }
  }

  @media (max-width: 599px) {
    .tv8__card { flex: 0 0 calc(85% - 10px); }
  }

  .tv8__card-body { flex: 1; }

  .tv8__card-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${cardTitleColor};
    margin-bottom: 10px;
    line-height: 1.3;
    font-family: inherit;
  }

  .tv8__card-text {
    font-size: 0.82rem;
    color: ${cardTextColor};
    line-height: 1.65;
    margin-bottom: 14px;
    font-family: inherit;
  }

  .tv8__stars {
    display: flex;
    gap: 2px;
    margin-bottom: 20px;
  }

  .tv8__stars span {
    font-size: 1.25rem;
    color: ${starColor};
    line-height: 1;
  }

  .tv8__card-footer {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 16px;
    border-top: 1px solid ${borderColor};
  }

  .tv8__avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: ${avatarBg};
  }

  .tv8__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tv8__author-name {
    font-size: 0.88rem;
    font-weight: 600;
    color: ${authorNameColor};
    line-height: 1.2;
    font-family: inherit;
  }

  .tv8__author-role {
    font-size: 0.75rem;
    color: ${authorRoleColor};
    margin-top: 2px;
    font-family: inherit;
  }
</style>

<div class="tv8">
<section class="tv8__section">
  <div class="tv8__container">

    <div class="tv8__header">
      <h2 class="tv8__title">${headingText}</h2>
      <div class="tv8__arrows">
        <button class="tv8__arrow" id="tv8-prev" aria-label="Previous slide" type="button">
          <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="${arrowLeftPath}" fill="currentColor"/>
          </svg>
        </button>
        <button class="tv8__arrow" id="tv8-next" aria-label="Next slide" type="button">
          <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="${arrowRightPath}" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="tv8__vp" id="tv8-vp">
      <div class="tv8__track" id="tv8-track">

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c1Title}</h3>
            <p class="tv8__card-text">${c1Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c1Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c1Img}" alt="${c1Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c1Name}</div>
              <div class="tv8__author-role">${c1Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c2Title}</h3>
            <p class="tv8__card-text">${c2Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c2Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c2Img}" alt="${c2Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c2Name}</div>
              <div class="tv8__author-role">${c2Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c3Title}</h3>
            <p class="tv8__card-text">${c3Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c3Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c3Img}" alt="${c3Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c3Name}</div>
              <div class="tv8__author-role">${c3Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c4Title}</h3>
            <p class="tv8__card-text">${c4Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c4Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c4Img}" alt="${c4Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c4Name}</div>
              <div class="tv8__author-role">${c4Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c5Title}</h3>
            <p class="tv8__card-text">${c5Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c5Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c5Img}" alt="${c5Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c5Name}</div>
              <div class="tv8__author-role">${c5Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c6Title}</h3>
            <p class="tv8__card-text">${c6Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c6Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c6Img}" alt="${c6Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c6Name}</div>
              <div class="tv8__author-role">${c6Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c7Title}</h3>
            <p class="tv8__card-text">${c7Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c7Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c7Img}" alt="${c7Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c7Name}</div>
              <div class="tv8__author-role">${c7Role}</div>
            </div>
          </div>
        </div>

        <div class="tv8__card">
          <div class="tv8__card-body">
            <h3 class="tv8__card-title">${c8Title}</h3>
            <p class="tv8__card-text">${c8Text}</p>
            <div class="tv8__stars" aria-label="rating"><span>${c8Stars}</span></div>
          </div>
          <div class="tv8__card-footer">
            <div class="tv8__avatar"><img src="${c8Img}" alt="${c8Name}" loading="lazy" width="44" height="44"/></div>
            <div>
              <div class="tv8__author-name">${c8Name}</div>
              <div class="tv8__author-role">${c8Role}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
</div>

<script>
(function () {
  var vp      = document.getElementById('tv8-vp');
  var track   = document.getElementById('tv8-track');
  var btnPrev = document.getElementById('tv8-prev');
  var btnNext = document.getElementById('tv8-next');

  var offset   = 0;
  var startX   = 0, startOff = 0;
  var isDrag   = false;
  var velX     = 0, lastX = 0, lastT = 0;

  function gap() {
    return parseFloat(getComputedStyle(track).gap) || 20;
  }

  function cardW() {
    var c = track.querySelector('.tv8__card');
    return c ? c.offsetWidth + gap() : 300;
  }

  function maxOffset() {
    var g = gap();
    var total = 0;
    Array.from(track.querySelectorAll('.tv8__card')).forEach(function (c) {
      total += c.offsetWidth + g;
    });
    return Math.max(0, total - g - vp.offsetWidth);
  }

  function clampV(v) {
    return Math.max(0, Math.min(v, maxOffset()));
  }

  function setOffset(v, snap) {
    offset = clampV(v);
    track.classList.toggle('snapping', !!snap);
    track.style.transform = 'translateX(-' + offset + 'px)';
    if (btnPrev) btnPrev.disabled = offset <= 0;
    if (btnNext) btnNext.disabled = offset >= maxOffset();
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      setOffset(offset - cardW() * 3, true);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', function () {
      setOffset(offset + cardW() * 3, true);
    });
  }

  vp.addEventListener('mousedown', function (e) {
    isDrag   = true;
    startX   = e.clientX;
    startOff = offset;
    lastX    = e.clientX;
    lastT    = Date.now();
    velX     = 0;
    track.classList.remove('snapping');
    vp.classList.add('is-dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDrag) return;
    var now = Date.now();
    var dt  = now - lastT || 1;
    velX    = (e.clientX - lastX) / dt;
    lastX   = e.clientX;
    lastT   = now;
    setOffset(startOff - (e.clientX - startX), false);
  });

  document.addEventListener('mouseup', function () {
    if (!isDrag) return;
    isDrag = false;
    vp.classList.remove('is-dragging');
    setOffset(offset + (-velX * 180), true);
  });

  vp.addEventListener('wheel', function (e) {
    var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (!d) return;
    e.preventDefault();
    track.classList.remove('snapping');
    setOffset(offset + d * 1.2, false);
    clearTimeout(vp._wt);
    vp._wt = setTimeout(function () {
      track.classList.add('snapping');
    }, 120);
  }, { passive: false });

  var tx = 0, toff = 0;
  vp.addEventListener('touchstart', function (e) {
    tx   = e.touches[0].clientX;
    toff = offset;
    track.classList.remove('snapping');
  }, { passive: true });

  vp.addEventListener('touchmove', function (e) {
    setOffset(toff - (e.touches[0].clientX - tx), false);
  }, { passive: true });

  vp.addEventListener('touchend', function () {
    setOffset(offset, true);
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') setOffset(offset + cardW(), true);
    if (e.key === 'ArrowLeft')  setOffset(offset - cardW(), true);
  });

  window.addEventListener('resize', function () {
    setOffset(offset, false);
  });

  setOffset(0, false);
})();
</script>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function TestimonialsV8({ config }) {
  return null;
}