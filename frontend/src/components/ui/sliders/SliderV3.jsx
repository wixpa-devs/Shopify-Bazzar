export function getSliderV3Code(config = {}) {
  const pageBgLeft      = config.pageBgLeft      || "#2a1f30";
  const pageBgRight     = config.pageBgRight     || "#383d44";

  const slide1LeftImage   = config.slide1LeftImage   || "https://zoric.studio/codepen/swiper-1.jpg";
  const slide1RightImage  = config.slide1RightImage  || "https://zoric.studio/codepen/swiper-2.jpg";
  const slide1Title       = config.slide1Title       || "A";
  const slide1Emphasis    = config.slide1Emphasis    || "Breath";
  const slide1Subtitle    = config.slide1Subtitle    || "Of Fresh Air.";
  const slide1Chapter     = config.slide1Chapter     || "Chapter I, page XV";
  const slide1Paragraph   = config.slide1Paragraph   || "A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay hands on.";

  const slide2LeftImage   = config.slide2LeftImage   || "https://zoric.studio/codepen/swiper-3.jpg";
  const slide2RightImage  = config.slide2RightImage  || "https://zoric.studio/codepen/swiper-4.jpg";
  const slide2Title       = config.slide2Title       || "The";
  const slide2Emphasis    = config.slide2Emphasis    || "Drop";
  const slide2Subtitle    = config.slide2Subtitle    || "Of Eternal Life.";
  const slide2Chapter     = config.slide2Chapter     || "Chapter II, page VII";
  const slide2Paragraph   = config.slide2Paragraph   || "A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.";

  const slide3LeftImage   = config.slide3LeftImage   || "https://zoric.studio/codepen/swiper-5.jpg";
  const slide3RightImage  = config.slide3RightImage  || "https://zoric.studio/codepen/swiper-6.jpg";
  const slide3Title       = config.slide3Title       || "A";
  const slide3Emphasis    = config.slide3Emphasis    || "Sense";
  const slide3Subtitle    = config.slide3Subtitle    || "Of Things to Come.";
  const slide3Chapter     = config.slide3Chapter     || "Chapter III, page XI";
  const slide3Paragraph   = config.slide3Paragraph   || "Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours' faults, the one behind his own.";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600;1,700&family=Cormorant+SC:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; }
  body { background-color: #fff; font-family: 'Cormorant Garamond', serif; }

  .page-wrap {
    width: 100%; height: 100vh;
    display: flex; justify-content: center; align-items: center;
    background: linear-gradient(to right bottom, ${pageBgLeft} 50%, ${pageBgRight} 50%);
  }

  #home-slider { height: 80vh; width: 90vw; position: relative; }

  .swiper {
    height: 100%; width: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
  }

  .swiper-slide {
    display: flex; width: 100%; height: 100%;
    background: #fff; overflow: hidden;
  }

  .swiper-image { width: 50%; height: 100%; flex-shrink: 0; }

  .swiper-image-inner {
    width: 100%; height: 100%;
    background-size: cover; background-position: center;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
  }

  .swiper-image-inner.swiper-image-left {
    padding: 4rem;
    background-color: hsla(0,0%,0%,.2);
    background-blend-mode: overlay;
  }

  .swiper-image-left {
    filter: sepia(100%);
    transition: filter 1s linear 1s;
  }
  .swiper-slide-active .swiper-image-left { filter: sepia(0%); }

  .swiper-image-inner.swiper-image-right {
    filter: hue-rotate(-60deg);
    background-color: hsla(0,0%,0%,.5);
    background-blend-mode: multiply;
    transition: filter 1s linear 1s;
    justify-content: center; align-items: center;
    padding: 3rem;
  }
  .swiper-slide-active .swiper-image-inner.swiper-image-right { filter: hue-rotate(90deg); }

  .swiper-image-one   { background-image: url('${slide1LeftImage}');  }
  .swiper-image-two   { background-image: url('${slide1RightImage}'); }
  .swiper-image-three { background-image: url('${slide2LeftImage}');  }
  .swiper-image-four  { background-image: url('${slide2RightImage}'); }
  .swiper-image-five  { background-image: url('${slide3LeftImage}');  }
  .swiper-image-six   { background-image: url('${slide3RightImage}'); }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500; color: #fff;
    align-self: flex-start; margin: 0 0 auto 0;
    font-size: clamp(2.4rem, 4.5vw, 4.5rem);
    line-height: 1; opacity: 0;
    transform: translate3d(-20%, 0, 0);
    transition: opacity .8s cubic-bezier(.215,.61,.355,1) 1.1s,
                transform .8s cubic-bezier(.215,.61,.355,1) 1.1s;
  }
  h1 span.emphasis {
    font-weight: 700; font-style: italic; opacity: 0;
    transform: translate3d(-20%, 0, 0); display: inline-block;
    transition: opacity .8s cubic-bezier(.215,.61,.355,1) 1.2s,
                transform .8s cubic-bezier(.215,.61,.355,1) 1.2s;
  }
  h1 span:not(.emphasis) { font-size: clamp(1.8rem, 3.5vw, 3.5rem); }

  h1 + p {
    font-family: 'Cormorant SC', serif;
    font-size: clamp(11px, 1.4vw, 14px);
    letter-spacing: 2px; margin: 0; line-height: 1;
    margin-bottom: auto; align-self: flex-end;
    text-transform: uppercase; opacity: 0;
    transform: translate3d(-20%, 0, 0);
    transition: opacity .8s cubic-bezier(.215,.61,.355,1) 1.3s,
                transform .8s cubic-bezier(.215,.61,.355,1) 1.3s;
    font-weight: 500; color: #fff;
    padding-right: clamp(2rem, 8vw, 8rem);
  }

  p.paragraph {
    font-family: 'Cormorant Garamond', serif;
    color: #fff; width: 100%; max-width: 350px;
    text-align: justify;
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    font-weight: 500; line-height: 1.6; opacity: 0;
    transform: translate3d(-20%, 0, 0);
    transition: opacity .6s cubic-bezier(.215,.61,.355,1) 1.4s,
                transform .6s cubic-bezier(.215,.61,.355,1) 1.4s;
  }

  .swiper-slide-active h1,
  .swiper-slide-active h1 span.emphasis,
  .swiper-slide-active h1 + p,
  .swiper-slide-active p.paragraph {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  .swiper-pagination {
    right: 20px !important; left: auto !important;
    width: auto !important; bottom: 50% !important;
    transform: translateY(50%);
    display: flex; flex-direction: column;
    gap: 10px; align-items: center;
  }
  .swiper-pagination-bullet {
    width: 10px; height: 10px;
    background: #fff; opacity: .4; border-radius: 50%;
    transition: opacity .3s, transform .3s;
    cursor: pointer; margin: 0 !important;
  }
  .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.3); }

  @media (max-width: 768px) {
    #home-slider { height: 88vh; width: 96vw; }
    .swiper-slide { flex-direction: column; }
    .swiper-image { width: 100%; height: 50%; }
    .swiper-image-inner.swiper-image-left { padding: 2rem; }
    .swiper-image-inner.swiper-image-right { padding: 2rem; }
    h1 { font-size: clamp(2rem, 7vw, 3rem); align-self: center; text-align: center; }
    h1 span:not(.emphasis) { font-size: clamp(1.5rem, 5vw, 2.2rem); }
    h1 + p { padding-right: 0; align-self: center; margin-top: 1rem; }
    p.paragraph { max-width: 94%; font-size: 1rem; }
    .swiper-pagination {
      right: auto !important; bottom: 10px !important;
      left: 0 !important; width: 100% !important;
      transform: none; flex-direction: row; justify-content: center;
    }
  }
  @media (max-width: 480px) {
    #home-slider { height: 92vh; width: 100vw; }
    .swiper { box-shadow: none; }
    h1 { font-size: clamp(1.7rem, 8vw, 2.5rem); }
    h1 span:not(.emphasis) { font-size: clamp(1.3rem, 6vw, 1.9rem); }
    p.paragraph { font-size: .95rem; }
  }
