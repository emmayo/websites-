import React from "react";
import styled , { css } from "styled-components";
// import css from "./index"
import CeemaLogo from "../../assets/pictures/ceema.png";
import { theme } from "../../theme";



const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({ inline }) => inline ? "row" : "column"};
    align-items: ${({inline}) => inline && "center"};
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;

    flex-direction: ${({ inline }) => inline && css`
    width: 24px;
    height: 60px;
    margin-right: 6px;
    `};

`;

const LogoText = styled.div`
    margin-top: ${({ inline }) => (inline ? "0" : "6px")};
    font-size: ${({ inline }) => (inline ? "18px" : "40px")};
    color: ${({ inline }) => inline ? "#fff" : theme.primary};
    font-weight: 700;
`;

export default function Logo(props) {
    const { inline } =  props;

    return (
    <>
    <LogoContainer inline = {inline}>
        <LogoImg src={CeemaLogo}  inline = {inline}/>
        <LogoText inline = {inline}>Ceema</LogoText>
    </LogoContainer>
    </>
    )
}