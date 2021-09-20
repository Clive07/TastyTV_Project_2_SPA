/*eslint-disable */

import React from "react";

export default function TVPage() {
  const url = "https://api.tvmaze.com";
  let randomShow = Math.floor(Math.random() * 4 + 1);

  const featuredShow = async () => {
    try {
      let response = await axios.get(`${url}/shows/${randomShow}`);
      return response.data;
    } catch (e) {
      console.log(`"Search was not successful, error: ${e}"`);
    }
  };

  featuredShow().then((results) => {
    console.log(results);
  });

  return (
    <div>
      <h2>welcome to tv world</h2>
    </div>
  );
}
