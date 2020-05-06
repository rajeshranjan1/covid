import React, { Component } from 'react'
import './IndCountry.scss';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import {Line} from 'react-chartjs-2'
import PreLoader from '../Loader/Loader'
import CountUp from 'react-countup';

class IndCountry extends Component{
    constructor(props) {
        super(props)
        this.state = {
            items : [],
            isLoading :  false
        }
    }

    componentDidMount(){
        axios.get(`https://api.thevirustracker.com/free-api?countryTimeline=${this.props.location.state[0].code}`)
        .then(response =>{
            this.setState({
                items : response.data.timelineitems[0],
                isLoading : true
            })
        }).catch(error => {
            console.log(error)
        })
    }
    render(){

       const {items, isLoading} = this.state
       const itemsValue = Object.values(items)
      
        console.log(items);

        const lineChart = (
            items.length !== 0 || items !== undefined
            ? (
            <Line 
            data = {{
                labels : Object.keys(items),
                datasets : [
                    {
                        data :  itemsValue.map(({total_cases}) => total_cases),
                        label : 'Total',
                        borderColor : 'blue',
                        pointBackgroundColor : 'blue',
                        pointBorderColor : 'blue',
                        backgroundColor : 'blue',
                        fill : false
                    },
                    {
                        data :  itemsValue.map(({total_recoveries}) => total_recoveries),
                        label : 'Daily Recovered',
                        borderColor : 'green',
                        backgroundColor : 'green',
                        pointBackgroundColor : 'green',
                        pointBorderColor : 'green',
                        fill : false
                    },
                    {
                        data :  itemsValue.map(({new_daily_cases}) => Math.abs(new_daily_cases)),
                        label : 'Daily New Cases',
                        borderColor : 'hotpink',
                        pointBackgroundColor : 'hotpink',
                        pointBorderColor : 'hotpink',
                        backgroundColor : 'hotpink',
                        fill : false
                    },
                    {
                        data :  itemsValue.map(({total_deaths}) => total_deaths),
                        label : 'Total Death',
                        borderColor : 'red',
                        pointBackgroundColor : 'red',
                        pointBorderColor : 'red',
                        backgroundColor : 'red',
                        fill : false
                    }
                ]
            }}
            />) : null
        )
        
    const { code, title, total, active, death, recovered } = this.props.location.state[0]
    return (
        <>
        {isLoading ? 
            (<div className="country-details">
                <div className=" country-header text-center container">
                    <h2>{code === 'DP' ? null : <img className="country-image" alt={title} src={`https://www.countryflags.io/${code}/flat/${64}.png`} />} {title}</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-lg-12 col-sm-12">
                            <div className="con-details">
                                <div><h2>Total <CountUp end={total} start={0} duration={2} separator=','/> </h2></div>
                                <div><h2>Active <CountUp end={active} start={0} duration={2} separator=','/> </h2></div>
                                <div><h2>Recovered <CountUp end={recovered} start={0} duration={2} separator=','/> </h2></div>
                                <div><h2>Death <CountUp end={death} start={0} duration={2} separator=','/> </h2></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">{lineChart}</div>
                        <div className="col col-12 text-center"> <button className="btn btn-warning btn-md"><NavLink to={`/country`} >Back</NavLink> </button></div>
                    </div>
                </div>
            </div>
        ) : <PreLoader/> }
        </>
        )
    }
}

export default IndCountry
