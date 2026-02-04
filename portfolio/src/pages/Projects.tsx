import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Portfolio Personal",
    description: "Mi portfolio personal construido con React y TypeScript.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://miportfolio.com",
    repoUrl: "https://github.com/covacho23/portfolio",
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación web para organizar tareas diarias.",
    technologies: ["Vue", "JavaScript", "CSS"],
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
