import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Row Post/RowPost';
import {originals,action,animation} from './constants/urls'
import { BrowserRouter,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Originals"/>
      <RowPost url={action} title="Action"/>
      <RowPost url={animation} title="Animations"/>
    </div>
  );
}

export default App;
 