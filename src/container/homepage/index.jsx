import React from "react";
import styled from "styled-components";
import { Marginer} from "../../components/marginer/index"
import { ReviewsSection } from "./reviewsSection";
import { TopSection } from "./topSection";
import { ServicesSection } from "./servicesSection"


const  PageContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
    return <PageContainer>
      <TopSection/>
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <ReviewsSection />
      </PageContainer>
}