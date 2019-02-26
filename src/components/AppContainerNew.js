import React, { Component } from 'react'
import styled from 'styled-components'
import TestCarouselContainer from './TestCarouselContainer'
import HomepageCarousel from './ReactResponsiveCarousel/HomepageCarousel'

class AppContainerNew extends Component {
  render() {
    return (
      <AppContainerWrapper>
        <p>0. TestCarouselForLDP:</p>
        <TestCarouselContainer />

        <p>1. HomepageCarousel:</p>
        <HomepageCarousel />
      </AppContainerWrapper>
    )
  }
}

export default AppContainerNew

const AppContainerWrapper = styled.div`
  /* background: limegreen; */
  border: 1px solid black;
  /* margin: 20px; */
`
