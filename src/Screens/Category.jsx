import React from "react";
import styled from "styled-components";

// Style

const Div = styled.div`
  margin: 60px 200px 0px 200px;
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Hr = styled.hr`
  width: 20px;
  height: 50px;
  background-color: #db4444;
  border-radius: 8px;
  border: none;
  margin: 0px;
  padding: 0px;
`;
const Hed3 = styled.h3`
  font-size: 28px;
`;
const Hed2 = styled.h2`
  margin-top: 20px;
  font-size: 36px;
`;
const Div2 = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  text-align: center;
`;
const Tiv = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Iimage = styled.img`
  display: block;
`;
const Hed5 = styled.h5`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default function Category() {
  return (
    <Div>
      <Div1>
        <Hr />
        <Hed3>Categories</Hed3>
      </Div1>
      <Hed2>Browse By Category</Hed2>
      <Div2>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-CellPhone.svg").default} alt="cell"
          />
          <Hed5>Phones</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-Computer.svg").default} alt="compu"
          />
          <Hed5>Computers</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-SmartWatch.svg").default} alt="Smart"
          />
          <Hed5>SmartWatch</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-Headphone.svg").default} alt="head"
          />
          <Hed5>HeadPhones</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-Gamepad.svg").default} alt="Game"
          />
          <Hed5>Gaming</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Group 1000005941.svg").default} alt="Grou"
          />
          <Hed5>Camera</Hed5>
        </Tiv>
      </Div2>
    </Div>
  );
}
