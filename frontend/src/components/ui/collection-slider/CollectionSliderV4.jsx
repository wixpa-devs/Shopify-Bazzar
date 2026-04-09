export function getCollectionSliderV4Code(config = {}) {
  const sectionPaddingY = config.sectionPaddingY || "1rem";
  const sectionPaddingX = config.sectionPaddingX || "0.5rem";
  const panelGap        = config.panelGap        || "1rem";
  const panelHeight     = config.panelHeight     || "600px";
  const borderRadius    = config.borderRadius    || "16px";
  const textColor       = config.textColor       || "#ffffff";
  const btnBorderColor  = config.btnBorderColor  || "#ffffff";

  // Panel 1
  const panel1Bg         = config.panel1Bg         || "https://picsum.photos/seed/panel1/600/800";
  const panel1Heading    = config.panel1Heading    || "The New Explore Collection";
  const panel1Body       = config.panel1Body       || "All-day comfort. All-terrain grip. Wherever adventure leads you.";
  const panel1Btn1Text   = config.panel1Btn1Text   || "LEARN MORE";
  const panel1Btn1Url    = config.panel1Btn1Url    || "#";

  // Panel 2
  const panel2Bg         = config.panel2Bg         || "https://picsum.photos/seed/panel2/600/800";
  const panel2Heading    = config.panel2Heading    || "Earthly Essentials";
  const panel2Body       = config.panel2Body       || "Staple colors in the comfiest styles.";
  const panel2Btn1Text   = config.panel2Btn1Text   || "SHOP MEN";
  const panel2Btn1Url    = config.panel2Btn1Url    || "#";
  const panel2Btn2Text   = config.panel2Btn2Text   || "SHOP WOMEN";
  const panel2Btn2Url    = config.panel2Btn2Url    || "#";

  // Panel 3
  const panel3Bg         = config.panel3Bg         || "https://picsum.photos/seed/panel3/600/800";
  const panel3Heading    = config.panel3Heading    || "The New Waterproof Collection";
  const panel3Body       = config.panel3Body       || "Introducing a new era of unstoppable protection.";
  const panel3Btn1Text   = config.panel3Btn1Text   || "LEARN MORE";
  const panel3Btn1Url    = config.panel3Btn1Url    || "#";

  return `
<style>
  .cs4-section {
    padding: ${sectionPaddingY} ${sectionPaddingX};
  }

  .cs4-collection {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${panelGap};
    height: 100%;
  }

  .cs4-panel {
    position: relative;
    border-radius: ${borderRadius};
    overflow: hidden;
    min-height: ${panelHeight};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
  }

  .cs4-panel::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
    border-radius: ${borderRadius};
    pointer-events: none;
  }

  .cs4-panel-inner {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 2rem 1rem;
  }

  .cs4-panel-heading {
    font-family: Georgia, serif;
    font-weight: 500;
    font-size: 30px;
    color: ${textColor};
    margin-bottom: 0;
    line-height: 1.2;
  }

  .cs4-panel-body {
    font-family: monospace;
    font-weight: bold;
    font-size: 14px;
    color: ${textColor};
    margin: 1rem 0;
    line-height: 1.5;
  }

  .cs4-btn-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cs4-btn {
    display: inline-block;
    font-family: monospace;
    font-weight: bold;
    font-size: 14px;
    color: ${textColor};
    background: transparent;
    border: 2px solid ${btnBorderColor};
    padding: 0.5rem 1.25rem;
    border-radius: 25px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease, color 0.3s ease;
    white-space: nowrap;
  }

  .cs4-btn:hover {
    background: #ffffff;
    color: #000000;
  }

  @media (min-width: 768px) {
    .cs4-section {
      padding: 2rem 1rem;
    }

    .cs4-collection {
      flex-direction: row;
      align-items: stretch;
      height: ${panelHeight};
    }

    .cs4-panel {
      min-height: unset;
      height: 100%;
    }

    .cs4-panel-heading {
      font-size: 40px;
    }
  }
</style>

<section class="cs4-section">
  <div class="cs4-collection">

    <!-- PANEL 1 -->
    <div class="cs4-panel" style="background-image: url('${panel1Bg}');">
      <div class="cs4-panel-inner">
        <p class="cs4-panel-heading">${panel1Heading}</p>
        <p class="cs4-panel-body">${panel1Body}</p>
        <div class="cs4-btn-row">
          <a href="${panel1Btn1Url}" class="cs4-btn">${panel1Btn1Text}</a>
        </div>
      </div>
    </div>

    <!-- PANEL 2 -->
    <div class="cs4-panel" style="background-image: url('${panel2Bg}');">
      <div class="cs4-panel-inner">
        <p class="cs4-panel-heading">${panel2Heading}</p>
        <p class="cs4-panel-body">${panel2Body}</p>
        <div class="cs4-btn-row">
          <a href="${panel2Btn1Url}" class="cs4-btn">${panel2Btn1Text}</a>
          <a href="${panel2Btn2Url}" class="cs4-btn">${panel2Btn2Text}</a>
        </div>
      </div>
    </div>

    <!-- PANEL 3 -->
    <div class="cs4-panel" style="background-image: url('${panel3Bg}');">
      <div class="cs4-panel-inner">
        <p class="cs4-panel-heading">${panel3Heading}</p>
        <p class="cs4-panel-body">${panel3Body}</p>
        <div class="cs4-btn-row">
          <a href="${panel3Btn1Url}" class="cs4-btn">${panel3Btn1Text}</a>
        </div>
      </div>
    </div>

  </div>
</section>
  `;
}

export default function CollectionSliderV4({ config }) {
  return null;
}