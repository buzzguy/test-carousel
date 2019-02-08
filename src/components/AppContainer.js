import React, { Component } from "react";
import styled from "styled-components";

import PureReactCarousel from "./PureReactCarousel.js";

class AppContainer extends Component {
  render() {
    return (
      <AppContainerWrapper>
        <h1>hello from AppContainer</h1>
        <PureReactCarousel />
      </AppContainerWrapper>
    );
  }
}

export default AppContainer;

const AppContainerWrapper = styled.div`
  border: 3px solid red;
  margin: 20px;
`;
