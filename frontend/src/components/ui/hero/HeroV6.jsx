import React from "react";

const HeroV6 = ({ config = {} }) => {
  const {
    slide1Img = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1400&q=80",
    slide1Url = "#",
    slide1Tag = "New Collection",
    slide1Title = "Buy our new arrivals",
    slide1Desc = "Hurry!! we have new stock of the clothes and shoes at best price.",
    slide1Cta = "Shop Now",

    slide2Img = "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
    slide2Url = "#",
    slide2Tag = "Summer Sale",
    slide2Title = "Summer fashion up to 50% off",
    slide2Desc = "Fresh styles for every season — discover the latest trends at unbeatable prices.",
    slide2Cta = "Explore Sale",

    slide3Img = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80",
    slide3Url = "#",
    slide3Tag = "Footwear",
    slide3Title = "Step into exclusive footwear",
    slide3Desc = "Premium shoes crafted for style and comfort — shop the newest drops today.",
    slide3Cta = "Shop Footwear",

    slide4Img = "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&q=80",
    slide4Url = "#",
    slide4Tag = "Accessories",
    slide4Title = "Complete your look with accessories",
    slide4Desc = "Bags, belts, jewellery & more — find the perfect finishing touch.",
    slide4Cta = "View Collection",

    slide5Img = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80",
    slide5Url = "#",
    slide5Tag = "Winter Essentials",
    slide5Title = "Stay warm, stay stylish",
    slide5Desc = "Coats, knitwear & more — everything you need for the colder months.",
    slide5Cta = "Shop Now",

    ctaBg = "#e8c87a",
    ctaColor = "#1a1a1a",
    ctaHoverBg = "#f0d68e",
    wrapperBg = "#1a1a2e",
    autoplayMs = 5000,
  } = config;

  const slides = [
    {
      img: slide1Img,
      url: slide1Url,
      tag: slide1Tag,
      title: slide1Title,
      desc: slide1Desc,
      cta: slide1Cta,
    },
    {
      img: slide2Img,
      url: slide2Url,
      tag: slide2Tag,
      title: slide2Title,
      desc: slide2Desc,
      cta: slide2Cta,
    },
    {
      img: slide3Img,
      url: slide3Url,
      tag: slide3Tag,
      title: slide3Title,
      desc: slide3Desc,
      cta: slide3Cta,
    },
    {
      img: slide4Img,
      url: slide4Url,
      tag: slide4Tag,
      title: slide4Title,
      desc: slide4Desc,
      cta: slide4Cta,
    },
    {
      img: slide5Img,
      url: slide5Url,
      tag: slide5Tag,
      title: slide5Title,
      desc: slide5Desc,
      cta: slide5Cta,
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const timerRef = React.useRef(null);
  const touchStartX = React.useRef(0);
  const touchStartY = React.useRef(0);

  const startAuto = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoplayMs);
  }, [autoplayMs, slides.length]);

  const stopAuto = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const resetAuto = React.useCallback(() => {
    stopAuto();
    startAuto();
  }, [startAuto, stopAuto]);

  React.useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const goTo = React.useCallback(
    (index) => {
      if (index < 0) {
        setCurrent(slides.length - 1);
      } else if (index >= slides.length) {
        setCurrent(0);
      } else {
        setCurrent(index);
      }
    },
    [slides.length]
  );

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "visible",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "visible",
          background: wrapperBg,
          fontFamily: "inherit",
        }}
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        {/* Clipping moved here only */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            const dy = e.changedTouches[0].clientY - touchStartY.current;

            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
              if (dx < 0) goTo(current + 1);
              else goTo(current - 1);
              resetAuto();
            }
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${slides.length * 100}%`,
              transform: `translateX(-${current * (100 / slides.length)}%)`,
              transition: "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  width: `${100 / slides.length}%`,
                  flexShrink: 0,
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "clamp(280px, 50vw, 580px)",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      filter: "brightness(0.72)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "clamp(20px, 7vw, 52px) clamp(20px, 5vw, 60px)",
                      background:
                        "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%)",
                      fontFamily: "inherit",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "fit-content",
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(6px)",
                        color: "#fff",
                        fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        marginBottom: "10px",
                        border: "1px solid rgba(255,255,255,0.25)",
                        fontFamily: "inherit",
                      }}
                    >
                      {slide.tag}
                    </span>

                    <h2
                      style={{
                        fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        margin: "0 0 14px",
                        maxWidth: "480px",
                        textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                        fontFamily: "inherit",
                      }}
                    >
                      {slide.title}
                    </h2>

                    <p
                      style={{
                        fontSize: "clamp(0.78rem, 1.5vw, 0.95rem)",
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.55,
                        maxWidth: "360px",
                        margin: "0 0 28px",
                        fontFamily: "inherit",
                      }}
                    >
                      {slide.desc}
                    </p>

                    <a
                      href={slide.url || "#"}
                      style={{
                        maxWidth: "25vw",
                        width: "fit-content",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                        background: ctaBg,
                        color: ctaColor,
                        fontSize: "clamp(0.78rem, 1.3vw, 0.88rem)",
                        fontWeight: 700,
                        padding: "clamp(9px, 1.5vw, 13px) clamp(18px, 2.5vw, 26px)",
                        borderRadius: "999px",
                        textDecoration: "none",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                        transition: "background 160ms, transform 160ms, box-shadow 160ms",
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = ctaHoverBg;
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.28)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = ctaBg;
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)";
                      }}
                    >
                      {slide.cta}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls outside the clipped viewport */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => {
            goTo(current - 1);
            resetAuto();
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "clamp(10px, 2vw, 20px)",
            transform: "translateY(-50%)",
            width: "clamp(34px, 4.5vw, 46px)",
            height: "clamp(34px, 4.5vw, 46px)",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.3)",
            borderRadius: "50%",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => {
            goTo(current + 1);
            resetAuto();
          }}
          style={{
            position: "absolute",
            top: "50%",
            right: "clamp(10px, 2vw, 20px)",
            transform: "translateY(-50%)",
            width: "clamp(34px, 4.5vw, 46px)",
            height: "clamp(34px, 4.5vw, 46px)",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.3)",
            borderRadius: "50%",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <div
          style={{
            position: "absolute",
            bottom: "clamp(14px, 2.5vw, 22px)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "7px",
            zIndex: 10,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                goTo(i);
                resetAuto();
              }}
              style={{
                width: i === current ? "22px" : "7px",
                height: "7px",
                borderRadius: "999px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "background 200ms, width 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "clamp(14px, 2.5vw, 24px)",
            right: "clamp(16px, 3vw, 36px)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.85)",
            fontSize: "clamp(0.75rem, 1.2vw, 0.88rem)",
            fontWeight: 600,
            background: "rgba(0,0,0,0.28)",
            backdropFilter: "blur(6px)",
            padding: "5px 12px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.15)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <span style={{ color: "#fff" }}>{current + 1}</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span>{slides.length}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroV6;

export const getHeroV6Code = (config = {}) => {
  const slide1Img = config.slide1Img || "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1400&q=80";
  const slide1Url = config.slide1Url || "#";
  const slide1Tag = config.slide1Tag || "New Collection";
  const slide1Title = config.slide1Title || "Buy our new arrivals";
  const slide1Desc = config.slide1Desc || "Hurry!! we have new stock of the clothes and shoes at best price.";
  const slide1Cta = config.slide1Cta || "Shop Now";

  const slide2Img = config.slide2Img || "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80";
  const slide2Url = config.slide2Url || "#";
  const slide2Tag = config.slide2Tag || "Summer Sale";
  const slide2Title = config.slide2Title || "Summer fashion up to 50% off";
  const slide2Desc = config.slide2Desc || "Fresh styles for every season — discover the latest trends at unbeatable prices.";
  const slide2Cta = config.slide2Cta || "Explore Sale";

  const slide3Img = config.slide3Img || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80";
  const slide3Url = config.slide3Url || "#";
  const slide3Tag = config.slide3Tag || "Footwear";
  const slide3Title = config.slide3Title || "Step into exclusive footwear";
  const slide3Desc = config.slide3Desc || "Premium shoes crafted for style and comfort — shop the newest drops today.";
  const slide3Cta = config.slide3Cta || "Shop Footwear";

  const slide4Img = config.slide4Img || "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&q=80";
  const slide4Url = config.slide4Url || "#";
  const slide4Tag = config.slide4Tag || "Accessories";
  const slide4Title = config.slide4Title || "Complete your look with accessories";
  const slide4Desc = config.slide4Desc || "Bags, belts, jewellery & more — find the perfect finishing touch.";
  const slide4Cta = config.slide4Cta || "View Collection";

  const slide5Img = config.slide5Img || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80";
  const slide5Url = config.slide5Url || "#";
  const slide5Tag = config.slide5Tag || "Winter Essentials";
  const slide5Title = config.slide5Title || "Stay warm, stay stylish";
  const slide5Desc = config.slide5Desc || "Coats, knitwear & more — everything you need for the colder months.";
  const slide5Cta = config.slide5Cta || "Shop Now";

  const ctaBg = config.ctaBg || "#e8c87a";
  const ctaColor = config.ctaColor || "#1a1a1a";
  const ctaHoverBg = config.ctaHoverBg || "#f0d68e";
  const wrapperBg = config.wrapperBg || "#1a1a2e";
  const autoplayMs = config.autoplayMs || 5000;

  const uid = `hsv6-${Math.random().toString(36).slice(2, 9)}`;

  return `<!-- Hero V6 — Image Slider | Shopify Bazzar -->
