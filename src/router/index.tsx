import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Search, Result } from "../pages";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
