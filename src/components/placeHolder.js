import React from "react";
import styled from "styled-components";
import InputBox from "./inputBox";
const Content = styled.div`
  margin-top: 100px;
  position: relative;
  background-size: cover;
  height: 165px;
`;

function PlaceHolder() {
  return (
    <Content>
      <InputBox />
    </Content>
  );
}

export default PlaceHolder;
