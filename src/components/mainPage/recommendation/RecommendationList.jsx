import styled from "styled-components";
import ListTitle from "../ListTitle";
import RecommendationItem from "./RecommendationItem";

const RecommendationListContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 10px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 440px) {
    width: 454px;
  }
  @media (max-width: 440px) {
    width: 94vw;
  }
`;

const RecommendationList = ({ dataList }) => {
  return (
    <RecommendationListContainer>
      <ListTitle text="추천 서비스" />
      <ItemContainer>
        {dataList.map((item) => (
          <RecommendationItem key={item.id} {...item} />
        ))}
      </ItemContainer>
    </RecommendationListContainer>
  );
};

export default RecommendationList;
