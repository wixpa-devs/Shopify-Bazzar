import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { registerUser } from "../lib/formApi.js";

const pageShell = "min-h-screen bg-white";
const main =
   "relative isolate flex min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden bg-[#f4fbf5] px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const pattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const glow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.94)_0%,rgba(244,251,245,0.78)_48%,rgba(238,249,241,0.95)_100%)]";
const card =
   "w-full max-w-[720px] rounded-[20px] border border-[#dfe9e2] bg-white px-7 py-10 shadow-[0_24px_70px_rgba(17,37,23,0.09)] sm:px-10 sm:py-12";
const title =
   "text-center text-[clamp(2rem,4.5vw,2.75rem)] font-black leading-none tracking-[-0.045em] text-[#111815]";
const subtitle =
   "mx-auto mt-4 max-w-[360px] text-center text-[1rem] font-semibold leading-[1.55] text-[#717b87]";
const form = "mt-9 grid gap-5";
const formGrid = "grid gap-5 sm:grid-cols-2";
const field = "grid gap-3";
const label = "text-[0.9rem] font-black text-[#2a303b]";
const requiredMark = "ml-1 text-[#079b43]";
const optionalMark = "ml-1 text-[0.78rem] font-bold text-[#7a8590]";
const input =
   "h-[56px] w-full rounded-[12px] border border-[#d9e0df] bg-white px-4 text-[0.98rem] font-semibold text-[#202733] outline-none transition placeholder:text-[#9099a7] focus:border-[#64c681] focus:ring-4 focus:ring-[#2fb75b]/10";
const passwordWrap = "relative";
const passwordInput = `${input} pr-12`;
const eyeButton =
   "absolute right-4 top-1/2 -translate-y-1/2 text-[#49515c] transition-colors hover:text-[#16873a]";
const submit =
   "mt-1 inline-flex h-[58px] w-full items-center justify-center rounded-[12px] bg-[#079b43] px-6 text-[1rem] font-black text-white shadow-[0_14px_28px_rgba(7,155,67,0.22)] transition-colors hover:bg-[#07883b]";
const helper =
   "mt-8 text-center text-[0.95rem] font-semibold text-[#4d5662]";
const helperLink =
   "font-black text-[#079b43] transition-colors hover:text-[#067f38]";
const statusText =
   "text-center text-[0.88rem] font-bold leading-[1.5]";
const errorText = `${statusText} text-[#c24135]`;
const successText = `${statusText} text-[#087f36]`;

