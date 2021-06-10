import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";

//import components
import NavBar from "./components/Nav/NavBar";


//import styles



const App=()=>{
  return(
    <Router>
      <NavBar/>
      <Container>
        <Switch>
          <Route path="/" exact component={Header}/>
          
        </Switch>
      </Container>
    </Router>
  )
}
export default App;
