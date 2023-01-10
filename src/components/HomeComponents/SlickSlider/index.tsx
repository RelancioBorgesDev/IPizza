import React, { ReactNode } from "react";
import { SliderContainer } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ISlickSliderProps {
  children: ReactNode;
}

let settings = {
  dots: false,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,

  responsive: [{
    breakpoint: 1050,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }]
};
export default function SlickSlider({ children }: ISlickSliderProps) {
  return <SliderContainer {...settings}>{children}</SliderContainer>;
}
