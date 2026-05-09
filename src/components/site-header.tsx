import Link from "next/link";

const nav = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[--color-border]/60 bg-[--color-background]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[--color-accent] text-[--color-accent-foreground]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12 12 4l9 8" />
              <path d="M5 10v10h14V10" />
            </svg>
          </span>
          <span>Rooftop</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[--color-muted] transition-colors hover:text-[--color-foreground]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="hidden text-sm text-[--color-muted] transition-colors hover:text-[--color-foreground] sm:inline"
          >
            Log in
          </Link>
          <Link
            href="#cta"
            className="inline-flex h-9 items-center rounded-full bg-[--color-foreground] px-4 text-sm font-medium text-[--color-background] transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
