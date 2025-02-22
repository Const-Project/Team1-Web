import { atom } from "jotai";
import {
  BuildingDataInfo,
  FacilitySetInfo,
} from "../components/data/buildingData.tsx";

export const selectedBuildingAtom = atom<BuildingDataInfo | null>(null);
export const isPanelOpenAtom = atom<boolean>(false);
export const facilityAtom = atom<FacilitySetInfo | null>(null);
export const markFacilityAtom = atom<number | null>(null);
