import './App.css';
import React from 'react';
import Homepage from './Hompage';
import './Homepage.css'
import SearchAuthor from './SearchAuthor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppPropTypes } from './PropTypes';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={SearchAuthor} />
      </Switch>
  );
}

App.propTypes = AppPropTypes

export default App;
