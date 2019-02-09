import React from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";

class NukaCarousel extends React.Component {
  render() {
    return (
      <NukaCarouselWrapper>
        <Carousel wrapAround="true">
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
            alt=""
          />
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
            alt=""
          />
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"
            alt=""
          />
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"
            alt=""
          />
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"
            alt=""
          />
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"
            alt=""
          />
        </Carousel>
      </NukaCarouselWrapper>
    );
  }
}

export default NukaCarousel;

const NukaCarouselWrapper = styled.div`
  border: 2px solid blue;
`;
