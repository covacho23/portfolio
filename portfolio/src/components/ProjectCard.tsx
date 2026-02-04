import React from "react";
import "./ProjectCard.css"

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  demoUrl,
  repoUrl,
}) => {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project-tech">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Ver demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              Ver repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
