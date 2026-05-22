export function getFooterV6Code(config = {}) {
  const accentColor = config.accentColor || "#ff5e14";
  const bgColor = config.bgColor || "#151414";
  const copyrightBg = config.copyrightBg || "#202020";
  const dividerColor = config.dividerColor || "#373636";

  const ctaAddress = config.ctaAddress || "1010 Avenue, sw 54321, chandigarh";
  const ctaPhone = config.ctaPhone || "9876543210 0";
  const ctaEmail = config.ctaEmail || "mail@info.com";

  const logoUrl = config.logoUrl || "https://i.ibb.co/QDy827D/ak-logo.png";
  const logoAlt = config.logoAlt || "logo";
  const logoHref = config.logoHref || "#";
  const brandText = config.brandText || "Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.";
  const facebookUrl = config.facebookUrl || "#";
  const twitterUrl = config.twitterUrl || "#";
  const googleUrl = config.googleUrl || "#";

  const linksHeading = config.linksHeading || "Useful Links";
  const link1Label = config.link1Label || "Home";
  const link1Url = config.link1Url || "#";
  const link2Label = config.link2Label || "About";
  const link2Url = config.link2Url || "#";
  const link3Label = config.link3Label || "Services";
  const link3Url = config.link3Url || "#";
  const link4Label = config.link4Label || "Portfolio";
  const link4Url = config.link4Url || "#";
  const link5Label = config.link5Label || "Contact";
  const link5Url = config.link5Url || "#";
  const link6Label = config.link6Label || "About us";
  const link6Url = config.link6Url || "#";
  const link7Label = config.link7Label || "Our Services";
  const link7Url = config.link7Url || "#";
  const link8Label = config.link8Label || "Expert Team";
  const link8Url = config.link8Url || "#";
  const link9Label = config.link9Label || "Contact us";
  const link9Url = config.link9Url || "#";
  const link10Label = config.link10Label || "Latest News";
  const link10Url = config.link10Url || "#";

  const subscribeHeading = config.subscribeHeading || "Subscribe";
  const subscribeText = config.subscribeText || "Don't miss to subscribe to our new feeds, kindly fill the form below.";
  const subscribePlaceholder = config.subscribePlaceholder || "Email Address";

  const copyrightText = config.copyrightText || "Copyright &copy; 2018, All Right Reserved";
  const copyrightLinkLabel = config.copyrightLinkLabel || "Anup";
  const copyrightLinkUrl = config.copyrightLinkUrl || "#";
  const footerMenu1Label = config.footerMenu1Label || "Home";
  const footerMenu1Url = config.footerMenu1Url || "#";
  const footerMenu2Label = config.footerMenu2Label || "Terms";
  const footerMenu2Url = config.footerMenu2Url || "#";
  const footerMenu3Label = config.footerMenu3Label || "Privacy";
  const footerMenu3Url = config.footerMenu3Url || "#";
  const footerMenu4Label = config.footerMenu4Label || "Policy";
  const footerMenu4Url = config.footerMenu4Url || "#";
  const footerMenu5Label = config.footerMenu5Label || "Contact";
  const footerMenu5Url = config.footerMenu5Url || "#";

  return `<!-- Footer V6 — Dark CTA + 3-Column + Newsletter | Shopify Bazzar -->

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- Google Font: Poppins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  *, *::before, *::after { box-sizing: border-box; }

  ul { margin: 0; padding: 0; list-style: none; }

  .fv6-footer-section {
    background: ${bgColor};
    position: relative;
    font-family: inherit;
  }

  /* ── CTA bar ── */
  .fv6-footer-cta {
    border-bottom: 1px solid ${dividerColor};
    padding: 3rem 0;
  }
  .fv6-single-cta {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
  .fv6-single-cta i {
    color: ${accentColor};
    font-size: 30px;
    flex-shrink: 0;
    margin-top: 8px;
  }
  .fv6-cta-text {
    padding-left: 15px;
  }
  .fv6-cta-text h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .fv6-cta-text span {
    color: #757575;
    font-size: 15px;
  }

  /* ── Main content ── */
  .fv6-footer-content {
    position: relative;
    z-index: 2;
    padding: 3rem 0;
  }

  /* ── Logo ── */
  .fv6-footer-logo {
    margin-bottom: 30px;
  }
  .fv6-footer-logo img {
    max-width: 200px;
    display: block;
  }

  /* ── Brand text ── */
  .fv6-footer-text p {
    margin-bottom: 14px;
    font-size: 14px;
    color: #7e7e7e;
    line-height: 28px;
  }

  /* ── Social icons ── */
  .fv6-footer-social-icon span {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .fv6-footer-social-icon a {
    color: #fff;
    font-size: 16px;
    margin-right: 15px;
    text-decoration: none;
  }
  .fv6-footer-social-icon i {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .fv6-facebook-bg { background: #3B5998; }
  .fv6-twitter-bg  { background: #55ACEE; }
  .fv6-google-bg   { background: #DD4B39; }

  /* ── Widget headings ── */
  .fv6-footer-widget-heading h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    position: relative;
  }
  .fv6-footer-widget-heading h3::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 2px;
    width: 50px;
    background: ${accentColor};
  }

  /* ── Links grid ── */
  .fv6-footer-widget ul {
    display: flex;
    flex-wrap: wrap;
  }
  .fv6-footer-widget ul li {
    width: 50%;
    margin-bottom: 12px;
  }
  .fv6-footer-widget ul li a {
    color: #878787;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.25s ease;
  }
  .fv6-footer-widget ul li a:hover {
    color: ${accentColor};
  }

  /* ── Subscribe form ── */
  .fv6-subscribe-form {
    position: relative;
    overflow: hidden;
  }
  .fv6-subscribe-form input {
    width: 100%;
    padding: 14px 28px;
    background: #2E2E2E;
    border: 1px solid #2E2E2E;
    color: #fff;
    font-family: inherit;
    outline: none;
  }
  .fv6-subscribe-form input::placeholder {
    color: #888;
  }
  .fv6-subscribe-form button {
    position: absolute;
    right: 0;
    top: 0;
    background: ${accentColor};
    padding: 13px 20px;
    border: 1px solid ${accentColor};
    cursor: pointer;
  }
  .fv6-subscribe-form button i {
    color: #fff;
    font-size: 22px;
    transform: rotate(-6deg);
    display: block;
  }

  /* ── Copyright bar ── */
  .fv6-copyright-area {
    background: ${copyrightBg};
    padding: 25px 0;
  }
  .fv6-copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
  }
  .fv6-copyright-text p a {
    color: ${accentColor};
    text-decoration: none;
  }
  .fv6-footer-menu ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 0.25rem 0;
  }
  .fv6-footer-menu ul li {
    margin-left: 20px;
  }
  .fv6-footer-menu ul li a {
    font-size: 14px;
    color: #878787;
    text-decoration: none;
    transition: color 0.25s ease;
  }
  .fv6-footer-menu ul li a:hover {
    color: ${accentColor};
  }

  /* ── Responsive ── */
  @media (max-width: 991px) {
    .fv6-footer-menu ul {
      justify-content: center;
      margin-top: 1rem;
    }
    .fv6-copyright-text {
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    .fv6-single-cta { margin-bottom: 1.25rem; }
    .fv6-footer-content { padding: 2rem 0; }
    .fv6-footer-widget-heading h3 { margin-bottom: 32px; }
  }
</style>

<footer class="fv6-footer-section">
  <div class="container">

    <!-- ── CTA Row ── -->
    <div class="fv6-footer-cta">
      <div class="row">
        <div class="col-xl-4 col-md-4">
          <div class="fv6-single-cta">
            <i class="fas fa-map-marker-alt"></i>
            <div class="fv6-cta-text">
              <h4>Find us</h4>
              <span>${ctaAddress}</span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4">
          <div class="fv6-single-cta">
            <i class="fas fa-phone"></i>
            <div class="fv6-cta-text">
              <h4>Call us</h4>
              <span>${ctaPhone}</span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4">
          <div class="fv6-single-cta">
            <i class="far fa-envelope-open"></i>
            <div class="fv6-cta-text">
              <h4>Mail us</h4>
              <span>${ctaEmail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Main Content ── -->
    <div class="fv6-footer-content">
      <div class="row">

        <!-- Brand column -->
        <div class="col-xl-4 col-lg-4 mb-5">
          <div class="fv6-footer-widget">
            <div class="fv6-footer-logo">
              <a href="${logoHref}">
                <img src="${logoUrl}" alt="${logoAlt}" class="img-fluid">
              </a>
            </div>
            <div class="fv6-footer-text">
              <p>${brandText}</p>
            </div>
            <div class="fv6-footer-social-icon">
              <span>Follow us</span>
              <a href="${facebookUrl}" aria-label="Facebook">
                <i class="fab fa-facebook-f fv6-facebook-bg"></i>
              </a>
              <a href="${twitterUrl}" aria-label="Twitter">
                <i class="fab fa-twitter fv6-twitter-bg"></i>
              </a>
              <a href="${googleUrl}" aria-label="Google+">
                <i class="fab fa-google-plus-g fv6-google-bg"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Links column -->
        <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
          <div class="fv6-footer-widget">
            <div class="fv6-footer-widget-heading">
              <h3>${linksHeading}</h3>
            </div>
            <ul>
              <li><a href="${link1Url}">${link1Label}</a></li>
              <li><a href="${link2Url}">${link2Label}</a></li>
              <li><a href="${link3Url}">${link3Label}</a></li>
              <li><a href="${link4Url}">${link4Label}</a></li>
              <li><a href="${link5Url}">${link5Label}</a></li>
              <li><a href="${link6Url}">${link6Label}</a></li>
              <li><a href="${link7Url}">${link7Label}</a></li>
              <li><a href="${link8Url}">${link8Label}</a></li>
              <li><a href="${link9Url}">${link9Label}</a></li>
              <li><a href="${link10Url}">${link10Label}</a></li>
            </ul>
          </div>
        </div>

        <!-- Subscribe column -->
        <div class="col-xl-4 col-lg-4 col-md-6 mb-5">
          <div class="fv6-footer-widget">
            <div class="fv6-footer-widget-heading">
              <h3>${subscribeHeading}</h3>
            </div>
            <div class="fv6-footer-text mb-4">
              <p>${subscribeText}</p>
            </div>
            <div class="fv6-subscribe-form">
              <form method="post" action="/contact#contact_form" id="ContactFooter" accept-charset="UTF-8">
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
                  required
                >
                <button type="submit" aria-label="Subscribe">
                  <i class="fab fa-telegram-plane"></i>
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
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ── Copyright Bar ── -->
  <div class="fv6-copyright-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <div class="fv6-copyright-text">
            <p>${copyrightText} <a href="${copyrightLinkUrl}">${copyrightLinkLabel}</a></p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="fv6-footer-menu">
            <ul>
              <li><a href="${footerMenu1Url}">${footerMenu1Label}</a></li>
              <li><a href="${footerMenu2Url}">${footerMenu2Label}</a></li>
              <li><a href="${footerMenu3Url}">${footerMenu3Label}</a></li>
              <li><a href="${footerMenu4Url}">${footerMenu4Label}</a></li>
              <li><a href="${footerMenu5Url}">${footerMenu5Label}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>`;
}

export default function FooterV6({ config }) {
  return null;
}