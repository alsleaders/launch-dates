import outlineShip from "./outlineShip.svg";
import spaceShip from "./spaceShip.svg";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./App.css";
import { DatePicker } from "./components/DatePicker";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={spaceShip} className="App-logo" alt="logo" /> */}
        <DatePicker />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
