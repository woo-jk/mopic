import { useRef, useState } from "react";
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
`;

const EmptyDataContainer = styled.div`
  position: relative;
  width: 100%;
  height: 170px;

  background: #f1f1f1;
  border-radius: 6px;
`;

const EmptyDataText = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: 500;
  font-size: 16px;
  line-height: 34px;

  letter-spacing: -0.3px;

  color: #969696;
`;

const RegistrationButton = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: 700;
  font-size: 18px;
  line-height: 34px;

  letter-spacing: -0.3px;

  color: #502ce8;

  cursor: pointer;
`;

const RecommendationList = ({ dataList }) => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  return (
    <RecommendationListContainer>
      <ListTitle text="추천 서비스" />
      {dataList.length > 0 ? (
        <ItemContainer
          ref={scrollRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {dataList.map((item) => (
            <RecommendationItem key={item.id} {...item} />
          ))}
        </ItemContainer>
      ) : (
        <EmptyDataContainer>
          <EmptyDataText>아직 등록된 작업자가 없어요 :(</EmptyDataText>
          <RegistrationButton>지금 등록하러 가기 &gt;</RegistrationButton>
        </EmptyDataContainer>
      )}
    </RecommendationListContainer>
  );
};

export default RecommendationList;
