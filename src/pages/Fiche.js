import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projetsData from "../data/projetData.json";

const Fiche = () => {
  const { id } = useParams();
  const projet = projetsData.find((projet) => projet.id === id);

  if (!projet) {
    return <p>Le projet n'a pas été trouvé.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fiche-container"
    >
      <motion.h1>{projet.name}</motion.h1>
      <motion.img
        src={require(`../images/${projet.image[0]}`)}
        alt={projet.name}
        className="fiche-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {projet.description}
      </motion.p>
      <motion.p
        className="probleme"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <strong>Problème rencontré :</strong> {projet.probleme}
      </motion.p>
      <div className="descr">
        <motion.div
          className="logiciels-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <strong>Logiciels utilisés :</strong>
          <ul>
            {projet.logiciels.map((logiciel, index) => (
              <li key={index}>{logiciel}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <strong>Compétences acquises :</strong>
          <ul>
            {projet.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="tags-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <strong>Tags :</strong>
          <ul>
            {projet.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Fiche;
