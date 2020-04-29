import React from 'react'
import './CountryWise.css'

function CountryData (indivisualCountry) {
    const {ourid,title, code, total_cases, total_active_cases, total_deaths, 
        total_new_cases_today, total_new_deaths_today,total_recovered, total_serious_cases} = indivisualCountry.country
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
            <td>{total_new_cases_today}</td>
            <td>{total_new_deaths_today}</td>
            <td>{total_serious_cases}</td>
            </> : <td colSpan="7" className="text-center bg-success"> Corona Free Country</td> }
            
        </tr>
    )
}


export default CountryData