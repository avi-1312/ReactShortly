import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DisplayContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -125px;
  p {
    color: var(--cyan);
  }
`;
const Box = styled.div`
  position: relative;
  height: 200px;
  margin-top: 15%;
  top: 50%;
  left: 50%;
  background-image: url(../images/bg-shorten-desktop.svg);
  background-color: #3b3054;
  transform: translate(-50%, -50%);
  // display: flex;
  input {
    width: 100vh;
    height: 7vh;
    border: 5px #f46262 solid;
    border-radius: 10px;
    margin-right: 20vh;
    margin-top: 50px;
    font-weight: 800;
    padding: 14px, 0;
    font-size: 16px;
  }
  input > placeholder {
    color: #f46262;
    padding: 10px;
  }
  button {
    height: 8vh;
    width: 16%;
    border-radius: 10px;
    display: inline-block;
  }
  p {
    // position: absolute;
    color: #f46262;
    margin-right: 76%;
  }
  .mainBox {
    display: flex;
    flex-direction: column;
    height: ;
  }
`;

function InputBox() {
  const [shortUrlData, setShortUrlData] = useState("");
  const [resData, setResData] = useState("");
  const handleChange = async () => {
    let url = shortUrlData;
    const res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);
    setResData(res);
    if (resData) {
      console.log(resData);
      console.log(resData.data);
    }
  };

  return (
    <div className="mainBox">
      <div>
        <Box>
          <input
            onChange={(e) => {
              setShortUrlData(e.target.value);
            }}
            placeholder="Shorten a link here..."
          ></input>
          <button type="submit" onClick={handleChange}>
            Shorten it!
          </button>
          <p>Please add a link</p>
        </Box>
      </div>
      <DisplayContent className="displayLink">
        {!resData ? (
          <p></p>
        ) : (
          <div>
            <h3>{resData.data.result.original_link}</h3>
            <p>{resData.data.result.full_short_link}</p>
            {/* <p>wwww.wqeqwrwe.com</p>
          <p>www,fdf/fvdf/</p> */}
          </div>
        )}
      </DisplayContent>
    </div>
  );
}

export default InputBox;
