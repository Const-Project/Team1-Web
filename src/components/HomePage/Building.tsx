import styled from "@emotion/styled";
import Divider from "./Divider.tsx";
import Overflow from "./Overflow.tsx";
import { useAtom } from "jotai";
import { selectedBuildingAtom } from "../../store/building.ts";
import axios from "../../libs/axios.tsx";
import { useEffect, useState } from "react";
import { BuildingDataInfo } from "../data/buildingData.tsx";
const Building = () => {
  const [, setSelectedBuilding] = useAtom(selectedBuildingAtom);
  const [buildingData, setBuildingData] = useState<BuildingDataInfo[]>([]);
  const fetchBuilding = async () => {
    try {
      const response = await axios.get("/buildings/all");
      console.log(response.data);
      setBuildingData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBuilding();
  }, []);
  return (
    <>
      <Overflow>
        <Container>
          <Title>홍익대학교</Title>
        </Container>
        <Divider sizes={true} />
        <Container>
          <SubTitle>내부건물</SubTitle>
          {buildingData.map((building) => (
            <div key={building.buildingId}>
              <BuildingItem
                key={building.name}
                onClick={() => setSelectedBuilding(building)}
              >
                <Image src={building.imageUrl} />
                <Detail>
                  <Name>{building.name}</Name>
                  <div>
                    운영 시간: {building.closeTime} - {building.openTime}
                  </div>
                </Detail>
              </BuildingItem>
              <Divider sizes={false} />
            </div>
          ))}
        </Container>
      </Overflow>
    </>
  );
};
export default Building;

const Container = styled.div`
  width: 400px;
  position: relative;
  padding: 20px 30px;
`;
const Title = styled.div`
  margin: 10px 0px;
  width: 300px;
  font-size: 35px;
  font-weight: 600;
`;
const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const BuildingItem = styled.a`
  display: flex;
  margin: 20px 0px;
  color: black;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
