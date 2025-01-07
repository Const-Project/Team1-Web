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
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    new kakao.maps.Map(container, options);
  }, []);
  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
};
export default Kakaomap;
