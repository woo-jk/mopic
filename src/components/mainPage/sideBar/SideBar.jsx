import styled from "styled-components";
import SubMenu from "./SubMenu";
import UserMenu from "./UserMenu";

const BackGround = styled.div`
  position: fixed;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  overflow: hidden;

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
  animation: 0.5s showUp forwards;

  padding: 0 35px 0 35px;
  box-sizing: border-box;

  @keyframes showUp {
    0% {
      transform: translate(100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

const SideBar = ({ userData, setShowSideBar }) => {
  const handleClickBackGround = () => {
    setShowSideBar(false);
    document.body.style.overflow = "unset";
  };

  const myActivityMenu = [{ title: "카테고리1" }, { title: "카테고리2" }];

  const otherMenu = [{ title: "이벤트" }, { title: "공지사항" }];

  return (
    <BackGround onClick={handleClickBackGround}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <UserMenu userData={userData} />
        <SubMenu title="나의 활동" dataList={myActivityMenu} />
        <SubMenu title="기타" dataList={otherMenu} />
      </ModalContainer>
    </BackGround>
  );
};

export default SideBar;
