import "../../styles/header-styles.css";
import React from "react";
import Button from "@mui/material/Button";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import ListIcon from "@mui/icons-material/List";
import HomeIcon from "@mui/icons-material/Home";

export default function HeaderContainer(props) {
  function handleClick(event) {
    console.log(event.target.name);
    props.switchPage(event.target.name);
  }

  return (
    <header id="header">
      <h1 id="title">TastyTV</h1>

      <nav id="navbar">
        <Button
          name={props.navButtons.homePage}
          className="navButton"
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={handleClick}
        >
          Home
        </Button>
        <Button
          name={props.navButtons.moviePage}
          className="navButton"
          variant="contained"
          startIcon={<MovieCreationIcon />}
          onClick={handleClick}
        >
          Movies
        </Button>
        <Button
          name={props.navButtons.tvPage}
          className="navButton"
          variant="contained"
          startIcon={<TvIcon />}
          onClick={handleClick}
        >
          TV Shows
        </Button>
        <Button
          name={props.navButtons.userPage}
          className="navButton"
          variant="contained"
          startIcon={<ListIcon />}
          onClick={handleClick}
        >
          My List
        </Button>
      </nav>
    </header>
  );
}
