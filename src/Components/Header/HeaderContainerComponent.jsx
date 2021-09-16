import "../../styles/header-styles.css";
import React from "react";

export default function HeaderContainer(props) {
  function switchPage() {
    props.changePage("userList");
  }
  return (
    <header>
      <h1 id="title">TastyTV's App!</h1>
      <nav id="navbar">
        <span
          className="navbar-btn"
          onClick={() => {
            props.changePage("MovieList");
          }}
        >
          Movies
        </span>
        <span
          className="navbar-btn"
          onClick={() => {
            props.changePage("TVList");
          }}
        >
          TV Shows
        </span>
        <span
          className="navbar-btn"
          onClick={() => {
            props.changePage("userList");
          }}
        >
          My List
        </span>
      </nav>
    </header>
  );
}
