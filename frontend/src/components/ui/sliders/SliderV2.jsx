export function getSliderV2Code(config = {}) {
  const bgColor = config.bgColor || "#0f0f0f";
  const accentColor = config.accentColor || "#e94560";
  const textColor = config.textColor || "#ffffff";
  const metaColor = config.metaColor || "#888888";
  const logoUrl = config.logoUrl || "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/WWF_Logo.svg/200px-WWF_Logo.svg.png";
  const logoAlt = config.logoAlt || "Logo";
  const donateText = config.donateText || "Donate";
  const donateUrl = config.donateUrl || "#";
  const nav1Text = config.nav1Text || "Species";
  const nav1Url = config.nav1Url || "#";
  const nav2Text = config.nav2Text || "About Us";
  const nav2Url = config.nav2Url || "#";
  const nav3Text = config.nav3Text || "Our Work";
  const nav3Url = config.nav3Url || "#";
  const nav4Text = config.nav4Text || "Get Involved";
  const nav4Url = config.nav4Url || "#";
  const metaLabel1 = config.metaLabel1 || "Species";
  const metaLabel2 = config.metaLabel2 || "Status";

  const slide0Image = config.slide0Image || "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1400&q=80";
  const slide0Title = config.slide0Title || "Amur Leopard";
  const slide0Status = config.slide0Status || "Critically Endangered";

  const slide1Image = config.slide1Image || "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1400&q=80";
  const slide1Title = config.slide1Title || "Asiatic Lion";
  const slide1Status = config.slide1Status || "Endangered";

  const slide2Image = config.slide2Image || "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?w=1400&q=80";
  const slide2Title = config.slide2Title || "Siberian Tiger";
  const slide2Status = config.slide2Status || "Endangered";

  const slide3Image = config.slide3Image || "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1400&q=80";
  const slide3Title = config.slide3Title || "Brown Bear";
  const slide3Status = config.slide3Status || "Least Concern";

  return `<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  /* HEADER */

  /* SLIDER */
  .sw { position: relative; width: 100%; height: 100vh; overflow: hidden; background: ${bgColor}; font-family: inherit; }

  /* Slide */
  .sw-slide {
    position: absolute; inset: 0;
    opacity: 0;
    transition: opacity 1s ease;
    pointer-events: none;
  }
  .sw-slide.active { opacity: 1; pointer-events: auto; }

  .sw-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    transform: scale(1.07);
    transition: transform 7s ease;
  }
  .sw-slide.active .sw-bg { transform: scale(1); }

  .sw-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(100deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%);
  }

  /* Content */
  .sw-content {
    position: absolute; inset: 0;
    display: flex; align-items: center; z-index: 5;
  }
  .sw-content-inner {
    max-width: 1060px; width: 100%; margin: 0 auto;
    padding: 0 70px 0 24px;
  }
  .sw-meta {
    display: inline-block;
    font-size: 10px; letter-spacing: 5px;
    color: ${metaColor}; text-transform: uppercase;
    position: relative; margin-bottom: 14px;
  }
  .sw-meta::after {
    content: ''; position: absolute;
    top: 50%; right: -52px; transform: translateY(-50%);
    width: 40px; height: 1px; background: rgba(255,255,255,0.2);
  }
  .sw-title {
    color: ${textColor};
    font-size: clamp(2.4rem, 7vw, 7rem);
    font-weight: 700;
    line-height: 1.0;
    margin: 6px 0 36px;
    letter-spacing: -1px;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s 0.25s ease, transform 0.65s 0.25s ease;
  }
  .sw-slide.active .sw-title { opacity: 1; transform: translateY(0); }

  .sw-status-label {
    display: inline-block;
    font-size: 10px; letter-spacing: 5px;
    color: ${metaColor}; text-transform: uppercase;
    position: relative; margin-bottom: 10px;
  }
  .sw-status-label::after {
    content: ''; position: absolute;
    top: 50%; right: -52px; transform: translateY(-50%);
    width: 40px; height: 1px; background: rgba(255,255,255,0.2);
  }
  .sw-status {
    color: ${textColor};
    font-size: clamp(1.1rem, 2.4vw, 2rem);
    font-weight: 400;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.65s 0.45s ease, transform 0.65s 0.45s ease;
  }
  .sw-slide.active .sw-status { opacity: 1; transform: translateY(0); }

  /* Pagination */
  .sw-pagi {
    position: absolute; right: 26px; top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: flex; flex-direction: column; gap: 22px;
  }
  .sw-dot {
    width: 13px; height: 13px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    border: 2px solid rgba(255,255,255,0.45);
    cursor: pointer; padding: 0; outline: none;
    position: relative;
    transition: background 0.3s, border-color 0.3s;
  }
  .sw-dot::before {
    content: ''; position: absolute;
    inset: -7px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.18);
    transform: scale(0);
    transition: transform 0.35s ease;
  }
  .sw-dot.active { background: white; border-color: white; }
  .sw-dot.active::before { transform: scale(1); }
  .sw-dot:hover { background: rgba(255,255,255,0.6); }

  /* Progress bar */
  .sw-progress {
    position: absolute; bottom: 0; left: 0;
    height: 3px; width: 0%;
    background: ${accentColor}; z-index: 10;
  }

  @media (max-width: 600px) {
    .sw-content-inner { padding: 0 60px 0 20px; }
  }
</style>

<div class="sw" id="sw">

  <!-- Slides -->
  <div class="sw-slide active">
    <div class="sw-bg" style="background-image:url('${slide0Image}')"></div>
    <div class="sw-overlay"></div>
    <div class="sw-content"><div class="sw-content-inner">
      <div class="sw-meta">${metaLabel1}</div>
      <h2 class="sw-title">${slide0Title}</h2>
      <div class="sw-status-label">${metaLabel2}</div>
      <div class="sw-status">${slide0Status}</div>
    </div></div>
  </div>

  <div class="sw-slide">
    <div class="sw-bg" style="background-image:url('${slide1Image}')"></div>
    <div class="sw-overlay"></div>
    <div class="sw-content"><div class="sw-content-inner">
      <div class="sw-meta">${metaLabel1}</div>
      <h2 class="sw-title">${slide1Title}</h2>
      <div class="sw-status-label">${metaLabel2}</div>
      <div class="sw-status">${slide1Status}</div>
    </div></div>
  </div>

  <div class="sw-slide">
    <div class="sw-bg" style="background-image:url('${slide2Image}')"></div>
    <div class="sw-overlay"></div>
    <div class="sw-content"><div class="sw-content-inner">
      <div class="sw-meta">${metaLabel1}</div>
      <h2 class="sw-title">${slide2Title}</h2>
      <div class="sw-status-label">${metaLabel2}</div>
      <div class="sw-status">${slide2Status}</div>
    </div></div>
  </div>

  <div class="sw-slide">
    <div class="sw-bg" style="background-image:url('${slide3Image}')"></div>
    <div class="sw-overlay"></div>
    <div class="sw-content"><div class="sw-content-inner">
      <div class="sw-meta">${metaLabel1}</div>
      <h2 class="sw-title">${slide3Title}</h2>
      <div class="sw-status-label">${metaLabel2}</div>
      <div class="sw-status">${slide3Status}</div>
    </div></div>
  </div>

  <!-- Pagination dots -->
  <div class="sw-pagi" id="sw-pagi">
    <button class="sw-dot active" data-slide="0" aria-label="Slide 1"></button>
    <button class="sw-dot"        data-slide="1" aria-label="Slide 2"></button>
    <button class="sw-dot"        data-slide="2" aria-label="Slide 3"></button>
    <button class="sw-dot"        data-slide="3" aria-label="Slide 4"></button>
  </div>

  <!-- Progress bar -->
  <div class="sw-progress" id="sw-progress"></div>

</div>

<script>
(function () {
  var slides    = Array.from(document.querySelectorAll(".sw-slide"));
  var dots      = Array.from(document.querySelectorAll(".sw-dot"));
  var progress  = document.getElementById("sw-progress");
  var cur       = 0;
  var total     = slides.length;
  var delay     = 5500;
  var autoTimer, progTimer;

  function goTo(index) {
    slides[cur].classList.remove("active");
    dots[cur].classList.remove("active");
    cur = ((index % total) + total) % total;
    slides[cur].classList.add("active");
    dots[cur].classList.add("active");
    startProgress();
  }

  function startProgress() {
    clearTimeout(autoTimer);
    progress.style.transition = "none";
    progress.style.width = "0%";
    void progress.offsetWidth;
    progress.style.transition = "width " + delay + "ms linear";
    progress.style.width = "100%";
    autoTimer = setTimeout(function () {
      goTo(cur + 1 < total ? cur + 1 : 0);
    }, delay);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goTo(parseInt(this.getAttribute("data-slide"), 10));
    });
  });

  startProgress();
})();
</script>`;
}

export default function SliderV2({ config }) {
  return null;
}
