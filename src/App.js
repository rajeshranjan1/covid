import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from './Api'


class App extends Component{
  state = {
    data : {},
    country : ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({
      data : fetchedData
    })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data : fetchedData,
      country : country
    })
  }

  render(){
    const { data , country} = this.state;
    return (
      <div className="App">
        <div className="container">
        <Header />
          <h1>Covid-19 DashBoard</h1> 
          {/* <h1>
          <span>C</span>
          <span>o</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>a</span>
          <span>-</span>
          <span>d</span>
          <span>a</span>
          <span>s</span>
          <span>h</span>
          <span>b</span>
          <span>o</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
        </h1> */}
        < Cards data={data}/>
        < CountryPicker handleCountryChange={this.handleCountryChange} />
        < Chart data={data} country={country}/>
        </div>
      </div>
    );
  }
}


export default App;
