import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface CarouselProps {
  images: string[];
}

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const SlideWrapper = styled.div`
  transition: transform 0.5s ease;
  display: flex;
`;

const Slide = styled.div`
  min-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1265px) {
    img {
      max-height: 25rem;
    }
  }
  @media (max-width: 865px) {
    img {
      max-height: 11rem;
    }
  }
`;

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <CarouselContainer>
      <SlideWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </Slide>
        ))}
      </SlideWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
