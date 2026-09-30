import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionTitle
          centered
          eyebrow="MY SKILLS"
          title="Tools I use to bring ideas to life."
          copy="A growing toolkit for building clean interfaces, responsive layouts, and engaging web experiences."
        />
        <div className="skills__grid">
          {portfolio.skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={24} />
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="skill-card__tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
