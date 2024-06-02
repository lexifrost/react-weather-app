import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by{" "}
      <a href="https://github.com/lexifrost" target="_blank" rel="noreferrer">
        Lexi Frost
      </a>
      , is open-sourced on{" "}
      <a
        href="https://github.com/lexifrost/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://comforting-pastelito-f82ed2.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
      .
    </footer>
  );
}
