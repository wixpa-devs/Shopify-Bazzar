// Named export — used by registry and generateComponentCode.js
export function getFooterV7Code(config = {}) {
  const bgColor           = config.bgColor           || "#ffffff";
  const textColor         = config.textColor          || "#1a1a1a";
  const mutedColor        = config.mutedColor         || "#444444";
  const borderColor       = config.borderColor        || "#e5e5e5";
  const socialBg          = config.socialBg           || "#1a1a1a";
  const socialBgHover     = config.socialBgHover      || "#444444";
  const bottomBg          = config.bottomBg           || "#111111";
  const bottomText        = config.bottomText         || "#ffffff";

  const col1Heading       = config.col1Heading        || "Customer service";
  const col1Body          = config.col1Body           || "Give your customers details about your online store.";
  const instagramUrl      = config.instagramUrl       || "#";
  const pinterestUrl      = config.pinterestUrl       || "#";
  const youtubeUrl        = config.youtubeUrl         || "#";
  const facebookUrl       = config.facebookUrl        || "#";

  const col2Heading       = config.col2Heading        || "Xclusive couture";
  const col2Link1Label    = config.col2Link1Label     || "About us";
  const col2Link1Url      = config.col2Link1Url       || "#";
  const col2Link2Label    = config.col2Link2Label     || "All collections";
  const col2Link2Url      = config.col2Link2Url       || "#";
  const col2Link3Label    = config.col2Link3Label     || "Events";
  const col2Link3Url      = config.col2Link3Url       || "#";

  const col3Heading       = config.col3Heading        || "Service";
  const col3Link1Label    = config.col3Link1Label     || "Shipping info";
  const col3Link1Url      = config.col3Link1Url       || "#";
  const col3Link2Label    = config.col3Link2Label     || "Refunds & Returns";
  const col3Link2Url      = config.col3Link2Url       || "#";

  const col4Heading       = config.col4Heading        || "Information";
  const col4Link1Label    = config.col4Link1Label     || "Contact";
  const col4Link1Url      = config.col4Link1Url       || "#";
  const col4Link2Label    = config.col4Link2Label     || "FAQ";
  const col4Link2Url      = config.col4Link2Url       || "#";
  const col4Link3Label    = config.col4Link3Label     || "Sustainability";
  const col4Link3Url      = config.col4Link3Url       || "#";
  const col4Link4Label    = config.col4Link4Label     || "Repair service";
  const col4Link4Url      = config.col4Link4Url       || "#";

  const copyrightText     = config.copyrightText      || "© 2026 Theme Xclusive , Powered by Shopify";

  return `<!-- Footer V7 — 4-Column + Social + Payment Bar | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fv7-footer {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
  }

  .fv7-main {
    padding: 48px 60px 40px;
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 40px;
    border-top: 1px solid ${borderColor};
  }

  .fv7-col h3 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 18px;
    letter-spacing: -0.01em;
    color: ${textColor};
  }

  .fv7-col p {
    font-size: 0.88rem;
    color: ${mutedColor};
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 28ch;
  }

  .fv7-social-icons {
    display: flex;
    gap: 10px;
    list-style: none;
    flex-wrap: wrap;
  }

  .fv7-social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: ${socialBg};
    border-radius: 50%;
    color: #fff;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }

  .fv7-social-icons a:hover {
    background: ${socialBgHover};
    transform: scale(1.08);
  }

  .fv7-social-icons svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  .fv7-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .fv7-nav a {
    font-size: 0.88rem;
    color: ${textColor};
    text-decoration: none;
    transition: color 0.15s;
  }

  .fv7-nav a:hover { color: ${mutedColor}; }

  .fv7-bottom {
    background: ${bottomBg};
    color: ${bottomText};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 18px 60px;
    font-size: 0.82rem;
  }

  .fv7-bottom .fv7-left {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }

  .fv7-bottom .fv7-left span { opacity: 0.85; color: ${bottomText}; }

  .fv7-currency-select {
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: ${bottomText};
    font-size: 0.82rem;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
    transition: background 0.15s;
  }

  .fv7-currency-select:hover { background: rgba(255,255,255,0.1); }

  .fv7-currency-select select {
    background: transparent;
    border: none;
    color: ${bottomText};
    font-size: 0.82rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
  }

  .fv7-currency-select select option { color: #111; background: #fff; }

  .fv7-payment-icons {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .fv7-pay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 8px;
    background: #fff;
    border-radius: 5px;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    min-width: 46px;
  }

  .fv7-pay-badge.fv7-visa { color: #1a1f71; font-size: 0.85rem; font-style: italic; letter-spacing: -0.02em; }
  .fv7-pay-badge.fv7-mastercard { padding: 0 4px; }
  .fv7-pay-badge.fv7-amex { background: #016fcf; color: #fff; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.05em; }

  @media (max-width: 900px) {
    .fv7-main {
      grid-template-columns: 1fr 1fr;
      padding: 36px 24px 32px;
      gap: 32px;
    }
    .fv7-bottom {
      padding: 16px 24px;
      align-items: flex-start;
      gap: 10px;
    }
  }

  @media (max-width: 540px) {
    .fv7-main {
      grid-template-columns: 1fr;
      padding: 28px 20px 24px;
    }
    .fv7-bottom {
      padding: 16px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
</style>

<footer class="fv7-footer">

  <div class="fv7-main">

    <div class="fv7-col">
      <h3>${col1Heading}</h3>
      <p>${col1Body}</p>
      <ul class="fv7-social-icons">
        <li>
          <a href="${instagramUrl}" aria-label="Instagram">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="${pinterestUrl}" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="${youtubeUrl}" aria-label="YouTube">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="${facebookUrl}" aria-label="Facebook">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <div class="fv7-col">
      <h3>${col2Heading}</h3>
      <ul class="fv7-nav">
        <li><a href="${col2Link1Url}">${col2Link1Label}</a></li>
        <li><a href="${col2Link2Url}">${col2Link2Label}</a></li>
        <li><a href="${col2Link3Url}">${col2Link3Label}</a></li>
      </ul>
    </div>

    <div class="fv7-col">
      <h3>${col3Heading}</h3>
      <ul class="fv7-nav">
        <li><a href="${col3Link1Url}">${col3Link1Label}</a></li>
        <li><a href="${col3Link2Url}">${col3Link2Label}</a></li>
      </ul>
    </div>

    <div class="fv7-col">
      <h3>${col4Heading}</h3>
      <ul class="fv7-nav">
        <li><a href="${col4Link1Url}">${col4Link1Label}</a></li>
        <li><a href="${col4Link2Url}">${col4Link2Label}</a></li>
        <li><a href="${col4Link3Url}">${col4Link3Label}</a></li>
        <li><a href="${col4Link4Url}">${col4Link4Label}</a></li>
      </ul>
    </div>

  </div>

  <div class="fv7-bottom">
    <div class="fv7-left">
      <span>${copyrightText}</span>
    </div>

    <label class="fv7-currency-select" aria-label="Select currency">
      <select>
        <option value="USD">US (USD $)</option>
        <option value="GBP">UK (GBP £)</option>
        <option value="EUR">EU (EUR €)</option>
        <option value="PKR">PK (PKR &#8360;)</option>
      </select>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </label>

    <div class="fv7-payment-icons" aria-label="Accepted payment methods">
      <span class="fv7-pay-badge fv7-visa">VISA</span>
      <span class="fv7-pay-badge fv7-mastercard">
        <svg width="34" height="22" viewBox="0 0 34 22" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="11" r="9" fill="#eb001b"/>
          <circle cx="22" cy="11" r="9" fill="#f79e1b"/>
          <path d="M17 4.8a9 9 0 0 1 0 12.4A9 9 0 0 1 17 4.8z" fill="#ff5f00"/>
        </svg>
      </span>
      <span class="fv7-pay-badge fv7-amex">AMERICAN<br>EXPRESS</span>
    </div>
  </div>

</footer>`;
}

// Default export — always returns null; editor renders via getCode() → iframe
export default function FooterV7({ config }) {
  return null;
}