import React from "react";

export default function UserWatchList(props) {
  function haveWatched() {
    if (props.watched === false) {
      return "Not Watched";
    } else {
      return "Have Watched";
    }
  }
  return (
    <section className="userList">
      <h2>{props.title}</h2>
      <p>Released On: {props.released}</p>
      <p>{haveWatched()}</p>
    </section>
  );
}
