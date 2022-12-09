import styled from "styled-components";
import { XIcon } from "./Icon";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 0 43px 0;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: -0.3px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Header = ({ text }) => {
  return (
    <HeaderContainer>
      <IconWrapper>
        <XIcon />
      </IconWrapper>
      <Title>{text}</Title>
    </HeaderContainer>
  );
};

export default Header;