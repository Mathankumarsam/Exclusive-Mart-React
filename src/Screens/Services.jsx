import React from "react";
import styled from "styled-components";

// Styles

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  margin: 80px 0px 0px 0px;


  @media screen and (min-width: 105px) and (max-width: 990px) {
    gap: 70px;
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Iimage = styled.img`
  display: block;
  background-color: black;
  border: 15px solid #c7c6c9;
  border-radius: 50%;
  padding: 8px;
`;

const Hed2 = styled.h3`
  margin-top: 20px;
  color: black;
  margin: 0px;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 600;
`;

const Hed3 = styled.p`
  color: black;
  margin: 0px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
`;

export default function Services() {
  return (
    <Div>
      <Div1>
        <Iimage src={require("../assets/images/icon-delivery.svg").default} />
        <Hed2>FREE AND FASR DELIVERY</Hed2>
        <Hed3>Free delivery for all orders over $140</Hed3>
      </Div1>
      <Div1>
        <Iimage
          src={require("../assets/images/Icon-Customer service.svg").default}
        />
        <Hed2>24/7 CUSTOMER SERVICE</Hed2>
        <Hed3>Friendly 24/7 customer support</Hed3>
      </Div1>
      <Div1>
        <Iimage src={require("../assets/images/shield-tick.svg").default} />
        <Hed2>MONEY BACK GUARANTEE</Hed2>
        <Hed3>We return money within 30 days</Hed3>
      </Div1>
    </Div>
  );
}
