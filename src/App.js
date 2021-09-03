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
      </div>
      <Footer />
    </div>
  );
}

export default App;
