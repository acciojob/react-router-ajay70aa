import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import './../styles/App.css';
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
