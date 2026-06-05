import "./App.css";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPostman,
  SiVite,
} from "react-icons/si";

function App() {
  const projects = [
    {
      title: "SL Wide Tours Website",
      stack: "HTML • CSS • Responsive Design",
      desc: "Business profile website for the owner of SL Wide Tours Pvt Ltd.",
      github: "https://github.com/buddhika2003/SL-wide-tours",
      live: "https://buddhika2003.github.io/SL-wide-tours/",
    },
    {
      title: "Student Expense Tracker",
      stack: "React • Node • Express • MongoDB • JWT",
      desc: "A MERN app for students to track expenses, budgets, monthly totals and search records.",
      github: "https://github.com/Buddhika2003/Student-Expense-Tracker",
      live: "",
    },
  ];

  const skills = [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "Database",
      level: "Advanced",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      category: "Backend",
      level: "Advanced",
    },
    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      category: "Backend",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      category: "Programming",
      level: "Advanced",
    },
    {
      name: "Java",
      icon: <FaJava />,
      category: "Programming",
      level: "Intermediate",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      category: "Frontend",
      level: "Advanced",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      category: "API Testing",
      level: "Advanced",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      category: "Build Tool",
      level: "Intermediate",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Responsive Websites",
      desc: "Clean websites that work smoothly on mobile, tablet and desktop screens.",
    },
    {
      number: "02",
      title: "MERN Web Apps",
      desc: "Full stack applications using MongoDB, Express, React and Node.js.",
    },
    {
      number: "03",
      title: "REST APIs",
      desc: "Backend APIs for login, CRUD operations, dashboards and data handling.",
    },
    {
      number: "04",
      title: "Admin Dashboards",
      desc: "Modern dashboards to manage users, projects, events and reports.",
    },
    {
      number: "05",
      title: "Portfolio Websites",
      desc: "Professional portfolio websites for developers, students and brands.",
    },
    {
      number: "06",
      title: "Client Business Pages",
      desc: "Landing pages for small businesses, tour agencies and service brands.",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">Buddhika.dev</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <div className="terminal">
            <p>
              <span>$</span> npm start portfolio
            </p>
            <p>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span> initializing buddhika.dev
            </p>
            <p>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span> Status: Open for Opportunities
            </p>
          </div>

          <p className="tag">BSc IT Undergraduate • Web Developer</p>

          <h1>
            Hi, I'm <span>Buddhika Rathnayake</span>
          </h1>

          <h3>
            I build modern web apps, APIs, dashboards and creative digital
            products.
          </h3>

          <p className="hero-desc">
            My main stack is MERN, but I also work with Java, C, PHP, REST APIs,
            databases, UI design, GitHub and deployment.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/buddhika2003"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="orbit-card">
            <div className="orbit-wrapper">
              <div className="profile-image">
                <img src="/profile.jpg" alt="Buddhika" />
              </div>

              <div className="orbit">
                <div className="tech mongo">
                  <SiMongodb />
                </div>
                <div className="tech express">
                  <SiExpress />
                </div>
                <div className="tech react">
                  <FaReact />
                </div>
                <div className="tech node">
                  <FaNodeJs />
                </div>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div>
              <h2>10+</h2>
              <p>Technologies</p>
            </div>
            <div>
              <h2>4+</h2>
              <p>Projects</p>
            </div>
            <div>
              <h2>100%</h2>
              <p>Responsive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I am an IT undergraduate interested in full stack web development. I
          enjoy creating clean user interfaces, secure backend APIs and
          practical systems that solve real problems.
        </p>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">Skills Matrix</h2>
        <p className="section-subtitle">
          Technologies and tools I use to design, build and test web
          applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p className="skill-category">{skill.category}</p>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real projects that show my frontend, backend and deployment skills.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <small>{project.stack}</small>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="section-title">What I Can Build</h2>
        <p className="section-subtitle">
          Practical digital solutions for students, businesses and personal
          brands.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Let's Build Something</h2>
        <p>
          Have a project, idea or collaboration? Contact me and let's make it
          real.
        </p>

        <a href="mailto:buddhikerathnayake19@gmail.com" className="btn primary">
          Email Me
        </a>
      </section>

      <footer>
        <p>© Buddhika Rathnayake | Web Developer</p>
      </footer>
    </div>
  );
}

export default App;