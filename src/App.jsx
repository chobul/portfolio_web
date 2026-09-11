import { createElement, useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Globe,
  Mail,
  MonitorSmartphone,
  Phone,
  Rocket,
  ServerCog,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import studentProfile from './assets/studentpfp.gif'
import resumePdf from './assets/resume.pdf'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    items: ['ExpressJS', 'REST API', 'MVC'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MySQL', 'SQL Server', 'MongoDB', 'Azure SQL'],
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'C#'],
  },
  {
    title: 'Tools & Technologies',
    icon: TerminalSquare,
    items: ['GitHub', 'Postman', 'Trello', 'ClickUp', 'Figma', 'VS Code'],
  },
  {
    title: 'Deployment',
    icon: Cloud,
    items: ['Vercel', 'Railway'],
  },
]

const projects = [
  {
    id: 'bookboy',
    title: 'BookBoy — E-Commerce Bookstore Web App',
    category: 'May - April 2025',
    description:
      'An e-commerce bookstore web app where I focused mainly on backend development and connected the backend services with the frontend experience.',
    problem:
      'The web app needed reliable backend operations while keeping data and interactions connected smoothly with the frontend.',
    goal:
      'Build a maintainable bookstore web app with a connected backend, frontend, API, and database workflow.',
    solution:
      'I developed the Express.js RESTful backend, implemented CRUD endpoints for comments, integrated MySQL, and connected the backend API with the frontend.',
    role: 'Backend Developer / Frontend Integration',
    proof: 'Web App / REST API / MySQL / Frontend Integration',
    outcome: 'A connected bookstore web app with backend-driven frontend features.',
    features: [
      'RESTful APIs for backend operations',
      'CRUD endpoints for user comments associated with books',
      'MySQL database integration for books and comments',
    ],
    architecture: [
      'Frontend: React and JavaScript web interface',
      'Backend: Express.js RESTful API',
      'Data: MySQL database for books and comments',
      'Integration: Connected backend APIs with the frontend web app',
      'API: CRUD operations for user comments',
    ],
    technologies: ['React', 'JavaScript', 'Express.js', 'MySQL', 'REST API', 'CRUD'],
    challenges: [
      'Keeping API operations and database relationships organized as features expanded.',
      'Designing comment endpoints that are tied correctly to individual books.',
    ],
    learnings: [
      'How RESTful API design supports real application features.',
      'The importance of database structure and CRUD logic in a full-stack project.',
    ],
    future: [
      'Add authentication and richer book discovery features',
      'Improve comment moderation and validation',
    ],
    preview: 'bookboy',
    links: {
      github: 'https://github.com/chobul/BookBoy_Bookstore',
      demo: '#',
    },
  },
  {
    id: 'event-organizer',
    title: 'ChopShop — E-Commerce Clothing Store Platform',
    category: 'Jan - April 2026',
    description:
      'An e-commerce platform for selling clothing products online with product management and display features.',
    problem:
      'The platform needed a structured way to manage clothing products and present them clearly to customers.',
    goal:
      'Build a maintainable online store backed by Azure SQL Database.',
    solution:
      'I developed product management and product display functionality, integrated Azure SQL Database, and applied MVC architecture.',
    role: 'Full-Stack Developer',
    proof: 'E-Commerce Platform / Azure SQL / MVC',
    outcome: 'A structured clothing store platform with product workflows.',
    features: [
      'Product management functionality',
      'Product display for online customers',
      'Azure SQL Database integration',
      'Model-View-Controller architecture',
    ],
    architecture: [
      'Architecture: Model-View-Controller (MVC)',
      'Data: Azure SQL Database for storage and retrieval',
      'Core: Product management and display workflows',
    ],
    technologies: ['MVC', 'Azure SQL', 'E-Commerce'],
    challenges: [
      'Connecting product management flows with reliable database storage.',
      'Keeping the store structure organized as product features grew.',
    ],
    learnings: [
      'How MVC separates application responsibilities and improves maintainability.',
      'How database integration supports a practical e-commerce workflow.',
    ],
    future: [
      'Add authentication and checkout functionality',
      'Add categories, search, and inventory tracking',
    ],
    preview: 'event',
    links: {
      github: 'https://github.com/chobul/ChopShop',
      demo: '#',
    },
  },
  {
    id: 'news-line-chatbot',
    title: 'NewsLineChatBot — NewsArticleBot',
    category: 'Automation Workflow',
    description:
      'A LINE Bot that uses Gemini AI to analyze and summarize news articles from text and images, then automatically saves the results to Google Sheets through Make.com.',
    problem:
      'Reading and organizing news from different formats can take time, especially when summaries and analysis need to be recorded consistently.',
    goal:
      'Create an automated workflow that accepts news content through LINE, generates useful AI summaries, and stores structured results without manual data entry.',
    solution:
      'I connected LINE User input to a Make.com automation workflow that processes webhook data with Gemini AI and records the analyzed article results in Google Sheets.',
    role: 'Automation Developer',
    proof: 'LINE Bot / Make.com / Gemini AI / Google Sheets',
    outcome: 'An automated news analysis workflow with saved summaries.',
    features: [
      'Receive news article text and images through LINE',
      'Process incoming messages with Make.com webhooks',
      'Analyze and summarize articles with Gemini AI',
      'Automatically save results and article data to Google Sheets',
    ],
    architecture: [
      'Input: LINE User sends article text or an image',
      'Automation: Make.com receives and routes the webhook workflow',
      'AI: Gemini analyzes the article and creates a summary',
      'Storage: Google Sheets records the processed results automatically',
    ],
    technologies: ['LINE Bot', 'Make.com', 'Gemini AI', 'Google Sheets', 'Automation'],
    challenges: [
      'Designing one workflow that can handle both text and image-based article input.',
      'Keeping AI output structured so it can be stored consistently in Google Sheets.',
    ],
    learnings: [
      'How no-code automation can connect messaging platforms, AI services, and data storage.',
      'How webhook workflows can turn an AI prototype into a practical user-facing tool.',
    ],
    future: [
      'Add article categories, keywords, and sentiment analysis',
      'Improve error handling for unsupported images or incomplete article content',
      'Add search and dashboard views for saved article summaries',
    ],
    preview: 'news',
    links: {
      github: 'https://github.com/chobul/NewsLine_ChatBot',
      demo: '#',
    },
  },
  {
    id: 'integrated-farming',
    title: 'Integrated Farming — RAG Assistant',
    category: 'RAG Application',
    description:
      'A RAG-powered integrated farming application that helps users retrieve useful agricultural knowledge and receive context-aware answers.',
    problem:
      'Agricultural information can be spread across many documents, making it difficult for users to find reliable and relevant guidance quickly.',
    goal:
      'Build an intelligent farming assistant that can search a knowledge base and generate grounded answers from retrieved agricultural information.',
    solution:
      'I designed a Retrieval-Augmented Generation workflow that uses FAISS to retrieve relevant knowledge, FastAPI to serve the backend, and Groq with llama-3.1-8b to generate responses for a React interface.',
    role: 'RAG Application Developer',
    proof: 'FastAPI / FAISS / Groq / React',
    outcome: 'A farming assistant that answers questions from retrieved context.',
    features: [
      'Retrieve relevant farming knowledge from a vector index',
      'Generate context-aware answers with a Groq-hosted language model',
      'FastAPI backend for handling retrieval and question-answering requests',
      'React interface for interacting with the farming assistant',
    ],
    architecture: [
      'Frontend: React user interface for farming questions and answers',
      'Backend: FastAPI service for the RAG pipeline and API requests',
      'Retrieval: FAISS vector search for relevant agricultural context',
      'Generation: Groq using the llama-3.1-8b model',
      'Version control: GitHub for source code and collaboration',
    ],
    technologies: ['RAG', 'FastAPI', 'FAISS', 'Groq', 'llama-3.1-8b', 'React', 'GitHub'],
    challenges: [
      'Improving retrieval quality so generated answers stay relevant to the farming question.',
      'Connecting the retrieval pipeline and language model into a responsive web experience.',
    ],
    learnings: [
      'How Retrieval-Augmented Generation combines vector search with language models.',
      'How backend APIs, retrieval quality, and frontend UX work together in an AI application.',
    ],
    future: [
      'Add more agricultural documents and domain-specific knowledge sources',
      'Support multilingual farming questions and responses',
      'Add user feedback to improve retrieval and answer quality',
    ],
    preview: 'farming',
    links: {
      github: 'https://github.com/chobul/IntegratedFarming_Chatbot',
      demo: '#',
    },
  },
]

