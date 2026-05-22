export function getCarouselSliderV2Code(config = {}) {
  const bgColor = config.bgColor || "#f5f6f8";
  const textColor = config.textColor || "#111111";
  const accentColor = config.accentColor || "#471aa0";
  const linkColor = config.linkColor || "#4fc08d";

  const sectionLabel = config.sectionLabel || "top cities";
  const heading = config.heading || "Our popular cities";
  const subtext = config.subtext || "We are a team of humans with the strategy, tools, and solutions and digital products.";

  // Card 1
  const card1Img = config.card1Img || "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card1Country = config.card1Country || "Great Britain";
  const card1City = config.card1City || "London";
  const card1Places = config.card1Places || "12 Popular places";

  // Card 2
  const card2Img = config.card2Img || "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card2Country = config.card2Country || "Indonesia";
  const card2City = config.card2City || "Bali";
  const card2Places = config.card2Places || "10 Popular places";

  // Card 3
  const card3Img = config.card3Img || "https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card3Country = config.card3Country || "Spain";
  const card3City = config.card3City || "Barcelona";
  const card3Places = config.card3Places || "10 Popular places";

  // Card 4
  const card4Img = config.card4Img || "https://images.pexels.com/photos/4046386/pexels-photo-4046386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card4Country = config.card4Country || "Italy";
  const card4City = config.card4City || "Florence";
  const card4Places = config.card4Places || "10 Popular places";

  // Card 5
  const card5Img = config.card5Img || "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card5Country = config.card5Country || "United Arab Emirates";
  const card5City = config.card5City || "Dubai";
  const card5Places = config.card5Places || "10 Popular places";

  // Card 6
  const card6Img = config.card6Img || "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg";
  const card6Country = config.card6Country || "France";
  const card6City = config.card6City || "Paris";
  const card6Places = config.card6Places || "12 Popular places";

  // Card 7
  const card7Img = config.card7Img || "https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card7Country = config.card7Country || "New Zealand";
  const card7City = config.card7City || "West Coast";
  const card7Places = config.card7Places || "12 Popular places";

  // Card 8
  const card8Img = config.card8Img || "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const card8Country = config.card8Country || "Italy";
  const card8City = config.card8City || "Venice";
  const card8Places = config.card8Places || "12 Popular places";

  return `<!-- Carousel Slider V2 — Popular Cities | Shopify Bazzar -->

<!-- Owl Carousel CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"/>
<!-- Google Font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Inter", sans-serif;
    color: ${textColor};
    background: ${bgColor};
  }

  a, button {
    color: ${linkColor};
  }

  .cs2-main {
    width: min(980px, 85%);
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: min(20vh, 5em);
  }

  /* ── Header ── */
  .cs2-header {
    margin-bottom: 55px;
    position: relative;
  }
  @media screen and (max-width: 600px) {
    .cs2-header {
      margin-bottom: 70px;
    }
  }
  .cs2-header h1 {
    font-weight: 800;
    font-size: clamp(1.75rem, 4vw + 0.5rem, 3rem);
    margin: 5px -5px 15px;
    color: ${textColor};
  }
  .cs2-header span {
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    color: ${accentColor};
  }
  .cs2-header p {
    max-width: min(40ch, 100% - 2rem);
    line-height: 1.6;
    color: #565656;
  }

  /* ── Carousel wrapper — relative so nav can position ── */
  .cs2-carousel-wrap {
    position: relative;
  }

  /* ── Owl nav ── */
  .owl-nav {
    position: absolute;
    top: -100px;
    right: 0;
  }
  @media screen and (max-width: 600px) {
    .owl-nav {
      top: -60px;
    }
  }
  .owl-nav button {
    background: #fff !important;
    width: 45px;
    height: 45px;
    font-size: 25px !important;
    box-shadow: 0px 0px 17px rgba(0,0,0,0.04);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
  }
  .owl-nav button:hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.12);
  }
  .owl-nav button:nth-of-type(1) {
    margin-right: 13px;
  }

  /* ── Card item ── */
  .cs2-item {
    width: 100%;
    height: 400px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
  }
  .cs2-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    display: block;
  }
  .cs2-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 28px 25px;
    color: #fff;
    background: linear-gradient(0deg, #020024 0%, rgba(0,0,50,0.63) 3%, rgba(23,217,255,0) 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .cs2-overlay span {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 60px;
    padding: 10px 20px;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .cs2-overlay-bottom h2 {
    letter-spacing: 0.5px;
    margin-bottom: 5px;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
  }
  .cs2-overlay-bottom p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.85);
    margin: 0;
  }

  /* ── Owl dots: hide default ── */
  .owl-dots { display: none; }
</style>

<main class="cs2-main">

  <div class="cs2-header">
    <span>${sectionLabel}</span>
    <h1>${heading}</h1>
    <p>${subtext}</p>
  </div>

  <div class="cs2-carousel-wrap">
    <div class="owl-carousel owl-theme">

      <div class="cs2-item item">
        <img src="${card1Img}" alt="${card1Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card1Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card1City}</h2>
            <p>${card1Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card2Img}" alt="${card2Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card2Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card2City}</h2>
            <p>${card2Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card3Img}" alt="${card3Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card3Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card3City}</h2>
            <p>${card3Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card4Img}" alt="${card4Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card4Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card4City}</h2>
            <p>${card4Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card5Img}" alt="${card5Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card5Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card5City}</h2>
            <p>${card5Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card6Img}" alt="${card6Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card6Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card6City}</h2>
            <p>${card6Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card7Img}" alt="${card7Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card7Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card7City}</h2>
            <p>${card7Places}</p>
          </div>
        </div>
      </div>

      <div class="cs2-item item">
        <img src="${card8Img}" alt="${card8Country}" loading="lazy">
        <div class="cs2-overlay">
          <span>${card8Country}</span>
          <div class="cs2-overlay-bottom">
            <h2>${card8City}</h2>
            <p>${card8Places}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</main>

<!-- jQuery + Owl Carousel JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0:   { items: 1 },
        600: { items: 3 }
      }
    });
  });
</script>`;
}

export default function CarouselSliderV2({ config }) {
  return null;
}