export function getFeaturedContainersV1Code(config = {}) {
  const bgColor = config.bgColor || "hsl(40 20% 96%)";
  const surfaceColor = config.surfaceColor || "hsl(0 0% 100%)";
  const textColor = config.textColor || "hsl(220 20% 14%)";
  const textMuted = config.textMuted || "hsl(258 20% 46%)";
  const accentColor = config.accentColor || "hsl(258 68% 56%)";
  const accentSoft = config.accentSoft || "hsl(258 60% 93%)";
  const borderColor = config.borderColor || "hsl(220 14% 88%)";
  const cardBorder = config.cardBorder || "hsl(258 40% 88%)";
  const borderRadius = config.borderRadius || "1rem";

  const heroHeading = config.heroHeading || "Smart design patterns with container queries";
  const heroBody = config.heroBody || "Container size queries are great, but style queries open up all new possibilities, allowing us to conditionally style things in a lot of creative ways.";
  const featuredHeading = config.featuredHeading || "Featured Containers";

  const card1Title = config.card1Title || "Mason Jar";
  const card1Body = config.card1Body || "A glass jar with a screw-top lid, ideal for preserving food, storing dry goods, or carrying liquids.";
  const card1LinkLabel = config.card1LinkLabel || "Read more about Mason Jars";
  const card1LinkUrl = config.card1LinkUrl || "#";

  const card2Title = config.card2Title || "Barrel";
  const card2Body = config.card2Body || "A large cylindrical wooden or metal container used for aging spirits, storing liquids, or shipping bulk goods.";
  const card2LinkLabel = config.card2LinkLabel || "Read more about Barrels";
  const card2LinkUrl = config.card2LinkUrl || "#";

  const card3Title = config.card3Title || "Crate";
  const card3Body = config.card3Body || "A slatted wooden or plastic box designed for transporting fragile items, produce, or industrial equipment.";
  const card3LinkLabel = config.card3LinkLabel || "Read more about Crates";
  const card3LinkUrl = config.card3LinkUrl || "#";

  const card4Title = config.card4Title || "Bin";
  const card4Body = config.card4Body || "A large open-topped container made from plastic or metal, used for storing waste, recycling, or loose materials.";
  const card4LinkLabel = config.card4LinkLabel || "Read more about Bins";
  const card4LinkUrl = config.card4LinkUrl || "#";

  const moreSectionHeading = config.moreSectionHeading || "More containers";

  const card5Title = config.card5Title || "Drum";
  const card5Body = config.card5Body || "A large cylindrical metal container used to transport and store chemicals, oil, or other industrial liquids safely.";
  const card5LinkLabel = config.card5LinkLabel || "Read more about Drums";
  const card5LinkUrl = config.card5LinkUrl || "#";

  const card6Title = config.card6Title || "Chest";
  const card6Body = config.card6Body || "A sturdy hinged box traditionally made of wood, used to store valuables, clothing, tools, or keepsakes.";
  const card6LinkLabel = config.card6LinkLabel || "Read more about Chests";
  const card6LinkUrl = config.card6LinkUrl || "#";

  const card7Title = config.card7Title || "Canister";
  const card7Body = config.card7Body || "A small metal or plastic cylinder with a lid, commonly used to store tea, coffee, flour, or other dry ingredients.";
  const card7LinkLabel = config.card7LinkLabel || "Read more about Canisters";
  const card7LinkUrl = config.card7LinkUrl || "#";

  const card8Title = config.card8Title || "Jerrycan";
  const card8Body = config.card8Body || "A robust pressed-steel container originally designed to carry fuel, now widely used for water and other liquids.";
  const card8LinkLabel = config.card8LinkLabel || "Read more about Jerrycans";
  const card8LinkUrl = config.card8LinkUrl || "#";

  return `<!-- Featured Containers V1 | Shopify Bazzar -->
<style>
  /* ── Reset ── */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ── Theme tokens ── */
  :root {
    --bg:          ${bgColor};
    --surface:     ${surfaceColor};
    --text:        ${textColor};
    --text-muted:  ${textMuted};
    --accent:      ${accentColor};
    --accent-soft: ${accentSoft};
    --border:      ${borderColor};
    --card-border: ${cardBorder};
    --radius:      ${borderRadius};
  }

  /* ── Base ── */
  html {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    color-scheme: light;
  }
  body {
    background: var(--bg);
    color: var(--text);
    font-size: clamp(1rem, 1.25vw + 0.5rem, 1.25rem);
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  /* ── Typography ── */
  h1, h2, h3 {
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: hsl(258 30% 30%);
  }
  h1 {
    font-size: clamp(1.75rem, 4vw + 0.5rem, 4rem);
    line-height: 1.08;
  }
  h2 {
    font-size: clamp(1.1rem, 2vw + 0.25rem, 1.5rem);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 400;
  }
  h3 {
    font-size: clamp(1rem, 1vw + 0.25rem, 1.25rem);
    font-weight: 400;
    letter-spacing: 0.02em;
  }
  p {
    color: var(--text-muted);
    font-size: clamp(0.875rem, 0.8vw + 0.35rem, 1rem);
    line-height: 1.7;
  }
  a {
    color: var(--accent);
    text-underline-offset: 4px;
    font-size: clamp(0.875rem, 0.8vw + 0.35rem, 1rem);
    transition: opacity 0.15s ease;
    text-decoration: underline;
  }
  a:hover, a:focus-visible { opacity: 0.7; }

  /* ── Outer layout ── */
  .fc1-wrap {
    display: grid;
    grid-template-columns:
      [full-start] minmax(1rem, 1fr)
      [content-start] min(1600px, 100% - 2rem)
      [content-end] minmax(1rem, 1fr);
  }
  .fc1-wrap > * { grid-column: 2 / -2; }

  /* ── Main: vertical flow with section gap ── */
  .fc1-main {
    display: flex;
    flex-direction: column;
    gap: clamp(2.5rem, 6vw, 5rem);
  }

  /* ── Hero split: hero text LEFT, featured cards RIGHT ── */
  .fc1-hero {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: start;
    padding-top: clamp(1rem, 3vw, 2rem);
  }
  @media (min-width: 720px) {
    .fc1-hero {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1024px) {
    .fc1-hero {
      grid-template-columns: 5fr 7fr;
    }
  }

  /* Hero left column */
  .fc1-hero-text {
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, 2vw, 1.25rem);
    padding-top: clamp(0.5rem, 1.5vw, 1rem);
  }

  /* Hero right column: Featured section */
  .fc1-featured {
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, 2vw, 1.25rem);
  }

  /* ── Featured cards: stacked list (alternative layout) ── */
  .fc1-featured-grid {
    display: flex;
    flex-direction: column;
    gap: clamp(0.625rem, 1.5vw, 1rem);
  }

  /* Featured card: title LEFT, body RIGHT side by side */
  .card-alt {
    display: grid;
    grid-template-columns: minmax(6rem, 1fr) 2fr;
    gap: 0.75rem 1.25rem;
    align-items: start;
    background: var(--accent-soft);
    border: 1px solid var(--card-border);
    border-radius: var(--radius);
    padding: clamp(0.875rem, 2vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }
  .card-alt:hover {
    box-shadow: 0 4px 18px hsl(258 40% 56% / 0.14);
    transform: translateY(-2px);
  }
  /* Title spans rows 1 & 2 on left */
  .card-alt h3 {
    grid-column: 1;
    grid-row: 1 / 3;
    align-self: center;
    padding-right: 1rem;
    border-right: 1.5px solid hsl(258 40% 88% / 0.6);
  }
  /* Body paragraph on right, row 1 */
  .card-alt .card-body {
    grid-column: 2;
    grid-row: 1;
  }
  /* Link on right, row 2 */
  .card-alt .card-link {
    grid-column: 2;
    grid-row: 2;
  }
  /* On very small screens: stack vertically */
  @media (max-width: 479px) {
    .card-alt {
      grid-template-columns: 1fr;
    }
    .card-alt h3 {
      grid-row: 1;
      border-right: none;
      padding-right: 0;
      border-bottom: 1.5px solid hsl(258 40% 88% / 0.6);
      padding-bottom: 0.5rem;
    }
    .card-alt .card-body { grid-column: 1; grid-row: 2; }
    .card-alt .card-link  { grid-column: 1; grid-row: 3; }
  }

  /* ── More section ── */
  .fc1-more {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2.5vw, 1.5rem);
    padding-top: clamp(1.5rem, 4vw, 3rem);
    border-top: 1px solid var(--border);
  }

  /* ── More cards: 4-column grid ── */
  .fc1-more-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
    gap: clamp(0.75rem, 2vw, 1.25rem);
  }
  @media (min-width: 600px) {
    .fc1-more-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 900px) {
    .fc1-more-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .card-std {
    display: flex;
    flex-direction: column;
    gap: clamp(0.5rem, 1.5vw, 0.875rem);
    background: var(--accent-soft);
    border: 1px solid var(--card-border);
    border-radius: var(--radius);
    padding: clamp(1rem, 2.5vw, 1.5rem);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }
  .card-std:hover {
    box-shadow: 0 4px 18px hsl(258 40% 56% / 0.14);
    transform: translateY(-2px);
  }
</style>

<div class="fc1-wrap">
  <main class="fc1-main">

    <!-- ── Hero: text left + featured cards right ── -->
    <div class="fc1-hero">

      <!-- Left: headline + subtitle -->
      <div class="fc1-hero-text">
        <h1>${heroHeading}</h1>
        <p>${heroBody}</p>
      </div>

      <!-- Right: featured cards stacked in alternative layout -->
      <div class="fc1-featured">
        <h2>${featuredHeading}</h2>
        <div class="fc1-featured-grid">

          <article class="card-alt">
            <h3>${card1Title}</h3>
            <p class="card-body">${card1Body}</p>
            <p class="card-link"><a href="${card1LinkUrl}">${card1LinkLabel}</a></p>
          </article>

          <article class="card-alt">
            <h3>${card2Title}</h3>
            <p class="card-body">${card2Body}</p>
            <p class="card-link"><a href="${card2LinkUrl}">${card2LinkLabel}</a></p>
          </article>

          <article class="card-alt">
            <h3>${card3Title}</h3>
            <p class="card-body">${card3Body}</p>
            <p class="card-link"><a href="${card3LinkUrl}">${card3LinkLabel}</a></p>
          </article>

          <article class="card-alt">
            <h3>${card4Title}</h3>
            <p class="card-body">${card4Body}</p>
            <p class="card-link"><a href="${card4LinkUrl}">${card4LinkLabel}</a></p>
          </article>

        </div>
      </div>
    </div>

    <!-- ── More containers: 4-column standard cards ── -->
    <section class="fc1-more">
      <h2>${moreSectionHeading}</h2>
      <div class="fc1-more-grid">

        <article class="card-std">
          <h3>${card5Title}</h3>
          <p>${card5Body}</p>
          <a href="${card5LinkUrl}">${card5LinkLabel}</a>
        </article>

        <article class="card-std">
          <h3>${card6Title}</h3>
          <p>${card6Body}</p>
          <a href="${card6LinkUrl}">${card6LinkLabel}</a>
        </article>

        <article class="card-std">
          <h3>${card7Title}</h3>
          <p>${card7Body}</p>
          <a href="${card7LinkUrl}">${card7LinkLabel}</a>
        </article>

        <article class="card-std">
          <h3>${card8Title}</h3>
          <p>${card8Body}</p>
          <a href="${card8LinkUrl}">${card8LinkLabel}</a>
        </article>

      </div>
    </section>

  </main>
</div>`;
}

export default function FeaturedContainersV1({ config }) {
  return null;
}