import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Globe,
  Mail,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Type,
} from 'lucide-react'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    items: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MySQL', 'SQL Server', 'Azure Database', 'MongoDB'],
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['JavaScript', 'Python', 'C#'],
  },
  {
    title: 'Tools & Technologies',
    icon: TerminalSquare,
    items: ['Git', 'GitHub', 'Postman', 'Docker', 'Vercel'],
  },
  {
    title: 'AI / Data',
    icon: BrainCircuit,
    items: ['Machine Learning', 'AI APIs', 'RAG', 'Prompt Engineering'],
  },
]

const projects = [
  {
    id: 'bookboy',
    title: 'BookBoy — E-commerce Platform',
    category: 'Full-Stack Web App',
    description:
      'A full-stack e-commerce web application for browsing and purchasing books, designed to make online book shopping simple and engaging.',
    problem:
      'The goal was to create a practical marketplace experience where users can browse titles, view product details, and complete purchases with a clean shopping flow.',
    goal:
      'Build a polished book store interface backed by a functional API layer, with a focus on usability, product discovery, and an easy onboarding path for future expansion.',
    solution:
      'I structured the app around a customer-first experience, combining product listing, search, and checkout-focused UI patterns with backend endpoints for managing catalog and order-related data.',
    features: [
      'Responsive storefront and product listing pages',
      'Book detail views with pricing and category filtering',
      'Cart and checkout experience for product flow',
      'API-driven data handling for catalog and orders',
    ],
    architecture: [
      'Frontend: React application with reusable UI sections',
      'Backend: Express.js endpoints for catalog and order logic',
      'Data: Azure Database to store product and transactional data',
      'Deployment: Vercel-friendly frontend and lightweight backend setup',
    ],
    technologies: ['React', 'Express.js', 'Azure Database', 'REST API'],
    challenges: [
      'Designing an app structure that could scale from a prototype into a fuller e-commerce workflow.',
      'Balancing clean storefront UX with enough backend logic to feel realistic and functional.',
    ],
    learnings: [
      'How frontend structure and API design work together in a real product.',
      'The importance of keeping business logic organized so the app stays maintainable as features grow.',
    ],
    future: [
      'Add authentication and user accounts',
      'Introduce reviews, wishlist support, and promotional pricing',
      'Expand the admin dashboard for catalog management',
    ],
    preview: 'bookboy',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 'event-organizer',
    title: 'Event Organizer Platform',
    category: 'Web Platform',
    description:
      'A web platform designed to help customers explore event equipment and instantly estimate costs based on configurable dimensions and quantities.',
    problem:
      'Customers often need a fast way to understand available event setup options and estimate the cost of renting equipment without contacting a provider manually.',
    goal:
      'Create a practical quoting experience that helps users browse inventory, configure quantities, and understand pricing clearly.',
    solution:
      'I built an interactive platform where product cards, quantity controls, and estimate logic work together so users can evaluate costs in real time.',
    features: [
      'Explore equipment categories and item details',
      'Dynamic quantity and dimension-based cost estimation',
      'Clean product comparisons for different event needs',
      'Simple and responsive interface for mobile and desktop',
    ],
    architecture: [
      'Frontend: React interface with reusable cards and form logic',
      'Logic: JavaScript-powered cost estimation workflows',
      'Backend: Node.js endpoints for structured order-related operations',
      'Deployment: Lightweight hosting for iterative improvements',
    ],
    technologies: ['React', 'JavaScript', 'Node.js'],
    challenges: [
      'Making a cost calculation feature accurate and intuitive without adding unnecessary complexity.',
      'Keeping the interface understandable while still supporting custom dimensions and quantities.',
    ],
    learnings: [
      'How real-world business logic can be translated into UI behavior that feels helpful and reliable.',
      'The value of designing systems that are easy to adjust when requirements evolve.',
    ],
    future: [
      'Add user accounts and saved quotations',
      'Integrate booking workflow and admin inventory management',
      'Improve pricing logic with tax and service-fee handling',
    ],
    preview: 'event',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    id: 'ai-project',
    title: 'AI / Machine Learning Project',
    category: 'Data-Driven Experiment',
    description:
      'An experimental machine learning project focused on solving a real-world problem using data-driven prediction or recommendation.',
    problem:
      'Many everyday decisions benefit from a more informed recommendation system, but building that kind of insight from raw data requires thoughtful modeling and evaluation.',
    goal:
      'Explore how machine learning can support a practical problem by transforming data into a useful prediction or recommendation workflow.',
    solution:
      'I worked through the full practical pipeline: data preparation, model experimentation, evaluation, and a simple interface to demonstrate the results clearly.',
    features: [
      'Data collection and preprocessing workflow',
      'Machine learning model experimentation with comparison',
      'Prediction or recommendation output for end users',
      'Clear documentation of assumptions and evaluation choices',
    ],
    architecture: [
      'Data processing: Python scripts for cleaning and feature preparation',
      'Modeling: Machine learning experimentation and evaluation pipeline',
      'Output: Simple interface or notebook-driven results presentation',
      'Learning: Iterative improvement based on model performance',
    ],
    technologies: ['Python', 'Machine Learning'],
    challenges: [
      'Selecting a problem that is realistic enough to matter but still manageable for a student project.',
      'Understanding how model quality depends on data quality and evaluation strategy.',
    ],
    learnings: [
      'How data problems, feature choices, and evaluation all shape model outcomes.',
      'The importance of being able to explain and refine decisions when an experiment is not working as expected.',
    ],
    future: [
      'Improve model performance with richer features and tuning',
      'Add a small web dashboard for user-facing results',
      'Explore AI APIs and RAG-based workflows for real-world use cases',
    ],
    preview: 'ai',
    links: {
      github: '#',
      demo: '#',
    },
  },
]

