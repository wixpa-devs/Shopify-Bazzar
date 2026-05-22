// Named export — used by generateComponentCode.js and hero.registry.js
export function getHeroV4Code(config = {}) {
  const bgColor = config.bgColor || "#fdf2e9";
  const bgImageUrl = config.bgImageUrl || "";
  const headingText =
    config.headingText || "A healthy meal delivered to your door, every single day";
  const headingColor = config.headingColor || "#333";
  const descriptionText =
    config.descriptionText ||
    "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.";
  const descriptionColor = config.descriptionColor || "#555";

  const btn1Text = config.btn1Text || "Start eating well";
  const btn1Url = config.btn1Url || "#";
  const btn2Text = config.btn2Text || "Learn more ↓";
  const btn2Url = config.btn2Url || "#";

  const btn1Bg = config.btn1Bg || "#e67e22";
  const btn1Color = config.btn1Color || "#ffffff";
  const btn1HoverBg = config.btn1HoverBg || "#cf711f";
  const btn2Bg = config.btn2Bg || "#ffffff";
  const btn2Color = config.btn2Color || "#555";

  const heroImageUrl =
    config.heroImageUrl ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png";
  const customer1Url =
    config.customer1Url ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg";
  const customer2Url =
    config.customer2Url ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg";
  const customer3Url =
    config.customer3Url ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg";
  const customer4Url =
    config.customer4Url ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg";
  const customer5Url =
    config.customer5Url ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg";
  const customer6Url =
    config.customer6Url ||
    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg";

  const deliveredCount = config.deliveredCount || "250,000+";
  const deliveredText = config.deliveredText || "meals delivered last year!";
  const accentColor = config.accentColor || "#e67e22";
  const accentHoverColor = config.accentHoverColor || "#cf711f";
  const outlineBorderColor = config.outlineBorderColor || "#ffffff";

  return `<!-- Hero V4 — Split with Delivered Meals | Shopify Bazzar -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .herov4-root *,
  .herov4-root *::before,
  .herov4-root *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .herov4-root {
    font-family: "Rubik", sans-serif;
    font-size: 62.5%;
    line-height: 1;
    color: ${descriptionColor};
    font-weight: 400;
  }

  .herov4-section {
    background-color: ${bgColor};
    ${bgImageUrl ? `background-image: url('${bgImageUrl}');` : ""}
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    padding: clamp(2rem, 4vh, 4rem) 0;
  }

  .herov4-hero {
    width: 100%;
    max-width: 130rem;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    padding: 0 clamp(1.6rem, 3vw, 3.2rem);
    margin: 0 auto;
    align-items: center;
    gap: clamp(2rem, 4vw, 6.4rem);
  }

  .herov4-text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .herov4-heading {
    font-size: clamp(3.2rem, 5vw, 5.2rem);
    color: ${headingColor};
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.05;
    margin-bottom: clamp(1.6rem, 2.5vh, 3.2rem);
  }

  .herov4-description {
    font-size: clamp(1.5rem, 1.6vw, 2rem);
    line-height: 1.45;
    margin-bottom: clamp(2rem, 3vh, 4rem);
    color: ${descriptionColor};
    max-width: 58rem;
  }

  .herov4-img-box {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .herov4-img {
    width: 100%;
    max-width: clamp(28rem, 38vw, 52rem);
    max-height: 70svh;
    object-fit: contain;
  }

  .herov4-actions {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 1.5vw, 1.6rem);
    flex-wrap: wrap;
  }

  .herov4-btn:link,
  .herov4-btn:visited {
    display: inline-block;
    font-size: clamp(1.5rem, 1.4vw, 1.9rem);
    font-weight: 600;
    font-family: inherit;
    border: none;
    cursor: pointer;
    border-radius: 9px;
    padding: clamp(1.2rem, 1.5vw, 1.6rem) clamp(2rem, 2.5vw, 3.2rem);
    text-decoration: none;
    transition: background-color 500ms;
  }

  .herov4-btn--fill:link,
  .herov4-btn--fill:visited {
    background-color: ${btn1Bg};
    color: ${btn1Color};
  }

  .herov4-btn--outline:link,
  .herov4-btn--outline:visited {
    color: ${btn2Color};
    background-color: ${btn2Bg};
  }

  .herov4-btn--fill:hover,
  .herov4-btn--fill:active {
    background-color: ${btn1HoverBg};
    text-decoration: underline;
  }

  .herov4-btn--outline:hover,
  .herov4-btn--outline:active {
    background-color: ${bgColor};
    box-shadow: inset 0 0 0 3px ${outlineBorderColor};
    text-decoration: underline;
  }

  .herov4-delivered {
    display: flex;
    flex-direction: column;
    gap: clamp(1.2rem, 2vh, 2.4rem);
    margin-top: clamp(2rem, 4vh, 5.6rem);
  }

  .herov4-delivered-imgs {
    display: flex;
    align-items: center;
  }

  .herov4-delivered-imgs img {
    width: clamp(3.6rem, 4vw, 4.8rem);
    height: clamp(3.6rem, 4vw, 4.8rem);
    border-radius: 50%;
    margin-right: -1.2rem;
    outline: ${bgColor} solid 3px;
    object-fit: cover;
  }

  .herov4-delivered-imgs img:last-child {
    margin-right: 0;
  }

  .herov4-delivered-text {
    font-size: clamp(1.4rem, 1.5vw, 1.8rem);
    font-weight: 600;
    color: ${descriptionColor};
    line-height: 1.4;
  }

  .herov4-delivered-text span {
    color: ${accentHoverColor};
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .herov4-section {
      padding: 2.4rem 0;
    }

    .herov4-hero {
      grid-template-columns: 1fr;
      gap: 2.4rem;
      text-align: center;
    }

    .herov4-text-box {
      align-items: center;
      order: 2;
    }

    .herov4-description {
      max-width: 62rem;
    }

    .herov4-img-box {
      grid-column: auto;
      grid-row: auto;
      order: 1;
    }

    .herov4-img {
      max-width: min(100%, 36rem);
      max-height: 28svh;
    }

    .herov4-actions {
      justify-content: center;
    }

    .herov4-delivered {
      align-items: center;
      margin-top: 2.4rem;
    }
  }

  @media (max-width: 600px) {
    .herov4-root {
      font-size: 56.25%;
    }

    .herov4-section {
      padding: 1.6rem 0;
    }

    .herov4-hero {
      padding: 0 1.6rem;
      gap: 1.8rem;
    }

    .herov4-heading {
      font-size: clamp(2.8rem, 8vw, 3.6rem);
      margin-bottom: 1.2rem;
    }

    .herov4-description {
      font-size: 1.5rem;
      margin-bottom: 1.8rem;
      line-height: 1.5;
    }

    .herov4-actions {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    }

    .herov4-btn:link,
    .herov4-btn:visited {
      text-align: center;
      width: 100%;
    }

    .herov4-img {
      max-width: min(100%, 28rem);
      max-height: 24svh;
    }

    .herov4-delivered {
      gap: 1.2rem;
      margin-top: 1.8rem;
      align-items: center;
    }

    .herov4-delivered-text {
      text-align: center;
    }
  }

  @media (max-height: 760px) {
    .herov4-section {
      padding: 1.2rem 0;
    }

    .herov4-hero {
      gap: 1.6rem;
    }

    .herov4-heading {
      margin-bottom: 1.2rem;
    }

    .herov4-description {
      margin-bottom: 1.6rem;
    }

    .herov4-delivered {
      margin-top: 1.6rem;
      gap: 1rem;
    }

    .herov4-img {
      max-height: 22rem;
    }
  }
</style>

<div class="herov4-root">
  <section class="herov4-section">
    <div class="herov4-hero">

      <div class="herov4-text-box">
        <h1 class="herov4-heading">${headingText}</h1>
        <p class="herov4-description">${descriptionText}</p>
        <div class="herov4-actions">
          <a href="${btn1Url}" class="herov4-btn herov4-btn--fill">${btn1Text}</a>
          <a href="${btn2Url}" class="herov4-btn herov4-btn--outline">${btn2Text}</a>
        </div>
        <div class="herov4-delivered">
          <div class="herov4-delivered-imgs">
            <img src="${customer1Url}" alt="Customer photo" />
            <img src="${customer2Url}" alt="Customer photo" />
            <img src="${customer3Url}" alt="Customer photo" />
            <img src="${customer4Url}" alt="Customer photo" />
            <img src="${customer5Url}" alt="Customer photo" />
            <img src="${customer6Url}" alt="Customer photo" />
          </div>
          <p class="herov4-delivered-text">
            <span>${deliveredCount}</span> ${deliveredText}
          </p>
        </div>
      </div>

      <div class="herov4-img-box">
        <img
          src="${heroImageUrl}"
          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
          class="herov4-img"
        />
      </div>

    </div>
  </section>
</div>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function HeroV4({ config }) {
  return null;
}

