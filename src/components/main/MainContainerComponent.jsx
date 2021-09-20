//disabling to remove issues with axios
/*eslint-disable */

//main container. Displays one of the various pages for the app based on conditional rendering.
//holds the state for the user's list of media.
//source of truth for various functions

//imports
import React, { useState } from "react";

//various pages/containers
import LandingPage from "./home-page/LandingComponent";
import UserListPage from "./UserPage/UserListContainerComponent";
import MoviePage from "./MoviePage/MovieContainer";
import TVPage from "./tvPage/TVContainer";

//main container
export default function MainContainer(props) {
  //var's for better bannerURL for List
  const url = "https://hub.dummyapis.com/Image?";
  const imageSize = "height=250&width=150";

  //creating small array of tvShows
  const tvShows = [
    {
      id: "T1",
      name: "Scrubs",
      releasedOn: "01/01/1999",
      watched: false,
      bannerUrl: `${url}text=Scrubs&${imageSize}`
    },
    {
      id: "T2",
      name: "How I Met Yo Momma",
      releasedOn: "02/02/2002",
      watched: false,
      bannerUrl: `${url}text=How-I-Met-Momma&${imageSize}`
    },
    {
      id: "T3",
      name: "Doom Patrol",
      releasedOn: "07/11/2010",
      watched: false,
      bannerUrl: `${url}text=Doom-Patrol&${imageSize}`
    },
    {
      id: "T4",
      name: "Archer",
      releasedOn: "01/01/2007",
      watched: false,
      bannerUrl: `${url}text=Archer&${imageSize}`
    }
  ];

  //creating small movie array
  const movies = [
    {
      id: "M1",
      name: "Blade Runner",
      releasedOn: "18/04/1989",
      watched: false,
      bannerUrl: `${url}text=Blade-Runner&${imageSize}`
    },
    {
      id: "M2",
      name: "Pirates of The Caribean",
      releasedOn: "23/07/2003",
      watched: false,
      bannerUrl: `${url}text=Pirates&${imageSize}`
    },
    {
      id: "M3",
      name: "The Incredibles",
      releasedOn: "07/04/2007",
      watched: false,
      bannerUrl: `${url}text=Incredibles&${imageSize}`
    },
    {
      id: "M4",
      name: "Blade",
      releasedOn: "01/01/2001",
      watched: false,
      bannerUrl: `${url}text=Blade&${imageSize}`
    }
  ];

  //creating a state to hold  an array of objects. Each object is a media item.
  const [list, setList] = useState([
    {
      name: "Clive",
      releasedOn: "16/07/1995",
      watched: false,
      bannerUrl: `${url}text=Clive&${imageSize}`
    }
  ]);

  //function to acquire list for user
  const fillList = async () => {
    //client's dummy api url.
    const dummyAPI = "https://hub.dummyapis.com/vj/wzGUkpZ";

    //try to get list from api server
    try {
      let ListRetrieve = await axios.get(dummyAPI);

      //checks if retrieved array is valid. throws error if not.
      if (ListRetrieve.data.Id === 1001) {
        throw new Error();
      }
      //if it is valid. fix dummy bannerurl property
      else {
        let rawList = ListRetrieve.data;

        let preparedList = rawList.map((media) => {
          media.bannerUrl = `${url}text=${media.name}&${imageSize}`;
          return media;
        });

        return setList((prevList) => {
          return [...prevList, ...preparedList];
        });
      }
    } catch (err) {
      //catch and potential error. log it and return and empty array for the starting List
      //catch an error
      console.log(`ERROR with dummy API`);
      console.log(err);

      return setList((prevList) => {
        return [...prevList];
      });
    }
  };

  //function to switch media item from watched to unwatched and vice versa.
  function onWatchToggle(id) {
    //set a new var equal to the current list.
    let watchList = list;

    //adjust the watched property of the affected media item.
    watchList[id].watched = !watchList[id].watched;

    //reset the list with this updated version
    //importing to note due to the small change. MUST spread the new var to ensure a reRender
    return setList([...watchList]);
  }

  //Delete function. identifies specific media with id and removes it from list.
  function onDelete(id) {
    setList((prevList) => {
      return prevList.filter((media, index) => {
        return index !== id;
      });
    });
  }

  //Delete ALL function. removes all items from the list.
  function onDeleteAll() {
    setList([]);
  }

  //Watched removal function. Filters through list removing any with watched bool prop === true
  function onRemoveWatched() {
    setList((prevList) => {
      return prevList.filter((media) => {
        return media.watched !== true;
      });
    });
  }

  //function setting media rating to liked
  function onLikeRating(id) {
    setList((prevList) => {
      prevList[id].rating = "liked";
      return [...prevList];
    });
  }

  //function setting media rating to dislike
  function onDislikeRating(id) {
    setList((prevList) => {
      prevList[id].rating = "disliked";
      return [...prevList];
    });
  }

  //What the component will actually display.
  return (
    <div>
      {/* conditional rendering. Checks name of current page to the name of pages and display the matching page. */}
      {props.currentPage === props.pageName.moviePage ? (
        <MoviePage />
      ) : props.currentPage === props.pageName.tvPage ? (
        <TVPage />
      ) : props.currentPage === props.pageName.userPage ? (
        //User List Container. Has cust eles to show and update list, and to change watched property.
        //and to handle removing items from list based off clicking buttons
        <UserListPage
          watchList={list}
          updateList={setList}
          handleAdd={fillList}
          handleWatch={onWatchToggle}
          handleDelete={onDelete}
          handleDeleteAll={onDeleteAll}
          handleRemoveWatched={onRemoveWatched}
          handleLikeRating={onLikeRating}
          handleDislikeRating={onDislikeRating}
        />
      ) : (
        <LandingPage
          userList={list}
          showList={tvShows}
          movieList={movies}
          handleAdd={fillList}
          handleLikeRating={onLikeRating}
          handleDislikeRating={onDislikeRating}
          handleWatch={onWatchToggle}
        />
      )}
    </div>
  );
}
