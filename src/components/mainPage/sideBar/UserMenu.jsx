import styled from "styled-components";
import { Button } from "../../Button";
import { ProfileIcon } from "../../Icon";

const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 320px;
  padding: 100px 0 50px 0;
  box-sizing: border-box;

  border-bottom: 1px solid #f1f1f1;
`;

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100px;
`;

const UserNameAndType = styled.div``;

const UserName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.3px;

  padding-top: 5px;
  padding-bottom: 5px;
`;

const UserType = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #b8b8b8;

  text-decoration-line: underline;
`;

const UserPictureAndModify = styled.div`
  text-align: center;
`;

const ProfileModifyButton = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.3px;

  color: #b8b8b8;
`;

const NeedLogin = styled.div`
  height: 100px;
  font-weight: 700;
  font-size: 20px;
  color: #413f3f;

  line-height: 100px;

  text-decoration: underline;
  cursor: pointer;
`;

const UserMenu = ({ userData }) => {
  return (
    <UserMenuContainer>
      {userData ? (
        <UserProfileContainer>
          <UserNameAndType>
            <UserName>
              {userData.name}님
              <br />
              안녕하세요!
            </UserName>
            <UserType>{userData.type} 작업자</UserType>
          </UserNameAndType>
          <UserPictureAndModify>
            <ProfileIcon />
            <ProfileModifyButton>프로필 수정</ProfileModifyButton>
          </UserPictureAndModify>
        </UserProfileContainer>
      ) : (
        <NeedLogin>로그인 해 주세요.</NeedLogin>
      )}
      <Button disabled={!userData}>구인글 올리기</Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
