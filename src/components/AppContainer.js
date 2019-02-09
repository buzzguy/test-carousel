import React, { Component } from "react";
import styled from "styled-components";

// import PureReactCarousel from "./PureReactCarousel.js";
import NukaCarousel from "./NukaCarousel.js";

class AppContainer extends Component {
  render() {
    return (
      <AppContainerWrapper>
        <h1>hello from AppContainer</h1>
        {/* 
        <p>PureReactCarousel:</p>
        <PureReactCarousel /> */}

        <p>NukaCarousel:</p>
        <NukaCarousel />
      </AppContainerWrapper>
    );
  }
}

export default AppContainer;

const AppContainerWrapper = styled.div`
  border: 3px solid red;
  margin: 20px;
`;
