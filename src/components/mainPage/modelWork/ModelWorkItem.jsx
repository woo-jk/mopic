import styled from "styled-components";

const ItemContainer = styled.div`
  /* height: 92px; */

  display: flex;
  align-items: center;
  gap: 16px;

  border-top: 1px solid #f1f1f1;
  padding-top: 13px;
  padding-bottom: 13px;

  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 66px;
  height: 66px;
  object-fit: cover;
  border-radius: 6px;
`;

const ItemContent = styled.div`
  margin-top: 5px;
  line-height: 24px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #5b5b5b;
`;

const Category = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #bababa;
`;

const ModelWorkItem = ({ image, title, category }) => {
  return (
    <ItemContainer>
      <ItemImage src={image} />
      <ItemContent>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </ItemContent>
    </ItemContainer>
  );
};

export default ModelWorkItem;
