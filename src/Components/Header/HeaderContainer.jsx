import "../../styles/header-styles.css";
import React from "react";

export default function HeaderContainer(props) {
  function handleClick(event) {
    console.log(event.target.id);
    props.switchPage(event.target.id);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h1 id="title">TastyTV's App!</h1>
        </div>
        <div className="col-md-9">
          <nav id="navbar">
            <span
              id={props.navButtons.moviePage}
              className="navbar-btn"
              onClick={handleClick}
            >
              Movies
            </span>
            <span
              id={props.navButtons.tvPage}
              className="navbar-btn"
              onClick={handleClick}
            >
              TV Shows
            </span>
            <span
              id={props.navButtons.userPage}
              className="btn btn-info"
              onClick={handleClick}
            >
              My List
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
