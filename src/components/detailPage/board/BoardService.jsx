import styled from 'styled-components';

const BoardServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  border-bottom: 1px solid #ECECEC;
  padding-bottom: 18px;
  margin-bottom: 31px;
`;

const BoardServiceWrapper = styled.div`
  display: flex;
  margin-left: 26px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #D1D1D1;
  
  margin-right: 21px;
`;

const Content = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #807C7C;
`;

function BoardService({location, price}) {
  return (
    <BoardServiceContainer>
      <BoardServiceWrapper>
        <Title>서비스 지역</Title>
        <Content>{location}</Content>
      </BoardServiceWrapper>
      <BoardServiceWrapper>
        <Title>서비스 금액</Title>
        <Content>{price}원</Content>
      </BoardServiceWrapper>
    </BoardServiceContainer>
  );
}

export default BoardService;