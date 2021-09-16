/*eslint-disable */

import React, { useState } from "react";
import LandingPage from "./LandingComponent";
import UserListPage from "./UserListContainerComponent";

export default function MainContainer(props) {
  const [list, alterList] = useState();

  async function starterList() {
    const dummyAPI = "https://hub.dummyapis.com/vj/wzGUkpZ";

    try {
      let starterListRetrieve = await axios.get(dummyAPI);

      let firstList = starterListRetrieve.data;

      alterList(firstList);
    } catch (err) {
      console.log(`ERROR with dummy API`);
      console.log(err);

      return null;
    }
  }

  return (
    <div>
      <h2>MainContainer</h2>

      {props.currentPage === "land" ? (
        <LandingPage createUserList={starterList} />
      ) : props.currentPage === "userList" ? (
        <UserListPage watchList={list} />
      ) : (
        <h3>nothing here</h3>
      )}
    </div>
  );
}
