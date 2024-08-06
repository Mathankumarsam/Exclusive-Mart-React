import React from "react";
import styled from "styled-components";

// Styled Components :-

const Division = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 140px ; 
  margin: 60px 450px 0px 250px;
  border-radius: 20px ;
  background-color: black;
  color: white ;
`;

const DivP = styled.p`
    display:flex;
    align-items:center;
    gap:15px;
    margin: 0px ;
`;

const DivA = styled.a`
    display:flex;
    align-items:center;
    gap:5px;
    text-decoration:underline;
    font-size: 18px ;
`;

const Divspan = styled.h2`
    width:220px;
    font-size: 38px ;
    margin:0px;
    padding: 20px 0px ;
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
        <DivA>Shop Now <img src={require("../assets/images/Vector (4).svg").default} alt="" /> </DivA>
      </div>
      <div>
        <img
          src={require("../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png")}
        />
      </div>
    </Division>
  );
}
