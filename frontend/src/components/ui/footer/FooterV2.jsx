import React, { useMemo, useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value = "") {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

export function getFooterV2Code(config = {}) {
  const c = {
    bgColor: "#111111",
    textColor: "#ffffff",
    textMuted: "#cccccc",
    borderColor: "#2a2a2a",
    accentColor: "#ffffff",
    inputBg: "#ffffff",
    inputText: "#111111",

    brandText: "ENTERPRISE",
    brandUrl: "#",
    logoImageUrl: "",
    brandDescription:
      "This is a demo store by Clean Canvas. All product images remain the sole property of the respective brands and are not for re-use on other stores.",

    facebookUrl: "#",
    instagramUrl: "#",
    xUrl: "#",
    linkedinUrl: "#",
    threadsUrl: "#",

    deliveryHeading: "Delivery & returns",
    shippingLabel: "Shipping information",
    shippingUrl: "#",
    returnsLabel: "Returns & refunds",
    returnsUrl: "#",
    trackLabel: "Track your order",
    trackUrl: "#",
    faqLabel: "Help & FAQs",
    faqUrl: "#",

    aboutHeading: "About Enterprise",
    aboutUsLabel: "About Us",
    aboutUsUrl: "#",
    brandsLabel: "Our brands",
    brandsUrl: "#",
    adviceLabel: "Advice & Reviews",
    adviceUrl: "#",
    contactLabel: "Contact us",
    contactUrl: "#",

    newsletterHeading: "Sign up to our newsletter",
    newsletterText:
      "Sign up for exclusive offers, original stories, events and more.",
    newsletterPlaceholder: "Your email",
    newsletterSuccessMessage: "Thanks for subscribing!",

    copyrightText: "© 2026 Enterprise Theme Enterprise. Powered by Shopify",

    privacyLabel: "Privacy policy",
    privacyUrl: "#",
    shippingPolicyLabel: "Shipping policy",
    shippingPolicyUrl: "#",
    faqsLabel: "FAQs",
    faqsUrl: "#",
    returnsPolicyLabel: "Returns policy",
    returnsPolicyUrl: "#",
    ...config,
  };

  const brandLogoMarkup = c.logoImageUrl
    ? `<img src="${escapeAttr(c.logoImageUrl)}" alt="${escapeAttr(
      c.brandText
    )}" style="max-height:36px;width:auto;display:block;" />`
    : escapeHtml(c.brandText);

  return `
<section class="footer-v2-section">
  <style>
    .footer-v2-section {
      background: transparent;
      width: 100%;
    }

    .footer-v2,
    .footer-v2 * {
      box-sizing: border-box;
    }

    .footer-v2 {
      --bg-color: ${c.bgColor};
      --text-color: ${c.textColor};
      --text-muted: ${c.textMuted};
      --border-color: ${c.borderColor};
      --accent-color: ${c.accentColor};
      --input-bg: ${c.inputBg};
      --input-text: ${c.inputText};
      --success-bg: rgba(46, 125, 50, 0.12);
      --success-text: #d7ffe1;
      --error-bg: rgba(198, 40, 40, 0.14);
      --error-text: #ffd6d6;

      background-color: var(--bg-color);
      color: var(--text-color);
      width: 100%;
      font-family: inherit;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    .footer-v2__container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 80px 40px 40px;
    }

    .footer-v2__grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
      gap: 40px;
      margin-bottom: 80px;
    }

    .footer-v2__brand-logo {
      font-size: 2rem;
      font-weight: 900;
      font-style: italic;
      text-transform: uppercase;
      letter-spacing: -0.5px;
      margin-bottom: 24px;
      display: inline-block;
      color: var(--text-color);
      text-decoration: none;
    }

    .footer-v2__brand-logo:hover {
      opacity: 0.85;
    }

    .footer-v2__brand-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 32px;
      max-width: 320px;
    }

    .footer-v2__social {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .footer-v2__social-link {
      color: var(--text-color);
      width: 22px;
      height: 22px;
      transition: opacity 0.2s ease, transform 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .footer-v2__social-link:hover {
      opacity: 0.7;
      transform: translateY(-1px);
    }

    .footer-v2__social-link svg {
      width: 100%;
      height: 100%;
      display: block;
      fill: currentColor;
    }

    .footer-v2__heading {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 24px;
      color: var(--text-color);
    }

    .footer-v2__links {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .footer-v2__links li {
      margin-bottom: 14px;
    }

    .footer-v2__links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }

    .footer-v2__links a:hover {
      color: var(--text-color);
      text-decoration: underline;
    }

    .footer-v2__newsletter-text {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .footer-v2__newsletter-form {
      position: relative;
      max-width: 100%;
    }

    .footer-v2__newsletter-input-wrap {
      position: relative;
    }

    .footer-v2__newsletter-input {
      width: 100%;
      padding: 14px 56px 14px 24px;
      border-radius: 50px;
      border: 1px solid transparent;
      background-color: var(--input-bg);
      color: var(--input-text);
      font-family: inherit;
      font-size: 1rem;
      outline: none;
      transition: box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .footer-v2__newsletter-input:focus {
      box-shadow: 0 0 0 2px rgba(255,255,255,0.24);
    }

    .footer-v2__newsletter-input::placeholder {
      color: #888;
    }

    .footer-v2__newsletter-input.is-invalid {
      border-color: #d64545;
    }

    .footer-v2__newsletter-button {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      color: var(--input-text);
      width: 36px;
      height: 36px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .footer-v2__newsletter-button:hover {
      transform: translateY(-50%) translateX(3px);
    }

    .footer-v2__newsletter-button svg {
      width: 18px;
      height: 18px;
      display: block;
    }

    .footer-v2__newsletter-message {
      margin-top: 12px;
      border-radius: 12px;
      padding: 10px 14px;
      font-size: 0.9rem;
    }

    .footer-v2__newsletter-message--success {
      background: var(--success-bg);
      color: var(--success-text);
    }

    .footer-v2__newsletter-message--error {
      background: var(--error-bg);
      color: var(--error-text);
    }

    .footer-v2__bottom {
      border-top: 1px solid var(--border-color);
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-v2__copyright {
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .footer-v2__bottom-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;
    }

    .footer-v2__policy-links {
      list-style: none;
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }

    .footer-v2__policy-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.2s ease;
    }

    .footer-v2__policy-links a:hover {
      color: var(--text-color);
    }

    .footer-v2__payment-icons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .footer-v2__payment-icon {
      width: 38px;
      height: 24px;
      border-radius: 3px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .footer-v2__payment-icon svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .footer-v2__accordion-trigger {
      display: none;
    }

    .footer-v2__visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    @media (max-width: 1024px) {
      .footer-v2__grid {
        grid-template-columns: 1fr 1fr;
        gap: 60px 40px;
      }

      .footer-v2__brand-desc {
        max-width: 100%;
      }
    }

    @media (max-width: 768px) {
      .footer-v2__container {
        padding: 40px 0 30px;
      }

      .footer-v2__grid {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin-bottom: 0;
      }

      .footer-v2__brand-col {
        padding: 0 24px 30px;
        border-bottom: 1px solid var(--border-color);
      }

      .footer-v2__social {
        gap: 24px;
      }

      .footer-v2__social-link {
        width: 24px;
        height: 24px;
      }

      .footer-v2__accordion-col {
        border-bottom: 1px solid var(--border-color);
      }

      .footer-v2__accordion-trigger {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px 24px;
        color: var(--text-color);
        font-family: inherit;
        font-size: 1rem;
        font-weight: 600;
        text-align: left;
      }

      .footer-v2__accordion-icon {
        color: var(--text-muted);
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        transition: transform 0.3s ease;
      }

      .footer-v2__accordion-trigger.is-open .footer-v2__accordion-icon {
        transform: rotate(180deg);
      }

      .footer-v2__accordion-body {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease, padding 0.3s ease;
        padding: 0 24px;
      }

      .footer-v2__accordion-body.is-open {
        max-height: 420px;
        padding: 0 24px 20px;
      }

      .footer-v2__accordion-col .footer-v2__heading {
        display: none;
      }

      .footer-v2__bottom {
        flex-direction: column;
        align-items: flex-start;
        padding: 24px 24px 10px;
        margin-top: 0;
      }

      .footer-v2__bottom-right {
        align-items: flex-start;
        width: 100%;
      }

      .footer-v2__policy-links {
        gap: 14px;
      }
    }
  </style>

  <footer class="footer-v2">
    <div class="footer-v2__container">
      <div class="footer-v2__grid">
        <div class="footer-v2__brand-col">
          <a href="${escapeAttr(c.brandUrl)}" class="footer-v2__brand-logo">
            ${brandLogoMarkup}
          </a>
          <p class="footer-v2__brand-desc">${escapeHtml(c.brandDescription)}</p>

          <div class="footer-v2__social">
            <a href="${escapeAttr(
    c.facebookUrl
  )}" class="footer-v2__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.8V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H7.8v3h2.6v8h3.1Z"/></svg>
            </a>
            <a href="${escapeAttr(
    c.instagramUrl
  )}" class="footer-v2__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm11.25 1.65a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z"/></svg>
            </a>
            <a href="${escapeAttr(
    c.xUrl
  )}" class="footer-v2__social-link" aria-label="X">
              <svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.6L6 22H2.9l7.3-8.4L.8 2h6.5l4.5 6 5.1-6ZM17.8 19.9h1.8L6.2 4.1H4.3l13.5 15.8Z"/></svg>
            </a>
            <a href="${escapeAttr(
    c.linkedinUrl
  )}" class="footer-v2__social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4ZM20.44 12.62c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.37 1.86V8.5H9.38c.04.6 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.04 1.93 2.57V20h3.37v-7.38Z"/></svg>
            </a>
            <a href="${escapeAttr(
    c.threadsUrl
  )}" class="footer-v2__social-link" aria-label="Threads">
              <svg viewBox="0 0 24 24"><path d="M16.55 11.2c-.17-.08-.35-.15-.54-.21-.03-2.63-1.53-4.11-4.18-4.17-2.2-.05-3.84 1.06-4.46 3.05l2.16.58c.34-1.05 1.08-1.54 2.16-1.51.76.02 1.3.21 1.65.59.29.31.47.75.55 1.34a9.53 9.53 0 0 0-2.3-.03c-2.26.25-3.73 1.58-3.66 3.31.04 1.02.6 1.95 1.51 2.5.76.46 1.73.69 2.78.66 1.33-.04 2.4-.52 3.19-1.43.61-.71.98-1.63 1.11-2.76.71.43 1.06 1.02 1.02 1.8-.06 1.21-.91 2.45-2.36 3.02-1.34.54-3.38.7-5.62-.27-2.33-1-3.46-2.94-3.36-5.74.1-2.69 1.25-4.77 3.24-5.86 1.52-.83 3.44-1.09 5.4-.74 3.31.61 5.33 2.83 5.4 5.94.03 1.41-.36 2.84-1.13 4.13l1.92 1.15c.98-1.64 1.48-3.47 1.43-5.34-.08-4.11-2.84-7.1-7.03-7.88-2.48-.46-4.93-.11-6.9.97-2.7 1.48-4.26 4.23-4.39 7.73-.13 3.71 1.51 6.46 4.75 7.86 1.52.66 3.04.9 4.42.9 1.12 0 2.15-.16 3.04-.52 2.36-.94 3.69-2.98 3.79-5.04.1-1.94-.86-3.47-2.7-4.32Zm-4.4 5.2c-1.17.03-2.03-.48-2.06-1.24-.03-.82.77-1.4 1.72-1.51.33-.04.65-.06.96-.06.48 0 .94.05 1.37.15-.2 1.72-.94 2.62-1.99 2.66Z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-v2__accordion-col">
          <h3 class="footer-v2__heading">${escapeHtml(c.deliveryHeading)}</h3>
          <button class="footer-v2__accordion-trigger" type="button" aria-expanded="false" data-target="delivery">
            <span>${escapeHtml(c.deliveryHeading)}</span>
            <svg class="footer-v2__accordion-icon" viewBox="0 0 20 20"><path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="footer-v2__accordion-body" data-body="delivery">
            <ul class="footer-v2__links">
              <li><a href="${escapeAttr(c.shippingUrl)}">${escapeHtml(
    c.shippingLabel
  )}</a></li>
              <li><a href="${escapeAttr(c.returnsUrl)}">${escapeHtml(
    c.returnsLabel
  )}</a></li>
              <li><a href="${escapeAttr(c.trackUrl)}">${escapeHtml(
    c.trackLabel
  )}</a></li>
              <li><a href="${escapeAttr(c.faqUrl)}">${escapeHtml(
    c.faqLabel
  )}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-v2__accordion-col">
          <h3 class="footer-v2__heading">${escapeHtml(c.aboutHeading)}</h3>
          <button class="footer-v2__accordion-trigger" type="button" aria-expanded="false" data-target="about">
            <span>${escapeHtml(c.aboutHeading)}</span>
            <svg class="footer-v2__accordion-icon" viewBox="0 0 20 20"><path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="footer-v2__accordion-body" data-body="about">
            <ul class="footer-v2__links">
              <li><a href="${escapeAttr(c.aboutUsUrl)}">${escapeHtml(
    c.aboutUsLabel
  )}</a></li>
              <li><a href="${escapeAttr(c.brandsUrl)}">${escapeHtml(
    c.brandsLabel
  )}</a></li>
              <li><a href="${escapeAttr(c.adviceUrl)}">${escapeHtml(
    c.adviceLabel
  )}</a></li>
              <li><a href="${escapeAttr(c.contactUrl)}">${escapeHtml(
    c.contactLabel
  )}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-v2__accordion-col">
          <h3 class="footer-v2__heading">${escapeHtml(c.newsletterHeading)}</h3>
          <button class="footer-v2__accordion-trigger" type="button" aria-expanded="false" data-target="newsletter">
            <span>${escapeHtml(c.newsletterHeading)}</span>
            <svg class="footer-v2__accordion-icon" viewBox="0 0 20 20"><path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="footer-v2__accordion-body" data-body="newsletter">
            <p class="footer-v2__newsletter-text">${escapeHtml(
    c.newsletterText
  )}</p>

            {% form 'customer', id: 'ContactFooter', class: 'footer-v2__newsletter-form' %}
              <input type="hidden" name="contact[tags]" value="newsletter">

              <div class="footer-v2__newsletter-input-wrap">
                <label for="FooterEmail" class="footer-v2__visually-hidden">Email address</label>
                <input
                  id="FooterEmail"
                  type="email"
                  name="contact[email]"
                  class="footer-v2__newsletter-input"
                  value="{{ form.email }}"
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="email"
                  {% if form.errors %}
                    autofocus
                    aria-invalid="true"
                    aria-describedby="FooterNewsletterError"
                  {% elsif form.posted_successfully? %}
                    aria-describedby="FooterNewsletterSuccess"
                  {% endif %}
                  placeholder="${escapeAttr(c.newsletterPlaceholder)}"
                  required
                >
                <button
                  type="submit"
                  class="footer-v2__newsletter-button"
                  aria-label="Subscribe"
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h10M10 4l6 6-6 6"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {% if form.errors %}
                <div
                  id="FooterNewsletterError"
                  class="footer-v2__newsletter-message footer-v2__newsletter-message--error"
                >
                  {{ form.errors.translated_fields.email | capitalize }}
                  {{ form.errors.messages.email }}
                </div>
              {% endif %}

              {% if form.posted_successfully? %}
                <div
                  id="FooterNewsletterSuccess"
                  class="footer-v2__newsletter-message footer-v2__newsletter-message--success"
                  tabindex="-1"
                  autofocus
                >
                  ${escapeHtml(c.newsletterSuccessMessage)}
                </div>
              {% endif %}
            {% endform %}
          </div>
        </div>
      </div>

      <div class="footer-v2__bottom">
        <div class="footer-v2__copyright">${escapeHtml(c.copyrightText)}</div>

        <div class="footer-v2__bottom-right">
          <ul class="footer-v2__policy-links">
            <li><a href="${escapeAttr(c.privacyUrl)}">${escapeHtml(
    c.privacyLabel
  )}</a></li>
            <li><a href="${escapeAttr(c.shippingPolicyUrl)}">${escapeHtml(
    c.shippingPolicyLabel
  )}</a></li>
            <li><a href="${escapeAttr(c.faqsUrl)}">${escapeHtml(
    c.faqsLabel
  )}</a></li>
            <li><a href="${escapeAttr(c.returnsPolicyUrl)}">${escapeHtml(
    c.returnsPolicyLabel
  )}</a></li>
          </ul>

          <div class="footer-v2__payment-icons">
            <div class="footer-v2__payment-icon" title="Visa">
              <svg viewBox="0 0 38 24"><rect width="38" height="24" fill="white"/><path d="M15.4 15.8L16.5 9.2H18.2L17.1 15.8H15.4ZM22.6 15.8L21.8 11.5C21.8 11.5 21.6 10.8 21.6 10.8C21.5 10.4 21.4 10.3 21.2 10.2C20.9 10.1 20.4 10 20.1 10H19.5L19.2 11.3L20.6 15.8H22.6ZM24.4 15.8L25.9 9.2H24.3C24 9.2 23.8 9.3 23.7 9.6L22.2 13.2L21.4 9.2H19.7L21.7 15.8H24.4ZM13.4 9.2L12.1 14.1C12 14.3 12 14.4 11.9 14.4C11.8 14.5 11.2 14.3 10.9 14.1L10.1 11.1C10.1 11.1 9.8 10 9.8 10C9.7 9.7 9.6 9.4 9.6 9.2H7.9C7.9 9.2 8.8 12.6 9.2 14.1C9.4 14.6 9.6 15.1 10.1 15.4C10.5 15.7 11.2 15.9 11.8 15.9C12.5 15.9 13.1 15.6 13.4 15.2C13.6 14.9 13.7 14.6 13.8 14.2L15.1 9.2H13.4Z" fill="#1A1F71"/></svg>
            </div>
            <div class="footer-v2__payment-icon" title="Mastercard">
              <svg viewBox="0 0 38 24"><rect width="38" height="24" fill="white"/><circle cx="14" cy="12" r="7" fill="#EB001B"/><circle cx="24" cy="12" r="7" fill="#F79E1B" fill-opacity="0.8"/><path d="M19 16.5C17.5 16.5 16.1 15.9 15.1 14.9C14.1 13.9 13.5 12.5 13.5 11C13.5 9.5 14.1 8.1 15.1 7.1C16.1 6.1 17.5 5.5 19 5.5C20.5 5.5 21.9 6.1 22.9 7.1C23.9 8.1 24.5 9.5 24.5 11C24.5 12.5 23.9 13.9 22.9 14.9C21.9 15.9 20.5 16.5 19 16.5Z" fill="#FF5F00"/></svg>
            </div>
            <div class="footer-v2__payment-icon" title="American Express">
              <svg viewBox="0 0 38 24"><rect width="38" height="24" fill="#006FCF"/><path d="M5 16H8L9 14H12L13 16H16L12 7H9L5 16ZM9.5 12L10.5 9L11.5 12H9.5ZM17 7H21L22 9L23 7H27L25 11L27 16H23L22 13L21 16H17V7ZM19.5 9V10.5H21L20.5 9H19.5ZM19.5 12V14H21L21.5 12H19.5ZM28 7H34V9H30V10.5H33V12.5H30V14H34V16H28V7Z" fill="white" transform="scale(0.8) translate(4, 3)"/></svg>
            </div>
            <div class="footer-v2__payment-icon" title="PayPal">
              <svg viewBox="0 0 38 24"><rect width="38" height="24" fill="white"/><path d="M12.5 7.5H16.8C19.2 7.5 20.5 8.6 20.5 10.8C20.5 12.5 19.5 13.8 17.8 14.2L17.2 14.2L16.5 18.5H13.5L14.5 12.5H12.5L12.5 7.5Z" fill="#003087"/><path d="M16.5 7.5H20.8C23.2 7.5 24.5 8.6 24.5 10.8C24.5 12.5 23.5 13.8 21.8 14.2L21.2 14.2L20.5 18.5H17.5L18.5 12.5H16.5L16.5 7.5Z" fill="#009cde" transform="translate(4,0)"/></svg>
            </div>
            <div class="footer-v2__payment-icon" title="Diners Club">
              <svg viewBox="0 0 38 24"><rect width="38" height="24" fill="white"/><circle cx="14" cy="12" r="6" fill="#004A97"/><circle cx="24" cy="12" r="6" fill="#004A97"/><path d="M14 8C11.8 8 10 9.8 10 12C10 14.2 11.8 16 14 16C16.2 16 18 14.2 18 12C18 9.8 16.2 8 14 8ZM24 8C21.8 8 20 9.8 20 12C20 14.2 21.8 16 24 16C26.2 16 28 14.2 28 12C28 9.8 26.2 8 24 8Z" fill="white"/><path d="M19 8C16.8 8 15 9.8 15 12C15 14.2 16.8 16 19 16C21.2 16 23 14.2 23 12C23 9.8 21.2 8 19 8Z" fill="#004A97"/></svg>
            </div>
            <div class="footer-v2__payment-icon" title="Discover">
              <svg viewBox="0 0 38 24"><rect width="38" height="24" fill="white"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#FF6600">DISCOVER</text></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script>
    (function () {
      var root = document.currentScript.closest('.footer-v2-section');
      if (!root) return;

      var triggers = root.querySelectorAll('.footer-v2__accordion-trigger');

      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          if (window.innerWidth > 768) return;

          var target = trigger.getAttribute('data-target');
          var body = root.querySelector('[data-body="' + target + '"]');
          var isOpen = trigger.classList.contains('is-open');

          triggers.forEach(function (t) {
            t.classList.remove('is-open');
            t.setAttribute('aria-expanded', 'false');
          });

          root.querySelectorAll('.footer-v2__accordion-body').forEach(function (b) {
            b.classList.remove('is-open');
          });

          if (!isOpen && body) {
            trigger.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            body.classList.add('is-open');
          }
        });
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          triggers.forEach(function (t) {
            t.classList.remove('is-open');
            t.setAttribute('aria-expanded', 'false');
          });

          root.querySelectorAll('.footer-v2__accordion-body').forEach(function (b) {
            b.classList.remove('is-open');
          });
        }
      });
    })();
  </script>
</section>
  `;
}

function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.8V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H7.8v3h2.6v8h3.1Z" />
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm11.25 1.65a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
  );
}

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.6L6 22H2.9l7.3-8.4L.8 2h6.5l4.5 6 5.1-6ZM17.8 19.9h1.8L6.2 4.1H4.3l13.5 15.8Z" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4ZM20.44 12.62c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.37 1.86V8.5H9.38c.04.6 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.04 1.93 2.57V20h3.37v-7.38Z" />
    </svg>
  );
}

