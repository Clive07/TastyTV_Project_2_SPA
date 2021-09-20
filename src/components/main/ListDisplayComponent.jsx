import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ButtonGroup } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Button from "@mui/material/Button";

export default function UserListDisplay(props) {
  function onWatchClick() {
    props.handleWatch(props.id);
  }

  //handles event of like button being clicked
  function handleLike() {
    props.handleLikeRating(props.id);
  }

  function handleDislike() {
    props.handleDislikeRating(props.id);
  }

  return (
    <div className="mediaDisplay">
      <details>
        <summary>
          <img
            src={props.mediaImage}
            alt="gray box with name of media content"
          />
        </summary>
        <div className="mediaInformation">
          <h3>{props.title}</h3>
          <p>Released On: {props.releaseDate}</p>
          {/* conditional rendering based on if the content has been watched or not. */}
          {props.watched === false ? (
            <Button startIcon={<VisibilityOffIcon />} onClick={onWatchClick}>
              Not Watched
            </Button>
          ) : (
            <Button startIcon={<VisibilityIcon />} onClick={onWatchClick}>
              Watched
            </Button>
          )}

          {props.rating === "liked" ? (
            <ButtonGroup variant="outlined">
              <Button startIcon={<ThumbUpAltIcon />} onClick={handleLike} />
              <Button
                startIcon={<ThumbDownOffAltIcon />}
                onClick={handleDislike}
              />
            </ButtonGroup>
          ) : props.rating === "disliked" ? (
            <ButtonGroup variant="outlined">
              <Button startIcon={<ThumbUpOffAltIcon />} onClick={handleLike} />
              <Button
                startIcon={<ThumbDownAltIcon />}
                onClick={handleDislike}
              />
            </ButtonGroup>
          ) : (
            <ButtonGroup variant="outlined">
              <Button startIcon={<ThumbUpOffAltIcon />} onClick={handleLike} />
              <Button
                startIcon={<ThumbDownOffAltIcon />}
                onClick={handleDislike}
              />
            </ButtonGroup>
          )}
        </div>
      </details>
    </div>
  );
}
