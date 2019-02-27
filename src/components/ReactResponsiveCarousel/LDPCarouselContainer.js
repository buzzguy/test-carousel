import React from 'react'
import styled from 'styled-components'
import LDPCarousel from './LDPCarousel'

class LDPCarouselContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 7,
    }
  }

  render() {
    console.log('LDPCarouselContainer, this.state is: ', this.state)
    const { currentSlideIndex } = this.state
    return (
      <div>
        <TitleWrapper>LDPCarouselContainer:</TitleWrapper>
        <LDPCarousel selectedItem={currentSlideIndex} />
      </div>
    )
  }
}

export default LDPCarouselContainer

const TitleWrapper = styled.span`
  background: yellow;
`
