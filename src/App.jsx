import { useState } from 'react'
import myPhoto from './assets/profile.jpeg'
import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="nav-logo">M</div>
          <span className="nav-title">
            MONIS <span className="highlight">KAMAL</span>
          </span>
        </div>
        <div className="nav-mid">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#education" className="nav-link">EDUCATION</a>
          <a href="#certificates" className="nav-link">CERTIFICATES</a>
        </div>
        <div className="nav-right">
          <a href="#contact" className="btn-talk">
            LET'S TALK ↗
          </a>
        </div>
      </nav>
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-left">
            <div className="status-badge">
              <span className="dot"></span> FRONTEND DEVELOPER
            </div>
            <h1 className="home-name">
              Monis <br />
              <span className="highlight">Kamal</span>
            </h1>
            <p className="home-subtitle">
              Building fast, scalable, and beautifully designed web applications.
              Transforming complex ideas into smooth, responsive user experiences.
            </p>
            <div className="home-buttons">
              <a href="#skills" className="btn-work">
                <span>💻</span>View Skills
              </a>
              <a href="#" className="btn-View-resume">
                <span>📄</span>View Resume
              </a>
            </div>
          </div>
          <div className="home-right">
            <div className="glass-card">
              <div className="image-wrapper">
                <img src={myPhoto} alt="Monis Kamal" className="profile-image" />
              </div>
              <div className="card-footer">
                <h3>Monis Kamal</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">ABOUT <span className="highlight">ME</span></h2>
          <h3>Passionate Web Developer & IT Student Crafting Modern Digital Experiences</h3>
          <p className="about-description">
            I am a dedicated <strong>B.Sc IT</strong> graduate passionate about crafting modern, pixel-perfect
            user interfaces. I enjoy solving problems through code and creating seamless experiences for users. I am looking for
            opportunities to apply my skills, collaborate on exciting projects, and build impactful web solutions.
          </p>
        </div>
      </section>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-title">
              SKI<span className="highlight">LL</span>S
            </h2>
            <p className="skills-description">
              Technologies and tools I use to build clean and responsive web applications.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="card-header">
                <span className="skill-icon">🌐</span>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React.js</span>
                <span className="tag">WordPress</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="card-header">
                <span className="skill-icon">💻</span>
                <h3>Programming</h3>
              </div>
              <div className="skill-tags">
                <span className="tag">C Programming</span>
                <span className="tag">C++ Programming</span>
                <span className="tag">SQL</span>
                <span className="tag">Python</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="card-header">
                <span className="skill-icon">🛠️</span>
                <h3>Tools & Productivity</h3>
              </div>
              <div className="skill-tags">
                <span className="tag">Canva</span>
                <span className="tag">MS Excel</span>
                <span className="tag">MS Word</span>
                <span className="tag">Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="education-section">
        <div className="education-container">
          <div className="education-header">
            <h2 className="education-title">
              EDUCA<span className="highlight">TION</span>
            </h2>
            <p className="education-description">
              My academic background and qualifications in Information Technology and Science.
            </p>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <div className="edu-details">
                <span className="edu-year">Graduated</span>
                <h3 className="edu-degree">Bachelor of Science in Information Technology (B.Sc IT) - 72.10%</h3>
                <h4 className="edu-school">Rashtrasant Tukadoji Maharaj Nagpur University</h4>
                <p className="edu-info">
                  Focused on Web Development, Software Engineering, Database Management Systems (SQL), and Programming Languages like C, C++, and Python.
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-details">
                <span className="edu-year">Higher Secondary</span>
                <h3 className="edu-degree">Class XII (HSC - Science) - 71.33%</h3>
                <h4 className="edu-school">Maharashtra State Board</h4>
                <p className="edu-info">
                  Completed Higher Secondary Education with a focus on Physics, Chemistry, Mathematics, and Biology.
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-details">
                <span className="edu-year">Secondary</span>
                <h3 className="edu-degree">Class X (SSC) - 85.20%</h3>
                <h4 className="edu-school">Maharashtra State Board</h4>
                <p className="edu-info">
                  Completed Secondary School Education with strong academic fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="certificates" className="certificate-section">
        <div className="certificate-container">
          <div className="contact-header">
            <h2 className="contact-title">
              CERTI<span className="highlight">FICATE</span>S
            </h2>
            <p className="contact-description">
              Continuous lerning is key to growth. Here are the verified certification and technical credentials I have earned.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              LET'S <span className="highlight">CONNECT</span>
            </h2>
            <p className="contact-description">
              I'm currently open to new opportunites, freelance project, and tech collabrations. Drop a message or find me on social media!
            </p>
          </div>

          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:moniskamal162@gmail.com">moniskamal162@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Kamptee, Nagpur, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <div className="contact-details">
                <h4>Social Profiles</h4>
                <div className="social-tags-container">
                  <a href="#" >GitHub ↗</a>
                  <a href="#">LinkedIn ↗</a>
                  <a href="#">Instagram ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App