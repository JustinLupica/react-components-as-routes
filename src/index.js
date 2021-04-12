import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Navbar from "./navbar";
import Signup from "./signup";
import Message from "./message";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route path="/" render={() => <div>Home!</div>} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/message" component={Message} />
    </div>
  </Router>,
  document.getElementById("root")
);
