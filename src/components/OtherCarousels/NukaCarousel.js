import React from "react";
import Carousel from "nuka-carousel";

export default class extends React.Component {
  render() {
    return (
      <Carousel wrapAround slidesToShow={1}
      width="100%"
      heightMode="current">
        <img
          src="http://placehold.it/1000x400/000000/c0392b/&text=slide1"
          alt=""
        />
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
          alt=""
        />
        <img
          src="http://placehold.it/1000x400/000000/c0392b/&text=slide3"
          alt=""
        />
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"
          alt=""
        />
        <img
          src="http://placehold.it/1000x400/000000/c0392b/&text=slide5"
          alt=""
        />
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"
          alt=""
        />
      </Carousel>
    );
  }
}

// gif of blinking slides:
// https://media.giphy.com/media/Ylm6WnuQghOsjRq6UA/giphy.gif
