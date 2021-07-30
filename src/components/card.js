import React from 'react'
import styled from 'styled-components'


function Card({image , text,text2}) {
  return (
    <NewCard>
      <img src={image} alt="brand-graph" />
      <h1>{text}</h1>
      <p>{text2}</p>
    </NewCard>
  )
}

const NewCard = styled.div`
height: 400px;
width: 400px;
display : inline-grid;
img{
  height:100px;
  width: 100px;
  background-color: #3b3054;
  border-radius:50%;
}
`;

export default Card
