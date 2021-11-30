import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Inprogress from "./Inprogress";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={App} />
        <Route exact path="/women" component={Inprogress} />
        <Route exact path="/kids" component={Inprogress} />
        <Route exact path="/custom" component={Inprogress} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
