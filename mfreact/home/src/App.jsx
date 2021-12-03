import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import CustomButton from "./CustomButton";
import {BrowserRouter as Router,Switch,Route , Link} from "react-router-dom"
import HomeContent from "./HomeContent"
import UserContent from "user/UserContent"
import "./index.scss";

const App = () => (
  <Router>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
      <CustomButton />
      <Link to="/user">User'a Git</Link>
      <div>
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route exact path="/user" component={UserContent} />

        </Switch>
      </div>
    </div>
    </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
