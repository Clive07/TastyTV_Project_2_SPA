//imports
import React from "react";

export default function UserWatchList(props) {
  //handles clicking of the watched button & delete button
  function handleClick(event) {
    //calls function to switch watched property. Gives id as argue to determine which media item is being switched
    if (event.target.name === "watchBtn") {
      props.watchBtnClick(props.id);
    } else if (event.target.name === "deleteBtn") {
      props.deleteBtnClick(props.id);
    }
  }

  //disply of the media. Shows name, released date and if it has been watched.
  return (
    <section className="userList">
      <h2>{props.title}</h2>
      <p>Released On: {props.released}</p>
      {/* conditional rendering based on if the content has been watched or not. */}
      {props.watched === false ? (
        <div>
          <p>Not Watched</p>{" "}
          <button name="watchBtn" onClick={handleClick}>
            Watched
          </button>
        </div>
      ) : (
        <div>
          <p>Watched</p>{" "}
          <button name="watchBtn" onClick={handleClick}>
            Unwatch
          </button>
        </div>
      )}
      <button name="deleteBtn" onClick={handleClick}>
        Remove
      </button>
    </section>
  );
}
