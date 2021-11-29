import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import MatchPage from "./pages/MatchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName" exact>
            <TeamPage />
          </Route>
          <Route path="/teams/:teamName/matches/:year" exact>
            <MatchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;