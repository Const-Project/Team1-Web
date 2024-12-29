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
      center: new kakao.maps.LatLng(37.550868533311785, 126.9255591243572),
      level: 3,
    };
    new kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ width: `500px`, height: `500px` }}></div>;
};
export default Kakaomap;
