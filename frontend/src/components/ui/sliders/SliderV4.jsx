export function getSliderV4Code(config = {}) {
  const slide1Gen = config.slide1Gen || "Pokemon Gen I";
  const slide1Name = config.slide1Name || "Pikachu";
  const slide1Desc =
    config.slide1Desc ||
    "Pikachu is an Electric-type Pokemon introduced in Generation I. Pikachu are small, chubby, and incredibly cute mouse-like Pokemon. They are almost completely covered by yellow fur.";
  const slide1BgText = config.slide1BgText || "Pikachu";
  const slide1ImageUrl =
    config.slide1ImageUrl || "https://picsum.photos/seed/pokemon-slide-1/900/900";
  const slide1ImageAlt = config.slide1ImageAlt || "Pikachu";
  const slide1LeftBg = config.slide1LeftBg || "#f8d41f";
  const slide1RightBg = config.slide1RightBg || "#f4ecc5";

  const slide2Gen = config.slide2Gen || "Pokemon Gen IV";
  const slide2Name = config.slide2Name || "Piplup";
  const slide2Desc =
    config.slide2Desc ||
    "Piplup is the Water-type Starter Pokemon of the Sinnoh region. It was introduced in Generation IV. Piplup has a strong sense of self-esteem. It seldom accepts food that people give because of its pride.";
  const slide2BgText = config.slide2BgText || "Piplup";
  const slide2ImageUrl =
    config.slide2ImageUrl || "https://picsum.photos/seed/pokemon-slide-2/900/900";
  const slide2ImageAlt = config.slide2ImageAlt || "Piplup";
  const slide2LeftBg = config.slide2LeftBg || "#3e9fe6";
  const slide2RightBg = config.slide2RightBg || "#d3eaef";

  const slide3Gen = config.slide3Gen || "Pokemon Gen III";
  const slide3Name = config.slide3Name || "Blaziken";
  const slide3Desc =
    config.slide3Desc ||
    "Blaziken is the Fire/Fighting-type Starter Pokemon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokemon that resembles a rooster.";
  const slide3BgText = config.slide3BgText || "Blaziken";
  const slide3ImageUrl =
    config.slide3ImageUrl || "https://picsum.photos/seed/pokemon-slide-3/900/900";
  const slide3ImageAlt = config.slide3ImageAlt || "Blaziken";
  const slide3LeftBg = config.slide3LeftBg || "#f64f37";
  const slide3RightBg = config.slide3RightBg || "#ffebcd";

  const slide4Gen = config.slide4Gen || "Pokemon Gen IV";
  const slide4Name = config.slide4Name || "Dialga";
  const slide4Desc =
    config.slide4Desc ||
    "Dialga is a Steel/Dragon-type Legendary Pokemon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various light blue lines all over its body.";
  const slide4BgText = config.slide4BgText || "Dialga";
  const slide4ImageUrl =
    config.slide4ImageUrl || "https://picsum.photos/seed/pokemon-slide-4/900/900";
  const slide4ImageAlt = config.slide4ImageAlt || "Dialga";
  const slide4LeftBg = config.slide4LeftBg || "#476089";
  const slide4RightBg = config.slide4RightBg || "#ade8f7";

  const slide5Gen = config.slide5Gen || "Pokemon Gen V";
  const slide5Name = config.slide5Name || "Zekrom";
  const slide5Desc =
    config.slide5Desc ||
    "Zekrom is a Dragon/Electric-type Legendary Pokemon. It has piercing red eyes and dark gray to black skin that seems to be armor-like. It is part of the Tao Trio, along with Reshiram and Kyurem.";
  const slide5BgText = config.slide5BgText || "Zekrom";
  const slide5ImageUrl =
    config.slide5ImageUrl || "https://picsum.photos/seed/pokemon-slide-5/900/900";
  const slide5ImageAlt = config.slide5ImageAlt || "Zekrom";
  const slide5LeftBg = config.slide5LeftBg || "#424242";
  const slide5RightBg = config.slide5RightBg || "#a7bcbb";

  const textNormalColor = config.textNormalColor || "rgba(255, 255, 255, 0.8)";
  const textBackgroundColor = config.textBackgroundColor || "rgba(0, 0, 0, 0.05)";
  const navDotInactive = config.navDotInactive || "rgba(0, 0, 0, 0.2)";
  const navDotActive = config.navDotActive || "rgba(255, 255, 255, 1)";

  return `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

<style>
  *, *::before, *::after {
    box-sizing: border-box;
  }

  .slider__warpper {
    position: relative;
    font-size: 100%;
    font-family: inherit;
    font-weight: 400;
    min-height: 100vh;
    overflow: hidden;
    background-color: #212121; /* Added base background color if needed */
  }

  .slider__navi {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 999;
  }

  .slider__navi a {
    display: block;
    height: 6px;
    width: 20px;
    margin: 20px 0;
    text-indent: -9999px;
    box-shadow: none;
    border: none;
    background: ${navDotInactive};
    cursor: pointer;
    transition: background 0.3s;
  }

  .slider__navi a.active {
    background: ${navDotActive};
  }

  .flex__container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    z-index: 1;
  }

  .flex__container.flex--active {
    z-index: 2;
  }

  .text--sub {
    font-size: 12px;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .text--big {
    font-family: inherit;
    font-size: clamp(3rem, 7.5vw, 7.5em);
    font-weight: 700;
    line-height: 1.1;
    margin-left: -8px;
  }

  .text--normal {
    font-size: 13px;
    color: ${textNormalColor};
    line-height: 22px;
    margin-top: 25px;
  }

  .text__background {
    font-family: inherit;
    position: absolute;
    left: 72px;
    bottom: -60px;
    color: ${textBackgroundColor};
    font-size: clamp(80px, 12vw, 170px);
    font-weight: 700;
    user-select: none;
    pointer-events: none;
  }

  .flex__item {
    height: 100vh;
    color: #fff;
    transition: transform 0.1s linear;
  }

  .flex__item--left {
    display: flex;
    align-items: center;
    width: 65%;
    transform-origin: left bottom;
    transition: transform 0.1s linear 0.4s;
    opacity: 0;
    position: relative;
    overflow: hidden;
  }

  .flex__item--right {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 35%;
    overflow: hidden;
    transform-origin: right center;
    transition: transform 0.1s linear 0s;
    opacity: 0;
  }

  .flex--preStart .flex__item--left,
  .flex--preStart .flex__item--right,
  .flex--active .flex__item--left,
  .flex--active .flex__item--right {
    opacity: 1;
  }

  .flex--pikachu  .flex__item--left  { background: ${slide1LeftBg}; }
  .flex--pikachu  .flex__item--right { background: ${slide1RightBg}; }

  .flex--piplup   .flex__item--left  { background: ${slide2LeftBg}; }
  .flex--piplup   .flex__item--right { background: ${slide2RightBg}; }

  .flex--blaziken .flex__item--left  { background: ${slide3LeftBg}; }
  .flex--blaziken .flex__item--right { background: ${slide3RightBg}; }

  .flex--dialga   .flex__item--left  { background: ${slide4LeftBg}; }
  .flex--dialga   .flex__item--right { background: ${slide4RightBg}; }

  .flex--zekrom   .flex__item--left  { background: ${slide5LeftBg}; }
  .flex--zekrom   .flex__item--right { background: ${slide5RightBg}; }

  .flex__content {
    margin-left: 80px;
    width: 55%;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 0.2s linear 0.2s, opacity 0.1s linear 0.2s;
  }

  .pokemon__img {
    position: relative;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 5;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.43s 0.6s, transform 0.4s 0.65s cubic-bezier(0, 0.88, 0.4, 0.93);
  }

  .flex__container.animate--start .flex__content {
    transform: translate3d(0, -200%, 0);
    opacity: 0;
  }

  .flex__container.animate--start .pokemon__img {
    transform: translate3d(-200px, 0, 0);
    opacity: 0;
  }

  .flex__container.animate--end .flex__item--left  { transform: scaleY(0); }
  .flex__container.animate--end .flex__item--right { transform: scaleX(0); }

  .flex__container.animate--end .flex__content {
    transform: translate3d(0, 200%, 0);
    opacity: 0;
  }

  .flex__container.animate--end .pokemon__img {
    transform: translate3d(200px, 0, 0);
    opacity: 0;
  }

  @media (max-width: 768px) {
    .flex__container { height: 100vh; }
    .flex__item--left  { width: 100%; height: 58vh; align-items: flex-start; padding-top: 40px; }
    .flex__item--right {
      display: flex;
      width: 100%;
      height: 42vh;
      align-items: stretch;
      justify-content: stretch;
      opacity: 1;
      transform-origin: center bottom;
    }
    .flex__content     { margin-left: 30px; width: 70%; }
    .text--big         { font-size: clamp(2.5rem, 10vw, 5rem); line-height: 1; }
    .text__background  { font-size: clamp(60px, 18vw, 100px); left: 20px; }
    .pokemon__img      { right: 0; width: 100%; height: 100%; bottom: 0; }
    .slider__navi      { right: 10px; }
    .slider__navi a    { width: 14px; margin: 14px 0; }
  }

  @media (max-width: 480px) {
    .flex__container { height: 100vh; }
    .flex__item--left { height: 56vh; }
    .flex__item--right { height: 44vh; }
    .flex__content  { margin-left: 20px; width: 80%; }
    .text--big      { font-size: clamp(2rem, 13vw, 3.5rem); }
    .text--sub      { font-size: 10px; margin-bottom: 20px; }
    .text--normal   { font-size: 12px; }
    .pokemon__img   { width: 100%; height: 100%; right: 0; }
  }
</style>

<div class="slider__warpper">
  <div class="flex__container flex--pikachu flex--active" data-slide="1">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">${slide1Gen}</p>
        <h1 class="text--big">${slide1Name}</h1>
        <p class="text--normal">${slide1Desc}</p>
      </div>
      <p class="text__background">${slide1BgText}</p>
    </div>
    <div class="flex__item flex__item--right">
      <img class="pokemon__img" src="${slide1ImageUrl}" alt="${slide1ImageAlt}" />
    </div>
  </div>

  <div class="flex__container flex--piplup animate--start" data-slide="2">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">${slide2Gen}</p>
        <h1 class="text--big">${slide2Name}</h1>
        <p class="text--normal">${slide2Desc}</p>
      </div>
      <p class="text__background">${slide2BgText}</p>
    </div>
    <div class="flex__item flex__item--right">
      <img class="pokemon__img" src="${slide2ImageUrl}" alt="${slide2ImageAlt}" />
    </div>
  </div>

  <div class="flex__container flex--blaziken animate--start" data-slide="3">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">${slide3Gen}</p>
        <h1 class="text--big">${slide3Name}</h1>
        <p class="text--normal">${slide3Desc}</p>
      </div>
      <p class="text__background">${slide3BgText}</p>
    </div>
    <div class="flex__item flex__item--right">
      <img class="pokemon__img" src="${slide3ImageUrl}" alt="${slide3ImageAlt}" />
    </div>
  </div>

  <div class="flex__container flex--dialga animate--start" data-slide="4">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">${slide4Gen}</p>
        <h1 class="text--big">${slide4Name}</h1>
        <p class="text--normal">${slide4Desc}</p>
      </div>
      <p class="text__background">${slide4BgText}</p>
    </div>
    <div class="flex__item flex__item--right">
      <img class="pokemon__img" src="${slide4ImageUrl}" alt="${slide4ImageAlt}" />
    </div>
  </div>

  <div class="flex__container flex--zekrom animate--start" data-slide="5">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">${slide5Gen}</p>
        <h1 class="text--big">${slide5Name}</h1>
        <p class="text--normal">${slide5Desc}</p>
      </div>
      <p class="text__background">${slide5BgText}</p>
    </div>
    <div class="flex__item flex__item--right">
      <img class="pokemon__img" src="${slide5ImageUrl}" alt="${slide5ImageAlt}" />
    </div>
  </div>
</div>

<div class="slider__navi">
  <a href="#" class="slide-nav active" data-slide="1">pikachu</a>
  <a href="#" class="slide-nav" data-slide="2">piplup</a>
  <a href="#" class="slide-nav" data-slide="3">blaziken</a>
  <a href="#" class="slide-nav" data-slide="4">dialga</a>
  <a href="#" class="slide-nav" data-slide="5">zekrom</a>
</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  var isAnimating = false;

  $('.slide-nav').on('click', function(e) {
    e.preventDefault();

    if (isAnimating) return false;

    var current = parseInt($('.flex--active').data('slide'));
    var next = parseInt($(this).data('slide'));

    if (current === next) return false;

    isAnimating = true;

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    $('.slider__warpper')
      .find('.flex__container[data-slide=' + next + ']')
      .addClass('flex--preStart');

    $('.flex--active').addClass('animate--end');

    setTimeout(function() {
      $('.flex--preStart')
        .removeClass('animate--start flex--preStart')
        .addClass('flex--active');

      $('.animate--end')
        .addClass('animate--start')
        .removeClass('animate--end flex--active');

      isAnimating = false;
    }, 800);
  });

  $(document).on('keydown', function(e) {
    var current = parseInt($('.flex--active').data('slide'));
    var total = $('.flex__container').length;
    var next = null;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      next = current < total ? current + 1 : 1;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      next = current > 1 ? current - 1 : total;
    }

    if (next !== null) {
      $('.slide-nav[data-slide=' + next + ']').trigger('click');
    }
  });

  var wheelTimer;
  $(document).on('wheel', function(e) {
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(function() {
      var current = parseInt($('.flex--active').data('slide'));
      var total = $('.flex__container').length;
      var next;

      if (e.originalEvent.deltaY > 0) {
        next = current < total ? current + 1 : 1;
      } else {
        next = current > 1 ? current - 1 : total;
      }

      $('.slide-nav[data-slide=' + next + ']').trigger('click');
    }, 50);
  });
</script>
  `;
}

export default function SliderV4() {
  return null;
}
