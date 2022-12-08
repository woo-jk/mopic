import styled from 'styled-components';
import { InstargramIcon, KakaoTalkIcon, PersonIcon } from "../../Icon";

const BoardProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 26px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;

const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #D9D9D9;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #413F3F;

  margin-bottom: 3px;
`;

const UserType = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #A8A8A8;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 11px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BoardProfile = ({user, type}) => {
  return (
    <BoardProfileContainer>
      <UserInfoContainer>
        <UserImage>
          <IconWrapper>
            <PersonIcon />
          </IconWrapper>
        </UserImage>
        <UserInfoWrapper>
          <UserName>{user}</UserName>
          <UserType>{type}</UserType>
        </UserInfoWrapper>
      </UserInfoContainer>
      <IconContainer>
        <IconWrapper>
          <InstargramIcon />
        </IconWrapper>
        <IconWrapper>
          <KakaoTalkIcon />
        </IconWrapper>
      </IconContainer>
    </BoardProfileContainer>
  );
}

export default BoardProfile;