import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ListSection from '../component/ListSection_';

const images = {
  1: require('../asserts/Search/1.png'),
  2: require('../asserts/Search/2.png'),
  3: require('../asserts/Search/3.png'),
  4: require('../asserts/Search/4.png'),
  5: require('../asserts/Search/5.png'),
};

const Con = styled.div`
  background-color: #f0f4f8; 
  color: white;
  height: 100vh; 
  width: 100vw; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: flex-start;
  overflow-y: scroll; 
  padding: 40px; 
  gap: 20px; 
  background-color: #f0f4f8; 
`;

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

function List() {
  const navigate = useNavigate(); 

  const handleClick = (id) => {
    navigate(`/list/${id}`); 
  };

  return (
    <Con>
      <ListContainer>
        {listData.map((item) => (
          <div key={item.id} onClick={() => handleClick(item.id)}>
            <ListSection
              image={item.image}
              type={item.type}
              price={item.price}
              location={item.location}
              description={item.description}
            />
          </div>
        ))}
      </ListContainer>
    </Con>
  );
}

export default List;
