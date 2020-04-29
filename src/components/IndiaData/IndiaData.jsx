import React, { Component } from 'react'
import './IndiaData.css'
import axios from 'axios'
import CountUp from 'react-countup';
import indFlag from '../../images/ind.png';
import { HorizontalBar} from 'react-chartjs-2'


class IndiaData extends Component{
    constructor(props) {
        super(props)
        this.state = {
            confirmed : 0,
            recovered : 0,
            deaths : 0,
            lastUpdate : 0
        }
    }

    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api/countries/india')
        .then(response => {
            const getData = response.data
            this.setState({
                confirmed : getData.confirmed.value,
                recovered : getData.recovered.value,
                deaths : getData.deaths.value,
                lastUpdated : getData.lastUpdate
            }) 
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        const {confirmed, deaths, recovered} = this.state;
        const activeCase = confirmed -(recovered+ deaths)

        const barChart = (
            confirmed
            ? (
            <HorizontalBar 
            data = {{
                labels : [ 'Infected ', 'Active', 'Recovered', 'Deaths'],
                datasets :[{
                    labels : 'People',
                    backgroundColor : ['rgba(6,42,255,0.45)','rgba(6,255,255,0.45)', 'rgba(6,255,153,0.45)', 'rgba(255,6,6,0.45)'],
                    borderColor :['rgba(6,42,255,0.8)','rgba(6,255,255,0.8)',  'rgba(6,255,153,0.8)', 'rgba(255,6,6,0.8)'],
                    borderWidth :2,
                    barThickness :28,
                    hoverBorderWidth :3,
                    hoverBackgroundColor :['rgba(6,42,255,0.55)','rgba(6,255,255,0.55)',  'rgba(6,255,153,0.55)', 'rgba(255,6,6,0.55)'],
                    hoverBorderColor : ['rgba(6,42,255,0.85)','rgba(6,255,255,0.85)',  'rgba(6,255,153,0.85)', 'rgba(255,6,6,0.85)'],
                    data : [confirmed, (confirmed - (recovered + deaths)),recovered, deaths]
                }] 
            }}
            options = {{
                    legend :{display : false},
                    title :{display : true, text : `Current State In India`},
                }}
            />) : null
        )

        return (
            <div> 
                 <div className="india-fig-wrap">
                    <div className="container">
                        <div className="row justify-content-md-center text-center">
                            <div className="col-lg-4 india-fig-left ">
                                 <div><img alt="India Flag" src={indFlag} className="indFlag" /></div>
                                 <div> <h3 className="text-left"> Corona Live Status In <span className="india">India</span></h3></div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12 india-fig-right text-center">
                                <div className="india-figure">
                                    <div className="grid2">
                                        <h4>Confirmed </h4>
                                        <CountUp end={confirmed} start={0} duration={2} separator=','/> 
                                        </div> 
                                    <div className="grid3"><h4>Active  </h4> <CountUp end={confirmed - (recovered + deaths)} start={0} duration={2} separator=','/>({((activeCase * 100 )/confirmed).toFixed(2)}%)</div>
                                    <div className="grid4"><h4>Recovered </h4> <CountUp end={recovered} start={0} duration={2} separator=','/> ({((recovered * 100 )/confirmed).toFixed(2)}%)</div>
                                    <div className="grid5"><h4>Deaths  </h4>  <CountUp end={deaths} start={0} duration={2} separator=','/>({((deaths * 100 )/confirmed).toFixed(2)}%)</div> 
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="chart-wpr">
                                    {barChart}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndiaData