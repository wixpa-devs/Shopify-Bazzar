import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const pageShell = "min-h-screen bg-white";
const main =
   "relative isolate flex min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden bg-[#f4fbf5] px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const pattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const glow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.94)_0%,rgba(244,251,245,0.78)_48%,rgba(238,249,241,0.95)_100%)]";
const card =
   "w-full max-w-[520px] rounded-[20px] border border-[#dfe9e2] bg-white px-7 py-10 shadow-[0_24px_70px_rgba(17,37,23,0.09)] sm:px-10 sm:py-12";
const title =
   "text-center text-[clamp(2rem,4.5vw,2.75rem)] font-black leading-none tracking-[-0.045em] text-[#111815]";
const subtitle =
   "mx-auto mt-4 max-w-[330px] text-center text-[1rem] font-semibold leading-[1.55] text-[#717b87]";
const form = "mt-9 grid gap-6";
const field = "grid gap-3";
const label = "text-[0.9rem] font-black text-[#2a303b]";
const input =
   "h-[56px] w-full rounded-[12px] border border-[#d9e0df] bg-white px-4 text-[0.98rem] font-semibold text-[#202733] outline-none transition placeholder:text-[#9099a7] focus:border-[#64c681] focus:ring-4 focus:ring-[#2fb75b]/10";
const passwordWrap = "relative";
const passwordInput = `${input} pr-12`;
const eyeButton =
   "absolute right-4 top-1/2 -translate-y-1/2 text-[#49515c] transition-colors hover:text-[#16873a]";
const optionsRow = "flex items-center justify-between gap-4";
const rememberLabel =
   "inline-flex items-center gap-3 text-[0.92rem] font-semibold text-[#404852]";
const checkbox =
   "h-5 w-5 rounded-[5px] border border-[#cbd4d2] accent-[#168f3a]";
const submit =
   "inline-flex h-[58px] w-full items-center justify-center rounded-[12px] bg-[#079b43] px-6 text-[1rem] font-black text-white shadow-[0_14px_28px_rgba(7,155,67,0.22)] transition-colors hover:bg-[#07883b]";
const helper =
   "mt-8 text-center text-[0.95rem] font-semibold text-[#4d5662]";
const helperLink =
   "font-black text-[#079b43] transition-colors hover:text-[#067f38]";

const LoginPage = () => {
   return (
      <div className={pageShell}>
         <Header />
         <main className={main}>
            <div className={pattern} aria-hidden="true" />
            <div className={glow} aria-hidden="true" />

            <section className={card} aria-labelledby="login-page-title">
               <h1 id="login-page-title" className={title}>
                  Welcome back
               </h1>
               <p className={subtitle}>
                  Log in to continue to your account
               </p>

               <form className={form} onSubmit={(event) => event.preventDefault()}>
                  <label className={field}>
                     <span className={label}>Email</span>
                     <input
                        className={input}
                        type="email"
                        placeholder="name@company.com"
                        autoComplete="email"
                     />
                  </label>

                  <label className={field}>
                     <span className={label}>Password</span>
                     <span className={passwordWrap}>
                        <input
                           className={passwordInput}
                           type="password"
                           placeholder="Enter your password"
                           autoComplete="current-password"
                        />
                        <button
                           className={eyeButton}
                           type="button"
                           aria-label="Show password"
                        >
                           <Eye size={20} strokeWidth={2.1} />
                        </button>
                     </span>
                  </label>

                  <div className={optionsRow}>
                     <label className={rememberLabel}>
                        <input className={checkbox} type="checkbox" />
                        Remember me
                     </label>
                  </div>

                  <button className={submit} type="submit">
                     Log in
                  </button>
               </form>

               <p className={helper}>
                  Don&apos;t have an account?{" "}
                  <Link className={helperLink} to="/signup">
                     Sign up
                  </Link>
               </p>
            </section>
         </main>
         <Footer />
      </div>
   );
};

export default LoginPage;
