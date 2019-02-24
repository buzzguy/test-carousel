import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

import homepageImage from '../../assets/homepage-image.jpg'
import lionPic from '../../assets/lion.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const slides = [
  {
    src: homepageImage,
    alt:
      'The Living Room - High ceilings with big windows, beautiful lighting and mid century furniture.',
    caption:
      'The Living Room - High ceilings with big windows, beautiful lighting and mid century furniture.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: lionPic,
    alt: 'The Living Room - a lion lives here.',
    caption: 'The Living Room - a lion lives here.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-2.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-5.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-6.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-7.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-8.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-9.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
  {
    src: 'http://lorempixel.com/output/cats-q-c-640-480-10.jpg',
    alt: 'The Living Room - also this cat.',
    caption: 'The Living Room - also this cat.',
    address: '524 East 72nd Street, #28A',
    bed: 2,
    bath: 2,
    price: 999999,
    imageType: 'listing',
  },
]

const HomepageCarousel = () => {
  return (
    <HomepageCarouselWrapper>
      <Carousel
        showArrows
        showStatus
        showIndicators
        showThumbs={false}
        infiniteLoop
      >
        {slides.map(eachSlide => (
          <div>
            <img src={eachSlide.src} alt={eachSlide.alt} />
            <p className="legend">{eachSlide.caption}</p>
          </div>
        ))}
      </Carousel>
    </HomepageCarouselWrapper>
  )
}

const HomepageCarouselWrapper = styled.div`
  border: 3px solid red;
  margin-left: 50px;
  margin-right: 50px;
  /* max-height: 200px; */
  /* this does nothing */

  /* overriding default styles of ReactResponsiveCarousel */
  .carousel .thumb img {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel .slide img {
    max-height: 300px; /* change this to whatever you want */
    width: auto;
  }
`

export default HomepageCarousel
