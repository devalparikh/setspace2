import React from 'react';
import './App.css';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar title="SetSpace"></NavBar>
        <Route path="/" exact component={LandingPage} />
        {/* <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} /> */}
        </div>
    </Router>
  );
}

export default App;
