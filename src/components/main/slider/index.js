import React from 'react'

import slide1 from "../../../images/slide-1.webp";
import slide2 from "../../../images/slide-2.webp";
import Slider from './Slider';
import Carousel from 'react-multi-carousel';

const slides = [
    {
        name: `Playing Video <br /> Game`,
        offPerc: 40,
        imgSrc: slide1,
    },
    {
        name: `New Wireless <br />Speaker`,
        offPerc: 50,
        imgSrc: slide2,
    }
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CustomDot({ onClick, active }) {
  const dotStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: active ? "#fdda06" : "white", // Change the color of the active and inactive dots here
    margin: "5px",
    cursor: "pointer",
  };

  return <span onClick={onClick} style={dotStyle} />;
}




const SliderCarousel = () => {
  return (
      <Carousel
                responsive={responsive}
                infinite={true}
                arrows={false}
                showDots={true}
                autoPlay={true}
                customDot={<CustomDot />}
              >
               
          {slides.map((slide, index) => (
          <Slider imgSrc={slide.imgSrc} name={slide.name} offPercentage={slide.offPerc} />
                ))}
        </Carousel>
    )
}


export default SliderCarousel