</style>
</head>
<body>

<div class="page-wrap">
  <div id="home-slider">
    <div class="swiper">
      <div class="swiper-wrapper">

        <!-- Slide 1 -->
        <div class="swiper-slide">
          <div class="swiper-image" data-swiper-parallax-y="-20%">
            <div class="swiper-image-inner swiper-image-left swiper-image-one">
              <h1>${slide1Title} <span class="emphasis">${slide1Emphasis}</span>.<br><span>${slide1Subtitle}</span></h1>
              <p>${slide1Chapter}</p>
            </div>
          </div>
          <div class="swiper-image" data-swiper-parallax-y="35%">
            <div class="swiper-image-inner swiper-image-right swiper-image-two">
              <p class="paragraph">${slide1Paragraph}</p>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="swiper-slide">
          <div class="swiper-image" data-swiper-parallax-y="-20%">
            <div class="swiper-image-inner swiper-image-left swiper-image-three">
              <h1>${slide2Title} <span class="emphasis">${slide2Emphasis}</span>.<br><span>${slide2Subtitle}</span></h1>
              <p>${slide2Chapter}</p>
            </div>
          </div>
          <div class="swiper-image" data-swiper-parallax-y="35%">
            <div class="swiper-image-inner swiper-image-right swiper-image-four">
              <p class="paragraph">${slide2Paragraph}</p>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="swiper-slide">
          <div class="swiper-image" data-swiper-parallax-y="-20%">
            <div class="swiper-image-inner swiper-image-left swiper-image-five">
              <h1>${slide3Title} <span class="emphasis">${slide3Emphasis}</span>.<br><span>${slide3Subtitle}</span></h1>
              <p>${slide3Chapter}</p>
            </div>
          </div>
          <div class="swiper-image" data-swiper-parallax-y="35%">
            <div class="swiper-image-inner swiper-image-right swiper-image-six">
              <p class="paragraph">${slide3Paragraph}</p>
            </div>
          </div>
        </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"><\/script>
<script>
  new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    grabCursor: true,
    speed: 1000,
    parallax: true,
    mousewheel: true,
    keyboard: { enabled: true },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
<\/script>
</body>
</html>`;
}

export default function SliderV3({ config }) {
  return null;
}