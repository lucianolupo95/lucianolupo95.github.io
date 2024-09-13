import React, { useState } from "react";
import "../styles/Experiences.css"; // Importar el CSS correspondiente

const Experience = () => {
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const experienceList = [
    {
      id: 1,
      title: "Desarrollador Frontend en Empresa A",
      description:
        "Trabajé en el desarrollo de aplicaciones web utilizando React y TypeScript.",
      technologies: ["React", "TypeScript"],
      startDate: "2022-01-01",
      endDate: "2023-01-01",
    },
    {
      id: 2,
      title: "Desarrollador Backend en Empresa B",
      description: "Me encargué de construir APIs usando Node.js y Express.",
      technologies: ["Node.js", "Express"],
      startDate: "2021-05-01",
      endDate: "2022-12-31",
    },
    // Más experiencias...
  ];

  const techOptions = Array.from(
    new Set(experienceList.flatMap((exp) => exp.technologies))
  );

  const filteredExperience =
    selectedTech === "all"
      ? experienceList
      : experienceList.filter((exp) => exp.technologies.includes(selectedTech));

  const sortedExperience = filteredExperience.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.startDate) - new Date(b.startDate);
    } else {
      return new Date(b.startDate) - new Date(a.startDate);
    }
  });

  return (
    <section id="experience" className="experience-section">
      <h2>Experiencia</h2>
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
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div className="experience-container">
        {sortedExperience.map((exp) => (
          <div key={exp.id} className="experience-card">
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            <p>Tecnologías: {exp.technologies.join(", ")}</p>
            <p>
              {new Date(exp.startDate).toLocaleDateString()} -{" "}
              {new Date(exp.endDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
