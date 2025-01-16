import styled from "@emotion/styled";
interface DividerProps {
  size: boolean;
}
const Divider = styled.div<DividerProps>`
  width: 100%;
  height: ${({ size }) => (size ? "10px" : "1px")};
  background: #e9e9e9;
  margin-bottom: 10px;
`;

export default Divider;
