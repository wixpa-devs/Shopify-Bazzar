export function getHeroV9Code(config = {}) {
  const wrapperBg    = config.wrapperBg    || "#111";
  const eyebrowText  = config.eyebrowText  || "Active & Wellness";
  const titleLine1   = config.titleLine1   || "Gear Up For";
  const titleLine2   = config.titleLine2   || "Great";
  const titleLine3   = config.titleLine3   || "Health";
  const ctaText      = config.ctaText      || "Discover Now";
  const ctaUrl       = config.ctaUrl       || "#";

  const videoPoster  = config.videoPoster  || "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80";
  const videoSrc1    = config.videoSrc1    || "https://media.w3.org/2010/05/sintel/trailer.mp4";
  const videoSrc2    = config.videoSrc2    || "https://media.w3.org/2010/05/video/movie_300.mp4";
  const videoSrc3    = config.videoSrc3    || "https://www.w3schools.com/html/mov_bbb.mp4";

  const rightImg     = config.rightImg     || "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=700&q=85";
  const rightImgAlt  = config.rightImgAlt  || "Woman smiling holding a wellness supplement bottle";
  const badgeTitle   = config.badgeTitle   || "Wellness Boost";
  const badgeSubtext = config.badgeSubtext || "New Arrivals · Shop Now →";
  const badgeUrl     = config.badgeUrl     || "#";

  return `<!-- Hero V9 — Video + Image Split | Shopify Bazzar -->
<style>
  .hv9 *, .hv9 *::before, .hv9 *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .hv9 { font-family: inherit; -webkit-font-smoothing: antialiased; }

  .hv9__hero {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: clamp(300px, 42vw, 540px);
    overflow: hidden;
    background: ${wrapperBg};
    gap: 4px;
  }

  .hv9__left {
    position: relative;
    flex: 0 0 58%;
    overflow: hidden;
    background: #1a1a1a;
  }

  .hv9__video {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .hv9__loader {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    background: rgba(0,0,0,0.45);
    pointer-events: none;
    transition: opacity 400ms;
  }
  .hv9__loader.hidden { opacity: 0; }

  .hv9__spinner {
    width: 36px; height: 36px;
    border: 3px solid rgba(255,255,255,0.25);
    border-top-color: #fff;
    border-radius: 50%;
    animation: hv9spin 0.8s linear infinite;
  }
  @keyframes hv9spin { to { transform: rotate(360deg); } }

  .hv9__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(0,0,0,0.62) 0%,
      rgba(0,0,0,0.28) 55%,
      transparent 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  .hv9__body {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: clamp(18px, 3.5vw, 48px) clamp(20px, 4vw, 54px);
  }

  .hv9__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: clamp(0.58rem, 0.9vw, 0.7rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.7);
    margin-bottom: clamp(6px, 1.2vw, 12px);
  }
  .hv9__eyebrow::before {
    content: '';
    display: inline-block;
    width: 24px; height: 1.5px;
    background: rgba(255,255,255,0.5);
    flex-shrink: 0;
  }

  .hv9__title {
    font-size: clamp(1.9rem, 5.5vw, 5rem);
    font-weight: 900;
    color: #fff;
    line-height: 0.93;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin-bottom: clamp(16px, 2.8vw, 30px);
    text-shadow: 0 3px 24px rgba(0,0,0,0.4);
  }

  .hv9__actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: nowrap;
  }

  .hv9__cta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 44px;
    background: rgba(255,255,255,0.10);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #fff;
    font-size: clamp(0.62rem, 0.95vw, 0.75rem);
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: clamp(8px, 1.2vw, 12px) clamp(16px, 2.2vw, 26px);
    border: 1.5px solid rgba(255,255,255,0.6);
    border-radius: 2px;
    text-decoration: none;
    white-space: nowrap;
    transition: background 180ms, border-color 180ms, transform 140ms;
    font: inherit;
  }
  .hv9__cta:hover {
    background: rgba(255,255,255,0.22);
    border-color: #fff;
    transform: translateY(-2px);
  }

  .hv9__icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: clamp(34px, 3.8vw, 46px);
    height: clamp(34px, 3.8vw, 46px);
    border-radius: 50%;
    background: rgba(255,255,255,0.13);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1.5px solid rgba(255,255,255,0.38);
    color: #fff;
    cursor: pointer;
    transition: background 180ms, transform 140ms;
  }
  .hv9__icon-btn:hover  { background: rgba(255,255,255,0.26); transform: scale(1.08); }
  .hv9__icon-btn:active { transform: scale(0.94); }
  .hv9__icon-btn svg    { pointer-events: none; display: block; }

  .hv9__progress {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: rgba(255,255,255,0.18);
    z-index: 4;
    cursor: pointer;
  }
  .hv9__progress-fill {
    height: 100%;
    width: 0%;
    background: #fff;
    pointer-events: none;
    transition: width 0.25s linear;
  }

  .hv9__right {
    position: relative;
    flex: 1;
    overflow: hidden;
    background: #222;
  }

  .hv9__right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .hv9__right:hover img { transform: scale(1.04); }

  .hv9__right::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 28%);
    z-index: 1;
    pointer-events: none;
  }

  .hv9__badge {
    position: absolute;
    bottom: clamp(14px, 2.5vw, 26px);
    left: clamp(12px, 2vw, 22px);
    z-index: 2;
    background: rgba(255,255,255,0.94);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 4px;
    padding: clamp(7px, 1vw, 11px) clamp(10px, 1.5vw, 16px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.14);
  }
  .hv9__badge strong {
    display: block;
    font-size: clamp(0.7rem, 1.1vw, 0.85rem);
    font-weight: 700;
    color: #111;
    margin-bottom: 2px;
  }
  .hv9__badge a {
    font-size: clamp(0.58rem, 0.85vw, 0.68rem);
    color: #777;
    font-weight: 500;
    text-decoration: none;
    font: inherit;
  }
  .hv9__badge a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .hv9__hero  { height: clamp(280px, 44vw, 440px); }
    .hv9__title { font-size: clamp(1.7rem, 4.8vw, 3.4rem); }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    .hv9__hero    { height: clamp(260px, 50vw, 380px); gap: 3px; }
    .hv9__left    { flex: 0 0 55%; }
    .hv9__title   { font-size: clamp(1.4rem, 4.5vw, 2.4rem); }
    .hv9__body    { padding: clamp(14px, 3vw, 24px); }
    .hv9__cta     { font-size: 0.62rem; padding: 7px 13px; }
    .hv9__icon-btn { width: 32px; height: 32px; }
  }

  @media (max-width: 480px) {
    .hv9__hero {
      flex-direction: column;
      height: auto;
      gap: 3px;
    }
    .hv9__left {
      flex: none;
      width: 100%;
      height: 58vw;
      min-height: 220px;
      max-height: 340px;
    }
    .hv9__right {
      flex: none;
      width: 100%;
      height: 52vw;
      min-height: 200px;
      max-height: 300px;
    }
    .hv9__right img  { object-position: center 15%; }
    .hv9__title      { font-size: clamp(1.6rem, 8vw, 2.4rem); margin-bottom: 12px; }
    .hv9__body       { padding: 16px 18px; }
    .hv9__actions    { gap: 10px; }
    .hv9__cta        { font-size: 0.62rem; padding: 7px 14px; }
    .hv9__icon-btn   { width: 32px; height: 32px; }
    .hv9__badge      { bottom: 12px; left: 12px; }
  }

  @media (max-width: 360px) {
    .hv9__left   { height: 55vw; min-height: 190px; }
    .hv9__right  { height: 48vw; min-height: 170px; }
    .hv9__title  { font-size: 1.45rem; }
    .hv9__eyebrow { display: none; }
  }
</style>

<div class="hv9">
  <section class="hv9__hero" aria-label="${titleLine1} ${titleLine2} ${titleLine3}">
    <div class="hv9__left">
      <video
        class="hv9__video"
        id="hv9-video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="${videoPoster}"
      >
        <source src="${videoSrc1}" type="video/mp4"/>
        <source src="${videoSrc2}" type="video/mp4"/>
        <source src="${videoSrc3}" type="video/mp4"/>
      </video>

      <div class="hv9__loader" id="hv9-loader">
        <div class="hv9__spinner"></div>
      </div>

      <div class="hv9__overlay"></div>

      <div class="hv9__body">
        <p class="hv9__eyebrow">${eyebrowText}</p>
        <h1 class="hv9__title">${titleLine1}<br>${titleLine2}<br>${titleLine3}</h1>
        <div class="hv9__actions">
          <a href="${ctaUrl}" class="hv9__cta">${ctaText}</a>

          <button class="hv9__icon-btn" id="hv9-play" aria-label="Pause video" title="Play / Pause">
            <svg id="hv9-icon-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:none; margin-left:2px"><polygon points="5,3 19,12 5,21"/></svg>
            <svg id="hv9-icon-pause" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/></svg>
          </button>

          <button class="hv9__icon-btn" id="hv9-mute" aria-label="Unmute" title="Mute / Unmute">
            <svg id="hv9-icon-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
            <svg id="hv9-icon-sound" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="hv9__progress" id="hv9-progress">
        <div class="hv9__progress-fill" id="hv9-fill"></div>
      </div>
    </div>

    <div class="hv9__right">
      <img
        src="${rightImg}"
        alt="${rightImgAlt}"
        loading="eager"
        width="700"
        height="540"
      />
      <div class="hv9__badge">
        <strong>${badgeTitle}</strong>
        <a href="${badgeUrl}">${badgeSubtext}</a>
      </div>
    </div>
  </section>
</div>

<script>
(function () {
  var video      = document.getElementById('hv9-video');
  var loader     = document.getElementById('hv9-loader');
  var playBtn    = document.getElementById('hv9-play');
  var muteBtn    = document.getElementById('hv9-mute');
  var iconPlay   = document.getElementById('hv9-icon-play');
  var iconPause  = document.getElementById('hv9-icon-pause');
  var iconMuted  = document.getElementById('hv9-icon-muted');
  var iconSound  = document.getElementById('hv9-icon-sound');
  var fill       = document.getElementById('hv9-fill');
  var track      = document.getElementById('hv9-progress');
  var heroEl     = document.querySelector('.hv9__hero');

  video.muted  = true;
  video.volume = 0;
  video.load();
  video.play().catch(function () { syncPlay(); });

  video.addEventListener('playing', function () {
    loader.classList.add('hidden');
    setTimeout(function () { loader.style.display = 'none'; }, 420);
  });

  function syncPlay() {
    var paused = video.paused;
    iconPlay.style.display  = paused ? 'block' : 'none';
    iconPause.style.display = paused ? 'none'  : 'block';
    playBtn.setAttribute('aria-label', paused ? 'Play video' : 'Pause video');
  }

  function syncMute() {
    var m = video.muted || video.volume === 0;
    iconMuted.style.display = m ? 'block' : 'none';
    iconSound.style.display = m ? 'none'  : 'block';
    muteBtn.setAttribute('aria-label', m ? 'Unmute' : 'Mute');
  }

  video.addEventListener('play',  syncPlay);
  video.addEventListener('pause', syncPlay);
  syncPlay();
  syncMute();

  playBtn.addEventListener('click', function () {
    if (video.paused) { video.play(); } else { video.pause(); }
  });

  muteBtn.addEventListener('click', function () {
    video.muted  = !video.muted;
    video.volume = video.muted ? 0 : 0.7;
    syncMute();
  });

  video.addEventListener('timeupdate', function () {
    if (video.duration) {
      fill.style.width = (video.currentTime / video.duration * 100) + '%';
    }
  });

  track.addEventListener('click', function (e) {
    var rect = track.getBoundingClientRect();
    var pct  = (e.clientX - rect.left) / track.offsetWidth;
    if (video.duration) {
      video.currentTime = Math.max(0, Math.min(pct * video.duration, video.duration));
    }
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) video.pause();
    }, { threshold: 0.2 }).observe(heroEl);
  }
})();
</script>
  `;
}

export default function HeroV9({ config }) {
  return null;
}