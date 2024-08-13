import React from "react";
import styled from "styled-components";
import productlist from "../Data/Data.json";
import LikeButton from "../Components/Like";

const Container = styled.div`
  margin: 100px 200px 0px 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 43px;
  justify-content: left;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-contents: stretch;
  margin: 0px;
`;

const TopSection = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 5px;
  width: auto;
  height: 100%;
  margin: 0px;
  position: relative;


  &:hover .AddCart {
    display: block;
  }
`;
const AddCart = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 29%;
  transform: translatex(-50%);
  display: none;
`;
const BottomSection = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Cost = styled.div`
  color: #db4444;
`;

const ColorSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ColorBox1 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f00;
  border: 3px solid black;
`;

const ColorBox2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid black;
  background-color: #f00;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;

`;
const Icons = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  top:0;
  right:0;
  padding: 5px 15px 0px 0px ;
`;

// const RateImage = styled.img`
//   max-width: 100%;
//   height: auto;
// `;
// Use styled components in the component
export default function Product() {
  return (
    <Container>
      {productlist.map((product) => (
        <ProductCard key={product.id}>
          <TopSection>
            <Icons>
              <li>
                <LikeButton />
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </Icons>
            <ProductImage
              src={require(`../assets/images/${product.img}`)}
              alt={product.name}
            />
            <AddCart> Add to Cart </AddCart>
          </TopSection>
          <BottomSection>
            <Link href="#">{product.name}</Link>
            <Content>
              <Cost>${product.cost}</Cost>
              {/* <RateImage src={} alt={} /> */}
              <p>({product.buyed})</p>
            </Content>
            <ColorSection>
              <ColorBox1></ColorBox1>
              <ColorBox2></ColorBox2>
            </ColorSection>
          </BottomSection>
        </ProductCard>
      ))}
    </Container>
  );
}
