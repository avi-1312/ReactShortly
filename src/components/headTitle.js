import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 45px;
  margin-top:0;
  padding:auto;
  color: var(--body-text-dark);
  h2{
    font-size:30px;
    margin=top: -15px;
    color: var(--body-text-light);
  }
  button{
    margin-right:80vh;
    padding 0, 1.5rem;
    width: max-content;
    cursor: pointer;
  }
`;

function HeadTitle() {
  return (
    <Header>
       <h1>More than just <br/>shorter links</h1>
      <h2>Build your brand's recognition and get detailed insights on how your links are performing</h2>
      <button type= "button">Get Started</button>
    </Header>
  )
}

export default HeadTitle
