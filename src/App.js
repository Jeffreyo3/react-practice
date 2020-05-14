import React from 'react';
import './App.css';
import Axios from 'axios';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [listOfCountries, setListOfCountries] = React.useState([])
  const [region, setRegion] = React.useState('EU')
  React.useEffect(() => {
    Axios
      .get(`https://restcountries.eu/rest/v2/regionalbloc/${region}`)
      .then(res => {
        console.log(res.data)
        setListOfCountries(res.data)
      })
      .catch(err => console.log(err))
  }, [region])

  const updateRegion = (event) => {
    event.preventDefault();
    setRegion(event.target.value)
  }

  return (
    <div className="App">
      <Header region={region} updateRegion={updateRegion} />
      <Body countries={listOfCountries} />
      <Footer />
    </div>
  );
}

export default App;
