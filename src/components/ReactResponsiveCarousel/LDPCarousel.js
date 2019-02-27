import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

import ChevronLeftLarge from '../../assets/SvgChevronLeftLarge'
import ChevronRightLarge from '../../assets/SvgChevronRightLarge'

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

function imageClicked(imageName) {
  console.log('image clicked is: ', imageName)
}

const LDPCarousel = props => {
  console.log('LDPCarousel props: ', props)
  const { selectedItem } = props
  return (
    <LDPCarouselWrapper>
      <CenterLeft>
        <ChevronLeftLarge fill="white" />
      </CenterLeft>

      <CenterRight>
        <ChevronRightLarge fill="white" />
      </CenterRight>

      <Carousel
        showArrows
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        selectedItem={selectedItem}
      >
        {slides.map(eachSlide => (
          <div key={eachSlide.src} onClick={() => imageClicked(eachSlide.src)}>
            <SlideImage src={eachSlide.src} alt={eachSlide.alt} />
          </div>
        ))}
      </Carousel>
    </LDPCarouselWrapper>
  )
}

const CenterLeft = styled.div`
  cursor: wait;
  display: flex; /* to center svg vertically within div */
  left: 2%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: drop-shadow(
    0 0.1rem 0.1rem black
  ); /* outline for light backgrounds */
`

const CenterRight = styled.div`
  cursor: wait;
  display: flex; /* to center svg vertically within div */
  left: 98%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: drop-shadow(
    0 0.1rem 0.1rem black
  ); /* outline for light backgrounds */
`

const SlideImage = styled.img`
  background-image: url({src});
  background-size: cover;
  width: 100%;
  height: auto;
`

const LDPCarouselWrapper = styled.div`
  position: relative;

  /* overriding default styles of ReactResponsiveCarousel */
  button {
    :hover {
      background-color: black !important;
      /* opacity: 0.7 !important; */
      /* above is same as CaptionLinkWrapper, but makes chevron too dark */
      opacity: 0.2 !important;
    }
  }

  .carousel .thumb img {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel .slide img {
    height: 700px;
    /* LDPCarousel is 700px in height, a lil smaller than HomePageCarousel */
    /* NOTE: need to account for images less than max-height above */
    width: auto;
  }

  .carousel.carousel-slider .control-arrow {
    top: 45%;
    bottom: 45%;
    padding: 20px;
    font-size: 20px;
  }

  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    border-top: none;
    border-bottom: none;
  }
`

export default LDPCarousel
