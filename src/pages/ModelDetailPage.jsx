import DetailHeader from "../components/detailPage/DetailHeader";
import DetailImages from "../components/detailPage/DetailImages";
import Board from "../components/detailPage/board/Board";
import { modelWorkDataList } from "../components/detailPage/dummyData";
import styled from "styled-components";

const ModelDetailPageContainer = styled.div`
  position: relative;
`;

const ModelDetailPage = () => {
  const data = modelWorkDataList[0];

  return (
    <ModelDetailPageContainer>
      <DetailHeader />
      <DetailImages images={data.images} />
      <Board {...data} />
    </ModelDetailPageContainer>
  );
};

export default ModelDetailPage;