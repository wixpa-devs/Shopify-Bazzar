import { ArrowRight, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import shopifyLogo from "../../../../temp-assets/shopify-logo.png";

const linkColumns = [
   {
      title: "Company",
      links: ["About Us", "Careers", "Affiliate Program", "Contact"],
   },
   {
      title: "Docs",
      links: ["Getting Started", "Editor Guide", "Code Reference", "Theme Setup"],
   },
   {
      title: "Support",
      links: ["Help Center", "Community", "Status", "Contact Support"],
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
const shell = "mx-auto max-w-[1320px] px-5 py-7 sm:px-8 lg:px-10";
const brand = "max-w-[300px]";
const logoButton =
   "flex items-center gap-3 bg-transparent p-0 text-left text-white transition-opacity hover:opacity-85";
const logo = "h-10 w-10 rounded-[9px] object-contain";
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
   "min-w-0 flex-1 rounded-[8px] border border-[rgba(255,255,255,0.14)] bg-[#0d1210] px-4 py-3 text-[13px] font-semibold text-white outline-none transition placeholder:text-[rgba(255,255,255,0.36)] focus:border-[#31b955] focus:ring-2 focus:ring-[#31b955]/20";
const submit =
   "flex h-[46px] w-[50px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#2aaa39] text-white shadow-[0_10px_22px_rgba(42,170,57,0.24)] transition-colors hover:bg-[#249631]";
const bottom =
   "border-t border-[rgba(255,255,255,0.05)] px-5 py-3.5 text-center sm:px-8";
const copyright =
   "text-[12px] font-semibold leading-snug text-[rgba(255,255,255,0.46)]";

const Footer = () => {
   const navigate = useNavigate();

   const handleSubmit = (event) => {
      event.preventDefault();
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
                        {column.links.map((label) => (
                           <li key={label}>
                              <button
                                 className={footerLink}
                                 type="button"
                                 onClick={() => navigate("/docs")}
                              >
                                 {label}
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

                  <form className={form} onSubmit={handleSubmit}>
                     <input
                        className={input}
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Email address"
                        required
                     />
                     <button className={submit} type="submit" aria-label="Subscribe">
                        <ArrowRight size={20} strokeWidth={2.8} />
                     </button>
                  </form>
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
