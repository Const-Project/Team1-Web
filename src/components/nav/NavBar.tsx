import styled from "@emotion/styled";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Container = styled.div`
  left: 0px;
  width: 70px;
  max-height: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.03);
`;
const Icon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 70px;
  font-size: 12px;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    background-color: #003363;
    color: white;
  }
`;
const NavBar: React.FC = () => {
  return (
    <>
      <Container>
        <Icon href="/">
          <FaHome size="25" />
          지도 홈
        </Icon>

        <Icon>
          <FaStar size="25" />
          저장
        </Icon>

        <Icon href="/">
          <IoPerson size="25" />내 정보
        </Icon>
      </Container>
    </>
  );
};
export default NavBar;