<style>
  .${uid}, .${uid} *, .${uid} *::before, .${uid} *::after { box-sizing: border-box; }
  .${uid} {
    position: relative;
    width: 100%;
    overflow: visible;
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
  }
  .${uid}__wrap {
    position: relative;
    width: 100%;
    overflow: visible;
    background: ${wrapperBg};
    font-family: inherit;
  }
  .${uid}__viewport {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .${uid}__track {
    display: flex;
    width: 500%;
    transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
  }
  .${uid}__slide {
    width: 20%;
    flex-shrink: 0;
    position: relative;
    overflow: visible;
  }
  .${uid}__media {
    position: relative;
    overflow: hidden;
  }
  .${uid}__img {
    width: 100%;
    height: clamp(280px, 50vw, 580px);
    object-fit: cover;
    object-position: center top;
    display: block;
    filter: brightness(0.72);
  }
  .${uid}__content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: clamp(20px, 7vw, 52px) clamp(20px, 5vw, 60px);
    background: linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%);
    font-family: inherit;
  }
  .${uid}__tag {
    display: inline-block;
    width: fit-content;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(6px);
    color: #fff;
    font-size: clamp(0.65rem, 1.2vw, 0.75rem);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
    margin-bottom: 10px;
    border: 1px solid rgba(255,255,255,0.25);
    font-family: inherit;
  }
  .${uid}__title {
    font-size: clamp(1.6rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0 0 14px;
    max-width: 480px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.3);
    font-family: inherit;
  }
  .${uid}__desc {
    font-size: clamp(0.78rem, 1.5vw, 0.95rem);
    color: rgba(255,255,255,0.82);
    line-height: 1.55;
    max-width: 360px;
    margin: 0 0 28px;
    font-family: inherit;
  }
  .${uid}__cta {
    max-width: 25vw;
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: ${ctaBg};
    color: ${ctaColor};
    font-size: clamp(0.78rem, 1.3vw, 0.88rem);
    font-weight: 700;
    padding: clamp(9px, 1.5vw, 13px) clamp(18px, 2.5vw, 26px);
    border-radius: 999px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    transition: background 160ms, transform 160ms, box-shadow 160ms;
    font-family: inherit;
  }
  .${uid}__cta:hover {
    background: ${ctaHoverBg};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  }
  .${uid}__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(34px, 4.5vw, 46px);
    height: clamp(34px, 4.5vw, 46px);
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    border: 1.5px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }
  .${uid}__prev { left: clamp(10px, 2vw, 20px); }
  .${uid}__next { right: clamp(10px, 2vw, 20px); }
  .${uid}__dots {
    position: absolute;
    bottom: clamp(14px, 2.5vw, 22px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 7px;
    z-index: 10;
  }
  .${uid}__dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: rgba(255,255,255,0.45);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 200ms, width 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .${uid}__dot.active {
    width: 22px;
    background: #fff;
  }
  .${uid}__counter {
    position: absolute;
    bottom: clamp(14px, 2.5vw, 24px);
    right: clamp(16px, 3vw, 36px);
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.85);
    font-size: clamp(0.75rem, 1.2vw, 0.88rem);
    font-weight: 600;
    background: rgba(0,0,0,0.28);
    backdrop-filter: blur(6px);
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.15);
    z-index: 10;
    pointer-events: none;
  }
  @media (max-width: 600px) {
    .${uid}__content {
      background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
    }
    .${uid}__arrow {
      display: none;
    }
  }
  @media (max-width: 475px) {
    .${uid}__cta {
      max-width: 60vw;
    }
  }
