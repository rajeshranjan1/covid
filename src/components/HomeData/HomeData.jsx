import React, { Component } from 'react'
import {Cards, Chart, CountryPicker, ContentBox, IndiaData, Prevention} from '../../components'
import {fetchData} from '../../Api'

class HomeData extends Component{
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
        return(
            <div>
                <IndiaData/>
                <Prevention />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data}/>
                <Chart data={data} country={country}/>
                <ContentBox/>
            </div>
        )
    }
}


export default HomeData
