import styled from "@emotion/styled";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding-top: 50px;
  left: 0px;
  width: 70px;
  max-height: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1000;
  box-shadow: 4px 0px 3px rgba(0, 0, 0, 0.03);
`;
interface IconProps {
  isActive: boolean;
}

const Icon = styled.a<IconProps>`
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
  color: ${({ isActive }) => (!isActive ? "#003363" : "white")};
  background: ${({ isActive }) => (!isActive ? "white" : "#003363")};
  &:hover {
    background-color: #003363;
    color: white;
  }
`;
const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Container>
        <Icon href="/" isActive={location.pathname === "/"}>
          <FaHome size="25" />
          지도 홈
        </Icon>

        <Icon isActive={location.pathname === "/store"}>
          <FaStar size="25" />
          저장
        </Icon>

        <Icon href="/" isActive={location.pathname === "/profile"}>
          <IoPerson size="25" />내 정보
        </Icon>
      </Container>
    </>
  );
};
export default NavBar;
