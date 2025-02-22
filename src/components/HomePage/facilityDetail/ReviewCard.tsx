import { IoMdHeart } from "react-icons/io";
import { LikeButton } from "../Buttons";
import styled from "@emotion/styled";
import { ReviewInfo } from "../../data/buildingData";

interface ReviewCardProps {
  review: ReviewInfo;
}
const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const handleLike = () => {
    console.log("좋아요");
  };
  return (
    <ReviewContainer>
      <Review>
        <div>{review.content}</div>
        <LikeButton onClick={() => handleLike()}>
          <IoMdHeart size="13" style={{ marginRight: 5, marginTop: 1 }} />
          {review.totalLikes}
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
          {review.reviewId}
        </div>
        <div style={{ fontSize: "14px", color: "#828282" }}>
          {review.createdAt}
        </div>
      </div>
    </ReviewContainer>
  );
};
export default ReviewCard;
const ReviewContainer = styled.div`
  padding: 0px 10px;
  margin-bottom: 10px;
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
