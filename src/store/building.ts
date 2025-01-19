import { atom } from "jotai";
import {
  BuildingInfo,
  FacilityInfo,
} from "../components/data/buildingData.tsx";

export const selectedBuildingAtom = atom<BuildingInfo | null>(null);
export const isPanelOpenAtom = atom<boolean>(false);
export const facilityAtom = atom<FacilityInfo | null>(null);
export const MarkFacilityAtom = atom<number | null>(null);