const learningCards = [
  {
    title: 'English',
    description: 'CEFR-B2 communication level for technical learning and collaboration.',
    icon: Globe,
  },
  {
    title: 'React',
    description: 'Building responsive interfaces and practical e-commerce experiences.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Backend Architecture',
    description: 'Applying MVC concepts and organizing backend responsibilities.',
    icon: ServerCog,
  },
  {
    title: 'Database Design',
    description: 'Working with MySQL, SQL Server, MongoDB, and Azure SQL data.',
    icon: Database,
  },
  {
    title: 'Deployment',
    description: 'Learning practical deployment workflows with Vercel and Railway.',
    icon: Rocket,
  },
  {
    title: 'Project Management',
    description: 'Organizing project work with Trello and ClickUp.',
    icon: Sparkles,
  },
  {
    title: 'Design & Collaboration',
    description: 'Using Figma to plan and communicate interface ideas.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Code Editor',
    description: 'Building projects with Visual Studio Code.',
    icon: TerminalSquare,
  },
]

const links = {
  github: 'https://github.com/chobul',
  linkedin: 'https://www.linkedin.com/in/chonlakorn-bualuang-bba1b842a/',
  email: 'mailto:chonlakornbualuang@gmail.com',
  phone: 'tel:+66985620617',
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
                <span className="hero-name">Chonlakorn Bualuang</span>
                <span className="hero-headline">Full-Stack Developer</span>
                <span className="line-break block">Building Practical Web Apps.</span>
              </h1>

              <p className="hero-text">
                A calm and open-minded Computer Science student who enjoys
                learning new technologies and developing new skills. Eager to
                gain hands-on experience, take on new challenges, and grow as
                a software developer.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  View My Projects
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="secondary-button">
                  Let&apos;s Connect
                </a>
                <a
                  href={resumePdf}
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV
                  <ExternalLink size={17} />
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span className="meta-label">Focus</span>
                  <strong>Software Development</strong>
                </div>
                <div>
                  <span className="meta-label">Interests</span>
                  <strong>AI, Automation, Web Development</strong>
                </div>
                <div>
                  <span className="meta-label">University</span>
                  <strong>Sripatum University</strong>
                </div>
                <div>
                  <span className="meta-label">Email</span>
                  <a className="email-link" href={links.email}>
                    chonlakornbualuang@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Student profile and developer workspace preview">
              <div className="profile-card">
                <img
                  className="profile-image"
                  src={studentProfile}
                  alt="Chonlakorn Bualuang in a white shirt and tie"
                />
                <div className="profile-caption">
                  <span className="mini-label">Student profile</span>
                  <strong>Computer Science · Builder</strong>
                </div>
              </div>

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
                    role: <span className="token-string">&apos;Full-Stack Developer&apos;</span>,
                  </div>
                  <div className="code-line nested">
                    stack: <span className="token-string">[&apos;React&apos;, &apos;ExpressJS&apos;, &apos;SQL&apos;]</span>,
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
                    <span className="mini-label">Education</span>
                    <strong>Computer Science</strong>
                  </div>
                  <div className="mini-panel accent-panel">
                    <span className="mini-label">Location</span>
                    <strong>Minburi, Bangkok</strong>
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
                  A calm and open-minded Computer Science student who enjoys
                  learning new technologies and developing new skills.
                </p>
                <p>
                  I am eager to gain hands-on experience, take on new
                  challenges, and grow as a software developer through practical
                  projects and continuous learning.
                </p>
              </div>

              <aside className="info-card">
                <div className="info-card-header">Education</div>
                <ul className="info-list">
                  <li>
                    <span className="list-label">University</span>
                    <span>Sripatum University · 2023 - Present</span>
                  </li>
                  <li>
                    <span className="list-label">University GPAX</span>
                    <span>2.92</span>
                  </li>
                  <li>
                    <span className="list-label">School</span>
                    <span>Marialai School · 2017 - 2023</span>
                  </li>
                  <li>
                    <span className="list-label">School GPAX</span>
                    <span>2.72</span>
                  </li>
                  <li>
                    <span className="list-label">Languages</span>
                    <span>Thai: Native · English: CEFR-B2</span>
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
              {skillGroups.map(({ title, icon, items }) => (
                <div key={title} className="skill-group">
                  <div className="group-header">
                    {createElement(icon, { size: 18 })}
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
                      <div>
                        <span className="preview-category">Featured Project</span>
                        <h3 className="project-preview-title">{project.title}</h3>
                      </div>
                      <div className="preview-shapes">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-insight-grid">
                      <div className="project-insight">
                        <span className="project-label">Problem</span>
                        <strong>{project.problem}</strong>
                      </div>
                      <div className="project-insight">
                        <span className="project-label">Solution</span>
                        <strong>{project.solution}</strong>
                      </div>
                      <div className="project-insight">
                        <span className="project-label">My Role</span>
                        <strong>{project.role}</strong>
                      </div>
                      <div className="project-insight">
                        <span className="project-label">Tech</span>
                        <strong>{project.technologies.join(' · ')}</strong>
                      </div>
                    </div>

                    <div className="project-story-grid">
                      <div>
                        <span className="project-label proof-label">Proof</span>
                        <div className="proof-actions">
                          <a
                            href={project.links.github}
                            className="project-proof-button"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GitBranch size={15} />
                            GitHub
                          </a>
                        </div>
                      </div>
                      <div>
                        <span className="project-label outcome-label">Outcome</span>
                        <p>{project.outcome}</p>
                      </div>
                    </div>

                    <div className="project-tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
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

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">Currently Exploring</span>
              <h2>What I&apos;m learning right now.</h2>
            </div>

            <div className="learning-grid">
              {learningCards.map(({ title, description, icon }) => (
                <div key={title} className="learning-card">
                  <div className="learning-icon">
                    {createElement(icon, { size: 20 })}
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
                  {['JavaScript', 'Python', 'SQL', 'C#', 'React', 'ExpressJS'].map((item) => (
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
                about technology, feel free to reach out. Based in Minburi,
                Bangkok.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="contact-detail contact-github-link"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={18} />
                <span>GitHub: chobul</span>
              </a>
              <a
                className="contact-detail contact-linkedin-link"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={18} />
                <span>LinkedIn: Chonlakorn Bualuang</span>
              </a>
              <div className="contact-detail">
                <Phone size={18} />
                <span>+66 98-562-0617</span>
              </div>
              <div className="contact-detail">
                <Mail size={18} />
                <span>chonlakornbualuang@gmail.com</span>
              </div>
              <div className="contact-detail">
                <ExternalLink size={18} />
                <a
                  href={resumePdf}
                  className="contact-cv-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>
            <span className="footer-name">Chonlakorn Bualuang</span> — Full-Stack Developer
          </p>
          <p>Computer Science · Sripatum University</p>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.phone}>
              Phone
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
