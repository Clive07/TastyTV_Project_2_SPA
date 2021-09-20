//imports
import React from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { ButtonGroup } from "@mui/material";

export default function UserWatchList(props) {
  //handles clicking of the watched button & delete button
  function handleClick(event) {
    //calls function to switch watched property. Gives id as argue to determine which media item is being switched
    if (event.target.name === "watchBtn") {
      props.watchBtnClick(props.id);
    } else if (event.target.name === "deleteBtn") {
      props.deleteBtnClick(props.id);
    } else if (event.target.name === "like") {
      console.log("cheese");
    }
  }

  //handles event of like button being clicked
  function handleLike() {
    props.likeBtnClick(props.id);
  }

  function handleDislike() {
    props.dislikeBtnClick(props.id);
  }

  //disply of the media. Shows name, released date and if it has been watched.
  return (
    <section className="userList">
      <h2>{props.title}</h2>
      <p>Released On: {props.released}</p>
      {/* conditional rendering based on if the content has been watched or not. */}
      {props.watched === false ? (
        <div>
          <VisibilityOffIcon />
          <p>Not Watched</p>
          <button name="watchBtn" onClick={handleClick}>
            Watched
          </button>
        </div>
      ) : (
        <div>
          <VisibilityIcon />
          <p>Watched</p>
          <button name="watchBtn" onClick={handleClick}>
            Unwatch
          </button>
        </div>
      )}
      <Button
        name="deleteBtn"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleClick}
      >
        Remove
      </Button>

      {props.rating === undefined ? (
        <div>
          Your Rating:
          <ButtonGroup variant="outlined">
            <Button startIcon={<ThumbUpOffAltIcon />} onClick={handleLike} />
            <Button
              startIcon={<ThumbDownOffAltIcon />}
              onClick={handleDislike}
            />
          </ButtonGroup>
        </div>
      ) : props.rating === "liked" ? (
        <div>
          Your Rating:
          <ButtonGroup variant="outlined">
            <Button startIcon={<ThumbUpAltIcon />} onClick={handleLike} />
            <Button
              startIcon={<ThumbDownOffAltIcon />}
              onClick={handleDislike}
            />
          </ButtonGroup>
        </div>
      ) : props.rating === "disliked" ? (
        <div>
          Your Rating:
          <ButtonGroup variant="outlined">
            <Button startIcon={<ThumbUpOffAltIcon />} onClick={handleLike} />
            <Button startIcon={<ThumbDownAltIcon />} onClick={handleDislike} />
          </ButtonGroup>
        </div>
      ) : (
        <p>error with rating</p>
      )}
    </section>
  );
}
