import React, { useRef } from "react";
import { Clickable, ImageThumb } from "./reusable-components";
import { SliderContainer, SliderItem, SliderWrapper } from "./styled-compoents";

const Slider = ({ data }) => {
  const sliderRef = useRef();
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };
  if (!data?.length) {
    return <SliderWrapper>No Favourites Yet</SliderWrapper>;
  }
  return (
    <SliderWrapper>
      <Clickable icon="caret-left" onClick={scrollLeft} />
      <SliderContainer ref={sliderRef}>
        {data.map(({ first_name, last_name, contact_picture }) => (
          <SliderItem>
            <ImageThumb
              firstName={first_name}
              lastName={last_name}
              src={contact_picture}
            />
            <span>{first_name + " " + last_name}</span>
          </SliderItem>
        ))}
      </SliderContainer>
      <Clickable icon="caret-right" onClick={scrollRight} />
    </SliderWrapper>
  );
};

export default Slider;
