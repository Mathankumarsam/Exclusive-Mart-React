import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import productlist from "../Data/Data.json";
import Product from "../Screens/Product";
import fullStar from "../assets/images/Vector (1).png";
import halfStar from "../assets/images/star-half-filled.png";
import emptyStar from "../assets/images/Vector (2).png";

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 60px 200px 0px 175px;

  @media screen and (min-width: 40px) and (max-width: 1440px) {
    margin: 60px 100px 0px 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 860px) {
    margin: 60px 100px 0px 50px;
  }

  @media screen and (min-width: 40px) and (max-width: 480px) {
    font-size: 14px;
    margin: 60px 50px 0;
  }
`;

const Navlink = styled(RouterLink)`
  text-decoration: none;
  color: black;
`;

const Navlink1 = styled(RouterLink)`
  text-decoration: none;
  color: gray;
`;

const RelatedItemsSection = styled.div`
  margin: 60px 200px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 40px) and (max-width: 1440px) {
    margin: 60px 100px 0px 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 800px) {
    margin: 30px 100px 0px 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 480px) {
    margin: 30px 100px 0px 80px;
  }
`;

const Hr = styled.hr`
  width: 20px;
  height: 50px;
  background-color: #db4444;
  border-radius: 8px;
  border: none;
  margin: 0px;
  padding: 0px;

  @media screen and (min-width: 40px) and (max-width: 480px) {
    width: 15px;
    height: 35px;
  }
`;

const Heading = styled.h3`
  font-size: 28px;

  @media screen and (min-width: 40px) and (max-width: 480px) {
    font-size: 22px;
  }
`;

const Whole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 80px 0px 0px 0px;

  @media screen and (min-width: 40px) and (max-width: 1440px) {
    margin: 60px 100px 0px 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 1080px) {
    gap: 50px;
  }

  @media screen and (min-width: 40px) and (max-width: 860px) {
    gap: 40px;
    margin: 40px 100px 0;
  }

  @media screen and (min-width: 40px) and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin: 40px 100px 0px 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 500px) {
    margin: 40px 80px 0;
  }

  @media screen and (min-width: 40px) and (max-width: 460px) {
    margin: 40px 60px 0;
  }

  @media screen and (min-width: 40px) and (max-width: 380px) {
    margin: 20px;
  }
`;

const Img = styled.img`
  display: block;
  height: 100%;
  background-color: #f5f5f5;
  padding: 150px 183px;
  border-radius: 20px;

  @media screen and (min-width: 40px) and (max-width: 1080px) {
    padding: 150px 120px;
  }

  @media screen and (min-width: 40px) and (max-width: 980px) {
    padding: 150px 80px;
  }

  @media screen and (min-width: 40px) and (max-width: 800px) {
    padding: 150px 210px;
  }

  @media screen and (min-width: 40px) and (max-width: 760px) {
    padding: 150px 200px;
  }

  @media screen and (min-width: 40px) and (max-width: 700px) {
    padding: 150px 160px;
  }

  @media screen and (min-width: 40px) and (max-width: 640px) {
    padding: 130px;
  }

  @media screen and (min-width: 40px) and (max-width: 600px) {
    padding: 100px 120px;
  }

  @media screen and (min-width: 40px) and (max-width: 560px) {
    padding: 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 500px) {
    padding: 80px;
  }

  @media screen and (min-width: 40px) and (max-width: 460px) {
    padding: 60px;
  }
`;

const Img1 = styled.img`
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 40px) and (max-width: 800px) {
    flex-wrap: wrap;
  }

  h1 {
    margin: 0px;
    font-size: 24px;
  }

  hr {
    margin: 5px 0;
    width: 370px;

    @media screen and (min-width: 40px) and (max-width: 800px) {
      display: none;
    }
  }

  h2 {
    margin: 10px 0px;
    font-weight: 400;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0px;

  h4 {
    font-weight: 200;
    font-size: 14px;
    margin: 0px;
  }
`;

const Despara = styled.p`
  width: 373px;
  height: 63px;
  line-height: 25px;
  font-size: 14px;

  @media screen and (min-width: 40px) and (max-width: 800px) {
    width: 100%;
    height: auto;
    margin: 5px 0;
  }
`;

const Rightbottom = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0px 0px 0px;

  @media screen and (min-width: 40px) and (max-width: 860px) {
    width: 350px;
  }

  @media screen and (min-width: 40px) and (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 40px) and (max-width: 460px) {
    width: 100%;
    display: block;
  }

  hr {
    margin: 0;
    width: 400px;

    @media screen and (min-width: 40px) and (max-width: 860px) {
      width: 348px;
    }
  }
`;

const Div1 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 10px 25px;

  @media screen and (min-width: 40px) and (max-width: 860px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 40px) and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 40px) and (max-width: 460px) {
    padding: 8px;
    gap: 10px;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    margin: 10px 0;

    @media screen and (min-width: 40px) and (max-width: 860px) {
      font-size: 14px;
      margin: 5px 0;
    }
  }

  p {
    font-size: 12px;

    @media screen and (min-width: 40px) and (max-width: 860px) {
      margin: 5px 0;
    }
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
  font-size: 20px;
`;

const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: ${(props) => props.color || "#fff"};

  &:hover {
    border: 2.5px solid black;
  }
`;

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <img key={`full-${index}`} src={fullStar} alt="Full star" />
        ))}
        {halfStars && <img src={halfStar} alt="Half star" />}
        {[...Array(emptyStars)].map((_, index) => (
          <img key={`empty-${index}`} src={emptyStar} alt="Empty star" />
        ))}
      </>
    );
  };

  useEffect(() => {
    const foundProduct = productlist.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError("Product not found");
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
        <Img
          src={require(`../assets/images/${product.img}`)}
          alt={product.name}
        />
        <Right>
          <h1>{product.name}</h1>
          <h2>${product.cost}</h2>
          <Rating>
            <div>{renderStars(product.rating)}</div>
            <h4> ( {product.rev} Reviews ) </h4>
          </Rating>
          <Despara>
            {product.description || "No description available."}
          </Despara>
          <hr />
          <ColorSection>
            Colours :
            {[product.color1, product.color2].filter(Boolean).length > 0
              ? [product.color1, product.color2]
                  .filter(Boolean)
                  .map((color, index) => <ColorBox key={index} color={color} />)
              : " Single"}
          </ColorSection>

          <Rightbottom>
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
          </Rightbottom>
        </Right>
      </Whole>
      <RelatedItemsSection>
        <Hr />
        <Heading>Related Items</Heading>
      </RelatedItemsSection>
      <Product products={productlist} limit={4} />
      <Footer />
    </>
  );
}
