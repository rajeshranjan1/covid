import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import './CountryWise.css'
import CountryData from './CountryData'
import PreLoader from '../Loader/Loader'


const apiUrl = 'https://api.thevirustracker.com/free-api?countryTotals=ALL/'

class CountryWise extends Component {
    constructor(props) {
        super(props)
        this.state = {
             countries : [],
             isLoading : false
        }  
    }
    
    componentDidMount(){
        axios.get(apiUrl)
        .then(response =>{
            this.setState({
                countries : response.data.countryitems[0],
                isLoading : true
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const {countries} = this.state;
        const getCountryData = Object.values(countries)
        getCountryData.pop()
        return (
            <>
            {this.state.isLoading 
            ? (<div className="table-wrap">
                    <div className="container">
                        <Table responsive striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Country </th>
                                    <th className="text-center skyblue">Total</th>
                                    <th className="text-center yellow">Active</th>
                                    <th className="text-center green">Recovered</th>
                                    <th className="text-center red">Deaths</th>
                                    <th className="text-center serious">Serious Case</th>
                                </tr>
                            </thead>
                            <tbody>
                            {getCountryData.map((country,i) =>  
                                <CountryData key={i} country={country} />)}
                            </tbody>
                        </Table>
                    </div>
                </div>)
            : <PreLoader/> }
            </>  
        )
    }
}

export default CountryWise
