import React from 'react'
import styled from 'styled-components'
import Menu from './menu';
import ProfileBtn from './profileBtn';

const Navbar= () => {
  return (
    <Navbarr>
      <Logo>Shortly</Logo>
      <Menu/>
      <ProfileBtn/>
    </Navbarr>
  )
}

const Navbarr = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content : space-between;
  align-items: center;
  font-weight: bold;
  a {
    color: var(--body-text-light);
    text-decoration: none;
    transition : all 0.3s ease;
     &:hover{
       color: var(--body-text-dark);
       transition : all 0.3s ease;
     }
`;

const Logo = styled.h1`

`;

export default Navbar
