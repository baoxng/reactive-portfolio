import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
      <div id= "app" className="d-flex-column h-100">
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
      </div>
    </Router>
  )
}
export default App;
