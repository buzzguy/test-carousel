import React from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";

import lion from "../assets/lion.jpg";

class NukaCarousel extends React.Component {
  state = {
    slideIndex: 0
  }; //adding state

  render() {
    return (
      <NukaCarouselWrapper>
        <Carousel
          // wrapAround="true"
          heightMode={"max"} //is this working???
          slideIndex={this.state.slideIndex} //adding this with state above
          afterSlide={slideIndex => this.setState({ slideIndex })} //adding this with state above
        >
          <img src={lion} alt="" />
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
  max-height: 200px;
  .slider {
    /* width: 50% !important; */
    height: 175px !important;
  }
`;
