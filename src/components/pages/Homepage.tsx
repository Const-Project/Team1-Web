import styled from "@emotion/styled";
import HomeBoard from "../HomeBoard.tsx";
import Kakaomap from "../map/Kakaomap.tsx";
import NavBar from "../nav/NavBar.tsx";
const HomePageWrapper = styled.div`
  position: relative;
  width: calc(100vw - 70px);
  height: 100vh;
`;
const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomePageWrapper>
        <Kakaomap />
        <HomeBoard />
      </HomePageWrapper>
    </>
  );
};
export default HomePage;
