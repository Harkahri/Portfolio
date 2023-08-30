import React from "react";

// import Navigation from "../components/navigation/Navigation";
import Head from "../components/head/Head";
import Projets from "../components/projets/Projets";
import Skills from "../components/skills/Skills";
import Footer from "../components/footer/Footer";
import Soft from "../components/soft-skills/Soft";
import Contact from "../components/contact/Contact";

import skillsData from "../data/skillsData";

const Portfolio = () => {
  return (
    <section>
      <div className="body">
        {/* <Navigation /> */}
        <Head />
        <Projets />

        <div>
          {" "}
          <Skills skillsData={skillsData} />
        </div>
        <Soft />
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default Portfolio;
