import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          <ul>
            <li onClick={() => scrollToSection("accueil-section")}>
              &lt;accueil /&gt;
            </li>
            <li onClick={() => scrollToSection("projets-section")}>
              &lt;projets /&gt;
            </li>
            <li onClick={() => scrollToSection("competences-section")}>
              &lt;skills /&gt;
            </li>
            <li onClick={() => scrollToSection("softSkills-section")}>
              &lt;softSkills /&gt;
            </li>
            <li onClick={() => scrollToSection("contact-section")}>
              &lt;contact /&gt;
            </li>
          </ul>
        </div>
        <div className="bps-nav">
          <p>visite</p>
          <a href="https://bestplacestudio.fr/">bestplacestudio.fr</a>
        </div>
        <div className="reseaux-nav">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-ossari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/lucastwgang"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter (et pas X)
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tw_lucas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mentions-nav">
        <p>
          <a href="/">Mentions légales</a> -{" "}
          <a href="https://bestplacestudio.fr/">
            Développer par Best Place Studio
          </a>{" "}
          - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
