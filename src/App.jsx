import { useEffect, useMemo, useState } from "react";
import servicesData from "../data/01_my_services.json";
import workExperienceData from "../data/02_my_work.json";
import educationData from "../data/03_my_education.json";
import mainSkillData from "../data/04_my_main_skill.json";
import toolsWorkflowData from "../data/05_my_tools_workflow.json";
import portfolioData from "../data/06_my_portfolio.json";

const HERO_IMAGE = "/images/hero-image.png";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 20);
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Navbar
        showNav={showNav}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((state) => !state)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <HeroSection />
      <ServicesSection services={servicesData} />
      <TimelineSection
        id="about"
        title={
          <>
            My <span className="accent">Work Experience</span>
          </>
        }
        intro="Journey of building scalable backend services and production-ready mobile applications, with focus on reliability, performance, and clean engineering practices."
        items={workExperienceData}
      />
      <TimelineSection
        title={
          <>
            My <span className="accent">Educational</span> Journey
          </>
        }
        intro="Academic background and certified industry programs that strengthened my technical foundation in software development, especially backend and Android engineering."
        items={educationData}
        showGpa
      />
      <SimpleTimelineSection
        title={
          <>
            Main <span className="accent">Skill</span>
          </>
        }
        intro="Core technical stack and engineering capabilities I currently use in day-to-day development for building modern web and mobile applications."
        items={mainSkillData}
      />
      <SimpleTimelineSection
        title={
          <>
            <span className="accent">Tools</span> & Current Workflow
          </>
        }
        intro="Daily toolchain and AI-augmented workflow I use to design, build, and deliver software projects efficiently across planning, development, and collaboration stages."
        items={toolsWorkflowData}
      />
      <PortfolioSection items={portfolioData} />
      <ContactSection />
      <FooterSection />
    </>
  );
}

