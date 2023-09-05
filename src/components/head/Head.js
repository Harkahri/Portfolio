import React, { useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import logo from "../../images/logo2.png";
import photo from "../../images/photo.png";

const Head = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    document.body.style.backgroundColor = isOn ? "#0f172a" : "#fefcfe";
    document.body.style.color = isOn ? "white" : "#0f172a";
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const [logoRef, logoInView] = useInView({
    triggerOnce: false,
    rootMargin: "30% 0px",
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: false,
    rootMargin: "30% 0px",
  });

  const [photoRef, photoInView] = useInView({
    triggerOnce: false,
    rootMargin: "30% 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const scrollToSkillsSection = () => {
    const skillsSection = document.getElementById("competences-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMyProject = () => {
    const skillsSection = document.getElementById("projets-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="head" id="accueil-section">
      <div className="logo">
        <img src={logo} alt="logo best place studio" />
        <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
      </div>
      <motion.div
        ref={logoRef}
        variants={containerVariants}
        initial="hidden"
        animate={logoInView ? "visible" : "hidden"}
      ></motion.div>
      <motion.div
        ref={descriptionRef}
        variants={containerVariants}
        initial="hidden"
        animate={descriptionInView ? "visible" : "hidden"}
      >
        <div className="description-photo-container">
          <motion.div className="description-container" variants={itemVariants}>
            <motion.h1 variants={itemVariants}>
              <p>
                Salut ! Moi, c'est <span>Lucas</span>.
              </p>
            </motion.h1>
            <motion.p variants={itemVariants}>
              J'ai 24 ans et je jongle avec le développement web{" "}
              <span>front-end</span> et <span>back-end</span>. <br /> <br />
              Quand je ne code pas, je m'amuse avec la <span>3D</span> et le{" "}
              <span>design</span>. <br /> <br /> Bienvenue dans mon monde où le{" "}
              <span>code</span> rencontre la <span>créativité</span> !
            </motion.p>
            <motion.div className="boutons-container" variants={itemVariants}>
              <motion.button
                className={isOn ? "dark-button" : ""}
                variants={itemVariants}
                onClick={scrollToSkillsSection}
              >
                Mes compétences
              </motion.button>
              <motion.button
                className={isOn ? "dark-button" : ""}
                variants={itemVariants}
                onClick={scrollToMyProject}
              >
                Mes projets
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            ref={photoRef}
            className="photo-content"
            variants={photoInView}
          >
            <div className="background-photo-container">
              <motion.div className="photo">
                <img src={photo} alt="photo de Lucas " />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Head;
