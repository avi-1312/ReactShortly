import React from 'react';
import styled from 'styled-components';
import Card from './card';
import img1 from '../images/icon-brand-recognition.svg';
import img2 from '../images/icon-detailed-records.svg';
import img3 from '../images/icon-fully-customizable.svg';

function AdvancePart() {
  return (
    <AdvanceStats>
      <h1>Advance Statistics</h1>
      <h3>Track how your links are performing across the web with<br/> our advanced statistics dashboard.</h3>
      <Card image={img1} text = "Brand Recognition" text2="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"/>
      <Card image={img2} text = "Detailed Records" text2="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
      <Card image={img3} text = "Fully Customizable" text2 = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"/>
    </AdvanceStats>
  )
}

const AdvanceStats = styled.div`  
Card{display: flex;
flex-direction: column;
}
h1{
  color : #3b3054;
}
p{
  color : var(--violetGray)
}
`;
export default AdvancePart

