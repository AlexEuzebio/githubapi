import Navbar from "components/Navbar";
import Home from "pages/Home";
import ProfileSearch from "pages/ProfileSearch";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/search">
        <ProfileSearch/>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes;