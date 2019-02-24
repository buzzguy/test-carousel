import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

import homepageImage from '../../assets/homepage-image.jpg'
import lionPic from '../../assets/lion.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
        <div>
          <img src={homepageImage} alt="" />
          <p className="legend">HomepageImage</p>
        </div>
        <div>
          <img src={lionPic} alt="" />
          <p className="legend">LionPic</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
            alt=""
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
            alt=""
          />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg"
            alt=""
          />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg"
            alt=""
          />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg"
            alt=""
          />
          <p className="legend">Legend 7</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
            alt=""
          />
          <p className="legend">Legend 8</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg"
            alt=""
          />
          <p className="legend">Legend 9</p>
        </div>
        <div>
          <img
            src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg"
            alt=""
          />
          <p className="legend">Legend 10</p>
        </div>
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
    max-height: 200px; /* change this to whatever you want */
    width: auto;
  }
`

export default HomepageCarousel
