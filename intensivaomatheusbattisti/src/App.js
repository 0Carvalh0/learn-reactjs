import AnotherComponent from "./components/AnotherComponent";
import Container from "./components/Container";
import FirstComponent from "./components/FirstComponent";
import Fragment from "./components/Fragment";
import Hooks from "./components/Hooks";
import Images from "./components/Images";
import List from "./components/List";
import RenderCond from "./components/RenderCond";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={5} y={25} />
      <Fragment />
      <Container>
        <h1>Este é meu container com children</h1>
      </Container>
    </div>
  );
}

export default App;
