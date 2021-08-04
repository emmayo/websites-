import React from "react";
import styled from "styled-components";
import Logo from "../../components/logo/index";
import Button from "../button/index";
import { Marginer} from "../../components/marginer/index"


const NavbarContainer = styled.div`
    width: 100%;
    height: 65px;
    padding: 0 2em;
    display: flex;
    align-items: center; 
    justify-content: space-between;
`;

const BrandContainer = styled.div`
    
`;

const AccessabilityContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LoginButton = styled(Button)`
    background-color: transparent;
    border: none;


    $:hover {
        background-color: transparent;
        border: none;
        color: rgb(199, 199, 199);
    }
`;

export default function Navbar(props) {
    return <NavbarContainer>
        <BrandContainer>
        <Logo inline/>
        </BrandContainer>
        <AccessabilityContainer>
            <Button small >
                Get Started
            </Button>
            <Marginer direction="horizontal" margin="8px"/>
            <LoginButton small>
                Login
            </LoginButton>
        </AccessabilityContainer>
    </NavbarContainer>
}