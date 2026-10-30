"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Hook this up to an API route, form service, or email provider of your choice.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-2xl mb-14">
          <p className="font-hand text-xl text-gold mb-2">Let&apos;s talk</p>
          <h1 className="font-hand text-4xl sm:text-5xl text-ink leading-tight">
            Contact.
          </h1>
          <p className="mt-4 text-ink/80 text-base sm:text-lg">
            Have a project, a role, or just a question? Send a message and
            I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white/70 border border-ink/5 p-6">
              <p className="text-xs uppercase tracking-wide font-semibold text-forest mb-1">
                Email
              </p>
              <a
                href="mailto:thushitha13@gmail.com"
                className="text-ink font-medium hover:text-forest transition-colors"
              >
                thushitha13@gmail.com
              </a>
            </div>

            <div className="rounded-2xl bg-white/70 border border-ink/5 p-6">
              <p className="text-xs uppercase tracking-wide font-semibold text-forest mb-1">
                Location
              </p>
              <p className="text-ink font-medium">Sri Lanka (Remote-friendly)</p>
            </div>

            <div className="rounded-2xl bg-white/70 border border-ink/5 p-6">
              <p className="text-xs uppercase tracking-wide font-semibold text-forest mb-2">
                Elsewhere
              </p>
              <div className="flex items-center gap-4 text-gold">
                <a href="https://www.linkedin.com/in/thushithasenarath/" target="_blank" className="hover:opacity-70 transition-opacity text-sm font-medium">
                  LinkedIn
                </a>
                <a href="https://github.com/ThushithaP" target="_blank" className="hover:opacity-70 transition-opacity text-sm font-medium">
                  GitHub
                </a>
                {/* <a href="#" className="hover:opacity-70 transition-opacity text-sm font-medium">
                  Twitter
                </a> */}
              </div>
            </div>
          </div>

          {/* Form */}
          {/* <div className="rounded-2xl bg-white/70 border border-ink/5 p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-2 py-8">
                <p className="font-hand text-2xl text-forest">Message sent.</p>
                <p className="text-ink/70 text-sm">
                  Thanks for reaching out — I&apos;ll reply as soon as I can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      className="rounded-lg border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-forest transition-colors"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-lg border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-forest transition-colors"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    className="rounded-lg border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-forest transition-colors"
                    placeholder="What's this about?"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="rounded-lg border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-forest transition-colors resize-none"
                    placeholder="Tell me a bit about your project..."
                  />
                </label>

                <button
                  type="submit"
                  className="self-start rounded-full bg-forest px-8 py-3 text-sm font-semibold text-cream hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div> */}
        </div>
      </section>
    </main>
  );
}
