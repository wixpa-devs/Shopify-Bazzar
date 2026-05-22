export function getCarouselSliderV3Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const sectionPadding = config.sectionPadding || "60px 50px";

  // Card 1
  const card1Img = config.card1Img || "https://images.pexels.com/photos/3944412/pexels-photo-3944412.jpeg?w=400&h=500&auto=compress&cs=tinysrgb";
  const card1Title = config.card1Title || "Diamond Engagement Ring";
  const card1Desc = config.card1Desc || "A stunning 2-carat diamond ring set in 18k white gold, perfect for proposals and special occasions.";

  // Card 2
  const card2Img = config.card2Img || "https://images.pexels.com/photos/2777355/pexels-photo-2777355.jpeg?w=400&h=500&auto=compress&cs=tinysrgb";
  const card2Title = config.card2Title || "Diamond Necklace";
  const card2Desc = config.card2Desc || "Elegant necklace featuring a pendant with sparkling diamonds, crafted in platinum for timeless beauty.";

  // Card 3
  const card3Img = config.card3Img || "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?w=400&h=500&auto=compress&cs=tinysrgb";
  const card3Title = config.card3Title || "Diamond Earrings";
  const card3Desc = config.card3Desc || "Delicate stud earrings with round brilliant diamonds, ideal for everyday elegance and formal events.";

  // Card 4
  const card4Img = config.card4Img || "https://images.pexels.com/photos/3945652/pexels-photo-3945652.jpeg?w=400&h=500&auto=compress&cs=tinysrgb";
  const card4Title = config.card4Title || "Diamond Bracelet";
  const card4Desc = config.card4Desc || "Luxurious tennis bracelet with pavé-set diamonds, offering a dazzling sparkle on your wrist.";

  return `<!-- Carousel Slider V3 — Expand on Hover | Shopify Bazzar -->

<!-- Google Font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<!-- Owl Carousel CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"/>

<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    background: ${bgColor};
  }

  img {
    max-width: 100%;
    border: 0px;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
  }

  a:focus,
  a:active,
  a:visited,
  a:hover {
    text-decoration: none;
    outline: none;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 28px;
    line-height: 36px;
  }

  button {
    outline: none !important;
  }

  /* -------- Game / Slider section -------- */
  .cs3-game-section {
    padding: ${sectionPadding};
    background: ${bgColor};
  }

  .cs3-game-section .owl-stage {
    margin: 15px 0;
    display: flex;
    display: -webkit-flex;
  }

  .cs3-game-section .item {
    margin: 0 15px 60px;
    width: 320px;
    height: 400px;
    display: flex;
    display: -webkit-flex;
    align-items: flex-end;
    -webkit-align-items: flex-end;
    background: #343434 no-repeat center center / cover;
    background-size: cover;
    background-position: center center;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    cursor: pointer;
  }

  .cs3-game-section .item.active {
    width: 500px;
    box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
  }

  .cs3-game-section .item:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }

  .cs3-game-section .item-desc {
    padding: 0 24px 12px;
    color: #fff;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transform: translateY(calc(100% - 54px));
    -webkit-transform: translateY(calc(100% - 54px));
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
  }

  .cs3-game-section .item.active .item-desc {
    transform: none;
    -webkit-transform: none;
  }

  .cs3-game-section .item-desc p {
    opacity: 0;
    -webkit-transform: translateY(32px);
    transform: translateY(32px);
    transition: all 0.4s ease-in-out 0.2s;
    -webkit-transition: all 0.4s ease-in-out 0.2s;
  }

  .cs3-game-section .item.active .item-desc p {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .cs3-game-section .owl-theme.custom-carousel .owl-dots {
    margin-top: -20px;
    position: relative;
    z-index: 5;
  }

  /* -------- Responsive -------- */
  @media (min-width: 992px) and (max-width: 1199px) {
    h3 {
      margin: 0 0 8px;
      font-size: 24px;
      line-height: 32px;
    }
    .cs3-game-section {
      padding: 50px 30px;
    }
    .cs3-game-section .item {
      margin: 0 12px 60px;
      width: 260px;
      height: 360px;
    }
    .cs3-game-section .item.active {
      width: 400px;
    }
    .cs3-game-section .item-desc {
      transform: translateY(calc(100% - 46px));
      -webkit-transform: translateY(calc(100% - 46px));
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    h3 {
      margin: 0 0 8px;
      font-size: 24px;
      line-height: 32px;
    }
    .cs3-game-section {
      padding: 50px 30px 40px;
    }
    .cs3-game-section .item {
      margin: 0 12px 60px;
      width: 240px;
      height: 330px;
    }
    .cs3-game-section .item.active {
      width: 360px;
    }
    .cs3-game-section .item-desc {
      transform: translateY(calc(100% - 42px));
      -webkit-transform: translateY(calc(100% - 42px));
    }
  }

  @media (max-width: 767px) {
    body {
      font-size: 14px;
    }
    h3 {
      margin: 0 0 8px;
      font-size: 19px;
      line-height: 24px;
    }
    .cs3-game-section {
      padding: 30px 15px 20px;
    }
    .cs3-game-section .item {
      margin: 0 10px 40px;
      width: 200px;
      height: 280px;
    }
    .cs3-game-section .item.active {
      width: 270px;
      box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
    }
    .cs3-game-section .item-desc {
      padding: 0 14px 5px;
      transform: translateY(calc(100% - 42px));
      -webkit-transform: translateY(calc(100% - 42px));
    }
  }
</style>

<section class="cs3-game-section">
  <div class="owl-carousel custom-carousel owl-theme">

    <div class="item" style="background-image: url('${card1Img}');">
      <div class="item-desc">
        <h3>${card1Title}</h3>
        <p>${card1Desc}</p>
      </div>
    </div>

    <div class="item" style="background-image: url('${card2Img}');">
      <div class="item-desc">
        <h3>${card2Title}</h3>
        <p>${card2Desc}</p>
      </div>
    </div>

    <div class="item" style="background-image: url('${card3Img}');">
      <div class="item-desc">
        <h3>${card3Title}</h3>
        <p>${card3Desc}</p>
      </div>
    </div>

    <div class="item" style="background-image: url('${card4Img}');">
      <div class="item-desc">
        <h3>${card4Title}</h3>
        <p>${card4Desc}</p>
      </div>
    </div>

  </div>
</section>

<!-- jQuery + Owl Carousel JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
  $(document).ready(function () {
    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true
    });

    $(".custom-carousel .item").on("mouseenter", function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).addClass("active");
    }).on("mouseleave", function () {
      $(this).removeClass("active");
    });
  });
</script>`;
}

export default function CarouselSliderV3({ config }) {
  return null;
}