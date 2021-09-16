import React from "react";

export default class LandingPage extends React.Component {
  componentDidMount() {
    this.props.createUserList();
  }
  render() {
    return (
      <main>
        <h2>Welcome To Our Wonderful World!</h2>
      </main>
    );
  }
}
