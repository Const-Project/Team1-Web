import styled from "@emotion/styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Building from "./Building";
import { FacilityInfo } from "./data/buildingData.ts";
import BuildingDetail from "./BuildingDetail.tsx";
import FacilityDetail from "./FacilityDetail.tsx";
import { useAtom } from "jotai";
import {
  facilityAtom,
  isPanelOpenAtom,
  selectedBuildingAtom,
  markFacilityAtom,
} from "../store/building.ts";

const HomeBoard: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useAtom(isPanelOpenAtom);
  const [facility, setFacility] = useAtom(facilityAtom);
  const [selectedBuilding] = useAtom(selectedBuildingAtom);
  const [markFacility, setMarkFacility] = useAtom(markFacilityAtom);
  const toggleMenu = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  const handleFacilityClick = (facility: FacilityInfo) => {
    setFacility(facility);
  };
  const handleMarkFacility = (selectedMarkFacility: number) => {
    setMarkFacility(Number(selectedMarkFacility));
    if (markFacility === selectedMarkFacility) {
      setMarkFacility(null);
    }
  };
  return (
    <>
      <Panel isOpen={isPanelOpen}>
        <MarkList>
          <li>
            <Mark
              onClick={() => handleMarkFacility(1)}
              selected={markFacility === 1}
            >
              {" "}
              화장실
            </Mark>
          </li>
          <li>
            <Mark
              onClick={() => handleMarkFacility(2)}
              selected={markFacility === 2}
            >
              정수기
            </Mark>
          </li>
          <li>
            <Mark
              onClick={() => handleMarkFacility(3)}
              selected={markFacility === 3}
            >
              카페
            </Mark>
          </li>
        </MarkList>
        <Button onClick={toggleMenu}>
          {!isPanelOpen ? (
            <>
              <IoIosArrowForward />
            </>
          ) : (
            <>
              <IoIosArrowBack />
            </>
          )}
        </Button>
        <Container>
          {facility ? (
            <FacilityDetail facility={facility} />
          ) : selectedBuilding ? (
            <BuildingDetail
              building={selectedBuilding}
              onFacilityClick={handleFacilityClick}
            />
          ) : (
            <Building />
          )}
        </Container>
      </Panel>
    </>
  );
};

export default HomeBoard;

interface PanelProps {
  isOpen: boolean;
}
const Container = styled.div`
  overflow: hidden;
  top: 0px;
`;
const MarkList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: vertical;
  left: 100%;
  top: 15px;
  margin-left: 30px;
  gap: 12px;
`;
const Panel = styled.div<PanelProps>`
  position: absolute;
  top: 0;
  height: 100vh;
  background: white;
  z-index: 100;
  width: ${({ isOpen }) => (isOpen ? "400px" : "0px")};
  transition: width 0.3s ease-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
`;
interface MarkProps {
  selected: boolean;
}
const Mark = styled.button<MarkProps>`
  background: white;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  font-size: 15px;
  border: none;å
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #B0C0CF;
  }
  ${({ selected }) =>
    selected &&
    `
    background: #B0C0CF;
  `}
`;
const Button = styled.button`
  position: absolute;
  background: white;
  border: 1px solid rgb(234, 234, 234);
  width: 25px;
  height: 50px;
  top: 50%;
  left: 100%;
  border-radius: 0 10px 10px 0;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 17px;
`;
