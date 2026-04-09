export function getSliderV1Code(config = {}) {
  const slide1BgImage = config.slide1BgImage || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80";
  const slide1OverlayColor = config.slide1OverlayColor || "rgba(233,156,126,0.82)";
  const slide1Heading = config.slide1Heading || "Mountain Peak";
  const slide1Desc = config.slide1Desc || "Explore the breathtaking heights of the world's most iconic peaks.";
  const slide1LinkText = config.slide1LinkText || "Explore Now";
  const slide1LinkUrl = config.slide1LinkUrl || "#";

  const slide2BgImage = config.slide2BgImage || "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80";
  const slide2OverlayColor = config.slide2OverlayColor || "rgba(107,174,140,0.82)";
  const slide2Heading = config.slide2Heading || "Forest Trail";
  const slide2Desc = config.slide2Desc || "Walk through ancient forests where every step reveals something new.";
  const slide2LinkText = config.slide2LinkText || "Discover More";
  const slide2LinkUrl = config.slide2LinkUrl || "#";

  const slide3BgImage = config.slide3BgImage || "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1400&q=80";
  const slide3OverlayColor = config.slide3OverlayColor || "rgba(173,197,205,0.82)";
  const slide3Heading = config.slide3Heading || "Ocean Horizon";
  const slide3Desc = config.slide3Desc || "Feel the vastness of the ocean stretching endlessly before you.";
  const slide3LinkText = config.slide3LinkText || "View Gallery";
  const slide3LinkUrl = config.slide3LinkUrl || "#";

  const slide4BgImage = config.slide4BgImage || "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80";
  const slide4OverlayColor = config.slide4OverlayColor || "rgba(203,176,130,0.82)";
  const slide4Heading = config.slide4Heading || "Desert Dunes";
  const slide4Desc = config.slide4Desc || "The silence of the desert speaks louder than any city ever could.";
  const slide4LinkText = config.slide4LinkText || "See More";
  const slide4LinkUrl = config.slide4LinkUrl || "#";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; background: #111; }
  body { font-family: 'Open Sans', Arial, sans-serif; cursor: grab; user-select: none; }
  body.dragging { cursor: grabbing; }

  .sc { position: relative; width: 100%; height: 100vh; overflow: hidden; }

  /* Slides */
  .sc-track {
    display: flex;
    height: 100%;
    will-change: transform;
  }
  .sc-slide {
    position: relative;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .sc-bg {
    position: absolute;
    inset: -8% 0;
    background-size: cover;
    background-position: center;
    will-change: transform;
    transition: transform 0.7s cubic-bezier(0.77,0,0.175,1);
  }
  .sc-slide:nth-child(1) .sc-bg { background-image: url('${slide1BgImage}'); }
  .sc-slide:nth-child(2) .sc-bg { background-image: url('${slide2BgImage}'); }
  .sc-slide:nth-child(3) .sc-bg { background-image: url('${slide3BgImage}'); }
  .sc-slide:nth-child(4) .sc-bg { background-image: url('${slide4BgImage}'); }

  /* SVG overlay */
  .sc-svg {
    position: absolute;
    bottom: 0; left: 0;
    height: 100%;
    min-height: 600px;
    width: auto;
    transform: translate3d(-22%, 0, 0);
    opacity: 0;
    transition: transform 0.55s 0.45s cubic-bezier(0.77,0,0.175,1),
                opacity 0.3s 0.45s ease;
    pointer-events: none;
  }
  .sc-slide:nth-child(1) .sc-svg path { fill: ${slide1OverlayColor}; }
  .sc-slide:nth-child(2) .sc-svg path { fill: ${slide2OverlayColor}; }
  .sc-slide:nth-child(3) .sc-svg path { fill: ${slide3OverlayColor}; }
  .sc-slide:nth-child(4) .sc-svg path { fill: ${slide4OverlayColor}; }

  /* Text */
  .sc-text {
    position: absolute;
    bottom: 14%;
    left: 11%;
    width: 26%;
    min-width: 220px;
    color: #fff;
    transform: translateY(28px);
    opacity: 0;
    transition: transform 0.55s 0.65s cubic-bezier(0.77,0,0.175,1),
                opacity 0.55s 0.65s ease;
  }
  .sc-text-heading {
    font-size: clamp(2rem, 5vw, 4.8rem);
    font-weight: 700;
    line-height: 1.05;
    margin-bottom: 1.4rem;
    letter-spacing: -0.5px;
  }
  .sc-text-desc {
    font-size: clamp(0.85rem, 1.3vw, 1.05rem);
    line-height: 1.65;
    margin-bottom: 1.6rem;
    opacity: 0.88;
  }
  .sc-text-link {
    display: inline-block;
    position: relative;
    padding: 0.4rem 0.5rem;
    font-size: clamp(0.9rem, 1.4vw, 1.15rem);
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    perspective: 800px;
    overflow: hidden;
  }
  .sc-text-link::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.75);
    transform-origin: 50% 100%;
    transform: rotateX(-88deg);
    transition: transform 0.32s ease;
    z-index: -1;
  }
  .sc-text-link:hover::before { transform: rotateX(0deg); }

  /* Active slide reveals */
  .sc-slide.is-active .sc-svg {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  .sc-slide.is-active .sc-text {
    transform: translateY(0);
    opacity: 1;
  }

  /* Pagination */
  .sc-pagi {
    position: absolute;
    bottom: 2.2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    z-index: 10;
    list-style: none;
  }
  .sc-pagi-dot {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.8);
    cursor: pointer;
    position: relative;
    transition: border-color 0.25s;
    background: none;
    padding: 0;
    outline: none;
  }
  .sc-pagi-dot::before {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: #fff;
    transform: scale(0);
    transition: transform 0.28s ease;
  }
  .sc-pagi-dot.active::before,
  .sc-pagi-dot:hover::before { transform: scale(1); }

  /* Arrow controls */
  .sc-ctrl {
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    z-index: 9;
    opacity: 0;
    transition: opacity 0.28s;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }
  .sc-ctrl.left  { left: 0;  background: linear-gradient(to right, rgba(0,0,0,0.22), transparent); }
  .sc-ctrl.right { right: 0; background: linear-gradient(to left,  rgba(0,0,0,0.22), transparent); }
  .sc-ctrl:not(.disabled):hover { opacity: 1; }
  .sc-ctrl.disabled { cursor: default; }

  @media (max-width: 700px) {
    .sc-text { width: 80%; left: 50%; bottom: 0; transform: translate(-50%, 28px); text-align: center; min-width: unset; }
    .sc-slide.is-active .sc-text { transform: translate(-50%, 0); }
    .sc-svg { display: none; }
    .sc-text-desc { display: none; }
  }
