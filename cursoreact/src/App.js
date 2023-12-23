import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images'

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
    </div>
  );
}

export default App;
