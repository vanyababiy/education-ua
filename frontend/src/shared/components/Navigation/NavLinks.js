import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/news/new" exact>
            Новини
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blogs">Блоги</NavLink>
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
      {auth.isLoggedIn && (
        <li>
          {/* <button onClick={auth.logout}>ВИЙТИ</button> */}
          <NavLink to="/" onClick={auth.logout}>
            ВИЙТИ
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
