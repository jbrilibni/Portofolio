"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/Icon";
import { portfolio } from "@/data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label={`${portfolio.name}, home`}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="brand__logo"
            width={36}
            height={36}
          />
          <span>{portfolio.name}</span>
        </a>

        <button
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className={`menu-button${menuOpen ? " menu-button--open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav-links${menuOpen ? " nav-links--open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {portfolio.navigation.map((item) => (
            <a href={item.href} key={item.label} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--small"
            href="#contact"
            onClick={closeMenu}
          >
            Let&apos;s Talk
            <Icon name="arrow" size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
