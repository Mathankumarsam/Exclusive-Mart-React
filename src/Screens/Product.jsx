import React from "react";
import styled from "styled-components";
import productlist from "../Data/Data.json";

const Container = styled.div``;

const ProductCard = styled.div`
  margin-bottom: 20px;
`;

const TopSection = styled.div``;

const BottomSection = styled.div``;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Content = styled.div``;

const Cost = styled.div``;

const ColorSection = styled.div``;

const ColorBox1 = styled.div``;

const ColorBox2 = styled.div``;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const RateImage = styled.img`
  max-width: 100%;
  height: auto;
`;
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
              <Cost>{product.cost}</Cost>
              {/* <RateImage src={} alt={} /> */}
              <p>{product.buyed}</p>
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
