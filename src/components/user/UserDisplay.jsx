import React from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "./user-display-styles.css";

import CarouselList from "../carousel-list/CarouselList";

export default function UserDisplay(props) {
  //Delete ALL function. removes all items from the list.
  function handleClick(option) {
    if (option === "delete all") {
      props.removeAll();
    } else if (option === "remove watched") {
      props.removeWatched();
    }
  }

  return (
    <main>
      <section className="user-page-title">
        <h2>Here is Your Selection!</h2>
        <ButtonGroup>
          <Button
            startIcon={<DeleteForeverIcon />}
            onClick={() => {
              handleClick("delete all");
            }}
          >
            Remove All Media From List
          </Button>
          <Button
            onClick={() => {
              handleClick("remove watched");
            }}
          >
            Remove Watched Media From List
          </Button>
        </ButtonGroup>
      </section>
      {/* user list carousel */}
      <CarouselList
        listTitle="Your Overall List"
        list={props.userList}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />

      {/* user show list carousel */}
      <CarouselList
        listTitle="Your TV Shows"
        list={props.userList.filter((media) => {
          return media.type === "show";
        })}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />

      {/* user movie list carousel */}
      <CarouselList
        listTitle="Your Movie List"
        list={props.userList.filter((media) => {
          return media.type === "movie";
        })}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />
    </main>
  );
}
