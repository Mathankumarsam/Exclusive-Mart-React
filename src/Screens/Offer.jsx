import React from "react";
import styled from "styled-components";

// Styled Components :-

const Division = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px 200px 0px 200px;
  border-radius: 20px;
  background-color: black;
  color: white;
`;

const DivP = styled.p`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0px;
`;

const DivA = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: underline;
  font-size: 18px;
`;

const Divspan = styled.h2`
  width: 300px;
  font-size: 48px;
  margin: 0px;
  line-height: 68px;
  padding: 20px 0px;
`;

const Iimage = styled.img`
  width: 100%;
  display: block;
`;

export default function Offer() {
  return (
    <Division>
      <div>
        <DivP>
          <img
            src={
              require("../assets/images/1200px-Apple_gray_logo 1.svg").default
            }
          />
          <span> iphone 14 Series </span>
        </DivP>
        <Divspan>Up to 10% off Voucher </Divspan>
        <DivA>
          Shop Now{" "}
          <img src={require("../assets/images/Vector (4).svg").default} />{" "}
        </DivA>
      </div>
      <div>
        <Iimage
          src={require("../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png")}
        />
      </div>
    </Division>
  );
}
