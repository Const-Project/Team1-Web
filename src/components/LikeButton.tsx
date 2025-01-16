import styled from "@emotion/styled";

const LikeButton = styled.button`
  border: none;
  background: rgb(0, 51, 99, 0.2);
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  &:hover {
    background: rgb(0, 51, 99, 0.5);
    color: white;
  }
`;
export default LikeButton;
