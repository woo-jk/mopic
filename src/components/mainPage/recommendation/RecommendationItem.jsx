import styled from "styled-components";

const ItemContainer = styled.div`
  width: 120px;
  height: 170px;

  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

const ItemContent = styled.div`
  margin-top: 5px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #646464;

  margin-bottom: 5px;
`;
const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #502ce8;
`;

const RecommendationItem = ({ image, title, price }) => {
  return (
    <ItemContainer>
      <ItemImage src={image} />
      <ItemContent>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </ItemContent>
    </ItemContainer>
  );
};

export default RecommendationItem;
