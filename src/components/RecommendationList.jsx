import styled from "styled-components";
import RecommendationItem from "./RecommendationItem";

const RecommendationListContainer = styled.div`
  margin-top: 44px;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;

  margin-bottom: 21px;
`;

const ItemContainer = styled.div`
  width: 454px;

  display: flex;
  gap: 10px;

  overflow: hidden;
`;

const RecommendationList = ({ dataList }) => {
  return (
    <RecommendationListContainer>
      <Title>추천 서비스</Title>
      <ItemContainer>
        {dataList.map((item) => (
          <RecommendationItem key={item.id} {...item} />
        ))}
      </ItemContainer>
    </RecommendationListContainer>
  );
};

export default RecommendationList;
