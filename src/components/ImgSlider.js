import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="">
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="">
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="">
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="">
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;
