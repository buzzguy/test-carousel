import React from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";

import lion from "../assets/lion.jpg";

class NukaCarousel extends React.Component {
  state = {
    slideIndex: 0
  }; //adding state

  render() {
    console.log("NukaCarousel, this.state: ", this.state);
    const { slideIndex } = this.state;
    console.log("NukaCarousel, slideIndex: ", slideIndex);
    return (
      <NukaCarouselWrapper>
        <Carousel
          cellAlign="center" //if showing more than one slide...
          slidesToShow={3} //showing 3 slides, with active slide in center....
          // transitionMode="fade" //testing.........
          wrapAround={true} //infinite scroll...
          // slideWidth="700px"
          // slideHeight="700px"
          renderBottomCenterControls={null} //removing dots...
          // framePadding="75px 33px" //sets top, bottom & left, right margins to slider-frame
          heightMode={"max"} //is this working???
          slideIndex={slideIndex} //adding this with state above
          afterSlide={slideIndex => this.setState({ slideIndex })} //adding this with state above
        >
          {/* <img src={lion} alt="lion pic" id="lion-king" /> */}
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
            alt=""
            // resizeMode="cover" //trying this...
            // defaultSource="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" //trying this...
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
            // resizemode="cover" //trying this...
            // defaultsource="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"
          />
        </Carousel>
      </NukaCarouselWrapper>
    );
  }
}

export default NukaCarousel;

const NukaCarouselWrapper = styled.div`
  /* border: 2px solid blue; */
  background: lightgray;
  /* background: lime; */
  max-height: 420px !important; /* setting height to prevent extra height getting added on refresh */
  .slider {
    /* width: 50% !important; */
    border: 3px solid purple;
    height: 420px !important;
  }
  .slider-slide {
    /* trying this to fix blink */
    /* transition: transform 500ms ease-in-out; */
    /* transform: scale(0.6); */
    /* transition-delay: 300ms; */
    /* trying this to fix blink */

    /* max-height: 420px !important; setting height to prevent extra height getting added on refresh */
  }
  .slide-visible {
    /* border: 2px solid green; */
    /* transform: translate3d(0, 0, 0) !important; */
  }
  .slider-slide > img {
    /* max-height: 400px; */
    /* backface-visibility: visible;  */
    /* object-fit: contain; */
    object-fit: cover;
    /* transform: translate3d(0, 0, 0) !important; */
  }
  .slider-list {
    border: 3px solid gold;
    height: 100% !important;
    width: 100% !important;
    max-height: 420px !important; /* setting height to prevent extra height getting added on refresh */
    /* transform: translate3d(0, 0, 0); */
  }
`;
