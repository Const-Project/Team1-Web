import { useEffect } from "react";
import { buildingData, BuildingInfo } from "../data/buildingData";
import { useAtom } from "jotai";
import { facilityAtom, selectedBuildingAtom } from "../../store/building.ts";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

interface KakaomapProps {
  onBuildingClick: (building: BuildingInfo) => void;
}
const Kakaomap: React.FC<KakaomapProps> = ({ onBuildingClick }) => {
  const [selectedBuilding] = useAtom(selectedBuildingAtom);
  const [, setFacility] = useAtom(facilityAtom);
  const addMarkers = (map: any) => {
    {
      buildingData.forEach((building) => {
        const markerPosition = new kakao.maps.LatLng(
          building.coordinates.lat,
          building.coordinates.lng
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        kakao.maps.event.addListener(marker, "click", () => {
          onBuildingClick(building);
          setFacility(null);
        });
      });
    }
  };

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.552635722509, 126.92436042413),
      level: 1,
    };
    const map = new kakao.maps.Map(container, options);
    addMarkers(map);

    // 선택된 건물이 변경될 때 지도를 해당 위치로 이동
    if (selectedBuilding) {
      const moveLatLon = new kakao.maps.LatLng(
        selectedBuilding.coordinates.lat,
        selectedBuilding.coordinates.lng
      );
      map.setCenter(moveLatLon);
    }
  }, [selectedBuilding]);

  return (
    <div
      id="map"
      style={{ width: "calc(100vw - 70px)", height: "100vh" }}
    ></div>
  );
};

export default Kakaomap;
