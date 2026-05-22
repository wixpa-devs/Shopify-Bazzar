// Named export — used by registry and generateComponentCode.js
export function getFooterV9Code(config = {}) {
  const bgColor             = config.bgColor             || "#0d1f2d";
  const textColor           = config.textColor           || "#d0d8e0";
  const headingColor        = config.headingColor        || "#ffffff";
  const mutedColor          = config.mutedColor          || "#8fa0b0";
  const dimColor            = config.dimColor            || "#5a6f80";
  const borderColor         = config.borderColor         || "rgba(255,255,255,0.08)";

  // Info bar
  const info1Label          = config.info1Label          || "Customer Service";
  const info1Value          = config.info1Value          || "Mon–Sat, 9am–5pm EST.";
  const info2Label          = config.info2Label          || "Call Us";
  const info2Value          = config.info2Value          || "+1 888-234-1234 (toll-free)";
  const info3Label          = config.info3Label          || "Get in Touch";
  const info3Value          = config.info3Value          || "touch@gracestore.com";
  const info4Label          = config.info4Label          || "Address";
  const info4Value          = config.info4Value          || "382 NE 191st St # 87394 Miami";

  // Newsletter
  const newsletterHeading   = config.newsletterHeading   || "Join Our Newsletter";
  const newsletterTagline   = config.newsletterTagline   || "Sign up to our newsletter & receive 10% off your first order.";
  const emailPlaceholder    = config.emailPlaceholder    || "Enter your email";
  const signUpLabel         = config.signUpLabel         || "Sign Up";
  const consentText         = config.consentText         || "By subscribing you agree to the";
  const termsUrl            = config.termsUrl            || "#";
  const privacyUrl          = config.privacyUrl          || "#";

  // Column 2
  const col2Heading         = config.col2Heading         || "Company";
  const col2Link1Label      = config.col2Link1Label      || "Our Story";
  const col2Link1Url        = config.col2Link1Url        || "#";
  const col2Link2Label      = config.col2Link2Label      || "Contact";
  const col2Link2Url        = config.col2Link2Url        || "#";
  const col2Link3Label      = config.col2Link3Label      || "FAQs";
  const col2Link3Url        = config.col2Link3Url        || "#";
  const col2Link4Label      = config.col2Link4Label      || "Blog";
  const col2Link4Url        = config.col2Link4Url        || "#";
  const col2Link5Label      = config.col2Link5Label      || "Find a Store";
  const col2Link5Url        = config.col2Link5Url        || "#";

  // Column 3
  const col3Heading         = config.col3Heading         || "Collection";
  const col3Link1Label      = config.col3Link1Label      || "Shipping";
  const col3Link1Url        = config.col3Link1Url        || "#";
  const col3Link2Label      = config.col3Link2Label      || "Returns & Refunds";
  const col3Link2Url        = config.col3Link2Url        || "#";
  const col3Link3Label      = config.col3Link3Label      || "Warranty";
  const col3Link3Url        = config.col3Link3Url        || "#";
  const col3Link4Label      = config.col3Link4Label      || "Track Order";
  const col3Link4Url        = config.col3Link4Url        || "#";
  const col3Link5Label      = config.col3Link5Label      || "Secure Payment";
  const col3Link5Url        = config.col3Link5Url        || "#";

  // Column 4
  const col4Heading         = config.col4Heading         || "Shop";
  const col4Link1Label      = config.col4Link1Label      || "Skin Care";
  const col4Link1Url        = config.col4Link1Url        || "#";
  const col4Link2Label      = config.col4Link2Label      || "Makeup";
  const col4Link2Url        = config.col4Link2Url        || "#";
  const col4Link3Label      = config.col4Link3Label      || "Body Care";
  const col4Link3Url        = config.col4Link3Url        || "#";
  const col4Link4Label      = config.col4Link4Label      || "Hair Care";
  const col4Link4Url        = config.col4Link4Url        || "#";
  const col4Link5Label      = config.col4Link5Label      || "Moisturizer";
  const col4Link5Url        = config.col4Link5Url        || "#";
  const col4Link6Label      = config.col4Link6Label      || "Accessories";
  const col4Link6Url        = config.col4Link6Url        || "#";

  // Social
  const facebookUrl         = config.facebookUrl         || "#";
  const twitterUrl          = config.twitterUrl          || "#";
  const instagramUrl        = config.instagramUrl        || "#";
  const tiktokUrl           = config.tiktokUrl           || "#";

  // Bottom bar
  const copyrightText       = config.copyrightText       || "© 2026 Hyper Ceramida.";
  const termsServiceUrl     = config.termsServiceUrl     || "#";
  const privacyPolicyUrl    = config.privacyPolicyUrl    || "#";

  return `<!-- Footer V9 — Dark Info Bar + Newsletter + Social | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv9-footer {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
    font-size: 14px;
  }

  /* ── Info Bar ── */
  .fv9-info-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-bottom: 1px solid ${borderColor};
    padding: 18px 48px;
  }

  .fv9-info-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .fv9-info-item + .fv9-info-item {
    border-left: 1px solid ${borderColor};
    padding-left: 28px;
  }

  .fv9-info-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;
    opacity: 0.75;
    color: ${textColor};
  }

  .fv9-info-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }

  .fv9-info-text .fv9-label {
    font-size: 0.78rem;
    font-weight: 600;
    color: ${headingColor};
    margin-bottom: 3px;
  }

  .fv9-info-text .fv9-value {
    font-size: 0.75rem;
    color: ${mutedColor};
    line-height: 1.4;
  }

  /* ── Footer Body ── */
  .fv9-body {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 40px;
    padding: 40px 48px 36px;
  }

  .fv9-newsletter-col h2 {
    font-size: clamp(1.2rem, 1rem + 0.8vw, 1.6rem);
    font-weight: 700;
    color: ${headingColor};
    margin-bottom: 8px;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .fv9-tagline {
    font-size: 0.78rem;
    color: ${mutedColor};
    margin-bottom: 18px;
    line-height: 1.5;
    max-width: 32ch;
  }

  .fv9-email-form {
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
  }

  .fv9-email-form input {
    flex: 1;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 0.78rem;
    color: ${headingColor};
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }

  .fv9-email-form input::placeholder { color: ${dimColor}; }

  .fv9-email-form input:focus {
    border-color: rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
  }

  .fv9-email-form button {
    background: ${headingColor};
    color: ${bgColor};
    border: none;
    border-radius: 6px;
    padding: 10px 18px;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
  }

  .fv9-email-form button:hover {
    background: #fff;
    transform: translateY(-1px);
  }

  .fv9-consent-text {
    font-size: 0.7rem;
    color: ${dimColor};
    line-height: 1.5;
  }

  .fv9-consent-text a {
    color: ${mutedColor};
    text-decoration: underline;
  }

  .fv9-currency-block {
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid ${borderColor};
  }

  .fv9-currency-selector {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.78rem;
    color: ${headingColor};
    margin-bottom: 14px;
    cursor: pointer;
    width: fit-content;
    position: relative;
  }

  .fv9-flag {
    width: 22px;
    height: 14px;
    border-radius: 2px;
    background: repeating-linear-gradient(to bottom, #b22234 0, #b22234 1.08px, #fff 1.08px, #fff 2.16px);
    position: relative;
    flex-shrink: 0;
  }

  .fv9-flag::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 42%;
    height: 54%;
    background: #3c3b6e;
  }

  .fv9-currency-selector select {
    background: transparent;
    border: none;
    color: ${headingColor};
    font-size: 0.78rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
  }

  .fv9-currency-selector select option { background: ${bgColor}; }

  .fv9-currency-caret {
    font-size: 0.6rem;
    color: ${mutedColor};
  }

  .fv9-payment-icons {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  }

  .fv9-pay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    padding: 0 6px;
    background: #fff;
    border-radius: 4px;
    min-width: 38px;
    font-size: 0.55rem;
    font-weight: 800;
  }

  .fv9-pay-visa     { color: #1a1f71; font-size: 0.78rem; font-style: italic; letter-spacing: -0.02em; }
  .fv9-pay-mastercard { padding: 0 3px; }
  .fv9-pay-amex     { background: #016fcf; color: #fff; font-size: 0.44rem; letter-spacing: 0.04em; line-height: 1.2; text-align: center; }
  .fv9-pay-paypal   { color: #003087; font-size: 0.6rem; font-weight: 900; }
  .fv9-pay-diners   { color: #004b87; font-size: 0.44rem; letter-spacing: 0.03em; text-align: center; line-height: 1.2; }
  .fv9-pay-discover { color: #e65c00; font-size: 0.5rem; font-weight: 800; }

  /* ── Nav Cols ── */
  .fv9-col h3 {
    font-size: 0.88rem;
    font-weight: 700;
    color: ${headingColor};
    margin-bottom: 18px;
    letter-spacing: -0.01em;
  }

  .fv9-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .fv9-nav a {
    font-size: 0.8rem;
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv9-nav a:hover { color: ${headingColor}; }

  /* ── Bottom Bar ── */
  .fv9-bottom {
    border-top: 1px solid ${borderColor};
    padding: 16px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .fv9-bottom-left {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .fv9-copyright {
    font-size: 0.75rem;
    color: ${dimColor};
  }

  .fv9-copyright a { color: ${mutedColor}; text-decoration: none; }
  .fv9-copyright a:hover { text-decoration: underline; }

  .fv9-social-icons {
    display: flex;
    align-items: center;
    gap: 16px;
    list-style: none;
  }

  .fv9-social-icons a {
    color: ${mutedColor};
    display: flex;
    align-items: center;
    transition: color 0.15s, transform 0.15s;
  }

  .fv9-social-icons a:hover {
    color: ${headingColor};
    transform: translateY(-2px);
  }

  .fv9-social-icons svg {
    width: 17px;
    height: 17px;
    fill: currentColor;
  }

  .fv9-bottom-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .fv9-policy-links {
    list-style: none;
    display: flex;
    gap: 18px;
  }

  .fv9-policy-links a {
    font-size: 0.75rem;
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv9-policy-links a:hover { color: ${headingColor}; }

  /* ── Tablet ── */
  @media (max-width: 900px) {
    .fv9-info-bar {
      grid-template-columns: repeat(2, 1fr);
      padding: 16px 24px;
      gap: 14px;
    }
    .fv9-info-item + .fv9-info-item { border-left: none; padding-left: 0; }
    .fv9-info-item:nth-child(2) { border-left: 1px solid ${borderColor}; padding-left: 24px; }
    .fv9-body {
      grid-template-columns: 1fr 1fr;
      padding: 32px 24px;
      gap: 28px;
    }
    .fv9-newsletter-col { grid-column: 1 / -1; }
    .fv9-bottom { padding: 14px 24px; flex-direction: column; align-items: flex-start; }
  }

  /* ── Mobile ── */
  @media (max-width: 560px) {
    .fv9-info-bar {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .fv9-info-item:nth-child(2) { border-left: none; padding-left: 0; }
    .fv9-body {
      grid-template-columns: 1fr;
      padding: 24px 20px;
    }
    .fv9-newsletter-col { grid-column: auto; }
    .fv9-email-form { flex-direction: column; }
    .fv9-email-form input { width: 100%; }
    .fv9-email-form button { width: 100%; justify-content: center; padding: 12px; }
    .fv9-bottom { padding: 14px 20px; }
    .fv9-bottom-right { flex-wrap: wrap; }
    .fv9-policy-links { flex-wrap: wrap; gap: 12px; }
    .fv9-social-icons { flex-wrap: wrap; gap: 14px; }
    .fv9-payment-icons { gap: 6px; }
  }

  /* ── Small phones ── */
  @media (max-width: 380px) {
    .fv9-info-bar { padding: 14px 16px; }
    .fv9-body { padding: 20px 16px; }
    .fv9-bottom { padding: 12px 16px; }
  }
</style>

<footer class="fv9-footer">

  <!-- Info Bar -->
  <div class="fv9-info-bar">
    <div class="fv9-info-item">
      <div class="fv9-info-icon">
        <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
      <div class="fv9-info-text">
        <p class="fv9-label">${info1Label}</p>
        <p class="fv9-value">${info1Value}</p>
      </div>
    </div>
    <div class="fv9-info-item">
      <div class="fv9-info-icon">
        <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13 1 .36 1.97.72 2.9a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.93.36 1.9.6 2.9.72a2 2 0 0 1 1.72 2.01z"/>
        </svg>
      </div>
      <div class="fv9-info-text">
        <p class="fv9-label">${info2Label}</p>
        <p class="fv9-value">${info2Value}</p>
      </div>
    </div>
    <div class="fv9-info-item">
      <div class="fv9-info-icon">
        <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <div class="fv9-info-text">
        <p class="fv9-label">${info3Label}</p>
        <p class="fv9-value">${info3Value}</p>
      </div>
    </div>
    <div class="fv9-info-item">
      <div class="fv9-info-icon">
        <svg viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <div class="fv9-info-text">
        <p class="fv9-label">${info4Label}</p>
        <p class="fv9-value">${info4Value}</p>
      </div>
    </div>
  </div>

  <!-- Footer Body -->
  <div class="fv9-body">

    <div class="fv9-newsletter-col">
      <h2>${newsletterHeading}</h2>
      <p class="fv9-tagline">${newsletterTagline}</p>
      <form method="post" action="/contact#contact_form" id="ContactFooter" accept-charset="UTF-8" class="fv9-email-form">
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
        <button type="submit">${signUpLabel}</button>
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
      <p class="fv9-consent-text">${consentText} <a href="${termsUrl}">Terms of Use</a> &amp; <a href="${privacyUrl}">Privacy Policy.</a></p>

      <div class="fv9-currency-block">
        <div class="fv9-currency-selector">
          <span class="fv9-flag" aria-hidden="true"></span>
          <select aria-label="Select currency">
            <option value="USD">United States (USD $)</option>
            <option value="GBP">United Kingdom (GBP £)</option>
            <option value="EUR">Europe (EUR €)</option>
            <option value="PKR">Pakistan (PKR &#8360;)</option>
          </select>
          <span class="fv9-currency-caret">&#9650;</span>
        </div>
        <div class="fv9-payment-icons" aria-label="Accepted payment methods">
          <span class="fv9-pay-badge fv9-pay-visa">VISA</span>
          <span class="fv9-pay-badge fv9-pay-mastercard">
            <svg width="34" height="20" viewBox="0 0 34 22" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="11" r="9" fill="#eb001b"/>
              <circle cx="22" cy="11" r="9" fill="#f79e1b"/>
              <path d="M17 4.2a9 9 0 0 1 0 13.6A9 9 0 0 1 17 4.2z" fill="#ff5f00"/>
            </svg>
          </span>
          <span class="fv9-pay-badge fv9-pay-amex">AMERICAN<br>EXPRESS</span>
          <span class="fv9-pay-badge fv9-pay-paypal">
            <span style="color:#009cde;">Pay</span><span style="color:#003087;">Pal</span>
          </span>
          <span class="fv9-pay-badge fv9-pay-diners">DINERS<br>CLUB</span>
          <span class="fv9-pay-badge fv9-pay-discover">DISCOVER</span>
        </div>
      </div>
    </div>

    <div class="fv9-col">
      <h3>${col2Heading}</h3>
      <ul class="fv9-nav">
        <li><a href="${col2Link1Url}">${col2Link1Label}</a></li>
        <li><a href="${col2Link2Url}">${col2Link2Label}</a></li>
        <li><a href="${col2Link3Url}">${col2Link3Label}</a></li>
        <li><a href="${col2Link4Url}">${col2Link4Label}</a></li>
        <li><a href="${col2Link5Url}">${col2Link5Label}</a></li>
      </ul>
    </div>

    <div class="fv9-col">
      <h3>${col3Heading}</h3>
      <ul class="fv9-nav">
        <li><a href="${col3Link1Url}">${col3Link1Label}</a></li>
        <li><a href="${col3Link2Url}">${col3Link2Label}</a></li>
        <li><a href="${col3Link3Url}">${col3Link3Label}</a></li>
        <li><a href="${col3Link4Url}">${col3Link4Label}</a></li>
        <li><a href="${col3Link5Url}">${col3Link5Label}</a></li>
      </ul>
    </div>

    <div class="fv9-col">
      <h3>${col4Heading}</h3>
      <ul class="fv9-nav">
        <li><a href="${col4Link1Url}">${col4Link1Label}</a></li>
        <li><a href="${col4Link2Url}">${col4Link2Label}</a></li>
        <li><a href="${col4Link3Url}">${col4Link3Label}</a></li>
        <li><a href="${col4Link4Url}">${col4Link4Label}</a></li>
        <li><a href="${col4Link5Url}">${col4Link5Label}</a></li>
        <li><a href="${col4Link6Url}">${col4Link6Label}</a></li>
      </ul>
    </div>

  </div>

  <!-- Bottom Bar -->
  <div class="fv9-bottom">
    <div class="fv9-bottom-left">
      <p class="fv9-copyright">${copyrightText} <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Powered by Shopify</a></p>
      <ul class="fv9-social-icons">
        <li><a href="${facebookUrl}" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a></li>
        <li><a href="${twitterUrl}" aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a></li>
        <li><a href="${instagramUrl}" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a></li>
        <li><a href="${tiktokUrl}" aria-label="TikTok">
          <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
        </a></li>
      </ul>
    </div>
    <div class="fv9-bottom-right">
      <ul class="fv9-policy-links">
        <li><a href="${termsServiceUrl}">Terms of Service</a></li>
        <li><a href="${privacyPolicyUrl}">Privacy Policy</a></li>
      </ul>
    </div>
  </div>

</footer>

`;
}

// Default export — always returns null; editor renders via getCode() → iframe
export default function FooterV9({ config }) {
  return null;
}