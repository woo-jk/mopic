import styled from "styled-components";

const BackGround = styled.div`
  position: fixed;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  @media (min-width: 440px) {
    margin-left: -16px;
    width: 470px;
  }
  @media (max-width: 440px) {
    left: 0;
    width: 100vw;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  right: 0;

  width: 318px;
  height: 100vh;

  background: #ffffff;
  border-radius: 20px 0px 0px 0px;
`;

const SideBar = ({ setShowSideBar }) => {
  const handleClickBackGround = () => {
    setShowSideBar(false);
  };

  return (
    <BackGround onClick={handleClickBackGround}>
      <ModalContainer onClick={(e) => e.stopPropagation()}></ModalContainer>
    </BackGround>
  );
};

export default SideBar;
