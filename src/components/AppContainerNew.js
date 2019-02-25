import React, { Component } from 'react';
import styled from 'styled-components';
import TestCarouselContainer from './TestCarouselContainer';

class AppContainerNew extends Component {
  render() {
    return (
      <AppContainerWrapper>
        <p>0. TestCarouselForLDP:</p>
        <TestCarouselContainer />
      </AppContainerWrapper>
    );
  }
}

export default AppContainerNew;

const AppContainerWrapper = styled.div`
  /* background: limegreen; */
  border: 1px solid black;
  /* margin: 20px; */
`;
