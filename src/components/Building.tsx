import styled from "@emotion/styled";
import Divider from "./Divider.tsx";
import { buildingData, BuildingInfo } from "./data/buildingData.ts";
const Container = styled.div`
  width: 400px;
  position: relative;
  padding: 20px 30px;
  overflow: hidden;
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
  margin: 10px 0px;
`;
const BuildingItem = styled.a`
  display: flex;
  margin: 20px 0px;
  color: black;
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

interface BuildingProps {
  onBuildingClick: (building: BuildingInfo) => void;
}
const Building: React.FC<BuildingProps> = ({ onBuildingClick }) => {
  return (
    <>
      <Container>
        <Title>홍익대학교</Title>
      </Container>
      <Divider size={true} />
      <Container>
        <SubTitle>내부건물</SubTitle>
        {buildingData.map((building) => (
          <>
            <BuildingItem
              key={building.name}
              href="#"
              onClick={() => onBuildingClick(building)}
            >
              <Image src={building.image} />
              <Detail>
                <Name>{building.name}</Name>
                <div>운영 시간: {building.time}</div>
              </Detail>
            </BuildingItem>
            <Divider size={false} />
          </>
        ))}
      </Container>
    </>
  );
};
export default Building;
