import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import './CountryPicker.css'
import { fetchCountries } from '../../Api'
 
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchCountryAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchCountryAPI();
    },[setFetchedCountries]);

    return(
        <div className="container">
            <div className="country-picker">
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-4 ">
                        <Form className="">
                            <Form.Group  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} controlId="exampleForm.SelectCustom">
                                <Form.Label>Select Your Country</Form.Label>
                                <Form.Control as="select"  custom>
                                <option value="">Global</option>
                                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryPicker