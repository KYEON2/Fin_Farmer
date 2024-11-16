import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeroSection = styled.div`
  position: relative;
  height: 100vh; /* 전체 화면 높이 */
  width: 88vw; /* 전체 화면 너비 */
  background: linear-gradient(180deg, #f0fff0, #e0ffe0); /* 밝은 녹색 그라데이션 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; /* 패딩 및 보더 포함 */
`;

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.9); /* 흰색 반투명 배경 */
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 90%; /* 화면 너비의 90% */
  max-width: 1200px; /* 최대 너비 1200px */
  text-align: center;
  animation: fadeIn 2s ease-out, slideIn 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0 0 20px;
  font-weight: bold;
  color: #228b22; /* 진한 녹색 */

  @media (max-width: 768px) {
    font-size: 36px; /* 작은 화면에서는 글자 크기 축소 */
  }
`;

const Description = styled.p`
  font-size: 20px;
  margin: 10px 0 20px;
  color: #2e8b57; /* 중간 톤 녹색 */
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 18px;
  color: white;
  background: linear-gradient(45deg, #228b22, #32cd32); /* 녹색 그라데이션 */
  border: none;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg, #006400, #228b22); /* 진한 녹색 호버 */
    transform: scale(1.1); /* 확대 효과 */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;


const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const slideIn = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GlobalStyles = styled.div`
  ${fadeIn}
  ${slideIn}
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%; /* 부모 요소에 height 100% 설정 */
    width: 100%; /* 부모 요소에 width 100% 설정 */
    box-sizing: border-box;
    overflow: hidden; /* 스크롤 방지 */
  }
`;

function Home() {
  const navigate = useNavigate(); 

  const goToList = () => {
    navigate("/Map"); 
  };

  return (
    <GlobalStyles>
      <HeroSection>
        <ContentContainer>
          <Title>파인파머 (Fin_Farmer)</Title>
          <hr />
          <Description>농지와 농업 정보를 쉽게 찾고, 연결하는 플랫폼</Description>
          <Button onClick={goToList}>농지 찾기</Button>
        </ContentContainer>
      </HeroSection>
    </GlobalStyles>
  );
}

export default Home;
