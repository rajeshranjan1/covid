import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import HomeData from './components/HomeData/HomeData';
import CountryWise from './components/CountryWise/CountryWise'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component{
    render(){
      return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={HomeData} />
              <Route path="/country" component={CountryWise} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
