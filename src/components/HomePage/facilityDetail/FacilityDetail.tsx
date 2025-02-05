import React, { useEffect, useState } from "react";
import { FacilityInfo } from "../../data/buildingData.ts";
import styled from "@emotion/styled";
import { BackButton } from "../Buttons.tsx";
import Divider from "../Divider.tsx";
import { FaAngleLeft } from "react-icons/fa6";
import { facilityAtom, isPanelOpenAtom } from "../../../store/building.ts";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import FacilityInform from "./FacilityInform.tsx";
import ReviewCard from "./ReviewCard.tsx";
interface FacilityDetailProps {
  facility: FacilityInfo;
}

const FacilityDetail: React.FC<FacilityDetailProps> = ({ facility }) => {
  const [, setFacility] = useAtom(facilityAtom);
  const [isPanelOpen] = useAtom(isPanelOpenAtom);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    const token = sessionStorage.getItem("accesstoken");
    if (token) {
      setIsLogin(true);
    }
  };
  const handleSubmit = () => {
    console.log("리뷰 등록");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {isPanelOpen && (
        <BackButton onClick={() => setFacility(null)}>
          <FaAngleLeft size="25px" color="gray" />
        </BackButton>
      )}
      <FacilityInform facility={facility} />
      <Divider sizes={true} />
      <Container>
        <Review>
          <h3>리뷰 {facility.reviewCount}개</h3>
        </Review>
        <ReviewInput onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder={isLogin ? "리뷰를 작성해주세요" : "로그인을 해주세요"}
            onClick={isLogin ? () => {} : () => navigate("/login")}
          />
          <ReviewButton type="submit">등록</ReviewButton>
        </ReviewInput>

        {facility.review.map((review) => (
          <div key={review.user}>
            <Divider sizes={false} />
            <ReviewCard review={review} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default FacilityDetail;

const Container = styled.div`
  width: 400px;
  padding: 20px 40px;
  overflow: hidden;
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
  cursor: pointer;
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
const ReviewInput = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 20px;
`;
