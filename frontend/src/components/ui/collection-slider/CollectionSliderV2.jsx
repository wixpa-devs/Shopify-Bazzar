export function getCollectionSliderV2Code(config = {}) {
  const bgColor = config.bgColor || "#e6ddd7";
  const cardBg = config.cardBg || "#ffffff";
  const cardBorderRadius = config.cardBorderRadius || "10px";
  const linkColor = config.linkColor || "#0077cc";
  const dotActiveBg = config.dotActiveBg || "#000000";
  const dotInactiveBg = config.dotInactiveBg || "#cccccc";
  const scrollText = config.scrollText || "SCROLL RIGHT";
  const card1Label = config.card1Label || "Numero1";
  const card1LinkText = config.card1LinkText || "SHOP NOW";
  const card1LinkUrl = config.card1LinkUrl || "#";
  const card1Heading = config.card1Heading || "Welcome";
  const card1Body = config.card1Body || "Discover new sales & fitness updates everyday.";
  const card1Img1 = config.card1CollectionUrl || config.card1Img1 || "https://picsum.photos/400/300?random=1";
  const card1Img2 = config.card1CollectionUrl || config.card1Img2 || "https://picsum.photos/400/300?random=2";
  const card1Img3 = config.card1CollectionUrl || config.card1Img3 || "https://picsum.photos/400/300?random=3";

  const card2Label = config.card2Label || "Numero2";
  const card2LinkText = config.card2LinkText || "SHOP NOW";
  const card2LinkUrl = config.card2LinkUrl || "#";
  const card2Heading = config.card2Heading || "Browse";
  const card2Body = config.card2Body || "Find all best deals in one place.";
  const card2Img1 = config.card2CollectionUrl || config.card2Img1 || "https://picsum.photos/400/300?random=4";
  const card2Img2 = config.card2CollectionUrl || config.card2Img2 || "https://picsum.photos/400/300?random=5";
  const card2Img3 = config.card2CollectionUrl || config.card2Img3 || "https://picsum.photos/400/300?random=6";

  const card3Label = config.card3Label || "Numero3";
  const card3LinkText = config.card3LinkText || "SHOP NOW";
  const card3LinkUrl = config.card3LinkUrl || "#";
  const card3Heading = config.card3Heading || "Ready, set..";
  const card3Body = config.card3Body || "Find the perfect fit for you.";
  const card3Img1 = config.card3CollectionUrl || config.card3Img1 || "https://picsum.photos/400/300?random=7";
  const card3Img2 = config.card3CollectionUrl || config.card3Img2 || "https://picsum.photos/400/300?random=8";
  const card3Img3 = config.card3CollectionUrl || config.card3Img3 || "https://picsum.photos/400/300?random=9";

  return `
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .cs2-container {
    overflow: hidden;
    padding: 20px;
    background: ${bgColor};
  }

  .cs2-cards-wrapper {
    display: flex;
    gap: 20px;
  }

  .cs2-card {
    min-width: calc(33.33% - 20px);
    background: ${cardBg};
    padding: 25px;
    border-radius: ${cardBorderRadius};
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cs2-card-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .cs2-card-header a {
    text-decoration: none;
    color: ${linkColor};
    font-weight: bold;
    cursor: pointer;
  }

  .cs2-slider {
    overflow: hidden;
    height: 350px;
    margin-bottom: 20px;
  }

  .cs2-slider-track {
    display: flex;
    transition: transform 0.5s ease;
  }

  .cs2-slider img {
    min-width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
  }

  .cs2-heading {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .cs2-body {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }

  .cs2-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cs2-dots {
    display: flex;
    gap: 5px;
  }

  .cs2-dot {
    width: 8px;
    height: 8px;
    background: ${dotInactiveBg};
    border-radius: 50%;
    cursor: pointer;
  }

  .cs2-dot.active {
    background: ${dotActiveBg};
  }

  .cs2-scroll-text {
    font-size: 12px;
  }

  .cs2-next-btn {
    border: none;
    background: transparent;
    color: black;
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .cs2-card {
      min-width: calc(50% - 20px);
      height: 700px;
    }
  }

  @media (max-width: 600px) {
    .cs2-card {
      min-width: 100%;
      height: 750px;
    }
  }
</style>

<div class="cs2-container">
  <div class="cs2-cards-wrapper">

    <!-- CARD 1 -->
    <div class="cs2-card">
      <div class="cs2-card-header">
        <span>${card1Label}</span>
        <a href="${card1LinkUrl}" target="_blank">${card1LinkText}</a>
      </div>
      <div class="cs2-slider">
        <div class="cs2-slider-track">
          <img src="${card1Img1}" alt="${card1Heading} slide 1" />
          <img src="${card1Img2}" alt="${card1Heading} slide 2" />
          <img src="${card1Img3}" alt="${card1Heading} slide 3" />
        </div>
      </div>
      <h2 class="cs2-heading">${card1Heading}</h2>
      <p class="cs2-body">${card1Body}</p>
      <div class="cs2-card-footer">
        <div class="cs2-dots"></div>
        <div class="cs2-scroll-text">${scrollText}</div>
        <button class="cs2-next-btn">→</button>
      </div>
    </div>

    <!-- CARD 2 -->
    <div class="cs2-card">
      <div class="cs2-card-header">
        <span>${card2Label}</span>
        <a href="${card2LinkUrl}" target="_blank">${card2LinkText}</a>
      </div>
      <div class="cs2-slider">
        <div class="cs2-slider-track">
          <img src="${card2Img1}" alt="${card2Heading} slide 1" />
          <img src="${card2Img2}" alt="${card2Heading} slide 2" />
          <img src="${card2Img3}" alt="${card2Heading} slide 3" />
        </div>
      </div>
      <h2 class="cs2-heading">${card2Heading}</h2>
      <p class="cs2-body">${card2Body}</p>
      <div class="cs2-card-footer">
        <div class="cs2-dots"></div>
        <div class="cs2-scroll-text">${scrollText}</div>
        <button class="cs2-next-btn">→</button>
      </div>
    </div>

    <!-- CARD 3 -->
    <div class="cs2-card">
      <div class="cs2-card-header">
        <span>${card3Label}</span>
        <a href="${card3LinkUrl}" target="_blank">${card3LinkText}</a>
      </div>
      <div class="cs2-slider">
        <div class="cs2-slider-track">
          <img src="${card3Img1}" alt="${card3Heading} slide 1" />
          <img src="${card3Img2}" alt="${card3Heading} slide 2" />
          <img src="${card3Img3}" alt="${card3Heading} slide 3" />
        </div>
      </div>
      <h2 class="cs2-heading">${card3Heading}</h2>
      <p class="cs2-body">${card3Body}</p>
      <div class="cs2-card-footer">
        <div class="cs2-dots"></div>
        <div class="cs2-scroll-text">${scrollText}</div>
        <button class="cs2-next-btn">→</button>
      </div>
    </div>

  </div>
</div>

<script>
  (function () {
    document.querySelectorAll(".cs2-card").forEach(function (card) {
      var track = card.querySelector(".cs2-slider-track");
      var images = track.querySelectorAll("img");
      var dotsContainer = card.querySelector(".cs2-dots");
      var btn = card.querySelector(".cs2-next-btn");
      var index = 0;
      var isTransitioning = false;

      var firstClone = images[0].cloneNode(true);
      track.appendChild(firstClone);

      images.forEach(function (_, i) {
        var dot = document.createElement("span");
        dot.classList.add("cs2-dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", function () {
          if (isTransitioning) return;
          index = i;
          update();
        });
        dotsContainer.appendChild(dot);
      });

      var dots = dotsContainer.querySelectorAll(".cs2-dot");

      function update(transition) {
        if (transition === false) {
          track.style.transition = "none";
        } else {
          track.style.transition = "transform 0.5s ease";
        }
        track.style.transform = \`translateX(-\${index * 100}%)\`;
        dots.forEach(function (d) { d.classList.remove("active"); });
        dots[index % images.length].classList.add("active");
      }

      function next() {
        if (isTransitioning) return;
        isTransitioning = true;
        index++;
        update();
        if (index === images.length) {
          setTimeout(function () {
            index = 0;
            update(false);
            isTransitioning = false;
          }, 500);
        } else {
          setTimeout(function () { isTransitioning = false; }, 500);
        }
      }

      setInterval(next, 3000);
      btn.addEventListener("click", next);
    });
  })();
</script>
  `;
}

export default function CollectionSliderV2({ config }) {
  return null;
}