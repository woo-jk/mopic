import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: 25px;
  padding-bottom: 25px;
`;

const LeftChild = styled.div`
  width: 25%;
  justify-content: start;
`;

const HeadText = styled.div`
  width: 50%;
  font-weight: 700;
  font-size: 20px;
  justify-content: center;
`;

const RightChild = styled.div`
  width: 25%;
  justify-content: end;
`;

const Header = ({ leftChild, headText, rightChild }) => {
  return (
    <HeaderContainer>
      <LeftChild>{leftChild}</LeftChild>
      <HeadText>{headText}</HeadText>
      <RightChild>{rightChild}</RightChild>
    </HeaderContainer>
  );
};

export default Header;
