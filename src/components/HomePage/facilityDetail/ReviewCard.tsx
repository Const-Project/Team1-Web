import { IoMdHeart } from "react-icons/io";
import { LikeButton } from "../Buttons";
import styled from "@emotion/styled";

interface ReviewCardProps {
  review: {
    contents: string;
    like: number;
    user: string;
    date: string;
  };
}
const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const handleLike = () => {
    console.log("좋아요");
  };
  return (
    <ReviewContainer>
      <Review>
        <div>{review.contents}</div>
        <LikeButton onClick={() => handleLike()}>
          <IoMdHeart size="13" style={{ marginRight: 5, marginTop: 1 }} />
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
        <div style={{ fontSize: "14px", color: "#828282" }}>{review.date}</div>
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
