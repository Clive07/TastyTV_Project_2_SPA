import React from "react";

//importing components
import RatingDisplay from "./rating/RatingDisplay";
import WatchedDisplay from "./watched/WatchedDisplay";
import MyListOption from "./my-list-option/MyListOption";
import ReviewDisplay from "./review/ReviewDisplay";

export default function MediaDeviceInfo(props) {
  return (
    <section className="media-info">
      <h3>{props.name}</h3>
      <p>Released On: {props.releasedOn}</p>
      <WatchedDisplay
        id={props.id}
        watched={props.watched}
        setWatched={props.setWatched}
      />
      <RatingDisplay
        id={props.id}
        rating={props.rating}
        setRating={props.setRating}
      />
      <MyListOption
        id={props.id}
        onList={props.onList}
        setOnList={props.setOnList}
      />
      {/* review option. Wasn't able to make it work adequately. */}
      {/* <ReviewDisplay
        id={props.id}
        review={props.review}
        setReview={props.setReview}
      /> */}
    </section>
  );
}
