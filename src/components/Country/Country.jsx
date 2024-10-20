import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';



const Country = ({country, handleVisitedCountry, handleVisitedFlag, handleRegion}) => {
    // console.log(country)
    const {name, flags, population, region, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisit = () =>{
        setVisited(!visited)
    }
    // console.log(handleVisitedFlag)
  

    return (
        <div className= {`country ${visited && 'visited'}`}>
            <h4 style={{color: visited? 'goldenrod' : 'white'}}>Name: {name?.common} </h4>
            <img src={flags.png}/>
            <p style={{color: visited? 'blueviolet' : 'white'}} className='country-elements'>Population: {population}</p>
            <p className='country-elements'>Region: {region}</p>
            <p className='country-elements'>Area: {area} </p>
            <p><small className='country-elements'>Code: {cca3}</small></p>

            <button onClick={()=> handleVisitedCountry(country.name.common)}>Mark Visited</button>

            <button onClick={()=> handleVisitedFlag(flags.png)}>Add Flag</button>

            <button onClick={()=>handleRegion(region)}>Add Region</button>

            
            <hr/>
            <br />
           <div className='display'>
           <button onClick={handleVisit}> {visited ? 'Visited' : 'Going'}</button>
           <p style={{color: visited? 'green' : 'white'}} className='country-elements'>{visited ? ' I am visited this country' : 'I want visit'} </p>
           </div>
           <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}>
            
           </CountryDetail>
        </div>
    );
};

export default Country;