//imports
import React, { useState } from "react";

//container components
import Header from "./Components/Header/HeaderContainer";
import MainContainer from "./Components/Main/MainContainerComponent";

//overall stylesheet
import "./styles/styles.css";

export default function App() {
  //declaring & initialising first page with useState.
  const [currentPage, setPage] = useState("land");

  //declaring names for each page
  const pages = {
    moviePage: "movieList",
    tvPage: "tvList",
    userPage: "userList"
  };

  //function to get and set the main content
  //called from child component HeaderContainer
  function switchPage(newPage) {
    setPage(newPage);
  }

  //rendering header & main containers
  return (
    //container for components
    <div className="App">
      {/* header, gains custom elements of function to switch page and the names of said pages*/}
      <Header
        movieNav={pages.moviePage}
        tvNav={pages.tvPage}
        userNav={pages.userPage}
        switchPage={switchPage}
      />
      {/*  */}
      <MainContainer pageName={pages} currentPage={currentPage} />
    </div>
  );
}
