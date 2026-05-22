import FaqV1, { getFaqV1Code } from "../components/ui/faqs/FaqV1";
import FaqV2, { getFaqV2Code } from "../components/ui/faqs/FaqV2";
import FaqV3, { getFaqV3Code } from "../components/ui/faqs/FaqV3";
import FaqV4, { getFaqV4Code } from "../components/ui/faqs/FaqV4";
import FaqV5, { getFaqV5Code } from "../components/ui/faqs/FaqV5";
import FaqV6, { getFaqV6Code } from "../components/ui/faqs/FaqV6";
import FaqV7, { getFaqV7Code } from "../components/ui/faqs/FaqV7";
import FaqV8, { getFaqV8Code } from "../components/ui/faqs/FaqV8";
import FaqV9, { getFaqV9Code } from "../components/ui/faqs/FaqV9";
import FaqV10, { getFaqV10Code } from "../components/ui/faqs/FaqV10";

const faqsRegistry = {
  id: "faqs",
  slug: "faqs",
  title: "FAQs",
  icon: "fa-layer-group",
  iconBg: "rgba(37,99,235,0.1)",
  iconColor: "#2563eb",
  tags: ["faq", "accordion", "questions", "support", "help"],
  description:
    "Accordion-style FAQ sections to answer common customer questions and reduce support load.",
  variants: [

    // ── FAQ V1 — Minimal Accordion
    {
      id: "faq-v1",
      name: "FAQ — Minimal Accordion",
      description: "Clean minimal accordion FAQ with plus/minus toggle and smooth expand animation.",
      tags: ["minimal", "accordion", "light", "clean", "toggle"],
      component: FaqV1,
      getCode: getFaqV1Code,
      defaultConfig: {
        bgColor: "#ffffff", headingText: "FAQs", headingColor: "#111111",
        borderColor: "#dddddd", questionColor: "#111111", answerColor: "#555555", iconColor: "#111111",
        faq1Q: "How do I make a purchase?",
        faq1A: "You can make a purchase by adding items to your cart and proceeding to checkout.",
        faq2Q: "How do I know if my order is confirmed?",
        faq2A: "You will receive a confirmation email once your order is successfully placed.",
        faq3Q: "Can I change my shipping address after my order is placed?",
        faq3A: "Please contact support immediately to update your shipping details.",
        faq4Q: "Can I change my billing address after placing my order?",
        faq4A: "Billing details can only be changed before order processing begins.",
      },
      accordions: [
        {
          id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Colors", subtitle: "Background, text, borders, and icon colors", controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Heading Color", key: "headingColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Border Color", key: "borderColor" },
            { type: "color", label: "Icon Color", key: "iconColor" },
          ]
        },
        {
          id: "heading", icon: "fa-heading", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Heading", subtitle: "Section title text", controls: [
            { type: "text", label: "Heading Text", key: "headingText" },
          ]
        },
        {
          id: "faq1", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 1", subtitle: "Question and answer for item 1", controls: [
            { type: "text", label: "Question 1", key: "faq1Q" }, { type: "text", label: "Answer 1", key: "faq1A" },
          ]
        },
        {
          id: "faq2", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 2", subtitle: "Question and answer for item 2", controls: [
            { type: "text", label: "Question 2", key: "faq2Q" }, { type: "text", label: "Answer 2", key: "faq2A" },
          ]
        },
        {
          id: "faq3", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 3", subtitle: "Question and answer for item 3", controls: [
            { type: "text", label: "Question 3", key: "faq3Q" }, { type: "text", label: "Answer 3", key: "faq3A" },
          ]
        },
        {
          id: "faq4", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 4", subtitle: "Question and answer for item 4", controls: [
            { type: "text", label: "Question 4", key: "faq4Q" }, { type: "text", label: "Answer 4", key: "faq4A" },
          ]
        },
      ],
    },

    // ── FAQ V2 — Chevron Accordion with SVG Icon
    {
      id: "faq-v2",
      name: "FAQ — Chevron with Icon",
      description: "Polished accordion FAQ with SVG chat icon, animated chevron, and accordion-mode (one open at a time).",
      tags: ["chevron", "svg icon", "accordion", "light", "polished"],
      component: FaqV2,
      getCode: getFaqV2Code,
      defaultConfig: {
        bgColor: "#ffffff",
        headingText: "FAQs",
        headingColor: "#333333",
        borderColor: "#e0e0e0",
        questionColor: "#333333",
        answerColor: "#666666",
        iconColor: "#444444",
        chevronColor: "#999999",

        iconUrl: "",

        faq1Q: "What makes your store unique?",
        faq1A: "Our uniqueness lies in our commitment to clean formulations that provide heavy-duty results without the heavy-duty feel.",
        faq2Q: "How can I determine the right products for my needs?",
        faq2A: "You can take our 2-minute quiz on our homepage, or chat live with one of our specialists available 24/7.",
        faq3Q: "Do you offer samples of your products?",
        faq3A: "Yes! Every order over $50 includes two complimentary deluxe samples of your choice at checkout.",
        faq4Q: "Can I get assistance with choosing the right options?",
        faq4A: "Absolutely. Upload a photo to our tool for an instant AI recommendation or request a manual review from our team.",
        faq5Q: "Are your products ethically made?",
        faq5A: "Yes, we are 100% certified. We never compromise on ethical standards at any stage of product development.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, text, borders, and icon colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Heading Color", key: "headingColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Border Color", key: "borderColor" },
            { type: "color", label: "Icon Color", key: "iconColor" },
            { type: "color", label: "Chevron Color", key: "chevronColor" },
          ]
        },
        {
          id: "heading",
          icon: "fa-heading",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Heading",
          subtitle: "Section title text",
          controls: [
            { type: "text", label: "Heading Text", key: "headingText" },
          ]
        },
        {
          id: "icon",
          icon: "fa-link",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Shared Icon Link",
          subtitle: "Single URL used for the icon on all FAQ items",
          controls: [
            { type: "text", label: "Icon URL", key: "iconUrl" },
          ]
        },
        {
          id: "faq1",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 1",
          subtitle: "Question and answer for item 1",
          controls: [
            { type: "text", label: "Question 1", key: "faq1Q" },
            { type: "text", label: "Answer 1", key: "faq1A" },
          ]
        },
        {
          id: "faq2",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 2",
          subtitle: "Question and answer for item 2",
          controls: [
            { type: "text", label: "Question 2", key: "faq2Q" },
            { type: "text", label: "Answer 2", key: "faq2A" },
          ]
        },
        {
          id: "faq3",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 3",
          subtitle: "Question and answer for item 3",
          controls: [
            { type: "text", label: "Question 3", key: "faq3Q" },
            { type: "text", label: "Answer 3", key: "faq3A" },
          ]
        },
        {
          id: "faq4",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 4",
          subtitle: "Question and answer for item 4",
          controls: [
            { type: "text", label: "Question 4", key: "faq4Q" },
            { type: "text", label: "Answer 4", key: "faq4A" },
          ]
        },
        {
          id: "faq5",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 5",
          subtitle: "Question and answer for item 5",
          controls: [
            { type: "text", label: "Question 5", key: "faq5Q" },
            { type: "text", label: "Answer 5", key: "faq5A" },
          ]
        },
      ],
    },

    // ── FAQ V3 — Uppercase Bold Accordion
    {
      id: "faq-v3",
      name: "FAQ — Uppercase Bold",
      description: "Bold uppercase accordion FAQ with CSS-only plus/minus icon, first item open by default, and accordion-mode toggle.",
      tags: ["uppercase", "bold", "accordion", "light", "minimal", "open default"],
      component: FaqV3,
      getCode: getFaqV3Code,
      defaultConfig: {
        bgColor: "#ffffff", headingText: "FAQs", headingColor: "#121212",
        borderColor: "#e8e8e8", questionColor: "#121212", answerColor: "#444444", iconColor: "#121212",
        faq1Q: "How long does an order take to arrive?",
        faq1A: "International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays.",
        faq2Q: "How do I set up a subscription order?",
        faq2A: "Simply select the Subscribe & Save option on the product page, choose your frequency, and checkout as normal.",
        faq3Q: "How to return my items?",
        faq3A: "Visit our Returns Portal within 30 days of purchase to generate a prepaid shipping label.",
        faq4Q: "How can I choose the right size for me?",
        faq4A: "Check our size guide link located next to the size selection dropdown on every product page.",
        faq5Q: "Which payment methods do you accept?",
        faq5A: "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay.",
        faq6Q: "How can I track my order?",
        faq6A: "You will receive a tracking link via email as soon as your order has been processed and shipped.",
      },
      accordions: [
        {
          id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Colors", subtitle: "Background, text, borders, and icon colors", controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Heading Color", key: "headingColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Border Color", key: "borderColor" },
            { type: "color", label: "Icon Color", key: "iconColor" },
          ]
        },
        {
          id: "heading", icon: "fa-heading", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Heading", subtitle: "Section title text", controls: [
            { type: "text", label: "Heading Text", key: "headingText" },
          ]
        },
        {
          id: "faq1", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 1", subtitle: "Question and answer for item 1", controls: [
            { type: "text", label: "Question 1", key: "faq1Q" }, { type: "text", label: "Answer 1", key: "faq1A" },
          ]
        },
        {
          id: "faq2", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 2", subtitle: "Question and answer for item 2", controls: [
            { type: "text", label: "Question 2", key: "faq2Q" }, { type: "text", label: "Answer 2", key: "faq2A" },
          ]
        },
        {
          id: "faq3", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 3", subtitle: "Question and answer for item 3", controls: [
            { type: "text", label: "Question 3", key: "faq3Q" }, { type: "text", label: "Answer 3", key: "faq3A" },
          ]
        },
        {
          id: "faq4", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 4", subtitle: "Question and answer for item 4", controls: [
            { type: "text", label: "Question 4", key: "faq4Q" }, { type: "text", label: "Answer 4", key: "faq4A" },
          ]
        },
        {
          id: "faq5", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 5", subtitle: "Question and answer for item 5", controls: [
            { type: "text", label: "Question 5", key: "faq5Q" }, { type: "text", label: "Answer 5", key: "faq5A" },
          ]
        },
        {
          id: "faq6", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 6", subtitle: "Question and answer for item 6", controls: [
            { type: "text", label: "Question 6", key: "faq6Q" }, { type: "text", label: "Answer 6", key: "faq6A" },
          ]
        },
      ],
    },

    // ── FAQ V4 — Card Style Accordion
    {
      id: "faq-v4",
      name: "FAQ — Card Style",
      description: "Modern card-style accordion FAQ with rounded borders, diagonal arrow icon, hover shadow effect, and centered heading.",
      tags: ["card", "rounded", "arrow", "accordion", "modern", "centered"],
      component: FaqV4,
      getCode: getFaqV4Code,
      defaultConfig: {
        bgColor: "#ffffff",
        headingText: "FAQs",
        headingColor: "#1a1a1a",
        cardBg: "#ffffff",
        borderColor: "#e5e7eb",
        questionColor: "#1a1a1a",
        answerColor: "#4b5563",
        iconColor: "#1a1a1a",
        faq1Q: "1/ What products do you offer?",
        faq1A: "We offer a wide range of premium skincare and beauty products, specifically formulated to provide luxury results with ethical ingredients.",
        faq2Q: "2/ Do you offer international shipping?",
        faq2A: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and are calculated at checkout.",
        faq3Q: "3/ What is your return policy?",
        faq3A: "We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, you can return it for a full refund or exchange.",
        faq4Q: "4/ Do you offer product warranties?",
        faq4A: "All our electronic beauty tools come with a 1-year limited warranty covering manufacturing defects.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, card, text, and icon colors",
          controls: [
            { type: "color", label: "Page Background", key: "bgColor" },
            { type: "color", label: "Heading Color", key: "headingColor" },
            { type: "color", label: "Card Background", key: "cardBg" },
            { type: "color", label: "Border Color", key: "borderColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Icon Color", key: "iconColor" },
          ],
        },
        {
          id: "heading",
          icon: "fa-heading",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Heading",
          subtitle: "Section title text",
          controls: [
            { type: "text", label: "Heading Text", key: "headingText" },
          ],
        },
        {
          id: "faq1",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 1",
          subtitle: "Question and answer for item 1",
          controls: [
            { type: "text", label: "Question 1", key: "faq1Q" },
            { type: "text", label: "Answer 1", key: "faq1A" },
          ],
        },
        {
          id: "faq2",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 2",
          subtitle: "Question and answer for item 2",
          controls: [
            { type: "text", label: "Question 2", key: "faq2Q" },
            { type: "text", label: "Answer 2", key: "faq2A" },
          ],
        },
        {
          id: "faq3",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 3",
          subtitle: "Question and answer for item 3",
          controls: [
            { type: "text", label: "Question 3", key: "faq3Q" },
            { type: "text", label: "Answer 3", key: "faq3A" },
          ],
        },
        {
          id: "faq4",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 4",
          subtitle: "Question and answer for item 4",
          controls: [
            { type: "text", label: "Question 4", key: "faq4Q" },
            { type: "text", label: "Answer 4", key: "faq4A" },
          ],
        },
      ],
    },

    {
      id: "faq-v5",
      name: "FAQ — Glassmorphism Accordion",
      description:
        "Light blue gradient background with frosted-glass accordion cards, eyebrow label, bold title, and two CTA buttons.",
      tags: ["glassmorphism", "accordion", "light", "gradient", "real estate"],
      component: FaqV5,
      getCode: getFaqV5Code,
      defaultConfig: {
        sectionBgColor: "#f8fbff",
        bgGradient: "linear-gradient(160deg, #ddeeff 0%, #eaf4ff 40%, #f0f8ff 70%, #e8f0fa 100%)",
        eyebrowText: "Frequently Asked Question",
        eyebrowColor: "#7a9ab5",
        titleText: "Everything You Need to Know:<br>Real Estate FAQs",
        titleColor: "#111111",
        btn1Label: "Get Started",
        btn1Url: "#",
        btn1Bg: "#1a1a1a",
        btn1Color: "#ffffff",
        btn2Label: "Learn More",
        btn2Url: "#",
        cardBg: "rgba(255,255,255,0.72)",
        questionColor: "#111111",
        answerColor: "#666666",
        q1: "How do you ensure your strategies are effective?",
        a1: "We combine in-depth market research, cutting-edge design, and targeted content creation to deliver strategies that generate engagement and drive conversions.",
        q2: "Can you help improve our current digital presence?",
        a2: "Absolutely. We conduct a thorough audit of your existing digital channels and develop a tailored roadmap to strengthen your online visibility, brand consistency, and user engagement.",
        q3: "What makes your approach different?",
        a3: "Our approach is rooted in data-driven decision making combined with creative storytelling. We don't believe in one-size-fits-all — every strategy is custom-built around your specific goals and market position.",
        q4: "Who can benefit from your services?",
        a4: "Our services are designed for real estate agents, brokers, developers, and property management firms of all sizes — from independent agents looking to grow their personal brand to large firms seeking enterprise-level marketing solutions.",
        q5: "How involved will we be in the creative process?",
        a5: "As involved as you'd like. We offer both full-service management where we handle everything, and collaborative models where you stay closely involved at each stage of ideation, creation, and review.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#dbeafe",
          iconColor: "#2563eb",
          title: "Colors",
          subtitle: "Section, background, text, and card colors",
          controls: [
            { type: "color", label: "Section Background", key: "sectionBgColor" },
            { type: "text", label: "Background Gradient", key: "bgGradient" },
            { type: "color", label: "Eyebrow Color", key: "eyebrowColor" },
            { type: "color", label: "Title Color", key: "titleColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "text", label: "Card Background", key: "cardBg" },
          ],
        },
        {
          id: "header",
          icon: "fa-heading",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Header",
          subtitle: "Eyebrow label and section title",
          controls: [
            { type: "text", label: "Eyebrow Text", key: "eyebrowText" },
            { type: "text", label: "Title", key: "titleText" },
          ],
        },
        {
          id: "buttons",
          icon: "fa-square",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Buttons",
          subtitle: "CTA button labels, URLs, and colors",
          controls: [
            { type: "text", label: "Button 1 Label", key: "btn1Label" },
            { type: "text", label: "Button 1 URL", key: "btn1Url" },
            { type: "color", label: "Button 1 Bg", key: "btn1Bg" },
            { type: "color", label: "Button 1 Color", key: "btn1Color" },
            { type: "text", label: "Button 2 Label", key: "btn2Label" },
            { type: "text", label: "Button 2 URL", key: "btn2Url" },
          ],
        },
        {
          id: "faqs",
          icon: "fa-font",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "FAQ Items",
          subtitle: "Questions and answers",
          controls: [
            { type: "text", label: "Q1", key: "q1" },
            { type: "text", label: "A1", key: "a1" },
            { type: "text", label: "Q2", key: "q2" },
            { type: "text", label: "A2", key: "a2" },
            { type: "text", label: "Q3", key: "q3" },
            { type: "text", label: "A3", key: "a3" },
            { type: "text", label: "Q4", key: "q4" },
            { type: "text", label: "A4", key: "a4" },
            { type: "text", label: "Q5", key: "q5" },
            { type: "text", label: "A5", key: "a5" },
          ],
        },
      ],
    },

    {
      id: "faqs-v6",
      name: "FAQ — Dark 2-Col Plus/Minus",
      description:
        "Dark navy background with a large pink heading on the left and a plus/minus accordion on the right. Active items highlight in accent color.",
      tags: ["dark", "navy", "2-column", "plus-minus", "accordion", "pink"],
      component: FaqV6,
      getCode: getFaqV6Code,
      defaultConfig: {
        bgColor: "#1e2352",
        headingText: "Any<br>questions&nbsp;?",
        headingColor: "#f0a0a8",
        accentColor: "#f0a0a8",
        dividerColor: "rgba(255,255,255,0.15)",
        questionColor: "#ffffff",
        answerColor: "rgba(255,255,255,0.65)",
        q1: "How many events can I create?",
        a1: "You can create unlimited events on any plan. Whether you're hosting one event a year or hundreds, our platform scales with your needs without any restrictions on event count.",
        q2: "How many collaborators can I invite?",
        a2: "You can invite as many collaborators as you need, completely free in both free and paid events. Pro tip: You can also invite other stakeholders in for co-creation; for example, your Venue might want to see your Programme to prepare accordingly.",
        q3: "Transparent and simple pricing",
        a3: "We believe in straightforward pricing with no hidden fees. Our plans are clearly defined, and you only pay for what you use. Upgrades and downgrades can be done at any time without penalties.",
        q4: "Is my data safe?",
        a4: "Absolutely. We take data security seriously. All data is encrypted in transit and at rest. We are GDPR compliant and never share your data with third parties without your explicit consent.",
        q5: "I have more questions, can you help me?",
        a5: "Of course! Our support team is available 7 days a week. You can reach us via live chat, email, or schedule a demo call with one of our specialists who will be happy to walk you through anything.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#2a2f6e",
          iconColor: "#f0a0a8",
          title: "Colors",
          subtitle: "Background, heading, accent, and text colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Heading Color", key: "headingColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "text", label: "Divider Color", key: "dividerColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
          ],
        },
        {
          id: "heading",
          icon: "fa-heading",
          iconBg: "#2a2f6e",
          iconColor: "#f0a0a8",
          title: "Heading",
          subtitle: "Left column heading text",
          controls: [{ type: "text", label: "Heading Text", key: "headingText" }],
        },
        {
          id: "faqs",
          icon: "fa-font",
          iconBg: "#2a2f6e",
          iconColor: "#f0a0a8",
          title: "FAQ Items",
          subtitle: "Questions and answers",
          controls: [
            { type: "text", label: "Q1", key: "q1" },
            { type: "text", label: "A1", key: "a1" },
            { type: "text", label: "Q2", key: "q2" },
            { type: "text", label: "A2", key: "a2" },
            { type: "text", label: "Q3", key: "q3" },
            { type: "text", label: "A3", key: "a3" },
            { type: "text", label: "Q4", key: "q4" },
            { type: "text", label: "A4", key: "a4" },
            { type: "text", label: "Q5", key: "q5" },
            { type: "text", label: "A5", key: "a5" },
          ],
        },
      ],
    },

    {
      id: "faqs-v7",
      name: "FAQ — 2-Col Photo + Orange Chevron",
      description:
        "White background, 2-column layout: photo and purple CTA card on the left, orange-badged accordion with circular chevrons on the right.",
      tags: ["light", "2-column", "photo", "cta", "orange", "chevron", "whatsapp"],
      component: FaqV7,
      getCode: getFaqV7Code,
      defaultConfig: {
        bgColor: "#ffffff",
        accentColor: "#e85c26",
        titleColor: "#1a1a1a",
        questionColor: "#1a1a1a",
        answerColor: "#555555",
        openItemBg: "#fff4ec",
        badgeText: "FAQ",
        titleText: "Questions You Might Have",
        titleHighlight: "Questions",
        photoUrl: "https://picsum.photos/seed/businessmen/600/640",
        photoAlt: "Two business professionals in an office",
        ctaCardBg: "#3d1fa3",
        ctaTitle: "Still Have Questions?",
        ctaBody: "We're Here To Assist With Any Queries. Reach Out And Get Precise Answers Directly From Our Team.",
        callLabel: "CALL US",
        callUrl: "tel:+1234567890",
        whatsappLabel: "TALK TO US ON WHATSAPP",
        whatsappUrl: "https://wa.me/1234567890",
        q1: "What Support Will I Receive After Onboarding?",
        a1: "You'll receive dedicated onboarding support including training sessions, documentation, and a personal account manager for the first 90 days to ensure a smooth start.",
        q2: "How Long Does It Take To Start The Studio After Signing Up?",
        a2: "Typically 20–30 Days, Depending On Your Readiness And Local Setup Timelines, For Most Studios To Launch.",
        q3: "Can I Run The Studio Alongside My Existing Business?",
        a3: "Yes. Many of our partners operate the studio as a complementary revenue stream. Our model is designed to be flexible enough to run alongside other business commitments.",
        q4: "What Determines My Monthly Earnings?",
        a4: "Your earnings depend on student enrollment numbers, class frequency, local pricing, and your marketing efforts. Our top partners generate significant recurring income month over month.",
        q5: "Do I Need Experience In Education?",
        a5: "No prior teaching experience is required. We provide full curriculum, trainer support, and operational guidance so you can run a professional studio from day one.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#fff0eb",
          iconColor: "#e85c26",
          title: "Colors",
          subtitle: "Background, accent, text, and open-item colors",
          controls: [
            { type: "color", label: "Page Background", key: "bgColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Title Color", key: "titleColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Open Item Bg", key: "openItemBg" },
            { type: "color", label: "CTA Card Bg", key: "ctaCardBg" },
          ],
        },
        {
          id: "header",
          icon: "fa-heading",
          iconBg: "#fff0eb",
          iconColor: "#e85c26",
          title: "Header",
          subtitle: "Badge, title, and highlight word",
          controls: [
            { type: "text", label: "Badge Text", key: "badgeText" },
            { type: "text", label: "Title Highlight", key: "titleHighlight" },
          ],
        },
        {
          id: "leftcol",
          icon: "fa-image",
          iconBg: "#fff0eb",
          iconColor: "#e85c26",
          title: "Left Column",
          subtitle: "Photo, CTA card, and contact buttons",
          controls: [
            { type: "text", label: "Photo URL", key: "photoUrl" },
            { type: "text", label: "Photo Alt", key: "photoAlt" },
            { type: "text", label: "CTA Title", key: "ctaTitle" },
            { type: "text", label: "CTA Body", key: "ctaBody" },
            { type: "text", label: "Call Button Label", key: "callLabel" },
            { type: "text", label: "Call URL", key: "callUrl" },
            { type: "text", label: "WhatsApp Label", key: "whatsappLabel" },
            { type: "text", label: "WhatsApp URL", key: "whatsappUrl" },
          ],
        },
        {
          id: "faqs",
          icon: "fa-font",
          iconBg: "#fff0eb",
          iconColor: "#e85c26",
          title: "FAQ Items",
          subtitle: "Questions and answers",
          controls: [
            { type: "text", label: "Q1", key: "q1" },
            { type: "text", label: "A1", key: "a1" },
            { type: "text", label: "Q2", key: "q2" },
            { type: "text", label: "A2", key: "a2" },
            { type: "text", label: "Q3", key: "q3" },
            { type: "text", label: "A3", key: "a3" },
            { type: "text", label: "Q4", key: "q4" },
            { type: "text", label: "A4", key: "a4" },
            { type: "text", label: "Q5", key: "q5" },
            { type: "text", label: "A5", key: "a5" },
          ],
        },
      ],
    },

    {
      id: "faqs-v8",
      name: "FAQ — Editorial Serif + Plus/Times",
      description:
        "Clean white layout with a large serif heading, intro text on the left, and a full-width accordion using × and + icons.",
      tags: ["light", "editorial", "serif", "minimal", "plus-times", "accordion"],
      component: FaqV8,
      getCode: getFaqV8Code,
      defaultConfig: {
        bgColor: "#ffffff",
        textColor: "#111111",
        mutedColor: "#6f6f6f",
        answerColor: "#666666",
        borderColor: "#e5e5e5",
        introLine1: "Got questions?",
        introLine2: "Say less, we've got answers!",
        headingText: "FAQ's ↗",
        q1: "HOW LONG DOES A PROJECT TAKE?",
        a1: "Each project's timeline depends on the scope. A simple landing page can be completed within 2 weeks while a full e-commerce platform might take 3–6 weeks. Once we understand your needs, we'll give you a clear, realistic timeline.",
        q2: "CAN I MANAGE A SITE AFTER IT'S BUILT?",
        a2: "Yes, the site can be built with a user-friendly backend or CMS so you can manage content easily after launch.",
        q3: "HOW DOES PRICING WORK?",
        a3: "Pricing is usually based on project scope, features, and timeline. We can provide a custom quote after reviewing your requirements.",
        q4: "WHAT TOOLS ARE USED IN BUILDING?",
        a4: "We use modern front-end and back-end tools depending on the project, such as HTML, CSS, JavaScript, Shopify, React, or other relevant frameworks.",
        q5: "HOW MUCH DOES IT COST TO BUILD AN APP?",
        a5: "The cost depends on complexity, features, and platform requirements. A simple app costs less than a highly customized product with advanced integrations.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#f3f4f6",
          iconColor: "#374151",
          title: "Colors",
          subtitle: "Background, text, and border colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Muted Color", key: "mutedColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Border Color", key: "borderColor" },
          ],
        },
        {
          id: "header",
          icon: "fa-heading",
          iconBg: "#f3f4f6",
          iconColor: "#374151",
          title: "Header",
          subtitle: "Intro text and serif heading",
          controls: [
            { type: "text", label: "Intro Line 1", key: "introLine1" },
            { type: "text", label: "Intro Line 2", key: "introLine2" },
            { type: "text", label: "Heading", key: "headingText" },
          ],
        },
        {
          id: "faqs",
          icon: "fa-font",
          iconBg: "#f3f4f6",
          iconColor: "#374151",
          title: "FAQ Items",
          subtitle: "Questions and answers",
          controls: [
            { type: "text", label: "Q1", key: "q1" },
            { type: "text", label: "A1", key: "a1" },
            { type: "text", label: "Q2", key: "q2" },
            { type: "text", label: "A2", key: "a2" },
            { type: "text", label: "Q3", key: "q3" },
            { type: "text", label: "A3", key: "a3" },
            { type: "text", label: "Q4", key: "q4" },
            { type: "text", label: "A4", key: "a4" },
            { type: "text", label: "Q5", key: "q5" },
            { type: "text", label: "A5", key: "a5" },
          ],
        },
      ],
    },

    {
      id: "faqs-v9",
      name: "FAQ — 2-Col Purple Circle Icon",
      description:
        "Light grey background, two-column layout with a bold heading and accent underline on the left, and a circle-icon accordion on the right.",
      tags: ["light", "grey", "2-column", "purple", "circle-icon", "accordion"],
      component: FaqV9,
      getCode: getFaqV9Code,
      defaultConfig: {
        bgColor: "#f5f5f5",
        accentColor: "purple",
        headingColor: "#111111",
        titleColor: "#333333",
        answerColor: "#555555",
        borderColor: "#dddddd",
        headingText: "Frequently<br>asked questions",
        q1: "What should I do if I lose my password?",
        a1: "You can reset your password using the \"Forgot Password\" option on the login page.",
        q2: "What discounts do you offer?",
        a2: "We offer seasonal discounts, loyalty rewards, and promotional offers throughout the year.",
        q3: "How do I deposit money into my account?",
        a3: "You can deposit funds via bank transfer, credit/debit card, or supported payment gateways.",
        q4: "What is the minimum deposit?",
        a4: "The minimum deposit depends on your region and payment method, typically starting from $10.",
        q5: "How is my money protected?",
        a5: "Your funds are secured with encryption, regulated banking partners, and strict compliance standards.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#f3e8ff",
          iconColor: "#7e22ce",
          title: "Colors",
          subtitle: "Background, accent, text, and border colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Heading Color", key: "headingColor" },
            { type: "color", label: "Title Color", key: "titleColor" },
            { type: "color", label: "Answer Color", key: "answerColor" },
            { type: "color", label: "Border Color", key: "borderColor" },
          ],
        },
        {
          id: "header",
          icon: "fa-heading",
          iconBg: "#f3e8ff",
          iconColor: "#7e22ce",
          title: "Heading",
          subtitle: "Left column heading text",
          controls: [
            { type: "text", label: "Heading Text", key: "headingText" },
          ],
        },
        {
          id: "faqs",
          icon: "fa-font",
          iconBg: "#f3e8ff",
          iconColor: "#7e22ce",
          title: "FAQ Items",
          subtitle: "Questions and answers",
          controls: [
            { type: "text", label: "Q1", key: "q1" },
            { type: "text", label: "A1", key: "a1" },
            { type: "text", label: "Q2", key: "q2" },
            { type: "text", label: "A2", key: "a2" },
            { type: "text", label: "Q3", key: "q3" },
            { type: "text", label: "A3", key: "a3" },
            { type: "text", label: "Q4", key: "q4" },
            { type: "text", label: "A4", key: "a4" },
            { type: "text", label: "Q5", key: "q5" },
            { type: "text", label: "A5", key: "a5" },
          ],
        },
      ],
    },

    {
      id: "faqs-v10",
      name: "FAQ — Static 3-Col Grid",
      description:
        "Clean light background with a heading and subtitle on top, and six FAQ items laid out in a static responsive 3-column grid — no accordion.",
      tags: ["light", "grid", "3-column", "static", "minimal", "no-accordion"],
      component: FaqV10,
      getCode: getFaqV10Code,
      defaultConfig: {
        bgColor: "#f4f6f5",
        textColor: "#1f2d2b",
        mutedColor: "#5f6f6c",
        headingText: "Frequently Asked Questions",
        subText: "Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.",
        q1: "Is there a free trial available?",
        a1: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running.",
        q2: "Can I change my plan later?",
        a2: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
        q3: "What is your cancellation policy?",
        a3: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
        q4: "Can other info be added to an invoice?",
        a4: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
        q5: "How does billing work?",
        a5: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
        q6: "How do I change my account email?",
        a6: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#e6efec",
          iconColor: "#1f2d2b",
          title: "Colors",
          subtitle: "Background, text, and muted colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Muted Color", key: "mutedColor" },
          ],
        },
        {
          id: "header",
          icon: "fa-heading",
          iconBg: "#e6efec",
          iconColor: "#1f2d2b",
          title: "Header",
          subtitle: "Section heading and subtitle",
          controls: [
            { type: "text", label: "Heading", key: "headingText" },
            { type: "text", label: "Subtitle", key: "subText" },
          ],
        },
        {
          id: "faqs",
          icon: "fa-font",
          iconBg: "#e6efec",
          iconColor: "#1f2d2b",
          title: "FAQ Items",
          subtitle: "Six question and answer pairs",
          controls: [
            { type: "text", label: "Q1", key: "q1" },
            { type: "text", label: "A1", key: "a1" },
            { type: "text", label: "Q2", key: "q2" },
            { type: "text", label: "A2", key: "a2" },
            { type: "text", label: "Q3", key: "q3" },
            { type: "text", label: "A3", key: "a3" },
            { type: "text", label: "Q4", key: "q4" },
            { type: "text", label: "A4", key: "a4" },
            { type: "text", label: "Q5", key: "q5" },
            { type: "text", label: "A5", key: "a5" },
            { type: "text", label: "Q6", key: "q6" },
            { type: "text", label: "A6", key: "a6" },
          ],
        },
      ],
    },



  ],
};

export default faqsRegistry;