</style>

<div class="${uid}">
  <div class="${uid}__wrap">
    <div class="${uid}__viewport">
      <div class="${uid}__track">
        <div class="${uid}__slide">
          <div class="${uid}__media">
            <img class="${uid}__img" src="${slide1Img}" alt="${slide1Title}">
            <div class="${uid}__content">
              <span class="${uid}__tag">${slide1Tag}</span>
              <h2 class="${uid}__title">${slide1Title}</h2>
              <p class="${uid}__desc">${slide1Desc}</p>
              <a href="${slide1Url}" class="${uid}__cta">${slide1Cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="${uid}__slide">
          <div class="${uid}__media">
            <img class="${uid}__img" src="${slide2Img}" alt="${slide2Title}">
            <div class="${uid}__content">
              <span class="${uid}__tag">${slide2Tag}</span>
              <h2 class="${uid}__title">${slide2Title}</h2>
              <p class="${uid}__desc">${slide2Desc}</p>
              <a href="${slide2Url}" class="${uid}__cta">${slide2Cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="${uid}__slide">
          <div class="${uid}__media">
            <img class="${uid}__img" src="${slide3Img}" alt="${slide3Title}">
            <div class="${uid}__content">
              <span class="${uid}__tag">${slide3Tag}</span>
              <h2 class="${uid}__title">${slide3Title}</h2>
              <p class="${uid}__desc">${slide3Desc}</p>
              <a href="${slide3Url}" class="${uid}__cta">${slide3Cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="${uid}__slide">
          <div class="${uid}__media">
            <img class="${uid}__img" src="${slide4Img}" alt="${slide4Title}">
            <div class="${uid}__content">
              <span class="${uid}__tag">${slide4Tag}</span>
              <h2 class="${uid}__title">${slide4Title}</h2>
              <p class="${uid}__desc">${slide4Desc}</p>
              <a href="${slide4Url}" class="${uid}__cta">${slide4Cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="${uid}__slide">
          <div class="${uid}__media">
            <img class="${uid}__img" src="${slide5Img}" alt="${slide5Title}">
            <div class="${uid}__content">
              <span class="${uid}__tag">${slide5Tag}</span>
              <h2 class="${uid}__title">${slide5Title}</h2>
              <p class="${uid}__desc">${slide5Desc}</p>
              <a href="${slide5Url}" class="${uid}__cta">${slide5Cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="${uid}__arrow ${uid}__prev" type="button" aria-label="Previous slide">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>

    <button class="${uid}__arrow ${uid}__next" type="button" aria-label="Next slide">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>

    <div class="${uid}__dots"></div>

    <div class="${uid}__counter">
      <span class="${uid}__current">1</span>
      <span style="opacity:.5">/</span>
      <span>${5}</span>
    </div>
  </div>
</div>

<script>
(function () {
  var root = document.querySelector(".${uid}");
  if (!root) return;

  var wrap = root.querySelector(".${uid}__wrap");
  var track = root.querySelector(".${uid}__track");
  var slides = root.querySelectorAll(".${uid}__slide");
  var dotsWrap = root.querySelector(".${uid}__dots");
  var prev = root.querySelector(".${uid}__prev");
  var next = root.querySelector(".${uid}__next");
  var currentEl = root.querySelector(".${uid}__current");
  var current = 0;
  var total = slides.length;
  var timer = null;
  var startX = 0;
  var startY = 0;

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "${uid}__dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
      resetAuto();
    });
    dotsWrap.appendChild(dot);
  });

  function updateDots() {
    var dots = root.querySelectorAll(".${uid}__dot");
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
    currentEl.textContent = current + 1;
  }

  function goTo(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;
    track.style.transform = "translateX(-" + (index * 20) + "%)";
    updateDots();
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(function () {
      goTo(current + 1);
    }, ${autoplayMs});
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  function resetAuto() {
    stopAuto();
    startAuto();
  }

  prev.addEventListener("click", function () {
    goTo(current - 1);
    resetAuto();
  });

  next.addEventListener("click", function () {
    goTo(current + 1);
    resetAuto();
  });

  wrap.addEventListener("mouseenter", stopAuto);
  wrap.addEventListener("mouseleave", startAuto);

  wrap.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  wrap.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(current + 1);
      else goTo(current - 1);
      resetAuto();
    }
  }, { passive: true });

  startAuto();
})();
</script>`;
};
