"use client";

import { trackEvent, useImpression } from "@/lib/analytics";

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/app/id0000000000";

function PrimaryCTA({ placement }: { placement: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      className="btn-primary w-full sm:w-auto"
      onClick={() => trackEvent("cta_click", { placement, target: "app_store" })}
      data-cta={placement}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.5 1.5a4.5 4.5 0 0 1-1.1 3.3 3.7 3.7 0 0 1-2.9 1.4 4.2 4.2 0 0 1 1.1-3.2A4.6 4.6 0 0 1 16.5 1.5Zm3.7 16.6c-.6 1.4-1.4 2.7-2.5 3.9-.9 1-1.9 2-3.4 2-1.4 0-1.9-.9-3.6-.9-1.7 0-2.2.9-3.6.9-1.5 0-2.6-1.1-3.6-2.1A14.2 14.2 0 0 1 1 14c0-4.6 3-7 5.9-7 1.5 0 2.7.9 3.6.9.9 0 2.4-1 4.1-1 .8 0 3 .1 4.4 2.4-3.7 2.1-3.1 7.3.2 8.8Z" />
      </svg>
      Download on the App Store
    </a>
  );
}

function StickyCTA() {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-3 sm:hidden">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener"
        className="btn-primary w-full"
        onClick={() => trackEvent("cta_click", { placement: "sticky_bottom", target: "app_store" })}
        data-cta="sticky_bottom"
      >
        Get the app — Free
      </a>
    </div>
  );
}

function Hero() {
  useImpression("hero", "hero");
  return (
    <section id="hero" className="section pt-24">
      <div className="container-x">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> New on iOS
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Your pocket coach for <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">tough work moments</span>.
        </h1>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Workplace AI Coach helps you handle hard conversations, write sharper messages, and grow your career — quietly, in your pocket.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <PrimaryCTA placement="hero" />
          <a
            href="#how"
            className="btn-secondary"
            onClick={() => trackEvent("nav_click", { placement: "hero", target: "how" })}
          >
            See how it works
          </a>
        </div>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted">
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 to-amber-300 ring-2 ring-ink" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 ring-2 ring-ink" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-300 ring-2 ring-ink" />
          </div>
          <span>Loved by managers, ICs and new hires</span>
        </div>

        <div className="mt-10 glass rounded-3xl p-3">
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5">
            <div className="text-xs text-muted">Coaching · Real-time</div>
            <div className="mt-2 text-sm text-slate-200">
              <p className="rounded-2xl bg-white/5 p-3">
                “My manager keeps interrupting me in 1:1s. How do I bring it up without sounding harsh?”
              </p>
              <p className="mt-2 rounded-2xl bg-gradient-to-br from-accent2/30 to-accent/30 p-3">
                Try this: anchor on impact, not blame. “In our 1:1s, I notice I lose my train of thought when I’m cut off — could we try letting me finish, then you respond? It’ll make our time more useful.”
              </p>
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              <span className="rounded-full bg-white/5 px-2 py-1">Tone: assertive · kind</span>
              <span className="rounded-full bg-white/5 px-2 py-1">90 sec coaching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  useImpression("benefits", "benefits");
  const items = [
    { t: "Tough conversations", d: "Get a script for that 1:1, the salary ask, or the awkward Slack thread." },
    { t: "Sharper writing", d: "Rewrite emails and DMs with the right tone for your audience and stakes." },
    { t: "Career moves", d: "Plan promotions, peer feedback and interviews with a coach in your pocket." },
  ];
  return (
    <section id="benefits" className="section pt-4">
      <div className="container-x">
        <h2 className="text-2xl font-semibold sm:text-3xl">Built for the moments that matter</h2>
        <p className="mt-2 text-slate-300">No more guessing. Get steady, practical coaching whenever work gets hard.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="glass rounded-2xl p-4">
              <div className="text-base font-semibold">{it.t}</div>
              <div className="mt-1 text-sm text-slate-300">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  useImpression("how", "how");
  const steps = [
    { n: "1", t: "Tell it what’s going on", d: "Paste the message, situation or your goal." },
    { n: "2", t: "Get a coached response", d: "Multiple drafts with tone choices — always your voice." },
    { n: "3", t: "Send with confidence", d: "Copy, edit, save to playbook for next time." },
  ];
  return (
    <section id="how" className="section">
      <div className="container-x">
        <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
        <div className="mt-5 space-y-3">
          {steps.map((s) => (
            <div key={s.n} className="glass flex items-start gap-3 rounded-2xl p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent2 to-accent text-sm font-semibold">
                {s.n}
              </div>
              <div>
                <div className="text-base font-semibold">{s.t}</div>
                <div className="mt-1 text-sm text-slate-300">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  useImpression("trust", "trust");
  return (
    <section id="trust" className="section pt-4">
      <div className="container-x">
        <div className="glass rounded-3xl p-5">
          <p className="text-base text-slate-200">
            “I used to draft and redraft Slack messages for an hour. Now I get a calm, professional version in 20 seconds — and I sound like me.”
          </p>
          <div className="mt-3 text-xs text-muted">Sam · Senior PM</div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs text-muted">
          <div className="glass rounded-2xl p-3">Private by default</div>
          <div className="glass rounded-2xl p-3">No corporate data stored</div>
          <div className="glass rounded-2xl p-3">Works on iPhone</div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  useImpression("final", "final");
  return (
    <section id="final" className="section">
      <div className="container-x text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Walk into Monday with a coach in your pocket.
        </h2>
        <p className="mt-3 text-slate-300">Free to download. Try a tough conversation in under a minute.</p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <PrimaryCTA placement="final" />
          <span className="text-xs text-muted">iPhone · Free · No account needed to try</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-28 pt-10 text-center text-xs text-muted sm:pb-10">
      <div>© {new Date().getFullYear()} Workplace AI Coach</div>
      <div className="mt-1">A pocket coach for hard work moments.</div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Trust />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
