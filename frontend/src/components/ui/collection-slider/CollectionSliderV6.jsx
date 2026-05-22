export function getCollectionSliderV6Code(config = {}) {
  const bgLight = config.bgLight || "rgb(248, 244, 238)";
  const bgDark = config.bgDark || "rgb(16, 24, 40)";
  const txtLight = config.txtLight || "rgb(10, 10, 10)";
  const txtDark = config.txtDark || "rgb(245, 245, 245)";
  const cardBorderRadius = config.cardBorderRadius || "14px";
  const captionFont = config.captionFont || "inherit";

  const img1Url = config.img1Url || "https://picsum.photos/id/634/1200/1200";
  const img1Title = config.img1Title || "A Misty Morning";
  const img2Url = config.img2Url || "https://picsum.photos/id/228/1200/1200";
  const img2Title = config.img2Title || "Harvest";
  const img3Url = config.img3Url || "https://picsum.photos/id/661/1200/1200";
  const img3Title = config.img3Title || "Waiting";
  const img4Url = config.img4Url || "https://picsum.photos/id/380/1200/1200";
  const img4Title = config.img4Title || "Time for Everything";
  const img5Url = config.img5Url || "https://picsum.photos/id/392/1200/1200";
  const img5Title = config.img5Title || "Cross Over";
  const img6Url = config.img6Url || "https://picsum.photos/id/238/1200/1200";
  const img6Title = config.img6Title || "In The City";
  const img7Url = config.img7Url || "https://picsum.photos/id/469/1200/1200";
  const img7Title = config.img7Title || "A Boat Trip";
  const img8Url = config.img8Url || "https://picsum.photos/id/311/1200/1200";
  const img8Title = config.img8Title || "Waiting";
  const img9Url = config.img9Url || "https://picsum.photos/id/515/1200/1200";
  const img9Title = config.img9Title || "Stories to Tell";
  const img10Url = config.img10Url || "https://picsum.photos/id/521/1200/1200";
  const img10Title = config.img10Title || "A Perfect Day";
  const img11Url = config.img11Url || "https://picsum.photos/id/549/1200/1200";
  const img11Title = config.img11Title || "Riding the Curve";
  const img12Url = config.img12Url || "https://picsum.photos/id/178/1200/1200";
  const img12Title = config.img12Title || "Raindrops";
  const img13Url = config.img13Url || "https://picsum.photos/id/637/1200/1200";
  const img13Title = config.img13Title || "Gone Sailing";
  const img14Url = config.img14Url || "https://picsum.photos/id/641/1200/1200";
  const img14Title = config.img14Title || "The Watch Tower";
  const img15Url = config.img15Url || "https://picsum.photos/id/669/1200/1200";
  const img15Title = config.img15Title || "Leaving";
  const img16Url = config.img16Url || "https://picsum.photos/id/685/1200/1200";
  const img16Title = config.img16Title || "Above the Clouds";
  const img17Url = config.img17Url || "https://picsum.photos/id/505/1200/1200";
  const img17Title = config.img17Title || "Golden Hour";
  const img18Url = config.img18Url || "https://picsum.photos/id/699/1200/1200";
  const img18Title = config.img18Title || "Far Away";
  const img19Url = config.img19Url || "https://picsum.photos/id/513/1200/1200";
  const img19Title = config.img19Title || "Into the Wild";
  const img20Url = config.img20Url || "https://picsum.photos/id/773/1200/1200";
  const img20Title = config.img20Title || "Contemplation";

  return `<!-- Collection Slider V6 — Shopify-safe section scroll -->
<section class="cs6-root" data-cs6>
  <style>
    .cs6-root,
    .cs6-root * ,
    .cs6-root *::before,
    .cs6-root *::after {
      box-sizing: border-box;
    }

    .cs6-root {
      --cs6-bg-light: ${bgLight};
      --cs6-bg-dark: ${bgDark};
      --cs6-txt-light: ${txtLight};
      --cs6-txt-dark: ${txtDark};
      --cs6-card-radius: ${cardBorderRadius};
      --cs6-caption-font: ${captionFont};

      --cs6-bg: ${bgLight};
      --cs6-txt: ${txtLight};

      position: relative;
      width: 100%;
      background: var(--cs6-bg);
      color: var(--cs6-txt);
      font-family: inherit;
      overflow: clip;
      isolation: isolate;
    }

    @media (prefers-color-scheme: dark) {
      .cs6-root {
        --cs6-bg: var(--cs6-bg-dark);
        --cs6-txt: var(--cs6-txt-dark);
      }
    }

    .cs6-shell {
      position: relative;
      width: 100%;
      min-height: 100vh;
      background: var(--cs6-bg);
      color: var(--cs6-txt);
    }

    .cs6-scroll-track {
      position: relative;
      height: calc(100vh + 20 * 160px);
    }

    .cs6-stage {
      position: sticky;
      top: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: var(--cs6-bg);
    }

    .cs6-deck {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
    }

    .cs6-card {
      position: absolute;
      left: 0;
      top: 0;
      will-change: transform, filter, opacity;
      transition: filter 120ms ease, opacity 120ms ease;
      transform-origin: center center;
    }

    .cs6-card-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--cs6-card-radius);
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      background: rgba(0,0,0,0.05);
    }

    .cs6-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      pointer-events: none;
      -webkit-user-drag: none;
      user-select: none;
    }

    .cs6-caption {
      position: absolute;
      top: calc(100% + 14px);
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      font-family: var(--cs6-caption-font);
      font-size: clamp(0.95rem, 1.8vw, 1.4rem);
      color: var(--cs6-txt);
      opacity: 0;
      transition: opacity 250ms ease, translate 250ms ease;
      pointer-events: none;
      text-align: center;
    }

    .cs6-hint {
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      translate: -50% 0;
      color: var(--cs6-txt);
      opacity: 1;
      transition: opacity 500ms ease;
      pointer-events: none;
      z-index: 10;
    }

    .cs6-hint.hide {
      opacity: 0;
    }

    @media (max-width: 767px) {
      .cs6-scroll-track {
        height: calc(100svh + 20 * 140px);
      }

      .cs6-stage {
        height: 100svh;
      }

      .cs6-hint {
        bottom: 1rem;
      }
    }
  </style>

  <div class="cs6-shell">
    <div class="cs6-scroll-track" data-cs6-track>
      <div class="cs6-stage">
        <div class="cs6-deck" data-cs6-deck></div>

        <div class="cs6-hint" data-cs6-hint>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50"
               viewBox="0 0 24 40" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z"/>
            <path d="M12 7l0 4"/>
            <path d="M8 26l4 4l4 -4">
              <animateTransform attributeType="XML" attributeName="transform"
                type="translate" values="0 0; 0 4; 0 0" dur="1s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <script>
    (function () {
      var root = document.currentScript.closest('[data-cs6]');
      if (!root) return;

      var deck = root.querySelector('[data-cs6-deck]');
      var hint = root.querySelector('[data-cs6-hint]');
      var track = root.querySelector('[data-cs6-track]');

      var DATA = [
        { url: "${img1Url}",  title: "${img1Title}"  },
        { url: "${img2Url}",  title: "${img2Title}"  },
        { url: "${img3Url}",  title: "${img3Title}"  },
        { url: "${img4Url}",  title: "${img4Title}"  },
        { url: "${img5Url}",  title: "${img5Title}"  },
        { url: "${img6Url}",  title: "${img6Title}"  },
        { url: "${img7Url}",  title: "${img7Title}"  },
        { url: "${img8Url}",  title: "${img8Title}"  },
        { url: "${img9Url}",  title: "${img9Title}"  },
        { url: "${img10Url}", title: "${img10Title}" },
        { url: "${img11Url}", title: "${img11Title}" },
        { url: "${img12Url}", title: "${img12Title}" },
        { url: "${img13Url}", title: "${img13Title}" },
        { url: "${img14Url}", title: "${img14Title}" },
        { url: "${img15Url}", title: "${img15Title}" },
        { url: "${img16Url}", title: "${img16Title}" },
        { url: "${img17Url}", title: "${img17Title}" },
        { url: "${img18Url}", title: "${img18Title}" },
        { url: "${img19Url}", title: "${img19Title}" },
        { url: "${img20Url}", title: "${img20Title}" }
      ];

      var N = DATA.length;
      var STEP = window.innerWidth < 768 ? 140 : 160;
      var cardEls = [];
      var cardW = 220;
      var cardH = 330;
      var cardGap = 300;
      var viewportW = 0;
      var viewportH = 0;
      var ticking = false;

      function buildCards() {
        deck.innerHTML = '';
        cardEls = [];

        DATA.forEach(function (d, i) {
          var card = document.createElement('div');
          card.className = 'cs6-card';

          var inner = document.createElement('div');
          inner.className = 'cs6-card-inner';

          var img = document.createElement('img');
          img.src = d.url;
          img.alt = d.title;
          img.loading = i < 4 ? 'eager' : 'lazy';
          img.decoding = 'async';

          var cap = document.createElement('div');
          cap.className = 'cs6-caption';
          cap.textContent = d.title;

          inner.appendChild(img);
          card.appendChild(inner);
          card.appendChild(cap);
          deck.appendChild(card);
          cardEls.push(card);
        });
      }

      function measure() {
        var rect = root.getBoundingClientRect();
        viewportW = Math.max(root.clientWidth, rect.width, window.innerWidth || 0);
        viewportH = window.innerHeight || document.documentElement.clientHeight || 0;

        STEP = window.innerWidth < 768 ? 140 : 160;
        cardW = Math.round(Math.min(Math.max(viewportW * 0.20, 120), 260));
        cardH = Math.round(cardW * 6 / 4);
        cardGap = Math.round(cardW * 1.62);

        track.style.height = 'calc(100vh + ' + N + ' * ' + STEP + 'px)';

        cardEls.forEach(function (el) {
          el.style.width = cardW + 'px';
          el.style.height = cardH + 'px';
        });

        deck.style.left = Math.round(viewportW / 2) + 'px';
        deck.style.top = Math.round(viewportH / 2 - cardH * 0.08) + 'px';
      }

      function render(activeIdx) {
        cardEls.forEach(function (el, i) {
          var offset = i - activeIdx;
          var absOff = Math.abs(offset);
          var cap = el.querySelector('.cs6-caption');

          if (absOff > 3.2) {
            el.style.opacity = '0';
            el.style.zIndex = '0';
            el.style.transform = 'translateX(-50%) translateY(-50%)';
            el.style.filter = '';
            cap.style.opacity = '0';
            return;
          }

          var x = offset * cardGap;
          var y = absOff * absOff * 20;
          var tilt = offset * 15;
          var scale = Math.max(1 - absOff * 0.12, 0.55);
          var blur = Math.min(absOff * 3.5, 10);
          var grayscale = Math.min(absOff * 0.45, 1);
          var opacity = Math.max(1 - absOff * 0.28, 0.08);
          var z = Math.round(100 - absOff * 20);
          var capOpacity = Math.max(1 - absOff * 0.6, 0);

          el.style.transform = [
            'translateX(-50%)',
            'translateY(-50%)',
            'translateX(' + x + 'px)',
            'translateY(' + y + 'px)',
            'rotate(' + tilt + 'deg)',
            'scale(' + scale + ')'
          ].join(' ');

          el.style.filter = 'blur(' + blur + 'px) grayscale(' + grayscale + ')';
          el.style.opacity = String(opacity);
          el.style.zIndex = String(z);

          cap.style.opacity = String(capOpacity);
          cap.style.translate = '0 ' + (absOff < 0.05 ? '0px' : '6px');
        });
      }

      function getSectionProgress() {
        var rect = root.getBoundingClientRect();
        var maxTravel = Math.max(root.offsetHeight - viewportH, 1);
        var passed = Math.min(Math.max(-rect.top, 0), maxTravel);
        return passed / maxTravel;
      }

      function update() {
        ticking = false;

        var progress = getSectionProgress();
        var activeIdx = Math.min(Math.max(progress * (N - 1), 0), N - 1);

        render(activeIdx);

        if (progress > 0.04) hint.classList.add('hide');
        else hint.classList.remove('hide');
      }

      function requestUpdate() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      }

      function init() {
        buildCards();
        measure();
        update();

        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', function () {
          measure();
          requestUpdate();
        }, { passive: true });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
      } else {
        init();
      }
    })();
  </script>
</section>`;
}

export default function CollectionSliderV6({ config }) {
  return null;
}