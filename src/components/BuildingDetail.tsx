import styled from "@emotion/styled";
import { BuildingInfo } from "./data/buildingData";
import Divider from "./Divider";
import { useState } from "react";
const FacilityItems = styled.div`
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
`;
const TitleItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const StoreButton = styled.button`
  border: none;
  background: #8099b1;
  color: white;
  padding: 2px;
  width: 50px;
  height: 27px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: rgb(0, 51, 99, 0.8);
  }
`;
const Facilities = styled.div`
  display: flex;
  gap: 10px;
`;
const DetailTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px;
`;
const Button = styled.button`
  border: none;
  background: #a7a7a7;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 300;
  width: 84px;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;
  &:hover {
    background: rgb(0, 51, 99, 0.5);
  }
`;
interface BuildingDetailProps {
  building: BuildingInfo;
}
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const Container = styled.div`
  width: 400px;
  padding: 20px 30px;
`;
const DropDown = styled.select`
  border: none;
  margin: 10px 0px;
  width: 100px;
  padding: 4px 15px;
  text-align: left;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 300;
  background: #a7a7a7;
  color: white;
  appearance: none;
`;
const Review = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #a7a7a7;
`;
const Like = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0px 10px 0px;
`;

const LikeButton = styled.button`
  border: none;
  background: rgb(0, 51, 99, 0.2);
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: rgb(0, 51, 99, 0.5);
    color: white;
  }
`;
const BuildingDetail: React.FC<BuildingDetailProps> = ({ building }) => {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFloor(event.target.value);
  };
  return (
    <>
      <Image src={building.image} alt={building.name} />
      <Container>
        <h2>{building.name}</h2>
        <p>운영 시간: {building.time}</p>
        <DropDown onChange={handleFloorChange}>
          <option value="">층수 선택</option>
          {building.floors.map((floor) => (
            <option key={floor} value={floor}>
              {floor}
            </option>
          ))}
        </DropDown>
      </Container>
      <Divider size={true} />
      <Container>
        <DetailTitle>{selectedFloor} 내부시설</DetailTitle>
        <Facilities>
          <Button>화장실</Button>
          <Button>정수기</Button>
          <Button>카페</Button>
        </Facilities>
        <FacilityItems>
          <TitleItems>
            <DetailTitle>1층 화장실</DetailTitle>
            <StoreButton>+ 저장</StoreButton>
          </TitleItems>
          <Review>아직까지 작성된 리뷰가 없습니다!</Review>
          <Like>
            <LikeButton>좋아요 0개</LikeButton>
            <LikeButton>싫어요 0개</LikeButton>
          </Like>
        </FacilityItems>
        <Divider size={false} />
      </Container>
    </>
  );
};

export default BuildingDetail;
