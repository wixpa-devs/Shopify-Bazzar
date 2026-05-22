export function getProcessCardV1Code(config = {}) {
  const bgColor = config.bgColor || "#f5f5f5";
  const textColor = config.textColor || "#1a1a1a";
  const cardBg = config.cardBg || "#ffffff";
  const accentColor = config.accentColor || "#1a1a1a";
  const descColor = config.descColor || "#555555";
  const cardDescColor = config.cardDescColor || "#666666";

  const sectionTitle = config.sectionTitle || "3 Simple Steps to Start Your Day Productively";
  const sectionDesc = config.sectionDesc || "Boost your focus and energy from the moment you wake up with these easy daily habits.";

  // Card 1
  const card1Number = config.card1Number || "1";
  const card1Title = config.card1Title || "Plan Ahead";
  const card1Desc = config.card1Desc || "Write down 3 key tasks you want to accomplish today before checking your phone.";
  const card1Img = config.card1Img || "https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/plan.jpg";
  const card1ImgAlt = config.card1ImgAlt || "Plan Ahead";

  // Card 2
  const card2Number = config.card2Number || "2";
  const card2Title = config.card2Title || "Get Moving";
  const card2Desc = config.card2Desc || "Do a short workout, stretch, or walk to activate your energy and improve your focus.";
  const card2Img = config.card2Img || "https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/moving.jpg";
  const card2ImgAlt = config.card2ImgAlt || "Get Moving";

  // Card 3
  const card3Number = config.card3Number || "3";
  const card3Title = config.card3Title || "Find Calm";
  const card3Desc = config.card3Desc || "Spend a few quiet minutes meditating, journaling, or just breathing mindfully before diving into work.";
  const card3Img = config.card3Img || "https://arman-borkhani.github.io/codepen-cpc-css-shape/assets/calm.jpg";
  const card3ImgAlt = config.card3ImgAlt || "Find Calm";

  // Optional: allow explicit font injection from theme (e.g. "var(--font-body-family)")
  const fontFamily = config.fontFamily || "inherit";

  return `<!-- Process Card V1 — Steps Swiper | Shopify Bazzar -->

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

<style>
  .pc1-wrapper, .pc1-wrapper * , .pc1-wrapper *::before, .pc1-wrapper *::after {
    box-sizing: border-box;
  }

  .pc1-wrapper {
    font-family: ${fontFamily};
    background-color: ${bgColor};
    color: ${textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem 1rem;
  }

  .pc1-section {
    width: 100%;
    max-width: 940px;
    padding: 40px 16px;
    text-align: center;
  }

  .pc1-section-title {
    font-size: clamp(1.4rem, 3vw + 0.5rem, 1.8rem);
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${textColor};
    font-family: inherit;
  }

  .pc1-section-desc {
    color: ${descColor};
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 40px;
    font-family: inherit;
  }

  /* ── Card wrapper ── */
  .pc1-card-wrapper {
    position: relative;
  }

  /* ── Notched card using clip-path shape() ── */
  .pc1-card {
    --r: 30px;
    --s: 40px;
    background-color: ${cardBg};
    padding: 24px;
    width: 100%;
    text-align: left;
    border-radius: 30px;
    clip-path: shape(
      from 0 0,
      hline to calc(100% - var(--s) - 2 * var(--r)),
      arc by var(--r) var(--r) of var(--r) cw,
      arc by var(--s) var(--s) of var(--s),
      arc by var(--r) var(--r) of var(--r) cw,
      vline to 100%,
      hline to 0
    );
    font-family: inherit;
  }

  /* ── Fallback for browsers without shape() support ── */
  @supports not (clip-path: shape(from 0 0, move to 0 0)) {
    .pc1-card {
      clip-path: none;
      border-radius: 30px;
      border: 1px solid rgba(0,0,0,0.08);
    }
  }

  /* ── Circle number badge ── */
  .pc1-card-circle {
    width: 60px;
    height: 60px;
    background-color: ${cardBg};
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: ${accentColor};
    z-index: 1;
    font-family: inherit;
  }

  .pc1-card-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    padding-right: 70px;
    color: ${textColor};
    font-family: inherit;
  }

  .pc1-card-desc {
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${cardDescColor};
    margin-bottom: 12px;
    padding-right: 65px;
    font-family: inherit;
  }

  .pc1-card-figure {
    height: 200px;
    background-color: #eee;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    margin: 0;
  }

  .pc1-card-img {
    height: 100%;
    position: absolute;
    width: 100%;
    inset: 0;
    object-fit: cover;
    display: block;
  }

  /* ── Swiper pagination ── */
  .pc1-swiper .swiper-pagination {
    position: static;
    margin-top: 24px;
  }

  .pc1-swiper .swiper-pagination-bullet-active {
    background: ${accentColor};
  }

  /* ── Responsive tweaks ── */
  @media (max-width: 767px) {
    .pc1-section {
      padding: 24px 8px;
    }
    .pc1-card-figure {
      height: 160px;
    }
  }
</style>

<div class="pc1-wrapper">
  <section class="pc1-section">

    <h2 class="pc1-section-title">${sectionTitle}</h2>
    <p class="pc1-section-desc">${sectionDesc}</p>

    <div class="swiper pc1-swiper steps">
      <div class="swiper-wrapper">

        <!-- Card 1 -->
        <div class="swiper-slide">
          <article class="pc1-card-wrapper">
            <div class="pc1-card-circle">${card1Number}</div>
            <div class="pc1-card">
              <h3 class="pc1-card-title">${card1Title}</h3>
              <p class="pc1-card-desc">${card1Desc}</p>
              <figure class="pc1-card-figure">
                <img class="pc1-card-img" src="${card1Img}" alt="${card1ImgAlt}" loading="lazy">
              </figure>
            </div>
          </article>
        </div>

        <!-- Card 2 -->
        <div class="swiper-slide">
          <article class="pc1-card-wrapper">
            <div class="pc1-card-circle">${card2Number}</div>
            <div class="pc1-card">
              <h3 class="pc1-card-title">${card2Title}</h3>
              <p class="pc1-card-desc">${card2Desc}</p>
              <figure class="pc1-card-figure">
                <img class="pc1-card-img" src="${card2Img}" alt="${card2ImgAlt}" loading="lazy">
              </figure>
            </div>
          </article>
        </div>

        <!-- Card 3 -->
        <div class="swiper-slide">
          <article class="pc1-card-wrapper">
            <div class="pc1-card-circle">${card3Number}</div>
            <div class="pc1-card">
              <h3 class="pc1-card-title">${card3Title}</h3>
              <p class="pc1-card-desc">${card3Desc}</p>
              <figure class="pc1-card-figure">
                <img class="pc1-card-img" src="${card3Img}" alt="${card3ImgAlt}" loading="lazy">
              </figure>
            </div>
          </article>
        </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>

  </section>
</div>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  new Swiper(".pc1-swiper.steps", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
      el: ".pc1-swiper .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
</script>`;
}

export default function ProcessCardV1({ config }) {
  return null;
}