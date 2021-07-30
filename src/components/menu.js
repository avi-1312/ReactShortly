import React from 'react'
import styled from 'styled-components';

const Navi = styled.ul `
  display : flex; 
  margin-right: auto;
  list-style-type: none;
  li > a {
     color: var(--body-text-light);
     text-decoration: none;
     padding: 0 1rem;
      &:hover{
        color: var(--body-text-dark);
      }
  }
`;

function Menu() {
  return ( 
    <Navi>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Resources</a></li>
    </Navi>
  )
}

export default Menu