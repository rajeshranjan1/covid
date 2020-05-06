import React from 'react'
import './NotFound.scss'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <div className="container">
                <div className="wrapper text-center">
                    <div>
                    <h1>Page not found</h1>
                    <button className="btn btn-warning btn-md"><NavLink to={`/covid`} >Back to home</NavLink> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
