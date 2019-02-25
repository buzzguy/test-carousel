import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

// import CarouselCaption from './CarouselCaption'

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
  console.log('homepageCarousel props: ', props)
  return (
    <HomepageCarouselWrapper>
      {/* <CenterLeft onClick={previous}> */}
      <CenterLeft>
        <ChevronLeftLarge fill="white" />
      </CenterLeft>

      {/* <CenterRight onClick={next}> */}
      <CenterRight>
        <ChevronRightLarge fill="white" />
      </CenterRight>

      <Carousel
        // showArrows={false}
        showArrows
        showStatus={false}
        showIndicators
        showThumbs={false}
        infiniteLoop
      >
        {/* <CenterRight onClick={onClickItem}> */}

        {/* <CenterRight>
          <ChevronRightLarge fill="white" />
              </CenterRight> */}

        {slides.map(eachSlide => (
          <div key={eachSlide.src}>
            {/* <img src={eachSlide.src} alt={eachSlide.alt} /> */}

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
  color: white;
  cursor: pointer;
  display: flex; /* to center svg vertically within div */
  font-size: xx-large;
  left: 2%;
  position: absolute;
  top: 50%;
  align-self: center;
  transform: translate(-50%, -50%);
  z-index: 999;
`

const CenterRight = styled.div`
  color: white;
  cursor: pointer;
  display: flex; /* to center svg vertically within div */
  font-size: xx-large;
  left: 98%;
  position: absolute;
  top: 50%;
  align-self: center;
  transform: translate(-50%, -50%);
  z-index: 999;
`

const SlideImage = styled.img`
  background-image: url({src});
  /* background-repeat: no-repeat; */
  /* background-size: contain; */
  background-size: cover;
  /* background-position: center; */
  width: 100%;
  height: auto;
`

const CaptionLinkWrapper = styled.div`
  background-color: black;
  bottom: auto;
  /* border: 5px solid gold; */
  color: white;
  cursor: help;
  font-family: Avenir;
  height: 48px;
  /* padding: 14px 24px 20px 20px; */
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
  /* border: 3px solid red; */
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  position: relative;

  /* max-height: 200px; */
  /* this does nothing */

  /* overriding default styles of ReactResponsiveCarousel */

  button {
    background: pink !important;
  }

  .carousel .thumb img {
    width: 100% !important;
    height: 100% !important;
  }

  .carousel .slide img {
    min-height: 650px; /* confirm what the min-height of images should be */
    max-height: 720px; /* this should be about 720 based on InVision design */
    /* NOTE: need to account for images less than max-height above */
    /* max-height: 400px; */
    width: auto;
  }

  .carousel.carousel-slider .control-arrow {
    top: 45%;
    bottom: 45%;
    padding: 20px;
  }
`

export default HomepageCarousel
