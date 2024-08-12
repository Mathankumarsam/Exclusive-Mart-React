import React from "react";
import styled from "styled-components";
import productlist from "../Data/Data.json";

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
  color: #DB4444;
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
            <ProductImage
              src={require(`../assets/images/${product.img}`)}
              alt={product.name}
            />
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
