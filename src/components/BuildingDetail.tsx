import styled from "@emotion/styled";
import { BuildingInfo, FacilityInfo } from "./data/buildingData";
import Divider from "./Divider";
import { useState } from "react";
import FacilityItem from "./FacilityItem.tsx";
interface BuildingDetailProps {
  building: BuildingInfo;
  onFacilityClick?: (facility: FacilityInfo) => void;
}
const BuildingDetail: React.FC<BuildingDetailProps> = ({
  building,
  onFacilityClick,
}) => {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const handleTypeChange = (type: number) => {
    setSelectedType(Number(type));
    if (selectedType == type) {
      setSelectedType(null);
    }
  };
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
          <option key={null} value="">
            층수 선택
          </option>
          {building.floors.map((floor) => (
            <option key={floor} value={floor}>
              {floor}층
            </option>
          ))}
        </DropDown>
      </Container>
      <Divider size={true} />
      <Container>
        <DetailTitle>
          {selectedFloor ? `${selectedFloor}층 내부 시설` : "내부 시설"}
        </DetailTitle>
        <Facilities>
          <Button
            onClick={() => handleTypeChange(1)}
            selected={1 === selectedType}
          >
            화장실
          </Button>
          <Button
            onClick={() => handleTypeChange(2)}
            selected={2 === selectedType}
          >
            정수기
          </Button>
          <Button
            onClick={() => handleTypeChange(3)}
            selected={3 === selectedType}
          >
            카페
          </Button>
        </Facilities>
        {building.facilities?.map((facility) => (
          <>
            <FacilityItems
              key={facility.name}
              onClick={() => onFacilityClick?.(facility)}
            >
              {selectedFloor ? (
                <>
                  {selectedFloor === facility.floor && (
                    <>
                      {selectedType ? (
                        facility.type === selectedType && (
                          <>
                            <FacilityItem facility={facility} />
                            <Divider size={false} />
                          </>
                        )
                      ) : (
                        <>
                          <FacilityItem facility={facility} />
                          <Divider size={false} />
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  {selectedType ? (
                    facility.type === selectedType && (
                      <>
                        <FacilityItem facility={facility} />
                        <Divider size={false} />
                      </>
                    )
                  ) : (
                    <>
                      <FacilityItem facility={facility} />
                      <Divider size={false} />
                    </>
                  )}
                </>
              )}
            </FacilityItems>
          </>
        ))}
      </Container>
    </>
  );
};

export default BuildingDetail;
const FacilityItems = styled.a`
  display: flex;
  margin: 20px 0px;
  flex-direction: column;
  cursor: pointer;
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
interface ButtonProps {
  selected: boolean;
}
const Button = styled.button<ButtonProps>`
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
  ${({ selected }) =>
    selected &&
    `
    background:  rgb(0, 51, 99, 0.5);
  `}//
`;

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
