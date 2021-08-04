import React from "react";
import { Element } from "react-scroll"
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle"
import { Marginer} from "../../components/marginer/index"
import { OurServices} from "../../components/ourServices/index"

// import Service1Img from "../../assets/illustrations/web_development_png";
// import Service2Img from "../../assets/illustrations/mobile_phone_png";
// import Service3Img from "../../assets/illustrations/bug_fixed_png";


const ServicesContainer = styled(Element)`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

export /*default*/ function ServicesSection(props) {
    return <ServicesContainer name="servicesSection">
        <SectionTitle>Best Software Quality</SectionTitle>
        <Marginer direction="vertical" margin="3em"/>
        <OurServices title="Fully Integrated Services" description="We build and deliver fully integrated webapps with 
        customized control  panels that fit the company needs"
        /* imgUrl{Service1Img} */ />

        <OurServices 
        title="Mobile Optimized" 
        description="We build and deliver fully integrated 
        webapps with customized control  panels that fit the company needs"
        //  imgUrl={Service2Img} 
        isReversed
       />
        
        <OurServices 
        title="Quality is our priority" 
        description="We have a team of professionals developers, designers
        and managers that ensures delivering the best software quality for your company"
        //  imgUrl={Service3Img} 
        isReversed
       />
    </ServicesContainer>
}