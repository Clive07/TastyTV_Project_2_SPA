import React, { useRef } from "react";
import "./landing-styles.css";
import ListDisplay from "../ListDisplayComponent";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

export default function LandingPage(props) {
  const listRef = useRef();
  const showRef = useRef();
  const movieRef = useRef();

  const handleClick = (listToMove, direction) => {
    let distance = listToMove.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listToMove.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right") {
      listToMove.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <main id="home-container">
      <h3>Here we have a brief overview of your list and ours.</h3>

      {/* wrapper for user list */}
      <div>
        <h3 className="carousel-title">Your List</h3>
        <div className="wrapper">
          <div
            className="sliderArrow left"
            onClick={() => {
              handleClick(listRef, "left");
            }}
          >
            <ArrowBackIosNewIcon />
          </div>
          <div id="user-carousel" className="carousel-container" ref={listRef}>
            {props.userList.length >= 5 ? (
              props.userList.map((media, index) => {
                return (
                  <ListDisplay
                    key={index}
                    id={index}
                    mediaImage={media.bannerUrl}
                    title={media.name}
                    releaseDate={media.releasedOn}
                    watched={media.watched}
                    handleWatch={props.handleWatch}
                    rating={media.rating}
                    handleLikeRating={props.handleLikeRating}
                    handleDislikeRating={props.handleDislikeRating}
                  />
                );
              })
            ) : (
              <Button
                id="initialButton"
                variant="contained"
                onClick={props.handleAdd}
              >
                Click Me To Get Started!
              </Button>
            )}
          </div>
          <div
            className="sliderArrow right"
            onClick={() => {
              handleClick(listRef, "right");
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      {/* wrapper for show list */}
      <div>
        <h3 className="carousel-title">TV Show List</h3>

        <div className="wrapper">
          <div
            className="sliderArrow left"
            onClick={() => {
              handleClick(showRef, "left");
            }}
          >
            <ArrowBackIosNewIcon />
          </div>
          <div id="show-carousel" className="carousel-container" ref={showRef}>
            {props.showList.map((media, index) => {
              return (
                <ListDisplay
                  key={index}
                  id={index}
                  mediaImage={media.bannerUrl}
                  title={media.name}
                  releaseDate={media.releasedOn}
                  watched={media.watched}
                  handleWatch={props.handleWatch}
                  rating={media.rating}
                  handleLikeRating={props.handleLikeRating}
                  handleDislikeRating={props.handleDislikeRating}
                />
              );
            })}
          </div>
          <div
            className="sliderArrow right"
            onClick={() => {
              handleClick(showRef, "right");
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      {/* wrapper for movie list */}
      <div>
        <h3 className="carousel-title">Movie List</h3>
        <div className="wrapper">
          <div
            className="sliderArrow left"
            onClick={() => {
              handleClick(movieRef, "left");
            }}
          >
            <ArrowBackIosNewIcon />
          </div>
          <div
            id="movie-carousel"
            className="carousel-container"
            ref={movieRef}
          >
            {props.movieList.map((media, index) => {
              return (
                <ListDisplay
                  key={index}
                  id={index}
                  mediaImage={media.bannerUrl}
                  title={media.name}
                  releaseDate={media.releasedOn}
                  watched={media.watched}
                  handleWatch={props.handleWatch}
                  rating={media.rating}
                  handleLikeRating={props.handleLikeRating}
                  handleDislikeRating={props.handleDislikeRating}
                />
              );
            })}
          </div>
          <div
            className="sliderArrow right"
            onClick={() => {
              handleClick(movieRef, "right");
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </main>
  );
}
