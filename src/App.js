import './App.css';
import React from 'react';
import Homepage from './Hompage';
import './Homepage.css'
import SearchAuthor from './SearchAuthor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={SearchAuthor} />
      </Switch>
  );
}

export default App;
