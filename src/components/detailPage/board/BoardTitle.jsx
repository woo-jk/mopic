import styled from 'styled-components';
import {LikeIcon} from "../../Icon";

const BoardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 35px;
  padding: 0 16px 0 26px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;

  margin: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

function BoardTitle({text}) {
  return (
  <BoardTitleContainer>
    <Title>{text}</Title>
    <IconWrapper>
      <LikeIcon/>
    </IconWrapper>
  </BoardTitleContainer>
);
}

export default BoardTitle;