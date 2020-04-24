import React from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'
import CountUp from 'react-countup';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return false
    }

    const activeCase = confirmed.value -(recovered.value+ deaths.value)
    return(
       <div className="cards-wrap">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h5 className="total-case">Total Cases Reported Till : {new Date(lastUpdate).toDateString()}</h5>
                    </div>  
                </div>
                <div className="row card-wrapper text-center">
                    <Card className="col col-lg-3 col-md-3 col-sm-12 col-12" >
                        <Card.Body>
                        <Card.Title><h2>Confirmed</h2></Card.Title>
                        <Card.Title><h3><CountUp end={confirmed.value} start={0} duration={2} separator=','/></h3></Card.Title>
                        </Card.Body>
                    </Card> 
                    
                    <Card className="col col-lg-3 col-md-3 col-sm-12 col-12">
                        <Card.Body>
                        <Card.Title><h2>Active </h2></Card.Title>
                        <Card.Title><h3><CountUp end={activeCase} start={0} duration={2} separator=','/></h3></Card.Title>
                        <p> {((activeCase * 100 )/confirmed.value).toFixed(2)}%</p>
                        </Card.Body>
                    </Card> 

                    <Card className="col col-lg-3 col-md-3 col-sm-12 col-12">
                        <Card.Body>
                        <Card.Title><h2>Recovered </h2></Card.Title>
                        <Card.Title><h3><CountUp end={recovered.value} start={0} duration={2} separator=','/></h3></Card.Title>
                        <p>{((recovered.value * 100 )/confirmed.value).toFixed(2)}%</p>
                        </Card.Body>
                    </Card> 

                    <Card className="col col-lg-3 col-md-3 col-sm-12 col-12">
                        <Card.Body>
                        <Card.Title><h2>Deaths</h2> </Card.Title>
                        <Card.Title><h3><CountUp end={deaths.value} start={0} duration={2} separator=','/></h3></Card.Title>
                        <p>{((deaths.value * 100 )/confirmed.value).toFixed(2)}%</p>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
        </div>
    )
}

export default Cards