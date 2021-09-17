//imports
import React from "react";

export default function UserWatchList(props) {
  //handles clicking of the watched button
  function handleClick() {
    //calls function to switch watched property. Gives id as argue to determine which media item is being switched
    props.watchBtnClick(props.id);
  }

  //disply of the media. Shows name, released date and if it has been watched.
  return (
    <section className="userList">
      <h2>{props.title}</h2>
      <p>Released On: {props.released}</p>
      {/* conditional rendering based on if the content has been watched or not. */}
      {props.watched === false ? (
        <div>
          <p>Not Watched</p> <button onClick={handleClick}>Watched</button>
        </div>
      ) : (
        <div>
          <p>Watched</p> <button onClick={handleClick}>Unwatch</button>
        </div>
      )}
    </section>
  );
}
