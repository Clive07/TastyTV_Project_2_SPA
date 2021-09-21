import React from "react";

import "./movie-display-styles.css";

import CarouselList from "../carousel-list/CarouselList";

export default function MovieDisplay(props) {
  return (
    <main>
      <h2 className="movie-page-title">Here is our Movie Selection!</h2>
      {/* movie list carousel */}
      <CarouselList
        listTitle="Movies"
        list={props.mediaList.filter((media) => {
          return media.type === "movie";
        })}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />
    </main>
  );
}
