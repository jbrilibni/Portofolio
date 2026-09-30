import Image from "next/image";
import Icon from "@/components/Icon";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background decorative elements */}
      <div className="hero__bg-glow hero__bg-glow--purple" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--blue" aria-hidden="true" />
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="container hero__grid">
        {/* ── LEFT COLUMN ── */}
        <div className="hero__content">
          <div className="status-badge">
            <span />
            Available for Projects
          </div>

          <p className="hero__greeting">
            Hi, I&apos;m{" "}
            <span className="hero__greeting-name">{portfolio.name}.</span>
          </p>

          <h1 className="hero__heading">
            Building digital
            <br />
            experiences{" "}
            <span className="gradient-text">that&nbsp;matter.</span>
          </h1>

          <p className="hero__role">Junior Web Developer &amp; Creative Builder.</p>

          <p className="hero__description">{portfolio.heroDescription}</p>

          <div className="hero__actions">
            <a className="button" href="#projects" id="hero-view-projects">
              View My Projects
              <Icon name="arrow" size={18} />
            </a>
            <a
              className="button button--secondary"
              href="#contact"
              id="hero-contact"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats" aria-label="Portfolio statistics">
            {portfolio.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-visual" aria-label={`Photo of ${portfolio.name}`}>
          {/* Outer decorative ring */}
          <div className="hero-visual__ring hero-visual__ring--outer" aria-hidden="true" />
          {/* Inner orbit ring */}
          <div className="hero-visual__ring hero-visual__ring--inner" aria-hidden="true" />

          {/* Soft glow blob behind photo */}
          <div className="hero-visual__blob" aria-hidden="true" />

          {/* Portrait */}
          <div className="hero-visual__frame">
            <Image
              src="/images/profile.jpg"
              alt={portfolio.name}
              width={390}
              height={440}
              priority
              className="portrait__image"
            />
          </div>

          {/* Floating card — learning */}
          <div className="floating-card floating-card--code">
            <span className="floating-card__icon">
              <Icon name="code" />
            </span>
            <span>
              <small>Currently learning</small>
              <strong>JavaScript, React &amp; Next.js</strong>
            </span>
          </div>

          {/* Floating card — UI Ideas */}
          <div className="floating-card floating-card--ui">
            <span className="floating-card__icon floating-card__icon--blue">
              <Icon name="design" />
            </span>
            <strong>UI Ideas</strong>
          </div>

          {/* Dot pattern */}
          <div className="dot-pattern" aria-hidden="true" />

          {/* Corner accent dots */}
          <div className="hero-visual__accent-dot hero-visual__accent-dot--tl" aria-hidden="true" />
          <div className="hero-visual__accent-dot hero-visual__accent-dot--br" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
