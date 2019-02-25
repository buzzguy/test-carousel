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

function captionLinkClicked() {
  console.log('caption link clicked!!!')
}

const HomepageCarousel = props => {
  //   console.log('homepageCarousel props: ', props)
  return (
    <HomepageCarouselWrapper>
      <CenterLeft>
        <ChevronLeftLarge fill="white" />
      </CenterLeft>

      <CenterRight>
        <ChevronRightLarge fill="white" />
      </CenterRight>

      <Carousel
        showArrows
        showStatus={false}
        showIndicators
        showThumbs={false}
        infiniteLoop
      >
        {slides.map(eachSlide => (
          <div key={eachSlide.src}>
            <SlideImage src={eachSlide.src} alt={eachSlide.alt} />

            <CaptionLinkWrapper onClick={captionLinkClicked}>
              <CaptionUnitAddress>{eachSlide.address}</CaptionUnitAddress>
              <CaptionUnitInfo>
                {eachSlide.bed} BD | {eachSlide.bath} BA
              </CaptionUnitInfo>
              <CaptionUnitPrice>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(eachSlide.price)}
              </CaptionUnitPrice>
            </CaptionLinkWrapper>
          </div>
        ))}
      </Carousel>
    </HomepageCarouselWrapper>
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

const CaptionLinkWrapper = styled.div`
  background-color: black;
  bottom: auto;
  color: white;
  cursor: help;
  font-family: Avenir;
  height: 48px;
  padding-top: 14px;
  padding-right: 24px;
  padding-bottom: 20px;
  padding-left: 20px;
  position: absolute;
  opacity: 0.7;
  left: auto;
  right: 0;
  top: 0;
`

const CaptionUnitAddress = styled.span`
  color: white;
  font-family: 'Chronicle Display';
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 18px;
  padding-right: 20px;
`
const CaptionUnitInfo = styled.span`
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
  padding-right: 20px;
  padding-top: 3px;
`
const CaptionUnitPrice = styled.span`
  font-size: 14px;
  letter-spacing: 0.3px;
`

const HomepageCarouselWrapper = styled.div`
  position: relative;

  /* overriding default styles of ReactResponsiveCarousel */
  button {
    :hover {
      background-color: black !important;
      opacity: 0.2 !important;
    }
  }

  .carousel .thumb img {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel .slide img {
    min-height: 650px; /* confirm what the min-height of images should be */
    max-height: 720px; /* this should be about 720 based on InVision design */
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

export default HomepageCarousel
