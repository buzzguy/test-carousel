import React from 'react';
import TestCarouselForLDP from './TestCarouselForLDP';

class TestCarouselContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 5,
    };
  }

  render() {
    console.log('TestCarouselContainer, this.state is: ', this.state);
    return (
      <div>
        <p>TestCarouselContainer:</p>
        <TestCarouselForLDP selectedItem={this.state.currentSlide} />
      </div>
    );
  }
}

export default TestCarouselContainer;
