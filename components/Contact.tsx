import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { useSectionInView } from "../lib/motionSettings";
import emailjs from "@emailjs/browser";
import { buildEmailHTML } from "../lib/emailTemplate";

// Dynamic import for map (no SSR)
const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] rounded-2xl bg-navy-800 animate-pulse flex items-center justify-center">
      <span className="text-slate-muted">Loading map...</span>
    </div>
  ),
});

const COOLDOWN_SECONDS = 60;

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({ email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "cooldown";
    message: string;
  } | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const cooldownRef = useRef<NodeJS.Timeout | null>(null);

  const startCooldown = () => {
    setCooldown(COOLDOWN_SECONDS);
    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    const honeypot = (formRef.current?.elements.namedItem("_honey") as HTMLInputElement)?.value;
    if (honeypot) return;

    // Validation
    if (!formValues.email.trim() || !formValues.message.trim()) {
      setFeedback({ type: "error", message: "Please fill in all fields." });
      return;
    }
    if (!isValidEmail(formValues.email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    // Cooldown check
    if (cooldown > 0) {
      setFeedback({
        type: "cooldown",
        message: `Please wait ${cooldown}s before sending another message.`,
      });
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //   {
      //     from_email: formValues.email,
      //     message: formValues.message,
      //     html_content: buildEmailHTML(formValues.email, formValues.message),
      //   },
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      // );

      setFormValues({ email: "", message: "" });
      setFeedback({
        type: "success",
        message: "Your message has been sent! Thanks for reaching out!",
      });
      startCooldown();
      setTimeout(() => setFeedback(null), 5000);
    } catch {
      setFeedback({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="scroll-mt-28" id="contact" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
        <motion.div
          {...motionProps}
          className="rounded-3xl overflow-hidden bg-gray-50 dark:bg-none dark:bg-navy-800 dark:outline dark:outline-2 dark:outline-navy-600 min-h-[350px] md:min-h-[400px]"
        >
          <LocationMap />
        </motion.div>
        <motion.div
          {...motionProps}
          className="rounded-3xl overflow-hidden bg-gradient p-6 md:p-12 dark:bg-none dark:bg-navy-800 dark:outline dark:outline-2 dark:outline-navy-600"
        >
          <h1 className="text-3xl font-semibold mb-6">
            Send me a <span className="text-gradient">Message</span>
          </h1>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Honeypot - hidden from users, catches bots */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", opacity: 0, height: 0, width: 0, overflow: "hidden" }}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                className="py-3 px-4 rounded-lg outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200 dark:bg-navy-700 dark:outline-navy-600 dark:text-slate-light dark:placeholder-slate-muted"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                required
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                className="py-3 px-4 rounded-lg text-gray-700 outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200 dark:bg-navy-700 dark:outline-navy-600 dark:text-slate-light dark:placeholder-slate-muted"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
              <button
                className="bg-black text-white font-medium py-3 px-6 rounded-full w-40 lg:w-auto self-start dark:bg-navy-700 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                type="submit"
                aria-label="Send Message"
                disabled={submitting || cooldown > 0}
              >
                {submitting
                  ? "Sending..."
                  : cooldown > 0
                  ? `Wait ${cooldown}s`
                  : "Send"}
              </button>
              {feedback && (
                <p
                  className={`text-sm ${
                    feedback.type === "success"
                      ? "text-green-600 dark:text-green-400"
                      : feedback.type === "cooldown"
                      ? "text-yellow-600 dark:text-yellow-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {feedback.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
