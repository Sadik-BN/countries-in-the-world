import { useState } from 'react';
import './country.css'

const Country = ({ country, visitCount, setVisitCount }) => {
    const [visit, setVisit] = useState(false);
    const handleVisitBtn = () => {
        //Toggling 
        //Basic System
        // if (visit) {
        //     setVisit(false);
        // }
        // else {
        //     setVisit(true);
        // }

        //Second System
        // setVisit(visit?false:true);

        //Shortest System
        // setVisit(!visit);

        if (visit) {
            setVisit(false);
            let newVisitCount = visitCount - 1;
            setVisitCount(newVisitCount);
        }
        else {
            setVisit(true);
            let newVisitCount = visitCount + 1;
            setVisitCount(newVisitCount);
        }
    }

    return (
        <div className={visit ? 'card-visited' : 'card'}>
            <img className="flags" src={country.flags.flags.svg} alt={country.flags.flags.alt} />
            <h3 style={{ textAlign: 'center' }}>{country.name.common === "Israel" ? "Madarchod" : country.name.common} </h3>
            <h3>Official Name: <span style={{ color: 'blue' }}> {country.name.official === "State of Israel" ? "State of Khankir Polapan" : country.name.official} </span> </h3>
            <p> <b>Capital: </b> {country.capital.capital} </p>
            <p> <b>Region: </b> {country.region.region} </p>
            <p> <b>Population: </b> {country.population.population} </p>
            <p> <b>Area: </b> {country.area.area} ({country.area.area > 300000 ? "Big Country" : "Small Country"}) </p>
            <button className='btn' onClick={handleVisitBtn}>
                {visit ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;