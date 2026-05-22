import { useEffect, useRef } from "react";

export function getFooterV1Code(config = {}, options = {}) {
  const isShopifyExport = options.isShopifyExport ?? false;

  const bgColor = config.bgColor || "#0e0e0e";
  const textColor = config.textColor || "#f5f5f5";
  const textMuted = config.textMuted || "#9f9f9f";
  const borderColor = config.borderColor || "rgba(255,255,255,0.12)";
  const accentColor = config.accentColor || "#ffffff";
  const inputBg = config.inputBg || "#f1f1f1";
  const inputText = config.inputText || "#111111";

  const brandName = config.brandName || "Brand";
  const brandDesc =
    config.brandDesc || "A short brand description goes here.";

  const facebookUrl = config.facebookUrl || "#";
  const instagramUrl = config.instagramUrl || "#";
  const twitterUrl = config.twitterUrl || "#";
  const linkedinUrl = config.linkedinUrl || "#";
  const threadsUrl = config.threadsUrl || "#";

  const col2Heading = config.col2Heading || "Delivery & Returns";
  const col2Link1 = config.col2Link1 || "Shipping Policy";
  const col2Link2 = config.col2Link2 || "Returns";
  const col2Link3 = config.col2Link3 || "Track Order";
  const col2Link4 = config.col2Link4 || "FAQs";

  const col3Heading = config.col3Heading || "About";
  const col3Link1 = config.col3Link1 || "Our Story";
  const col3Link2 = config.col3Link2 || "Journal";
  const col3Link3 = config.col3Link3 || "Careers";
  const col3Link4 = config.col3Link4 || "Contact";

  const newsletterHeading = config.newsletterHeading || "Sign up to our newsletter";
  const newsletterText =
    config.newsletterText ||
    "Sign up for exclusive offers, original stories, events and more.";
  const newsletterPlaceholder = config.newsletterPlaceholder || "Your email";

  const copyrightText =
    config.copyrightText || "© 2026 Brand. All rights reserved.";
  const policy1 = config.policy1 || "Privacy Policy";
  const policy2 = config.policy2 || "Terms of Service";
  const policy3 = config.policy3 || "Refund Policy";
  const policy4 = config.policy4 || "Cookies";

  const newsletterMarkup = isShopifyExport
    ? `
{% form 'customer', id: 'ContactFooter', class: 'newsletter-form' %}
  {% if form.posted_successfully? %}
    <p class="newsletter-success">Thanks for subscribing!</p>
  {% endif %}

  {% if form.errors %}
    <div class="newsletter-error">
      {{ form.errors | default_errors }}
    </div>
  {% endif %}

  <input type="hidden" name="contact[tags]" value="newsletter">

  <div class="newsletter-field">
    <label for="FooterEmail" class="visually-hidden">Email address</label>
    <input
      id="FooterEmail"
      type="email"
      name="contact[email]"
      class="newsletter-input"
      value="{% if customer %}{{ customer.email }}{% endif %}"
      placeholder="${newsletterPlaceholder}"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="email"
      required
    />
    <button type="submit" class="newsletter-submit" aria-label="Subscribe">
      <span aria-hidden="true">→</span>
    </button>
  </div>
{% endform %}
`
    : `
<form class="newsletter-form" onsubmit="event.preventDefault()">
  <div class="newsletter-field">
    <label for="FooterEmailPreview" class="visually-hidden">Email address</label>
    <input
      id="FooterEmailPreview"
      type="email"
      class="newsletter-input"
      placeholder="${newsletterPlaceholder}"
      required
    />
    <button type="submit" class="newsletter-submit" aria-label="Subscribe">
      <span aria-hidden="true">→</span>
    </button>
  </div>
</form>
`;

  return `
<div class="footer-v1-wrap">
  <style>
    .footer-v1-wrap {
      --bg-color: ${bgColor};
      --text-color: ${textColor};
      --text-muted: ${textMuted};
      --border-color: ${borderColor};
      --accent-color: ${accentColor};
      --input-bg: ${inputBg};
      --input-text: ${inputText};
      --font-main: inherit;
    }

    .footer-v1-wrap,
    .footer-v1-wrap * {
      box-sizing: border-box;
    }

    .footer-v1-wrap .site-footer {
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: var(--font-main);
      width: 100%;
      padding: 80px 0 40px;
      -webkit-font-smoothing: antialiased;
    }

    .footer-v1-wrap .container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .footer-v1-wrap .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
      gap: 40px;
      margin-bottom: 80px;
    }

    .footer-v1-wrap .brand-logo {
      display: inline-block;
      color: var(--text-color);
      text-decoration: none;
      font-size: 2rem;
      font-weight: 900;
      font-style: italic;
      text-transform: uppercase;
      letter-spacing: -0.5px;
      margin-bottom: 24px;
    }

    .footer-v1-wrap .brand-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      max-width: 320px;
      margin-bottom: 32px;
    }

    .footer-v1-wrap .social-icons {
      display: flex;
      gap: 20px;
    }

    .footer-v1-wrap .social-link {
      color: var(--text-color);
      text-decoration: none;
      font-size: 1rem;
      transition: opacity 0.2s ease;
    }

    .footer-v1-wrap .social-link:hover {
      opacity: 0.7;
    }

    .footer-v1-wrap .footer-heading {
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0 0 24px;
      color: var(--text-color);
    }

    .footer-v1-wrap .footer-links {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .footer-v1-wrap .footer-links li {
      margin-bottom: 14px;
    }

    .footer-v1-wrap .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }

    .footer-v1-wrap .footer-links a:hover {
      color: var(--text-color);
      text-decoration: underline;
    }

    .footer-v1-wrap .newsletter-text {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .footer-v1-wrap .newsletter-form {
      width: 100%;
      margin: 0;
    }

    .footer-v1-wrap .newsletter-field {
      position: relative;
      width: 100%;
    }

    .footer-v1-wrap .newsletter-input {
      width: 100%;
      padding: 14px 52px 14px 24px;
      border-radius: 999px;
      border: 1px solid transparent;
      background: var(--input-bg);
      color: var(--input-text);
      font-family: var(--font-main);
      font-size: 1rem;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
    }

    .footer-v1-wrap .newsletter-input:focus {
      box-shadow: 0 0 0 2px rgba(255,255,255,0.24);
    }

    .footer-v1-wrap .newsletter-input::placeholder {
      color: #777;
    }

    .footer-v1-wrap .newsletter-submit {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      width: 34px;
      height: 34px;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--input-text);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font: inherit;
      font-size: 1.1rem;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .footer-v1-wrap .newsletter-submit:hover {
      transform: translateY(-50%) translateX(2px);
    }

    .footer-v1-wrap .newsletter-success {
      color: #b9f4c8;
      background: rgba(63, 130, 77, 0.18);
      border: 1px solid rgba(63, 130, 77, 0.22);
      border-radius: 12px;
      padding: 12px 14px;
      margin-bottom: 16px;
      font-size: 0.92rem;
    }

    .footer-v1-wrap .newsletter-error {
      color: #ffc9c9;
      background: rgba(160, 40, 40, 0.18);
      border: 1px solid rgba(160, 40, 40, 0.22);
      border-radius: 12px;
      padding: 12px 14px;
      margin-bottom: 16px;
      font-size: 0.92rem;
    }

    .footer-v1-wrap .footer-bottom {
      border-top: 1px solid var(--border-color);
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      flex-wrap: wrap;
    }

    .footer-v1-wrap .copyright {
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .footer-v1-wrap .bottom-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;
    }

    .footer-v1-wrap .policy-links {
      list-style: none;
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }

    .footer-v1-wrap .policy-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.2s ease;
    }

    .footer-v1-wrap .policy-links a:hover {
      color: var(--text-color);
    }

    .footer-v1-wrap .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 1024px) {
      .footer-v1-wrap .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 60px 40px;
      }

      .footer-v1-wrap .brand-desc {
        max-width: 100%;
      }
    }

    @media (max-width: 768px) {
      .footer-v1-wrap .site-footer {
        padding: 40px 0 30px;
      }

      .footer-v1-wrap .container {
        padding: 0 24px;
      }

      .footer-v1-wrap .footer-grid {
        grid-template-columns: 1fr;
        gap: 32px;
        margin-bottom: 40px;
      }

      .footer-v1-wrap .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
      }

      .footer-v1-wrap .bottom-right {
        align-items: flex-start;
      }

      .footer-v1-wrap .policy-links {
        gap: 14px;
      }
    }
  </style>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-col--brand">
          <a href="#" class="brand-logo">${brandName}</a>
          <p class="brand-desc">${brandDesc}</p>

          <div class="social-icons">
            <a href="${facebookUrl}" class="social-link" aria-label="Facebook">Fb</a>
            <a href="${instagramUrl}" class="social-link" aria-label="Instagram">Ig</a>
            <a href="${twitterUrl}" class="social-link" aria-label="X">X</a>
            <a href="${linkedinUrl}" class="social-link" aria-label="LinkedIn">In</a>
            <a href="${threadsUrl}" class="social-link" aria-label="Threads">Th</a>
          </div>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">${col2Heading}</h3>
          <ul class="footer-links">
            <li><a href="#">${col2Link1}</a></li>
            <li><a href="#">${col2Link2}</a></li>
            <li><a href="#">${col2Link3}</a></li>
            <li><a href="#">${col2Link4}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">${col3Heading}</h3>
          <ul class="footer-links">
            <li><a href="#">${col3Link1}</a></li>
            <li><a href="#">${col3Link2}</a></li>
            <li><a href="#">${col3Link3}</a></li>
            <li><a href="#">${col3Link4}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">${newsletterHeading}</h3>
          <p class="newsletter-text">${newsletterText}</p>
          ${newsletterMarkup}
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">${copyrightText}</div>

        <div class="bottom-right">
          <ul class="policy-links">
            <li><a href="#">${policy1}</a></li>
            <li><a href="#">${policy2}</a></li>
            <li><a href="#">${policy3}</a></li>
            <li><a href="#">${policy4}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>`;
}

export default function FooterV1({ config = {} }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const form = rootRef.current.querySelector(".newsletter-form");
    const input = rootRef.current.querySelector(".newsletter-input");

    if (!form || !input) return;

    const handleSubmit = (e) => {
      e.preventDefault();
      const existing = rootRef.current.querySelector(".newsletter-success.preview-message");
      if (existing) existing.remove();

      if (!input.value.trim()) return;

      const msg = document.createElement("p");
      msg.className = "newsletter-success preview-message";
      msg.textContent = "Preview mode only — export as Shopify Liquid for real newsletter submission.";
      form.insertAdjacentElement("beforebegin", msg);
      input.value = "";
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const previewHtml = getFooterV1Code(config, { isShopifyExport: false });

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: previewHtml }} />;
}