import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom,
      prenom,
      telephone,
      email,
      message,
    };

    try {
      const response = await axios.post("/traitement/traitement.php", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-container" id="contact-section">
      <div className="contact-title">
        <h2>Contact</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} id="formulaire">
          <div className="form-left">
            <div className="form-row">
              <div className="form-column-half">
                <label htmlFor="nom"></label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>
              <div className="form-column-half">
                <label htmlFor="prenom"></label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-column-half">
                <label htmlFor="telephone"></label>
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="Téléphone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                />
              </div>
              <div className="form-column-half">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-right">
            <div>
              <div className="form-column-full">
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
