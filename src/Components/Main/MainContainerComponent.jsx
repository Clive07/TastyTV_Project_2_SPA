//disabling to remove issues with axios
/*eslint-disable */

//imports
import React, { useState } from "react";

//various pages/containers
import LandingPage from "./LandingComponent";
import UserListPage from "./UserPage/UserListContainerComponent";
import MoviePage from "./MoviePage/MovieContainer";
import TVPage from "./tvPage/TVContainer";

//main container
export default function MainContainer(props) {
  //creating a state using an array of objects. Each object is a media item.
  //initial value is an async axios promise. Returned empty array upon failure.
  const [list, setList] = useState(async () => {
    //client's dummy api url.
    const dummyAPI = "https://hub.dummyapis.com/vj/wzGUkpZ";

    //try to reach to out to the server and retrieve the media list.
    try {
      let starterListRetrieve = await axios.get(dummyAPI);

      //checks if retrieved array is valid. throws error if not.
      if (starterListRetrieve.data.Id === 1001) {
        throw new Error();
      }
      //if it is valid. setList to this valid array.
      else {
        let firstList = starterListRetrieve.data;

        return setList(firstList);
      }
    } catch (err) {
      //catch and potential error. log it and return and empty array for the starting List
      //catch an error
      console.log(`ERROR with dummy API`);
      console.log(err);

      return setList([]);
    }
  });

  //function to switch media item from watched to unwatched and vice versa.
  function hasWatchedChange(id) {
    //set a new var equal to the current list.
    let watchList = list;

    //adjust the watched property of the affected media item.
    watchList[id].watched = !watchList[id].watched;

    //reset the list with this updated version
    //importing to note due to the small change. MUST spread the new var to ensure a reRender
    return setList([...watchList]);
  }

  //What the component will actually display.
  return (
    <div>
      <h2>MainContainer</h2>

      {/* conditional rendering. Checks name of current page to the name of pages and display the matching page. */}
      {props.currentPage === props.pageName.moviePage ? (
        <MoviePage />
      ) : props.currentPage === props.pageName.tvPage ? (
        <TVPage />
      ) : props.currentPage === props.pageName.userPage ? (
        //User List Container. Has cust eles to show and update list, and to change watched property.
        <UserListPage
          watchList={list}
          updateList={setList}
          handleWatch={hasWatchedChange}
        />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
