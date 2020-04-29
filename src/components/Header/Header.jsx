import React, { Component } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

class Header extends Component {
   
    render() {
        return (
            <> 
                <div className="header-wrap">
                    <div className="container">
                        <header className="row header ">
                            <div className="col col-lg-6 col-md-6 col-12  left">
                                <h1 className="theme-gradient "><NavLink to='/' >Corona Dashboard</NavLink></h1> 
                            </div>
                            <div className="col col-lg-6 col-md-6  col-12 right">
                                <ul className="menu">
                                    <li><NavLink to='/' >Home</NavLink></li>
                                    <li><NavLink to='/country' >Browse By Country</NavLink></li>
                                </ul>
                            </div>
                        </header>
                    </div>
                </div> 
            </>
        )
    }
}

export default Header
