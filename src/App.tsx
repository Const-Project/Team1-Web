import React from "react";
import KakaoMap from "./componets/map/Kakaomap.tsx";

function App() {
  console.log(import.meta.env.VITE_KAKAO_MAP);
  return (
    <div>
      <KakaoMap />
      <h1>Kakao 지도</h1>
    </div>
  );
}

export default App;
