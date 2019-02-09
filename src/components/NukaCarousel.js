import React from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";

import lion from "../assets/lion.jpg";

class NukaCarousel extends React.Component {
  state = {
    slideIndex: 0
  }; //adding state

  render() {
    const { slideIndex } = this.state;
    console.log("NukaCarousel, slideIndex: ", slideIndex);
    return (
      <NukaCarouselWrapper>
        <Carousel
          // wrapAround="true"
          // withoutControls="true"
          heightMode={"max"} //is this working???
          slideIndex={slideIndex} //adding this with state above
          afterSlide={slideIndex => this.setState({ slideIndex })} //adding this with state above
        >
          <img src={lion} alt="lion pic" id="lion-king" />
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
  background: lightgray;
  max-height: 200px;
  .slider {
    /* width: 50% !important; */
    height: 175px !important;
  }
  .slider-slide > img {
    max-height: 200px;
    object-fit: contain;
  }
`;
