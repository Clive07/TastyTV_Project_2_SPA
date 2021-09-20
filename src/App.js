//imports
import React, { useState } from "react";

//container components
import Header from "./components/header/HeaderContainer";
import MainContainer from "./components/main/MainContainerComponent";

//overall stylesheet
import "./styles/styles.css";

export default function App() {
  //declaring & initialising first page with useState.
  const [currentPage, setPage] = useState("");

  //declaring names for each page
  const pages = {
    homePage: "home",
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
      <Header navButtons={pages} switchPage={switchPage} />
      {/*  gains cust eles of current page and page names to conditionally render one. */}
      <MainContainer pageName={pages} currentPage={currentPage} />
    </div>
  );
}
