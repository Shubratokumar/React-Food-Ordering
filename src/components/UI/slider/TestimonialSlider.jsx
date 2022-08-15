import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis aperiam ullam, voluptatem repudiandae explicabo possimus ex atque, accusamus deleniti at asperiores vel. Nesciunt eos, iure quisquam sed quasi a.</p>
        <div className="slider_content d-flex align-items-center justify-content-center gap-3">
            <img src={ava01} alt="avatar" className="rounded" />
            <h6>Adam Smith</h6>
        </div>
      </div>
      <div>
        <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis aperiam ullam, voluptatem repudiandae explicabo possimus ex atque, accusamus deleniti at asperiores vel. Nesciunt eos, iure quisquam sed quasi a.</p>
        <div className="slider_content d-flex align-items-center justify-content-center gap-3">
            <img src={ava02} alt="avatar" className="rounded"/>
            <h6>Wiliam Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis aperiam ullam, voluptatem repudiandae explicabo possimus ex atque, accusamus deleniti at asperiores vel. Nesciunt eos, iure quisquam sed quasi a.</p>
        <div className="slider_content d-flex align-items-center justify-content-center gap-3">
            <img src={ava03} alt="avatar" className="rounded"/>
            <h6>Tailor Gump</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
