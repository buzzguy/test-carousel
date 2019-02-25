import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import lion from '../assets/lion.jpg';

const slides = [
  {
    src: 'http://lorempixel.com/800/400/city/1/',
    alt: '',
    legend: 'Legend 1',
  },
  {
    src: 'http://lorempixel.com/800/400/city/2/',
    alt: '',
    legend: 'Legend 2',
  },
  {
    src: 'http://lorempixel.com/800/400/city/3/',
    alt: '',
    legend: 'Legend 3',
  },
  {
    src: 'http://lorempixel.com/800/400/city/4/',
    alt: '',
    legend: 'Legend 4',
  },
  {
    src: 'http://lorempixel.com/800/400/city/5/',
    alt: '',
    legend: 'Legend 5',
  },
  {
    src: 'http://lorempixel.com/800/400/city/6/',
    alt: '',
    legend: 'Legend 6',
  },
  {
    src: 'http://lorempixel.com/800/400/city/7/',
    alt: '',
    legend: 'Legend 7',
  },
];

const TestCarouselForLDP = props => {
  console.log('TestCarouselForLDP, props is: ', props);
  const { selectedItem } = props;
  console.log('selectedItem is: ', selectedItem);
  return (
    <Carousel
      selectedItem={selectedItem}
      showArrows
      showStatus
      showIndicators
      showThumbs
      infiniteLoop
    >
      {slides.map(eachSlide => {
        return (
          <div key={eachSlide.src}>
            <img src={eachSlide.src} alt={eachSlide.alt} />
            <p className="legend">{eachSlide.legend}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestCarouselForLDP;
