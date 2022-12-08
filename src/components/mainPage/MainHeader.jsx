import styled from "styled-components";
import { LikeIcon, MenuIcon } from "../Icon";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px 0 25px 0;
`;

const Logo = styled.img`
  width: 100px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const MainHeader = ({ setShowSideBar }) => {
  const handleClickMenu = () => {
    setShowSideBar(true);
  };

  return (
    <HeaderContainer>
      <Logo src={process.env.PUBLIC_URL + `mopic_logo.png`} alt="logo" />
      <IconContainer>
        <IconWrapper>
          <LikeIcon />
        </IconWrapper>
        <IconWrapper onClick={handleClickMenu}>
          <MenuIcon />
        </IconWrapper>
      </IconContainer>
    </HeaderContainer>
  );
};

export default MainHeader;
