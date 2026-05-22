import React, { useEffect, useId, useMemo, useRef } from "react";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

const baseConfig = {
  slide1LeftImage: "https://zoric.studio/codepen/swiper-1.jpg",
  slide1RightImage: "https://zoric.studio/codepen/swiper-2.jpg",
  slide1Title: "A",
  slide1Emphasis: "Breath",
  slide1Subtitle: "Of Fresh Air.",
  slide1Chapter: "Chapter I, page XV",
  slide1Paragraph:
    "A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay hands on.",

  slide2LeftImage: "https://zoric.studio/codepen/swiper-3.jpg",
  slide2RightImage: "https://zoric.studio/codepen/swiper-4.jpg",
  slide2Title: "The",
  slide2Emphasis: "Drop",
  slide2Subtitle: "Of Eternal Life.",
  slide2Chapter: "Chapter II, page VII",
  slide2Paragraph:
    "A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.",

  slide3LeftImage: "https://zoric.studio/codepen/swiper-5.jpg",
  slide3RightImage: "https://zoric.studio/codepen/swiper-6.jpg",
  slide3Title: "A",
  slide3Emphasis: "Sense",
  slide3Subtitle: "Of Things to Come.",
  slide3Chapter: "Chapter III, page XI",
  slide3Paragraph:
    "Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours' faults, the one behind his own.",

  titleColor: "#ffffff",
  emphasisColor: "#ffffff",
  subtitleColor: "#ffffff",
  chapterColor: "#ffffff",
  paragraphColor: "#ffffff",
  paginationColor: "#ffffff",
};

