import React from 'react'
import styled from 'styled-components';
const Row = styled.ul` 
text-decoration: none;

list-style-type: none;
text-align: left;
li{
cusor : pointer;
&:hover{
  color:var(--cyan);
}
}
`;
function Features({text0,text1,text2,text3,text4}) {
  return (
    <Row>
    <li><strong>{text0}</strong></li>
    <li>{text1}</li>
    <li>{text2}</li>
    <li>{text3}</li>
    <li>{text4}</li>
    </Row>
  )
}

export default Features
