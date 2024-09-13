// src/components/Home.js
import React from "react";
import "../styles/Home.css"; // Importamos los estilos

// Importa la imagen y el CV
import foto from "../assets/foto.jpg";
import cv from "../assets/LucianoLupo.pdf";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <img src={foto} alt="Foto de Luciano" className="profile-photo" />
        <h1>Hola, soy Luciano</h1>
        <p>
          Soy un desarrollador de software especializado en desarrollo Backend.
        </p>
        <a href={cv} download className="download-cv-button">
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default Home;
