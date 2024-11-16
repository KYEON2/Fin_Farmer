import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import L from "https://cdn.skypack.dev/leaflet@1.9.4";

// 지도와 전체 배경 스타일링
const Con = styled.div`
  background-color: white;
  color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function Map() {
  const navigate = useNavigate(); 

  useEffect(() => {
    // Leaflet 지도 초기화
    const map = L.map("map").setView([37.5665, 126.978], 10); // 서울 중심 좌표

    // OpenStreetMap 타일 추가
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // 커스텀 마커 아이콘 정의
    const customIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // 원하는 아이콘 URL
      iconSize: [40, 40], // 아이콘 크기 [width, height]
      iconAnchor: [20, 40], // 아이콘 기준점 (중심을 하단으로 설정)
      popupAnchor: [0, -40], // 팝업 위치 조정
    });

    // 마커 및 데이터 정의
    const locations = [
      {
        name: "경기 농지 1",
        coords: [37.413294, 127.518],
        description: "경기도 성남 농지",
        route: "/MapDetail", 
      },
    ];

    locations.forEach((location) => {
      const marker = L.marker(location.coords, { icon: customIcon }).addTo(map); 

      marker.bindPopup(
        `<strong>${location.name}</strong><br>${location.description}`
      );

      marker.on("click", () => {
        navigate(location.route); 
      });
    });

    return () => {
      map.remove();
    };
  }, [navigate]);

  return (
    <Con>
      <MapContainer id="map" />
    </Con>
  );
}

export default Map;
