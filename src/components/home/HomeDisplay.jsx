import React from "react";

//importing components
import CarouselList from "../carousel-list/CarouselList";

//importing stylesheet
import "./home-styles.css";

//function to display the home page content.
/*content includes 3 carousels.
  sub title stating they have populated the list to start user off
    - user's list
    - tv show list
    - movie list
  */
export default function HomeDisplay(props) {
  return (
    <main className="home">
      <h3 className="section-title">
        Welcome to the App! We've taken the liberty of populating your list to
        get you started!
      </h3>
      {/* user list carousel */}
      <CarouselList
        listTitle="Your List"
        list={props.userList}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />

      {/* tv list carousel */}
      <h3 className="section-title">TV All Day!</h3>
      <CarouselList
        listTitle="TV Shows"
        list={props.mediaList.filter((media) => {
          return media.type === "show";
        })}
        setWatched={props.setWatched}
        setReview={props.setReview}
        setRating={props.setRating}
        setOnList={props.setOnList}
      />

      {/* movie list carousel */}
      <h3 className="section-title">A Movie Fan Are We?</h3>
      <CarouselList
        listTitle="Movies"
        list={props.mediaList.filter((media) => {
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
