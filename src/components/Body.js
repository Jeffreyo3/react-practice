import React from 'react';
import styled from 'styled-components';
import CountryCard from './CountryCard';

const FlexBox = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

export default function Body({ countries }) {

    return (
        <FlexBox>
            {countries.map(location => {
                return <CountryCard key={location.numericCode} country={location} />
            })}
        </FlexBox>
    )
}