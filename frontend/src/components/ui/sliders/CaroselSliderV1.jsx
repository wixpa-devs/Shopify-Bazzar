export function getCarouselSliderV1Code(config = {}) {
  const sectionBg = config.sectionBg || "#f1f6ff";
  const sliderMargin = config.sliderMargin || "80px 40px 40px";
  const cardBg = config.cardBg || "#ffffff";
  const cardShadow = config.cardShadow || "0px 14px 22px -9px #bbcbd8";
  const overlayGradient =
    config.overlayGradient ||
    "linear-gradient(-45deg, rgba(6, 190, 244, 0.75) 0%, rgba(45, 112, 253, 0.6) 100%)";
  const titleColor = config.titleColor || "#333333";
  const titleHoverColor = config.titleHoverColor || "#3498db";
  const descColor = config.descColor || "#808080";
  const dateColor = config.dateColor || "#a9a9a9";
  const dateIconColor = config.dateIconColor || "#CFDACE";
  const buttonBg = config.buttonBg || "#2196F3";
  const buttonHoverBg = config.buttonHoverBg || "#1376c5";
  const buttonTextColor = config.buttonTextColor || "#ffffff";
  const navButtonBg = config.navButtonBg || "#ffffff";
  const navButtonColor = config.navButtonColor || "#333333";
  const navButtonHoverBg = config.navButtonHoverBg || "#2196F3";
  const navButtonHoverColor = config.navButtonHoverColor || "#ffffff";
  const dotColor = config.dotColor || "#bbcbd8";
  const dotActiveColor = config.dotActiveColor || "#2196F3";
  const iconColor = config.iconColor || "#ffffff";

  const post1Image =
    config.post1Image || "https://picsum.photos/seed/news-slide-1/501/301";
  const post1ImageAlt = config.post1ImageAlt || "Post Image 1";
  const post1Title = config.post1Title || "Lorem ipsum dolor sit amet.";
  const post1Desc =
    config.post1Desc ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......";
  const post1Date = config.post1Date || "Oct 27, 2019";
  const post1Link = config.post1Link || "#";
  const post1ReadMoreText = config.post1ReadMoreText || "Read More";

  const post2Image =
    config.post2Image || "https://picsum.photos/seed/news-slide-2/503/303";
  const post2ImageAlt = config.post2ImageAlt || "Post Image 2";
  const post2Title = config.post2Title || "Lorem ipsum dolor sit amet.";
  const post2Desc =
    config.post2Desc ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......";
  const post2Date = config.post2Date || "Oct 27, 2019";
  const post2Link = config.post2Link || "#";
  const post2ReadMoreText = config.post2ReadMoreText || "Read More";

  const post3Image =
    config.post3Image || "https://picsum.photos/seed/news-slide-3/500/300";
  const post3ImageAlt = config.post3ImageAlt || "Post Image 3";
  const post3Title = config.post3Title || "Lorem ipsum dolor sit amet.";
  const post3Desc =
    config.post3Desc ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......";
  const post3Date = config.post3Date || "Oct 27, 2019";
  const post3Link = config.post3Link || "#";
  const post3ReadMoreText = config.post3ReadMoreText || "Read More";

  const post4Image =
    config.post4Image || "https://picsum.photos/seed/news-slide-4/501/301";
  const post4ImageAlt = config.post4ImageAlt || "Post Image 4";
  const post4Title = config.post4Title || "Lorem ipsum dolor sit amet.";
  const post4Desc =
    config.post4Desc ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......";
  const post4Date = config.post4Date || "Oct 27, 2019";
  const post4Link = config.post4Link || "#";
  const post4ReadMoreText = config.post4ReadMoreText || "Read More";

  const post5Image =
    config.post5Image || "https://picsum.photos/seed/news-slide-5/505/305";
  const post5ImageAlt = config.post5ImageAlt || "Post Image 5";
  const post5Title = config.post5Title || "Lorem ipsum dolor sit amet.";
  const post5Desc =
    config.post5Desc ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......";
  const post5Date = config.post5Date || "Oct 27, 2019";
  const post5Link = config.post5Link || "#";
  const post5ReadMoreText = config.post5ReadMoreText || "Read More";

  const post6Image =
    config.post6Image || "https://picsum.photos/seed/news-slide-6/506/306";
  const post6ImageAlt = config.post6ImageAlt || "Post Image 6";
  const post6Title = config.post6Title || "Lorem ipsum dolor sit amet.";
  const post6Desc =
    config.post6Desc ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......";
  const post6Date = config.post6Date || "Oct 27, 2019";
  const post6Link = config.post6Link || "#";
  const post6ReadMoreText = config.post6ReadMoreText || "Read More";

  return `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container-fluid {
    background-color: ${sectionBg};
    font-family: inherit;
    overflow-x: hidden;
    padding: 20px 0;
  }

  #news-slider {
    margin: ${sliderMargin};
    position: relative;
    width: 100%;
    max-width: 100%;
  }

  .container-fluid,
  .row,
  .col-md-12 {
    width: 100%;
    max-width: 100%;
  }

  .post-slide {
    background: ${cardBg};
    margin: 20px 15px 20px;
    border-radius: 15px;
    padding-top: 1px;
    box-shadow: ${cardShadow};
  }

  .post-slide .post-img {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: -12px 15px 8px 15px;
  }

  .post-slide .post-img img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transform: scale(1, 1);
    transition: transform 0.2s linear;
  }

  .post-slide:hover .post-img img {
    transform: scale(1.1, 1.1);
  }

  .post-slide .over-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: ${overlayGradient};
    transition: all 0.50s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .post-slide:hover .over-layer {
    opacity: 1;
  }

  .post-slide .over-layer i {
    color: ${iconColor};
    font-size: 25px;
  }

  .post-slide .post-content {
    background: ${cardBg};
    padding: 10px 20px 40px;
    border-radius: 15px;
  }

  .post-slide .post-title a {
    font-size: 15px;
    font-weight: bold;
    color: ${titleColor};
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease 0s;
    margin-bottom: 10px;
  }

  .post-slide .post-title a:hover {
    color: ${titleHoverColor};
  }

  .post-slide .post-description {
    line-height: 24px;
    color: ${descColor};
    margin-bottom: 25px;
    font-size: 14px;
  }

  .post-slide .post-date {
    color: ${dateColor};
    font-size: 14px;
  }

  .post-slide .post-date i {
    font-size: 16px;
    margin-right: 8px;
    color: ${dateIconColor};
  }

  .post-slide .read-more {
    padding: 7px 20px;
    float: right;
    font-size: 12px;
    background: ${buttonBg};
    color: ${buttonTextColor};
    box-shadow: 0px 10px 20px -10px #1376c5;
    border-radius: 25px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .post-slide .read-more:hover {
    background: ${buttonHoverBg};
    color: ${buttonTextColor};
  }

  .owl-nav {
    text-align: center;
    margin-top: 15px;
  }

  .owl-prev,
  .owl-next {
    background: ${navButtonBg} !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50% !important;
    box-shadow: 3px 14px 25px -10px #92b4d0;
    font-size: 20px !important;
    color: ${navButtonColor} !important;
    line-height: 40px !important;
    transition: background 0.3s ease;
    z-index: 20;
  }

  .owl-prev {
    left: 8px;
  }

  .owl-next {
    right: 8px;
  }

  .owl-prev:hover,
  .owl-next:hover {
    background: ${navButtonHoverBg} !important;
    color: ${navButtonHoverColor} !important;
  }

  .owl-dots {
    text-align: center;
    margin-top: 15px;
  }

  .owl-dot span {
    background: ${dotColor} !important;
  }

  .owl-dot.active span {
    background: ${dotActiveColor} !important;
  }

  @media only screen and (max-width: 1280px) {
    #news-slider {
      margin: 60px 24px 30px;
      width: calc(100% - 48px);
    }

    .post-slide .post-content {
      padding: 0px 15px 25px 15px;
    }

    .owl-prev {
      left: 6px;
    }

    .owl-next {
      right: 6px;
    }
  }

  @media only screen and (max-width: 991px) {
    #news-slider {
      margin: 40px 16px 24px;
      width: calc(100% - 32px);
    }

    .post-slide {
      margin: 16px 10px;
    }

    .post-slide .post-img {
      margin: -10px 12px 8px 12px;
    }

    .post-slide .post-img img {
      height: 190px;
    }

    .post-slide .post-content {
      padding: 8px 14px 22px;
    }

    .post-slide .post-description {
      font-size: 13px;
      line-height: 22px;
      margin-bottom: 18px;
    }

    .owl-prev,
    .owl-next {
      width: 36px;
      height: 36px;
      line-height: 36px !important;
      font-size: 18px !important;
      top: calc(50% - 8px);
    }

    .owl-prev {
      left: 4px;
    }

    .owl-next {
      right: 4px;
    }
  }

  @media only screen and (max-width: 767px) {
    #news-slider {
      margin: 24px 8px 14px;
      width: calc(100% - 16px);
    }

    #news-slider .owl-stage-outer {
      overflow: hidden;
      padding: 6px 0;
    }

    .post-slide {
      margin: 10px 4px;
      border-radius: 12px;
    }

    .post-slide .post-img {
      border-radius: 8px;
      margin: -8px 10px 6px 10px;
    }

    .post-slide .post-img img {
      height: 180px;
    }

    .post-slide .post-title a {
      font-size: 14px;
      margin-bottom: 8px;
    }

    .post-slide .post-description {
      font-size: 12.5px;
      line-height: 21px;
      margin-bottom: 14px;
    }

    .post-slide .post-date {
      font-size: 12px;
    }

    .post-slide .post-date i {
      font-size: 13px;
      margin-right: 6px;
    }

    .post-slide .read-more {
      padding: 6px 14px;
      font-size: 11px;
    }

    #news-slider .owl-nav {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    #news-slider .owl-prev,
    #news-slider .owl-next {
      position: relative !important;
      left: auto !important;
      right: auto !important;
      top: auto !important;
      transform: none !important;
      margin: 0 !important;
      width: 34px;
      height: 34px;
      line-height: 34px !important;
      font-size: 16px !important;
    }
  }

  @media only screen and (max-width: 480px) {
    #news-slider {
      margin: 18px 4px 12px;
      width: calc(100% - 8px);
    }

    .post-slide .post-img img {
      height: 165px;
    }

    .post-slide .post-content {
      padding: 8px 12px 18px;
    }

    .post-slide .post-description {
      line-height: 20px;
      margin-bottom: 12px;
    }

    .post-slide .read-more {
      padding: 5px 12px;
      font-size: 10.5px;
    }

    #news-slider .owl-nav {
      gap: 8px;
      margin-top: 8px;
    }

    #news-slider .owl-prev,
    #news-slider .owl-next {
      width: 32px;
      height: 32px;
      line-height: 32px !important;
      font-size: 15px !important;
    }
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div id="news-slider" class="owl-carousel">
        <div class="post-slide">
          <div class="post-img">
            <img src="${post1Image}" alt="${post1ImageAlt}">
            <a href="${post1Link}" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title"><a href="${post1Link}">${post1Title}</a></h3>
            <p class="post-description">${post1Desc}</p>
            <span class="post-date"><i class="fa fa-clock"></i>${post1Date}</span>
            <a href="${post1Link}" class="read-more">${post1ReadMoreText}</a>
          </div>
        </div>

        <div class="post-slide">
          <div class="post-img">
            <img src="${post2Image}" alt="${post2ImageAlt}">
            <a href="${post2Link}" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title"><a href="${post2Link}">${post2Title}</a></h3>
            <p class="post-description">${post2Desc}</p>
            <span class="post-date"><i class="fa fa-clock"></i>${post2Date}</span>
            <a href="${post2Link}" class="read-more">${post2ReadMoreText}</a>
          </div>
        </div>

        <div class="post-slide">
          <div class="post-img">
            <img src="${post3Image}" alt="${post3ImageAlt}">
            <a href="${post3Link}" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title"><a href="${post3Link}">${post3Title}</a></h3>
            <p class="post-description">${post3Desc}</p>
            <span class="post-date"><i class="fa fa-clock"></i>${post3Date}</span>
            <a href="${post3Link}" class="read-more">${post3ReadMoreText}</a>
          </div>
        </div>

        <div class="post-slide">
          <div class="post-img">
            <img src="${post4Image}" alt="${post4ImageAlt}">
            <a href="${post4Link}" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title"><a href="${post4Link}">${post4Title}</a></h3>
            <p class="post-description">${post4Desc}</p>
            <span class="post-date"><i class="fa fa-clock"></i>${post4Date}</span>
            <a href="${post4Link}" class="read-more">${post4ReadMoreText}</a>
          </div>
        </div>

        <div class="post-slide">
          <div class="post-img">
            <img src="${post5Image}" alt="${post5ImageAlt}">
            <a href="${post5Link}" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title"><a href="${post5Link}">${post5Title}</a></h3>
            <p class="post-description">${post5Desc}</p>
            <span class="post-date"><i class="fa fa-clock"></i>${post5Date}</span>
            <a href="${post5Link}" class="read-more">${post5ReadMoreText}</a>
          </div>
        </div>

        <div class="post-slide">
          <div class="post-img">
            <img src="${post6Image}" alt="${post6ImageAlt}">
            <a href="${post6Link}" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title"><a href="${post6Link}">${post6Title}</a></h3>
            <p class="post-description">${post6Desc}</p>
            <span class="post-date"><i class="fa fa-clock"></i>${post6Date}</span>
            <a href="${post6Link}" class="read-more">${post6ReadMoreText}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
  $(document).ready(function () {
    $("#news-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  });
</script>
  `;
}

export default function CarouselSliderV1() {
  return null;
}
