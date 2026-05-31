import type { UtmFields } from "./buildCtaUrl";

export const SITE = {
  productName: "Workplace AI Coach",
  tagline: "Your pocket coach for tough work moments.",
};

export const DEMO_SECTION = {
  id: "demo",
  eyebrow: "Message Risk Demo",
  title: "Spot risk in your message before you send",
  subtitle:
    "Paste a draft, see tone and risk highlights, and get a calmer rewrite suggestion.",
  sample: {
    input:
      "I can't believe you missed the deadline AGAIN. This is unacceptable and we need to talk now.",
    risks: [
      { label: "Aggressive tone", severity: "high" },
      { label: "Blame language", severity: "high" },
      { label: "Urgency pressure", severity: "med" },
    ],
    suggestion:
      "I noticed the deadline slipped today. I'd like to understand what blocked you and figure out how we keep this from repeating. Got 15 minutes?",
  },
} as const;

export const REWRITE_SECTION = {
  id: "rewrite",
  eyebrow: "Reply Rewrite",
  title: "Rewrite a reply in your voice, not theirs",
  subtitle: "Pick a tone, keep your meaning, soften the edges.",
  inboundMessage:
    "Why isn't this done yet? You said it would be ready by EOD yesterday.",
  variants: [
    {
      tone: "Calm and professional",
      text:
        "You're right, I committed to EOD yesterday. The integration test pushed it. I'll have a clean version in your inbox in 2 hours and a quick note on what slipped.",
    },
    {
      tone: "Direct but respectful",
      text:
        "I missed the EOD commitment. I'm finishing it now and will send it within 2 hours, plus a short note on what to change so this doesn't repeat.",
    },
    {
      tone: "Warm and accountable",
      text:
        "Thanks for the nudge — you're right that I said EOD. I underestimated the integration step. I'll ship it in 2 hours and follow up with what I'll do differently next time.",
    },
  ],
} as const;

export const ROLEPLAY_SECTION = {
  id: "roleplay",
  eyebrow: "Roleplay Rehearsal",
  title: "Rehearse the hard conversation before it happens",
  subtitle:
    "Practice the salary ask, the 1:1 boundary, the awkward Slack thread — out loud and in private.",
  scenarios: [
    {
      title: "Asking for a raise",
      prompt: "I want to talk about compensation in my next 1:1.",
      coachingLine:
        "Lead with the impact you've already delivered. Anchor the number in market data, not feelings.",
    },
    {
      title: "Pushing back on scope creep",
      prompt: "My PM keeps adding work without trade-offs.",
      coachingLine:
        "Name the trade-off, not the person. Offer two options that both protect the deadline.",
    },
    {
      title: "Giving peer feedback",
      prompt: "A teammate keeps interrupting me in meetings.",
      coachingLine:
        "Anchor on the specific moment and the impact. Ask for the change you want, not the behavior to stop.",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    q: "Is my conversation history private?",
    a: "Drafts and chats stay on-device by default. Nothing is shared with your employer, and we don't sell coaching content.",
  },
  {
    q: "Will it sound like me, or like a robot?",
    a: "The coach matches your tone — direct, warm, calm — and lets you tweak before sending. You always pick the final words.",
  },
] as const;

export type SiteUtm = UtmFields;
