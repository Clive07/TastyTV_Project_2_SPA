/*eslint-disable */

import React, { useState } from "react";
import LandingPage from "./LandingComponent";
import UserListPage from "./UserPage/UserListContainerComponent";

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

  function onWatchChange(id) {
    let watchList = list;
    watchList[id].watched = !watchList[id].watched;

    return alterList([...watchList]);
  }

  return (
    <div>
      <h2>MainContainer</h2>

      {props.currentPage === props.pageName.moviePage ? (
        <LandingPage createUserList={starterList} />
      ) : props.currentPage === props.pageName.userPage ? (
        <UserListPage
          watchList={list}
          updateList={alterList}
          handleWatch={onWatchChange}
        />
      ) : (
        <LandingPage createUserList={starterList} />
      )}
    </div>
  );
}
