import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const NAV = [
  { label: "Vision", to: "/" as const, hash: "intro" },
  { label: "The Car", to: "/" as const, hash: "car" },
  { label: "The Build", to: "/the-build" as const },
  { label: "Gallery", to: "/design-gallery" as const },
  { label: "Partners", to: "/" as const, hash: "partners" },
  { label: "Events", to: "/" as const, hash: "events" },
];

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Syn Mod Build" className="h-10 w-10" width={40} height={40} />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-bone/80 leading-tight">
            Syndicated<br />Restomod
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => {
            const href = n.hash ? `/#${n.hash}` : n.to;
            return (
              <a
                key={n.label}
                href={href}
                className="text-sm text-bone/70 hover:text-acid transition-colors uppercase tracking-widest"
              >
                {n.label}
              </a>
            );
          })}
          <Link
            to="/apply"
            className="px-5 py-2 border-2 border-acid text-acid text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-8 items-start">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Syn Mod Build" className="h-10 w-10" width={40} height={40} />
          <div>
            <div className="font-display text-sm">Syndicated Restomod</div>
            <div className="font-mono text-xs text-bone/40 uppercase tracking-[0.2em]">
              Vision148 • Powered by TheCarCrowd
            </div>
          </div>
        </div>
        <div className="flex gap-6 text-bone/50 text-xs font-mono uppercase tracking-[0.2em]">
          <Link to="/the-build" className="hover:text-acid">The Build</Link>
          <Link to="/design-gallery" className="hover:text-acid">Gallery</Link>
          <Link to="/apply" className="hover:text-acid">Apply</Link>
        </div>
        <div className="text-bone/40 text-xs font-mono uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Syn Mod Build. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden grain border-b border-white/10">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 border border-acid/40 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm bg-ink/40">
          <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-acid">{kicker}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-bone/70 text-lg md:text-xl max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}