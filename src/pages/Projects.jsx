import React from 'react';
import styles from '/src/components/Projects.module.css'; // import as module

const projects = [
  {
    title: "Citrus Ember Cafe",
    description: "A multi-page restaurant website built with HTML, CSS, and JavaScript. Features a menu page, about section, and contact form.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "",
    link: "https://citrus-ember-cafe.vercel.app/",
    repo: "https://github.com/hevanx/citrus-ember-cafe"
  },
  {
    title: "Movie Tracker",
    description: "A React app to track movies you want to watch or have watched. Built with React Router for navigation and Tailwind CSS for styling.",
    tech: ["React", "React Router", "Tailwind CSS", "Vite"],
    image: "",
    link: "https://movie-tracker-nu-woad.vercel.app/",
    repo: "https://github.com/hevanx/movie-tracker"
  }
];

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image && (
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((t, i) => (
                <span key={i} className={styles.techTag}>{t}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">GitHub Repo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


