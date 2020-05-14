import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
margin: 2% auto;
border: 1px solid slategrey;
border-radius: 20px;
`

const Img = styled.img`
width: 250px;
height: 150px;
`

export default function CountryCard({ country }) {

    return (
        <Card>
            <h3>{country.name}</h3>
            <Img src={`${country.flag}`} alt={`Flag of ${country.name}`} />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </Card>
    )
}