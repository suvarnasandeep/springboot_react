import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={ListEmployee} exact></Route>
            <Route path="/add-employee" component={AddEmployee} exact></Route>
            <Route
              path="/edit-employee/:id"
              component={AddEmployee}
              exact
            ></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
