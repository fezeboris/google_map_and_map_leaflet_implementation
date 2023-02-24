import logo from "./logo.svg";
import "./App.css";

import MyMap from "./MyMap";
import { LeafletMap } from "./LeafletMap";

function App() {
  return (
    <div className="App">
      <MyMap />
      {/* <LeafletMap /> */}
    </div>
  );
}

export default App;
