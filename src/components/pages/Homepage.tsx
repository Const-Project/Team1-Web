import styled from "@emotion/styled";
import HomeBoard from "../HomeBoard.tsx";
import Kakaomap from "../map/Kakaomap.tsx";
import NavBar from "../nav/NavBar.tsx";
import { useState } from "react";
import { BuildingInfo } from "../data/buildingData.ts";
const HomePageWrapper = styled.div`
  position: relative;
  width: calc(100vw - 70px);
  height: 100vh;
`;
const HomePage = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingInfo | null>(
    null
  );
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const handleBuildingClick = (building: BuildingInfo) => {
    setSelectedBuilding(building);
    setIsPanelOpen(true);
  };
  return (
    <>
      <NavBar />
      <HomePageWrapper>
        <Kakaomap
          selectedBuilding={selectedBuilding}
          onBuildingClick={handleBuildingClick}
        />
        <HomeBoard
          selectedBuilding={selectedBuilding}
          onBuildingClick={handleBuildingClick}
          isPanelOpen={isPanelOpen}
          setIsPanelOpen={setIsPanelOpen}
        />
      </HomePageWrapper>
    </>
  );
};
export default HomePage;
