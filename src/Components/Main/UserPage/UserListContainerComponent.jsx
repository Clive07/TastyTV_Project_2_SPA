//imports
import React from "react";

//user list display component
import UserWatchList from "./UserListComponent";

export default function UserListPage(props) {
  return (
    <main>
      <h1>UserListPage here</h1>
      {/* mapping the array to display each media content with the same component */}
      {props.watchList.map((media, index) => {
        return (
          <UserWatchList
            key={index}
            id={index}
            title={media.name}
            released={media.releasedOn}
            watched={media.watched}
            watchBtnClick={props.handleWatch}
          />
        );
      })}
    </main>
  );
}
