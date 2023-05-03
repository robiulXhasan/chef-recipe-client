import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? " text-decoration-none fw-semibold text-dark border-2 border-bottom border-warning"
          : "text-decoration-none text-dark"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
