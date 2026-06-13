"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full bg-transparent border-b border-stone-300 py-3 text-sm font-sans text-charcoal placeholder:text-stone-400 focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-300";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="divider-gold" />
        <p className="font-serif text-2xl font-light text-charcoal mt-4">{state.message}</p>
        <p className="font-sans text-sm text-stone-400">
          I typically respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="label-accent block mb-3">Name *</label>
          <input name="name" type="text" required placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className="label-accent block mb-3">Email *</label>
          <input name="email" type="email" required placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="label-accent block mb-3">Phone</label>
          <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass} />
        </div>
        <div>
          <label className="label-accent block mb-3">I'm Interested In</label>
          <select name="interest" className={cn(inputClass, "cursor-pointer")}>
            <option value="">Select one...</option>
            <option value="Buying a home">Buying a home</option>
            <option value="Selling my home">Selling my home</option>
            <option value="Home valuation">Home valuation</option>
            <option value="General inquiry">General inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label-accent block mb-3">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me how I can help..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm font-sans text-red-500">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "font-sans text-sm font-medium tracking-widest uppercase px-10 py-4 transition-all duration-300",
          pending
            ? "bg-stone-300 text-stone-500 cursor-not-allowed"
            : "bg-charcoal text-white hover:bg-[var(--color-gold)]"
        )}
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
