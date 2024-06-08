import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Main.js';
import Animations from './Animations.js';
import AboutMe from './AbtMe.js';
import Projects from './Projects.js';
import Languages from './Languages.js';
import ContactMe from './ContactMe.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <section id="Animation">
      <Animations />
    </section>
    <AboutMe />
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <ContactMe />
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
