import React from "react";
import styled from "styled-components";

//styled Components :-
const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  padding: 50px 0px;
`;

const Division = styled.div`
  color: black;
`;

const UlExclusive = styled.ul`
  padding: 0px;
`;

const Listhed = styled.h2`
  color: white;
`;

const Ullist = styled.li`
  color: white;
  list-style: none;
  padding-bottom: 15px;
`;

const Ulanchor = styled.a`
  color: white;
  text-decoration: none;
`;

const UlEmail = styled.div`
  border: 1px solid white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
`;

const Einput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const UlSupport = styled.ul`
  padding: 0px;
`;

const UlSuplist = styled.li`
  padding-bottom: 15px;
  width: 175px;
`;

const UlAccQuick = styled.ul`
  padding: 0px;
`;

const UlDownload = styled.div``;

const DownApp = styled.p`
  color: #afafaf;
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
`;

const Downdiv = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Imagediv = styled.div``;

const Appicon = styled.li`
  padding: 3px;
`;

const BlackDiv = styled.div`
  background-color: black;
  color: #e9e5e550;
  border-top: 1px solid #e9e5e550;
  padding: 25px 0px;
  text-align: center;
  font-size: 18px;
`;

const copyRight = styled.a``;

function Footer() {
  return (
    <>
      <Container>
        <Division>
          <UlExclusive>
            <Ullist>
              <Listhed> Exclusive </Listhed>
            </Ullist>
            <Ullist>
              <Ulanchor> Subscribe </Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor> Get 10% off your first order</Ulanchor>
            </Ullist>
            <UlEmail>
              <Einput placeholder="Enter your email"></Einput>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91196 12H3.99996L2.02296 4.13499C2.0103 4.08928 2.00259 4.04234 1.99996 3.99499C1.97796 3.27399 2.77196 2.77399 3.45996 3.10399L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9657 2.0131 19.9031 2.03296 19.843L3.49996 15"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </UlEmail>
          </UlExclusive>
        </Division>
        <Division>
          <UlSupport>
            <Ullist>
              <Listhed> Support </Listhed>
            </Ullist>
            <UlSuplist>
              <Ulanchor>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Ulanchor>
            </UlSuplist>
            <UlSuplist>
              <Ulanchor>exclusive@gmail.com</Ulanchor>
            </UlSuplist>
            <UlSuplist>
              <Ulanchor>+88015-88888-9999</Ulanchor>
            </UlSuplist>
          </UlSupport>
        </Division>
        <Division>
          <UlAccQuick>
            <Ullist>
              <Listhed> My account </Listhed>
            </Ullist>
            <Ullist>
              <Ulanchor> Login / Register </Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor> Cart </Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor> Wishlist </Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor>Shop</Ulanchor>
            </Ullist>
          </UlAccQuick>
        </Division>
        <Division>
          <UlAccQuick>
            <Ullist>
              <Listhed> Quick link </Listhed>
            </Ullist>
            <Ullist>
              <Ulanchor>Privacy Policy</Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor>Terms Of Use</Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor>FAQ</Ulanchor>
            </Ullist>
            <Ullist>
              <Ulanchor>Contact</Ulanchor>
            </Ullist>
          </UlAccQuick>
        </Division>
        <Division>
          <UlDownload>
            <Ullist>
              <Listhed> Download app </Listhed>
            </Ullist>
            <DownApp>Save $3 with App New User Only</DownApp>
            <Downdiv>
              <div>
                <img
                  src={require("../assets/images/Qr Code.png")}
                  alt="maddy"
                />
              </div>
              <Imagediv>
                <Appicon>
                  <img
                    src={require("../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png")}
                    alt="mady"
                  />
                </Appicon>
                <Appicon>
                  <img
                    src={require("../assets/images/download-appstore.png")}
                    alt="mady"
                  />
                </Appicon>
              </Imagediv>
            </Downdiv>
            <Downdiv>
              <Appicon>
                <Ulanchor>
                  <img src={require("../assets/images/Vector.svg").default} alt="vector" />
                </Ulanchor>
              </Appicon>
              <Appicon>
                <Ulanchor>
                  <img src={require("../assets/images/Group.svg").default} alt="vect" />
                </Ulanchor>
              </Appicon>
              <Appicon>
                <Ulanchor>
                  <img
                    src={require("../assets/images/Group (1).svg").default} alt="vetr"
                  />
                </Ulanchor>
              </Appicon>
              <Appicon>
                <Ulanchor>
                  <img
                    src={require("../assets/images/Vector (1).svg").default} alt="vedtor"
                  />
                </Ulanchor>
              </Appicon>
            </Downdiv>
          </UlDownload>
        </Division>
      </Container>
      <BlackDiv>
        <copyRight> © Copyright Rimel 2022. All right reserved</copyRight>
      </BlackDiv>
    </>
  );
}

export default Footer;
