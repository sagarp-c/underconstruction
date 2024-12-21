import Image from 'next/image';
import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
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
        <h2>About Me</h2>
        <p>
          Im a passionate software developer with a focus on web development.
          I enjoy creating impactful projects and always strive to improve my skills.
        </p>
      </section>

      {/* Projects Section */}
      <section className={styles.projects} id="projects">
        <h2>Featured Projects</h2>
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

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <h2>Contact Me</h2>
        <p>If youre interested in working together, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className={styles.button}>Contact Me</a>
      </section>
    </main>
  );
}
