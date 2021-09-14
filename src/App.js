import HeaderContainer from "./Components/Header/HeaderContainerComponent";
import MainContainer from "./Components/Main/MainContainerComponent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>And So Our Story Begins!</h2>
      <HeaderContainer />
      <MainContainer />
    </div>
  );
}
