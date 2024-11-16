import React from "react";
import styled from "styled-components";

const images = {
  apple: require('../asserts/Info/apple.png'),
  bae: require('../asserts/Info/bae.png'),
  Car: require('../asserts/Info/Car.png'),
  Cu: require('../asserts/Info/Cu.png'),
  Oni: require('../asserts/Info/Oni.png'),
  Pa: require('../asserts/Info/Pa.png'),
  Po: require('../asserts/Info/Po.png'),
  Pum: require('../asserts/Info/Pum.png'),
  Swe: require('../asserts/Info/Swe.png'),
  Toma: require('../asserts/Info/Toma.png'),
};

const Con = styled.div`
  background-color: #f7f7f7; /* 흰색 배경 */
  color: #333;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #2e7d32; /* 녹색 */
  color: white;
  padding: 20px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 5px 0 0;
    font-size: 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Product = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .product-info {
    padding: 15px;

    h2 {
      margin: 0 0 10px;
      font-size: 1.2rem;
      color: #2e7d32;

      a {
        text-decoration: none;
        color: #2e7d32;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      color: #555;
    }
  }
`;

const productData = [
  {
    id: 1,
    image: images.apple,
    name: "사과",
    description: "달콤하고 아삭한 사과는 비타민 C와 섬유질이 풍부합니다.",
    link: "apple.html",
  },
  {
    id: 2,
    image: images.bae,
    name: "배추",
    description:
      "김치를 만들 때 사용되는 배추는 비타민 A와 섬유질의 좋은 공급원입니다.",
    link: "baechew.html",
  },
  {
    id: 3,
    image: images.Swe,
    name: "고구마",
    description: "달콤하고 포만감을 주는 고구마는 베타카로틴과 비타민 C가 풍부합니다.",
    link: "sweetpotato.html",
  },
  {
    id: 4,
    image: images.Po,
    name: "감자",
    description: "탄수화물이 풍부하며 다양한 요리에 활용됩니다.",
    link: "potato.html",
  },
  {
    id: 5,
    image: images.Cu,
    name: "오이",
    description: "수분 함량이 높아 갈증 해소에 좋습니다.",
    link: "oe.html",
  },
  {
    id: 6,
    image: images.Car,
    name: "당근",
    description: "베타카로틴이 풍부하여 눈 건강에 좋습니다.",
    link: "carrot.html",
  },
  {
    id: 7,
    image: images.Pum,
    name: "호박",
    description: "부드러운 식감과 풍부한 영양소를 자랑합니다.",
    link: "pumkin.html",
  },
  {
    id: 8,
    image: images.Pa,
    name: "파프리카",
    description: "다양한 색상과 비타민 C가 풍부한 채소입니다.",
    link: "redpepper.html",
  },
  {
    id: 9,
    image: images.Toma,
    name: "토마토",
    description: "리코펜이 풍부해 건강에 좋은 채소입니다.",
    link: "tomato.html",
  },
  {
    id: 10,
    image: images.Oni,
    name: "양파",
    description: "항산화 물질이 많아 건강에 이롭습니다.",
    link: "onion.html",
  },
];

function Info() {
  return (
    <Con>
      <Header>
        <h1>농산물 정보</h1>
        <p>신선한 농산물에 대한 다양한 정보를 확인하세요.</p>
      </Header>
      <Container>
        {productData.map((product) => (
          <Product key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>
                <a href={product.link}>{product.name}</a>
              </h2>
              <p>{product.description}</p>
            </div>
          </Product>
        ))}
      </Container>
    </Con>
  );
}

export default Info;
