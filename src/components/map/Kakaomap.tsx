import { useEffect } from "react";
import { buildingData, BuildingInfo } from "../data/buildingData";
import { useAtom } from "jotai";
import {
  facilityAtom,
  markFacilityAtom,
  selectedBuildingAtom,
} from "../../store/building.ts";

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
  const [markFacility] = useAtom(markFacilityAtom);
  const addMarkers = (map: any) => {
    if (markFacility) {
      buildingData.forEach((building) => {
        building.facilities?.forEach((facility) => {
          if (facility.type === markFacility) {
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
            });
          }
        });
      });
    } else {
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
      center: new kakao.maps.LatLng(37.55087078580574, 126.92555912211695),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);
    addMarkers(map);

    if (selectedBuilding) {
      const moveLatLon = new kakao.maps.LatLng(
        selectedBuilding.coordinates.lat,
        selectedBuilding.coordinates.lng
      );
      map.setCenter(moveLatLon);
    }
  }, [selectedBuilding, markFacility]);

  return (
    <div
      id="map"
      style={{ width: "calc(100vw - 70px)", height: "100vh" }}
    ></div>
  );
};

export default Kakaomap;
