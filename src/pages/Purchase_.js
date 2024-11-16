import React from 'react';
import styled from 'styled-components';

const images = {
  Bi: require('../asserts/Purchase/Bi.png'),
  Bla: require('../asserts/Purchase/Bla.png'),
  Gre: require('../asserts/Purchase/Gre.png'),
  Not: require('../asserts/Purchase/Not.png'),
  Sap: require('../asserts/Purchase/Sap.png'),
  Seed: require('../asserts/Purchase/Seed.png'),
};

const Con = styled.div`
  background: linear-gradient(to bottom, #d4e6d3, #a8d5a0); /* 부드러운 녹색 그라데이션 */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 가로 3등분 */
  gap: 20px;
  width: 90vw;
  padding: 20px;
  box-sizing: border-box;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  margin-top: 50px;
  text-align: center;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2); /* 강조된 그림자 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* 살짝 더 강조된 호버 효과 */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); /* 더 강한 그림자 */
  }
`;

// 제목 스타일
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #333333;
  font-weight: bold;
`;

// 이미지 스타일
const ProductImage = styled.img`
  width: 80%;
  max-height: 150px;
  object-fit: contain;
  margin: 10px 0;
  border-radius: 8px;
  padding: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// 가격 텍스트 스타일
const Price = styled.p`
  font-size: 18px;
  margin: 10px 0;
  color: #2d572c; /* 녹색 계열의 가격 색상 */
  font-weight: bold;
`;

// 버튼 스타일
const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(to right, #4caf50, #2e7d32); /* 녹색 버튼 그라데이션 */
  color: white;
  border: none;
  border-radius: 50px; /* 완전히 둥근 모서리 */
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 8px rgba(76, 175, 80, 0.3); /* 버튼 그림자 */

  &:hover {
    background: linear-gradient(to right, #2e7d32, #1b5e20); /* 더 진한 녹색 */
    transform: scale(1.05); /* 버튼 확대 효과 */
  }
`;

// 상품 데이터
const products = [
  { id: 1, title: '비료', price: '4900원', image: images.Bi },
  { id: 2, title: '삽', price: '13000원', image: images.Sap },
  { id: 3, title: '호미', price: '10000원', image: images.Not },
  { id: 4, title: '농업용부직포', price: '30000원', image: images.Bla },
  { id: 5, title: '지주대', price: '63000원', image: images.Gre },
  { id: 6, title: '씨앗', price: '4500원', image: images.Seed },
];

function Purchase() {
  return (
    <Con>
      <Container>
        {products.map((product) => (
          <Box key={product.id}>
            <Title>{product.title}</Title>
            <ProductImage src={product.image} alt={`${product.title} 이미지`} />
            <Price>{product.price}</Price>
            <Button>구매하기</Button>
          </Box>
        ))}
      </Container>
    </Con>
  );
}

export default Purchase;
