export function getProductCardSliderV4Code(config = {}) {
  const accentColor = config.accentColor || "#e34c26";
  const accentRgb = config.accentRgb || "227, 76, 38";
  const navLineColor = config.navLineColor || "#000";
  const navTextColor = config.navTextColor || "#000";

  // Slide 0
  const s0Collection = config.s0Collection || "Men's Original";
  const s0Title = config.s0Title || "Nike Air Force";
  const s0Price = config.s0Price || "$150.00";
  const s0Img = config.s0Img || "https://codocular.com/lab/swiper-carousel/nike1.85b9a747.png";
  // Slide 1
  const s1Collection = config.s1Collection || "Jordans";
  const s1Title = config.s1Title || "Nike Air Jordan";
  const s1Price = config.s1Price || "$249.99";
  const s1Img = config.s1Img || "https://codocular.com/lab/swiper-carousel/nike2.3412fa36.png";
  // Slide 2
  const s2Collection = config.s2Collection || "Purple Rain";
  const s2Title = config.s2Title || "Nike Air Max";
  const s2Price = config.s2Price || "$150.00";
  const s2Img = config.s2Img || "https://codocular.com/lab/swiper-carousel/nike3.14907490.png";
  // Slide 3
  const s3Collection = config.s3Collection || "Men's Original";
  const s3Title = config.s3Title || "Nike Air Force";
  const s3Price = config.s3Price || "$150.00";
  const s3Img = config.s3Img || "https://codocular.com/lab/swiper-carousel/nike4.62fca82d.png";

  // Card background gradients (top color → bottom color)
  const card0GradTop = config.card0GradTop || "rgba(253,243,234,1)";
  const card0GradBot = config.card0GradBot || "rgba(251,229,204,1)";
  const card1GradTop = config.card1GradTop || "rgba(247,253,252,1)";
  const card1GradBot = config.card1GradBot || "rgba(195,227,221,1)";
  const card2GradTop = config.card2GradTop || "rgba(252,244,244,1)";
  const card2GradBot = config.card2GradBot || "rgba(246,200,203,1)";
  const card3GradTop = config.card3GradTop || "rgba(249,242,251,1)";
  const card3GradBot = config.card3GradBot || "rgba(234,199,245,1)";

  return `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />

<style>
  :root {
    --pcsv4-accent-hex: ${accentColor};
    --pcsv4-accent-rgb: ${accentRgb};
    --pcsv4-nav-line: ${navLineColor};
    --pcsv4-nav-text: ${navTextColor};
  }

  *, *::before, *::after { box-sizing: border-box; }

  .pcsv4-wrap {
    position: relative;
    z-index: 9;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 560px;
    padding: 40px 0 20px;
    font-family: "Montserrat", arial, sans-serif;
    background: #fff;
  }

  /* ── Swiper ── */
  .pcsv4-swiper {
    margin: 0 auto;
    width: 50%;
    height: 400px;
    overflow: visible;
  }
  @media (max-width: 900px) {
    .pcsv4-swiper { width: 70%; }
  }
  @media (max-width: 600px) {
    .pcsv4-swiper { width: 85%; }
  }

  .pcsv4-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Nav buttons ── */
  .pcsv4-nav-buttons {
    margin-top: 40px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .pcsv4-nav-button {
    padding: 10px 0;
    width: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: var(--pcsv4-nav-text);
  }
  .pcsv4-nav-button.prev { align-items: flex-end; }
  .pcsv4-nav-button.next { align-items: flex-start; }
  .pcsv4-nav-button.swiper-button-disabled { opacity: 0.3; }
  .pcsv4-nav-button:hover:not(.swiper-button-disabled).prev span {
    transform: translate3d(-10px, 0, 0);
  }
  .pcsv4-nav-button:hover:not(.swiper-button-disabled).next span {
    transform: translate3d(10px, 0, 0);
  }
  .pcsv4-nav-button::before {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--pcsv4-nav-line);
  }
  .pcsv4-nav-button span {
    font-size: 14px;
    text-transform: uppercase;
    padding: 10px 0;
    transition: cubic-bezier(0.22, 0.74, 0.46, 0.97) 0.3s;
    font-family: "Montserrat", arial, sans-serif;
    font-weight: 600;
  }
  @media (max-width: 600px) {
    .pcsv4-nav-button { width: 100px; }
    .pcsv4-nav-button span { font-size: 12px; }
  }

  /* ── Card ── */
  .pcsv4-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 250px;
    border-radius: 20px;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    background: linear-gradient(163deg, ${card0GradTop} 0%, ${card0GradBot} 100%);
  }
  .pcsv4-card--style-1 {
    background: linear-gradient(163deg, ${card1GradTop} 0%, ${card1GradBot} 100%);
  }
  .pcsv4-card--style-2 {
    background: linear-gradient(163deg, ${card2GradTop} 0%, ${card2GradBot} 100%);
  }
  .pcsv4-card--style-3 {
    background: linear-gradient(163deg, ${card3GradTop} 0%, ${card3GradBot} 100%);
  }

  /* ── Card shoe ── */
  .pcsv4-card__shoe {
    position: relative;
    width: 130%;
    flex-shrink: 0;
    top: -20px;
  }
  .pcsv4-card__shoe-img {
    user-select: none;
    position: relative;
    width: 100%;
    display: block;
    z-index: 9;
  }
  .pcsv4-card__shoe-shadow {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    opacity: 0.3;
    background-color: rgba(0,0,0,1);
    box-shadow: 0 0 30px 40px rgba(0,0,0,1);
  }

  /* ── Card info ── */
  .pcsv4-card__info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    display: table;
  }
  .pcsv4-card__title {
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-family: "Montserrat", arial, sans-serif;
  }
  .pcsv4-card__collection {
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    opacity: 0.3;
    font-family: "Montserrat", arial, sans-serif;
  }
  .pcsv4-card__price {
    margin-top: 10px;
    font-weight: 500;
    font-size: 1.3rem;
    font-family: "Montserrat", arial, sans-serif;
  }

  /* ── Text mask animation ── */
  .pcsv4-text-mask {
    overflow: hidden;
  }
  .pcsv4-text-mask span {
    display: inline-flex;
  }

  /* ── Background overlays ── */
  .pcsv4-bg {
    top: 0; left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }
  .pcsv4-bg--style-0 {
    background: linear-gradient(163deg, ${card0GradTop} 0%, ${card0GradBot} 100%);
  }
  .pcsv4-bg--style-1 {
    background: linear-gradient(163deg, ${card1GradTop} 0%, ${card1GradBot} 100%);
  }
  .pcsv4-bg--style-2 {
    background: linear-gradient(163deg, ${card2GradTop} 0%, ${card2GradBot} 100%);
  }
  .pcsv4-bg--style-3 {
    background: linear-gradient(163deg, ${card3GradTop} 0%, ${card3GradBot} 100%);
  }
</style>

<div class="pcsv4-wrap" id="pcsv4Wrap">
  <!-- Background overlays -->
  <div class="pcsv4-bg pcsv4-bg--style-0" id="pcsv4Bg0"></div>
  <div class="pcsv4-bg pcsv4-bg--style-1" id="pcsv4Bg1"></div>
  <div class="pcsv4-bg pcsv4-bg--style-2" id="pcsv4Bg2"></div>
  <div class="pcsv4-bg pcsv4-bg--style-3" id="pcsv4Bg3"></div>

  <div class="swiper pcsv4-swiper" id="pcsv4Swiper">
    <div class="swiper-wrapper">

      <!-- Slide 0 -->
      <div class="swiper-slide pcsv4-slide">
        <div class="pcsv4-card">
          <div class="pcsv4-card__shoe">
            <img class="pcsv4-card__shoe-img" src="${s0Img}" alt="${s0Title}" />
            <span class="pcsv4-card__shoe-shadow"></span>
          </div>
          <div class="pcsv4-card__info">
            <div class="pcsv4-card__collection pcsv4-text-mask"><span>${s0Collection}</span></div>
            <div class="pcsv4-card__title pcsv4-text-mask"><span>${s0Title}</span></div>
            <div class="pcsv4-card__price pcsv4-text-mask"><span>${s0Price}</span></div>
          </div>
        </div>
      </div>

      <!-- Slide 1 -->
      <div class="swiper-slide pcsv4-slide">
        <div class="pcsv4-card pcsv4-card--style-1">
          <div class="pcsv4-card__shoe">
            <img class="pcsv4-card__shoe-img" src="${s1Img}" alt="${s1Title}" />
            <span class="pcsv4-card__shoe-shadow"></span>
          </div>
          <div class="pcsv4-card__info">
            <div class="pcsv4-card__collection pcsv4-text-mask"><span>${s1Collection}</span></div>
            <div class="pcsv4-card__title pcsv4-text-mask"><span>${s1Title}</span></div>
            <div class="pcsv4-card__price pcsv4-text-mask"><span>${s1Price}</span></div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="swiper-slide pcsv4-slide">
        <div class="pcsv4-card pcsv4-card--style-2">
          <div class="pcsv4-card__shoe">
            <img class="pcsv4-card__shoe-img" src="${s2Img}" alt="${s2Title}" />
            <span class="pcsv4-card__shoe-shadow"></span>
          </div>
          <div class="pcsv4-card__info">
            <div class="pcsv4-card__collection pcsv4-text-mask"><span>${s2Collection}</span></div>
            <div class="pcsv4-card__title pcsv4-text-mask"><span>${s2Title}</span></div>
            <div class="pcsv4-card__price pcsv4-text-mask"><span>${s2Price}</span></div>
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="swiper-slide pcsv4-slide">
        <div class="pcsv4-card pcsv4-card--style-3">
          <div class="pcsv4-card__shoe">
            <img class="pcsv4-card__shoe-img" src="${s3Img}" alt="${s3Title}" />
            <span class="pcsv4-card__shoe-shadow"></span>
          </div>
          <div class="pcsv4-card__info">
            <div class="pcsv4-card__collection pcsv4-text-mask"><span>${s3Collection}</span></div>
            <div class="pcsv4-card__title pcsv4-text-mask"><span>${s3Title}</span></div>
            <div class="pcsv4-card__price pcsv4-text-mask"><span>${s3Price}</span></div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="pcsv4-nav-buttons">
    <div class="pcsv4-nav-button prev" id="pcsv4Prev"><span>Prev</span></div>
    <div class="pcsv4-nav-button next" id="pcsv4Next"><span>Next</span></div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
<script>
  (function () {
    var bgEls = [
      document.getElementById('pcsv4Bg0'),
      document.getElementById('pcsv4Bg1'),
      document.getElementById('pcsv4Bg2'),
      document.getElementById('pcsv4Bg3'),
    ];

    var swiper = new Swiper('#pcsv4Swiper', {
      loop: false,
      watchSlidesProgress: true,
      speed: 1000,
      grabCursor: true,
      navigation: {
        nextEl: '#pcsv4Next',
        prevEl: '#pcsv4Prev',
      },
      on: {
        touchEnd: function (sw) {
          var time = Date.now() - sw.touchEventsData.touchStartTime;
          var distance = Math.abs(sw.touches.diff);
          var velocity = distance / time;
          var newSpeed = 1000 - velocity * 800;
          sw.params.speed = Math.max(200, Math.min(1000, newSpeed));
        },
        progress: function (sw) {
          sw.slides.forEach(function (slide, index) {
            var progress = slide.progress;
            if (progress >= -1 && progress <= 1) {
              var progressPositive = Math.abs(progress);
              var translateX = progress * -100;
              var rotateShoeMax = 15;
              var rotateShoe = progressPositive * rotateShoeMax - rotateShoeMax;
              var scale = 1 - progressPositive * 0.2;
              var opacity = 0.5 - progressPositive * 0.5;
              var textMaskY = progressPositive * 50;

              slide.querySelector('.pcsv4-card').style.transform = 'scale(' + scale + ')';
              slide.querySelector('.pcsv4-card__shoe-img').style.transform =
                'translate3d(' + translateX + 'px, 0, 0) rotate(' + rotateShoe + 'deg)';
              slide.querySelector('.pcsv4-card__shoe-shadow').style.transform =
                'translate3d(' + (translateX / 2) + 'px, 0, 0)';

              if (bgEls[index]) {
                bgEls[index].style.opacity = opacity.toFixed(2);
              }

              var textsMask = slide.querySelectorAll('.pcsv4-text-mask span');
              textsMask.forEach(function (t, i) {
                t.style.transform = 'translate3d(0,' + (textMaskY * (i + 1)) + 'px, 0)';
              });
            }
          });
        },
        setTransition: function (sw, speed) {
          sw.slides.forEach(function (slide, index) {
            slide.querySelector('.pcsv4-card').style.transition = speed + 'ms';
            slide.querySelector('.pcsv4-card__shoe-img').style.transition = speed + 'ms';
            slide.querySelector('.pcsv4-card__shoe-shadow').style.transition = speed + 'ms';
            if (bgEls[index]) {
              bgEls[index].style.transition = speed + 'ms';
            }
            var textsMask = slide.querySelectorAll('.pcsv4-text-mask span');
            textsMask.forEach(function (t) {
              t.style.transition = speed + 'ms';
            });
          });
        },
        transitionEnd: function (sw) {
          sw.params.speed = 1000;
        }
      }
    });
  })();
</script>
  `;
}

export default function ProductCardSliderV4({ config }) {
  return null;
}