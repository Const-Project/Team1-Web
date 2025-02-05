import styled from "@emotion/styled";
import HomeBoard from "../HomePage/HomeBoard.tsx";
import Kakaomap from "../map/Kakaomap.tsx";
import NavBar from "../nav/NavBar.tsx";
import { BuildingInfo } from "../data/buildingData.ts";
import { isPanelOpenAtom, selectedBuildingAtom } from "../../store/building.ts";
import { useAtom } from "jotai";
const HomePageWrapper = styled.div`
  position: relative;
  width: calc(100vw - 70px);
  height: 100vh;
`;
const HomePage = () => {
  const [, setSelectedBuilding] = useAtom(selectedBuildingAtom);
  const [, setIsPanelOpen] = useAtom(isPanelOpenAtom);
  const handleBuildingClick = (building: BuildingInfo) => {
    setSelectedBuilding(building);
    setIsPanelOpen(true);
  };
  return (
    <>
      <NavBar />
      <HomePageWrapper>
        <Kakaomap onBuildingClick={handleBuildingClick} />
        <HomeBoard />
      </HomePageWrapper>
    </>
  );
};
export default HomePage;
