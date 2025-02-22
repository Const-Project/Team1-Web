import { useEffect } from "react";
import { BuildingDataInfo } from "../data/buildingData";
import { useAtom } from "jotai";
import {
  facilityAtom,
  markFacilityAtom,
  selectedBuildingAtom,
} from "../../store/building.ts";
import axios from "../../libs/axios.tsx";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

interface KakaomapProps {
  onBuildingClick: (building: BuildingDataInfo) => void;
}
const Kakaomap: React.FC<KakaomapProps> = ({ onBuildingClick }) => {
  const [selectedBuilding] = useAtom(selectedBuildingAtom);
  const [, setFacility] = useAtom(facilityAtom);
  const [markFacility] = useAtom(markFacilityAtom);

  const addMarkers = async (map: any) => {
    const response = await axios.get("/buildings/all");
    if (markFacility) {
      response.data.forEach((building: BuildingDataInfo) => {
        building.facilitySet?.forEach((facility) => {
          if (facility.categoryId === markFacility) {
            const markerPosition = new kakao.maps.LatLng(
              building.latitude,
              building.longitude
            );
            const marker = new kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
            kakao.maps.event.addListener(marker, "click", () => {
              onBuildingClick(building);
              setFacility(null);
            });
          }
        });
      });
    } else {
      response.data.forEach((building: BuildingDataInfo) => {
        const markerPosition = new kakao.maps.LatLng(
          building.latitude,
          building.longitude
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
      center: new kakao.maps.LatLng(37.550873036516045, 126.92555629071806),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);
    addMarkers(map);

    if (selectedBuilding) {
      const moveLatLon = new kakao.maps.LatLng(
        selectedBuilding.latitude,
        selectedBuilding.longitude
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
