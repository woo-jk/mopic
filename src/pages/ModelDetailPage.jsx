import DetailHeader from "../components/detailPage/DetailHeader";
import DetailImages from "../components/detailPage/DetailImages";
import Board from "../components/detailPage/board/Board";
import { modelWorkDataList } from "../components/detailPage/dummyData";
import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
  margin: 0px -16px 0px -16px;
`;

const ModelDetailPage = () => {
  const data = modelWorkDataList[0];

  return (
    <PageContainer>
      <DetailHeader />
      <DetailImages images={data.images} />
      <Board {...data} />
    </PageContainer>
  );
};

export default ModelDetailPage;
