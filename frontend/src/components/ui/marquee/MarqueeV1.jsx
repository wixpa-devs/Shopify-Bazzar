export function getMarqueeV1Code(config = {}) {
  const bgColor       = config.bgColor       || "#ffffff";
  const borderColor   = config.borderColor   || "#e8e8e8";
  const separatorColor = config.separatorColor || "#d0d0d0";
  const speed         = config.speed         || "40s";
  const sectionGapTop = config.sectionGapTop || "20px";
  const sectionGapBottom = config.sectionGapBottom || "0px";

  const brand1Url   = config.brand1Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/acure_34eec53a-de6d-4717-9e48-ee4137067bc5.png?v=1727383304&width=280";
  const brand1Label = config.brand1Label || "Acure";
  const brand1Href  = config.brand1Href  || "#";

  const brand2Url   = config.brand2Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/keeko_860e46a1-b765-4f97-9d31-a29328decefc.png?v=1727383316&width=280";
  const brand2Label = config.brand2Label || "Keeko";
  const brand2Href  = config.brand2Href  || "#";

  const brand3Url   = config.brand3Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_a45822b8-662c-4d5c-bdaf-6470bdfa9d96.png?v=1727383329&width=280";
  const brand3Label = config.brand3Label || "Bkind";
  const brand3Href  = config.brand3Href  || "#";

  const brand4Url   = config.brand4Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/herbi_f4fc6530-ee64-4cb8-8620-eac55c6746ef.png?v=1727383343&width=280";
  const brand4Label = config.brand4Label || "Herbivore";
  const brand4Href  = config.brand4Href  || "#";

  const brand5Url   = config.brand5Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/ilia_c29907a2-c6f9-410c-bbc3-1d4debd9e041.png?v=1727383362&width=280";
  const brand5Label = config.brand5Label || "ILIA";
  const brand5Href  = config.brand5Href  || "#";

  const brand6Url   = config.brand6Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=280";
  const brand6Label = config.brand6Label || "Mokosh";
  const brand6Href  = config.brand6Href  || "#";

  const brand7Url   = config.brand7Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/odacite_6c8c52af-f8ae-4260-8725-8e7119df3aad.png?v=1727383387&width=280";
  const brand7Label = config.brand7Label || "Odacite";
  const brand7Href  = config.brand7Href  || "#";

  const brand8Url   = config.brand8Url   || "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/osea_249c4ef0-4671-4810-910a-54461c1a863d.png?v=1727383398&width=280";
  const brand8Label = config.brand8Label || "OSEA";
  const brand8Href  = config.brand8Href  || "#";

  return `<!-- Marquee V1 — Brands Marquee | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --section-gap-top: ${sectionGapTop};
    --section-gap-bottom: ${sectionGapBottom};
    --item-gap: clamp(16px, 3vw, 40px);
    --item-height: clamp(40px, 8vw, 80px);
    --img-width: clamp(80px, 12vw, 160px);
    --speed: ${speed};
    --bg: ${bgColor};
    --border-color: ${borderColor};
    --section-padding-block: clamp(24px, 5vw, 56px);
  }

  .brands-section {
    width: 100%;
    padding-top: var(--section-gap-top);
    padding-bottom: var(--section-gap-bottom);
    background: var(--bg);
    overflow: hidden;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }

  .marquee-outer {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-block: var(--section-padding-block);
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
  }

  .marquee-track {
    display: flex;
    align-items: center;
    width: max-content;
    will-change: transform;
  }

  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .marquee-track.is-animating {
    animation: marquee-scroll var(--speed) linear infinite;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  .marquee-content {
    display: flex;
    align-items: center;
    gap: var(--item-gap);
    padding-inline: var(--item-gap);
    flex-shrink: 0;
  }

  .brand-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .brand-link:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }

  .brand-link:focus-visible {
    outline: 2px solid #01696f;
    outline-offset: 4px;
    border-radius: 4px;
  }

  .brand-image {
    display: block;
    width: var(--img-width);
    height: var(--item-height);
    object-fit: contain;
    object-position: center;
    filter: grayscale(100%);
    transition: filter 0.25s ease;
  }

  .brand-link:hover .brand-image {
    filter: grayscale(0%);
  }

  .brand-separator {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${separatorColor};
    flex-shrink: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track.is-animating {
      animation: none;
    }
    .marquee-outer {
      overflow-x: auto;
      -webkit-mask-image: none;
      mask-image: none;
    }
    .marquee-content {
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .brand-separator { display: none; }
  }

  @media (max-width: 480px) {
    :root {
      --img-width: 70px;
      --item-height: 36px;
      --item-gap: 20px;
      --speed: 28s;
      --section-padding-block: 20px;
    }
  }
</style>

<section class="brands-section" aria-label="Our brand partners">
  <div class="marquee-outer">
    <div class="marquee-track" id="marqueeTrack" role="list">
      <div class="marquee-content" aria-hidden="false" id="marqueeContent">

        <div class="brand-item" role="listitem">
          <a href="${brand1Href}" class="brand-link" aria-label="${brand1Label}">
            <img src="${brand1Url}" alt="${brand1Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand1Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand2Href}" class="brand-link" aria-label="${brand2Label}">
            <img src="${brand2Url}" alt="${brand2Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand2Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand3Href}" class="brand-link" aria-label="${brand3Label}">
            <img src="${brand3Url}" alt="${brand3Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand3Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand4Href}" class="brand-link" aria-label="${brand4Label}">
            <img src="${brand4Url}" alt="${brand4Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand4Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand5Href}" class="brand-link" aria-label="${brand5Label}">
            <img src="${brand5Url}" alt="${brand5Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand5Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand6Href}" class="brand-link" aria-label="${brand6Label}">
            <img src="${brand6Url}" alt="${brand6Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand6Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand7Href}" class="brand-link" aria-label="${brand7Label}">
            <img src="${brand7Url}" alt="${brand7Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand7Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

        <div class="brand-item" role="listitem">
          <a href="${brand8Href}" class="brand-link" aria-label="${brand8Label}">
            <img src="${brand8Url}" alt="${brand8Label} logo" width="160" height="60" loading="eager" class="brand-image"
              onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:14px;color:#888;font-weight:600;\\'>${brand8Label}</span>'" />
          </a>
        </div>

        <span class="brand-separator" aria-hidden="true"></span>

      </div>
    </div>
  </div>
</section>

<script>
  (function () {
    var track   = document.getElementById('marqueeTrack');
    var content = document.getElementById('marqueeContent');

    var clone = content.cloneNode(true);
    clone.id = '';
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);

    requestAnimationFrame(function () {
      track.classList.add('is-animating');
    });

    document.addEventListener('visibilitychange', function () {
      track.style.animationPlayState =
        document.hidden ? 'paused' : 'running';
    });

    var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    function handleMotion(e) {
      track.style.animationPlayState = e.matches ? 'paused' : 'running';
    }
    mq.addEventListener ? mq.addEventListener('change', handleMotion)
                        : mq.addListener(handleMotion);
  })();
</script>`;
}

export default function MarqueeV1({ config }) {
  return null;
}