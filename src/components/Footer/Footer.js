import React from "react";
import "./Footer.scss";
import GitHubLogo from "./GitHub-Mark-Light-64px.png";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__container">
      <small className="Footer__copyright">&copy; {year} Sasha Bajzek</small>
      <a href="https://github.com/SashaBajzek/badass-builder-girl">
        <img className="Footer__image" src={GitHubLogo} alt="Github" />
      </a>
    </div>
  </footer>
);

export default Footer;
