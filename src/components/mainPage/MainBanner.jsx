import { useCallback, useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { LeftArrowIcon, RightArrowIcon } from "../Icon";

const BannerContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
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

  z-index: 1;

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

  z-index: 1;

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

  z-index: 1;
`;

const CurrentPage = styled.span`
  color: white;
`;

const BannerImage = styled.img`
  width: 100%;
`;

const MainBanner = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const slickRef = useRef();
  const previous = useCallback(() => {
    slickRef.current.slickPrev();
  }, []);
  const next = useCallback(() => {
    slickRef.current.slickNext();
  }, []);

  const images = [process.env.PUBLIC_URL + "banner/banner1.png", process.env.PUBLIC_URL + "banner/banner2.png"];

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentPage(current + 1),
  };

  return (
    <BannerContainer>
      <LeftArrowIconWrapper onClick={previous}>
        <LeftArrowIcon />
      </LeftArrowIconWrapper>
      <RightArrowIconWrapper onClick={next}>
        <RightArrowIcon />
      </RightArrowIconWrapper>
      <BannerPage>
        <CurrentPage>{currentPage}&nbsp;</CurrentPage> / 2
      </BannerPage>
      <Slider {...slideSettings} ref={slickRef}>
        {images.map((image, idx) => (
          <BannerImage key={idx} src={image} alt="banner" />
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default MainBanner;