function IconThreads(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M16.55 11.2c-.17-.08-.35-.15-.54-.21-.03-2.63-1.53-4.11-4.18-4.17-2.2-.05-3.84 1.06-4.46 3.05l2.16.58c.34-1.05 1.08-1.54 2.16-1.51.76.02 1.3.21 1.65.59.29.31.47.75.55 1.34a9.53 9.53 0 0 0-2.3-.03c-2.26.25-3.73 1.58-3.66 3.31.04 1.02.6 1.95 1.51 2.5.76.46 1.73.69 2.78.66 1.33-.04 2.4-.52 3.19-1.43.61-.71.98-1.63 1.11-2.76.71.43 1.06 1.02 1.02 1.8-.06 1.21-.91 2.45-2.36 3.02-1.34.54-3.38.7-5.62-.27-2.33-1-3.46-2.94-3.36-5.74.1-2.69 1.25-4.77 3.24-5.86 1.52-.83 3.44-1.09 5.4-.74 3.31.61 5.33 2.83 5.4 5.94.03 1.41-.36 2.84-1.13 4.13l1.92 1.15c.98-1.64 1.48-3.47 1.43-5.34-.08-4.11-2.84-7.1-7.03-7.88-2.48-.46-4.93-.11-6.9.97-2.7 1.48-4.26 4.23-4.39 7.73-.13 3.71 1.51 6.46 4.75 7.86 1.52.66 3.04.9 4.42.9 1.12 0 2.15-.16 3.04-.52 2.36-.94 3.69-2.98 3.79-5.04.1-1.94-.86-3.47-2.7-4.32Zm-4.4 5.2c-1.17.03-2.03-.48-2.06-1.24-.03-.82.77-1.4 1.72-1.51.33-.04.65-.06.96-.06.48 0 .94.05 1.37.15-.2 1.72-.94 2.62-1.99 2.66Z" />
    </svg>
  );
}

