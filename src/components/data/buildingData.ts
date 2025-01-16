export interface BuildingInfo {
  image: string;
  name: string;
  time: string;
  floors: number[];
  facilities?: FacilityInfo[];
  coordinates: { lat: number; lng: number };
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
interface ReviewInfo {
  contents: string;
  user: string;
  date: string;
  like: number;
}
export const buildingData: BuildingInfo[] = [
  {
    image:
      "https://photo.hongik.ac.kr/app/board/attach/image/thumb_353_1697760691000.do",
    name: "홍문관",
    time: "10:00~18:00",
    floors: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    coordinates: { lat: 37.55258227611087, lng: 126.92491801500331 },
    facilities: [
      {
        building: "홍문관",
        floor: "1",
        type: 1,
        name: "화장실",
        like: 0,
        dislike: 0,
        reviewCount: 2,
        review: [
          {
            contents: "안녕하세요",
            user: "컴공생",
            date: "2021.09.01",
            like: 0,
          },
          {
            contents: "깨끗해요!",
            user: "자율전공샹",
            date: "2025.10.01",
            like: 3,
          },
        ],
      },
      {
        building: "홍문관",
        floor: "3",
        type: 1,
        name: "화장실",
        like: 0,
        dislike: 0,
        reviewCount: 2,
        review: [
          {
            contents: "안녕하세요",
            user: "컴공생",
            date: "2021.09.01",
            like: 0,
          },
          {
            contents: "깨끗해요!",
            user: "자율전공샹",
            date: "2025.10.01",
            like: 3,
          },
        ],
      },
      {
        building: "홍문관",
        floor: "1",
        type: 3,
        name: "카페나무",
        like: 4,
        dislike: 2,
        reviewCount: 1,
        review: [
          {
            contents: "안녕하세요",
            user: "컴공생",
            date: "2021.09.01",
            like: 0,
          },
        ],
      },
    ],
  },
  {
    image:
      "https://photo.hongik.ac.kr/app/board/attach/image/thumb_732_1700796628000.do",
    name: "와우관",
    time: "00:00~24:00",
    coordinates: { lat: 37.55167104651813, lng: 126.926557030475 },
    floors: [1, 2, 3, 4, 5, 6, 7, 8],
    facilities: [
      {
        building: "와우관",
        floor: "3",
        type: 1,
        name: "화장실",
        like: 3,
        dislike: 0,
        reviewCount: 2,
        review: [
          {
            contents: "안녕하세요",
            user: "컴공생",
            date: "2021.09.01",
            like: 0,
          },
          {
            contents: "깨끗해요!",
            user: "자율전공샹",
            date: "2025.10.01",
            like: 3,
          },
        ],
      },
    ],
  },
];
