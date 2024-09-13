import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css"; // Importar el CSS correspondiente

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    // Configura los parámetros para EmailJS
    const templateParams = {
      from_name: name,
      user_email: email,
      reply_to: email,
      message,
    };

    emailjs
      .send(
        "service_9zl7bgt", // Reemplaza con tu Service ID de EmailJS
        "template_rcfc9bu", // Reemplaza con tu Template ID de EmailJS
        templateParams,
        "DktrKq5rYzBBvrWE1" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setError(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setSuccess(false);
          setError(true);
        }
      )
      .finally(() => setIsSending(false));
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
        <button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>
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
