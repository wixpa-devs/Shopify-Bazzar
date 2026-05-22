export function getCollectionSliderV5Code(config = {}) {
  const accentColor   = config.accentColor   || "#ff6b35";
  const bgColor       = config.bgColor       || "#07090d";
  const headingText   = config.headingText   || "Boost your professional workflow and productivity";
  const headingColor  = config.headingColor  || "#ffffff";
  const textColor     = config.textColor     || "#c5c7ce";
  const btnLabel      = config.btnLabel      || "Details";

  const card1Title    = config.card1Title    || "Designers";
  const card1Desc     = config.card1Desc     || "Tools that work like you do.";
  const card1Bg       = config.card1Bg       || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp";
  const card1Thumb    = config.card1Thumb    || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-designer.webp?w=480";

  const card2Title    = config.card2Title    || "Marketers";
  const card2Desc     = config.card2Desc     || "Create faster, explore new possibilities.";
  const card2Bg       = config.card2Bg       || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp";
  const card2Thumb    = config.card2Thumb    || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-marketer.webp?w=480";

  const card3Title    = config.card3Title    || "VFX filmmakers";
  const card3Desc     = config.card3Desc     || "From concept to cut, faster.";
  const card3Bg       = config.card3Bg       || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp";
  const card3Thumb    = config.card3Thumb    || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-film.webp?w=480";

  const card4Title    = config.card4Title    || "Content creators";
  const card4Desc     = config.card4Desc     || "Make scroll-stopping content, easily.";
  const card4Bg       = config.card4Bg       || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp";
  const card4Thumb    = config.card4Thumb    || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-content.webp?w=480";

  const card5Title    = config.card5Title    || "Art directors";
  const card5Desc     = config.card5Desc     || "Creative control at every stage.";
  const card5Bg       = config.card5Bg       || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/art-directors.webp";
  const card5Thumb    = config.card5Thumb    || "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480";

  return `
<style>
  :root {
    --cs5-gap: 1.25rem;
    --cs5-speed: 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --cs5-closed: 5rem;
    --cs5-open: 30rem;
    --cs5-accent: ${accentColor};
  }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .cs5-section {
    font-family: Inter, sans-serif;
    background: ${bgColor};
    color: ${textColor};
    width: 100%;
  }

  .cs5-head {
    max-width: 1400px;
    margin: auto;
    padding: 70px 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }
  .cs5-head h2 {
    font: 400 1.5rem/1.2 Inter, sans-serif;
    color: ${headingColor};
  }
  @media (min-width: 1024px) {
    .cs5-head h2 { font-size: 2.25rem; }
  }

  .cs5-controls {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .cs5-nav-btn {
    width: 2.5rem; height: 2.5rem;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
  }
  .cs5-nav-btn:hover { background: var(--cs5-accent); }
  .cs5-nav-btn:disabled { opacity: 0.3; cursor: default; }

  .cs5-slider {
    max-width: 1400px;
    margin: auto;
    overflow: hidden;
  }

  .cs5-track {
    display: flex;
    gap: var(--cs5-gap);
    align-items: flex-start;
    justify-content: center;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    padding-bottom: 40px;
  }
  .cs5-track::-webkit-scrollbar { display: none; }

  .cs5-card {
    position: relative;
    flex: 0 0 var(--cs5-closed);
    height: 26rem;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    transition: flex-basis var(--cs5-speed), transform var(--cs5-speed);
  }
  .cs5-card[active] {
    flex-basis: var(--cs5-open);
    transform: translateY(-6px);
    box-shadow: 0 18px 55px rgba(0,0,0,0.45);
  }

  .cs5-card__bg {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    filter: brightness(0.75) saturate(75%);
    transition: filter 0.3s, transform var(--cs5-speed);
  }
  .cs5-card:hover .cs5-card__bg {
    filter: brightness(0.9) saturate(100%);
    transform: scale(1.06);
  }

  .cs5-card__content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    padding: 0;
    background: linear-gradient(transparent 40%, rgba(0,0,0,0.85) 100%);
    z-index: 2;
  }
  .cs5-card__title {
    color: #fff;
    font-weight: 700;
    font-size: 1.35rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  .cs5-card__thumb,
  .cs5-card__desc,
  .cs5-card__btn { display: none; }

  .cs5-card[active] .cs5-card__content {
    flex-direction: row;
    align-items: center;
    padding: 1.2rem 2rem;
    gap: 1.1rem;
  }
  .cs5-card[active] .cs5-card__title {
    writing-mode: horizontal-tb;
    transform: none;
    font-size: 2.4rem;
  }
  .cs5-card[active] .cs5-card__thumb,
  .cs5-card[active] .cs5-card__desc,
  .cs5-card[active] .cs5-card__btn { display: block; }

  .cs5-card__thumb {
    width: 133px; height: 269px;
    border-radius: 0.45rem;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  }
  .cs5-card__desc {
    color: #ddd;
    font-size: 1rem;
    line-height: 1.4;
    max-width: 16rem;
  }
  .cs5-card__btn {
    padding: 0.55rem 1.3rem;
    border: none;
    border-radius: 9999px;
    background: var(--cs5-accent);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }
  .cs5-card__btn:hover { background: #ff824f; }

  .cs5-dots {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    padding: 20px 0;
  }
  .cs5-dot {
    width: 13px; height: 13px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: 0.3s;
    border: none;
  }
  .cs5-dot.active {
    background: var(--cs5-accent);
    transform: scale(1.2);
  }

  @media (max-width: 767px) {
    :root {
      --cs5-closed: 100%;
      --cs5-open: 100%;
      --cs5-gap: 0.8rem;
    }
    .cs5-head {
      padding: 30px 15px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .cs5-slider { padding: 0 15px; }
    .cs5-track {
      flex-direction: column;
      scroll-snap-type: y mandatory;
      gap: 0.8rem;
      padding-bottom: 20px;
    }
    .cs5-card {
      height: auto;
      min-height: 80px;
      flex: 0 0 auto;
      width: 100%;
      scroll-snap-align: start;
    }
    .cs5-card[active] {
      min-height: 300px;
      transform: none;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }
    .cs5-card__content {
      flex-direction: row;
      justify-content: flex-start;
      padding: 1rem;
      align-items: center;
      gap: 1rem;
    }
    .cs5-card__title {
      writing-mode: horizontal-tb;
      transform: none;
      font-size: 1.2rem;
      margin-right: auto;
    }
    .cs5-card__thumb,
    .cs5-card__desc,
    .cs5-card__btn { display: none; }
    .cs5-card[active] .cs5-card__content {
      align-items: flex-start;
      padding: 1.5rem;
    }
    .cs5-card[active] .cs5-card__title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
    .cs5-card[active] .cs5-card__thumb {
      width: 200px; height: 267px;
      border-radius: 0.35rem;
      margin-bottom: 1rem;
    }
    .cs5-card[active] .cs5-card__desc {
      font-size: 0.95rem;
      max-width: 100%;
      margin-bottom: 1rem;
    }
    .cs5-card[active] .cs5-card__btn {
      align-self: center;
      width: 100%;
      text-align: center;
      padding: 0.7rem;
    }
    .cs5-dots { display: none; }
    .cs5-controls {
      width: 100%;
      justify-content: space-between;
      padding: 0 15px 20px;
    }
    .cs5-nav-btn {
      width: 2rem; height: 2rem;
      font-size: 1.2rem;
    }
  }
</style>

<section class="cs5-section">
  <div class="cs5-head">
    <h2>${headingText}</h2>
    <div class="cs5-controls">
      <button id="cs5Prev" class="cs5-nav-btn" aria-label="Prev">&#8249;</button>
      <button id="cs5Next" class="cs5-nav-btn" aria-label="Next">&#8250;</button>
    </div>
  </div>

  <div class="cs5-slider" id="cs5Slider">
    <div class="cs5-track" id="cs5Track">

      <article class="cs5-card" active>
        <img class="cs5-card__bg" src="${card1Bg}" alt="${card1Title}" />
        <div class="cs5-card__content">
          <img class="cs5-card__thumb" src="${card1Thumb}" alt="${card1Title}" />
          <div>
            <h3 class="cs5-card__title">${card1Title}</h3>
            <p class="cs5-card__desc">${card1Desc}</p>
            <button class="cs5-card__btn">${btnLabel}</button>
          </div>
        </div>
      </article>

      <article class="cs5-card">
        <img class="cs5-card__bg" src="${card2Bg}" alt="${card2Title}" />
        <div class="cs5-card__content">
          <img class="cs5-card__thumb" src="${card2Thumb}" alt="${card2Title}" />
          <div>
            <h3 class="cs5-card__title">${card2Title}</h3>
            <p class="cs5-card__desc">${card2Desc}</p>
            <button class="cs5-card__btn">${btnLabel}</button>
          </div>
        </div>
      </article>

      <article class="cs5-card">
        <img class="cs5-card__bg" src="${card3Bg}" alt="${card3Title}" />
        <div class="cs5-card__content">
          <img class="cs5-card__thumb" src="${card3Thumb}" alt="${card3Title}" />
          <div>
            <h3 class="cs5-card__title">${card3Title}</h3>
            <p class="cs5-card__desc">${card3Desc}</p>
            <button class="cs5-card__btn">${btnLabel}</button>
          </div>
        </div>
      </article>

      <article class="cs5-card">
        <img class="cs5-card__bg" src="${card4Bg}" alt="${card4Title}" />
        <div class="cs5-card__content">
          <img class="cs5-card__thumb" src="${card4Thumb}" alt="${card4Title}" />
          <div>
            <h3 class="cs5-card__title">${card4Title}</h3>
            <p class="cs5-card__desc">${card4Desc}</p>
            <button class="cs5-card__btn">${btnLabel}</button>
          </div>
        </div>
      </article>

      <article class="cs5-card">
        <img class="cs5-card__bg" src="${card5Bg}" alt="${card5Title}" />
        <div class="cs5-card__content">
          <img class="cs5-card__thumb" src="${card5Thumb}" alt="${card5Title}" />
          <div>
            <h3 class="cs5-card__title">${card5Title}</h3>
            <p class="cs5-card__desc">${card5Desc}</p>
            <button class="cs5-card__btn">${btnLabel}</button>
          </div>
        </div>
      </article>

    </div>
  </div>

  <div class="cs5-dots" id="cs5Dots"></div>
</section>

<script>
(function () {
  var track   = document.getElementById('cs5Track');
  var wrap    = document.getElementById('cs5Slider');
  var cards   = Array.from(track.children);
  var prev    = document.getElementById('cs5Prev');
  var next    = document.getElementById('cs5Next');
  var dotsBox = document.getElementById('cs5Dots');

  var isMobile = function () { return matchMedia('(max-width:767px)').matches; };

  cards.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'cs5-dot';
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.onclick = function () { activate(i, true); };
    dotsBox.appendChild(dot);
  });
  var dots = Array.from(dotsBox.children);

  var current = 0;

  function center(i) {
    var card = cards[i];
    var axis = isMobile() ? 'top' : 'left';
    var size = isMobile() ? 'clientHeight' : 'clientWidth';
    var start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrap.scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: 'smooth'
    });
  }

  function toggleUI(i) {
    cards.forEach(function (c, k) { c.toggleAttribute('active', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('active', k === i); });
    prev.disabled = (i === 0);
    next.disabled = (i === cards.length - 1);
  }

  function activate(i, scroll) {
    if (i === current) return;
    current = i;
    toggleUI(i);
    if (scroll) center(i);
  }

  function go(step) {
    activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
  }

  prev.onclick = function () { go(-1); };
  next.onclick = function () { go(1); };

  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(-1);
  }, { passive: true });

  cards.forEach(function (card, i) {
    card.addEventListener('mouseenter', function () {
      if (matchMedia('(hover:hover)').matches) activate(i, true);
    });
    card.addEventListener('click', function () { activate(i, true); });
  });

  var sx = 0, sy = 0;
  track.addEventListener('touchstart', function (e) {
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - sx;
    var dy = e.changedTouches[0].clientY - sy;
    if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
      go((isMobile() ? dy : dx) > 0 ? -1 : 1);
  }, { passive: true });

  if (window.matchMedia('(max-width:767px)').matches) dotsBox.hidden = true;

  window.addEventListener('resize', function () { center(current); });

  toggleUI(0);
  center(0);
})();
</script>
  `;
}

export default function CollectionSliderV5({ config }) {
  return null;
}