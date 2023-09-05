import React, { useState } from "react";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("telephone", telephone);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://www.portfolio.bestplacestudio.fr/traitement/traitement.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
        if (responseData === "form sent successfully") {
          setNom("");
          setPrenom("");
          setTelephone("");
          setEmail("");
          setMessage("");
          setSubmitSuccess(true);

          document.getElementById("formulaire").reset();
        }
      } else {
        console.error("La requête a échoué : " + response.status);
      }
    } catch (error) {
      console.error(error);
    }

    window.alert(
      "Votre formulaire a été envoyé avec succès ! Je vous recontacterai dès que possible."
    );
  };

  return (
    <div className="contact-container" id="contact-section">
      <div className="contact-title">
        <h2>CONTACT</h2>
      </div>
      <div>
        {submitSuccess ? (
          <p>Le formulaire a été soumis avec succès !</p>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Contact;
