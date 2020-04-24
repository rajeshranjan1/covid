import React, { Component } from 'react'
import './Header.css'
import axios from 'axios'
import CountUp from 'react-countup';
import indFlag from './images/ind.png';
import { HorizontalBar} from 'react-chartjs-2'

class Header extends Component {
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
                    legend :{
                        display : false,
                        labels : {
                            defaultFontSize :25
                        }
                    },
                    title :{display : true, text : `Current State In India`},
                    
               
            }}
            />) : null
        )
        const activeCase = confirmed -(recovered+ deaths)

        return (
            <div> 
                <div className="header-wrap">
                    <div className="container">
                        <header className="row header ">
                            <div className="col text-center">
                                <h1>Corona Dashboard</h1> 
                            </div>
                        </header>
                    </div>
                </div> 
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
                <div className="prevention">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="advice theme-gradient">Corona Virus Advice for the public .</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
                                <h4><span>#.</span>Wash your hands frequently</h4>
                                <p>
                                    Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
                                   <strong> Why? </strong> Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
                                </p>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
                            <h4> <span>#.</span>Maintain social distancing</h4>
                                <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
                                <strong> Why? </strong>  When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus.</p>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
                                <h4> <span>#.</span>Avoid touching eyes, nose and mouth</h4>
                                <p><strong> Why? </strong>  Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Header
