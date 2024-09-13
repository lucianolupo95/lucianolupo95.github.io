// App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <Experiences />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
