import styled from "styled-components";
import ListTitle from "../ListTitle";
import StudioItem from "./StudioItem";

const StudioListContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StudioList = ({ dataList }) => {
  return (
    <StudioListContainer>
      <ListTitle text="스튜디오" viewMore />
      <ItemContainer>
        <StudioItem {...dataList[0]} />
        <StudioItem {...dataList[1]} />
      </ItemContainer>
    </StudioListContainer>
  );
};

export default StudioList;
