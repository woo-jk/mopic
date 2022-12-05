import styled from "styled-components";
import ListTitle from "../ListTitle";
import ModelWorkItem from "./ModelWorkItem";

const ModelWorkListContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ItemContainer = styled.div``;

const ModelWorkList = ({ dataList }) => {
  return (
    <ModelWorkListContainer>
      <ListTitle text="모델 구해요" viewMore />
      <ItemContainer>
        {dataList.map((item) => (
          <ModelWorkItem key={item.id} {...item} />
        ))}
      </ItemContainer>
    </ModelWorkListContainer>
  );
};

export default ModelWorkList;
