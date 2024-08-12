import React from 'react';
import styled from 'styled-components';
import productlist from '../Data/Data.json';



const Container = styled.div`
  /* Container styling */
`;

const ProductCard = styled.div`
  /* Product card styling */
  margin-bottom: 20px;
`;

const TopSection = styled.div`
  /* Top section styling */
`;

const BottomSection = styled.div`
  /* Bottom section styling */
`;

const Link = styled.a`
  /* Link styling */
  text-decoration: none;
  color: inherit;
`;

const Content = styled.div`
  /* Content section styling */
`;

const Cost = styled.div`
  /* Cost styling */
`;

const ColorSection = styled.div`
  /* Color section styling */
`;

const ColorBox1 = styled.div`
  /* Color box 1 styling */
`;

const ColorBox2 = styled.div`
  /* Color box 2 styling */
`;

const ProductImage = styled.img`
  /* Product image styling */
  max-width: 100%;
  height: auto;
`;

const RateImage = styled.img`
  /* Product image styling */
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
            <ProductImage src={require(`../assets/images/${product.img}`)}  alt={product.name} />
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