function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="M5 7.5 10 12.5 15 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="M4 10h10M10 4l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaymentIcons() {
  return (
    <div className="footer-v2__payment-icons">
      <div className="footer-v2__payment-icon" title="Visa">
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" fill="white" />
          <path d="M15.4 15.8L16.5 9.2H18.2L17.1 15.8H15.4ZM22.6 15.8L21.8 11.5C21.8 11.5 21.6 10.8 21.6 10.8C21.5 10.4 21.4 10.3 21.2 10.2C20.9 10.1 20.4 10 20.1 10H19.5L19.2 11.3L20.6 15.8H22.6ZM24.4 15.8L25.9 9.2H24.3C24 9.2 23.8 9.3 23.7 9.6L22.2 13.2L21.4 9.2H19.7L21.7 15.8H24.4ZM13.4 9.2L12.1 14.1C12 14.3 12 14.4 11.9 14.4C11.8 14.5 11.2 14.3 10.9 14.1L10.1 11.1C10.1 11.1 9.8 10 9.8 10C9.7 9.7 9.6 9.4 9.6 9.2H7.9C7.9 9.2 8.8 12.6 9.2 14.1C9.4 14.6 9.6 15.1 10.1 15.4C10.5 15.7 11.2 15.9 11.8 15.9C12.5 15.9 13.1 15.6 13.4 15.2C13.6 14.9 13.7 14.6 13.8 14.2L15.1 9.2H13.4Z" fill="#1A1F71" />
        </svg>
      </div>

      <div className="footer-v2__payment-icon" title="Mastercard">
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" fill="white" />
          <circle cx="14" cy="12" r="7" fill="#EB001B" />
          <circle cx="24" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
          <path d="M19 16.5C17.5 16.5 16.1 15.9 15.1 14.9C14.1 13.9 13.5 12.5 13.5 11C13.5 9.5 14.1 8.1 15.1 7.1C16.1 6.1 17.5 5.5 19 5.5C20.5 5.5 21.9 6.1 22.9 7.1C23.9 8.1 24.5 9.5 24.5 11C24.5 12.5 23.9 13.9 22.9 14.9C21.9 15.9 20.5 16.5 19 16.5Z" fill="#FF5F00" />
        </svg>
      </div>

      <div className="footer-v2__payment-icon" title="American Express">
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" fill="#006FCF" />
          <path d="M5 16H8L9 14H12L13 16H16L12 7H9L5 16ZM9.5 12L10.5 9L11.5 12H9.5ZM17 7H21L22 9L23 7H27L25 11L27 16H23L22 13L21 16H17V7ZM19.5 9V10.5H21L20.5 9H19.5ZM19.5 12V14H21L21.5 12H19.5ZM28 7H34V9H30V10.5H33V12.5H30V14H34V16H28V7Z" fill="white" transform="scale(0.8) translate(4, 3)" />
        </svg>
      </div>

      <div className="footer-v2__payment-icon" title="PayPal">
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" fill="white" />
          <path d="M12.5 7.5H16.8C19.2 7.5 20.5 8.6 20.5 10.8C20.5 12.5 19.5 13.8 17.8 14.2L17.2 14.2L16.5 18.5H13.5L14.5 12.5H12.5L12.5 7.5Z" fill="#003087" />
          <path d="M16.5 7.5H20.8C23.2 7.5 24.5 8.6 24.5 10.8C24.5 12.5 23.5 13.8 21.8 14.2L21.2 14.2L20.5 18.5H17.5L18.5 12.5H16.5L16.5 7.5Z" fill="#009cde" transform="translate(4,0)" />
        </svg>
      </div>

      <div className="footer-v2__payment-icon" title="Diners Club">
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" fill="white" />
          <circle cx="14" cy="12" r="6" fill="#004A97" />
          <circle cx="24" cy="12" r="6" fill="#004A97" />
          <path d="M14 8C11.8 8 10 9.8 10 12C10 14.2 11.8 16 14 16C16.2 16 18 14.2 18 12C18 9.8 16.2 8 14 8ZM24 8C21.8 8 20 9.8 20 12C20 14.2 21.8 16 24 16C26.2 16 28 14.2 28 12C28 9.8 26.2 8 24 8Z" fill="white" />
          <path d="M19 8C16.8 8 15 9.8 15 12C15 14.2 16.8 16 19 16C21.2 16 23 14.2 23 12C23 9.8 21.2 8 19 8Z" fill="#004A97" />
        </svg>
      </div>

      <div className="footer-v2__payment-icon" title="Discover">
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="24" fill="white" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="10"
            fill="#FF6600"
          >
            DISCOVER
          </text>
        </svg>
      </div>
    </div>
  );
}

