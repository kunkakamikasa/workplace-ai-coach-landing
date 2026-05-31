"use client";

import { useCallback } from "react";
import { trackCtaClick, useImpression } from "@/lib/analytics";
import type { UtmFields } from "@/lib/buildCtaUrl";
import {
  DEMO_SECTION,
  FAQ_ITEMS,
  REWRITE_SECTION,
  ROLEPLAY_SECTION,
  SITE,
} from "@/lib/config";

type Props = {
  ctaUrl: string;
  utm: UtmFields;
};

export default function Landing({ ctaUrl, utm }: Props) {
  useImpression("hero", "hero");
  useImpression("benefits", "benefits");
  useImpression("how", "how_it_works");
  useImpression("demo", DEMO_SECTION.id);
  useImpression("rewrite", REWRITE_SECTION.id);
  useImpression("roleplay", ROLEPLAY_SECTION.id);
  useImpression("trust", "trust");
  useImpression("faq", "faq");
  useImpression("final", "final_cta");

  const onCta = useCallback(
    (placement: string) => () => {
      trackCtaClick({
        placement,
        target: "app_store",
        ctaUrl,
        utm,
      });
    },
    [ctaUrl, utm],
  );

  return (
    <main className="pb-28">
      {/* Hero */}
      <section id="hero" className="section">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            {SITE.productName}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Your pocket coach for tough work moments
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Spot risk in a draft, rewrite a reply in your voice, and rehearse
            the conversation you&apos;ve been avoiding — right from your phone.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={ctaUrl}
              className="btn-primary"
              onClick={onCta("hero_primary")}
              data-cta="hero_primary"
            >
              Get the app
            </a>
            <a
              href="#demo"
              className="btn-secondary"
              data-cta="hero_secondary"
            >
              See it in action
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="section">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">
            Three things it actually does
          </h2>
          <div className="grid gap-4">
            {[
              {
                title: "Catch the message you'd regret",
                body:
                  "Tone, blame language, and urgency pressure get flagged before you hit send.",
              },
              {
                title: "Rewrite without losing your point",
                body:
                  "Pick a tone — calm, direct, warm — and keep the meaning you actually wanted.",
              },
              {
                title: "Rehearse the hard talk",
                body:
                  "Practice the raise ask or the boundary out loud. The coach plays the other side.",
              },
            ].map((b) => (
              <div key={b.title} className="glass rounded-2xl p-5">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="section">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">How it works</h2>
          <ol className="space-y-4">
            {[
              { step: "1", text: "Paste a draft or describe the situation." },
              {
                step: "2",
                text:
                  "The coach flags risk, suggests rewrites, and offers roleplay.",
              },
              { step: "3", text: "You pick the version that sounds like you." },
            ].map((s) => (
              <li key={s.step} className="glass rounded-2xl p-4 flex gap-3">
                <span className="text-accent font-semibold">{s.step}</span>
                <span className="text-sm text-slate-300">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Message Risk Demo */}
      <section id={DEMO_SECTION.id} className="section">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
            {DEMO_SECTION.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold">{DEMO_SECTION.title}</h2>
          <p className="text-sm text-slate-300 mt-2">{DEMO_SECTION.subtitle}</p>

          <div className="glass rounded-2xl p-5 mt-5">
            <p className="text-xs uppercase text-slate-400 mb-2">Your draft</p>
            <p className="text-sm text-slate-200 leading-relaxed">
              {DEMO_SECTION.sample.input}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {DEMO_SECTION.sample.risks.map((r) => (
                <span
                  key={r.label}
                  className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5"
                  data-severity={r.severity}
                >
                  {r.label}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 mt-3 border-accent/30">
            <p className="text-xs uppercase text-accent mb-2">
              Suggested rewrite
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              {DEMO_SECTION.sample.suggestion}
            </p>
          </div>

          <a
            href={ctaUrl}
            className="btn-primary mt-6"
            onClick={onCta("demo_section")}
            data-cta="demo_section"
          >
            Try it on your message
          </a>
        </div>
      </section>

      {/* Reply Rewrite */}
      <section id={REWRITE_SECTION.id} className="section">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
            {REWRITE_SECTION.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold">{REWRITE_SECTION.title}</h2>
          <p className="text-sm text-slate-300 mt-2">
            {REWRITE_SECTION.subtitle}
          </p>

          <div className="glass rounded-2xl p-5 mt-5">
            <p className="text-xs uppercase text-slate-400 mb-2">They wrote</p>
            <p className="text-sm text-slate-200 leading-relaxed">
              {REWRITE_SECTION.inboundMessage}
            </p>
          </div>

          <div className="grid gap-3 mt-3">
            {REWRITE_SECTION.variants.map((v) => (
              <div key={v.tone} className="glass rounded-2xl p-4">
                <p className="text-xs uppercase text-accent mb-1">{v.tone}</p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href={ctaUrl}
            className="btn-primary mt-6"
            onClick={onCta("rewrite_section")}
            data-cta="rewrite_section"
          >
            Rewrite my reply
          </a>
        </div>
      </section>

      {/* Roleplay Rehearsal */}
      <section id={ROLEPLAY_SECTION.id} className="section">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
            {ROLEPLAY_SECTION.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold">{ROLEPLAY_SECTION.title}</h2>
          <p className="text-sm text-slate-300 mt-2">
            {ROLEPLAY_SECTION.subtitle}
          </p>

          <div className="grid gap-3 mt-5">
            {ROLEPLAY_SECTION.scenarios.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-4">
                <h3 className="font-semibold text-sm">{s.title}</h3>
                <p className="text-xs text-slate-400 mt-1">&ldquo;{s.prompt}&rdquo;</p>
                <p className="text-sm text-slate-200 mt-3 leading-relaxed">
                  {s.coachingLine}
                </p>
              </div>
            ))}
          </div>

          <a
            href={ctaUrl}
            className="btn-primary mt-6"
            onClick={onCta("roleplay_section")}
            data-cta="roleplay_section"
          >
            Rehearse a real scenario
          </a>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="section">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-3">Built around your privacy</h2>
          <p className="text-sm text-slate-300">
            Drafts stay on-device by default. Nothing is shared with your
            employer.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <div className="grid gap-3">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="glass rounded-2xl p-4">
                <p className="font-semibold text-sm">{item.q}</p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final" className="section">
        <div className="container-x text-center">
          <h2 className="text-2xl font-semibold">Get a coach in your pocket</h2>
          <p className="text-sm text-slate-300 mt-2">
            Free to try. No login required for the first conversation.
          </p>
          <a
            href={ctaUrl}
            className="btn-primary mt-5"
            onClick={onCta("final_cta")}
            data-cta="final_cta"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Sticky bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-3 bg-gradient-to-t from-ink/95 to-ink/60 backdrop-blur md:hidden">
        <a
          href={ctaUrl}
          className="btn-primary w-full"
          onClick={onCta("sticky_bottom")}
          data-cta="sticky_bottom"
        >
          Get the app
        </a>
      </div>
    </main>
  );
}
