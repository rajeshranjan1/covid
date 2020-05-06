import React from 'react'
import './CountryWise.css'
import { NavLink } from 'react-router-dom'

function CountryData (indivisualCountry) {
    const {ourid,title, code, total_cases, total_active_cases, total_deaths, 
        total_recovered, total_serious_cases} = indivisualCountry.country

    return (
        <tr>
            <td>{ourid}</td>
            <td> {code === 'DP' ? null : <img className="country-image" alt={title} src={`https://www.countryflags.io/${code}/flat/${16}.png`} />}  {title} </td>
            {total_cases > 0 ? 
            <>
            <td className="skyblue text-center">{total_cases}</td>
            <td className="yellow text-center">{total_active_cases}</td>
            <td className="green text-center">{total_recovered}</td>
            <td className="red text-center">{total_deaths}</td>
            <td className="serious text-center">{total_serious_cases}</td>
            <td className="text-center">  
                <NavLink className="get-btn" to={{
                    pathname : `/country/${title}`,
                    state : [{
                        id : ourid,
                        title : title,
                        code : code,
                        total : total_cases,
                        active : total_active_cases,
                        death : total_deaths,
                        recovered : total_recovered,
                        serious : total_serious_cases
                    }]
                    }} 
                >Get Details</NavLink> </td>
            </> : <td colSpan="6" className="text-center bg-success"> Corona Free Country</td> }
            
        </tr>
    )
}


export default CountryData