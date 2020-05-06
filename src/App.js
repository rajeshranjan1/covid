import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import HomeData from './components/HomeData/HomeData';
import CountryWise from './components/CountryWise/CountryWise'
import IndCountry from './components/IndCountry/IndCountry';
import NotFound  from './components/NotFound/NotFound'
import {BrowserRouter, Switch, Route , Redirect} from 'react-router-dom';

class App extends Component{
    render(){
      return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/covid" component={HomeData} />
              <Route exact path="/country" component={CountryWise} />
              <Route exact path="/country/:id" component={IndCountry} />
              <Route exact path="/404" component={NotFound} />
              <Redirect to="/404"/>
              < IndCountry />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
