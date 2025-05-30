
import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard"; // Corrected import path
import projectsData from "../../data/projects.json"; // Ensure this path is correct
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects"> {/* Added an ID for navigation */}
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
