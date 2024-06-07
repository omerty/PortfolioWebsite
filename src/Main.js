import React from "react";
import "remixicon/fonts/remixicon.css";
import "./styles.css"; // Adjust the path based on your file structure
import { motion } from "framer-motion"

const Main = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i className="ri-ghost-line"></i> Omer Mohiuddin
          </a>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>


            <li className="dropdown__item">
              <div className="nav__link">
                Projects <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-pie-chart-line"></i> Project 1
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Project 2
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Project 3
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="nav__link">
                Languages
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Main;
