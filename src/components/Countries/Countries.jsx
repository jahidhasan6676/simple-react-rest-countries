import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [flags, setFlags] = useState([]);
    const [regions, setRegion] = useState([]);


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    });


    const handleVisitedCountry = (ami) =>{
        console.log('add visited')
        const newVisitedCountry = [...visitedCountry, ami];
        setVisitedCountry(newVisitedCountry);
    }

    const handleVisitedFlag = (flag) =>{
        console.log('add visited flag')
        const newVisitedFlag = [...flags, flag];
        setFlags(newVisitedFlag);
    }

    const handleRegion = (region) =>{
        console.log('add region')
        const newRegion = [...regions, region];
        setRegion(newRegion)
    }


    return (
        <div >
            <h3>Countries: {countries.length} </h3>
            {/* show country name */}
            <div>
                <h3>Visited Country: {visitedCountry.length} </h3>
                <div className="countries-details">
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca2}> {country} </li>)
                    }
                </ul>
                <ol>
                    {
                        regions.map((region, index) => <li key={index} > {region} </li>)
                    }
                </ol>
                </div>
            </div>
            
            {/* show country flag */}
            <div className="flag-container">
                    {
                        flags.map((flag, index )=> <img key={index} src={flag}/>)
                    }
            </div>

           {/* show country all details */}
            <div className="country-container">
            {
    
        countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry}  handleVisitedFlag={ handleVisitedFlag} handleRegion={handleRegion}    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;