import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

const TestCarouselForLDP = () => (
  <Carousel showArrows showStatus showIndicators showThumbs infiniteLoop>
    {slides.map(eachSlide => {
      return (
        <div>
          <img src={eachSlide.src} alt={eachSlide.alt} />
          <p className="legend">{eachSlide.legend}</p>
        </div>
      );
    })}
    {/* <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt="" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" alt="" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" alt="" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" alt="" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" alt="" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" alt="" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" alt="" />
      <p className="legend">Legend 10</p>
    </div> */}
  </Carousel>
);

export default TestCarouselForLDP;
