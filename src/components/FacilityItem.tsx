import styled from "@emotion/styled";
import { LikeButton } from "./Buttons.tsx";
import { FacilityInfo } from "./data/buildingData.ts";
interface FacilityItemProps {
  facility?: FacilityInfo | null;
}
const FacilityItem: React.FC<FacilityItemProps> = ({ facility }) => {
  return (
    <>
      {facility ? (
        <>
          <TitleItems>
            <DetailTitle>
              {facility.floor}층 {facility.name}
            </DetailTitle>
            <StoreButton>+ 저장</StoreButton>
          </TitleItems>
          <Review>아직까지 작성된 리뷰가 없습니다!</Review>
          <Like>
            <LikeButton>좋아요 {facility.like}개</LikeButton>
            <LikeButton>싫어요 {facility.dislike}개</LikeButton>
          </Like>
        </>
      ) : (
        <p>시설 정보가 없습니다.</p>
      )}
    </>
  );
};

export default FacilityItem;

const TitleItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const StoreButton = styled.button`
  border: none;
  background: #8099b1;
  color: white;
  padding: 2px;
  width: 50px;
  height: 27px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: rgb(0, 51, 99, 0.8);
  }
`;

const DetailTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px;
`;

const Review = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #a7a7a7;
`;
const Like = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0px 10px 0px;
`;
