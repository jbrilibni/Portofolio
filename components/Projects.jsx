"use client";

import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const projectImages = selectedProject
    ? selectedProject.images || selectedProject.screenshots || []
    : [];
  const totalSlides = projectImages.length;

  const handlePrev = useCallback(() => {
    if (totalSlides <= 1) return;
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    if (totalSlides <= 1) return;
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveSlide(0);
  };

  // Keyboard navigation (Escape to close, ArrowLeft / ArrowRight to slide)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handlePrev, handleNext]);

  // Touch swipe handling for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__heading">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Projects built with purpose."
            copy="A few things I have designed and developed while learning, experimenting, and solving real problems."
          />
          <a
            className="text-link"
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
            <Icon name="external" size={17} />
          </a>
        </div>

        <div className="projects__grid">
          {portfolio.projects.map((project, index) => (
            <article
              className={`project-card project-card--${index + 1}`}
              key={project.title}
            >
              <div
                className={`project-card__visual${
                  project.coverImage ? " project-card__visual--cover" : ""
                }`}
              >
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={`${project.title} Cover`}
                    className="project-card__cover-img"
                  />
                ) : (
                  <div className="browser">
                    <div className="browser__bar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="browser__content">
                      <span className="browser__eyebrow">
                        {project.mockup?.eyebrow}
                      </span>
                      <strong>{project.mockup?.title}</strong>
                      <span className="browser__line" />
                      <span className="browser__line browser__line--short" />
                      <span className="browser__button" />
                    </div>
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <div className="project-card__number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.demoUrl ? (
                    <a
                      className="project-card__btn project-card__btn--primary"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <Icon name="external" size={15} />
                    </a>
                  ) : (
                    <button
                      className="project-card__btn project-card__btn--primary"
                      onClick={() => openModal(project)}
                      type="button"
                    >
                      View Details
                      <Icon name="arrow" size={15} />
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      className="project-card__btn project-card__btn--secondary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Icon name="github" size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal with Screenshot Gallery */}
      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="project-modal__backdrop"
            onClick={closeModal}
          />
          <div className="project-modal__content">
            <button
              className="project-modal__close"
              onClick={closeModal}
              type="button"
              aria-label="Close project details"
            >
              &times;
            </button>

            <div className="project-modal__header">
              <span className="eyebrow">
                {selectedProject.mockup?.eyebrow || "PROJECT DETAILS"}
              </span>
              <h3 id="modal-title">{selectedProject.title}</h3>
            </div>

            {/* Screenshot Carousel */}
            {totalSlides > 0 ? (
              <div
                className="carousel"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="carousel__viewport">
                  {projectImages.map((src, idx) => (
                    <div
                      key={src}
                      className={`carousel__slide${
                        idx === activeSlide ? " carousel__slide--active" : ""
                      }`}
                      aria-hidden={idx !== activeSlide}
                    >
                      <img
                        src={src}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        className="carousel__image"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.parentElement?.querySelector(
                            ".carousel__fallback"
                          );
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className="carousel__fallback" style={{ display: "none" }}>
                        <div className="browser">
                          <div className="browser__bar">
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="browser__content">
                            <span className="browser__eyebrow">
                              {selectedProject.mockup?.eyebrow || "PREVIEW"} — SCREENSHOT {idx + 1}
                            </span>
                            <strong>{selectedProject.title}</strong>
                            <span className="browser__line" />
                            <span className="browser__line browser__line--short" />
                            <span className="browser__button" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {totalSlides > 1 && (
                    <>
                      <button
                        className="carousel__nav-btn carousel__nav-btn--prev"
                        onClick={handlePrev}
                        type="button"
                        aria-label="Previous screenshot"
                      >
                        <Icon name="chevronLeft" size={20} />
                      </button>
                      <button
                        className="carousel__nav-btn carousel__nav-btn--next"
                        onClick={handleNext}
                        type="button"
                        aria-label="Next screenshot"
                      >
                        <Icon name="chevronRight" size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Carousel Controls & Indicator */}
                <div className="carousel__indicator">
                  <span className="carousel__counter">
                    {activeSlide + 1} / {totalSlides}
                  </span>
                  {totalSlides > 1 && (
                    <div className="carousel__dots">
                      {projectImages.map((_, idx) => (
                        <button
                          key={idx}
                          className={`carousel__dot${
                            idx === activeSlide ? " carousel__dot--active" : ""
                          }`}
                          onClick={() => setActiveSlide(idx)}
                          type="button"
                          aria-label={`Go to screenshot ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="project-modal__preview">
                <div className="browser">
                  <div className="browser__bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="browser__content">
                    <span className="browser__eyebrow">
                      {selectedProject.mockup?.eyebrow || "PREVIEW"}
                    </span>
                    <strong>{selectedProject.mockup?.title || selectedProject.title}</strong>
                    <span className="browser__line" />
                    <span className="browser__line browser__line--short" />
                    <span className="browser__button" />
                  </div>
                </div>
              </div>
            )}

            <div className="project-modal__info">
              <h4>About Project</h4>
              <p>{selectedProject.description}</p>

              <h4>Technologies Used</h4>
              <div className="project-card__tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-modal__actions">
                {selectedProject.githubUrl && (
                  <a
                    className="button button--small"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" size={17} />
                    View on GitHub
                  </a>
                )}
                <button
                  className="button button--small button--secondary"
                  onClick={closeModal}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
