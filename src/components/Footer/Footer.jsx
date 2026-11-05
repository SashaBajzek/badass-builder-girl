import React, { useEffect, useState } from "react";
import "./Footer.scss";
import GitHubLogo from "./GitHub-Mark-Light-64px.png";

const Footer = () => {
  // The prerendered HTML has the build year; update it in the browser in case the site wasn't rebuilt this year.
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="Footer">
      <div className="Footer__container">
        <small className="Footer__copyright">&copy; {year} Sasha Bajzek</small>
        <a href="https://github.com/SashaBajzek/badass-builder-girl">
          <img className="Footer__image" src={GitHubLogo} alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
