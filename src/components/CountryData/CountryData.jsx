



const CountryData = (props) => {
    const {country, handleVisitedCountry, handleVisitedFlag} = props;    
    return (
        <div>
            <p><small>name: {country?.name?.common}</small></p>
        </div>
    );
};

export default CountryData;