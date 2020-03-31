import React from 'react';
import './App.css';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import LoginPage from './components/LoginPage.component'
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './components/HomePage.component';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar></NavBar>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        {/* <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} /> */}
        </div>
    </Router>
  );
}

export default App;
