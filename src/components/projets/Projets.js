import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import projetsData from "../../data/projetData.json";

const Project = ({ projet, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: `-${10 * (index + 1)}%`,
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
      y: -10,
      opacity: 1,
    },
  };

  return (
    <motion.section
      key={projet.id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="projets-container">
        <motion.div
          className="projet-image"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Link to={`/projet/${projet.id}`}>
            <div className="image-overlay">{projet.name}</div>
            <img
              src={require(`../../images/${projet.image}`)}
              alt={projet.name}
            />
          </Link>
        </motion.div>
        <motion.div className="description-projets" variants={itemVariants}>
          <h2>{projet.name}</h2>
          <p>{projet.description}</p>
        </motion.div>
        <motion.div className="competences-container" variants={itemVariants}>
          <h3>Compétences</h3>
          <ul>
            {projet.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Projets = () => {
  return (
    <section className="projets" id="projets-section">
      {projetsData.map((projet, index) => (
        <Project key={projet.id} projet={projet} index={index} />
      ))}
    </section>
  );
};

export default Projets;
