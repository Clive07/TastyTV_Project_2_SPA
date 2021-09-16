import React, { useState } from "react";

import HeaderContainer from "./Components/Header/HeaderContainerComponent";
import MainContainer from "./Components/Main/MainContainerComponent";
import "./styles/styles.css";

export default function App() {
  const [page, changePage] = useState("land");

  return (
    <div className="App">
      <HeaderContainer changePage={changePage} />
      <MainContainer currentPage={page} />
    </div>
  );
}
