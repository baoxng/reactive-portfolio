import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import FavoritesList from "./pages/FavoritesList";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Profile from "./components/Profile/index";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Nav />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/project" component={Project}/>
          <Route exact path="/contact" component={ContactPage}/>
          {/* <Route exact path="/resume" component={}/> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