function getSliderStyles(scopeId, c) {
  return `
    @import url('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css');

    #${scopeId},
    #${scopeId} *,
    #${scopeId} *::before,
    #${scopeId} *::after {
      box-sizing: border-box;
    }

    #${scopeId} {
      --slider-title-color: ${escapeAttr(c.titleColor)};
      --slider-emphasis-color: ${escapeAttr(c.emphasisColor)};
      --slider-subtitle-color: ${escapeAttr(c.subtitleColor)};
      --slider-chapter-color: ${escapeAttr(c.chapterColor)};
      --slider-paragraph-color: ${escapeAttr(c.paragraphColor)};
      --slider-pagination-color: ${escapeAttr(c.paginationColor)};
      width: 100%;
      height: 100vh;
      position: relative;
      overflow: hidden;
    }

    #${scopeId} .slider-v3-swiper {
      width: 100%;
      height: 100%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    #${scopeId} .swiper-wrapper {
      height: 100%;
    }

    #${scopeId} .swiper-slide {
      display: flex;
      width: 100%;
      height: 100%;
      background: #ffffff;
      overflow: hidden;
    }

    #${scopeId} .slider-v3__image {
      width: 50%;
      height: 100%;
      flex-shrink: 0;
    }

    #${scopeId} .slider-v3__image-inner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    #${scopeId} .slider-v3__image-inner--left {
      justify-content: center;
      align-items: flex-start;
      padding: 4rem;
      background-color: hsla(0, 0%, 0%, 0.2);
      background-blend-mode: overlay;
    }

    #${scopeId} .slider-v3__image--left {
      filter: sepia(100%);
      transition: filter 1s linear 1s;
    }

    #${scopeId} .swiper-slide-active .slider-v3__image--left {
      filter: sepia(0%);
    }

    #${scopeId} .slider-v3__image-inner--right {
      justify-content: center;
      align-items: center;
      padding: 3rem;
      filter: hue-rotate(-60deg);
      background-color: hsla(0, 0%, 0%, 0.5);
      background-blend-mode: multiply;
      transition: filter 1s linear 1s;
      color: var(--slider-paragraph-color) !important;
    }

    #${scopeId} .swiper-slide-active .slider-v3__image-inner--right {
      filter: hue-rotate(90deg);
    }

    #${scopeId} .slider-v3__title {
      font-family: inherit;
      font-weight: 500;
      color: var(--slider-title-color);
      align-self: flex-start;
      margin: 0 0 auto 0;
      font-size: clamp(2.4rem, 4.5vw, 4.5rem);
      line-height: 1;
      opacity: 0;
      transform: translate3d(-20%, 0, 0);
      transition:
        opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s,
        transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s;
    }

    #${scopeId} .slider-v3__title-emphasis {
      display: inline-block;
      font-weight: 700;
      font-style: italic;
      color: var(--slider-emphasis-color);
      opacity: 0;
      transform: translate3d(-20%, 0, 0);
      transition:
        opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s,
        transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s;
    }

    #${scopeId} .slider-v3__title-subtitle {
      font-size: clamp(1.8rem, 3.5vw, 3.5rem);
      color: var(--slider-subtitle-color);
    }

    #${scopeId} .slider-v3__chapter {
      font-family: inherit;
      font-size: clamp(11px, 1.4vw, 14px);
      letter-spacing: 2px;
      line-height: 1;
      margin: 0;
      margin-bottom: auto;
      align-self: flex-end;
      text-transform: uppercase;
      font-weight: 500;
      color: var(--slider-chapter-color);
      padding-right: clamp(2rem, 8vw, 8rem);
      opacity: 0;
      transform: translate3d(-20%, 0, 0);
      transition:
        opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.3s,
        transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.3s;
    }

    #${scopeId} .slider-v3__paragraph,
    #${scopeId} p.slider-v3__paragraph,
    #${scopeId} .slider-v3__image-inner--right p {
      color: inherit !important;
      width: 100%;
      max-width: 350px;
      margin: 0;
      text-align: justify;
      font-family: inherit;
      font-size: clamp(1rem, 1.2vw, 1.2rem);
      font-weight: 500;
      line-height: 1.6;
      opacity: 0;
      transform: translate3d(-20%, 0, 0);
      transition:
        opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1.4s,
        transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1.4s;
    }

    #${scopeId} .swiper-slide-active .slider-v3__title,
    #${scopeId} .swiper-slide-active .slider-v3__title-emphasis,
    #${scopeId} .swiper-slide-active .slider-v3__chapter,
    #${scopeId} .swiper-slide-active .slider-v3__paragraph {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    #${scopeId} .slider-v3__pagination {
      right: 20px !important;
      left: auto !important;
      width: auto !important;
      bottom: 50% !important;
      transform: translateY(50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }

    #${scopeId} .slider-v3__pagination .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      margin: 0 !important;
      background: var(--slider-pagination-color);
      opacity: 0.4;
      border-radius: 50%;
      transition: opacity 0.3s ease, transform 0.3s ease;
      cursor: pointer;
    }

    #${scopeId} .slider-v3__pagination .swiper-pagination-bullet-active {
      opacity: 1;
      transform: scale(1.3);
    }

    @media (max-width: 768px) {
      #${scopeId} {
        height: 100vh;
      }

      #${scopeId} .swiper-slide {
        flex-direction: column;
      }

      #${scopeId} .slider-v3__image {
        width: 100%;
        height: 50%;
      }

      #${scopeId} .slider-v3__image-inner--left {
        padding: 2rem;
        align-items: center;
        text-align: center;
      }

      #${scopeId} .slider-v3__image-inner--right {
        padding: 2rem;
      }

      #${scopeId} .slider-v3__title {
        font-size: clamp(2rem, 7vw, 3rem);
        align-self: center;
        text-align: center;
      }

      #${scopeId} .slider-v3__title-subtitle {
        font-size: clamp(1.5rem, 5vw, 2.2rem);
      }

      #${scopeId} .slider-v3__chapter {
        padding-right: 0;
        align-self: center;
        margin-top: 1rem;
        text-align: center;
      }

      #${scopeId} .slider-v3__paragraph,
      #${scopeId} p.slider-v3__paragraph,
      #${scopeId} .slider-v3__image-inner--right p {
        max-width: 94%;
        font-size: 1rem;
        text-align: center;
      }

      #${scopeId} .slider-v3__pagination {
        right: auto !important;
        left: 0 !important;
        bottom: 10px !important;
        width: 100% !important;
        transform: none;
        flex-direction: row;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      #${scopeId} .slider-v3-swiper {
        box-shadow: none;
      }

      #${scopeId} .slider-v3__title {
        font-size: clamp(1.7rem, 8vw, 2.5rem);
      }

      #${scopeId} .slider-v3__title-subtitle {
        font-size: clamp(1.3rem, 6vw, 1.9rem);
      }

      #${scopeId} .slider-v3__paragraph,
      #${scopeId} p.slider-v3__paragraph,
      #${scopeId} .slider-v3__image-inner--right p {
        font-size: 0.95rem;
      }
    }
  `;
}

