import { use, useState } from "react";
import './countries.css'
import Country from "../country/Country";

function Countries({ countriesPromise }) {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitCount, setVisitCount] = useState(0);

    const [visitFlagList, setVisitFlagList] = useState([]);

    const handleVisitFlag = (flag) => {
        let newList = [...visitFlagList, flag];
        setVisitFlagList(newList);
    }

    return (
        <>

            <h1 style={{ textAlign: 'center' }}>Countries In The World</h1>
            <h2 style={{ textAlign: 'center' }}>Total: {countries.length}</h2>
            <h2 style={{ textAlign: 'center' }}>Visited: {visitCount}</h2>
            <h2 style={{ textAlign: 'center' }}>Flags Visited: {visitFlagList.length}</h2>

            {
                visitFlagList.map((flag, index) => <img key={index} className="visited-flag" src={flag}></img>)
            }

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
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} visitCount={visitCount} setVisitCount={setVisitCount} handleVisitFlag={handleVisitFlag}></Country>)
                }

            </div>
        </>
    );
}

export default Countries;