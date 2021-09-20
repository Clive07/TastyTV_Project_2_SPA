//imports
import React from "react";

//user list display component
import UserWatchList from "./UserListComponent";
import { Button, ButtonGroup } from "@mui/material";

export default function UserListPage(props) {
  console.log(props.watchList);
  return (
    <main>
      <div>
        <h1>UserListPage here</h1>
        <ButtonGroup variant="contained">
          <Button onClick={props.handleAdd}>
            Add Random Media To Your List
          </Button>
          {/* singular buttons to remove all watched items or every single item */}
          <Button onClick={props.handleDeleteAll}>
            Remove All Media From List
          </Button>
          <Button onClick={props.handleRemoveWatched}>
            Remove All Watched Media
          </Button>
        </ButtonGroup>
      </div>
      {/* mapping the array to display each media content with the same component */}
      {/* has cust elements to react to buttons being clicked. */}
      {props.watchList === undefined ? (
        <div>
          <h3>No Media Here Mi'Lord</h3>
        </div>
      ) : (
        props.watchList.map((media, index) => {
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
        })
      )}
    </main>
  );
}
