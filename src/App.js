import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/Pages/About';
import Team from './components/Pages/Team';
import CategoryInfo from './components/Pages/CategoryInfo';
import RankingInfo from './components/Pages/RankingInfo';
import Sustainability from './components/Pages/Sustainability';
import Contact from './components/Pages/Contact';
import Donate from './components/Pages/Donate';
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
          <Route path="/team"><Team /></Route>
          <Route path="/categoryInfo"><CategoryInfo /></Route>
          <Route path="/rankingInfo"><RankingInfo /></Route>
          <Route path="/sustainability"><Sustainability /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/donate"><Donate /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
