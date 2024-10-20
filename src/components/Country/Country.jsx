import './Country.css'


const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, region, area} = country;
    return (
        <div className='country'>
            <h4>Name: {name?.common} </h4>
            <img src={flags.png}/>
            <p className='country-elements'>Population: {population}</p>
            <p className='country-elements'>Region: {region}</p>
            <p className='country-elements'>Area: {area} </p>
        </div>
    );
};

export default Country;