const journey = [
  {
    year: '2023',
    title: 'Started exploring programming and Computer Science',
    text:
      'Focused on learning core programming concepts, problem-solving, and how software systems are built from the ground up.',
  },
  {
    year: '2024',
    title: 'Improved programming fundamentals',
    text:
      'Strengthened my understanding of logic, data structures, web development basics, and practical coding habits through hands-on projects.',
  },
  {
    year: '2025',
    title: 'Started building full-stack web projects',
    text:
      'Moved from theory into creating useful applications, learning how frontend, backend, and database layers connect in real projects.',
  },
  {
    year: '2026',
    title: 'Exploring AI, Machine Learning, and real-world software work',
    text:
      'Currently expanding into AI-driven ideas, backend design, deployment workflows, and software engineering practices useful for internships and future roles.',
  },
]

const learningCards = [
  {
    title: 'TypeScript',
    description: 'Improving type safety and writing more maintainable frontend and backend code.',
    icon: Type,
  },
  {
    title: 'React',
    description: 'Deepening my component architecture, state management, and UI polish skills.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Backend Architecture',
    description: 'Learning how to design APIs, organize services, and think about scalability.',
    icon: ServerCog,
  },
  {
    title: 'Database Design',
    description: 'Exploring data modeling, queries, and how structure affects application performance.',
    icon: Database,
  },
  {
    title: 'Machine Learning',
    description: 'Studying how models learn from data and where ML makes sense in real-world products.',
    icon: BrainCircuit,
  },
  {
    title: 'AI / RAG',
    description: 'Investigating AI workflows, prompting strategies, and retrieval-based systems.',
    icon: Sparkles,
  },
  {
    title: 'Docker',
    description: 'Building familiarity with containerization and consistent development environments.',
    icon: TerminalSquare,
  },
  {
    title: 'Cloud Deployment',
    description: 'Learning how to ship projects cleanly and make them accessible to real users.',
    icon: Cloud,
  },
]

