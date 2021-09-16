/*eslint-disable */

import React, { useState } from "react";
import LandingPage from "./LandingComponent";

export default function MainContainer() {
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
  return <LandingPage createUserList={starterList} userList={list} />;
}
