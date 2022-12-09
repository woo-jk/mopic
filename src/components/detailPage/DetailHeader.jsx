import styled from "styled-components";
import { LeftArrowIcon, KebabMenuIcon } from "../Icon";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  
  padding: 35px 26px 0 22px;
  box-sizing: border-box;
  width: 100%;
`; 

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const DetailHeader = () => {
  return (
    <HeaderContainer>
        <IconWrapper>
          <LeftArrowIcon color={"black"}/>
        </IconWrapper>
        <IconWrapper>
          <KebabMenuIcon />
        </IconWrapper>
    </HeaderContainer>
  );
};

export default DetailHeader;