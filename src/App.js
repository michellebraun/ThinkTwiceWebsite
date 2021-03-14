import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/Pages/About';
import RankingSystem from './components/Pages/RankingSystem';
import './App.css';

function App() {

  var title = document.querySelector('title');
  title.innerText = 'Think Twice';

  return (
    <div className="App">
      <Navigation />
      <Router basename="/">
        <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
          <Route path="/about"><About /></Route>
          <Route path="/rankingSystem"><RankingSystem /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
