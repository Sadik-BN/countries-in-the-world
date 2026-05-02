import { use, useState } from "react";
import './countries.css'
import Country from "../country/Country";

function Countries({ countriesPromise }) {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const[visitCount,setVisitCount] = useState(0);

    return (
        <>

            <h1 style={{textAlign:'center'}}>Countries In The World</h1>
            <h2>Visited: {visitCount}</h2>
            <div className="card-container">
                {/* {
                    countries.map(country => {

                        return (
                            <div key={country.ccn3.ccn3} className="card">
                                <img className="flags" src={country.flags.flags.svg} alt={country.flags.flags.alt} />
                                <h3>{country.name.common} </h3>
                                <h3>Official Name: {country.name.official}</h3>
                            </div>
                        );
                    })
                } */}
                {/* This is for everything in one component */}

                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} visitCount = {visitCount} setVisitCount={setVisitCount}></Country>)
                }

            </div>
        </>
    );
}

export default Countries;