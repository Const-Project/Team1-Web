export interface BuildingInfo {
  image: string;
  name: string;
  time: string;
  floors: string[];
}

export const buildingData: BuildingInfo[] = [
  {
    image:
      "https://photo.hongik.ac.kr/app/board/attach/image/thumb_353_1697760691000.do",
    name: "홍문관",
    time: "10:00~18:00",
    floors: ["1층", "2층", "3층", "4층", "5층", "6층", "7층", "8층"],
  },
  {
    image: "https://www.hongik.ac.kr/front/images/local/common/logo.png",
    name: "와우관",
    time: "00:00~24:00",
    floors: ["1층", "2층", "3층", "4층", "5층", "6층", "7층", "8층"],
  },
];
