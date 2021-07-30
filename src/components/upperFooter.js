import React from 'react';
import styled from 'styled-components';

const NewBg = styled.div`
  position: relative;
  background-image: url(/images/bg-boost-desktop.svg);
  background-color: #3b3054;
  background-size: cover;
  height: 250px;
  h1{
    margin:0,150px;
    color: #fff;
    padding: 47px;
  }
  button{
    cursor: pointer;
  }
`;

function UpperFooter() {
  return (
    <NewBg>
      <h1>Boost Your links today</h1>
      <button type="button">Get Started</button>
    </NewBg>
  )
}

export default UpperFooter
