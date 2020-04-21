import React, { useEffect, useState } from 'react';
import { fetchDailyData}  from '../../Api';
import {Line, Bar} from 'react-chartjs-2'
import './Chart.css'
 
const Charts = ({data : {confirmed, recovered, deaths}, country}) => {
    const [ dailyData, setDailyData ] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData( await fetchDailyData())
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length !== 0 || dailyData !== undefined
        ? (
        <Line 
        data = {{
            labels : dailyData.map(({date}) => date),
            datasets : [{
                data :  dailyData.map(({confirmed}) => confirmed),
                label : 'Infected People',
                borderColor : '#rgba(76,0,255,0.99)',
                pointBackgroundColor : 'rgba(76,0,255,0.76)',
                pointBorderColor : 'rgba(76,0,255,0.85)',
                backgroundColor : 'rgba(76,0,255,0.56)',
                fill : false
            },{
                data :  dailyData.map(({deaths}) => deaths),
                label : 'Total Deaths',
                borderColor : 'red',
                backgroundColor : 'rgba(255, 0, 0, 0.45)',
                pointBackgroundColor : 'rgba(255, 0, 0, 0.34)',
                pointBorderColor : 'rgba(255, 0, 0,1)',
                fill : false
            }]
        }}
        />) : null
    )

    const barChart = (
        confirmed
        ? (
        <Bar 
        data = {{
            labels : [ 'Infected ', 'Active', 'Recovered', 'Deaths'],
            datasets :[{
                labels : 'People',
                backgroundColor : ['rgba(6,42,255,0.45)','rgba(6,255,255,0.45)', 'rgba(6,255,153,0.45)', 'rgba(255,6,6,0.45)'],
                borderColor :['rgba(6,42,255,0.8)','rgba(6,255,255,0.8)',  'rgba(6,255,153,0.8)', 'rgba(255,6,6,0.8)'],
                borderWidth :2,
                hoverBorderWidth :3,
                hoverBackgroundColor :['rgba(6,42,255,0.55)','rgba(6,255,255,0.55)',  'rgba(6,255,153,0.55)', 'rgba(255,6,6,0.55)'],
                hoverBorderColor : ['rgba(6,42,255,0.85)','rgba(6,255,255,0.85)',  'rgba(6,255,153,0.85)', 'rgba(255,6,6,0.85)'],
                data : [confirmed.value, (confirmed.value - (recovered.value +deaths.value)),recovered.value, deaths.value]
            }] 
        }}
        options = {{
                legend :{display : false},
                title :{display : true, text : `Current State In ${country}`},
           
        }}
        />) : null
    )

    return(
        <div className="chart-container">
            {country ? barChart  : lineChart}
        </div>
    )
}

export default Charts