import React, { Component } from 'react'
import styled from 'styled-components'
import TestCarouselContainer from './ReactResponsiveCarousel/TestCarouselContainer'
import HomepageCarousel from './ReactResponsiveCarousel/HomepageCarousel'

class AppContainer extends Component {
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

export default AppContainer

const AppContainerWrapper = styled.div`
  /* background: limegreen; */
  border: 1px solid black;
  /* margin: 20px; */
`