const SignupPage = () => {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [status, setStatus] = useState({ type: "", message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
      setStatus({ type: "", message: "" });

      const formData = new FormData(event.currentTarget);
      const password = String(formData.get("password") || "");
      const confirmPassword = String(formData.get("confirmPassword") || "");

      if (password !== confirmPassword) {
         setStatus({
            type: "error",
            message: "Passwords do not match.",
         });
         return;
      }

      setIsSubmitting(true);

      try {
         const result = await registerUser({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phoneNumber: formData.get("phoneNumber"),
            country: formData.get("country"),
            state: formData.get("state"),
            city: formData.get("city"),
            password,
         });
         setStatus({
            type: "success",
            message: result.message || "Account created successfully.",
         });
         navigate("/login", {
            replace: true,
            state: {
               message: "Account created. Press Log in to continue.",
               prefill: {
                  email: String(formData.get("email") || ""),
                  password,
               },
            },
         });
      } catch (error) {
         setStatus({
            type: "error",
            message: error.message || "Signup failed. Please try again.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className={pageShell}>
         <Header />
         <main className={main}>
            <div className={pattern} aria-hidden="true" />
            <div className={glow} aria-hidden="true" />

            <section className={card} aria-labelledby="signup-page-title">
               <h1 id="signup-page-title" className={title}>
                  Create account
               </h1>
               <p className={subtitle}>
                  Sign up to start building premium Shopify pages faster.
               </p>

               <form className={form} onSubmit={handleSubmit}>
                  <div className={formGrid}>
                     <label className={field}>
                        <span className={label}>
                           First Name<span className={requiredMark}>*</span>
                        </span>
                        <input
                           className={input}
                           name="firstName"
                           type="text"
                           placeholder="First name"
                           autoComplete="given-name"
                           required
                        />
                     </label>

                     <label className={field}>
                        <span className={label}>
                           Last Name<span className={optionalMark}>(optional)</span>
                        </span>
                        <input
                           className={input}
                           name="lastName"
                           type="text"
                           placeholder="Last name"
                           autoComplete="family-name"
                        />
                     </label>
                  </div>

                  <label className={field}>
                     <span className={label}>
                        Email<span className={requiredMark}>*</span>
                     </span>
                     <input
                        className={input}
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        autoComplete="email"
                        required
                     />
                  </label>

                  <label className={field}>
                     <span className={label}>
                        Phone Number<span className={optionalMark}>(optional)</span>
                     </span>
                     <input
                        className={input}
                        name="phoneNumber"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        autoComplete="tel"
                     />
                  </label>

                  <div className={formGrid}>
                     <label className={field}>
                        <span className={label}>
                           Country<span className={optionalMark}>(optional)</span>
                        </span>
                        <input
                           className={input}
                           name="country"
                           type="text"
                           placeholder="Country"
                           autoComplete="country-name"
                        />
                     </label>

                     <label className={field}>
                        <span className={label}>
                           State<span className={optionalMark}>(optional)</span>
                        </span>
                        <input
                           className={input}
                           name="state"
                           type="text"
                           placeholder="State"
                           autoComplete="address-level1"
                        />
                     </label>
                  </div>

                  <label className={field}>
                     <span className={label}>
                        City<span className={optionalMark}>(optional)</span>
                     </span>
                     <input
                        className={input}
                        name="city"
                        type="text"
                        placeholder="City"
                        autoComplete="address-level2"
                     />
                  </label>

                  <label className={field}>
                     <span className={label}>
                        Password<span className={requiredMark}>*</span>
                     </span>
                     <span className={passwordWrap}>
                        <input
                           className={passwordInput}
                           name="password"
                           type={showPassword ? "text" : "password"}
                           placeholder="Create a password"
                           autoComplete="new-password"
                           minLength={8}
                           required
                        />
                        <button
                           className={eyeButton}
                           type="button"
                           aria-label={showPassword ? "Hide password" : "Show password"}
                           aria-pressed={showPassword}
                           onClick={() => setShowPassword((value) => !value)}
                        >
                           {showPassword ? (
                              <EyeOff size={20} strokeWidth={2.1} />
                           ) : (
                              <Eye size={20} strokeWidth={2.1} />
                           )}
                        </button>
                     </span>
                  </label>

                  <label className={field}>
                     <span className={label}>
                        Confirm Password<span className={requiredMark}>*</span>
                     </span>
                     <span className={passwordWrap}>
                        <input
                           className={passwordInput}
                           name="confirmPassword"
                           type={showConfirmPassword ? "text" : "password"}
                           placeholder="Confirm your password"
                           autoComplete="new-password"
                           minLength={8}
                           required
                        />
                        <button
                           className={eyeButton}
                           type="button"
                           aria-label={
                              showConfirmPassword
                                 ? "Hide confirm password"
                                 : "Show confirm password"
                           }
                           aria-pressed={showConfirmPassword}
                           onClick={() => setShowConfirmPassword((value) => !value)}
                        >
                           {showConfirmPassword ? (
                              <EyeOff size={20} strokeWidth={2.1} />
                           ) : (
                              <Eye size={20} strokeWidth={2.1} />
                           )}
                        </button>
                     </span>
                  </label>

                  <button className={submit} type="submit" disabled={isSubmitting}>
                     {isSubmitting ? "Creating account..." : "Sign up"}
                  </button>

                  {status.message ? (
                     <p className={status.type === "success" ? successText : errorText}>
                        {status.message}
                     </p>
                  ) : null}
               </form>

               <p className={helper}>
                  Already have an account?{" "}
                  <Link className={helperLink} to="/login">
                     Log in
                  </Link>
               </p>
            </section>
         </main>
         <Footer />
      </div>
   );
};

export default SignupPage;
