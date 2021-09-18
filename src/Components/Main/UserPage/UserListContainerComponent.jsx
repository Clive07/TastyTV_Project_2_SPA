//imports
import React from "react";

//user list display component
import UserWatchList from "./UserListComponent";

export default function UserListPage(props) {
  return (
    <main>
      <div>
        <h1>UserListPage here</h1>
        {/* singular buttons to remove all watched items or every single item */}
        <button onClick={props.handleDeleteAll}>Remove Everything</button>
        <button onClick={props.handleRemoveWatched}>
          Remove Watched Items
        </button>
      </div>
      {/* mapping the array to display each media content with the same component */}
      {/* has cust elements to react to buttons being clicked. */}
      {props.watchList.map((media, index) => {
        return (
          <UserWatchList
            key={index}
            id={index}
            title={media.name}
            released={media.releasedOn}
            watched={media.watched}
            rating={media.rating}
            watchBtnClick={props.handleWatch}
            deleteBtnClick={props.handleDelete}
            likeBtnClick={props.handleLikeRating}
            dislikeBtnClick={props.handleDislikeRating}
          />
        );
      })}
    </main>
  );
}
