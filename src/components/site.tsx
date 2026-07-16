import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo/logo-4.jpeg";

const NAV = [
  { label: "Syndicate", to: "/" as const, hash: "intro" },
  { label: "The Car", to: "/" as const, hash: "car" },
  { label: "The Build", to: "/the-build" as const },
  { label: "Gallery", to: "/design-gallery" as const },
  { label: "About", to: "/about" as const },
  { label: "Events", to: "/events" as const },
  { label: "Contact", to: "/contact" as const },
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-acid/30 blur-xl group-hover:bg-acid/50 transition-all rounded-full" />
            <img src={logo} alt="Syn Mod Build" className="relative h-10 w-10" width={40} height={40} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/80 leading-tight hidden sm:block">
            Syndicated<br />Restomod
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => {
            const href = n.hash ? `/#${n.hash}` : n.to;
            return (
              <a
                key={n.label}
                href={href}
                className="relative text-xs text-bone/70 hover:text-acid transition-colors uppercase tracking-[0.25em] font-medium after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-acid hover:after:w-full after:transition-all after:duration-300"
              >
                {n.label}
              </a>
            );
          })}
          {/* <Link to="/apply" className="btn-acid !py-2.5 !px-5 !text-[11px]">
            Apply <span aria-hidden>→</span>
          </Link> */}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-full"
        >
          <span className={`h-px w-4 bg-bone transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-px w-4 bg-bone transition-all ${open ? "-rotate-45 -translate-y-0.5" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {NAV.map((n) => {
            const href = n.hash ? `/#${n.hash}` : n.to;
            return (
              <a key={n.label} href={href} onClick={() => setOpen(false)}
                className="text-sm text-bone/80 hover:text-acid uppercase tracking-[0.25em] py-2 border-b border-white/5">
                {n.label}
              </a>
            );
          })}
          <Link to="/apply" onClick={() => setOpen(false)} className="btn-acid justify-center">
            Apply Now →
          </Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-carbon overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-60 pointer-events-none" />
      <div className="relative overflow-hidden py-6 border-b border-white/5">
        <div className="flex whitespace-nowrap scroll-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display text-4xl md:text-6xl text-bone/10">
              <span>Syndicate</span><span className="text-acid/30">★</span>
              <span>SYNDICATED RESTOMOD</span><span className="text-acid/30">★</span>
              <span>ONE OF ONE</span><span className="text-acid/30">★</span>
              <span>BUILT IN THE OPEN</span><span className="text-acid/30">★</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Syn Mod Build" className="h-12 w-12" />
            <div>
              <div className="font-display text-lg">Syndicated Restomod</div>
              <div className="font-mono text-[10px] text-bone/40 uppercase tracking-[0.25em]">
                Syndicate • Powered by TheCarCrowd
              </div>
            </div>
          </div>
          <p className="text-bone/60 text-sm max-w-md leading-relaxed">
            A new model for collective ownership of a singular hand-built restomod.
            Engineered in the open with the world's leading specialists.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-4">Explore</div>
          <div className="flex flex-col gap-3 text-sm text-bone/70">
            <Link to="/about" className="hover:text-acid transition-colors">About</Link>
            <Link to="/the-build" className="hover:text-acid transition-colors">The Build</Link>
            <Link to="/design-gallery" className="hover:text-acid transition-colors">Gallery</Link>
            <Link to="/events" className="hover:text-acid transition-colors">Events</Link>
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-4">Connect</div>
          <div className="flex flex-col gap-3 text-sm text-bone/70">
            <Link to="/contact" className="hover:text-acid transition-colors">Contact</Link>
            <Link to="/apply" className="hover:text-acid transition-colors">Apply</Link>
            <a href="mailto:hello@Syndicate.com" className="hover:text-acid transition-colors">hello@Syndicate.com</a>

            <div className="h-px w-6 bg-white/10 my-1" />

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-acid transition-colors">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-acid transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/5 py-6 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-3 text-bone/40 text-[11px] font-mono uppercase tracking-[0.25em]">
          <div>© {new Date().getFullYear()} Syn Mod Build — All rights reserved</div>
          <div>Built in the open · Driven for life</div>
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
  video,
  videoClassName = "opacity-30",
  overlayClassName = "bg-gradient-to-b from-ink/70 via-ink/80 to-ink",
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  video?: string;
  videoClassName?: string;
  overlayClassName?: string;
}) {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden grain border-b border-white/10">
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover ${videoClassName}`}
        />
      ) : image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 scale-110"
          loading="eager"
        />
      ) : null}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-acid/10 blur-[120px] float-slow" />
      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 glass-acid rounded-full px-4 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-acid">{kicker}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] max-w-5xl text-gradient-bone">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-bone/70 text-lg md:text-xl max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
          <div className="h-px w-12 bg-acid/60" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}