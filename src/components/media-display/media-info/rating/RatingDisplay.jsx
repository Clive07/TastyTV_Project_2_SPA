import React from "react";

//importing materials for style
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import {
  ThumbUp,
  ThumbUpOffAlt,
  ThumbDown,
  ThumbDownOffAlt
} from "@mui/icons-material";

//function which checks what the rating is and displays it.
//also has additional function of toggling the rating based on click.
export default function RatingDisplay(props) {
  function handleClick(option) {
    if (option === "like") {
      props.setRating(props.id, "liked");
    } else if (option === "dislike") {
      props.setRating(props.id, "disliked");
    }
  }
  return (
    <section className="rating-display">
      {props.rating === "liked" ? (
        <ButtonGroup variant="contained">
          <Button
            startIcon={<ThumbUp />}
            onClick={() => {
              handleClick("like");
            }}
          />
          <Button
            startIcon={<ThumbDownOffAlt />}
            onClick={() => {
              handleClick("dislike");
            }}
          />
        </ButtonGroup>
      ) : props.rating === "disliked" ? (
        <ButtonGroup variant="contained">
          <Button
            startIcon={<ThumbUpOffAlt />}
            onClick={() => {
              handleClick("like");
            }}
          />
          <Button
            startIcon={<ThumbDown />}
            onClick={() => {
              handleClick("dislike");
            }}
          />
        </ButtonGroup>
      ) : (
        <ButtonGroup variant="contained">
          <Button
            startIcon={<ThumbUpOffAlt />}
            onClick={() => {
              handleClick("like");
            }}
          />
          <Button
            startIcon={<ThumbDownOffAlt />}
            onClick={() => {
              handleClick("dislike");
            }}
          />
        </ButtonGroup>
      )}
    </section>
  );
}
