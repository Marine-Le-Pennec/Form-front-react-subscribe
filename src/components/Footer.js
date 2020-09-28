import React from "react";

import logo from "../assets/react-brands.svg";

function Footer() {
  return (
    <footer>
      Made with &nbsp;
      <b>
        <img src={logo} alt="logo react" />
      </b>{" "}
      &nbsp;at&nbsp;{" "}
      <b>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lereacteur.io/"
        >
          Le Réacteur
        </a>
      </b>
      &nbsp; by&nbsp;{" "}
      <b>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Marine-Le-Pennec"
        >
          Marine
        </a>
      </b>
    </footer>
  );
}

export default Footer;
