import React from 'react';
import './App.css';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import LoginPage from './components/LoginPage.component'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar color="black" title="SetSpace"></NavBar>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} /> */}
        </div>
    </Router>
  );
}

export default App;
