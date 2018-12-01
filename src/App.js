import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homepage';
import MapPage from './components/pages/mappage';

// includes
import './Assets/css/default.min.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className = 'top' > <Header /></div>
        <div className = 'left' > <HomePage /></div>
        <div className = 'right' > <MapPage /></div>
        <div className = "footer"> <Footer /></div>
      </div>
    )
  }
}

export default App;
