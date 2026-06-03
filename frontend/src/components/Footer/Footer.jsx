import { ArrowRight, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import shopifyLogo from "../../assets/shopify-logo.png";
import {
   getAuthSession,
   getSubscriberSession,
   saveSubscriberSession,
   subscribeToNewsletter,
} from "../../lib/formApi.js";

const linkColumns = [
   {
      title: "Company",
      links: [
         { label: "Components", path: "/components" },
         { label: "Services", path: "/services" },
         { label: "Shopify Apps", path: "/shopify-apps" },
      ],
   },
   {
      title: "Docs",
      links: [
         { label: "Introduction", path: "/docs#introduction" },
         { label: "Why This Library", path: "/docs#why-this-library" },
         { label: "How To Use", path: "/docs#how-to-use" },
         { label: "Theme Setup", path: "/docs#shopify-setup" },
      ],
   },
   {
      title: "Support",
      links: [
         { label: "About", path: "/about" },
         { label: "Contact", path: "/contact" },
      ],
   },
];

const socials = [
   { label: "Twitter", href: "https://twitter.com", Icon: Twitter },
   { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
   { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
   { label: "GitHub", href: "https://github.com", Icon: Github },
   { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
];

const footer = "overflow-hidden border-t border-[#27312d] text-white";
const shell = "mx-auto max-w-[1320px] px-4 py-8 sm:px-7 sm:py-9 lg:px-10";
const brand = "max-w-[300px]";
const logoButton =
   "flex items-center gap-3 bg-transparent p-0 text-left text-white transition-opacity hover:opacity-85";
const logo = "h-10 w-10 rounded-[12px] object-contain";
const logoText = "text-[19px] font-black leading-none tracking-[-0.03em]";
const logoSub = "mt-1 block text-[11px] font-semibold text-[rgba(255,255,255,0.62)]";
const description =
   "mt-4 max-w-[270px] text-[13px] font-semibold leading-[1.58] text-[rgba(255,255,255,0.64)]";
const socialRow = "mt-5 flex items-center gap-4";
const socialLink =
   "inline-flex h-5 w-5 items-center justify-center text-[rgba(255,255,255,0.82)] transition-colors hover:text-[#32c65a]";
const columnTitle =
   "mb-4 text-[14px] font-black tracking-[-0.01em] text-white";
const linkList = "space-y-2.5";
const footerLink =
   "block bg-transparent p-0 text-left text-[13px] font-semibold text-[rgba(255,255,255,0.62)] transition-colors hover:text-white";
const newsletter = "footer-newsletter max-w-[370px]";
const newsletterText =
   "mb-4 max-w-[330px] text-[13px] font-semibold leading-[1.55] text-[rgba(255,255,255,0.64)]";
const form = "flex max-w-[360px] gap-2";
const input =
   "min-w-0 flex-1 rounded-[12px] border border-[rgba(255,255,255,0.14)] bg-[#0d1210] px-4 py-3 text-[13px] font-semibold text-white outline-none transition placeholder:text-[rgba(255,255,255,0.36)] focus:border-[#31b955] focus:ring-2 focus:ring-[#31b955]/20";
const subscribedField =
   "flex min-h-[46px] max-w-[360px] items-center rounded-[12px] border border-[#55d977] bg-[#eafbf0] px-4 text-[13px] font-black text-[#087f36]";
const submit =
   "flex h-[46px] w-[50px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#2aaa39] text-white shadow-[0_10px_22px_rgba(42,170,57,0.24)] transition-colors hover:bg-[#249631]";
const newsletterStatus =
   "mt-3 text-[12px] font-bold leading-snug";
const newsletterSuccess = `${newsletterStatus} text-[#61d97d]`;
const newsletterError = `${newsletterStatus} text-[#ff9f8f]`;
const bottom =
   "border-t border-[rgba(255,255,255,0.05)] px-4 py-4 text-center sm:px-7";
const copyright =
   "text-[12px] font-semibold leading-snug text-[rgba(255,255,255,0.46)]";

const Footer = () => {
   const navigate = useNavigate();
   const [authSession, setAuthSession] = useState(() => getAuthSession());
   const [subscriberSession, setSubscriberSession] = useState(() =>
      getSubscriberSession(),
   );
   const [email, setEmail] = useState(subscriberSession?.email || "");
   const [status, setStatus] = useState({ type: "", message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const isSubscribed = Boolean(subscriberSession?.subscribed);
   const isLoggedIn = Boolean(authSession?.token);

   useEffect(() => {
      const syncAuth = () => setAuthSession(getAuthSession());
      const syncSubscriber = () => setSubscriberSession(getSubscriberSession());

      window.addEventListener("storage", syncAuth);
      window.addEventListener("clbl:auth-change", syncAuth);
      window.addEventListener("clbl:subscriber-change", syncSubscriber);

      return () => {
         window.removeEventListener("storage", syncAuth);
         window.removeEventListener("clbl:auth-change", syncAuth);
         window.removeEventListener("clbl:subscriber-change", syncSubscriber);
      };
   }, []);

   const handleSubmit = async (event) => {
      event.preventDefault();
      setStatus({ type: "", message: "" });
      setIsSubmitting(true);

      try {
         const result = await subscribeToNewsletter({ email });
         const nextSubscriberSession = saveSubscriberSession(result);
         setSubscriberSession(nextSubscriberSession);
         setStatus({ type: "success", message: "Thanks for subscribing!" });
      } catch (error) {
         setStatus({
            type: "error",
            message: error.message || "Subscription failed. Please try again.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <footer
         className={footer}
         style={{
            background:
               "linear-gradient(105deg, #121816 0%, #171d1b 54%, #111715 100%)",
            color: "#ffffff",
         }}
      >
         <div className={shell}>
            <div className="footer-main-grid">
               <div className={brand}>
                  <button
                     className={logoButton}
                     type="button"
                     onClick={() => navigate("/")}
                     aria-label="Go to homepage"
                  >
                     <img className={logo} src={shopifyLogo} alt="" />
                     <span>
                        <span className={logoText}>Shopify</span>
                        <span className={logoSub}>Component Library</span>
                     </span>
                  </button>

                  <p className={description}>
                     The premium component library for building high-converting,
                     high-performance Shopify stores.
                  </p>

                  <div className={socialRow} aria-label="Social links">
                     {socials.map((social) => (
                        <a
                           className={socialLink}
                           href={social.href}
                           key={social.label}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={social.label}
                        >
                           <social.Icon size={16} strokeWidth={2.4} />
                        </a>
                     ))}
                  </div>
               </div>

               {linkColumns.map((column) => (
                  <nav key={column.title} aria-label={column.title}>
                     <h2 className={columnTitle}>{column.title}</h2>
                     <ul className={linkList}>
                        {column.links.map((link) => (
                           <li key={link.label}>
                              <button
                                 className={footerLink}
                                 type="button"
                                 onClick={() => navigate(link.path)}
                              >
                                 {link.label}
                              </button>
                           </li>
                        ))}
                     </ul>
                  </nav>
               ))}

               <div className={newsletter}>
                  <h2 className={columnTitle}>Stay Updated</h2>
                  <p className={newsletterText}>
                     Get updates on new components, features, and store launches.
                  </p>

                  {isLoggedIn ? (
                     <>
                        <div className={subscribedField}>
                           Unlimited copy access is active.
                        </div>
                        <p className={newsletterSuccess}>
                           All components are free to copy now.
                        </p>
                     </>
                  ) : isSubscribed ? (
                     <>
                        <div className={subscribedField}>Thanks for subscribing!</div>
                        <p className={newsletterSuccess}>
                           {typeof subscriberSession?.remainingCopies === "number"
                              ? `${subscriberSession.remainingCopies} of ${subscriberSession.maxFreeCopies || 3} free copies remaining.`
                              : "Your free copy access is active."}
                        </p>
                     </>
                  ) : (
                     <>
                        <form className={form} onSubmit={handleSubmit}>
                           <input
                              className={input}
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              aria-label="Email address"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              required
                           />
                           <button
                              className={submit}
                              type="submit"
                              aria-label="Subscribe"
                              disabled={isSubmitting}
                           >
                              <ArrowRight size={20} strokeWidth={2.8} />
                           </button>
                        </form>
                        {status.message ? (
                           <p className={status.type === "success" ? newsletterSuccess : newsletterError}>
                              {status.message}
                           </p>
                        ) : null}
                     </>
                  )}
               </div>
            </div>
         </div>

         <div className={bottom} style={{ backgroundColor: "#0b100e" }}>
            <p className={copyright}>
               &copy; {new Date().getFullYear()} Shopify Component Library. All rights reserved.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
