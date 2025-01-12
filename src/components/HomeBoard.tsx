import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Building from "./Building";
interface PanelProps {
  isOpen: boolean;
}
const Container = styled.div`
  overflow: hidden;
  top: 0px;
`;
const MarkList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: vertical;
  left: 100%;
  top: 15px;
  margin-left: 30px;
  gap: 12px;
`;
const Panel = styled.div<PanelProps>`
  position: absolute;
  top: 0;
  height: 100vh;
  background: white;
  z-index: 100;
  width: ${({ isOpen }) => (isOpen ? "400px" : "0px")};
  transition: width 0.3s ease-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
`;
const Mark = styled.button`
  background: white;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;
const Button = styled.button`
  position: absolute;
  background: white;
  border: 1px solid rgb(234, 234, 234);
  width: 25px;
  height: 50px;
  top: 50%;
  left: 100%;
  border-radius: 0 10px 10px 0;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 17px;
`;

const HomeBoard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Panel isOpen={isOpen}>
        <MarkList>
          <li>
            <Mark> 화장실</Mark>
          </li>
          <li>
            <Mark>정수기</Mark>
          </li>
          <li>
            <Mark>카페</Mark>
          </li>
        </MarkList>
        <Button onClick={toggleMenu}>
          {!isOpen ? (
            <>
              <IoIosArrowForward />
            </>
          ) : (
            <>
              <IoIosArrowBack />
            </>
          )}
        </Button>
        <Container>
          <Building />
        </Container>
      </Panel>
    </>
  );
};

export default HomeBoard;
