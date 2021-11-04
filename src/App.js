import "./App.css";
import LeftMainCont from "./components/shop/LeftMainCont/LeftMainCont";
import RightMainCont from "./components/shop/RightMainCont/RightMainCont";
import Data from "./data";
import { useState } from "react";

function App() {
  let data = Data;
  const [current, setCurrent] = useState(data[0]);

  function filterResults(id) {
    setCurrent(data.filter((shoe) => shoe.id == id)[0]);
  }
  return (
    <div className="App">
      <LeftMainCont
        data={data}
        filter={filterResults}
        len={data.length}
        currentID={current.id}
        className="left"
      />
      <RightMainCont selection={current} className="right" />
    </div>
  );
}

export default App;
