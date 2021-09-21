import React, { useState } from "react";

//importing components
import MediaInfo from "./media-info/MediaInfo";

//importing stylesheet
import "./media-display-styles.css";

//function to display an individual media item.
//additional function to set if media info should be shown.
//reveal is toggled based on clicking of mediaDisplay
export default function MediaDisplay(props) {
  return (
    <section className="media-display">
      <div className="media-image">
        <img
          src={props.mediaImage}
          alt="gray box with name of media or poster of said media."
        />
      </div>
      <MediaInfo
        id={props.id}
        name={props.name}
        releasedOn={props.releasedOn}
        watched={props.watched}
        rating={props.rating}
        onList={props.onList}
        review={props.review}
        setWatched={props.setWatched}
        setRating={props.setRating}
        setOnList={props.setOnList}
        setReview={props.setReview}
      />
    </section>
  );
}
