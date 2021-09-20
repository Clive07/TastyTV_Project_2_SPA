import React, { useRef } from "react";
import "./landing-styles.css";
import UserListDisplay from "./UserListDisplayComponent";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function LandingPage(props) {
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <main id="home-container">
      <h3>Here is a carousel of your list</h3>

      <div className="wrapper">
        <div
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className="carousel-container" ref={listRef}>
          {props.userList.map((media, index) => {
            return (
              <UserListDisplay
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
            handleClick("right");
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </main>
  );
}
