import React from "react";

export default class LandingPage extends React.Component {
  componentDidMount() {
    this.props.createUserList();

    console.log(this.props.userList[0].name);
  }
  render() {
    return (
      <main>
        <h2>Welcome To Our Wonderful World!</h2>
      </main>
    );
  }
}
