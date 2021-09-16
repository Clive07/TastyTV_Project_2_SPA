/*eslint-disable */

import React, { useState } from "react";
import LandingPage from "./LandingComponent";
import UserListPage from "./UserPage/UserListContainerComponent";
import MoviePage from "./MoviePage/MovieContainer";
import TVPage from "./tvPage/TVContainer";

export default function MainContainer(props) {
  const [list, setList] = useState(async () => {
    const dummyAPI = "https://hub.dummyapis.com/vj/wzGUkpZ";

    try {
      let starterListRetrieve = await axios.get(dummyAPI);

      let firstList = starterListRetrieve.data;

      return setList(firstList);
    } catch (err) {
      console.log(`ERROR with dummy API`);
      console.log(err);

      return [];
    }
  });

  function onWatchChange(id) {
    let watchList = list;
    watchList[id].watched = !watchList[id].watched;

    return setList([...watchList]);
  }

  return (
    <div>
      <h2>MainContainer</h2>

      {props.currentPage === props.pageName.moviePage ? (
        <MoviePage />
      ) : props.currentPage === props.pageName.tvPage ? (
        <TVPage />
      ) : props.currentPage === props.pageName.userPage ? (
        <UserListPage
          watchList={list}
          updateList={setList}
          handleWatch={onWatchChange}
        />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
