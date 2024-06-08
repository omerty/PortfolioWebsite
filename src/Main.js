import React from "react";
import "remixicon/fonts/remixicon.css";
import "./styles.css"; // Adjust the path based on your file structure
import { motion } from "framer-motion"
import { Link } from "react-scroll";


const Main = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link
            to="Animation"
            className="nav__logo"
            smooth={true}
            duration={500}
          >
            <i className="ri-ghost-line"></i> Omer Mohiuddin
          </Link>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
                <li>
                <Link
                to="Animation"
                className="nav__link"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>


            <li className="dropdown__item">
              <div className="nav__link">
                <Link
                  to="projects"
                  className="nav__link"
                  smooth={true}
                  duration={500}
                  offset={200} // Adjust the offset value as needed
                >
                  Projects <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </Link>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <a href="https://github.com/omerty/SimpleMachineLearning/blob/main/README.md" className="dropdown__link">
                    <i class="ri-robot-2-line"></i> Chat-Bot
                  </a>
                </li>

                <li>
                  <a href="https://github.com/omerty/YellowPages-WebScrapper/blob/main/README.md" className="dropdown__link">
                  <i class="ri-bug-line"></i> Web-Scrapper
                  </a>
                </li>

                <li>
                  <a href="https://github.com/omerty/Netflix--Cloone-Beta-/blob/main/README.md" className="dropdown__link">
                  <i class="ri-netflix-line"></i> Netflix-Clone
                  </a>
                </li>
              </ul>
            </li>

            <li>
            <Link
                to="contact"
                className="nav__link"
                smooth={true}
                duration={500}
                offset={-900} // Adjust the offset value as needed
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Main;
