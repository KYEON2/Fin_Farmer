import styled from "styled-components";
import { useParams } from "react-router-dom";

const images = {
    1: require('../asserts/Search/1.png'),
    2: require('../asserts/Search/2.png'),
    3: require('../asserts/Search/3.png'),
    4: require('../asserts/Search/4.png'),
    5: require('../asserts/Search/5.png'),
  };

const listData = [
    {
      id: 1,
      image: images[1],
      type: "주말농장",
      price: "5,000/465",
      location: "용인시 처인구",
      description: "용인시 절골산 근처, 에버랜드 8분 거리...",
    },
    {
      id: 2,
      image: images[2],
      type: "체험농장 / 딸기",
      price: "체험비용 3.5",
      location: "남양주시 조안면",
      description: "운길산역 상권, 물의 정원, 북한강...",
    },
    {
      id: 3,
      image: images[3],
      type: "주말농장",
      price: "7,000/600",
      location: "시흥시 계수동",
      description: "글램핑, 오두막세트...",
    },
    {
      id: 4,
      image: images[4],
      type: "주말농장 / 밤",
      price: "3,000/300",
      location: "양평군",
      description: "양평역 근처의 대규모 주말농장…",
    },
    {
      id: 5,
      image: images[5],
      type: "주말농장",
      price: "4,000/400",
      location: "광주시 곤지암",
      description: "더포레스트캠핑장 근처…",
    },
  ];

const DetailContainer = styled.div`
  display: flex;
  width : 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 200px;
  color: white;
  background-color: #f0f4f8;
  min-height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 20px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 7px;
   background-color: gray;
   border-radius: 7px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #006400;
`;

const Location = styled.div`
  font-size: 16px;
  color: #ddd;
`;

const Description = styled.div`
  font-size: 14px;
  color: #aaa;
  line-height: 1.5;
`;


function ListDetail() {
  const { id } = useParams();
  const item = listData.find((data) => data.id === Number(id));

  if (!item) {
    return (
      <DetailContainer>
        <h1>해당 데이터를 찾을 수 없습니다.</h1>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <ImageContainer>
        <img src={item.image} alt={item.type} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.type}</Title>
        <Price>{item.price}</Price>
        <Location>{item.location}</Location>
        <Description>{item.description}</Description>
      </InfoContainer>
    </DetailContainer>
  );
}

export default ListDetail;
