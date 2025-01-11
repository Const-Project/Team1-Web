import { useEffect } from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const Kakaomap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.552635722509, 126.92436042413),
      level: 1,
    };
    new kakao.maps.Map(container, options);
  }, []);
  return (
    <div
      id="map"
      style={{ width: "calc(100vw - 70px)", height: "100vh" }}
    ></div>
  );
};
export default Kakaomap;
