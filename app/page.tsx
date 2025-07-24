"use client";
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/page.module.css';
import Link from 'next/link';


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
            <Link href="#home" className={styles.navLink}>Home</Link>
            <Link href="#about" className={styles.navLink}>About</Link>
            <Link href="#projects" className={styles.navLink}>Projects</Link>
            <Link href="#achievements" className={styles.navLink}>Achievements</Link>
            <Link href="#contact" className={styles.navLink}>Contact</Link>
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

      {/* About Section */}
<section className={styles.about} id="about">
  <div className={styles.aboutContainer}>
    <div className={styles.aboutText}>
      <h2>About Me</h2>
      <p>
Hi! I&apos;m Sagar P, a third-year Computer Science and Engineering student at GEC Thrissur, driven by a passion for building impactful digital products and empowering communities through tech and information.

As an aspiring Product Manager, I’ve led multiple student-focused projects—from PriceTrail, a smart travel budgeting app, to wellness and roommate-matching platforms aimed at Gen Z users. I apply frameworks like RICE, KANO, and Go-to-Market (GTM) strategy to prioritize features and build with purpose.

Alongside development, I’ve completed a certified course in Cryptocurrency and Blockchain, expanding my understanding of decentralized technologies and financial innovation. I also follow the stock market, continuously learning about long-term investing, technical analysis, and how finance and tech converge.

I run a YouTube channel called Czernode, focused on delivering fast, clear updates and guidance for KEAM aspirants—bridging the information gap with reliable content that students can trust.

I love solving problems, simplifying complexity, and working on ideas that matter. Let’s connect if you&apos;re into tech, product building, or student-focused innovation!
      </p>

      {/* Add the image row here */}
      <div className={styles.iconRow}>
        <img src="/assets/images/logo.jpg" alt="HTML" />
        <img src="/assets/images/logo.jpg" alt="CSS" />
        <img src="/assets/images/logo.jpg" alt="JavaScript" />
        <img src="/assets/images/logo.jpg" alt="React" />
        <img src="/assets/images/logo.jpg" alt="Node.js" />
      </div>
    </div>

    <div className={styles.aboutImage}>
      <Image
        src="/assets/images/logo.jpg"
        alt="Profile"
        width={180}
        height={180}
        className={styles.profileImage}
      />
    </div>
  </div>
</section>




      {/* Projects Section */}
      <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectCards}>
          {/* Add dynamic content from the projects data */}
          <div className={styles.card}>
            <Image src="/assets/images/model.png" alt="Project 1" width={300} height={200} />
            <h3 style={{ color: 'black' }}>Handwritten Devanagari Digit Classifier</h3>
            <p style={{ color: 'black' }}>A deep learning project using CNNs to recognize handwritten Devanagari digits, exploring advanced ML applied to Indian scripts.</p>
            <a href="https://github.com/sagarp-c/devanagari_digit_classifier" className={styles.button}>View Project</a>
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



      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <h2>Contact Me</h2>
        <p>If you are interested in working together, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className={styles.button}>Contact Me</a>
      </section>
    </main>
  );
}
