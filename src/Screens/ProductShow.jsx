import React from "react";
import styled from "styled-components";
// import productlist from "../Data/Data.json";

// Styles
const Whole = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 60px 0px 0px 200px;
  padding: 0px;
`;
const Img = styled.img`
  display: block;
  height: 100%;
  background-color: #f5f5f5;
  padding: 143px 127px 142px 127px;
  border-radius: 4px 0px 0px 0px;
  opacity: 0px;
`;

const Img1 = styled.img`
  height: 100%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    margin: 5px 0px;
    width: 370px;
  }
`;

const Despara = styled.p`
  width: 373px;
  height: 63px;
  line-height: 25px;
`;

const Rightbotom = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  margin: 40px 0px 0px 0px;

  hr {
    margin: 0px;
    width: 380px;
  }
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 10px 25px;
`;
const Div2 = styled.div`
display: flex;
flex-direction:column;

  h3{
    font-size: 16px;
    display: inline-block;
    margin: 10px 0px;
  
  }

  p {
    font-size: 12px;
    display:inline-block;    

  }

  span {
    text-decoration: underline;
  }
`;
const ColorSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin: 10px 0px 0px 0px;
`;

const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ccc;

  &:hover {
    border: 2.5px solid black;
  }
`;

function ProductShow() {
  return (
    <>
      <Whole>
        <Img src={require("../assets/images/image 63.png")} />
        <Right>
          <h1>Havic HV G-92 Gamepad</h1>
          <p>$120</p>
          <Despara>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </Despara>
          <hr />
          <ColorSection>
            Colours:
            <ColorBox />
            <ColorBox />
          </ColorSection>
          <Rightbotom>
            <Div1>
              <Img1
                src={require("../assets/images/icon-delivery (1).svg").default}
              />
              <Div2>
                <h3>Free Delivery </h3>
                <p>
                  <span>Enter your postal cide fir Delivery Availiability</span>
                </p>
              </Div2>
            </Div1>
            <hr />
            <Div1>
              <Img1 src={require("../assets/images/Icon-return.svg").default} />
              <Div2>
                <h3>Return Delivery </h3>
                <p>
                  Free 30 Dats Delivery Returns.<span>Details</span>
                </p>
              </Div2>
            </Div1>
          </Rightbotom>
        </Right>
      </Whole>
    </>
  );
}

export default ProductShow;
