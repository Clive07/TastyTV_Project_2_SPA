import React, { useState } from "react";

//importing button from icons material ui for style
import { Button } from "@mui/material";

//function that displays the users review for media if any.
//additional function to edit this review.
export default function ReviewDisplay(props) {
  //setting var so review cannot be altered initially.
  const [editable, setEditable] = useState("false");

  //setting up var to hold new Review
  const [review, setReview] = useState("");

  //function to handle change of review.
  //updates a var ready to be used as review.
  function handleChange(event) {
    console.log(event.target.value);
    setReview(event.target.value);
  }

  //function to handle clicking the edit button
  //if button is on edit then set text area to be editable
  //if button is on save then useState to update list item with new review
  function handleClick(option) {
    console.log(review);
    if (option === "edit") {
      setEditable("true");
    } else if (option === "save") {
      setEditable("false");
      props.setReview(props.id, review);
    }
  }

  return (
    <section className="review">
      <textarea
        cols="30"
        rows="10"
        placeholder="leave a review here!"
        contentEditable="false"
        onChange={handleChange}
      >
        {props.review}
      </textarea>
      {editable === "false" ? (
        <Button
          variant="contained"
          onClick={() => {
            handleClick("edit");
          }}
        >
          Give or Edit Review!
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            handleClick("save");
          }}
        >
          Save Review
        </Button>
      )}
    </section>
  );
}
