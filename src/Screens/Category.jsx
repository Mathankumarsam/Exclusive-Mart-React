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
  @media screen and (min-width: 480px) and (max-width: 1280px) {
    margin: 40px 80px;
  }
  @media screen and (min-width: 480px) and (max-width: 1080px) {
    margin: 40px 65px;
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

  @media screen and (min-width: 130px) and (max-width: 1440px) {
    margin: 40px 0px 0px 0px;
    gap: 20px 65px;
  }

  @media screen and (min-width: 135px) and (max-width: 1432px) {
    gap: 20px 65px;
  }

  @media screen and (min-width: 133px) and (max-width: 1420px) {
    gap: 20px 60px;
  }

  @media screen and (min-width: 132px) and (max-width: 1400px) {
    gap: 20px 55px;
  }

  @media screen and (min-width: 130px) and (max-width: 1379px) {
    gap: 20px 50px;
  }

  @media screen and (min-width: 131px) and (max-width: 1359px) {
    margin: 40px 0px 0px 0px;
    gap: 20px 48px;
  }

  @media screen and (min-width: 128px) and (max-width: 1351px) {
    gap: 20px 45px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 125px) and (max-width: 1339px) {
    gap: 20px 40px;
  }

  @media screen and (min-width: 127px) and (max-width: 1320px) {
    gap: 20px 35px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 129px) and (max-width: 1299px) {
    gap: 20px 30px;
  }
  @media screen and (min-width: 127px) and (max-width: 1280px) {
    gap: 20px 35px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 171px) and (max-width: 1278px) {
    gap: 20px 35px;
  }

  @media screen and (min-width: 126px) and (max-width: 1270px) {
    gap: 20px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 153px) and (max-width: 1262px) {
    gap: 20px 30px;
  }

  @media screen and (min-width: 123px) and (max-width: 1252px) {
    gap: 20px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 122px) and (max-width: 1237px) {
    gap: 50px 35px;
  }

  @media screen and (min-width: 128px) and (max-width: 1232px) {
    gap: 20px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 117px) and (max-width: 1193px) {
    gap: 20px 40px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 113px) and (max-width: 1177px) {
    gap: 20px 35px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 118px) and (max-width: 1162px) {
    gap: 20px 35px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 113px) and (max-width: 1152px) {
    gap: 20px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 118px) and (max-width: 1137px) {
    gap: 20px 25px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 103px) and (max-width: 1123px) {
    gap: 40px 20px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 108px) and (max-width: 1108px) {
    gap: 40px 15px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 173px) and (max-width: 1093px) {
    gap: 40px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 1072px) {
    gap: 40px 45px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 104px) and (max-width: 1057px) {
    gap: 40px 40px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 1042px) {
    gap: 40px 40px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 1025px) {
    gap: 40px 30px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 1005px) {
    gap: 40px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 990px) {
    gap: 40px 30px;
    margin: 40px 0px 0px 0px;
  }
  @media screen and (min-width: 105px) and (max-width: 970px) {
    gap: 40px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 961px) {
    gap: 40px 50px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 950px) {
    gap: 40px 45px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 930px) {
    gap: 40px 40px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 911px) {
    gap: 40px 45px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 900px) {
    gap: 40px 40px;
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
    gap: 60px 80px;
    margin: 40px 0px 0px 0px;
  }

  @media screen and (min-width: 105px) and (max-width: 809px) {
    gap: 60px 80px;
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

  @media screen and (min-width: 105px) and (max-width: 743px) {
    gap: 30px 40px;
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

  @media screen and (min-width: 480px) and (max-width: 1319px) {
    width: 200px;
  }

  @media screen and (min-width: 830px) and (max-width: 1215px) {
    width: 180px;
  }

  @media screen and (min-width: 103px) and (max-width: 1093px) {
    width: 230px;
  }

  @media screen and (min-width: 103px) and (max-width: 1005px) {
    width: 210px;
  }

  @media screen and (min-width: 105px) and (max-width: 970px) {
    width: 200px;
  }

  @media screen and (min-width: 105px) and (max-width: 945px) {
    width: 180px;
  }

  @media screen and (min-width: 105px) and (max-width: 864px) {
    width: 170px;
  }

  @media screen and (min-width: 105px) and (max-width: 830px) {
    width: 250px;
  }

  @media screen and (min-width: 105px) and (max-width: 809px) {
    width: 250px;
  }

  @media screen and (min-width: 105px) and (max-width: 793px) {
    width: 230px;
  }

  @media screen and (min-width: 105px) and (max-width: 759px) {
    width: 230px;
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
