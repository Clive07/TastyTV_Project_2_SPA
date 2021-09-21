import React from "react";
import Button from "@mui/material/Button";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import ListIcon from "@mui/icons-material/List";
import HomeIcon from "@mui/icons-material/Home";
import "./header-display-styles.css";

export default function HeaderContainer(props) {
  //function that handles the clicking of navbar button
  function handleClick(newPage) {
    props.setPage(newPage);
  }

  return (
    //header container
    //holds the main-header and sub-title
    <header id="header">
      {/* main-header div, holds title and navbar */}
      <div id="main-header">
        <h1 id="title">TastyTV</h1>

        {/* navbar, contains home, movie, tv and user page buttons. material ui used for styles */}
        <nav id="navbar">
          <Button
            className="nav-button"
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => {
              handleClick("home");
            }}
          >
            Home
          </Button>
          <Button
            className="nav-button"
            variant="contained"
            startIcon={<MovieCreationIcon />}
            onClick={() => {
              handleClick("movies");
            }}
          >
            Movies
          </Button>
          <Button
            className="nav-button"
            variant="contained"
            startIcon={<TvIcon />}
            onClick={() => {
              handleClick("shows");
            }}
          >
            TV Shows
          </Button>
          <Button
            className="nav-button"
            variant="contained"
            startIcon={<ListIcon />}
            onClick={() => {
              handleClick("user");
            }}
          >
            My List
          </Button>
        </nav>
      </div>

      {/* styled spacial div */}
      <div id="space"></div>

      {/* sub-title */}
      <div id="sub-title">
        <h2>Welcome To Our Media Curation App</h2>
      </div>
    </header>
  );
}
