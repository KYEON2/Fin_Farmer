import styled from "styled-components";

const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px; /* 고정된 너비 */
  height: auto;
  min-width: 300px; /* 최소 너비 */
  max-width: 300px; /* 최대 너비 */
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ListImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ListDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  text-align: left;
`;

const ListType = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const ListPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const ListLocation = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const ListDescription = styled.div`
  font-size: 12px;
  color: #aaa;
`;

export default function ListSectionComponent({ image, type, price, location, description }) {
  return (
    <ListSection>
      <ListImage src={image} alt="List Item" />
      <ListDetails>
        <ListType>{type}</ListType>
        <ListPrice>{price}</ListPrice>
        <ListLocation>{location}</ListLocation>
        <ListDescription>{description}</ListDescription>
      </ListDetails>
    </ListSection>
  );
}
