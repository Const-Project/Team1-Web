import styled from "@emotion/styled";
import { BuildingInfo } from "./data/buildingData";
import Divider from "./Divider";
import { useState } from "react";

interface BuildingDetailProps {
  building: BuildingInfo;
}
const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;
const Container = styled.div`
  width: 400px;
  padding: 20px;
`;
const DropDown = styled.select`
  border: none;
  margin: 10px 0px;
  width: 100px;
  padding: 4px 5px;
  text-align: left;
  border-radius: 10px;
  font-size: 13.5px;
  background: #a7a7a7;
  color: white;
  appearance: none;
`;
const FloorDetail = styled.div`
  padding: 20px;
  width: 400px;
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
      {selectedFloor && (
        <FloorDetail>
          <h3>{selectedFloor} 정보</h3>
          <p>여기에 {selectedFloor}에 대한 정보를 추가하세요.</p>
        </FloorDetail>
      )}
    </>
  );
};

export default BuildingDetail;
