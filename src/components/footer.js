import React from "react";
import styled from "styled-components";
import Features from "./features";
import twit from "../images/icon-twitter.svg"
import fb from "../images/icon-facebook.svg"
import pin from "../images/icon-pinterest.svg"
import insta from "../images/icon-instagram.svg"
const Foot = styled.div` 
display: flex;
justify-content:space-between;
background-color: black;
`;
const List = styled.div`
display: flex;
cusor: pointer;
`;
const SocialIcons = styled.div`
display: inline;
padding-right : 20px;
margin: 4px;
justify-content: space-between;
cusor: pointer;
&:hover{
  color:var(--cyan);
}
`;

function Footer() {
  return (
    <Foot>
      <h1>Shortly</h1>
      <List>
      <Features text0="Features" text1="Link Shortening" text2="Branded Links" text3="Analytics"/>
      <Features text0="Resorces" text1="Blog" text2="Developers" text3="Support" />
      <Features text0="Company" text1="About" text2="Our Team" text3="Careers" text4="Contacts" />

      </List>
      <SocialIcons>
        <img src={fb} alt="" />
        <img src={twit} alt="" />
        <img src={pin} alt="" />
        <img src={insta} alt="" />
      </SocialIcons>
    </Foot>
  );
}

export default Footer;
