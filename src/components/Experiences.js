import React, { useState } from "react";
import "../styles/Experiences.css"; // Importar el CSS correspondiente

const Experience = () => {
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");
  const [programmingRelatedFilter, setProgrammingRelatedFilter] =
    useState("true"); // Cambio a string para coincidir con los valores del select

  const experienceList = [
    {
      id: 1,
      title: "Desarrollador Backend Go",
      company: "Find Holding",
      companyLink: "https://findholding.com/",
      description: `        Desarrollo de API REST con Go.
        Construcción y mantenimiento de bases de datos relacionales (MySQL) y no relacionales (MongoDB).
        Desarrollo y mantenimiento de servicios de IOT y de chats en tiempo real usando servidores MQTT y XMPP.
        Integraciones con AI (chatGPT).
        Desarrollo de estructuras de autenticación OAuth.`,
      programmingRelated: true,
      technologies: ["Go", "MongoDB", "MySQL"],
      startDate: "2022",
      endDate: "2024",
    },
    {
      id: 2,
      title: "Profesor de programación",
      company: "Universidad de Buenos Aires",
      companyLink: "https://www.psi.uba.ar/bienestar/index.php",
      description: `Profesor y contenidista del curso “Introducción a la programación”`,
      programmingRelated: true,
      technologies: ["HTML", "CSS", "JavaScript"],
      startDate: "2022",
      endDate: "",
    },
    {
      id: 3,
      title: "Desarrollador web",
      company: "Educare Solutions",
      companyLink: "https://educareenroll.com/",
      description: `Maquetado y desarrollo de sitios web.
        Confección de formularios y mails automáticos para enrollment de alumnos de diversas escuelas estadounidenses.
        Mantenimiento de sitios web (seguridad, actualizaciones y backups).`,
      programmingRelated: true,
      technologies: ["HTML", "CSS", "JavaScript", "Wordpress"],
      startDate: "2021",
      endDate: "2022",
    },
    {
      id: 4,
      title: "Recepción",
      company: "IMED Levante",
      description: `Recepción de Urgencias de pacientes angloparlantes e hispanoparlantes`,
      programmingRelated: false,
      startDate: "2024",
      endDate: "",
    },
    {
      id: 5,
      title: "Consultor SAP FICA",
      company: "Nixus SAP Consulting",
      description: `Soporte de soluciones basadas en SAP FI-CA
        Dispatching`,
      programmingRelated: false,
      startDate: "2022",
      endDate: "2023",
    },
    {
      id: 6,
      title: "Psicólogo y acompañante terapéutico",
      company: "RedAT | Holding Tratamientos | Autónomo",
      companyLink: "https://redat.com.ar/",
      description: `Acompañamiento terapéutico en hogares y escuelas
        Consultas de psicología particulares`,
      programmingRelated: false,
      startDate: "2016",
      endDate: "2023",
    },
    {
      id: 7,
      title: "Pasante en el área de Desarrollo de RRHH y Servicios Generales. ",
      company: "Transener S.A.",
      companyLink: "https://www.transener.com.ar/",
      description: `- Análisis de capacitaciones.
        - Carga de facturas en sistema SAP.
        - Actualización de base de datos de empleados en software de capacitación.
        - Coordinación y Logística de eventos de capacitación en la empresa.
        - Administración de correo interno y externo.`,
      programmingRelated: false,
      startDate: "2014",
      endDate: "2016",
    },
  ];

  const techOptions = Array.from(
    new Set(experienceList.flatMap((exp) => exp.technologies || [])) // Asegurarse de que sea un array
  );

  const filteredExperience = experienceList.filter(
    (exp) =>
      (selectedTech === "all" ||
        (exp.technologies && exp.technologies.includes(selectedTech))) &&
      (programmingRelatedFilter === "all" ||
        exp.programmingRelated.toString() === programmingRelatedFilter)
  );

  const sortedExperience = filteredExperience.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.startDate) - new Date(b.startDate);
    } else {
      return new Date(b.startDate) - new Date(a.startDate);
    }
  });

  const ExperienceDescription = ({ description }) => {
    const lines = description.split("\n"); // Dividir la descripción en líneas

    return (
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  };

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
          id="programming-related-filter"
          value={programmingRelatedFilter}
          onChange={(e) => setProgrammingRelatedFilter(e.target.value)}
        >
          <option value="true">Programación</option>
          <option value="false">Otros</option>
          <option value="all">Todos</option>
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
            {exp.companyLink ? (
              <a
                href={exp.companyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.company}
              </a>
            ) : (
              <p>{exp.company}</p>
            )}
            <p>
              {new Date(exp.startDate).getFullYear()} -{" "}
              {exp.endDate ? new Date(exp.endDate).getFullYear() : "Actualidad"}
            </p>
            <ExperienceDescription description={exp.description} />
            {exp.technologies && (
              <p>Tecnologías: {exp.technologies.join(", ")}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
