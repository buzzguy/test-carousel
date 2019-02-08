import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import styled from "styled-components";

export default class extends React.Component {
  render() {
    return (
      <PureReactCarouselWrapper>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={25} //setting height...
          totalSlides={3}
        >
          <Slider>
            <SlideWrapper>
              <Slide index={0} className="xyz">
                I am the first Slide.
              </Slide>
            </SlideWrapper>
            <SlideWrapper>
              <Slide index={1}>I am the second Slide.</Slide>
            </SlideWrapper>
            <SlideWrapper>
              <Slide index={2}>I am the third Slide.</Slide>
            </SlideWrapper>
          </Slider>
          <CarouselButton>
            <ButtonBack>Back</ButtonBack>
          </CarouselButton>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </PureReactCarouselWrapper>
    );
  }
}

// export default PureReactCarousel;

const PureReactCarouselWrapper = styled.div`
  border: 3px solid blue;
  max-height: 50vh;
  /* margin: 20px; */
  .xyz {
    border: 3px solid gold;
  }
`;

const SlideWrapper = styled.div`
  border: 1px dotted purple;
`;

const CarouselButton = styled.div`
  border: 2px solid green;
  max-height: 10vh;
`;