function getSlides(c) {
  return [
    {
      leftImage: c.slide1LeftImage,
      rightImage: c.slide1RightImage,
      title: c.slide1Title,
      emphasis: c.slide1Emphasis,
      subtitle: c.slide1Subtitle,
      chapter: c.slide1Chapter,
      paragraph: c.slide1Paragraph,
    },
    {
      leftImage: c.slide2LeftImage,
      rightImage: c.slide2RightImage,
      title: c.slide2Title,
      emphasis: c.slide2Emphasis,
      subtitle: c.slide2Subtitle,
      chapter: c.slide2Chapter,
      paragraph: c.slide2Paragraph,
    },
    {
      leftImage: c.slide3LeftImage,
      rightImage: c.slide3RightImage,
      title: c.slide3Title,
      emphasis: c.slide3Emphasis,
      subtitle: c.slide3Subtitle,
      chapter: c.slide3Chapter,
      paragraph: c.slide3Paragraph,
    },
  ];
}

export function getSliderV3Code(config = {}) {
  const c = { ...baseConfig, ...config };
  const scopeId = `slider-v3-${Math.random().toString(36).slice(2, 9)}`;
  const slides = getSlides(c);

  return `
<section id="${scopeId}" class="slider-v3-section">
  <style>
    ${getSliderStyles(scopeId, c)}
  </style>

  <div class="swiper slider-v3-swiper">
    <div class="swiper-wrapper">
      ${slides
        .map(
          (slide) => `
            <div class="swiper-slide">
              <div class="slider-v3__image slider-v3__image--left" data-swiper-parallax-y="-20%">
                <div
                  class="slider-v3__image-inner slider-v3__image-inner--left"
                  style="background-image:url('${escapeAttr(slide.leftImage)}');"
                >
                  <h1 class="slider-v3__title">
                    ${escapeHtml(slide.title)}
                    <span class="slider-v3__title-emphasis">${escapeHtml(slide.emphasis)}</span>.<br>
                    <span class="slider-v3__title-subtitle">${escapeHtml(slide.subtitle)}</span>
                  </h1>
                  <p class="slider-v3__chapter">${escapeHtml(slide.chapter)}</p>
                </div>
              </div>

              <div class="slider-v3__image" data-swiper-parallax-y="35%">
                <div
                  class="slider-v3__image-inner slider-v3__image-inner--right"
                  style="background-image:url('${escapeAttr(slide.rightImage)}');"
                >
                  <p class="slider-v3__paragraph">${escapeHtml(slide.paragraph)}</p>
                </div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="swiper-pagination slider-v3__pagination"></div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
  <script>
    (function() {
      var root = document.getElementById('${scopeId}');
      if (!root) return;

      function initSwiper() {
        var el = root.querySelector('.slider-v3-swiper');
        var pagination = root.querySelector('.slider-v3__pagination');
        if (!el || !pagination || typeof Swiper === 'undefined') return;

        new Swiper(el, {
          direction: 'vertical',
          loop: true,
          grabCursor: true,
          speed: 1000,
          parallax: true,
          mousewheel: true,
          keyboard: { enabled: true },
          pagination: {
            el: pagination,
            clickable: true
          }
        });
      }

      if (typeof Swiper !== 'undefined') {
        initSwiper();
      } else {
        var tries = 0;
        var timer = setInterval(function() {
          tries += 1;
          if (typeof Swiper !== 'undefined') {
            clearInterval(timer);
            initSwiper();
          }
          if (tries > 40) clearInterval(timer);
        }, 150);
      }
    })();
  </script>
</section>
  `;
}

export const sliderV3Definition = {
  type: "slider-v3",
  label: "Slider V3",
  defaultConfig: { ...baseConfig },
  accordions: [
    {
      id: "slide1",
      title: "Slide 1",
      controls: [
        { type: "text", label: "Left Image URL", key: "slide1LeftImage" },
        { type: "text", label: "Right Image URL", key: "slide1RightImage" },
        { type: "text", label: "Title", key: "slide1Title" },
        { type: "text", label: "Emphasis", key: "slide1Emphasis" },
        { type: "text", label: "Subtitle", key: "slide1Subtitle" },
        { type: "text", label: "Chapter", key: "slide1Chapter" },
        { type: "textarea", label: "Paragraph", key: "slide1Paragraph" },
      ],
    },
    {
      id: "slide2",
      title: "Slide 2",
      controls: [
        { type: "text", label: "Left Image URL", key: "slide2LeftImage" },
        { type: "text", label: "Right Image URL", key: "slide2RightImage" },
        { type: "text", label: "Title", key: "slide2Title" },
        { type: "text", label: "Emphasis", key: "slide2Emphasis" },
        { type: "text", label: "Subtitle", key: "slide2Subtitle" },
        { type: "text", label: "Chapter", key: "slide2Chapter" },
        { type: "textarea", label: "Paragraph", key: "slide2Paragraph" },
      ],
    },
    {
      id: "slide3",
      title: "Slide 3",
      controls: [
        { type: "text", label: "Left Image URL", key: "slide3LeftImage" },
        { type: "text", label: "Right Image URL", key: "slide3RightImage" },
        { type: "text", label: "Title", key: "slide3Title" },
        { type: "text", label: "Emphasis", key: "slide3Emphasis" },
        { type: "text", label: "Subtitle", key: "slide3Subtitle" },
        { type: "text", label: "Chapter", key: "slide3Chapter" },
        { type: "textarea", label: "Paragraph", key: "slide3Paragraph" },
      ],
    },
    {
      id: "colors",
      title: "Colors",
      controls: [
        { type: "color", label: "Title Color", key: "titleColor" },
        { type: "color", label: "Emphasis Color", key: "emphasisColor" },
        { type: "color", label: "Subtitle Color", key: "subtitleColor" },
        { type: "color", label: "Chapter Color", key: "chapterColor" },
        { type: "color", label: "Paragraph Color", key: "paragraphColor" },
        { type: "color", label: "Pagination Color", key: "paginationColor" },
      ],
    },
  ],
};

export default function SliderV3({ config = {} }) {
  const c = useMemo(() => ({ ...baseConfig, ...config }), [config]);
  const reactId = useId().replace(/:/g, "");
  const scopeId = `slider-v3-preview-${reactId}`;
  const swiperRef = useRef(null);
  const slides = useMemo(() => getSlides(c), [c]);

  useEffect(() => {
    let instance;
    let cancelled = false;

    async function init() {
      if (!swiperRef.current) return;

      if (!window.Swiper) {
        await new Promise((resolve, reject) => {
          const existing = document.querySelector('script[data-swiper-v8="true"]');
          if (existing) {
            let checks = 0;
            const timer = setInterval(() => {
              checks += 1;
              if (window.Swiper) {
                clearInterval(timer);
                resolve();
              }
              if (checks > 40) {
                clearInterval(timer);
                reject(new Error("Swiper failed to load"));
              }
            }, 150);
            return;
          }

          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
          script.async = true;
          script.dataset.swiperV8 = "true";
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        }).catch(() => null);
      }

      if (cancelled || !window.Swiper || !swiperRef.current) return;

      instance = new window.Swiper(swiperRef.current, {
        direction: "vertical",
        loop: true,
        grabCursor: true,
        speed: 1000,
        parallax: true,
        mousewheel: true,
        keyboard: { enabled: true },
        pagination: {
          el: `#${scopeId} .slider-v3__pagination`,
          clickable: true,
        },
      });
    }

    init();

    return () => {
      cancelled = true;
      if (instance && typeof instance.destroy === "function") {
        instance.destroy(true, true);
      }
    };
  }, [scopeId, slides]);

  return (
    <section id={scopeId} className="slider-v3-section">
      <style>{getSliderStyles(scopeId, c)}</style>

      <div ref={swiperRef} className="swiper slider-v3-swiper">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="slider-v3__image slider-v3__image--left" data-swiper-parallax-y="-20%">
                <div
                  className="slider-v3__image-inner slider-v3__image-inner--left"
                  style={{ backgroundImage: `url(${slide.leftImage})` }}
                >
                  <h1 className="slider-v3__title">
                    {slide.title}{" "}
                    <span className="slider-v3__title-emphasis">{slide.emphasis}</span>.
                    <br />
                    <span className="slider-v3__title-subtitle">{slide.subtitle}</span>
                  </h1>
                  <p className="slider-v3__chapter">{slide.chapter}</p>
                </div>
              </div>

              <div className="slider-v3__image" data-swiper-parallax-y="35%">
                <div
                  className="slider-v3__image-inner slider-v3__image-inner--right"
                  style={{ backgroundImage: `url(${slide.rightImage})` }}
                >
                  <p className="slider-v3__paragraph">{slide.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination slider-v3__pagination" />
      </div>
    </section>
  );
}
