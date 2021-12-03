import "./App.css";
import LeftMainCont from "./components/shop/LeftMainCont/LeftMainCont";
import RightMainCont from "./components/shop/RightMainCont/RightMainCont";
import Data from "./data";
import React, { useState } from "react";

function App() {
  let data = Data;
  const [current, setCurrent] = useState(data[0]);
  const [mobileModal, setMobileModal] = useState(false);

  function filterResults(id) {
    setCurrent(data.filter((shoe) => shoe.id === parseInt(id))[0]);
  }

  function onBackdropClick() {
    setMobileModal(false);
  }
  function onCardClick() {
    setMobileModal(true);
  }

  return (
    <div className="App">
      <LeftMainCont
        data={data}
        filter={filterResults}
        len={data.length}
        currentID={current.id}
        className="left"
        mobilePopUp={onCardClick}
      />
      {mobileModal && (
        <div className="mobileBackdrop" onClick={onBackdropClick}>
          {" "}
        </div>
      )}
      <RightMainCont
        selection={current}
        id="right-side"
        className={`right ${mobileModal ? "mobile-modal on" : ""}`}
      />
    </div>
  );
}

export default App;
