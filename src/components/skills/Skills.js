import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = ({ skillsData }) => {
  const [selectedSkill, setSelectedSkill] = useState(1);

  const handleSkillClick = (id) => {
    setSelectedSkill(id === selectedSkill ? null : id);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50%",
  });

  return (
    <motion.div
      className="skills-container"
      id="competences-section"
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2>SKILLS</h2>
      <div className="skills-list">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className={`skill ${selectedSkill === skill.id ? "active" : ""}`}
            onClick={() => handleSkillClick(skill.id)}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={`icon ${selectedSkill === skill.id ? "selected" : ""}`}
            />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedSkill !== null && (
          <motion.div
            key="skill-details"
            className="skill-details"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3>
              {skillsData.find((skill) => skill.id === selectedSkill).name}
            </h3>
            <p>
              {
                skillsData.find((skill) => skill.id === selectedSkill)
                  .description
              }
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Skills;
