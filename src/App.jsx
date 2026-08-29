import { useState } from 'react'
import myPhoto from './assets/profile.jpeg'
import './App.css'

function App() {


  return (
    <div className="portfolio-app">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="nav-logo">
            M
          </div>
          <span className="nav-title">
            MONIS <span className="highlight">KAMAL</span>
          </span>
        </div>
        <div className="nav-mid">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#work" className="nav-link">WORK</a>
          <a href="#education" className="nav-link">EDUCATION</a>
          <a href="#certificates" className="nav-link">CERTIFICATES</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>
        <div className="nav-right">
          <a href="/resume.pdf" className="btn-resume">
            <span>📄</span>RESUME
          </a>
          <a href="/#contact" className="btn-talk">
            LET'S TALK ↗
          </a>
        </div>
      </nav>
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-left">
            <div className="status-badge">
              <span className="dot"> </span> FRONTEND DEVELOPER
            </div>
            <h1 className="home-name">Monis <br />
              <span className="highlight">Kamal</span>
            </h1>
            <p className="home-subtitle">Build fast, scalable and beautiful design web application.
              Transforming complex ideas into smooth, responsive user experiences.
            </p>
            <div className="home-buttons">
              <a href="#work" className="btn-work">
                <span>💻</span>View Projects
              </a>
              <a href="#resume" className="btn-View-resume">
                <span>📄</span>View Resume
              </a>
              <a href="#download" className="btn-download">
                Download PDF<span>📥</span>
              </a>

            </div>
            <div className="social-links">
              <a href="#" className="icon" title="GitHub">G</a>
              <a href="#" className="icon" title="LinkedIn">L</a>
              <a href="#" className="icon" title="email">E</a>
            </div>
          </div>
          <div className="home-right">
            <div className="glass-card">

              <div className="image-wrapper">
                <img src='myPhoto' className="profile-image"></img>
                <div className="home-avatar">MK</div>
              </div>
              <div className="card-footer">
                <h3>Monis Kamal</h3>
                <p>Frontend Devloper</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">ABOUT <span className="highlight"> ME</span></h2>
          <h3>Passionate Web Developer & IT Student Crafting Mordern Digital Experiences</h3>
          <p className="about-description">I am a dedicated<strong> B.Sc IT</strong>  graduate passionate about crafting modern, pixel-perfect
            user interfaces. I enjoy solving problems through code and creating seamless experiences for users. I am looking for
            opportunities to apply my skills, collaborate on exciting projects, and build impactful web solutions.</p>
          <p className="about-description">
            I'm a frontend developer with a passion for creating beautiful and functional web applications.
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
                <span className="tag">Java-Script</span>
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
                <span className="tag">Data Entry</span>
                <span className="tag">Git & GitHub</span>
                <span className="tag">Public Speaking</span>
                <span className="tag">Fast Typing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="work-section">
        <div className="work-content">
          <h2 className="work-title">WORK<span className="highlight"> EXPERIENCE</span></h2>
          <p className="work-description">
            I have a strong foundation in HTML, CSS, and JavaScript.
          </p>
        </div>
      </section>
      <section id="education" className="education-section">
        <div className="education-content">
          <h2 className="education-title">EDUCA<span className="highlight">TION</span></h2>
          <p className="education-description">
            I have a strong foundation in HTML, CSS, and JavaScript.
          </p>
        </div>
      </section>
      <section id="certificates" className="certificates-section">
        <div className="certificates-content">
          <h2 className="certificates-title">CERTI<span className="highlight">FICATE</span>S</h2>
          <p className="certificates-description">
            I have obtained several certifications in web development and related technologies.
          </p>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">CONT<span className="highlight">ACT</span></h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>
      </section>

    </div>
  )
}

export default App
