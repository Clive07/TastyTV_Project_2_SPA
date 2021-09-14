import React from "react";

export default class LandingPage extends React.Component {
  componentDidMount() {
    console.log("We are ready to begin initialising list");
  }
  render() {
    return (
      <main>
        <h2>Welcome To Our Wonderful World!</h2>
      </main>
    );
  }
}
