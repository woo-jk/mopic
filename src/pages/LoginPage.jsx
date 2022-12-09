import styled from "styled-components";
import { Button } from "../components/Button";
import { KaKaoTalkLoginIcon, NaverLoginIcon } from "../components/Icon";

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
  width: 100%;
  padding: 0 34px 0 34px;

  box-sizing: border-box;
  /* background: #502ce8; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  gap: 200px;
`;

const Logo = styled.img`
  width: 180px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 17px;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <ContentContainer>
        <Logo src={process.env.PUBLIC_URL + `mopic_logo.png`} alt="logo" />
        <LoginButtonContainer>
          <Button size="14px" weight="600" background="#FFE600" color="#381E1E">
            <KaKaoTalkLoginIcon />
            카카오 로그인
          </Button>
          <Button size="14px" weight="600" background="#00C300">
            <NaverLoginIcon />
            네이버 로그인
          </Button>
        </LoginButtonContainer>
      </ContentContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
