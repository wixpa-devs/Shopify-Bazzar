// Named export — used by registry and generateComponentCode.js
export function getFaqV2Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const headingText = config.headingText || "FAQs";
  const headingColor = config.headingColor || "#333333";
  const borderColor = config.borderColor || "#e0e0e0";
  const questionColor = config.questionColor || "#333333";
  const answerColor = config.answerColor || "#666666";
  const iconColor = config.iconColor || "#444444";
  const chevronColor = config.chevronColor || "#999999";

  const faq1Q = config.faq1Q || "What makes your store unique?";
  const faq1A = config.faq1A || "Our uniqueness lies in our commitment to clean formulations that provide heavy-duty results without the heavy-duty feel.";
  const faq2Q = config.faq2Q || "How can I determine the right products for my needs?";
  const faq2A = config.faq2A || "You can take our 2-minute quiz on our homepage, or chat live with one of our specialists available 24/7.";
  const faq3Q = config.faq3Q || "Do you offer samples of your products?";
  const faq3A = config.faq3A || "Yes! Every order over $50 includes two complimentary deluxe samples of your choice at checkout.";
  const faq4Q = config.faq4Q || "Can I get assistance with choosing the right options?";
  const faq4A = config.faq4A || "Absolutely. Upload a photo to our tool for an instant AI recommendation or request a manual review from our team.";
  const faq5Q = config.faq5Q || "Are your products ethically made?";
  const faq5A = config.faq5A || "Yes, we are 100% certified. We never compromise on ethical standards at any stage of product development.";

  const faq1Url = config.faq1Url || "";
  const faq2Url = config.faq2Url || "";
  const faq3Url = config.faq3Url || "";
  const faq4Url = config.faq4Url || "";
  const faq5Url = config.faq5Url || "";

  return `<!-- FAQ V2 — Chevron Accordion with URL Input + Default Icon | Shopify Bazzar -->
<style>
  .faq2-wrapper {
    margin: 0;
    padding: 50px 20px;
    font-family: inherit;
    background-color: ${bgColor};
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .faq2-wrapper *,
  .faq2-wrapper *::before,
  .faq2-wrapper *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  .faq2-section {
    width: 100%;
    max-width: 900px;
    box-sizing: border-box;
  }

  .faq2-title {
    text-align: left;
    font-size: 2.5rem;
    font-weight: 500;
    color: ${headingColor};
    margin-bottom: 50px;
  }

  .faq2-container {
    border-top: 1px solid ${borderColor};
  }

  .faq2-item {
    border-bottom: 1px solid ${borderColor};
  }

  .faq2-question {
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    outline: none;
    gap: 20px;
  }

  .faq2-question-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    min-width: 0;
  }

  .faq2-link-wrap {
    width: 32px;
    height: 32px;
    min-width: 32px;
    position: relative;
    flex-shrink: 0;
  }

  .faq2-default-icon {
    width: 32px;
    height: 32px;
    color: ${iconColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .faq2-default-icon svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .faq2-url-input {
    width: 32px;
    height: 32px;
    opacity: 0;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  .faq2-question-text {
    font-size: 1.15rem;
    color: ${questionColor};
    line-height: 1.4;
    min-width: 0;
  }

  .faq2-chevron {
    width: 12px;
    height: 12px;
    border-right: 2px solid ${chevronColor};
    border-bottom: 2px solid ${chevronColor};
    transform: rotate(45deg);
    transition: transform 0.3s ease;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .faq2-item.active .faq2-chevron {
    transform: rotate(-135deg);
  }

  .faq2-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .faq2-answer-content {
    padding: 0 0 24px 52px;
    color: ${answerColor};
    line-height: 1.6;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    .faq2-title {
      font-size: 1.8rem;
    }

    .faq2-question-text {
      font-size: 1rem;
    }

    .faq2-answer-content {
      padding-left: 0;
      padding-top: 10px;
    }

    .faq2-question-wrapper {
      gap: 12px;
    }
  }

  @media (max-width: 400px) {
    .faq2-wrapper {
      padding: 14px;
    }

    .faq2-title {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }

    .faq2-question {
      padding: 18px 0;
    }

    .faq2-question-text {
      font-size: 0.95rem;
    }

    .faq2-answer-content {
      font-size: 0.9rem;
    }
  }
</style>

<div class="faq2-wrapper">
  <section class="faq2-section">
    <h1 class="faq2-title">${headingText}</h1>

    <div class="faq2-container">
      <div class="faq2-item">
        <button class="faq2-question" type="button">
          <div class="faq2-question-wrapper">
            <div class="faq2-link-wrap">
              <div class="faq2-default-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22"></path>
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 1 0 7.07 7.07L13.3 18.78"></path>
                </svg>
              </div>
              <input class="faq2-url-input" type="url" value="${faq1Url}" aria-label="FAQ URL 1" />
            </div>
            <span class="faq2-question-text">${faq1Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq1A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question" type="button">
          <div class="faq2-question-wrapper">
            <div class="faq2-link-wrap">
              <div class="faq2-default-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22"></path>
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 1 0 7.07 7.07L13.3 18.78"></path>
                </svg>
              </div>
              <input class="faq2-url-input" type="url" value="${faq2Url}" aria-label="FAQ URL 2" />
            </div>
            <span class="faq2-question-text">${faq2Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq2A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question" type="button">
          <div class="faq2-question-wrapper">
            <div class="faq2-link-wrap">
              <div class="faq2-default-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22"></path>
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 1 0 7.07 7.07L13.3 18.78"></path>
                </svg>
              </div>
              <input class="faq2-url-input" type="url" value="${faq3Url}" aria-label="FAQ URL 3" />
            </div>
            <span class="faq2-question-text">${faq3Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq3A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question" type="button">
          <div class="faq2-question-wrapper">
            <div class="faq2-link-wrap">
              <div class="faq2-default-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22"></path>
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 1 0 7.07 7.07L13.3 18.78"></path>
                </svg>
              </div>
              <input class="faq2-url-input" type="url" value="${faq4Url}" aria-label="FAQ URL 4" />
            </div>
            <span class="faq2-question-text">${faq4Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq4A}</div>
        </div>
      </div>

      <div class="faq2-item">
        <button class="faq2-question" type="button">
          <div class="faq2-question-wrapper">
            <div class="faq2-link-wrap">
              <div class="faq2-default-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22"></path>
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 1 0 7.07 7.07L13.3 18.78"></path>
                </svg>
              </div>
              <input class="faq2-url-input" type="url" value="${faq5Url}" aria-label="FAQ URL 5" />
            </div>
            <span class="faq2-question-text">${faq5Q}</span>
          </div>
          <div class="faq2-chevron"></div>
        </button>
        <div class="faq2-answer">
          <div class="faq2-answer-content">${faq5A}</div>
        </div>
      </div>
    </div>
  </section>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const faq2Questions = document.querySelectorAll(".faq2-question");

    faq2Questions.forEach(function(question) {
      question.addEventListener("click", function() {
        const item = question.parentElement;
        const isOpen = item.classList.contains("active");

        document.querySelectorAll(".faq2-item").forEach(function(otherItem) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq2-answer").style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("active");
          const answer = item.querySelector(".faq2-answer");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    const urlInputs = document.querySelectorAll(".faq2-url-input");
    urlInputs.forEach(function(input) {
      input.addEventListener("click", function(event) {
        event.stopPropagation();
      });
    });
  });
</script>`;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — editor and card preview render via getCode() → iframe.
export default function FaqV2({ config }) {
  return null;
}