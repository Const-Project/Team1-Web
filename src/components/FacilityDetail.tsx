import React from "react";
import { FacilityInfo } from "./data/buildingData";
import styled from "@emotion/styled";

interface FacilityDetailProps {
  facility: FacilityInfo;
}

const FacilityDetail: React.FC<FacilityDetailProps> = ({ facility }) => {
  return (
    <Container>
      <h2>{facility.name}</h2>
      <p>층: {facility.floor}</p>
      <p>좋아요: {facility.like}</p>
      <p>싫어요: {facility.dislike}</p>
      <p>리뷰 수: {facility.reviewCount}</p>
    </Container>
  );
};

export default FacilityDetail;

// styled-components 예시
const Container = styled.div`
  width: 400px;
  padding: 20px;
`;
