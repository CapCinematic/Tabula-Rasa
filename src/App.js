import logo from './logo.svg';
import './App.css';
import React from 'react';
import FetchData from './apiCalls';

function App() {
  return (
    <div>
      <h1>Philosophers</h1>
      <FetchData />
    </div>
  );
}

export default App;
