export function getCollectionSliderV1Code(config = {}) {
  const leftBg = config.leftBg || "#d5e7f8";
  const taglineColor = config.taglineColor || "#666666";
  const headingColor = config.headingColor || "#1a1a1a";
  const bodyColor = config.bodyColor || "#666666";
  const btnBg = config.btnBg || "#000000";
  const btnColor = config.btnColor || "#ffffff";
  const bulletActiveBg = config.bulletActiveBg || "#000000";
  const bulletInactiveBg = config.bulletInactiveBg || "#dddddd";
  const sliderHeight = config.sliderHeight || "500px";

  const slide1Tagline = config.slide1Tagline || "Eid Collection '26";
  const slide1Heading = config.slide1Heading || "Shop By Occasion";
  const slide1Body = config.slide1Body || "Celebrate Eid in effortless elegance. Timeless designs made for moments that matter.";
  const slide1BtnText = config.slide1BtnText || "Shop The Look";
  const slide1BtnUrl = config.slide1BtnUrl || "#";
  const slide1ImageUrl = config.slide1CollectionUrl || config.slide1ImageUrl || "https://picsum.photos/seed/sale-1/950/500";
  const slide1ImageAlt = config.slide1ImageAlt || "Slide 1";

  const slide2Tagline = config.slide2Tagline || "Eid Collection '26";
  const slide2Heading = config.slide2Heading || "Shop By Occasion";
  const slide2Body = config.slide2Body || "Celebrate Eid in effortless elegance. Timeless designs made for moments that matter.";
  const slide2BtnText = config.slide2BtnText || "Shop The Look";
  const slide2BtnUrl = config.slide2BtnUrl || "#";
  const slide2ImageUrl = config.slide2CollectionUrl || config.slide2ImageUrl || "https://picsum.photos/seed/sale-2/950/500";
  const slide2ImageAlt = config.slide2ImageAlt || "Slide 2";

  const slide3Tagline = config.slide3Tagline || "Eid Collection '26";
  const slide3Heading = config.slide3Heading || "Shop By Occasion";
  const slide3Body = config.slide3Body || "Celebrate Eid in effortless elegance. Timeless designs made for moments that matter.";
  const slide3BtnText = config.slide3BtnText || "Shop The Look";
  const slide3BtnUrl = config.slide3BtnUrl || "#";
  const slide3ImageUrl = config.slide3CollectionUrl || config.slide3ImageUrl || "https://picsum.photos/seed/sale-3/950/500";
  const slide3ImageAlt = config.slide3ImageAlt || "Slide 3";

  const slide4Tagline = config.slide4Tagline || "Eid Collection '26";
  const slide4Heading = config.slide4Heading || "Shop By Occasion";
  const slide4Body = config.slide4Body || "Celebrate Eid in effortless elegance. Timeless designs made for moments that matter.";
  const slide4BtnText = config.slide4BtnText || "Shop The Look";
  const slide4BtnUrl = config.slide4BtnUrl || "#";
  const slide4ImageUrl = config.slide4CollectionUrl || config.slide4ImageUrl || "https://picsum.photos/seed/sale-4/950/500";
  const slide4ImageAlt = config.slide4ImageAlt || "Slide 4";

  return `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .sbs1-main {
    margin: 0 auto;
  }

  .sbs1-wrapper {
    display: flex;
    background: white;
    overflow: hidden;
    height: ${sliderHeight};
  }

  .sbs1-left {
    flex: 0 0 380px;
    background: ${leftBg};
    padding: 3rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .sbs1-content {
    position: relative;
    height: 100%;
  }

  .sbs1-block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(20px);
  }

  .sbs1-block.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .sbs1-tagline {
    font-size: 14px;
    font-weight: 600;
    color: ${taglineColor};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .sbs1-heading {
    font-size: 2.2rem;
    font-weight: 500;
    color: ${headingColor};
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .sbs1-block p {
    font-size: 1rem;
    color: ${bodyColor};
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .sbs1-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.75rem;
    background: ${btnBg};
    color: ${btnColor};
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    width: fit-content;
  }

  .sbs1-btn:hover {
    border: 2px solid ${btnBg};
    background: transparent;
    color: ${btnBg};
  }

  .sbs1-btn svg {
    width: 20px;
    height: 20px;
  }

  .sbs1-pagination {
    position: absolute;
    bottom: 2rem;
    display: flex;
    gap: 0.75rem;
  }

  .sbs1-bullet {
    width: 50px;
    height: 5px;
    background: ${bulletInactiveBg};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.6;
    border: none;
    padding: 0;
  }

  .sbs1-bullet.active {
    background: ${bulletActiveBg};
    opacity: 1;
    transform: scale(1.2);
  }

  .sbs1-right {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .sbs1-swiper {
    width: 100%;
    height: 100%;
  }

  .sbs1-swiper-wrapper {
    display: flex;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .sbs1-slide {
    flex: 0 0 100%;
    height: 100%;
  }

  .sbs1-slide-link {
    display: block;
    height: 100%;
    position: relative;
  }

  .sbs1-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    .sbs1-wrapper {
      flex-direction: column;
      height: auto;
    }

    .sbs1-left {
      flex: none;
      padding: 2rem;
      order: 2;
    }

    .sbs1-pagination {
      position: static;
      margin-top: 2rem;
    }

    .sbs1-heading {
      font-size: 1.8rem;
    }

    .sbs1-block {
      position: relative;
      display: none;
      opacity: 1;
      visibility: visible;
      transform: none;
    }

    .sbs1-block.active {
      display: block;
    }

    .sbs1-content {
      height: auto;
    }
  }
</style>

<div class="sbs1-main">
  <div class="sbs1-wrapper">

    <div class="sbs1-left">
      <div class="sbs1-content">

        <div class="sbs1-block" data-id="sbs1-slide-0">
          <div class="sbs1-tagline">${slide1Tagline}</div>
          <h2 class="sbs1-heading">${slide1Heading}</h2>
          <p>${slide1Body}</p>
          <a href="${slide1BtnUrl}" class="sbs1-btn">
            ${slide1BtnText}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path d="M15.832 9.99931H4.16537" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 14.166L15.832 9.99933" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 5.83264L15.832 9.99931" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>

        <div class="sbs1-block" data-id="sbs1-slide-1">
          <div class="sbs1-tagline">${slide2Tagline}</div>
          <h2 class="sbs1-heading">${slide2Heading}</h2>
          <p>${slide2Body}</p>
          <a href="${slide2BtnUrl}" class="sbs1-btn">
            ${slide2BtnText}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path d="M15.832 9.99931H4.16537" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 14.166L15.832 9.99933" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 5.83264L15.832 9.99931" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>

        <div class="sbs1-block active" data-id="sbs1-slide-2">
          <div class="sbs1-tagline">${slide3Tagline}</div>
          <h2 class="sbs1-heading">${slide3Heading}</h2>
          <p>${slide3Body}</p>
          <a href="${slide3BtnUrl}" class="sbs1-btn">
            ${slide3BtnText}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path d="M15.832 9.99931H4.16537" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 14.166L15.832 9.99933" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 5.83264L15.832 9.99931" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>

        <div class="sbs1-block" data-id="sbs1-slide-3">
          <div class="sbs1-tagline">${slide4Tagline}</div>
          <h2 class="sbs1-heading">${slide4Heading}</h2>
          <p>${slide4Body}</p>
          <a href="${slide4BtnUrl}" class="sbs1-btn">
            ${slide4BtnText}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path d="M15.832 9.99931H4.16537" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 14.166L15.832 9.99933" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.6654 5.83264L15.832 9.99931" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>

        <div class="sbs1-pagination">
          <button class="sbs1-bullet" data-slide="0" aria-label="Go to slide 1"></button>
          <button class="sbs1-bullet" data-slide="1" aria-label="Go to slide 2"></button>
          <button class="sbs1-bullet active" data-slide="2" aria-label="Go to slide 3"></button>
          <button class="sbs1-bullet" data-slide="3" aria-label="Go to slide 4"></button>
        </div>

      </div>
    </div>

    <div class="sbs1-right">
      <div class="sbs1-swiper">
        <div class="sbs1-swiper-wrapper" id="sbs1SwiperWrapper">
          <div class="sbs1-slide" data-id="sbs1-slide-0">
            <a href="${slide1BtnUrl}" class="sbs1-slide-link">
              <img src="${slide1ImageUrl}" alt="${slide1ImageAlt}" class="sbs1-img" />
            </a>
          </div>
          <div class="sbs1-slide" data-id="sbs1-slide-1">
            <a href="${slide2BtnUrl}" class="sbs1-slide-link">
              <img src="${slide2ImageUrl}" alt="${slide2ImageAlt}" class="sbs1-img" />
            </a>
          </div>
          <div class="sbs1-slide" data-id="sbs1-slide-2">
            <a href="${slide3BtnUrl}" class="sbs1-slide-link">
              <img src="${slide3ImageUrl}" alt="${slide3ImageAlt}" class="sbs1-img" />
            </a>
          </div>
          <div class="sbs1-slide" data-id="sbs1-slide-3">
            <a href="${slide4BtnUrl}" class="sbs1-slide-link">
              <img src="${slide4ImageUrl}" alt="${slide4ImageAlt}" class="sbs1-img" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
  (function () {
    var swiperWrapper = document.getElementById("sbs1SwiperWrapper");
    var slides = document.querySelectorAll(".sbs1-slide");
    var contents = document.querySelectorAll(".sbs1-block");
    var bullets = document.querySelectorAll(".sbs1-bullet");
    var currentIndex = 2;
    var autoPlayInterval = null;

    function updateSlider() {
      var translateX = -(currentIndex * 100);
      swiperWrapper.style.transform = \`translateX(\${translateX}%)\`;

      contents.forEach(function (content, index) {
        content.classList.toggle("active", index === currentIndex);
      });

      bullets.forEach(function (bullet, index) {
        bullet.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(function () {
        nextSlide();
      }, 4000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }

    bullets.forEach(function (bullet, index) {
      bullet.addEventListener("click", function () {
        goToSlide(index);
        stopAutoPlay();
        startAutoPlay();
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { prevSlide(); stopAutoPlay(); startAutoPlay(); }
      if (e.key === "ArrowRight") { nextSlide(); stopAutoPlay(); startAutoPlay(); }
    });

    updateSlider();
    startAutoPlay();
  })();
</script>
  `;
}

export default function CollectionSliderV1({ config }) {
  return null;
}