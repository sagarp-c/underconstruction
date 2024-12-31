"use client";
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/page.module.css';
import '@/styles/globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
         {/* Navbar */}
      <div className={styles.navbar}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#achievements" className={styles.navLink}>Achievements</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to My Portfolio</h1>
          <p className={styles.subtitle}>Building the Future with Code</p>
          <a href="#projects" className={styles.button}>View Projects</a>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/assets/images/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectCards}>
          {/* Add dynamic content from the projects data */}
          <div className={styles.card}>
            <Image src="/assets/images/project1.jpg" alt="Project 1" width={300} height={200} />
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website built with Next.js and TypeScript.</p>
            <a href="https://yourportfolio.com" className={styles.button}>View Project</a>
          </div>
          <div className={styles.card}>
            <Image src="/assets/images/project2.jpg" alt="Project 2" width={300} height={200} />
            <h3>E-Commerce App</h3>
            <p>A fully functional e-commerce platform built with React and Node.js.</p>
            <a href="https://myecommerceapp.com" className={styles.button}>View Project</a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
     <section className={styles.achievements} id="achievements">
        <h2>Achievements</h2>
        <p>Some of my achievements include...</p>
      </section>
      {/* Skills Section */}
      <section className={styles.skills} id="skills">
        <h2>Skills</h2>
        <p>Some of my skils include...</p>
      </section>

      {/* About Section */}
      <section className={styles.about} id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a focus on web development. 
          I enjoy creating impactful projects and always strive to improve my skills.
        </p>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <h2>Contact Me</h2>
        <p>If you are interested in working together, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className={styles.button}>Contact Me</a>
      </section>
    </main>
  );
}
