import React from 'react'
import Loader from 'react-loader-spinner'
import './Loader.css'

function PreLoader() {
    return (
        <>
            <div className="loader-back">
                <Loader
                    type="Bars"
                    color="#f81f01"
                    height={80}
                    width={80}
                    timeout={20000} //10 secs
                />
            </div>
        </>
    )
}

export default PreLoader
