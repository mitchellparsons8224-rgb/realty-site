"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full bg-transparent border-b border-white/30 py-3 text-sm font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-300 uppercase tracking-widest";

export default function ContactFormDark() {
  const [state, action, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col gap-4 py-12">
        <div className="w-12 h-px bg-white/60" />
        <p className="font-serif text-2xl font-light text-white mt-4">{state.message}</p>
        <p className="font-sans text-sm text-white/50 tracking-widest uppercase">
          I'll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-8">
      <div>
        <label className="block text-xs font-sans tracking-[0.2em] uppercase text-white/60 mb-3">Name</label>
        <input name="name" type="text" required placeholder="Your full name" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-sans tracking-[0.2em] uppercase text-white/60 mb-3">Email</label>
        <input name="email" type="email" required placeholder="your@email.com" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-sans tracking-[0.2em] uppercase text-white/60 mb-3">Phone</label>
        <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-sans tracking-[0.2em] uppercase text-white/60 mb-3">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="How can I help you?"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          required
          id="consent"
          className="mt-0.5 accent-[var(--color-gold)] cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs font-sans text-white/40 leading-relaxed cursor-pointer">
          I agree to be contacted by Mitchell Parsons | LUXRE Realty via call, email, and text for real estate services. Message and data rates may apply.
        </label>
      </div>

      {state.status === "error" && (
        <p className="text-sm font-sans text-red-300">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "w-full font-sans text-xs font-medium tracking-[0.25em] uppercase py-4 transition-all duration-300 border",
          pending
            ? "border-white/20 text-white/30 cursor-not-allowed"
            : "border-white text-white hover:bg-white hover:text-charcoal"
        )}
      >
        {pending ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
