import './App.css';
import LeftMainCont from "./components/shop/LeftMainCont/LeftMainCont";
import RightMainCont from "./components/shop/RightMainCont/RightMainCont";

function App() {
  return (
    <div className="App">
        <LeftMainCont className="left"/>
        <RightMainCont className="right"/>
    </div>
  );
}

export default App;
