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
            НОВИНИ
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blogs">БЛОГИ</NavLink>
      </li>
      <li>
        <NavLink to="/volunteering">ВОЛОНТЕРСТВО</NavLink>
      </li>
      <li>
        <NavLink to="/po">ГО ДЛЯ МОЛОДІ</NavLink>
      </li>
      <li>
        <NavLink to="/about">ПРО НАС</NavLink>
      </li>
      <li>
        <NavLink to="/projects">ПРОЕКТИ</NavLink>
      </li>
      <li>
        <NavLink to="/announcements">АНОНСИ</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/users" exact>
            КОРИСТУВАЧІ
          </NavLink>
        </li>
      )}
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
