import React from "react";

export default function UserWatchList(props) {
  function handleClick() {
    props.watchBtnClick(props.id);
  }

  return (
    <section className="userList">
      <h2>{props.title}</h2>
      <p>Released On: {props.released}</p>
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
