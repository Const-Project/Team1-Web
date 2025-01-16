import React from "react";
import { FacilityInfo } from "./data/buildingData";
import styled from "@emotion/styled";
import LikeButton from "./LikeButton";
import Divider from "./Divider";
import { IoMdHeart } from "react-icons/io";

interface FacilityDetailProps {
  facility: FacilityInfo;
}

const FacilityDetail: React.FC<FacilityDetailProps> = ({ facility }) => {
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
          <LikeButton>좋아요 {facility.like}개</LikeButton>
          <LikeButton>싫어요 {facility.dislike}개</LikeButton>
        </Like>
      </Container>
      <Divider size={true} />
      <Container>
        <Review>
          <h3>리뷰 {facility.reviewCount}개</h3>
        </Review>
        <ReviewInput>
          <Input type="text" placeholder="리뷰를 작성해주세요" />
          <ReviewButton>등록</ReviewButton>
        </ReviewInput>

        {facility.review.map((review) => (
          <>
            <Divider size={false} />
            <ReviewContainer>
              <Review>
                <div>{review.contents}</div>
                <LikeButton>
                  <IoMdHeart
                    size="13"
                    style={{ marginRight: 5, marginTop: 1 }}
                  />
                  {review.like}
                </LikeButton>
              </Review>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    fontSize: "15px",
                    marginRight: "10px",
                    fontWeight: 400,
                  }}
                >
                  {review.user}
                </div>
                <div style={{ fontSize: "14px", color: "#828282" }}>
                  {review.date}
                </div>
              </div>
            </ReviewContainer>
          </>
        ))}
      </Container>
    </>
  );
};

export default FacilityDetail;
const ReviewContainer = styled.div`
  padding: 0px 10px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 400px;
  padding: 20px 30px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
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
const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 300;
`;
const Input = styled.input`
  width: 83%;
  height: 35px;
  border: none;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 0px 10px;
`;
const ReviewButton = styled.button`
  border: none;
  width: 15%;
  border-radius: 5px;
  background: #8099b1;
  color: white;
  &:hover {
    background: #003363;
  }
`;
const ReviewInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 20px;
`;
