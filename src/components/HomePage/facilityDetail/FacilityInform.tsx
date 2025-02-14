import styled from "@emotion/styled";
import { FacilityInfo } from "../../data/buildingData.ts";
import { LikeButton } from "../Buttons.tsx";
interface FacilityInformProps {
  facility: FacilityInfo;
}
const FacilityInform: React.FC<FacilityInformProps> = ({ facility }) => {
  const handleLike = async (like: boolean) => {
    if (sessionStorage.getItem("accessToken")) {
      if (like) {
        facility.like += 1;
      } else {
        facility.dislike += 1;
      }
    } else {
      alert("로그인을 해주세요");
    }
  };

  return (
    <>
      <Container>
        <Title>
          <h2>
            {facility.floor}층 {facility.name}
          </h2>
          <Building>{facility.building} </Building>
        </Title>
        <Like>
          <LikeButton onClick={() => handleLike(true)}>
            좋아요 {facility.like}개
          </LikeButton>
          <LikeButton onClick={() => handleLike(false)}>
            싫어요 {facility.dislike}개
          </LikeButton>
        </Like>
      </Container>
    </>
  );
};
export default FacilityInform;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const Building = styled.p`
  margin-left: 10px;
  color: #a7a7a7;
`;
const Like = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0px 10px 0px;
`;
const Container = styled.div`
  width: 400px;
  padding: 20px 40px;
  overflow: hidden;
`;
