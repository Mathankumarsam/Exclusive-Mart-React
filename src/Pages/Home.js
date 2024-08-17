import React from "react";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import Offer from "../Screens/Offer";
import Category from "../Screens/Category";
import Services from "../Screens/Services";
import styled from "styled-components";
import productlist from "../Data/Data.json";
import LikeButton from "../Components/Like";
import { Link as RouterLink } from "react-router-dom";
import fullStar from "../assets/images/Vector (1).png";
import halfStar from "../assets/images/star-half-filled.png";
import emptyStar from "../assets/images/Vector (2).png";

export default function Home() {
  // Slice the product list to get only the first 8 products
  const displayedProducts = productlist.slice(0, 8);

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

  return (
    <>
      <NavBar />
      <Offer />
      <Category />
      <Container>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id}>
            <TopSection>
              {product.new && <New>New</New>}
              {product.off && <Off>-{product.offer}%</Off>}
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
              <AddCart>Add to Cart</AddCart>
            </TopSection>
            <BottomSection>
              <Link href="#">{product.name}</Link>
              <Content>
                <Cost>${product.cost}</Cost>
                <div>{renderStars(product.rating)}</div>
                <p>({product.buyed})</p>
              </Content>
              {product.color && (
                <ColorSection>
                  {product.color1 && <ColorBox color={product.color1} />}
                  {product.color2 && <ColorBox color={product.color2} />}
                </ColorSection>
              )}
            </BottomSection>
          </ProductCard>
        ))}
      </Container>
      <Content1>
        <ViewAllButton as={RouterLink} to="/products">
          View All Products
        </ViewAllButton>
      </Content1>
      <Services />
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin: 60px 200px 0px 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 80px 43px;
  justify-content: left;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-contents: stretch;
  margin: 0;
`;
const AddCart = styled.div`
  position: absolute;
  text-align: center;
  width: 96%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  border-radius: 2px 2px 2px 2px ;
  color: white;
  padding: 10px 5px;
  display: none;
  cursor: pointer;
`;

const TopSection = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 5px;
  width: auto;
  height: 100%;
  margin: 0;
  position: relative;

  &:hover ${AddCart} {
    display: block;
  }
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
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 1px;
  }
`;

const Cost = styled.div`
  color: #db4444;
`;

const ColorSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  position: absolute;
  z-index: 1;
  flex-wrap: wrap;
`;

const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ccc;

  &:hover {
    border: 2.5px solid black;
  }

  background-color: ${(props) => props.color || "#fff"};
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
  top: 0;
  right: 0;
  padding: 5px 15px 0px 0px;
`;

const New = styled.p`
  position: absolute;
  left: 20px;
  top: 5px;
  background-color: #00ff66;
  color: white;
  padding: 3px 5px;
  border-radius: 5px;
`;

const Off = styled.p`
  position: absolute;
  left: 20px;
  top: 5px;
  background-color: #db4444;
  color: white;
  padding: 3px 5px;
  border-radius: 5px;
`;

const ViewAllButton = styled(Link)`
  background: #db4444;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px auto;
  text-align: center;
`;

const Content1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
