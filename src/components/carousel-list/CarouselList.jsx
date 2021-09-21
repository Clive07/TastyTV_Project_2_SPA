//importing useRef
import React, { useRef } from "react";

//importing components
import MediaDisplay from "../media-display/MediaDisplay";

//importing arrows from material icons for style
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//importing stylesheet
import "./carousel-list-styles.css";

// function that displays a carousel like list.
// left and right arrows on the sides to move list based on being clicked
export default function CarouselList(props) {
  //reference to the specific carousel list
  const listRef = useRef(null);

  //function which makes the carousel if clicked to & if able.
  function handleClick(direction) {
    let distance = listRef.current.getBoundingClientRect().x - 100;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
    } else if (direction === "right") {
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
    }
  }

  //what component will actually display
  return (
    //container to hold the list
    <section className="list-container">
      {/* title of the list being shown. given by parent */}
      <h3 className="list-title">{props.listTitle}</h3>
      {/* wrapper container for the carousel */}
      <div className="wrapper">
        {/* left arrow to adjust view of list */}
        <div
          className="slider-arrow left-arrow"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowBackIosNewIcon />
        </div>
        {/* mapping of list to generate media displays for them */}
        <div ref={listRef} className="media-container">
          {props.list.map((media, index) => {
            return (
              //individual displays of media item.
              //gains name, image, release date, watched, rating, onList & review propery from parent.
              <MediaDisplay
                key={index}
                id={index}
                mediaImage={media.bannerUrl}
                name={media.name}
                releasedOn={media.releasedOn}
                watched={media.watched}
                reveal={media.reveal}
                rating={media.rating}
                review={media.review}
                onList={media.onList}
                setWatched={props.setWatched}
                setReview={props.setReview}
                setRating={props.setRating}
                setOnList={props.setOnList}
              />
            );
          })}
        </div>
        <div
          className="slider-arrow right-arrow"
          onClick={() => {
            handleClick("right");
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </section>
  );
}
