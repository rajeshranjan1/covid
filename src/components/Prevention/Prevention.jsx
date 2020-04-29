import React from 'react'
import './Prevention.css'

function Prevention() {
    return (
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
    )
}

export default Prevention
