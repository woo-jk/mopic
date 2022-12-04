import { useState } from "react";
import styled from "styled-components";
import { LeftArrowIcon, RightArrowIcon } from "./Icon";

const BannerContainer = styled.div`
  position: relative;
`;

const LeftArrowIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);

  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: rgba(20, 20, 20, 0.2);
  cursor: pointer;
`;

const RightArrowIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);

  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: rgba(20, 20, 20, 0.2);
  cursor: pointer;
`;

const BannerPage = styled.div`
  position: absolute;
  right: 5px;
  bottom: 17px;

  width: 40px;
  height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #cdcdcd;
  color: #8b8b8b;
  border-radius: 10.5px;

  font-size: 10px;
  font-weight: 700;
`;

const CurrentPage = styled.span`
  color: white;
`;

const BannerImage = styled.img`
  width: 100%;
`;

const MainBanner = () => {
  const MIN_PAGE = 1;
  const MAX_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const decreasePage = () => {
    if (currentPage - 1 < MIN_PAGE) {
      setCurrentPage(MAX_PAGE);
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const increasePage = () => {
    if (currentPage + 1 > MAX_PAGE) {
      setCurrentPage(MIN_PAGE);
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  return (
    <BannerContainer>
      <LeftArrowIconWrapper onClick={decreasePage}>
        <LeftArrowIcon />
      </LeftArrowIconWrapper>
      <RightArrowIconWrapper onClick={increasePage}>
        <RightArrowIcon />
      </RightArrowIconWrapper>
      <BannerPage>
        <CurrentPage>{currentPage}&nbsp;</CurrentPage> / 2
      </BannerPage>
      <BannerImage src={process.env.PUBLIC_URL + `banner/banner${currentPage}.png`} alt="banner" />
    </BannerContainer>
  );
};

export default MainBanner;
