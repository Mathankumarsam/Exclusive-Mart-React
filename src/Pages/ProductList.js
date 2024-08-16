import React from "react";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import Product from "../Screens/Product";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Content1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
  margin: 60px 200px 0px 200px;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Navlink1 = styled(Link)`
  text-decoration: none;
  color: gray;
`;
function ProductList() {
  return (
    <>
      <NavBar />
      <Content1>
        <Navlink1 to="/">Home</Navlink1>
        <span>/</span>
        <Navlink>Products</Navlink>
      </Content1>
      <Product />
      <Footer />
    </>
  );
}

export default ProductList;
