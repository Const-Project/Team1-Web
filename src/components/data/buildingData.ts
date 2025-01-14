export interface BuildingInfo {
  image: string;
  name: string;
  time: string;
  floors: number[];
  facilities?: FacilityInfo[];
}
export interface FacilityInfo {
  floor: string;
  name: string;
  like: number;
  dislike: number;
  reviewCount: number;
}

export const buildingData: BuildingInfo[] = [
  {
    image:
      "https://photo.hongik.ac.kr/app/board/attach/image/thumb_353_1697760691000.do",
    name: "홍문관",
    time: "10:00~18:00",
    floors: [1, 2, 3, 4, 5, 6, 7, 8],
    facilities: [
      { floor: "1", name: "화장실", like: 0, dislike: 0, reviewCount: 0 },
    ],
  },
  {
    image: "https://www.hongik.ac.kr/front/images/local/common/logo.png",
    name: "와우관",
    time: "00:00~24:00",
    floors: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];