export const footerV2Definition = {
  type: "footer-v2",
  label: "Footer V2",
  defaultConfig: {
    bgColor: "#111111",
    textColor: "#ffffff",
    textMuted: "#cccccc",
    borderColor: "#2a2a2a",
    accentColor: "#ffffff",
    inputBg: "#ffffff",
    inputText: "#111111",

    brandText: "ENTERPRISE",
    brandUrl: "#",
    logoImageUrl: "",
    brandDescription:
      "This is a demo store by Clean Canvas. All product images remain the sole property of the respective brands and are not for re-use on other stores.",

    facebookUrl: "#",
    instagramUrl: "#",
    xUrl: "#",
    linkedinUrl: "#",
    threadsUrl: "#",

    deliveryHeading: "Delivery & returns",
    shippingLabel: "Shipping information",
    shippingUrl: "#",
    returnsLabel: "Returns & refunds",
    returnsUrl: "#",
    trackLabel: "Track your order",
    trackUrl: "#",
    faqLabel: "Help & FAQs",
    faqUrl: "#",

    aboutHeading: "About Enterprise",
    aboutUsLabel: "About Us",
    aboutUsUrl: "#",
    brandsLabel: "Our brands",
    brandsUrl: "#",
    adviceLabel: "Advice & Reviews",
    adviceUrl: "#",
    contactLabel: "Contact us",
    contactUrl: "#",

    newsletterHeading: "Sign up to our newsletter",
    newsletterText:
      "Sign up for exclusive offers, original stories, events and more.",
    newsletterPlaceholder: "Your email",
    newsletterSuccessMessage: "Thanks for subscribing!",

    copyrightText: "© 2026 Enterprise Theme Enterprise. Powered by Shopify",

    privacyLabel: "Privacy policy",
    privacyUrl: "#",
    shippingPolicyLabel: "Shipping policy",
    shippingPolicyUrl: "#",
    faqsLabel: "FAQs",
    faqsUrl: "#",
    returnsPolicyLabel: "Returns policy",
    returnsPolicyUrl: "#",
  },
};

