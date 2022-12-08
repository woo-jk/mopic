import styled from 'styled-components';

const BoardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  border-top: 1px solid #ECECEC;
  padding-top: 31px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #D1D1D1;
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #4A4A4A;

  line-height: 25px;
  letter-spacing: -0.3px;
  white-space: pre-wrap;
`;

function BoardContent({description, form}) {
  return (
    <BoardContentContainer>
      <ContentWrapper>
        <Title>상세설명</Title> 
        <Description>{description}</Description>
      </ContentWrapper>
      <ContentWrapper>
        <Title>지원양식</Title>
        <Description>{form}</Description>
      </ContentWrapper>
    </BoardContentContainer>
  );
}

export default BoardContent;