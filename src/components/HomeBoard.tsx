import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface PanelProps {
  isOpen: boolean;
}
const Panel = styled.div<PanelProps>`
  position: absolute;
  top: 0;
  height: 100vh;
  background: white;
  z-index: 100;
  width: ${({ isOpen }) => (isOpen ? "400px" : "0px")};
  transition: width 0.3s ease-out;
  box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.03);
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
      </Panel>
    </>
  );
};

export default HomeBoard;
