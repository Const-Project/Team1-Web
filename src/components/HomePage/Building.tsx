import styled from "@emotion/styled";
import Divider from "./Divider.tsx";
import { buildingData } from "../data/buildingData.ts";
import Overflow from "./Overflow.tsx";
import { useAtom } from "jotai";
import { selectedBuildingAtom } from "../../store/building.ts";

const Building = () => {
  const [, setSelectedBuilding] = useAtom(selectedBuildingAtom);
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
            <div key={building.name}>
              <BuildingItem
                key={building.name}
                onClick={() => setSelectedBuilding(building)}
              >
                <Image src={building.image} />
                <Detail>
                  <Name>{building.name}</Name>
                  <div>운영 시간: {building.time}</div>
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
