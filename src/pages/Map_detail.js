import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Con = styled.div`
  background-color: white;
  color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2e8b57; /* 진한 녹색 */
  text-align: center;
`;

const Info = styled.div`
  margin-top: 20px;

  p {
    font-size: 1rem;
    margin: 10px 0;

    strong {
      color: #2e8b57; /* 강조된 진한 녹색 */
    }
  }
`;

const BackLink = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #2e8b57;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #006400;
  }
`;

function MapDetail() {
  const navigate = useNavigate(); 

  return (
    <Con>
      <Container>
        <Title>경기 농지 1 정보</Title>
        <Info>
          <p>
            <strong>위치:</strong> 경기도 성남시 분당구
          </p>
          <p>
            <strong>면적:</strong> 10,000㎡
          </p>
          <p>
            <strong>재배 가능한 농작물:</strong> 쌀, 밀, 채소류
          </p>
          <p>
            <strong>임대 기간:</strong> 2024년 1월 1일 ~ 2026년 12월 31일
          </p>
          <p>
            <strong>추가 정보:</strong> 물과 전기 시설이 완비되어 있으며, 농기계 대여 가능
          </p>
        </Info>
        <BackLink onClick={() => navigate("/Map")}>지도 돌아가기</BackLink>
      </Container>
    </Con>
  );
}

export default MapDetail;
