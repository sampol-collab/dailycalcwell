"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";

export function ContactForm() {
  const { ui } = useLocale();
  const c = ui.pages.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("feedback");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(c.errors.name);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(c.errors.email);
      return;
    }
    if (message.trim().length < 10) {
      setError(c.errors.message);
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-slate-900"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-bold text-slate-900">{c.formSuccessTitle}</h3>
            <p className="mt-1 text-sm text-slate-700 leading-relaxed">
              {c.formSuccessBody}{" "}
              <span className="font-mono font-medium">
                contact@dailycalcwell.com
              </span>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setMessage("");
              }}
              className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              {c.formReset}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
    >
      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-slate-800"
          >
            {c.formName}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-slate-800"
          >
            {c.formEmail}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-sm font-semibold text-slate-800"
        >
          {c.formTopic}
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900"
        >
          <option value="feedback">{c.topics.feedback}</option>
          <option value="correction">{c.topics.correction}</option>
          <option value="privacy">{c.topics.privacy}</option>
          <option value="business">{c.topics.business}</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-slate-800"
        >
          {c.formMessage}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-[#38BDF8] px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        {c.formSubmit}
      </button>
    </form>
  );
}
