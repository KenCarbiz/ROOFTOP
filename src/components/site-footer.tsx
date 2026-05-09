import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#customers" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Status", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[--color-border]/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[--color-accent] text-[--color-accent-foreground]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12 12 4l9 8" />
                <path d="M5 10v10h14V10" />
              </svg>
            </span>
            <span>Rooftop</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-[--color-muted]">
            The modern operating layer for SaaS teams. Connect your tools, automate workflows, and ship faster.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[--color-muted] transition-colors hover:text-[--color-foreground]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[--color-border]/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-[--color-muted] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Rooftop, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[--color-foreground]">Privacy</Link>
            <Link href="#" className="hover:text-[--color-foreground]">Terms</Link>
            <Link href="#" className="hover:text-[--color-foreground]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
