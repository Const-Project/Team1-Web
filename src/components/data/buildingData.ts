export interface BuildingInfo {
  image: string;
  name: string;
  time: string;
  floors: number[];
  facilities?: FacilityInfo[];
  coordinates: { lat: number; lng: number };
}
export interface BuildingDataInfo {
  buildingId: number;
  name: string;
  imageUrl: string;
  closeTime: string;
  openTime: string;
  latitude: number;
  longitude: number;
  totalFloor: number;
  floors: number[];
  facilitySet: FacilitySetInfo[];
}
export interface FacilitySetInfo {
  categoryId: number;
  facilityId: number;
  floor: number;
  name: string;
  closeTime: string;
  openTime: string;
  reviewSet: ReviewInfo[];
  totalDisLikes: number;
  totalLikes: number;
  totalReviews: number;
}
export interface ReviewInfo {
  reviewId: number;
  content: string;
  createdAt: string;
  totalLikes: number;
  owner: boolean;
}
export interface FacilityInfo {
  building: string;
  type: number;
  floor: string;
  name: string;
  like: number;
  dislike: number;
  reviewCount: number;
  review: ReviewInfo[];
}
