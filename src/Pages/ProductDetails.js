import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom"; // Import Link as RouterLink
import styled from "styled-components";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import productlist from '../Data/Data.json'; // Import local data

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 60px 200px 0px 200px;
`;

const Navlink = styled(RouterLink)` // Corrected Link
  text-decoration: none;
  color: black;
`;

const Navlink1 = styled(RouterLink)` // Corrected Link
  text-decoration: none;
  color: gray;
`;

const RelatedItemsSection = styled.div`
  margin: 60px 200px;
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
`;

const Heading = styled.h3`
  font-size: 28px;
`;

const Whole = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 60px 0 0 200px;
`;

const Img = styled.img`
  display: block;
  height: 100%;
  background-color: #f5f5f5;
  padding: 143px 127px;
  border-radius: 4px 0 0 0;
`;

const Img1 = styled.img`
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    margin: 5px 0;
    width: 370px;
  }
`;

const Despara = styled.p`
  width: 373px;
  height: 63px;
  line-height: 25px;
`;

const Rightbottom = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  margin: 40px 0;

  hr {
    margin: 0;
    width: 380px;
  }
`;

const Div1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 25px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    margin: 10px 0;
  }

  p {
    font-size: 12px;
  }

  span {
    text-decoration: underline;
  }
`;

const ColorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;

const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ccc;

  &:hover {
    border: 2.5px solid black;
  }
`;

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = productlist.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError('Product not found');
    }
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <>
      <NavBar />
      <Breadcrumb>
        <Navlink1 to="/">Home</Navlink1>
        <span>/</span>
        <Navlink1 to="/products">Products</Navlink1>
        <span>/</span>
        <Navlink>Product Show</Navlink>
      </Breadcrumb>
      <Whole>
        <Img src={require(`../assets/images/${product.img}`)} alt={product.name} />
        <Right>
          <h1>{product.name}</h1>
          <p>${product.cost}</p>
          <Despara>{product.description || 'No description available.'}</Despara>
          <hr />
          <ColorSection>
            Colours:
            {product.colors?.map((color, index) => (
              <ColorBox key={index} style={{ backgroundColor: color }} />
            )) || 'No colors available.'}
          </ColorSection>
          <Rightbottom>
            <Div1>
              <Img1 src={require("../assets/images/icon-delivery (1).svg").default} alt="Delivery Icon" />
              <Div2>
                <h3>Free Delivery</h3>
                <p><span>Enter your postal code for Delivery Availability</span></p>
              </Div2>
            </Div1>
            <hr />
            <Div1>
              <Img1 src={require("../assets/images/Icon-return.svg").default} alt="Return Icon" />
              <Div2>
                <h3>Return Delivery</h3>
                <p>Free 30 Days Delivery Returns.<span>Details</span></p>
              </Div2>
            </Div1>
          </Rightbottom>
        </Right>
      </Whole>
      <RelatedItemsSection>
        <Hr />
        <Heading>Related Items</Heading>
      </RelatedItemsSection>
      <Footer />
    </>
  );
}
