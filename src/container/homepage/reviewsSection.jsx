import React from "react";
import styled from "styled-components";
import { Marginer} from "../../components/marginer/index";
import { SectionTitle } from "../../components/sectionTitle";


const ReviewsContainer = styled(Element)`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function ReviewsSection(props) {
     return <ReviewsContainer>
         <SectionTitle>What Others are Saying</SectionTitle>
         <Marginer direction="vertical" margin="3em" />
     </ReviewsContainer>
}