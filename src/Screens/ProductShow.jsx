import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import productlist from "../Data/Data.json"; // Import your product data

// Styles (No changes needed here)
const Whole = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 60px 0px 0px 200px;
  padding: 0px;
`;
const Img = styled.img`
  display: block;
  height: 100%;
  background-color: #f5f5f5;
  padding: 143px 127px 142px 127px;
  border-radius: 4px 0px 0px 0px;
  opacity: 1; /* Set to 1 to display the image */
`;
const Img1 = styled.img`
  height: 100%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    margin: 5px 0px;
    width: 370px;
  }
`;
const Despara = styled.p`
  width: 373px;
  height: 63px;
  line-height: 25px;
`;
const Rightbotom = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  margin: 40px 0px 0px 0px;

  hr {
    margin: 0px;
    width: 380px;
  }
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 10px 25px;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    display: inline-block;
    margin: 10px 0px;
  }

  p {
    font-size: 12px;
    display: inline-block;
  }

  span {
    text-decoration: underline;
  }
`;
const ColorSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin: 10px 0px 0px 0px;
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

function ProductShow() {
  const { id } = useParams(); // Get the product ID from URL
  const product = productlist.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <p>Product not found</p>;
  }


  // productlist
  return (
    <>
      <Whole>
        <Img
          src={require(`../assets/images/${product.img}`)}
          alt={product.name}
        />
        <Right>
          <h1>{product.name}</h1>
          <p>${product.cost}</p>
          <Despara>{product.description}</Despara>
          <hr />
          <ColorSection>
            Colours:
            {product.colors.map((color, index) => (
              <ColorBox key={index} style={{ backgroundColor: color }} />
            ))}
          </ColorSection>
          <Rightbotom>
            <Div1>
              <Img1
                src={require("../assets/images/icon-delivery (1).svg").default}
                alt="Delivery Icon"
              />
              <Div2>
                <h3>Free Delivery</h3>
                <p>
                  <span>Enter your postal code for Delivery Availability</span>
                </p>
              </Div2>
            </Div1>
            <hr />
            <Div1>
              <Img1
                src={require("../assets/images/Icon-return.svg").default}
                alt="Return Icon"
              />
              <Div2>
                <h3>Return Delivery</h3>
                <p>
                  Free 30 Days Delivery Returns.<span>Details</span>
                </p>
              </Div2>
            </Div1>
          </Rightbotom>
        </Right>
      </Whole>
    </>
  );
}

export default ProductShow;
