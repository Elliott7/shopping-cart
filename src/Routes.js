import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
