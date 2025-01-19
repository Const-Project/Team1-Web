import styled from "@emotion/styled";
import { BuildingInfo, FacilityInfo } from "./data/buildingData";
import Divider from "./Divider";
import { useEffect, useState } from "react";
import FacilityItem from "./FacilityItem.tsx";
import Overflow from "./Overflow.tsx";
import { FaAngleLeft } from "react-icons/fa6";
import { useAtom } from "jotai";
import {
  isPanelOpenAtom,
  markFacilityAtom,
  selectedBuildingAtom,
} from "../store/building.ts";
import { BackButton } from "./Buttons.tsx";
interface BuildingDetailProps {
  building: BuildingInfo;
  onFacilityClick?: (facility: FacilityInfo) => void;
}
const BuildingDetail: React.FC<BuildingDetailProps> = ({
  building,
  onFacilityClick,
}) => {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [, setSelectedBuilding] = useAtom(selectedBuildingAtom);
  const [markFacility, setMarkFacility] = useAtom(markFacilityAtom);
  const [isPanelOpen] = useAtom(isPanelOpenAtom);
  const handleTypeChange = (type: number) => {
    if (markFacility === type) {
      setMarkFacility(null);
    } else {
      setMarkFacility(type);
    }
  };
  const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFloor(event.target.value);
  };
  useEffect(() => {
    setSelectedFloor("");
  }, [building]);
  return (
    <>
      <Overflow>
        {isPanelOpen && (
          <BackButton onClick={() => setSelectedBuilding(null)}>
            <FaAngleLeft size="25px" />
          </BackButton>
        )}
        <Image src={building.image} alt={building.name} />
        <Container>
          <h2>{building.name}</h2>
          <p>운영 시간: {building.time}</p>
          <DropDown value={selectedFloor ?? ""} onChange={handleFloorChange}>
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
              selected={1 === markFacility}
            >
              화장실
            </Button>
            <Button
              onClick={() => handleTypeChange(2)}
              selected={2 === markFacility}
            >
              정수기
            </Button>
            <Button
              onClick={() => handleTypeChange(3)}
              selected={3 === markFacility}
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
                        {markFacility ? (
                          facility.type === markFacility && (
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
                    {markFacility ? (
                      facility.type === markFacility && (
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
      </Overflow>
    </>
  );
};

export default BuildingDetail;

const FacilityItems = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Facilities = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const DetailTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
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
  font-size: 17px;
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
  `}
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
