/*eslint-disable*/

import React, { useState, useEffect } from "react";

//importing components
import HeaderDisplay from "../header/HeaderDisplay";
import HomeDisplay from "../home/HomeDisplay";
import LandedDisplay from "../landed/LandedDisplay";
import FooterDisplay from "../footer/FooterDisplay";
import MovieDisplay from "../movies/MovieDisplay";
import ShowDisplay from "../shows/ShowDisplay";
import UserDisplay from "../user/UserDisplay";

/*screen component
displays the 
          - landing page initially

          - header
          - home page after entering
          - footer
          
          also holds the react states & the functions to adjust said states*/
export default function TastyScreen() {
  //client's Dummy API
  //We call this with axios to get list
  const dummyAPI = "https://hub.dummyapis.com/vj/wzGUkpZ";

  //image sizing for media
  const url = "https://hub.dummyapis.com/Image?";
  const imageSize = "height=150&width=150";

  //setting page with useState
  const [page, setPage] = useState("landed");

  //setting userList to empty array
  const [userList, setUserList] = useState([]);

  //setting media list as an empty array
  const [mediaList, setMediaList] = useState([]);

  //async function to fill up Media List & user list
  //called several times using useEffect
  const getMediaContent = async (type, onUserList) => {
    //try to get list from api server
    try {
      let listRetrieval = await axios.get(dummyAPI);

      //checks if retrieved array is valid. throws error if not.
      if (listRetrieval.data.Id === 1001) {
        throw new Error(console.log("issue with dummyAPI"));
      }
      //if it is valid. fix dummy bannerurl property &
      //add rating property.
      //add reveal property.
      //add review property.
      //add onList property.
      //add type property
      else {
        let rawList = listRetrieval.data;

        let preparedList = rawList.map((media, index) => {
          media.id = index;
          media.bannerUrl = `${url}text=${media.name}&${imageSize}`;
          media.rating = "";
          media.review = "";
          media.onList = onUserList;
          media.type = type;
          return media;
        });

        let newUserList = preparedList.filter((media) => {
          return media.onList === true;
        });

        setUserList((prevList) => {
          return [...prevList, ...newUserList];
        });
        return setMediaList((prevList) => {
          return [...prevList, ...preparedList];
        });
      }
    } catch (err) {
      //catch and potential error. log it and return and empty array for the starting List
      //catch an error
      console.log(`ERROR with dummy API`);
      console.log(err);

      setUserList((prevList) => {
        return [...prevList];
      });

      return setMediaList((prevList) => {
        return [...prevList];
      });
    }
  };

  //use effect function that on mount & only on mount calls the get media content async func
  useEffect(() => {
    getMediaContent("movie", true);
    getMediaContent("show", true);
    getMediaContent("movie", false);
    getMediaContent("show", false);
  }, []);

  //function to switch media item from watched to unwatched and vice versa.
  function onWatchToggle(id, bool) {
    setMediaList((prevList) => {
      prevList[id].watched = bool;
      return [...prevList];
    });

    let newUserList = mediaList.filter((media) => {
      return media.onList === true;
    });

    setUserList([...newUserList]);
  }

  //function to set the rating for an individual media
  function onRatingToggle(id, newRating) {
    setMediaList((prevList) => {
      prevList[id].rating = newRating;
      return [...prevList];
    });

    let newUserList = mediaList.filter((media) => {
      return media.onList === true;
    });

    setUserList([...newUserList]);
  }

  //function to set if individual media is on user's list
  function onUserListToggle(id, bool) {
    setMediaList((prevList) => {
      prevList[id].onList = bool;
      return [...prevList];
    });
    let newUserList = mediaList.filter((media) => {
      return media.onList === true;
    });

    setUserList([...newUserList]);
  }

  //function to save new review for individual media
  function onReviewToggle(id, newReview) {
    setMediaList((prevList) => {
      prevList[id].review = newReview;
      return [...prevList];
    });

    let newUserList = mediaList.filter((media) => {
      return media.onList === true;
    });

    setUserList([...newUserList]);
  }

  //function to remove all media from list which is watched
  function onWatchedRemoval() {
    let newMedia = mediaList.map((media) => {
      if (media.onList === true && media.watched === true) {
        media.onList = false;
      }
      return media;
    });

    setMediaList([...newMedia]);

    let newUserList = mediaList.filter((media) => {
      return media.onList === true;
    });

    setUserList([...newUserList]);
  }

  //function to remove all media from user list
  function onRemoveAll() {
    let removedAll = mediaList.map((media) => {
      media.onList = false;
      return media;
    });

    setMediaList([...removedAll]);

    let newUserList = mediaList.filter((media) => {
      return media.onList === true;
    });

    setUserList([...newUserList]);
  }

  return (
    <div>
      {page === "landed" ? (
        <LandedDisplay setPage={setPage} />
      ) : page === "home" ? (
        <div>
          <HeaderDisplay setPage={setPage} />
          <HomeDisplay
            userList={userList}
            mediaList={mediaList}
            setWatched={onWatchToggle}
            setReview={onReviewToggle}
            setRating={onRatingToggle}
            setOnList={onUserListToggle}
          />
          <FooterDisplay />
        </div>
      ) : page === "user" ? (
        <div>
          <HeaderDisplay setPage={setPage} />
          <UserDisplay
            userList={userList}
            removeWatched={onWatchedRemoval}
            removeAll={onRemoveAll}
            setWatched={onWatchToggle}
            setReview={onReviewToggle}
            setRating={onRatingToggle}
            setOnList={onUserListToggle}
          />
          <FooterDisplay />
        </div>
      ) : page === "shows" ? (
        <div>
          <HeaderDisplay setPage={setPage} />
          <ShowDisplay
            mediaList={mediaList}
            setWatched={onWatchToggle}
            setReview={onReviewToggle}
            setRating={onRatingToggle}
            setOnList={onUserListToggle}
          />
          <FooterDisplay />
        </div>
      ) : page === "movies" ? (
        <div>
          <HeaderDisplay setPage={setPage} />
          <MovieDisplay
            mediaList={mediaList}
            setWatched={onWatchToggle}
            setReview={onReviewToggle}
            setRating={onRatingToggle}
            setOnList={onUserListToggle}
          />
          <FooterDisplay />
        </div>
      ) : (
        <h3>Nothing to Display here</h3>
      )}
    </div>
  );
}
