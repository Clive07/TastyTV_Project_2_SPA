import React from "react";
import UserWatchList from "./UserListComponent";

export default function UserListPage(props) {
  return (
    <main>
      <h1>UserListPage here</h1>
      {props.watchList.map((media, index) => {
        return (
          <UserWatchList
            key={index}
            title={media.name}
            released={media.releasedOn}
            watched={media.watched}
          />
        );
      })}
    </main>
  );
}
