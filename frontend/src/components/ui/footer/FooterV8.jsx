// Named export — used by registry and generateComponentCode.js
export function getFooterV8Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const textColor = config.textColor || "#1a1a1a";
  const mutedColor = config.mutedColor || "#444444";
  const borderColor = config.borderColor || "#e5e5e5";

  const subscribeHeading = config.subscribeHeading || "Subscribe to get 10% OFF";
  const subscribeTagline = config.subscribeTagline || "Subscribe for store updates and discounts.";
  const subscribePlaceholder = config.subscribePlaceholder || "Email";
  const consentText = config.consentText || "By subscribing you agree to the";
  const termsUrl = config.termsUrl || "#";
  const privacyUrl = config.privacyUrl || "#";

  const col2Heading = config.col2Heading || "Shop";
  const col2Link1Label = config.col2Link1Label || "Shop All";
  const col2Link1Url = config.col2Link1Url || "#";
  const col2Link2Label = config.col2Link2Label || "Sale";
  const col2Link2Url = config.col2Link2Url || "#";
  const col2Link3Label = config.col2Link3Label || "Lookbook";
  const col2Link3Url = config.col2Link3Url || "#";
  const col2Link4Label = config.col2Link4Label || "Basic Collections";
  const col2Link4Url = config.col2Link4Url || "#";

  const col3Heading = config.col3Heading || "Customer care";
  const col3Link1Label = config.col3Link1Label || "My Account";
  const col3Link1Url = config.col3Link1Url || "#";
  const col3Link2Label = config.col3Link2Label || "Contact";
  const col3Link2Url = config.col3Link2Url || "#";
  const col3Link3Label = config.col3Link3Label || "FAQs";
  const col3Link3Url = config.col3Link3Url || "#";
  const col3Link4Label = config.col3Link4Label || "Support";
  const col3Link4Url = config.col3Link4Url || "#";
  const col3Link5Label = config.col3Link5Label || "Shipping and Returns";
  const col3Link5Url = config.col3Link5Url || "#";

  const col4Heading = config.col4Heading || "About";
  const col4Body = config.col4Body || "We only carry designs we believe in ethically and aesthetically – original, authentic pieces that are made to last.";
  const col4LearnMoreUrl = config.col4LearnMoreUrl || "#";
  const col4LearnMoreLabel = config.col4LearnMoreLabel || "Learn More";

  const facebookUrl = config.facebookUrl || "#";
  const twitterUrl = config.twitterUrl || "#";
  const instagramUrl = config.instagramUrl || "#";
  const tiktokUrl = config.tiktokUrl || "#";
  const pinterestUrl = config.pinterestUrl || "#";
  const youtubeUrl = config.youtubeUrl || "#";

  const copyrightText = config.copyrightText || "© 2026 SLEEK GLOSSY.";
  const privacyPolicyUrl = config.privacyPolicyUrl || "#";
  const termsServiceUrl = config.termsServiceUrl || "#";

  return `<!-- Footer V8 — Subscribe + Social + Payment Bar | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv8-footer {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
    font-size: 15px;
  }

  .fv8-main {
    padding: 52px 60px 40px;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: 48px;
    border-top: 1px solid ${borderColor};
  }

  .fv8-subscribe-col h2 {
    font-size: clamp(1.4rem, 1.2rem + 1vw, 2rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
    margin-bottom: 8px;
    color: ${textColor};
  }

  .fv8-tagline {
    font-size: 0.88rem;
    color: ${mutedColor};
    margin-bottom: 20px;
  }

  .fv8-email-form {
    display: flex;
    align-items: center;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #f8f8f8;
    margin-bottom: 14px;
    transition: border-color 0.2s;
  }

  .fv8-email-form:focus-within {
    border-color: #999;
    background: #fff;
  }

  .fv8-email-form input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 13px 16px;
    font-size: 0.88rem;
    color: ${textColor};
    outline: none;
  }

  .fv8-email-form input::placeholder { color: #aaa; }

  .fv8-email-form button {
    background: transparent;
    border: none;
    padding: 0 16px;
    height: 100%;
    cursor: pointer;
    color: #555;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    transition: color 0.15s;
  }

  .fv8-email-form button:hover { color: #111; }

  .fv8-consent-text {
    font-size: 0.75rem;
    color: #777;
    line-height: 1.5;
  }

  .fv8-consent-text a {
    color: ${textColor};
    text-decoration: underline;
  }

  .fv8-consent-text a:hover { color: #555; }

  .fv8-col h3 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: -0.01em;
    color: ${textColor};
  }

  .fv8-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .fv8-nav a {
    font-size: 0.88rem;
    color: ${textColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv8-nav a:hover { color: #666; }

  .fv8-about-desc {
    font-size: 0.88rem;
    color: ${mutedColor};
    line-height: 1.65;
    margin-bottom: 16px;
    max-width: 30ch;
  }

  .fv8-learn-more {
    font-size: 0.88rem;
    font-weight: 700;
    color: ${textColor};
    text-decoration: none;
    border-bottom: 2px solid ${textColor};
    padding-bottom: 2px;
    transition: opacity 0.15s;
  }

  .fv8-learn-more:hover { opacity: 0.6; }

  .fv8-bottom-wrapper {
    padding: 0 60px 28px;
  }

  .fv8-divider {
    border: none;
    border-top: 1px solid ${borderColor};
    margin-bottom: 20px;
  }

  .fv8-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .fv8-currency-selector {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    cursor: pointer;
    position: relative;
  }

  .fv8-flag {
    width: 24px;
    height: 16px;
    border-radius: 2px;
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
    background: repeating-linear-gradient(
      to bottom,
      #b22234 0px, #b22234 1.23px,
      #fff 1.23px, #fff 2.46px
    );
    position: relative;
  }

  .fv8-flag::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 46%;
    height: 54%;
    background: #3c3b6e;
  }

  .fv8-currency-selector select {
    background: transparent;
    border: none;
    font-size: 0.85rem;
    color: ${textColor};
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    padding-right: 14px;
  }

  .fv8-currency-selector select option { background: #fff; }

  .fv8-currency-selector .fv8-caret {
    position: absolute;
    right: 0;
    pointer-events: none;
    font-size: 0.65rem;
    color: #555;
  }

  .fv8-social-icons {
    display: flex;
    align-items: center;
    gap: 18px;
    list-style: none;
  }

  .fv8-social-icons a {
    color: ${textColor};
    display: flex;
    align-items: center;
    transition: color 0.15s, transform 0.15s;
  }

  .fv8-social-icons a:hover {
    color: #555;
    transform: translateY(-1px);
  }

  .fv8-social-icons svg {
    width: 19px;
    height: 19px;
    fill: currentColor;
  }

  .fv8-row-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .fv8-copyright {
    font-size: 0.8rem;
    color: #555;
  }

  .fv8-copyright a {
    color: ${textColor};
    text-decoration: underline;
  }

  .fv8-links-payment {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .fv8-policy-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  .fv8-policy-links a {
    font-size: 0.8rem;
    color: #555;
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv8-policy-links a:hover { color: #111; }

  .fv8-payment-icons {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .fv8-pay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    padding: 0 7px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: 800;
    min-width: 42px;
  }

  .fv8-pay-visa     { color: #1a1f71; font-size: 0.82rem; font-style: italic; letter-spacing: -0.02em; }
  .fv8-pay-mastercard { padding: 0 4px; }
  .fv8-pay-amex     { background: #016fcf; border-color: #016fcf; color: #fff; font-size: 0.48rem; letter-spacing: 0.04em; line-height: 1.2; text-align: center; }
  .fv8-pay-paypal   { color: #003087; font-size: 0.62rem; font-weight: 900; letter-spacing: -0.02em; }
  .fv8-pay-diners   { color: #004b87; font-size: 0.48rem; letter-spacing: 0.03em; text-align: center; line-height: 1.2; }
  .fv8-pay-discover { color: #e65c00; font-size: 0.55rem; font-weight: 800; }

  /* ── Tablet ── */
  @media (max-width: 960px) {
    .fv8-main {
      grid-template-columns: 1fr 1fr;
      padding: 40px 28px 32px;
      gap: 32px;
    }
    .fv8-subscribe-col {
      grid-column: 1 / -1;
    }
    .fv8-bottom-wrapper { padding: 0 28px 24px; }
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    .fv8-main {
      grid-template-columns: 1fr;
      padding: 28px 20px 24px;
      gap: 28px;
    }
    .fv8-subscribe-col {
      grid-column: auto;
    }
    .fv8-bottom-wrapper { padding: 0 20px 20px; }
    .fv8-row-1 {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    .fv8-row-2 {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .fv8-links-payment {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .fv8-policy-links {
      flex-wrap: wrap;
      gap: 12px;
    }
    .fv8-payment-icons {
      flex-wrap: wrap;
      gap: 6px;
    }
    .fv8-social-icons {
      flex-wrap: wrap;
      gap: 14px;
    }
    .fv8-subscribe-col h2 { font-size: 1.5rem; }
    .fv8-email-form { max-width: 100%; }
  }

  /* ── Small phones ── */
  @media (max-width: 380px) {
    .fv8-main { padding: 24px 16px 20px; gap: 24px; }
    .fv8-bottom-wrapper { padding: 0 16px 16px; }
    .fv8-subscribe-col h2 { font-size: 1.3rem; }
  }
</style>

<footer class="fv8-footer">

  <div class="fv8-main">

    <div class="fv8-subscribe-col">
      <h2>${subscribeHeading}</h2>
      <p class="fv8-tagline">${subscribeTagline}</p>
      <form method="post" action="/contact#contact_form" id="ContactFooter" accept-charset="UTF-8" class="fv8-email-form">
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
          placeholder="${subscribePlaceholder}"
          aria-label="Email address"
          required
        />
        <button type="submit" aria-label="Subscribe">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </form>
      {% if form.errors %}
        <div id="ContactFooter-error" style="margin-top: 10px; color: #d64545; font-size: 14px; margin-left: 10px;">
          {{ form.errors.translated_fields.email | capitalize }}
          {{ form.errors.messages.email }}
        </div>
      {% endif %}
      {% if form.posted_successfully? %}
        <div id="ContactFooter-success" tabindex="-1" autofocus style="margin-top: 10px; color: #2e7d32; font-size: 14px; margin-left: 10px;">
          Thanks for subscribing!
        </div>
      {% endif %}
      <p class="fv8-consent-text">
        ${consentText} <a href="${termsUrl}">Terms of Use</a> &amp; <a href="${privacyUrl}">Privacy Policy.</a>
      </p>
    </div>

    <div class="fv8-col">
      <h3>${col2Heading}</h3>
      <ul class="fv8-nav">
        <li><a href="${col2Link1Url}">${col2Link1Label}</a></li>
        <li><a href="${col2Link2Url}">${col2Link2Label}</a></li>
        <li><a href="${col2Link3Url}">${col2Link3Label}</a></li>
        <li><a href="${col2Link4Url}">${col2Link4Label}</a></li>
      </ul>
    </div>

    <div class="fv8-col">
      <h3>${col3Heading}</h3>
      <ul class="fv8-nav">
        <li><a href="${col3Link1Url}">${col3Link1Label}</a></li>
        <li><a href="${col3Link2Url}">${col3Link2Label}</a></li>
        <li><a href="${col3Link3Url}">${col3Link3Label}</a></li>
        <li><a href="${col3Link4Url}">${col3Link4Label}</a></li>
        <li><a href="${col3Link5Url}">${col3Link5Label}</a></li>
      </ul>
    </div>

    <div class="fv8-col">
      <h3>${col4Heading}</h3>
      <p class="fv8-about-desc">${col4Body}</p>
      <a href="${col4LearnMoreUrl}" class="fv8-learn-more">${col4LearnMoreLabel}</a>
    </div>

  </div>

  <div class="fv8-bottom-wrapper">
    <hr class="fv8-divider" />

    <div class="fv8-row-1">
      <div class="fv8-currency-selector">
        <span class="fv8-flag" aria-hidden="true"></span>
        <select aria-label="Select currency">
          <option value="USD">United States (USD $)</option>
          <option value="GBP">United Kingdom (GBP £)</option>
          <option value="EUR">Europe (EUR €)</option>
          <option value="PKR">Pakistan (PKR &#8360;)</option>
        </select>
        <span class="fv8-caret">&#8964;</span>
      </div>

      <ul class="fv8-social-icons">
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
        <li><a href="${pinterestUrl}" aria-label="Pinterest">
          <svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
        </a></li>
        <li><a href="${youtubeUrl}" aria-label="YouTube">
          <svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        </a></li>
      </ul>
    </div>

    <div class="fv8-row-2">
      <p class="fv8-copyright">
        ${copyrightText} <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Powered by Shopify</a>
      </p>

      <div class="fv8-links-payment">
        <ul class="fv8-policy-links">
          <li><a href="${privacyPolicyUrl}">Privacy Policy</a></li>
          <li><a href="${termsServiceUrl}">Terms of Service</a></li>
        </ul>

        <div class="fv8-payment-icons" aria-label="Accepted payment methods">
          <span class="fv8-pay-badge fv8-pay-visa">VISA</span>
          <span class="fv8-pay-badge fv8-pay-mastercard">
            <svg width="36" height="20" viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="11" r="9" fill="#eb001b"/>
              <circle cx="23" cy="11" r="9" fill="#f79e1b"/>
              <path d="M18 4.2a9 9 0 0 1 0 13.6A9 9 0 0 1 18 4.2z" fill="#ff5f00"/>
            </svg>
          </span>
          <span class="fv8-pay-badge fv8-pay-amex">AMERICAN<br>EXPRESS</span>
          <span class="fv8-pay-badge fv8-pay-paypal">
            <span style="color:#009cde;">Pay</span><span style="color:#003087;">Pal</span>
          </span>
          <span class="fv8-pay-badge fv8-pay-diners">DINERS<br>CLUB</span>
          <span class="fv8-pay-badge fv8-pay-discover">DISCOVER</span>
        </div>
      </div>
    </div>

  </div>

</footer>

</script>`;
}

// Default export — always returns null; editor renders via getCode() → iframe
export default function FooterV8({ config }) {
  return null;
}