</style>
</head>
<body>

<div class="sc" id="sc">
  <div class="sc-track" id="sc-track">

    <div class="sc-slide is-active">
      <div class="sc-bg" data-index="0"></div>
      <svg class="sc-svg" viewBox="0 0 720 810" preserveAspectRatio="xMaxYMax slice">
        <path d="M0,0 180,0 560,810 0,810"/>
      </svg>
      <div class="sc-text">
        <h2 class="sc-text-heading">${slide1Heading}</h2>
        <p class="sc-text-desc">${slide1Desc}</p>
        <a class="sc-text-link" href="${slide1LinkUrl}">${slide1LinkText}</a>
      </div>
    </div>

    <div class="sc-slide">
      <div class="sc-bg" data-index="1"></div>
      <svg class="sc-svg" viewBox="0 0 720 810" preserveAspectRatio="xMaxYMax slice">
        <path d="M0,0 180,0 560,810 0,810"/>
      </svg>
      <div class="sc-text">
        <h2 class="sc-text-heading">${slide2Heading}</h2>
        <p class="sc-text-desc">${slide2Desc}</p>
        <a class="sc-text-link" href="${slide2LinkUrl}">${slide2LinkText}</a>
      </div>
    </div>

    <div class="sc-slide">
      <div class="sc-bg" data-index="2"></div>
      <svg class="sc-svg" viewBox="0 0 720 810" preserveAspectRatio="xMaxYMax slice">
        <path d="M0,0 180,0 560,810 0,810"/>
      </svg>
      <div class="sc-text">
        <h2 class="sc-text-heading">${slide3Heading}</h2>
        <p class="sc-text-desc">${slide3Desc}</p>
        <a class="sc-text-link" href="${slide3LinkUrl}">${slide3LinkText}</a>
      </div>
    </div>

    <div class="sc-slide">
      <div class="sc-bg" data-index="3"></div>
      <svg class="sc-svg" viewBox="0 0 720 810" preserveAspectRatio="xMaxYMax slice">
        <path d="M0,0 180,0 560,810 0,810"/>
      </svg>
      <div class="sc-text">
        <h2 class="sc-text-heading">${slide4Heading}</h2>
        <p class="sc-text-desc">${slide4Desc}</p>
        <a class="sc-text-link" href="${slide4LinkUrl}">${slide4LinkText}</a>
      </div>
    </div>

  </div>

  <button class="sc-ctrl left disabled" id="sc-left"  aria-label="Previous slide"></button>
  <button class="sc-ctrl right"         id="sc-right" aria-label="Next slide"></button>

  <ul class="sc-pagi" id="sc-pagi" role="list"></ul>
