import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">Nav</NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