function Navbar({ showNav, menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <div className={`navbar-wrapper ${showNav ? "show-nav" : ""}`} id="home">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
        </ul>
        <a className="nav-brand" href="#home">
          <div className="brand-logo">
            <span>R</span>
          </div>
          <span className="brand-name">RIZKI</span>
        </a>
        <ul className="nav-links">
          <li>
            <a
              href="https://docs.google.com/document/d/1wbN1skVuurra3VQwhltTP88I4aI6fFda6UKUqP1jjQQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className="mobile-menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <span>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </nav>
      <div className="mobile-menu-panel" hidden={!menuOpen}>
        <div className="mobile-row-links">
          <a href="#home" className="active" onClick={onCloseMenu}>
            Home
          </a>
          <a href="#about" onClick={onCloseMenu}>
            About
          </a>
          <a href="#services" onClick={onCloseMenu}>
            Service
          </a>
          <a href="#projects" onClick={onCloseMenu}>
            Project
          </a>
          <a href="#contact" onClick={onCloseMenu}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hello-badge">
        Hello!
        <svg
          className="hello-spark"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="21"
            y1="1"
            x2="21"
            y2="13"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="21"
            y1="29"
            x2="21"
            y2="41"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="41"
            y1="21"
            x2="29"
            y2="21"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="13"
            y1="21"
            x2="1"
            y2="21"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="36.7"
            y1="5.3"
            x2="28.2"
            y2="13.8"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="13.8"
            y1="28.2"
            x2="5.3"
            y2="36.7"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="5.3"
            y1="5.3"
            x2="13.8"
            y2="13.8"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="28.2"
            y1="28.2"
            x2="36.7"
            y2="36.7"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h1 className="hero-heading">
        I&apos;m <span className="name">Rizki</span>,<br />
        Frontend Developer
      </h1>
      <svg
        className="left-spark"
        width="75"
        height="65"
        viewBox="0 0 75 65"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M65 8 Q48 28 18 54"
          stroke="#f97316"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M48 3 Q32 24 8 52"
          stroke="#f97316"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M72 26 Q56 40 32 60"
          stroke="#f97316"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="testimonial">
        <div className="quote-mark">"</div>
        <p>
          Rizki&apos;s exceptional frontend development ensure our
          website&apos;s success. Highly Recommended
        </p>
      </div>
      <div className="experience">
        <div className="stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={`star-${index}`} viewBox="0 0 24 24" fill="#f97316">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
            </svg>
          ))}
        </div>
        <div className="exp-years">2 Years</div>
        <div className="exp-label">Experience</div>
      </div>
      <div className="hero-figure">
        <div className="orange-blob" />
        <div className="avatar-oval-clip">
          <img
            src={HERO_IMAGE}
            alt="Rizki - Frontend Developer"
            className="avatar-photo"
            width="500"
            height="700"
          />
        </div>
        <img
          src={HERO_IMAGE}
          alt=""
          className="avatar-head"
          width="500"
          height="700"
          aria-hidden="true"
        />
        <div className="cta-bar">
          <a className="btn-portfolio" href="#projects">
            Portfolio ↗
          </a>
          <a
            className="btn-hire"
            href="http://wa.me/6285749463854"
            target="_blank"
            rel="noreferrer"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }) {
  const [page, setPage] = useState(0);
  const perView = useMemo(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }, []);
  const totalPages = Math.max(1, Math.ceil(services.length / perView));
  const visibleItems = services.slice(page * perView, page * perView + perView);

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-head">
          <h2 className="services-title">
            My <span className="accent">Services</span>
          </h2>
          <p className="services-desc">
            I provide product-focused development services from concept to
            execution, helping turn ideas into scalable digital experiences with
            clean, maintainable implementation.
          </p>
        </div>
        <div className="services-slider">
          <div className="services-cards">
            {visibleItems.map((service) => (
              <article className="service-card" key={service.index}>
                <h3 className="service-card-title">{service.title}</h3>
                <div className="service-thumb-wrap">
                  <img
                    className="service-thumb"
                    src={service.image}
                    alt={`${service.title} service preview`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="services-dots" aria-label="Services slider navigation">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              className={`services-dot ${idx === page ? "active" : ""}`}
              onClick={() => setPage(idx)}
              aria-label={`Go to services slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ id, title, intro, items, showGpa = false }) {
  return (
    <section className="work-experience" id={id}>
      <h2 className="work-title">{title}</h2>
      <p className="work-intro">{intro}</p>
      <div className="work-timeline">
        {items.map((item, idx) => (
          <div className="work-item" key={`${item.company_name}-${idx}`}>
            <div className="work-left">
              <h3 className="work-company">
                {item.company_name || item.institution_name}
              </h3>
              <p className="work-period">{item.periode}</p>
              <div className="work-meta">
                <span className="work-badge">
                  <strong>Status:</strong> {item.status}
                </span>
                <span className="work-badge">
                  <strong>Location:</strong> {item.location}
                </span>
                {showGpa && item.gpa ? (
                  <span className="work-badge">
                    <strong>GPA:</strong> {item.gpa}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="work-marker" aria-hidden="true">
              <span className="time-dot" />
            </div>
            <div className="work-right">
              <h3 className="work-role">{item.role}</h3>
              <p className="work-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SimpleTimelineSection({ title, intro, items }) {
  return (
    <section className="work-experience workflow-section">
      <h2 className="work-title">{title}</h2>
      <p className="work-intro">{intro}</p>
      <div className="work-timeline">
        {items.map((item) => (
          <div className="work-item" key={item.label}>
            <div className="work-left">
              <h3 className="workflow-label">{item.label}</h3>
            </div>
            <div className="work-marker" aria-hidden="true">
              <span className="time-dot" />
            </div>
            <div className="work-right">
              <p className="workflow-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection({ items }) {
  return (
    <section className="portfolio-section" id="projects">
      <h2 className="portfolio-title">
        Lets have a look at my <span className="accent">Portfolio</span>
      </h2>
      <div className="portfolio-list">
        {items.map((item) => (
          <article className="portfolio-card" key={item.index}>
            <img src={item.image} alt={`${item.title} preview`} />
            <h3 className="portfolio-name">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-cta-section" id="contact">
      <h2 className="contact-cta-title">
        Have an Awsome Project
        <br />
        Idea? <span className="accent">Let&apos;s Discuss</span>
      </h2>
      <form
        className="contact-cta-form"
        action="https://mail.google.com/mail/"
        method="get"
        target="_blank"
      >
        <input type="hidden" name="view" value="cm" />
        <input type="hidden" name="fs" value="1" />
        <input type="hidden" name="to" value="rizkijanuar.work@gmail.com" />
        <input
          className="contact-input"
          type="email"
          name="body"
          placeholder="Enter Email Address"
          aria-label="Enter Email Address"
        />
        <button className="contact-send" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <h2 className="footer-title">Lets Connect there</h2>
          <a
            className="footer-hire"
            href="http://wa.me/6285749463854"
            target="_blank"
            rel="noreferrer"
          >
            Hire me ↗
          </a>
        </div>
        <div className="footer-main">
          <div>
            <div className="footer-brand">
              <span className="footer-logo">R</span>
              <span className="footer-brand-name">RIZKI</span>
            </div>
            <p className="footer-about">
              I help teams design and build digital products with a practical,
              scalable, and user-focused engineering approach.
            </p>
            <div className="footer-socials">
              <a
                className="footer-social"
                href="https://www.linkedin.com/in/rzkjanuarr/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                className="footer-social"
                href="http://wa.me/6285749463854"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                wa
              </a>
              <a
                className="footer-social"
                href="https://github.com/rizkijanuarr"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                gh
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <a className="footer-link" href="#home">
              Home
            </a>
            <a className="footer-link" href="#about">
              About Us
            </a>
            <a className="footer-link" href="#services">
              Service
            </a>
            <a
              className="footer-link"
              href="https://docs.google.com/document/d/1wbN1skVuurra3VQwhltTP88I4aI6fFda6UKUqP1jjQQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a className="footer-link" href="#projects">
              Project
            </a>
          </div>

          <div>
            <h3 className="footer-col-title">Contact</h3>
            <a className="footer-contact" href="tel:+6285749463854">
              +62 857 4946 3854
            </a>
            <a
              className="footer-contact"
              href="mailto:rizkijanuar.work@gmail.com"
            >
              rizkijanuar.work@gmail.com
            </a>
            <a
              className="footer-contact"
              href="https://www.rzkjanuarr.com"
              target="_blank"
              rel="noreferrer"
            >
              www.rzkjanuarr.com
            </a>
          </div>

          <div>
            <h3 className="footer-news-title">Get the latest information</h3>
            <form
              className="footer-news-form"
              action="https://mail.google.com/mail/"
              method="get"
              target="_blank"
            >
              <input type="hidden" name="view" value="cm" />
              <input type="hidden" name="fs" value="1" />
              <input
                type="hidden"
                name="to"
                value="rizkijanuar.work@gmail.com"
              />
              <input
                className="footer-news-input"
                type="email"
                name="body"
                placeholder="Email Address"
                aria-label="Email Address"
              />
              <button className="footer-news-btn" type="submit">
                ➤
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright© 2026 Rizki. All Rights Reserved.</span>
          <span className="footer-policies">
            <a className="footer-contact" href="#">
              User Terms & Conditions
            </a>
            <span>|</span>
            <a className="footer-contact" href="#">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default App;
