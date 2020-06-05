import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/news" exact>
          Новини
        </NavLink>
      </li>
      <li>
        <NavLink to="/news/new">Блоги</NavLink>
      </li>
      <li>
        <NavLink to="/volunteering">Волонтерство</NavLink>
      </li>
      <li>
        <NavLink to="/po">ГО для молоді</NavLink>
      </li>
      <li>
        <NavLink to="/about">Про нас</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Проекти</NavLink>
      </li>
      <li>
        <NavLink to="/announcements">Анонси</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
