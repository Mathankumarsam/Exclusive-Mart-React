import React from "react";
import styled from "styled-components";

// Style
const Div = styled.div`
  margin: 60px 200px 0px 200px;

  @media screen and (min-width: 1320px) and (max-width: 1440px) {
    margin: 40px 100px;
  }
  @media screen and (min-width: 480px) and (max-width: 1319px) {
    margin: 40px 100px;
  }
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

  @media screen and (min-width: 40px) and (max-width: 1010px) {
    width: 16px;
    height: 40px;
  }

  @media screen and (min-width: 40px) and (max-width: 830px) {
    width: 14px;
    height: 40px;
  }
`;
const Hed3 = styled.h3`
  font-size: 28px;

  @media screen and (min-width: 40px) and (max-width: 1010px) {
    font-size: 22px;
  }

  @media screen and (min-width: 40px) and (max-width: 830px) {
    font-size: 20px;
  }
`;
const Hed2 = styled.h2`
  margin-top: 20px;
  font-size: 36px;

  @media screen and (min-width: 40px) and (max-width: 1010px) {
    margin-top: 10px;
    font-size: 32px;
  }

  @media screen and (min-width: 40px) and (max-width: 830px) {
    font-size: 28px;
  }
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
            src={require("../assets/images/Category-CellPhone.svg").default}
            alt="cell"
          />
          <Hed5>Phones</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-Computer.svg").default}
            alt="compu"
          />
          <Hed5>Computers</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-SmartWatch.svg").default}
            alt="Smart"
          />
          <Hed5>SmartWatch</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-Headphone.svg").default}
            alt="head"
          />
          <Hed5>HeadPhones</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Category-Gamepad.svg").default}
            alt="Game"
          />
          <Hed5>Gaming</Hed5>
        </Tiv>
        <Tiv>
          <Iimage
            src={require("../assets/images/Group 1000005941.svg").default}
            alt="Grou"
          />
          <Hed5>Camera</Hed5>
        </Tiv>
      </Div2>
    </Div>
  );
}

const Div2 = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 70px;
  margin: 60px 0px;
  padding: 0px;

  @media screen and (min-width: 1320px) and (max-width: 1440px) {
    margin: 40px 0px 0px 0px;
    gap: 20px 65px;
  }

  @media screen and (min-width: 1355px) and (max-width: 1432px) {
    gap: 20px 45px;
  }

  @media screen and (min-width: 1335px) and (max-width: 1354px) {
    gap: 20px 40px;
  }

  @media screen and (min-width: 1327px) and (max-width: 1334px) {
    gap: 20px 38px;
  }

  @media screen and (min-width: 1320px) and (max-width: 1326px) {
    gap: 20px 36px;
  }

  @media screen and (min-width: 1311px) and (max-width: 1319px) {
    margin: 40px 0px 0px 0px;
    gap: 20px 34px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1310px) {
    gap: 20px 32px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1295px) and (max-width: 1302px) {
    gap: 20px 30px;
  }

  @media screen and (min-width: 1287px) and (max-width: 1294px) {
    gap: 20px 28px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1279px) and (max-width: 1286px) {
    gap: 20px 26px;
  }
  @media screen and (min-width: 1279px) and (max-width: 1278px) {
    gap: 20px 24px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1271px) and (max-width: 1278px) {
    gap: 20px 24px;
  }

  @media screen and (min-width: 1263px) and (max-width: 1270px) {
    gap: 20px 22px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1253px) and (max-width: 1262px) {
    gap: 20px 90px;
  }

  @media screen and (min-width: 1238px) and (max-width: 1252px) {
    gap: 20px 85px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1223px) and (max-width: 1237px) {
    gap: 20px 80px;
  }

  @media screen and (min-width: 1208px) and (max-width: 1222px) {
    gap: 20px 75px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1178px) and (max-width: 1192px) {
    gap: 20px 65px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1163px) and (max-width: 1177px) {
    gap: 20px 60px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1148px) and (max-width: 1162px) {
    gap: 20px 55px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1133px) and (max-width: 1147px) {
    gap: 20px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1118px) and (max-width: 1132px) {
    gap: 20px 45px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1103px) and (max-width: 1117px) {
    gap: 40px 40px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1088px) and (max-width: 1102px) {
    gap: 40px 35px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1073px) and (max-width: 1087px) {
    gap: 40px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1058px) and (max-width: 1072px) {
    gap: 40px 25px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 1043px) and (max-width: 1057px) {
    gap: 40px 20px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 1042px) {
    gap: 40px 100px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 990px) {
    gap: 40px 90px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 970px) {
    gap: 40px 85px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 961px) {
    gap: 40px 80px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 950px) {
    gap: 40px 70px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 930px) {
    gap: 40px 60px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 911px) {
    gap: 40px 55px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 900px) {
    gap: 40px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 890px) {
    gap: 40px 40px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 871px) {
    gap: 40px 35px;
    margin: 40px 0px 0px 0px;
  }
  @media screen and (min-width: 105px) and (max-width: 860px) {
    gap: 40px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 850px) {
    gap: 30px 25px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 840px) {
    gap: 20px 20px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 830px) {
    gap: 40px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 809px) {
    gap: 40px 50px;
  }

  @media screen and (min-width: 105px) and (max-width: 788px) {
    gap: 50px 60px;
  }

  @media screen and (min-width: 105px) and (max-width: 778px) {
    gap: 40px 50px;
  }

  @media screen and (min-width: 105px) and (max-width: 768px) {
    gap: 40px 40px;
  }

  @media screen and (min-width: 105px) and (max-width: 759px) {
    gap: 35px 45px;
  }
`;
const Tiv = styled.li`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 105px) and (max-width: 830px) {
    width: 230px;
  }

  @media screen and (min-width: 105px) and (max-width: 809px) {
    width: 220px;
  }

  @media screen and (min-width: 105px) and (max-width: 788px) {
    width: 210px;
  }

  @media screen and (min-width: 105px) and (max-width: 759px) {
    width: 200px;
  }

  @media screen and (min-width: 480px) and (max-width: 743px) {
    width: 500px;
  }

  
`;

const Iimage = styled.img`
  display: block;
`;
const Hed5 = styled.h5`
  font-size: 18px;
  margin-bottom: 10px;
`;
