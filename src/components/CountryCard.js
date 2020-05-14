import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
margin: 2% auto;
border: 1px solid slategrey;
border-radius: 20px;
`

export default function CountryCard({ country }) {

    return (
        <Card>
            <h3>{country.name}</h3>
            <img src={`${country.flag}`} style={{ width: '250px', height: '150px' }} alt={`Flag of ${country.name}`} />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </Card>
    )
}