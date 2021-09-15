import "../../styles/header-styles.css";
import React from "react";

export default function HeaderContainer() {
  return (
    <header>
      <h1 id="title">TastyTV's App!</h1>
      <nav id="navbar">
        <span className="navbar-btn">Movies</span>
        <span className="navbar-btn">TV Shows</span>
        <span className="navbar-btn">My List</span>
      </nav>
    </header>
  );
}
