import React from "react";
import styled from "styled-components/macro"

const ServiceContainer = styled.div`
    display: flex;
    align-items: center
    flex-direction: ${({ isReversed }) => isReversed && "row-reversed"};
    margin-bottom: 4em; 
`;

const ServiceImg = styled.img`
    width: 19em;
    height: 16em;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%; 
`;

const Title = styled.h2`
    color: #000;
    font-size: 28px;
    font-weight: bold;
    margin: 1em 0;
`;

const Details = styled.p`
    color: #7A7A7A;
    font-size: 19px;
    text-align: center;
    max-width: 50%;
`;

export function OurServices(props) {
    const { imgURL, title, description, isReversed } = props;
    
    return <ServiceContainer isReversed={isReversed}>
        <DescriptionContainer>
            <Title>{ title}</Title>
            <Details>{ description }</Details>
        </DescriptionContainer>
        <ServiceImg src={imgURL}/>
    </ServiceContainer>
}