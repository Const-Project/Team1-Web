import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  padding: 45px;
  overflow: hidden;
`;
const Title = styled.div`
  width: 300px;
  font-size: 30px;
  font-weight: 600;
`;
const Building = () => {
  return (
    <>
      <Container>
        <Title>홍익대학교</Title>
      </Container>
    </>
  );
};
export default Building;
