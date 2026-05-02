import { Suspense } from 'react';
import Countries from './components/countries/Countries'

const fetchCountries = async()=>{
  const response = await fetch('https://openapi.programming-hero.com/api/all');
  return response.json();
}
const countriesPromise = fetchCountries();

function App() {



  return (
    <>
        <Suspense fallback={<p>Loading Countries... ... ...</p>} >
          <Countries countriesPromise={countriesPromise}>

          </Countries>
        </Suspense> 
    </>
  )
}

export default App
