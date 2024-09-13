import React, { useState } from "react";
import "../styles/ContactForm.css"; // Importar el CSS correspondiente

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí puedes añadir lógica para enviar el formulario (por ejemplo, usando fetch o axios)

    // Simular una respuesta exitosa o fallida
    try {
      // Aquí puedes realizar una petición a un servidor o servicio de correo
      setSuccess(true);
      setError(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
        {success && (
          <p className="success-message">¡Mensaje enviado con éxito!</p>
        )}
        {error && (
          <p className="error-message">
            Hubo un error al enviar el mensaje. Inténtalo de nuevo.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
