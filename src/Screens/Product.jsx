import React from "react";
import styled from "styled-components";
import LikeButton from "../Components/Like";
import fullStar from "../assets/images/Vector (1).png";
import halfStar from "../assets/images/star-half-filled.png";
import emptyStar from "../assets/images/Vector (2).png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 60px 100px 0px 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 80px 43px;
  justify-content: left;

  @media screen and (min-width: 120px) and (max-width: 1440px) {
    margin: 40px 100px;
    gap: 40px 43px;
  }

  @media screen and (min-width: 120px) and (max-width: 1408px) {
    margin: 40px 100px;
    gap: 40px 40px;
  }

  @media screen and (min-width: 120px) and (max-width: 1399px) {
    margin: 40px 100px;
    gap: 40px 30px;
  }

  @media screen and (min-width: 120px) and (max-width: 1352px) {
    margin: 40px 100px;
    gap: 40px 20px;
  }

  @media screen and (min-width: 120px) and (max-width: 1316px) {
    margin: 40px 100px;
    gap: 40px 120px;
  }

  @media screen and (min-width: 120px) and (max-width: 1249px) {
    margin: 40px 90px;
    gap: 40px 100px;
  }

  @media screen and (min-width: 120px) and (max-width: 1189px) {
    margin: 40px 85px;
    gap: 40px 80px;
  }

  @media screen and (min-width: 120px) and (max-width: 1139px) {
    margin: 40px 85px;
    gap: 40px 60px;
  }

  @media screen and (min-width: 120px) and (max-width: 1099px) {
    margin: 40px 85px;
    gap: 40px 40px;
  }

  @media screen and (min-width: 120px) and (max-width: 1069px) {
    margin: 40px 65px;
    gap: 40px 40px;
  }

  @media screen and (min-width: 120px) and (max-width: 1019px) {
    margin: 40px 65px;
    gap: 40px 20px;
  }

  @media screen and (min-width: 120px) and (max-width: 979px) {
    margin: 40px 65px;
    gap: 40px 10px;
  }

  @media screen and (min-width: 120px) and (max-width: 941px) {
    margin: 40px 130px;
    gap: 40px 100px;
  }

  @media screen and (min-width: 120px) and (max-width: 899px) {
    margin: 40px 130px;
    gap: 40px 80px;
  }

  @media screen and (min-width: 120px) and (max-width: 879px) {
    margin: 40px 130px;
    gap: 40px 60px;
  }

  @media screen and (min-width: 120px) and (max-width: 860px) {
    margin: 40px 130px;
    gap: 40px 40px;
  }

  @media screen and (min-width: 120px) and (max-width: 839px) {
    margin: 40px 100px;
    gap: 40px 60px;
  }

  @media screen and (min-width: 120px) and (max-width: 812px) {
    margin: 40px 100px;
    gap: 40px 43px;
  }

  @media screen and (min-width: 120px) and (max-width: 793px) {
    margin: 40px 80px 0 80px;
    gap: 40px 60px;
  }

  @media screen and (min-width: 740px) and (max-width: 759px) {
    margin: 40px 80px;
    gap: 40px 40px;
  }

  @media screen and (min-width: 120px) and (max-width: 739px) {
    margin: 40px 0px 0px 0px;
    justify-content: center;
    gap: 40px 60px;
  }

  @media screen and (min-width: 120px) and (max-width: 640px) {
    gap: 40px 20px;
  }

  @media screen and (min-width: 120px) and (max-width: 580px) {
    gap: 40px 20px;
    margin: 40px ;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-contents: stretch;
  margin: 0;
  position: relative; /* Ensure AddCart can be positioned absolutely */
`;

const AddCart = styled.div`
  position: absolute;
  text-align: center;
  width: 96%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  border-radius: 2px;
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
  background-color: ${(props) => props.color || "#fff"};

  &:hover {
    border: 2.5px solid black;
  }
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
  padding: 5px 15px 0 0;
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

export default function Product({ products = [], limit = 12 }) {
  const navigate = useNavigate();

  // Function to render stars based on rating
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

  // Slice the products array to get the first 'limit' items
  const selectedProducts = products.slice(0, limit);

  return (
    <Container>
      {selectedProducts.map((product) => (
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
              onClick={() => navigate(`/products/${product.id}`)}
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
  );
}
