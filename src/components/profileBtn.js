import React from 'react'
import styled from 'styled-components';

const BtnWrapper = styled.div`
display : flex;
align-items: center;
a{
  margin-right: 2rem;
}
button{
  cursor : pointer;
}
`;
function ProfileBtn() {
  return (
    <BtnWrapper>
      <a href="#">Login</a>
      <button type="button">Sign Up</button>
    </BtnWrapper>
  )
}

export default ProfileBtn
