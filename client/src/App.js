import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";

//import components
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Project from "./components/Project/Project";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
//import styles



const App=()=>{
  return(
    <Router>
      <Header/>
      <NavBar/>
      <Container>
        <Switch>
          <Route path="/" exact component={Profile}/>
          <Route path="/project" exact component={Project}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </Container>
      <Footer/>
    </Router>
  )
}
export default App;
