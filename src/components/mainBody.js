import React from 'react'
import styled from 'styled-components';
import HeadTitle from './headTitle';
import ProfileBtn from './profileBtn';
import work from "../images/illustration-working.svg"


const Image =styled.div`
display: flex;
flex-direction: row;
margin:auto;
 `;
function mainBody() {
  return (
    <Image>
     <HeadTitle/>
      <img src={work} alt="" />
    </Image>
    
  )
}

export default mainBody
