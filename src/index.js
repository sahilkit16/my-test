import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Groups from "./components/Groups";
import AddGroup from "./components/AddGroup";
import { StateProvider } from "./state";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
            <li>
              <Link to="/add-group">Add Group</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />

            <StateProvider>
              <Route exact path="/users" component={Users} />
              <Route exact path="/add-user" component={AddUser} />
              <Route exact path="/groups" component={Groups} />
              <Route exact path="/add-group" component={AddGroup} />
            </StateProvider>
          </Switch>
        </>
      </HashRouter>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