export default function FooterV2({ config = {} }) {
  const c = {
    ...footerV2Definition.defaultConfig,
    ...config,
  };

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [previewMessage, setPreviewMessage] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);

  const emailError = useMemo(() => {
    if (!emailTouched) return "";
    if (!email.trim()) return "Email is required.";
    if (!EMAIL_REGEX.test(email.trim())) return "Please enter a valid email address.";
    return "";
  }, [email, emailTouched]);

  function handlePreviewSubmit(e) {
    e.preventDefault();
    setEmailTouched(true);

    if (!email.trim()) {
      setPreviewMessage("Email is required.");
      return;
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      setPreviewMessage("Please enter a valid email address.");
      return;
    }

    setPreviewMessage(c.newsletterSuccessMessage || "Thanks for subscribing!");
    setEmail("");
  }

  function toggleAccordion(key) {
    if (typeof window !== "undefined" && window.innerWidth > 768) return;
    setOpenAccordion((prev) => (prev === key ? null : key));
  }

  return (
    <>
      <style>{`
        .footer-v2-section {
          background: transparent;
          width: 100%;
        }

        .footer-v2,
        .footer-v2 * {
          box-sizing: border-box;
        }

        .footer-v2 {
          --bg-color: ${c.bgColor};
          --text-color: ${c.textColor};
          --text-muted: ${c.textMuted};
          --border-color: ${c.borderColor};
          --accent-color: ${c.accentColor};
          --input-bg: ${c.inputBg};
          --input-text: ${c.inputText};
          --success-bg: rgba(46, 125, 50, 0.12);
          --success-text: #d7ffe1;
          --error-bg: rgba(198, 40, 40, 0.14);
          --error-text: #ffd6d6;

          background-color: var(--bg-color);
          color: var(--text-color);
          width: 100%;
          font-family: inherit;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        .footer-v2__container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 40px 40px;
        }

        .footer-v2__grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        .footer-v2__brand-logo {
          font-size: 2rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin-bottom: 24px;
          display: inline-block;
          color: var(--text-color);
          text-decoration: none;
        }

        .footer-v2__brand-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 320px;
        }

        .footer-v2__social {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-v2__social-link {
          color: var(--text-color);
          width: 22px;
          height: 22px;
          transition: opacity 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .footer-v2__social-link:hover {
          opacity: 0.7;
          transform: translateY(-1px);
        }

        .footer-v2__social-link svg {
          width: 100%;
          height: 100%;
          display: block;
          fill: currentColor;
        }

        .footer-v2__heading {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text-color);
        }

        .footer-v2__links {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-v2__links li {
          margin-bottom: 14px;
        }

        .footer-v2__links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
        }

        .footer-v2__newsletter-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .footer-v2__newsletter-form {
          position: relative;
          max-width: 100%;
        }

        .footer-v2__newsletter-input-wrap {
          position: relative;
        }

        .footer-v2__newsletter-input {
          width: 100%;
          padding: 14px 56px 14px 24px;
          border-radius: 50px;
          border: 1px solid transparent;
          background-color: var(--input-bg);
          color: var(--input-text);
          font-family: inherit;
          font-size: 1rem;
          outline: none;
        }

        .footer-v2__newsletter-input.is-invalid {
          border-color: #d64545;
        }

        .footer-v2__newsletter-button {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--input-text);
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .footer-v2__newsletter-button svg {
          width: 18px;
          height: 18px;
          display: block;
        }

        .footer-v2__newsletter-message {
          margin-top: 12px;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 0.9rem;
          background: var(--success-bg);
          color: var(--success-text);
        }

        .footer-v2__newsletter-message--error {
          background: var(--error-bg);
          color: var(--error-text);
        }

        .footer-v2__bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-v2__copyright {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer-v2__bottom-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 15px;
        }

        .footer-v2__policy-links {
          list-style: none;
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
        }

        .footer-v2__policy-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.85rem;
        }

        .footer-v2__payment-icons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-v2__payment-icon {
          width: 38px;
          height: 24px;
          border-radius: 3px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .footer-v2__payment-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .footer-v2__accordion-trigger {
          display: none;
        }

        @media (max-width: 1024px) {
          .footer-v2__grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px 40px;
          }

          .footer-v2__brand-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .footer-v2__container {
            padding: 40px 0 30px;
          }

          .footer-v2__grid {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-bottom: 0;
          }

          .footer-v2__brand-col {
            padding: 0 24px 30px;
            border-bottom: 1px solid var(--border-color);
          }

          .footer-v2__accordion-col {
            border-bottom: 1px solid var(--border-color);
          }

          .footer-v2__accordion-trigger {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            cursor: pointer;
            padding: 20px 24px;
            color: var(--text-color);
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            text-align: left;
          }

          .footer-v2__accordion-icon {
            color: var(--text-muted);
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            transition: transform 0.3s ease;
          }

          .footer-v2__accordion-trigger.is-open .footer-v2__accordion-icon {
            transform: rotate(180deg);
          }

          .footer-v2__accordion-body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease, padding 0.3s ease;
            padding: 0 24px;
          }

          .footer-v2__accordion-body.is-open {
            max-height: 420px;
            padding: 0 24px 20px;
          }

          .footer-v2__accordion-col .footer-v2__heading {
            display: none;
          }

          .footer-v2__bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 24px 10px;
            margin-top: 0;
          }

          .footer-v2__bottom-right {
            align-items: flex-start;
            width: 100%;
          }

          .footer-v2__policy-links {
            gap: 14px;
          }
        }
      `}</style>

      <section className="footer-v2-section">
        <footer className="footer-v2">
          <div className="footer-v2__container">
            <div className="footer-v2__grid">
              <div className="footer-v2__brand-col">
                <a href={c.brandUrl} className="footer-v2__brand-logo">
                  {c.logoImageUrl ? (
                    <img
                      src={c.logoImageUrl}
                      alt={c.brandText}
                      style={{ maxHeight: "36px", width: "auto", display: "block" }}
                    />
                  ) : (
                    c.brandText
                  )}
                </a>
                <p className="footer-v2__brand-desc">{c.brandDescription}</p>

                <div className="footer-v2__social">
                  <a href={c.facebookUrl} className="footer-v2__social-link" aria-label="Facebook"><IconFacebook /></a>
                  <a href={c.instagramUrl} className="footer-v2__social-link" aria-label="Instagram"><IconInstagram /></a>
                  <a href={c.xUrl} className="footer-v2__social-link" aria-label="X"><IconX /></a>
                  <a href={c.linkedinUrl} className="footer-v2__social-link" aria-label="LinkedIn"><IconLinkedIn /></a>
                  <a href={c.threadsUrl} className="footer-v2__social-link" aria-label="Threads"><IconThreads /></a>
                </div>
              </div>

              <div className="footer-v2__accordion-col">
                <h3 className="footer-v2__heading">{c.deliveryHeading}</h3>
                <button
                  className={`footer-v2__accordion-trigger ${openAccordion === "delivery" ? "is-open" : ""}`}
                  onClick={() => toggleAccordion("delivery")}
                  type="button"
                >
                  <span>{c.deliveryHeading}</span>
                  <IconChevronDown className="footer-v2__accordion-icon" />
                </button>
                <div className={`footer-v2__accordion-body ${openAccordion === "delivery" ? "is-open" : ""}`}>
                  <ul className="footer-v2__links">
                    <li><a href={c.shippingUrl}>{c.shippingLabel}</a></li>
                    <li><a href={c.returnsUrl}>{c.returnsLabel}</a></li>
                    <li><a href={c.trackUrl}>{c.trackLabel}</a></li>
                    <li><a href={c.faqUrl}>{c.faqLabel}</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-v2__accordion-col">
                <h3 className="footer-v2__heading">{c.aboutHeading}</h3>
                <button
                  className={`footer-v2__accordion-trigger ${openAccordion === "about" ? "is-open" : ""}`}
                  onClick={() => toggleAccordion("about")}
                  type="button"
                >
                  <span>{c.aboutHeading}</span>
                  <IconChevronDown className="footer-v2__accordion-icon" />
                </button>
                <div className={`footer-v2__accordion-body ${openAccordion === "about" ? "is-open" : ""}`}>
                  <ul className="footer-v2__links">
                    <li><a href={c.aboutUsUrl}>{c.aboutUsLabel}</a></li>
                    <li><a href={c.brandsUrl}>{c.brandsLabel}</a></li>
                    <li><a href={c.adviceUrl}>{c.adviceLabel}</a></li>
                    <li><a href={c.contactUrl}>{c.contactLabel}</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-v2__accordion-col">
                <h3 className="footer-v2__heading">{c.newsletterHeading}</h3>
                <button
                  className={`footer-v2__accordion-trigger ${openAccordion === "newsletter" ? "is-open" : ""}`}
                  onClick={() => toggleAccordion("newsletter")}
                  type="button"
                >
                  <span>{c.newsletterHeading}</span>
                  <IconChevronDown className="footer-v2__accordion-icon" />
                </button>

                <div className={`footer-v2__accordion-body ${openAccordion === "newsletter" ? "is-open" : ""}`}>
                  <p className="footer-v2__newsletter-text">{c.newsletterText}</p>

                  <form className="footer-v2__newsletter-form" onSubmit={handlePreviewSubmit}>
                    <div className="footer-v2__newsletter-input-wrap">
                      <input
                        type="email"
                        className={`footer-v2__newsletter-input ${emailError ? "is-invalid" : ""}`}
                        placeholder={c.newsletterPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                      />

                      <button
                        type="submit"
                        className="footer-v2__newsletter-button"
                        aria-label="Subscribe"
                      >
                        <IconArrowRight />
                      </button>
                    </div>

                    {previewMessage && (
                      <div className={`footer-v2__newsletter-message ${emailError ? "footer-v2__newsletter-message--error" : ""}`}>
                        {emailError || previewMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            <div className="footer-v2__bottom">
              <div className="footer-v2__copyright">{c.copyrightText}</div>

              <div className="footer-v2__bottom-right">
                <ul className="footer-v2__policy-links">
                  <li><a href={c.privacyUrl}>{c.privacyLabel}</a></li>
                  <li><a href={c.shippingPolicyUrl}>{c.shippingPolicyLabel}</a></li>
                  <li><a href={c.faqsUrl}>{c.faqsLabel}</a></li>
                  <li><a href={c.returnsPolicyUrl}>{c.returnsPolicyLabel}</a></li>
                </ul>

                <PaymentIcons />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}