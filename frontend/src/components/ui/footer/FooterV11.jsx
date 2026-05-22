export function getFooterV11Code(config = {}) {
  const bgColor          = config.bgColor          || "#ffffff";
  const textColor        = config.textColor        || "#1a1a1a";
  const mutedColor       = config.mutedColor       || "#555555";
  const dimColor         = config.dimColor         || "#888888";
  const navHeadingColor  = config.navHeadingColor  || "#111111";
  const borderColor      = config.borderColor      || "#e5e5e5";
  const inputBg          = config.inputBg          || "#f7f7f7";
  const btnBg            = config.btnBg            || "#1a1a1a";
  const btnColor         = config.btnColor         || "#ffffff";
  const scrollBtnBg      = config.scrollBtnBg      || "#333333";

  // Credits col
  const creditsHeading   = config.creditsHeading   || "Credits";
  const creditsBody      = config.creditsBody      || "Special thanks to";
  const creditsBrand     = config.creditsBrand     || "The Mod Cabin";
  const creditsBody2     = config.creditsBody2     || "for generously providing us with their stunning product imagery. Kindly visit their website to make real purchases of their products.";

  // Subscribe col
  const subscribeHeading = config.subscribeHeading || "Subscribe for Exclusive Updates";
  const emailPlaceholder = config.emailPlaceholder || "E-mail";
  const btnLabel         = config.btnLabel         || "SUBSCRIBE";
  const consentText      = config.consentText      || "By subscribing, you agree to our";
  const termsUrl         = config.termsUrl         || "#";
  const privacyUrl       = config.privacyUrl       || "#";

  // Col 2 — Shop
  const col2Heading      = config.col2Heading      || "Shop";
  const col2Link1Label   = config.col2Link1Label   || "Shop All";
  const col2Link1Url     = config.col2Link1Url     || "#";
  const col2Link2Label   = config.col2Link2Label   || "Sale";
  const col2Link2Url     = config.col2Link2Url     || "#";
  const col2Link3Label   = config.col2Link3Label   || "New In";
  const col2Link3Url     = config.col2Link3Url     || "#";
  const col2Link4Label   = config.col2Link4Label   || "Bestsellers";
  const col2Link4Url     = config.col2Link4Url     || "#";

  // Col 3 — Collections
  const col3Heading      = config.col3Heading      || "Collections";
  const col3Link1Label   = config.col3Link1Label   || "Body";
  const col3Link1Url     = config.col3Link1Url     || "#";
  const col3Link2Label   = config.col3Link2Label   || "Face";
  const col3Link2Url     = config.col3Link2Url     || "#";
  const col3Link3Label   = config.col3Link3Label   || "Hair";
  const col3Link3Url     = config.col3Link3Url     || "#";
  const col3Link4Label   = config.col3Link4Label   || "Shaving";
  const col3Link4Url     = config.col3Link4Url     || "#";

  // Col 4 — Journal
  const col4Heading      = config.col4Heading      || "Journal";
  const col4Link1Label   = config.col4Link1Label   || "Holistic Beauty Routines";
  const col4Link1Url     = config.col4Link1Url     || "#";
  const col4Link2Label   = config.col4Link2Label   || "Mental Wellbeing";
  const col4Link2Url     = config.col4Link2Url     || "#";
  const col4Link3Label   = config.col4Link3Label   || "Essential Vitamins";
  const col4Link3Url     = config.col4Link3Url     || "#";

  // Col 5 — Company
  const col5Heading      = config.col5Heading      || "Company";
  const col5Link1Label   = config.col5Link1Label   || "Journal";
  const col5Link1Url     = config.col5Link1Url     || "#";
  const col5Link2Label   = config.col5Link2Label   || "About";
  const col5Link2Url     = config.col5Link2Url     || "#";

  // Bottom bar
  const brandName        = config.brandName        || "Steel";
  const brandUrl         = config.brandUrl         || "#";
  const logoImageUrl     = config.logoImageUrl     || "";
  const copyrightText    = config.copyrightText    || "© Copyright,";
  const storeName        = config.storeName        || "Select Steel";
  const storeUrl         = config.storeUrl         || "#";
  const copyrightYear    = config.copyrightYear    || "2026";
  const policyUrl        = config.policyUrl        || "#";
  const termsServiceUrl  = config.termsServiceUrl  || "#";

  // Social
  const twitterUrl       = config.twitterUrl       || "#";
  const facebookUrl      = config.facebookUrl      || "#";
  const instagramUrl     = config.instagramUrl     || "#";
  const tiktokUrl        = config.tiktokUrl        || "#";

  return `<!-- Footer V11 — 6-Col Light + Scroll-to-Top | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv11-footer {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
    font-size: 14px;
  }

  /* ── Main Grid ── */
  .fv11-main {
    padding: 48px 60px 40px;
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr 1.4fr;
    gap: 32px;
    border-top: 1px solid ${borderColor};
  }

  /* ── Credits Col ── */
  .fv11-credits-col h3 {
    font-size: 0.88rem;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -0.01em;
    color: ${textColor};
  }

  .fv11-credits-col p {
    font-size: 0.78rem;
    color: ${mutedColor};
    line-height: 1.7;
    max-width: 28ch;
  }

  .fv11-credits-col p strong {
    color: ${textColor};
    font-weight: 600;
  }

  /* ── Nav Cols ── */
  .fv11-col h3 {
    font-size: 0.88rem;
    font-weight: 700;
    margin-bottom: 14px;
    letter-spacing: -0.01em;
    color: ${navHeadingColor};
  }

  .fv11-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .fv11-nav a {
    font-size: 0.82rem;
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv11-nav a:hover { color: ${navHeadingColor}; }

  .fv11-nav a.fv11-muted { color: #999; }
  .fv11-nav a.fv11-muted:hover { color: ${mutedColor}; }

  /* ── Subscribe Col ── */
  .fv11-subscribe-col h3 {
    font-size: 0.88rem;
    font-weight: 700;
    margin-bottom: 14px;
    letter-spacing: -0.01em;
    color: ${navHeadingColor};
  }

  .fv11-email-form {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 0;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .fv11-email-form input {
    flex: 1;
    border: none;
    padding: 11px 14px;
    font-size: 0.78rem;
    color: ${textColor};
    background: ${inputBg};
    outline: none;
    min-width: 0;
  }

  .fv11-email-form input::placeholder { color: #aaa; }

  .fv11-email-form input:focus { background: ${bgColor}; }

  .fv11-email-form button {
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 11px 18px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;
  }

  .fv11-email-form button:hover { background: #333; }

  .fv11-consent-text {
    font-size: 0.7rem;
    color: ${dimColor};
    line-height: 1.6;
  }

  .fv11-consent-text a {
    color: ${mutedColor};
    text-decoration: underline;
  }

  .fv11-consent-text a:hover { color: ${navHeadingColor}; }

  /* ── Bottom Bar ── */
  .fv11-bottom {
    border-top: 1px solid ${borderColor};
    padding: 18px 60px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    position: relative;
  }

  .fv11-brand-logo {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${navHeadingColor};
    letter-spacing: -0.04em;
    text-decoration: none;
    flex-shrink: 0;
  }

  .fv11-copyright {
    font-size: 0.75rem;
    color: ${dimColor};
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }

  .fv11-copyright a {
    color: ${mutedColor};
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .fv11-copyright a:hover { color: ${navHeadingColor}; }

  .fv11-policy-links {
    display: flex;
    gap: 20px;
    list-style: none;
    margin-left: 8px;
  }

  .fv11-policy-links a {
    font-size: 0.75rem;
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv11-policy-links a:hover { color: ${navHeadingColor}; }

  .fv11-payment-icons {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
  }

  .fv11-pay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 7px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background: #fff;
    min-width: 46px;
    font-size: 0.5rem;
    font-weight: 800;
  }

  .fv11-pay-visa     { color: #1a1f71; font-size: 0.85rem; font-style: italic; font-weight: 900; letter-spacing: -0.02em; }
  .fv11-pay-mc       { padding: 0 4px; }
  .fv11-pay-amex     { background: #016fcf; border-color: #016fcf; color: #fff; font-size: 0.44rem; letter-spacing: 0.04em; line-height: 1.2; text-align: center; }
  .fv11-pay-paypal   { font-weight: 900; font-size: 0.6rem; }
  .fv11-pay-diners   { color: #004b87; font-size: 0.44rem; letter-spacing: 0.02em; text-align: center; line-height: 1.2; }
  .fv11-pay-discover { color: #e65c00; font-size: 0.5rem; font-weight: 800; }

  .fv11-social-icons {
    display: flex;
    align-items: center;
    gap: 14px;
    list-style: none;
    flex-shrink: 0;
  }

  .fv11-social-icons a {
    color: #444;
    display: flex;
    align-items: center;
    transition: color 0.15s, transform 0.15s;
  }

  .fv11-social-icons a:hover { color: #000; transform: translateY(-1px); }

  .fv11-social-icons svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  .fv11-scroll-top {
    width: 36px;
    height: 36px;
    background: ${scrollBtnBg};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-shrink: 0;
    transition: background 0.2s, transform 0.2s;
  }

  .fv11-scroll-top:hover { background: #111; transform: translateY(-2px); }

  .fv11-scroll-top svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: none;
  }

  /* ── Tablet ── */
  @media (max-width: 1100px) {
    .fv11-main {
      grid-template-columns: repeat(3, 1fr);
      padding: 40px 32px;
      gap: 28px;
    }
    .fv11-bottom { padding: 16px 32px; }
  }

  /* ── Mobile ── */
  @media (max-width: 700px) {
    .fv11-main {
      grid-template-columns: 1fr 1fr;
      padding: 28px 20px;
      gap: 24px;
    }
    .fv11-bottom {
      padding: 14px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .fv11-payment-icons { margin-left: 0; flex-wrap: wrap; }
    .fv11-policy-links { margin-left: 0; flex-wrap: wrap; gap: 12px; }
    .fv11-scroll-top { display: none; }
  }

  /* ── Small phones ── */
  @media (max-width: 440px) {
    .fv11-main { grid-template-columns: 1fr; }
    .fv11-credits-col p { max-width: 100%; }
  }
</style>

<footer class="fv11-footer">

  <!-- Main Grid -->
  <div class="fv11-main">

    <div class="fv11-credits-col">
      <h3>${creditsHeading}</h3>
      <p>${creditsBody} <strong>${creditsBrand}</strong> ${creditsBody2}</p>
    </div>

    <div class="fv11-col">
      <h3>${col2Heading}</h3>
      <ul class="fv11-nav">
        <li><a href="${col2Link1Url}">${col2Link1Label}</a></li>
        <li><a href="${col2Link2Url}">${col2Link2Label}</a></li>
        <li><a href="${col2Link3Url}">${col2Link3Label}</a></li>
        <li><a href="${col2Link4Url}">${col2Link4Label}</a></li>
      </ul>
    </div>

    <div class="fv11-col">
      <h3>${col3Heading}</h3>
      <ul class="fv11-nav">
        <li><a href="${col3Link1Url}">${col3Link1Label}</a></li>
        <li><a href="${col3Link2Url}">${col3Link2Label}</a></li>
        <li><a href="${col3Link3Url}">${col3Link3Label}</a></li>
        <li><a href="${col3Link4Url}">${col3Link4Label}</a></li>
      </ul>
    </div>

    <div class="fv11-col">
      <h3>${col4Heading}</h3>
      <ul class="fv11-nav">
        <li><a href="${col4Link1Url}" class="fv11-muted">${col4Link1Label}</a></li>
        <li><a href="${col4Link2Url}" class="fv11-muted">${col4Link2Label}</a></li>
        <li><a href="${col4Link3Url}" class="fv11-muted">${col4Link3Label}</a></li>
      </ul>
    </div>

    <div class="fv11-col">
      <h3>${col5Heading}</h3>
      <ul class="fv11-nav">
        <li><a href="${col5Link1Url}">${col5Link1Label}</a></li>
        <li><a href="${col5Link2Url}">${col5Link2Label}</a></li>
      </ul>
    </div>

    <div class="fv11-subscribe-col">
      <h3>${subscribeHeading}</h3>
      <form method="post" action="/contact#contact_form" id="ContactFooter" accept-charset="UTF-8" class="fv11-email-form">
        <input type="hidden" name="form_type" value="customer">
        <input type="hidden" name="utf8" value="✓">
        <input type="hidden" name="contact[tags]" value="newsletter">
        <input
          type="email"
          name="contact[email]"
          value="{{ form.email }}"
          autocorrect="off"
          autocapitalize="off"
          autocomplete="email"
          {% if form.errors %}
            autofocus
            aria-invalid="true"
            aria-describedby="ContactFooter-error"
          {% elsif form.posted_successfully? %}
            aria-describedby="ContactFooter-success"
          {% endif %}
          placeholder="${emailPlaceholder}"
          aria-label="Email address"
          required
        />
        <button type="submit">${btnLabel}</button>
      </form>
      {% if form.errors %}
        <div id="ContactFooter-error" style="margin-top: 10px; color: #d64545; font-size: 14px;">
          {{ form.errors.translated_fields.email | capitalize }}
          {{ form.errors.messages.email }}
        </div>
      {% endif %}
      {% if form.posted_successfully? %}
        <div id="ContactFooter-success" tabindex="-1" autofocus style="margin-top: 10px; color: #2e7d32; font-size: 14px;">
          Thanks for subscribing!
        </div>
      {% endif %}
      <p class="fv11-consent-text">
        ${consentText} <a href="${termsUrl}">Terms of Use</a> and <a href="${privacyUrl}">Privacy Policy</a>.
      </p>
    </div>

  </div>

  <!-- Bottom Bar -->
  <div class="fv11-bottom">
    <a href="${brandUrl}" class="fv11-brand-logo">${logoImageUrl ? `<img src="${logoImageUrl}" alt="${brandName}" style="max-height:24px;width:auto;display:block;" />` : brandName}</a>
    <p class="fv11-copyright">
      ${copyrightText}&nbsp;<a href="${storeUrl}">${storeName}</a>, ${copyrightYear}.&nbsp;<a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Powered by Shopify</a>
    </p>
    <ul class="fv11-policy-links">
      <li><a href="${policyUrl}">Privacy policy</a></li>
      <li><a href="${termsServiceUrl}">Terms of service</a></li>
    </ul>
    <div class="fv11-payment-icons" aria-label="Accepted payment methods">
      <span class="fv11-pay-badge fv11-pay-visa">VISA</span>
      <span class="fv11-pay-badge fv11-pay-mc">
        <svg width="34" height="20" viewBox="0 0 34 22" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="11" r="9" fill="#eb001b"/>
          <circle cx="22" cy="11" r="9" fill="#f79e1b"/>
          <path d="M17 4.2a9 9 0 0 1 0 13.6A9 9 0 0 1 17 4.2z" fill="#ff5f00"/>
        </svg>
      </span>
      <span class="fv11-pay-badge fv11-pay-amex">AMERICAN<br>EXPRESS</span>
      <span class="fv11-pay-badge fv11-pay-paypal">
        <span style="color:#009cde;">Pay</span><span style="color:#003087;">Pal</span>
      </span>
      <span class="fv11-pay-badge fv11-pay-diners">DINERS<br>CLUB</span>
      <span class="fv11-pay-badge fv11-pay-discover">DISCOVER</span>
    </div>
    <ul class="fv11-social-icons">
      <li><a href="${twitterUrl}" aria-label="X (Twitter)">
        <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a></li>
      <li><a href="${facebookUrl}" aria-label="Facebook">
        <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a></li>
      <li><a href="${instagramUrl}" aria-label="Instagram">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a></li>
      <li><a href="${tiktokUrl}" aria-label="TikTok">
        <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
      </a></li>
    </ul>
    <button class="fv11-scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  </div>

</footer>

</script>`;
}

export default function FooterV11({ config }) {
  return null;
}