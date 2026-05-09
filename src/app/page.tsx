import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const features = [
  {
    title: "Unified workspace",
    body: "Bring product, ops, and revenue tooling into a single, queryable layer your whole team can rely on.",
    icon: <path d="M3 7h18M3 12h18M3 17h12" />,
  },
  {
    title: "Workflow automation",
    body: "Trigger multi-step automations across the tools you already use — without glue code or brittle Zaps.",
    icon: <path d="m13 2-3 9h6l-3 11M5 12h2m10 0h2" />,
  },
  {
    title: "Insights, in context",
    body: "Live dashboards and alerts that travel with the work, so the right people act before things slip.",
    icon: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  },
  {
    title: "Built for scale",
    body: "SOC 2 Type II, SSO, granular roles, and audit logs ready on day one — designed for teams of any size.",
    icon: <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />,
  },
  {
    title: "Open by default",
    body: "Public APIs, webhooks, and a CLI so you can extend Rooftop wherever your team needs it next.",
    icon: <path d="M8 9 3 12l5 3M16 9l5 3-5 3M14 5 10 19" />,
  },
  {
    title: "Realtime sync",
    body: "Bidirectional sync keeps every connected system in lockstep — no nightly batch jobs, no stale data.",
    icon: <path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5" />,
  },
];

const logos = ["Acme", "Northwind", "Vertex", "Helio", "Lumen", "Parallax"];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,rgba(255,106,61,0.18),transparent_70%)]"
          />
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-background] px-3 py-1 text-xs text-[--color-muted]">
              <span className="h-1.5 w-1.5 rounded-full bg-[--color-accent]" />
              New · Rooftop 2.0 is now in private beta
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              The operating layer for teams that ship.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-[--color-muted]">
              Rooftop connects the tools you already use, automates the busywork between them, and gives every team a
              shared source of truth — so you can move faster with less.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#cta"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[--color-foreground] px-6 text-sm font-medium text-[--color-background] transition-opacity hover:opacity-90"
              >
                Start free
              </Link>
              <Link
                href="#product"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[--color-border] px-6 text-sm font-medium transition-colors hover:bg-[--color-foreground]/5"
              >
                See how it works
              </Link>
            </div>

            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="relative rounded-2xl border border-[--color-border] bg-[--color-foreground]/[.02] p-2 shadow-2xl shadow-black/10">
                <div className="rounded-xl border border-[--color-border]/80 bg-[--color-background]">
                  <div className="flex items-center gap-1.5 border-b border-[--color-border]/80 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[--color-border]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[--color-border]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[--color-border]" />
                    <span className="ml-3 text-xs text-[--color-muted]">app.rooftop.io</span>
                  </div>
                  <div className="grid gap-4 p-6 md:grid-cols-3">
                    {[
                      { k: "Active workflows", v: "128" },
                      { k: "Events / min", v: "12.4k" },
                      { k: "Connected apps", v: "37" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-lg border border-[--color-border]/80 p-4 text-left">
                        <div className="text-xs uppercase tracking-wide text-[--color-muted]">{s.k}</div>
                        <div className="mt-2 text-2xl font-semibold">{s.v}</div>
                      </div>
                    ))}
                    <div className="md:col-span-3 rounded-lg border border-[--color-border]/80 p-4 text-left">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-sm font-medium">Recent activity</div>
                        <div className="text-xs text-[--color-muted]">Live</div>
                      </div>
                      <ul className="divide-y divide-[--color-border]/80 text-sm">
                        {[
                          ["Lifecycle email triggered", "Marketing · 2s ago"],
                          ["New deal pushed to CRM", "Revenue · 14s ago"],
                          ["Incident auto-routed to on-call", "Engineering · 38s ago"],
                        ].map(([t, m]) => (
                          <li key={t} className="flex items-center justify-between py-2">
                            <span>{t}</span>
                            <span className="text-xs text-[--color-muted]">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers" className="border-y border-[--color-border]/60 bg-[--color-foreground]/[.015]">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <p className="text-center text-xs uppercase tracking-widest text-[--color-muted]">
              Trusted by modern teams
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
              {logos.map((name) => (
                <div
                  key={name}
                  className="text-center text-lg font-semibold tracking-tight text-[--color-muted]/80"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything your team needs, none of the glue code.
            </h2>
            <p className="mt-4 text-[--color-muted]">
              Rooftop replaces the tangle of point integrations with a single platform — so the rest of your team can
              focus on the work that actually moves the business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-[--color-border] p-6 transition-colors hover:border-[--color-foreground]/30"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[--color-accent]/10 text-[--color-accent]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-[--color-muted]">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid items-center gap-12 rounded-2xl border border-[--color-border] bg-[--color-foreground]/[.02] p-8 md:grid-cols-2 md:p-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[--color-accent]">How it works</span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Connect once. Compose anything.</h3>
              <p className="mt-4 text-[--color-muted]">
                Plug in your CRM, billing, support, and product analytics in minutes. Then build automations,
                dashboards, and AI agents on top — all from the same trustworthy data model.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "100+ first-party connectors",
                  "Versioned, type-safe schemas",
                  "Run anywhere: cloud, VPC, or on-prem",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 text-[--color-accent]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[--color-border] bg-[--color-background] p-4 font-mono text-xs">
              <pre className="overflow-x-auto leading-6">
{`// rooftop.config.ts
import { defineFlow } from "@rooftop/sdk";

export default defineFlow({
  on: "stripe.invoice.paid",
  steps: [
    { do: "crm.upsertAccount", with: { email: "{{event.customer.email}}" } },
    { do: "slack.notify",      with: { channel: "#wins" } },
    { do: "rooftop.metric",    with: { name: "mrr.realized" } },
  ],
});`}
              </pre>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple pricing that scales with you.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[--color-muted]">
              Start free. Upgrade when you need advanced automations, audit, and enterprise controls.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "$0", desc: "For small teams getting started.", cta: "Start free", featured: false },
              { name: "Growth", price: "$49", desc: "For teams scaling automations.", cta: "Start trial", featured: true },
              { name: "Enterprise", price: "Custom", desc: "Advanced controls & support.", cta: "Talk to sales", featured: false },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-xl border p-6 ${
                  p.featured
                    ? "border-[--color-accent]/60 bg-[--color-accent]/[.06] shadow-lg"
                    : "border-[--color-border]"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-full bg-[--color-accent] px-2 py-0.5 text-xs font-medium text-[--color-accent-foreground]">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  {p.price !== "Custom" && <span className="text-sm text-[--color-muted]">/user/mo</span>}
                </div>
                <p className="mt-2 text-sm text-[--color-muted]">{p.desc}</p>
                <Link
                  href="#cta"
                  className={`mt-6 inline-flex h-10 w-full items-center justify-center rounded-full text-sm font-medium transition-opacity ${
                    p.featured
                      ? "bg-[--color-accent] text-[--color-accent-foreground] hover:opacity-90"
                      : "border border-[--color-border] hover:bg-[--color-foreground]/5"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-foreground] px-8 py-14 text-center text-[--color-background]">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to ship faster?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm opacity-80">
              Spin up Rooftop in under 5 minutes. No credit card required.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[--color-accent] px-6 text-sm font-medium text-[--color-accent-foreground] transition-opacity hover:opacity-90"
              >
                Start free
              </Link>
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium transition-colors hover:bg-white/10"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
