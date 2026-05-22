export function getFooterV10Code(config = {}) {
  const bgOuter          = config.bgOuter          || "#f2f2f2";
  const cardBg           = config.cardBg           || "#ffffff";
  const textColor        = config.textColor        || "#1a1a1a";
  const mutedColor       = config.mutedColor       || "#555555";
  const dimColor         = config.dimColor         || "#666666";
  const borderColor      = config.borderColor      || "#d0d0d0";
  const navHeadingColor  = config.navHeadingColor  || "#111111";
  const pillBg           = config.pillBg           || "#1a1a1a";
  const pillTextColor    = config.pillTextColor    || "#888888";
  const pillLinkColor    = config.pillLinkColor    || "#bbbbbb";

  const subscribeHeading = config.subscribeHeading || "Subscribe Now!";
  const subscribeTagline = config.subscribeTagline || "Stay up to date with our latest offers and product launches & be the first to get exclusive offers and sale information";
  const emailPlaceholder = config.emailPlaceholder || "Enter Your Email Address";

  const facebookUrl      = config.facebookUrl      || "#";
  const twitterUrl       = config.twitterUrl       || "#";
  const pinterestUrl     = config.pinterestUrl     || "#";
  const instagramUrl     = config.instagramUrl     || "#";
  const youtubeUrl       = config.youtubeUrl       || "#";

  const col2Heading      = config.col2Heading      || "Collections";
  const col2Link1Label   = config.col2Link1Label   || "Face Mask";
  const col2Link1Url     = config.col2Link1Url     || "#";
  const col2Link2Label   = config.col2Link2Label   || "Face Serum";
  const col2Link2Url     = config.col2Link2Url     || "#";
  const col2Link3Label   = config.col2Link3Label   || "Moisturizers";
  const col2Link3Url     = config.col2Link3Url     || "#";
  const col2Link4Label   = config.col2Link4Label   || "Sunscreens";
  const col2Link4Url     = config.col2Link4Url     || "#";

  const col3Heading      = config.col3Heading      || "Quick links";
  const col3Link1Label   = config.col3Link1Label   || "About Us";
  const col3Link1Url     = config.col3Link1Url     || "#";
  const col3Link2Label   = config.col3Link2Label   || "FAQ's";
  const col3Link2Url     = config.col3Link2Url     || "#";
  const col3Link3Label   = config.col3Link3Label   || "Contact";
  const col3Link3Url     = config.col3Link3Url     || "#";
  const col3Link4Label   = config.col3Link4Label   || "My Account";
  const col3Link4Url     = config.col3Link4Url     || "#";

  const col4Heading      = config.col4Heading      || "Need Help?";
  const col4Link1Label   = config.col4Link1Label   || "Blog";
  const col4Link1Url     = config.col4Link1Url     || "#";
  const col4Link2Label   = config.col4Link2Label   || "Privacy Policy";
  const col4Link2Url     = config.col4Link2Url     || "#";
  const col4Link3Label   = config.col4Link3Label   || "Refund Policy";
  const col4Link3Url     = config.col4Link3Url     || "#";
  const col4Link4Label   = config.col4Link4Label   || "Terms of Service";
  const col4Link4Url     = config.col4Link4Url     || "#";

  const copyrightText    = config.copyrightText    || "© 2026,";
  const brandName        = config.brandName        || "Adam";
  const brandUrl         = config.brandUrl         || "#";
  const logoImageUrl     = config.logoImageUrl     || "";
  const privacyUrl       = config.privacyUrl       || "#";
  const refundUrl        = config.refundUrl        || "#";
  const termsUrl         = config.termsUrl         || "#";

  return `<!-- Footer V10 — Light Card + Dark Pill Bottom | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv10-wrap {
    font-family: inherit;
    background: ${bgOuter};
    color: ${textColor};
    font-size: 13px;
  }

  /* ── Main Card ── */
  .fv10-main {
    background: ${cardBg};
    border-radius: 16px;
    margin: 16px;
    padding: 32px 36px;
    display: grid;
    grid-template-columns: 1.7fr 1fr 1fr 1fr;
    gap: 40px;
  }

  /* ── Subscribe Col ── */
  .fv10-subscribe-col h2 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
    color: ${textColor};
  }

  .fv10-tagline {
    font-size: 0.75rem;
    color: ${dimColor};
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 34ch;
  }

  .fv10-email-form {
    display: flex;
    align-items: center;
    border: 1px solid ${borderColor};
    border-radius: 8px;
    overflow: hidden;
    padding: 0 12px;
    gap: 8px;
    margin-bottom: 20px;
    background: ${cardBg};
    transition: border-color 0.2s;
  }

  .fv10-email-form:focus-within { border-color: #999; }

  .fv10-envelope-icon {
    color: #aaa;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .fv10-envelope-icon svg {
    width: 15px;
    height: 15px;
    stroke: currentColor;
    fill: none;
  }

  .fv10-email-form input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 11px 0;
    font-size: 0.75rem;
    color: ${textColor};
    outline: none;
  }

  .fv10-email-form input::placeholder { color: #bbb; }

  .fv10-email-form button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${mutedColor};
    display: flex;
    align-items: center;
    padding: 0;
    flex-shrink: 0;
    transition: color 0.15s, transform 0.15s;
  }

  .fv10-email-form button:hover { color: ${textColor}; transform: translateX(2px); }

  .fv10-email-form button svg {
    width: 15px;
    height: 15px;
    stroke: currentColor;
    fill: none;
  }

  .fv10-social-icons {
    display: flex;
    align-items: center;
    gap: 14px;
    list-style: none;
  }

  .fv10-social-icons a {
    color: #333;
    display: flex;
    align-items: center;
    transition: color 0.15s, transform 0.15s;
  }

  .fv10-social-icons a:hover { color: #000; transform: translateY(-2px); }

  .fv10-social-icons svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  /* ── Nav Cols ── */
  .fv10-col h3 {
    font-size: 0.82rem;
    font-weight: 700;
    margin-bottom: 14px;
    letter-spacing: -0.01em;
    color: ${navHeadingColor};
  }

  .fv10-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .fv10-nav a {
    font-size: 0.75rem;
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv10-nav a:hover { color: ${navHeadingColor}; }

  /* ── Dark Pill Bottom Bar ── */
  .fv10-bottom {
    background: ${pillBg};
    border-radius: 50px;
    margin: 0 16px 16px;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .fv10-lang-icon {
    color: #aaa;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .fv10-lang-icon svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    fill: none;
  }

  .fv10-bottom-center {
    flex: 1;
    text-align: center;
    font-size: 0.68rem;
    color: ${pillTextColor};
    line-height: 1.6;
  }

  .fv10-bottom-center a {
    color: ${pillLinkColor};
    text-decoration: underline;
  }

  .fv10-bottom-center a:hover { color: #fff; }

  .fv10-policy-row {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 2px;
  }

  .fv10-policy-row a {
    text-decoration: none;
    color: ${pillTextColor};
    transition: color 0.15s;
  }

  .fv10-policy-row a:hover { color: #fff; }

  .fv10-payment-icons {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  }

  .fv10-pay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    padding: 0 5px;
    background: #fff;
    border-radius: 3px;
    min-width: 32px;
    font-size: 0.44rem;
    font-weight: 800;
  }

  .fv10-pay-visa     { color: #1a1f71; font-size: 0.65rem; font-style: italic; letter-spacing: -0.02em; }
  .fv10-pay-mc       { padding: 0 3px; }
  .fv10-pay-amex     { background: #016fcf; color: #fff; font-size: 0.38rem; letter-spacing: 0.04em; line-height: 1.2; text-align: center; }
  .fv10-pay-paypal   { color: #003087; font-size: 0.5rem; font-weight: 900; }
  .fv10-pay-diners   { color: #004b87; font-size: 0.38rem; letter-spacing: 0.02em; text-align: center; line-height: 1.2; }
  .fv10-pay-discover { color: #e65c00; font-size: 0.42rem; font-weight: 800; }

  /* ── Tablet ── */
  @media (max-width: 860px) {
    .fv10-main {
      grid-template-columns: 1fr 1fr;
      padding: 24px;
      gap: 28px;
      margin: 12px;
    }
    .fv10-subscribe-col { grid-column: 1 / -1; }
    .fv10-bottom { margin: 0 12px 12px; border-radius: 20px; padding: 14px 20px; }
  }

  /* ── Mobile ── */
  @media (max-width: 540px) {
    .fv10-main {
      grid-template-columns: 1fr;
      margin: 10px;
      padding: 20px;
    }
    .fv10-subscribe-col { grid-column: auto; }
    .fv10-bottom {
      border-radius: 14px;
      margin: 0 10px 10px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .fv10-bottom-center { text-align: left; }
    .fv10-policy-row { justify-content: flex-start; flex-wrap: wrap; gap: 10px; }
    .fv10-payment-icons { flex-wrap: wrap; }
  }

  /* ── Small phones ── */
  @media (max-width: 380px) {
    .fv10-main { margin: 8px; padding: 16px; }
    .fv10-bottom { margin: 0 8px 8px; padding: 12px 16px; }
    .fv10-tagline { max-width: 100%; }
  }
</style>

<footer class="fv10-wrap">

  <!-- Main Card -->
  <div class="fv10-main">

    <div class="fv10-subscribe-col">
      <h2>${subscribeHeading}</h2>
      <p class="fv10-tagline">${subscribeTagline}</p>
      <form method="post" action="/contact#contact_form" id="ContactFooter" accept-charset="UTF-8" class="fv10-email-form">
        <input type="hidden" name="form_type" value="customer">
        <input type="hidden" name="utf8" value="✓">
        <input type="hidden" name="contact[tags]" value="newsletter">
        <span class="fv10-envelope-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </span>
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
        <button type="submit" aria-label="Subscribe">
          <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
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
      <ul class="fv10-social-icons">
        <li><a href="${facebookUrl}" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a></li>
        <li><a href="${twitterUrl}" aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a></li>
        <li><a href="${pinterestUrl}" aria-label="Pinterest">
          <svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
        </a></li>
        <li><a href="${instagramUrl}" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a></li>
        <li><a href="${youtubeUrl}" aria-label="YouTube">
          <svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        </a></li>
      </ul>
    </div>

    <div class="fv10-col">
      <h3>${col2Heading}</h3>
      <ul class="fv10-nav">
        <li><a href="${col2Link1Url}">${col2Link1Label}</a></li>
        <li><a href="${col2Link2Url}">${col2Link2Label}</a></li>
        <li><a href="${col2Link3Url}">${col2Link3Label}</a></li>
        <li><a href="${col2Link4Url}">${col2Link4Label}</a></li>
      </ul>
    </div>

    <div class="fv10-col">
      <h3>${col3Heading}</h3>
      <ul class="fv10-nav">
        <li><a href="${col3Link1Url}">${col3Link1Label}</a></li>
        <li><a href="${col3Link2Url}">${col3Link2Label}</a></li>
        <li><a href="${col3Link3Url}">${col3Link3Label}</a></li>
        <li><a href="${col3Link4Url}">${col3Link4Label}</a></li>
      </ul>
    </div>

    <div class="fv10-col">
      <h3>${col4Heading}</h3>
      <ul class="fv10-nav">
        <li><a href="${col4Link1Url}">${col4Link1Label}</a></li>
        <li><a href="${col4Link2Url}">${col4Link2Label}</a></li>
        <li><a href="${col4Link3Url}">${col4Link3Label}</a></li>
        <li><a href="${col4Link4Url}">${col4Link4Label}</a></li>
      </ul>
    </div>

  </div>

  <!-- Dark Pill Bottom Bar -->
  <div class="fv10-bottom">
    <div class="fv10-lang-icon" aria-label="Language selector">
      <svg viewBox="0 0 24 24" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </div>
    <div class="fv10-bottom-center">
      <div>${copyrightText} <a href="${brandUrl}">${logoImageUrl ? `<img src="${logoImageUrl}" alt="${brandName}" style="max-height:18px;width:auto;vertical-align:middle;" />` : brandName}</a> <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Powered by Shopify</a></div>
      <div class="fv10-policy-row">
        <a href="${privacyUrl}">Privacy policy</a>
        <a href="${refundUrl}">Refund policy</a>
        <a href="${termsUrl}">Terms of service</a>
      </div>
    </div>
    <div class="fv10-payment-icons" aria-label="Accepted payment methods">
      <span class="fv10-pay-badge fv10-pay-visa">VISA</span>
      <span class="fv10-pay-badge fv10-pay-mc">
        <svg width="30" height="18" viewBox="0 0 34 22" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="11" r="9" fill="#eb001b"/>
          <circle cx="22" cy="11" r="9" fill="#f79e1b"/>
          <path d="M17 4.2a9 9 0 0 1 0 13.6A9 9 0 0 1 17 4.2z" fill="#ff5f00"/>
        </svg>
      </span>
      <span class="fv10-pay-badge fv10-pay-amex">AMER<br>EXP</span>
      <span class="fv10-pay-badge fv10-pay-paypal">
        <span style="color:#009cde;">Pay</span><span style="color:#003087;">Pal</span>
      </span>
      <span class="fv10-pay-badge fv10-pay-diners">DIN<br>ERS</span>
      <span class="fv10-pay-badge fv10-pay-discover">DISC</span>
    </div>
  </div>

</footer>

</script>`;
}

export default function FooterV10({ config }) {
  return null;
}