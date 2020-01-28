import React, { Component } from 'react'
import styled from 'styled-components'
import NukaCarousel from './OtherCarousels/NukaCarousel'

class AppContainer extends Component {
  render() {
    return (
      <AppContainerWrapper>

        <NukaCarousel />

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
