import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from './Api'
import Footer from './components/Footer/Footer';
import ContentBox from './components/ContentBox/ContentBox';


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
        <Header />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data}/>
        <Chart data={data} country={country}/>
        < ContentBox />
        <Footer/>
      </div>
    );
  }
}


export default App;
