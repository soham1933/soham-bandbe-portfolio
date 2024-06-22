import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container}>
      
      
      <h2 className={styles.title}>Projects</h2>
      
      <div className={styles.projects}>
      <img src={getImageUrl("projects/avengers.png")} className={styles.primg} alt="avengers"></img>
        
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
