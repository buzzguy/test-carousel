import React, { Component } from 'react';
import styled from 'styled-components';

import TestCarouselForLDP from './TestCarouselForLDP';

class AppContainer extends Component {
  render() {
    return (
      <AppContainerWrapper>
        <p>TestCarouselForLDP:</p>
        <TestCarouselForLDP />
      </AppContainerWrapper>
    );
  }
}

export default AppContainer;

const AppContainerWrapper = styled.div`
  /* background: limegreen; */
  border: 1px solid black;
  /* margin: 20px; */
`;
