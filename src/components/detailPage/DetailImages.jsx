import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Image = styled.img`
  height: 262px;
  object-fit: cover;
`;

const DetailImages = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  return (
    <Slider {...settings}> 
      {images.map((image) => {
        return <Image key={image.id} src={image.src} alt="detailImage" />;
      })}
    </Slider>
  );
}

export default DetailImages;