import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterComonent from "./components/FooterComonent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import AddAndUpdateEmployeeCombined from "./components/AddAndUpdateEmployeeCombined";
import ViewEmployeeComponents from "./components/ViewEmployeeComponents";

function App() {
  return (
    <>
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" component={ListEmployeeComponent} exact></Route>
              {/*  separate component to add and update
              <Route path="/add-employee" component={AddEmployee} exact></Route>
              <Route
                path="/update-employee/:id"
                component={UpdateEmployee}
                exact
              ></Route> */}
              {/* combined component */}
              <Route
                path="/add-employee/:id"
                component={AddAndUpdateEmployeeCombined}
                exact
              ></Route>
              <Route
                path="/view-employee/:id"
                component={ViewEmployeeComponents}
                exact
              ></Route>
            </Switch>
          </div>
          <FooterComonent />
        </Router>
      </div>
    </>
  );
}

export default App;
