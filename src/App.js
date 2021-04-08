import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import playerData from './fakedata/data.json';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
function App() {


  return (
    <div>
      <Header></Header>
      <Player></Player>
    </div>
  );
}


export default App;
