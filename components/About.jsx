import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about-visual">
          <div className="about-visual__card">
            <div className="about-visual__top">
              <span className="mini-logo">{portfolio.initials}</span>
              <span className="mini-status">Open to learn</span>
            </div>
            <div className="about-visual__content">
              <span className="about-visual__label">MY APPROACH</span>
              <h3>Learn. Build.<br />Improve.</h3>
              <p>Turning curiosity into thoughtful digital experiences.</p>
            </div>
            <div className="about-visual__footer">
              <span>
                <Icon name="location" size={16} /> {portfolio.location}
              </span>
              <span className="about-visual__spark">✦</span>
            </div>
          </div>
          <div className="about-visual__shape" />
        </div>

        <div className="about__content">
          <SectionTitle
            eyebrow="ABOUT ME"
            title="Curious by nature, creative by choice."
          />
          <p>{portfolio.about}</p>
          {portfolio.aboutDetail && <p>{portfolio.aboutDetail}</p>}
          <dl className="info-grid">
            {portfolio.personalInfo.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <a className="text-link" href="#contact">
            Let&apos;s build something together
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