const links = {
  github: 'https://github.com/chobul',
  linkedin: 'https://www.linkedin.com/',
  email: 'mailto:chonlakornbualuang@gmail.com',
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[id]')]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-10% 0px -50% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Go to home">
            <span className="brand-mark">CB</span>
            <span className="brand-text">Chonlakorn Bualuang</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s Connect
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-row">
                <span className="status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  Currently learning &amp; building
                </span>
              </div>

              <h1>
                Hi, I&apos;m <span className="highlight">Chonlakorn Bualuang</span>.
                <span className="line-break">Computer Science Student</span>
                <span className="line-break block">Building Things With Code.</span>
              </h1>

              <p className="hero-text">
                I&apos;m a Computer Science student passionate about software
                development, web technologies, and AI. I enjoy turning ideas
                into practical projects while continuously improving my
                problem-solving and programming skills.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  View My Projects
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="secondary-button">
                  Let&apos;s Connect
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span className="meta-label">Focus</span>
                  <strong>Software Development</strong>
                </div>
                <div>
                  <span className="meta-label">Interests</span>
                  <strong>Web, AI, Backend</strong>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Developer workspace preview">
              <div className="code-window">
                <div className="window-bar">
                  <div className="traffic-lights">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="window-title">portfolio.tsx</span>
                </div>

                <div className="code-content">
                  <div className="code-line">
                    <span className="token-keyword">const</span>{' '}
                    <span className="token-variable">student</span> = {'{'}
                  </div>
                  <div className="code-line nested">
                    name: <span className="token-string">&apos;Chonlakorn Bualuang&apos;</span>,
                  </div>
                  <div className="code-line nested">
                    major: <span className="token-string">&apos;Computer Science&apos;</span>,
                  </div>
                  <div className="code-line nested">
                    passions: <span className="token-string">[&apos;Web Dev&apos;, &apos;AI&apos;, &apos;Software&apos;]</span>,
                  </div>
                  <div className="code-line">{'}'}</div>
                  <div className="code-line">
                    <span className="token-keyword">const</span>{' '}
                    <span className="token-variable">buildNext</span> = () =&gt;{' '}
                    <span className="token-string">&apos;Ship meaningful projects&apos;</span>
                  </div>
                </div>

                <div className="mini-panels">
                  <div className="mini-panel">
                    <span className="mini-label">Learning</span>
                    <strong>React • Node.js • AI</strong>
                  </div>
                  <div className="mini-panel accent-panel">
                    <span className="mini-label">Current focus</span>
                    <strong>Full-stack + ML</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="section-tag">About Me</span>
              <h2>Computer Science student with a builder mindset.</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I&apos;m a Computer Science student interested in software
                  development and emerging technologies. My journey started with
                  learning programming fundamentals and gradually evolved into
                  building practical projects.
                </p>
                <p>
                  I believe in learning by building. Instead of only studying
                  theory, I challenge myself to create projects, understand how
                  systems work, and continuously improve my skills. That mindset
                  has helped me move from writing small programs to exploring
                  larger, full-stack solutions and AI-driven ideas.
                </p>
              </div>

              <aside className="info-card">
                <div className="info-card-header">Currently</div>
                <ul className="info-list">
                  <li>
                    <span className="list-label">Studying</span>
                    <span>Computer Science</span>
                  </li>
                  <li>
                    <span className="list-label">Focus</span>
                    <span>Software Development</span>
                  </li>
                  <li>
                    <span className="list-label">Interests</span>
                    <span>Web Development, AI, Backend Development</span>
                  </li>
                  <li>
                    <span className="list-label">Learning</span>
                    <span>React, Node.js, TypeScript, SQL, AI/ML</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container">
            <div className="section-heading center">
              <span className="section-tag">Skills</span>
              <h2>Tools and technologies I&apos;m building with.</h2>
            </div>

            <div className="skill-grid">
              {skillGroups.map(({ title, icon: Icon, items }) => (
                <div key={title} className="skill-group">
                  <div className="group-header">
                    <Icon size={18} />
                    <h3>{title}</h3>
                  </div>
                  <div className="tag-list">
                    {items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">Featured Projects</span>
              <h2>Projects that reflect how I think, build, and learn.</h2>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className={`project-preview preview-${project.preview}`}>
                    <div className="preview-content">
                      <span className="preview-category">{project.category}</span>
                      <div className="preview-shapes">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-header-row">
                      <h3>{project.title}</h3>
                    </div>

                    <p>{project.description}</p>

                    <div className="project-detail-block">
                      <span className="detail-label">Problem</span>
                      <p>{project.problem}</p>
                    </div>

                    <div className="project-tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.links.github} className="ghost-button">
                        GitHub
                        <GitBranch size={16} />
                      </a>
                      <a href={project.links.demo} className="ghost-button">
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                      <button
                        type="button"
                        className="text-button"
                        onClick={() => setSelectedProject(project)}
                      >
                        Case Study
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="section alt-section">
          <div className="container">
            <div className="section-heading center">
              <span className="section-tag">Learning Journey</span>
              <h2>How my development path has grown over time.</h2>
            </div>

            <div className="timeline">
              {journey.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">Currently Exploring</span>
              <h2>What I&apos;m learning right now.</h2>
            </div>

            <div className="learning-grid">
              {learningCards.map(({ title, description, icon: Icon }) => (
                <div key={title} className="learning-card">
                  <div className="learning-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">GitHub / Developer Activity</span>
              <h2>A snapshot of my current developer interests.</h2>
            </div>

            <div className="activity-grid">
              <div className="activity-panel activity-main">
                <div className="activity-panel-header">
                  <div>
                    <span className="mini-label">Profile</span>
                    <h3>https://github.com/chobul</h3>
                  </div>
                  <a href={links.github} className="inline-link" target="_blank" rel="noreferrer">
                    View GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="placeholder-graph" aria-label="GitHub contribution placeholder">
                  {Array.from({ length: 35 }).map((_, index) => (
                    <span key={index} className={`graph-cell level-${(index % 5) + 1}`} />
                  ))}
                </div>
              </div>

              <div className="activity-panel">
                <span className="mini-label">Recent projects</span>
                <ul className="activity-list">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <span className="bullet" aria-hidden="true" />
                      <span>{project.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="activity-panel">
                <span className="mini-label">Technology interests</span>
                <div className="tag-list compact">
                  {['React', 'Node.js', 'TypeScript', 'AI APIs', 'SQL', 'Docker'].map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <span className="section-tag">Contact</span>
              <h2>Let&apos;s Build Something.</h2>
              <p>
                Whether it&apos;s a project, collaboration, or just a conversation
                about technology, feel free to reach out.
              </p>
            </div>

            <div className="contact-actions">
              <a href={links.github} className="primary-button" target="_blank" rel="noreferrer">
                <GitBranch size={18} />
                GitHub
              </a>
              <a href={links.linkedin} className="secondary-button" target="_blank" rel="noreferrer">
                <Globe size={18} />
                LinkedIn
              </a>
              <a href={links.email} className="secondary-button">
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>
            <span className="footer-name">Your Name</span> — Computer Science Student
          </p>
          <p>Built with React / Next.js</p>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.email}>Email</a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="case-study-overlay" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
          <div className="case-study-modal">
            <button
              type="button"
              className="close-button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study"
            >
              ×
            </button>

            <div className="case-study-header">
              <div>
                <span className="section-tag">Project Case Study</span>
                <h3 id="case-study-title">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="case-study-content">
              <section>
                <h4>Overview</h4>
                <p>{selectedProject.description}</p>
              </section>

              <section>
                <h4>Problem</h4>
                <p>{selectedProject.problem}</p>
              </section>

              <section>
                <h4>Goal</h4>
                <p>{selectedProject.goal}</p>
              </section>

              <section>
                <h4>Solution</h4>
                <p>{selectedProject.solution}</p>
              </section>

              <section>
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4>Technical Architecture</h4>
                <ul>
                  {selectedProject.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4>Technologies</h4>
                <div className="tag-list compact">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4>Challenges</h4>
                <ul>
                  {selectedProject.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4>What I Learned</h4>
                <ul>
                  {selectedProject.learnings.map((learning) => (
                    <li key={learning}>{learning}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4>Future Improvements</h4>
                <ul>
                  {selectedProject.future.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
