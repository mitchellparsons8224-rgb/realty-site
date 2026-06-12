"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NAV_LEFT, NAV_RIGHT } from "@/lib/constants";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: readonly NavChild[] };

function DropdownItem({ item, scrolled }: { item: NavItem; scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const textClass = scrolled ? "text-charcoal" : "text-white";

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn("label-accent transition-opacity duration-300 hover:opacity-60", textClass)}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "label-accent flex items-center gap-1 transition-opacity duration-300 hover:opacity-60",
          textClass
        )}
      >
        {item.label}
        <ChevronDown
          size={11}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full pt-3 min-w-[180px] transition-all duration-300",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <div className="bg-white border border-stone-100 shadow-[var(--shadow-card)] py-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-xs font-sans font-medium tracking-wider uppercase text-charcoal hover:text-[var(--color-gold)] hover:bg-stone-50 transition-colors duration-200"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textClass = scrolled ? "text-charcoal" : "text-white";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-sm py-4"
            : "bg-transparent py-6"
        )}
        style={scrolled ? { boxShadow: "var(--shadow-nav)" } : undefined}
      >
        <div className="container-site flex items-center justify-between">

          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LEFT.map((item) => (
              <DropdownItem key={item.href} item={item} scrolled={scrolled} />
            ))}
          </nav>

          {/* Center wordmark — fades in on scroll */}
          <Link
            href="/"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 font-serif tracking-[0.2em] text-sm uppercase transition-all duration-500",
              scrolled
                ? "opacity-100 text-charcoal"
                : "opacity-0 pointer-events-none"
            )}
          >
            {SITE_CONFIG.agentBrand}
          </Link>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_RIGHT.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "label-accent transition-opacity duration-300 hover:opacity-60",
                  textClass
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn("transition-opacity duration-300 hover:opacity-60", textClass)}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={cn(
              "lg:hidden ml-auto transition-opacity duration-300 hover:opacity-60",
              textClass
            )}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex flex-col transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "var(--color-charcoal)" }}
      >
        <div className="container-site flex justify-between items-center py-6">
          <span className="font-serif tracking-[0.2em] text-sm uppercase text-white">
            {SITE_CONFIG.agentBrand}
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-white hover:opacity-60 transition-opacity"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="container-site flex flex-col gap-8 mt-12">
          {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-white hover:text-[var(--color-gold)] transition-colors duration-300"
              style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="container-site mt-auto pb-10">
          <p className="text-xs font-sans tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
            {SITE_CONFIG.brokerageLicense}
          </p>
        </div>
      </div>
    </>
  );
}
