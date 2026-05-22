export function getHeroV5Code(config = {}) {
  const bgColor = config.bgColor || "#2B2D42";
  const accentColor = config.accentColor || "#ef233c";
  const accentHoverColor = config.accentHoverColor || "#D90429";
  const titleColor = config.titleColor || "#edf2f4";
  const metaColor = config.metaColor || "#8D99AE";
  const thumbTitleColor = config.thumbTitleColor || "#c6cbce";

  const slide1Img = config.slide1Img || "https://picsum.photos/id/1026/1200/800";
  const slide1Link = config.slide1Link || "#";
  const slide1AuthorLink = config.slide1AuthorLink || "#";
  const slide1CategoryLink = config.slide1CategoryLink || "#";
  const slide1ReadMoreLink = config.slide1ReadMoreLink || "#";
  const slide1Title = config.slide1Title || "Travel Long Journey with Family in This winter season";
  const slide1Author = config.slide1Author || "mohammad asik";
  const slide1Comments = config.slide1Comments || "01 comments";
  const slide1AuthorImg = config.slide1AuthorImg || "https://picsum.photos/id/1026/48/48";
  const slide1Category = config.slide1Category || "animals";
  const slide1Date = config.slide1Date || "July 30, 2021";

  const slide2Img = config.slide2Img || "https://picsum.photos/id/158/1200/800";
  const slide2Link = config.slide2Link || "#";
  const slide2AuthorLink = config.slide2AuthorLink || "#";
  const slide2CategoryLink = config.slide2CategoryLink || "#";
  const slide2ReadMoreLink = config.slide2ReadMoreLink || "#";
  const slide2Title = config.slide2Title || "Everything You Need To Know About Living Off The Land";
  const slide2Author = config.slide2Author || "una maria";
  const slide2Comments = config.slide2Comments || "01 comments";
  const slide2AuthorImg = config.slide2AuthorImg || "https://picsum.photos/id/158/48/48";
  const slide2Category = config.slide2Category || "travel";
  const slide2Date = config.slide2Date || "July 30, 2021";

  const slide3Img = config.slide3Img || "https://picsum.photos/id/292/1200/800";
  const slide3Link = config.slide3Link || "#";
  const slide3AuthorLink = config.slide3AuthorLink || "#";
  const slide3CategoryLink = config.slide3CategoryLink || "#";
  const slide3ReadMoreLink = config.slide3ReadMoreLink || "#";
  const slide3Title = config.slide3Title || "Best Signs Of Good Holiday Rental Accommodation";
  const slide3Author = config.slide3Author || "Isabella";
  const slide3Comments = config.slide3Comments || "01 comments";
  const slide3AuthorImg = config.slide3AuthorImg || "https://picsum.photos/id/292/48/48";
  const slide3Category = config.slide3Category || "animals";
  const slide3Date = config.slide3Date || "July 30, 2021";

  const slide4Img = config.slide4Img || "https://picsum.photos/id/477/1200/800";
  const slide4Link = config.slide4Link || "#";
  const slide4AuthorLink = config.slide4AuthorLink || "#";
  const slide4CategoryLink = config.slide4CategoryLink || "#";
  const slide4ReadMoreLink = config.slide4ReadMoreLink || "#";
  const slide4Title = config.slide4Title || "Three Business Women Working Together With Requirements For Business";
  const slide4Author = config.slide4Author || "mohammad asik";
  const slide4Comments = config.slide4Comments || "01 comments";
  const slide4AuthorImg = config.slide4AuthorImg || "https://picsum.photos/id/477/48/48";
  const slide4Category = config.slide4Category || "business";
  const slide4Date = config.slide4Date || "July 30, 2021";

  const readMoreText = config.readMoreText || "read more";
  const nextText = config.nextText || "next";
  const prevText = config.prevText || "prev";

  const uid = `herov5-${Math.random().toString(36).slice(2, 9)}`;

  return `<!-- Hero V5 — Timeline Slider | Shopify Bazzar -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

  .${uid} *,
  .${uid} *::before,
  .${uid} *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .${uid} {
    font-family: 'Lora', serif;
  }

  .${uid}__container {
    display: flow-root;
    box-sizing: content-box;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .${uid}__slide-wrapper {
    background: ${bgColor};
  }

  .${uid}__main-swiper {
    height: 100%;
    width: 100%;
  }

  .${uid}__main-swiper .${uid}__slide-item {
    display: flex;
    align-items: center;
  }

  .${uid}__main-swiper .${uid}__image-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
  }

  .${uid}__main-swiper .${uid}__main-img {
    width: 100%;
    height: 194px;
    object-fit: cover;
    padding: 0;
    background: ${accentColor};
    display: block;
  }

  .${uid}__content-wrap {
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    position: absolute;
    left: 0;
    max-width: 618px;
    z-index: 2;
  }

  .${uid}__main-title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 30px;
  }

  .${uid}__main-title a {
    text-decoration: none;
    color: ${titleColor};
    transition: all .3s ease;
    background: ${accentColor};
    padding: 0 8px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    line-height: 30px;
  }

  .${uid}__main-title a:hover {
    background: ${accentHoverColor};
  }

  .${uid}__meta-box {
    display: inherit;
    align-items: center;
    overflow: hidden;
  }

  .${uid}__author {
    display: flex;
    align-items: center;
  }

  .${uid}__author-img img {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    object-fit: cover;
    display: block;
  }

  .${uid}__author-text {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    color: ${metaColor};
    text-transform: uppercase;
    padding-left: 15px;
  }

  .${uid}__author-name {
    text-decoration: none;
    margin-bottom: 6px;
    transition: all .3s ease;
    color: #cacdce;
  }

  .${uid}__author-name:hover {
    color: ${accentHoverColor};
  }

  .${uid}__btn-wrap {
    margin-left: 100px;
    display: none;
  }

  .${uid}__btn-wrap a {
    text-decoration: none;
    background: transparent;
    border-width: 2px;
    border-style: solid;
    border-color: ${accentColor};
    color: ${accentColor};
    padding: 10px 15px;
    display: inline-block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    transition: all .3s ease;
  }

  .${uid}__btn-wrap a i {
    padding-left: 8px;
  }

  .${uid}__btn-wrap a:hover {
    color: #EDF2F4;
    border-color: ${accentHoverColor};
    background: ${accentHoverColor};
  }

  .${uid}__pagination-wrap {
    display: none;
  }

  .${uid}__pagination-wrap .swiper-pagination {
    bottom: unset;
    display: inline-grid;
    top: 50%;
    right: 3.5%;
    transform: translateY(-50%);
  }

  .${uid}__pagination-wrap .swiper-pagination-bullet {
    width: 7px;
    height: 35px;
    display: inline-block;
    border-radius: 0;
    background: #EDF2F4;
    margin: 2px 0;
    opacity: 1;
  }

  .${uid}__pagination-wrap .swiper-pagination-bullet-active {
    background: ${accentColor};
  }

  .${uid}__thumb-navi-wrap {
    display: flex;
    align-items: center;
    position: relative;
    background: ${bgColor};
    transition: all .3s ease;
  }

  .${uid}__thumbs-swiper {
    width: 100%;
    margin: auto !important;
  }

  .${uid}__thumbs-swiper .${uid}__slide-item {
    position: relative;
    cursor: pointer;
  }

  .${uid}__thumbs-swiper .${uid}__image-wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .${uid}__thumbs-swiper .${uid}__image-wrap::before {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background: #000;
    content: '';
    left: 0;
    z-index: 1;
  }

  .${uid}__thumb-img {
    height: 97px;
    width: 100%;
    object-fit: cover;
    opacity: .3;
    display: block;
  }

  .${uid}__thumbs-swiper .swiper-slide-thumb-active .${uid}__thumb-img {
    opacity: .7;
  }

  .${uid}__thumb-content {
    position: absolute;
    bottom: 0;
    padding: 10px;
    z-index: 2;
  }

  .${uid}__thumb-title {
    font-size: 14px;
    line-height: 22px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: ${thumbTitleColor};
  }

  .${uid}__thumb-title a {
    text-decoration: none;
    color: ${thumbTitleColor};
    transition: all .3s ease;
  }

  .${uid}__thumb-title a:hover {
    color: ${accentHoverColor};
  }

  .${uid}__category-date {
    display: flex;
    align-items: center;
    font-size: 9px;
    text-transform: uppercase;
    color: #959ba6;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .${uid}__category {
    text-decoration: none;
    color: ${accentColor};
    position: relative;
    padding-right: 8px;
    transition: all .3s ease;
  }

  .${uid}__category::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    content: '';
    height: 11px;
    width: 1px;
    background: #8d99ae;
  }

  .${uid}__category:hover {
    color: ${accentHoverColor};
  }

  .${uid}__date {
    padding-left: 8px;
  }

  .${uid}__nav-buttons {
    display: none;
  }

  .${uid}__nav-btn {
    transform: rotate(-90deg);
    font-size: 18px;
    color: #EDF2F4;
    text-transform: uppercase;
    font-weight: 700;
    position: absolute;
    cursor: pointer;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    z-index: 3;
  }

  .${uid}__nav-btn i {
    opacity: 0;
    transition: all .3s ease;
  }

  .${uid}__nav-btn:hover {
    color: ${accentHoverColor};
  }

  .${uid}__nav-btn:hover i {
    opacity: 1;
  }

  .${uid}__nav-prev i {
    padding-right: 10px;
  }

  .${uid}__nav-next i {
    padding-left: 10px;
  }

  @media (min-width: 768px) {
    .${uid}__container {
      padding-left: 15px;
      padding-right: 15px;
    }
    .${uid}__main-swiper .${uid}__content-wrap {
      padding-left: 50px;
      padding-right: 0;
      max-width: 500px;
    }
    .${uid}__main-title {
      font-size: 28px;
      margin-bottom: 35px;
    }
    .${uid}__main-swiper .${uid}__main-img {
      width: 64.4%;
      height: 267px;
      padding: 0 70px 10px 0;
    }
    .${uid}__main-swiper .${uid}__image-wrap::before {
      position: absolute;
      content: '';
      height: 40px;
      width: 10px;
      background: ${accentColor};
      left: 35%;
      bottom: 0;
      z-index: 1;
    }
    .${uid}__author-text {
      font-size: 12px;
      padding-left: 12px;
    }
    .${uid}__btn-wrap {
      margin-left: 30px;
      display: inherit;
    }
    .${uid}__btn-wrap a {
      padding: 8px 12px;
      font-size: 12px;
    }
    .${uid}__meta-box {
      display: flex;
    }
    .${uid}__pagination-wrap {
      display: inherit;
    }
    .${uid}__pagination-wrap .swiper-pagination {
      right: 35px;
    }
    .${uid}__thumbs-swiper {
      width: 81%;
    }
    .${uid}__thumb-img {
      height: 112px;
    }
    .${uid}__thumb-content {
      padding: 20px;
    }
    .${uid}__category-date {
      font-size: 10px;
      margin-bottom: 10px;
    }
    .${uid}__thumb-title {
      font-size: 14px;
    }
    .${uid}__nav-buttons {
      display: inherit;
    }
    .${uid}__nav-btn {
      font-size: 12px;
    }
    .${uid}__nav-next {
      right: 12px;
    }
    .${uid}__nav-prev {
      left: 5px;
    }
  }

  @media (min-width: 1024px) {
    .${uid}__container {
      padding-left: 30px;
      padding-right: 30px;
    }
    .${uid}__main-title {
      font-size: 42px;
      line-height: 58px;
      margin-bottom: 80px;
    }
    .${uid}__main-swiper .${uid}__content-wrap {
      padding-left: 100px;
      max-width: 668px;
    }
    .${uid}__main-swiper .${uid}__main-img {
      height: 507px;
      padding: 0 100px 10px 0;
    }
    .${uid}__main-swiper .${uid}__image-wrap::before {
      height: 70px;
    }
    .${uid}__author-text {
      font-size: 14px;
      padding-left: 15px;
    }
    .${uid}__btn-wrap {
      margin-left: 100px;
    }
    .${uid}__btn-wrap a {
      padding: 10px 15px;
      font-size: 14px;
    }
    .${uid}__pagination-wrap .swiper-pagination {
      right: 50px;
    }
    .${uid}__thumbs-swiper {
      width: 79%;
    }
    .${uid}__thumb-img {
      height: 226px;
    }
    .${uid}__thumb-content {
      padding: 40px;
    }
    .${uid}__category-date {
      font-size: 12px;
      margin-bottom: 20px;
    }
    .${uid}__thumb-title {
      font-size: 18px;
    }
    .${uid}__nav-btn {
      font-size: 18px;
    }
    .${uid}__nav-next {
      right: 16px;
    }
    .${uid}__nav-prev {
      left: 8px;
    }
  }

  @media (min-width: 1440px) {
    .${uid}__thumbs-swiper {
      width: 86%;
    }
  }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

<div class="herov5 ${uid}">
  <div class="${uid}__container">
    <div class="${uid}__slide-wrapper">

      <div class="swiper ${uid}__main-swiper">
        <div class="swiper-wrapper">

          <div class="${uid}__slide-item swiper-slide">
            <div class="${uid}__content-wrap">
              <h3 class="${uid}__main-title" data-swiper-parallax-y="-240" data-swiper-parallax-duration="700">
                <a href="${slide1Link}">${slide1Title}</a>
              </h3>
              <div class="${uid}__meta-box">
                <div class="${uid}__author" data-swiper-parallax-y="-150" data-swiper-parallax-duration="900">
                  <a class="${uid}__author-img" href="${slide1AuthorLink}"><img src="${slide1AuthorImg}" alt="${slide1Author}" /></a>
                  <div class="${uid}__author-text">
                    <a class="${uid}__author-name" href="${slide1AuthorLink}">${slide1Author}</a>
                    <span>${slide1Comments}</span>
                  </div>
                </div>
                <div class="${uid}__btn-wrap" data-swiper-parallax-y="-100" data-swiper-parallax-duration="1000">
                  <a href="${slide1ReadMoreLink}"><span>${readMoreText}</span><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="${uid}__image-wrap">
              <a href="${slide1Link}" style="display:block;width:100%;">
                <img class="${uid}__main-img" src="${slide1Img}" alt="${slide1Title}" />
              </a>
            </div>
          </div>

          <div class="${uid}__slide-item swiper-slide">
            <div class="${uid}__content-wrap">
              <h3 class="${uid}__main-title" data-swiper-parallax-y="-240" data-swiper-parallax-duration="700">
                <a href="${slide2Link}">${slide2Title}</a>
              </h3>
              <div class="${uid}__meta-box">
                <div class="${uid}__author" data-swiper-parallax-y="-150" data-swiper-parallax-duration="900">
                  <a class="${uid}__author-img" href="${slide2AuthorLink}"><img src="${slide2AuthorImg}" alt="${slide2Author}" /></a>
                  <div class="${uid}__author-text">
                    <a class="${uid}__author-name" href="${slide2AuthorLink}">${slide2Author}</a>
                    <span>${slide2Comments}</span>
                  </div>
                </div>
                <div class="${uid}__btn-wrap" data-swiper-parallax-y="-100" data-swiper-parallax-duration="1000">
                  <a href="${slide2ReadMoreLink}"><span>${readMoreText}</span><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="${uid}__image-wrap">
              <a href="${slide2Link}" style="display:block;width:100%;">
                <img class="${uid}__main-img" src="${slide2Img}" alt="${slide2Title}" />
              </a>
            </div>
          </div>

          <div class="${uid}__slide-item swiper-slide">
            <div class="${uid}__content-wrap">
              <h3 class="${uid}__main-title" data-swiper-parallax-y="-240" data-swiper-parallax-duration="700">
                <a href="${slide3Link}">${slide3Title}</a>
              </h3>
              <div class="${uid}__meta-box">
                <div class="${uid}__author" data-swiper-parallax-y="-150" data-swiper-parallax-duration="900">
                  <a class="${uid}__author-img" href="${slide3AuthorLink}"><img src="${slide3AuthorImg}" alt="${slide3Author}" /></a>
                  <div class="${uid}__author-text">
                    <a class="${uid}__author-name" href="${slide3AuthorLink}">${slide3Author}</a>
                    <span>${slide3Comments}</span>
                  </div>
                </div>
                <div class="${uid}__btn-wrap" data-swiper-parallax-y="-100" data-swiper-parallax-duration="1000">
                  <a href="${slide3ReadMoreLink}"><span>${readMoreText}</span><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="${uid}__image-wrap">
              <a href="${slide3Link}" style="display:block;width:100%;">
                <img class="${uid}__main-img" src="${slide3Img}" alt="${slide3Title}" />
              </a>
            </div>
          </div>

          <div class="${uid}__slide-item swiper-slide">
            <div class="${uid}__content-wrap">
              <h3 class="${uid}__main-title" data-swiper-parallax-y="-240" data-swiper-parallax-duration="700">
                <a href="${slide4Link}">${slide4Title}</a>
              </h3>
              <div class="${uid}__meta-box">
                <div class="${uid}__author" data-swiper-parallax-y="-150" data-swiper-parallax-duration="900">
                  <a class="${uid}__author-img" href="${slide4AuthorLink}"><img src="${slide4AuthorImg}" alt="${slide4Author}" /></a>
                  <div class="${uid}__author-text">
                    <a class="${uid}__author-name" href="${slide4AuthorLink}">${slide4Author}</a>
                    <span>${slide4Comments}</span>
                  </div>
                </div>
                <div class="${uid}__btn-wrap" data-swiper-parallax-y="-100" data-swiper-parallax-duration="1000">
                  <a href="${slide4ReadMoreLink}"><span>${readMoreText}</span><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="${uid}__image-wrap">
              <a href="${slide4Link}" style="display:block;width:100%;">
                <img class="${uid}__main-img" src="${slide4Img}" alt="${slide4Title}" />
              </a>
            </div>
          </div>

        </div>
        <div class="${uid}__pagination-wrap">
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="${uid}__thumb-navi-wrap">
        <div class="swiper ${uid}__thumbs-swiper">
          <div class="swiper-wrapper">

            <div class="${uid}__slide-item swiper-slide">
              <div class="${uid}__image-wrap">
                <img class="${uid}__thumb-img" src="${slide1Img}" alt="${slide1Title}">
              </div>
              <div class="${uid}__thumb-content">
                <div class="${uid}__category-date">
                  <a class="${uid}__category" href="${slide1CategoryLink}">${slide1Category}</a>
                  <div class="${uid}__date">${slide1Date}</div>
                </div>
                <h3 class="${uid}__thumb-title"><a href="${slide1Link}">${slide1Title}</a></h3>
              </div>
            </div>

            <div class="${uid}__slide-item swiper-slide">
              <div class="${uid}__image-wrap">
                <img class="${uid}__thumb-img" src="${slide2Img}" alt="${slide2Title}">
              </div>
              <div class="${uid}__thumb-content">
                <div class="${uid}__category-date">
                  <a class="${uid}__category" href="${slide2CategoryLink}">${slide2Category}</a>
                  <div class="${uid}__date">${slide2Date}</div>
                </div>
                <h3 class="${uid}__thumb-title"><a href="${slide2Link}">${slide2Title}</a></h3>
              </div>
            </div>

            <div class="${uid}__slide-item swiper-slide">
              <div class="${uid}__image-wrap">
                <img class="${uid}__thumb-img" src="${slide3Img}" alt="${slide3Title}">
              </div>
              <div class="${uid}__thumb-content">
                <div class="${uid}__category-date">
                  <a class="${uid}__category" href="${slide3CategoryLink}">${slide3Category}</a>
                  <div class="${uid}__date">${slide3Date}</div>
                </div>
                <h3 class="${uid}__thumb-title"><a href="${slide3Link}">${slide3Title}</a></h3>
              </div>
            </div>

            <div class="${uid}__slide-item swiper-slide">
              <div class="${uid}__image-wrap">
                <img class="${uid}__thumb-img" src="${slide4Img}" alt="${slide4Title}">
              </div>
              <div class="${uid}__thumb-content">
                <div class="${uid}__category-date">
                  <a class="${uid}__category" href="${slide4CategoryLink}">${slide4Category}</a>
                  <div class="${uid}__date">${slide4Date}</div>
                </div>
                <h3 class="${uid}__thumb-title"><a href="${slide4Link}">${slide4Title}</a></h3>
              </div>
            </div>

          </div>
        </div>

        <div class="${uid}__nav-buttons">
          <div class="${uid}__nav-btn ${uid}__nav-next">
            <span>${nextText}</span><i class="fas fa-arrow-right"></i>
          </div>
          <div class="${uid}__nav-btn ${uid}__nav-prev">
            <i class="fas fa-arrow-left"></i><span>${prevText}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script>
(function () {
  function initHeroV5Slider() {
    var root = document.querySelector(".${uid}");
    if (!root || typeof Swiper === "undefined") return;

    var mainEl = root.querySelector(".${uid}__main-swiper");
    var thumbsEl = root.querySelector(".${uid}__thumbs-swiper");
    var nextEl = root.querySelector(".${uid}__nav-next");
    var prevEl = root.querySelector(".${uid}__nav-prev");
    var paginationEl = root.querySelector(".${uid}__main-swiper .swiper-pagination");

    if (!mainEl || !thumbsEl) return;
    if (mainEl.swiper) mainEl.swiper.destroy(true, true);
    if (thumbsEl.swiper) thumbsEl.swiper.destroy(true, true);

    var thumbs = new Swiper(thumbsEl, {
      speed: 500,
      spaceBetween: 0,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loop: false,
      rewind: true,
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 }
      }
    });

    var main = new Swiper(mainEl, {
      parallax: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 500,
      loop: false,
      rewind: true,
      autoHeight: false,
      pagination: {
        el: paginationEl,
        clickable: true
      },
      thumbs: {
        swiper: thumbs
      }
    });
  }

  if (typeof Swiper !== "undefined") {
    initHeroV5Slider();
  } else {
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
    s.onload = initHeroV5Slider;
    document.head.appendChild(s);
  }
})();
</script>`;
}

export default function HeroV5({ config }) {
  return null;
}

