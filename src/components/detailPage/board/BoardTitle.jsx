import styled from 'styled-components';
import {LikeIcon} from "../../Icon";

const BoardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 35px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.3px;
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