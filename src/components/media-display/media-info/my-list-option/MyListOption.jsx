import { Button } from "@mui/material";
import React from "react";

//function to check if media is on user's list and display accordingly
//additional function that can add or remove media from user list
export default function MyListOption(props) {
  function handleClick(option) {
    if (option === "remove") {
      props.setOnList(props.id, false);
    } else if (option === "add") {
      props.setOnList(props.id, true);
    }
  }

  return (
    <section className="my-list-option">
      {props.onList === true ? (
        <Button
          variant="contained"
          onClick={() => {
            handleClick("remove");
          }}
        >
          Remove from List
        </Button>
      ) : props.onList === false ? (
        <Button
          variant="contained"
          onClick={() => {
            handleClick("add");
          }}
        >
          Add to List
        </Button>
      ) : (
        <h3>Error with My List Option Button</h3>
      )}
    </section>
  );
}
