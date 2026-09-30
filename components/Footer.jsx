import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a
          className="brand"
          href="#top"
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
        <p className="footer__copyright">
          &copy; 2026 {portfolio.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
