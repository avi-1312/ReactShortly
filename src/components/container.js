import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar.js'
import MainBody from './mainBody.js'
import PlaceHolder from './placeHolder';
import AdvancePart from './advancePart';
import UpperFooter from './upperFooter.js';


function Container() {
  return (
    <PageWrapper>
      <Navbar/> 
      <MainBody/>
      <PlaceHolder/>
      <AdvancePart/>
    </PageWrapper>
  )
}

const PageWrapper= styled.div`
  max-width: 1200px;
  margin: auto;
  width: 100%;
`;

export default Container
