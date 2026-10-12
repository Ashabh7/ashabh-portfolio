import { useState } from "react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Globe,
  Layers3,
  Award,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      number: "01",
      name: "Ding!",
      category: "FOOD ORDERING PLATFORM",
      description:
        "A food-ordering and restaurant-management project built to connect the customer experience with restaurant-side workflows.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Ashabh7/ding-frontend",
      live: "",
      visual: "food",
    },
    {
      number: "02",
      name: "MERN Blog App",
      category: "FULL-STACK WEB APP",
      description:
        "A blog platform with authentication and post management. Users can create, edit, and delete their own posts while reading published content.",
      stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github:
        "https://github.com/Ashabh7/Mern_Blogs_App_Frontend",
      live: "",
      visual: "blog",
    },
    {
      number: "03",
      name: "Expense Tracker",
      category: "FINANCE TRACKING APP",
      description:
        "An expense-tracking application built to record expenses and retrieve information through a backend API.",
      stack: ["React", "Express", "MongoDB", "REST API"],
      github: "https://github.com/Ashabh7",
      live: "",
      visual: "expense",
    },
  ];

  const certifications = [
    {
      number: "01",
      title: "MERN Stack Development",
      issuer: "Avodha Institutions",
      location: "Kochi, Kerala",
      description:
        "MERN Stack training covering frontend and backend web development.",
    },
    {
      number: "02",
      title: "MERN Stack Development",
      issuer: "National Skill Development Corporation",
      location: "NSDC",
      description:
        "MERN Stack development certification.",
    },
  ];

  const skills = [
    {
      icon: Code2,
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: Layers3,
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: Database,
      title: "Database",
      items: ["MongoDB", "SQL basics"],
    },
    {
      icon: Globe,
      title: "Tools",
      items: ["Git", "GitHub", "Vercel", "Render"],
    },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      {/* NAVIGATION */}
      <header className="topbar">
        <a className="brand" href="#home">
          ASHABH<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#journey" onClick={closeMenu}>
            Education
          </a>

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">
              FULL-STACK DEVELOPER · KERALA, INDIA
            </p>

            <h1>
              Hi, I'm Ashabh.
              <br />
              <span>I build for the web.</span>
            </h1>

            <p className="hero-intro">
              I'm a developer focused on building practical,
              user-friendly web experiences with the MERN stack —
              from clean interfaces to working APIs.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>

              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <b>03</b> Featured projects
              </span>

              <span className="meta-divider" />

              <span>
                <b>MERN</b> Main stack
              </span>
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-frame">
              <img
                className="portrait-photo"
                src="/ashabh-photo.jpg"
                alt="Ashabh K P"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="portrait-placeholder">
                <span className="portrait-initials">AK</span>
                <span className="portrait-caption">ADD YOUR PHOTO</span>
              </div>

              <div className="portrait-index">01 / DEVELOPER</div>
            </div>

            <div className="floating-note">
              <span className="note-mark">✳</span>

              <div>
                <strong>Curious by nature.</strong>
                <small>Always building, always learning.</small>
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#projects">
            <span />
            SCROLL TO EXPLORE
          </a>
        </section>

        {/* PROJECTS */}
        <section
          className="projects section-wrap section-block"
          id="projects"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>

              <h2>
                Things I've <span>built.</span>
              </h2>
            </div>

            <p className="section-aside">
              A few projects where I've put my skills into practice.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div
                  className={`project-visual project-visual-${project.visual}`}
                >
                  <span className="visual-kicker">
                    PROJECT / {project.number}
                  </span>

                  <span className="visual-title">{project.name}</span>

                  <span className="visual-orbit orbit-one" />
                  <span className="visual-orbit orbit-two" />

                  <span className="visual-corner">↗</span>
                </div>

                <div className="project-content">
                  <div className="project-overline">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="link-placeholder">
                        Live demo coming soon
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code <Code2 size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          className="certifications section-wrap section-block"
          id="certifications"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROFESSIONAL DEVELOPMENT</p>

              <h2>
                My <span>certifications.</span>
              </h2>
            </div>

            <p className="section-aside">
              Credentials earned while developing my full-stack
              web development skills.
            </p>
          </div>

          <div className="certification-grid">
            {certifications.map((certificate) => (
              <article
                className="certification-card"
                key={certificate.number}
              >
                <div className="certification-top">
                  <span className="certification-icon">
                    <Award size={23} />
                  </span>

                  <span className="certification-number">
                    CERTIFICATE / {certificate.number}
                  </span>
                </div>

                <h3>{certificate.title}</h3>

                <p className="certification-issuer">
                  {certificate.issuer}
                </p>

                <p className="certification-location">
                  {certificate.location}
                </p>

                <p className="certification-description">
                  {certificate.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>

              <h2>
                Building skills.
                <br />
                <span>One project at a time.</span>
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-statement">
              <span className="quote-mark">“</span>

              <p>
                I enjoy turning ideas into useful products,
                solving problems through code, and learning
                by building things that work in the real world.
              </p>
            </div>

            <div className="about-detail">
              <p>
                I'm a Computer Science student and aspiring
                full-stack developer from Kerala. I've been
                building projects with React, Node.js, Express,
                and MongoDB, and I'm looking for an opportunity
                to grow with a development team.
              </p>

              <a className="text-link" href="#contact">
                Let's build something <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY TOOLKIT</p>

              <h2>
                Skills & <span>technologies.</span>
              </h2>
            </div>

            <p className="section-aside">
              Technologies I've used while learning and building projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={19} />
                  </span>

                  <span className="skill-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{title}</h3>

                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE AND EDUCATION */}
        <section
          className="journey section-wrap section-block"
          id="journey"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE JOURNEY SO FAR</p>

              <h2>
                Experience & <span>education.</span>
              </h2>
            </div>
          </div>

          <div className="journey-grid">
            <div className="journey-column">
              <h3 className="column-title">Experience</h3>

              <article className="timeline-item">
                <span className="timeline-dot" />

                <p className="timeline-date">PREVIOUS ROLE</p>

                <h4>Store Manager · Chickart</h4>

                <p>
                  Handled day-to-day store operations,
                  customer service, and coordination in a
                  fast-paced food-service environment.
                </p>
              </article>

              <article className="timeline-item">
                <span className="timeline-dot" />

                <p className="timeline-date">DEVELOPMENT TRAINING</p>

                <h4>MERN Stack Development · Avodha</h4>

                <p>
                  Training in frontend and backend web
                  development, supported by hands-on projects.
                </p>
              </article>
            </div>

            <div className="journey-column">
              <h3 className="column-title">Education</h3>

              <article className="timeline-item">
                <span className="timeline-dot" />

                <p className="timeline-date">IN PROGRESS</p>

                <h4>B.Sc. Computer Science</h4>

                <p>
                  MES College of Arts and Science ·
                  Kannur University
                </p>

                <span className="status-pill">4 papers remaining</span>
              </article>

              <article className="timeline-item">
                <span className="timeline-dot" />

                <p className="timeline-date">COMPLETED</p>

                <h4>Higher Secondary · Computer Science</h4>

                <p>Mambaram Higher Secondary School</p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact section-wrap section-block"
          id="contact"
        >
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">
                HAVE A ROLE OR PROJECT IN MIND?
              </p>

              <h2>
                Let's make
                <br />
                <span>something useful.</span>
              </h2>

              <p>
                I'm open to junior developer opportunities,
                internships, and collaborations.
              </p>

              <a
                className="button button-primary"
                href="mailto:YOUR_EMAIL@example.com"
              >
                Say hello <Mail size={16} />
              </a>
            </div>

            <div className="contact-links">
              <a href="mailto:YOUR_EMAIL@example.com">
                <span>Email</span>
                <strong>YOUR_EMAIL@example.com</strong>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://github.com/Ashabh7"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>github.com/Ashabh7</strong>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>Add your LinkedIn profile</strong>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          ASHABH<span>.</span>
        </a>

        <p>Designed & built with care.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;