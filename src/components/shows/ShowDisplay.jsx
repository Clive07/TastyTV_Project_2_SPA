import React from "react";

import "./show-display-styles.css";

import CarouselList from "../carousel-list/CarouselList";

export default function ShowDisplay(props) {
  return (
    <main>
      <h2 className="show-page-title">Here is our TV Show Selection!</h2>
      {/* tv list carousel */}
      <CarouselList
        listTitle="TV Shows"
        list={props.mediaList.filter((media) => {
          return media.type === "show";
        })}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />
    </main>
  );
}
