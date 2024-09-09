
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<News key={''} pagesize = {12} category = {""}/>}/>
          
          
          <Route exact path="/business" element={<News key={'business'} pagesize = {12} category = {"business"}/>}/>
          
          
          <Route exact path="/entertainment" element={<News key={'entertainment'} pagesize = {12} category = {"entertainment"}/>}/>
          
          
          <Route exact path="/sports" element={<News key={'sports'} pagesize = {12} category = {"sports"}/>}/>
          
          
          <Route exact path="/snt" element={<News key={'science'} pagesize = {12} category = {"science"}/>}/>
          
          
          
          
        </Routes>
        </Router>
      </div>
    );
  }
}
