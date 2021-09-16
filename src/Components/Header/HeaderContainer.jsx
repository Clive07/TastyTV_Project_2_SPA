import "../../styles/header-styles.css";
import React from "react";

export default function HeaderContainer(props) {
  function handleClick(event) {
    console.log(event.target.id);
    props.switchPage(event.target.id);
  }

  return (
    <header>
      <h1 id="title">TastyTV's App!</h1>
      <nav id="navbar">
        <span id={props.movieNav} className="navbar-btn" onClick={handleClick}>
          Movies
        </span>
        <span id={props.tvNav} className="navbar-btn" onClick={handleClick}>
          TV Shows
        </span>
        <span id={props.userNav} className="navbar-btn" onClick={handleClick}>
          My List
        </span>
      </nav>
    </header>
  );
}