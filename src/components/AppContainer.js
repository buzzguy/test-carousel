import React, { Component } from 'react'
import styled from 'styled-components'

// import PureReactCarousel from "./PureReactCarousel.js";
// import NukaCarousel from "./NukaCarousel.js";
import ReactResponsiveCarouselExample from './ReactResponsiveCarousel/ReactResponsiveCarouselExample'

class AppContainer extends Component {
  render() {
    return (
      <AppContainerWrapper>
        {/* <h1>hello from AppContainer</h1> */}

        {/* 
        <p>PureReactCarousel:</p>
        <PureReactCarousel /> 
        */}

        {/* <p>NukaCarousel:</p> */}
        {/* <NukaCarousel /> */}

        <p>ReactResponsiveCarouselExample:</p>
        <ReactResponsiveCarouselExample />
      </AppContainerWrapper>
    )
  }
}

export default AppContainer

const AppContainerWrapper = styled.div`
  background: limegreen;
  border: 1px solid black;
  margin: 20px;
`
