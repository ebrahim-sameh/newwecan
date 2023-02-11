/* eslint-disable array-callback-return */
import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

import "./Header.scss";

const Header = () => {
  const links = [
    {
      route: "home",
      label: "Home",
      link: true,
    },
    {
      route: "services",
      label: "Services",
      link: true,
    },
    {
      link: false,
      label: "Pages",
      options: [
        {
          label: "Page 1",
          route: "",
          link: true,
        },
        {
          label: "Page 2",
          route: "",
          link: true,
        },
        {
          label: "Page 3",
          route: "",
          link: true,
        },
      ],
    },
    {
      route: "/about-us",
      label: "About Us",
      link: true,
    },
    {
      route: "/projects",
      label: "Our Works",
      link: true,
    },
  ];

  return (
    <div className="main__header">
      <nav className="nav container">
        <NavLink to="/home" className="logo">
          Logo
        </NavLink>
        <div className="nav__list">
          <ul className="links__list">
            {links.map((link, i) => {
              if (link.link) {
                return (
                  <li key={i}>
                    <NavLink
                      to={link.route}
                      // className="main__link"
                      // className={({ isActive }) =>
                      //   isActive ? "active main__link" : "main__link"
                      // }
                      className={`main__link ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              } else if (!link.link) {
                return (
                  <li key={i}>
                    <DropdownMenu options={link.options} label={link.label} />
                  </li>
                );
              }
            })}
          </ul>
          <button className="language__btn">Ar</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