</div>

<script>
(function () {
  var track    = document.getElementById("sc-track");
  var slides   = Array.from(track.querySelectorAll(".sc-slide"));
  var pagiEl   = document.getElementById("sc-pagi");
  var btnLeft  = document.getElementById("sc-left");
  var btnRight = document.getElementById("sc-right");
  var total    = slides.length;
  var cur      = 0;
  var animating = false;
  var animDur   = 700;
  var autoDelay = 5500;
  var autoTimer;
  var dragStartX = 0;
  var dragging   = false;
  var dots       = [];

  /* Build pagination */
  for (var i = 0; i < total; i++) {
    var li  = document.createElement("li");
    var btn = document.createElement("button");
    btn.className = "sc-pagi-dot" + (i === 0 ? " active" : "");
    btn.setAttribute("aria-label", "Go to slide " + (i + 1));
    (function(idx){ btn.addEventListener("click", function(){ goTo(idx); }); })(i);
    li.appendChild(btn);
    pagiEl.appendChild(li);
    dots.push(btn);
  }

  /* Parallax on bg elements */
  function updateParallax(index) {
    slides.forEach(function(slide, i) {
      var bg = slide.querySelector(".sc-bg");
      var offset = (i - index) * 30;
      bg.style.transform = "translateX(" + offset + "%)";
    });
  }

  function updateControls() {
    btnLeft.classList.toggle("disabled",  cur === 0);
    btnRight.classList.toggle("disabled", cur === total - 1);
  }

  function goTo(index, instant) {
    if (animating && !instant) return;
    if (index === cur && !instant) return;
    animating = true;
    clearTimeout(autoTimer);

    slides[cur].classList.remove("is-active");
    dots[cur].classList.remove("active");
    cur = ((index % total) + total) % total;
    slides[cur].classList.add("is-active");
    dots[cur].classList.add("active");

    if (!instant) {
      track.style.transition = "transform " + animDur + "ms cubic-bezier(0.77,0,0.175,1)";
    } else {
      track.style.transition = "none";
    }
    track.style.transform = "translateX(" + (-cur * 100) + "%)";
    updateParallax(cur);
    updateControls();

    setTimeout(function() { animating = false; }, animDur);
    autoTimer = setTimeout(function() { goTo(cur + 1 < total ? cur + 1 : 0); }, autoDelay);
  }

  /* Arrow clicks */
  btnLeft.addEventListener("click",  function() { if (cur > 0)        goTo(cur - 1); });
  btnRight.addEventListener("click", function() { if (cur < total - 1) goTo(cur + 1); });

  /* Drag / swipe */
  var container = document.getElementById("sc");
  container.addEventListener("mousedown", function(e) {
    if (animating) return;
    dragStartX = e.clientX;
    dragging = true;
    document.body.classList.add("dragging");
    clearTimeout(autoTimer);
  });
  document.addEventListener("mouseup", function(e) {
    if (!dragging) return;
    dragging = false;
    document.body.classList.remove("dragging");
    var diff = dragStartX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && cur < total - 1) goTo(cur + 1);
      else if (diff < 0 && cur > 0)    goTo(cur - 1);
      else goTo(cur);
    } else {
      goTo(cur);
    }
  });
  container.addEventListener("touchstart", function(e) {
    dragStartX = e.touches[0].clientX;
    clearTimeout(autoTimer);
  }, { passive: true });
  container.addEventListener("touchend", function(e) {
    var diff = dragStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && cur < total - 1) goTo(cur + 1);
      else if (diff < 0 && cur > 0)    goTo(cur - 1);
      else goTo(cur);
    } else {
      goTo(cur);
    }
  }, { passive: true });

  /* Init */
  track.style.transition = "none";
  track.style.transform  = "translateX(0)";
  updateParallax(0);
  updateControls();
  autoTimer = setTimeout(function() { goTo(1); }, autoDelay);
})();
<\/script>
</body>
</html>`;
}

export default function SliderV1({ config }) {
  return null;
}