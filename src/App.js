// src/App.js
import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import ContactForm from "./components/ContactForm";
import "./App.css"; // Puedes agregar estilos globales aquí

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Aquí podrías agregar el Header */}
      </header>
      <main>
        <Home />
        <Projects />
        <Experiences />
        <ContactForm />
        {/* Otras secciones irán aquí */}
      </main>
      <footer className="App-footer">
        {/* Footer con enlaces a tus redes */}
      </footer>
    </div>
  );
}

export default App;
