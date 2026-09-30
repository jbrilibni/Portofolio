import Icon from "@/components/Icon";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__decoration contact__decoration--one" />
          <div className="contact__decoration contact__decoration--two" />

          <div className="contact__content">
            <span className="eyebrow eyebrow--light">GET IN TOUCH</span>
            <h2>Have an idea? Let&apos;s turn it into something real.</h2>
            <p>
              I&apos;m always happy to talk about new projects, creative ideas, or
              opportunities to learn and contribute.
            </p>
            <div className="contact__actions">
              <a
                className="button button--light"
                href={`mailto:${portfolio.email}`}
              >
                <Icon name="mail" size={18} />
                Email Me
              </a>
              <a
                className="button button--ghost"
                href={portfolio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={18} />
                Instagram
              </a>
            </div>
          </div>

          <div className="contact__aside">
            <span>Find me online</span>
            <div>
              <a
                href={portfolio.socials.github}
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
              </a>
              <a
                href={portfolio.socials.instagram}
                aria-label="Instagram profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" />
              </a>
              <a
                href={`mailto:${portfolio.email}`}
                aria-label="Send an email"
              >
                <Icon name="mail" />
              </a>
            </div>
            <p>
              <a href={`mailto:${portfolio.email}`} className="contact__link">
                {portfolio.email}
              </a>
            </p>
            <p className="contact__handle">
              <a
                href={portfolio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                {portfolio.socials.instagramHandle}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
