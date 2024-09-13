import React, { useState, useEffect, useRef } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTech, setSelectedTech] = useState("all");
  const [projectsPerPage, setProjectsPerPage] = useState(3); // Número de proyectos por página
  const projectsRef = useRef(null);

  const projectList = [
    {
      id: 1,
      image: require("../assets/Golang.png"),
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      technologies: ["React", "JavaScript"],
      link: "https://github.com/usuario/proyecto1",
    },
    {
      id: 2,
      image: require("../assets/nodejs.png"),
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      technologies: ["Flutter", "Dart"],
      link: "https://github.com/usuario/proyecto2",
    },
    {
      id: 3,
      image: require("../assets/nodejs.png"),
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      technologies: ["Flutter", "Dart"],
      link: "https://github.com/usuario/proyecto2",
    },
    {
      id: 4,
      image: require("../assets/nodejs.png"),
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      technologies: ["Flutter", "Dart"],
      link: "https://github.com/usuario/proyecto2",
    },
    // Más proyectos...
  ];

  const techOptions = Array.from(
    new Set(projectList.flatMap((project) => project.technologies))
  );

  // Filtrar proyectos según la tecnología seleccionada
  const filteredProjects =
    selectedTech === "all"
      ? projectList
      : projectList.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth <= 600) {
        setProjectsPerPage(2); // Ajuste para dispositivos móviles
      } else {
        setProjectsPerPage(3); // Ajuste para pantallas más grandes
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);

    return () => {
      window.removeEventListener("resize", updateProjectsPerPage);
    };
  }, []);

  useEffect(() => {
    // Volver a la primera página cuando cambia el filtro
    setCurrentPage(0);
  }, [selectedTech]);

  const numberOfPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Puedes utilizar `entry.isIntersecting` para realizar acciones aquí si lo necesitas
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = projectsRef.current; // Copiar el valor del ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <h2>Proyectos</h2>
      <div className="filter-container">
        <select
          id="tech-filter"
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
        >
          <option value="all">Todos</option>
          {techOptions.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>
      <div className="projects-container">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tecnologías: {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: numberOfPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={index === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
