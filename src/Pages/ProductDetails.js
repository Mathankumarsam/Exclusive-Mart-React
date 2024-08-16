import React from "react";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductShow from "../Screens/ProductShow";

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
const Navlink2 = styled(Link)`
  text-decoration: none;
  color: gray;
`;
const Div1 = styled.div`
  margin: 60px 200px 0px 200px;
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
const Hed3 = styled.h3`
  font-size: 28px;
`;
export default function ProductDetails() {
  return (
    <>
      <NavBar />
      <Content1>
        <Navlink1 to="/">Home</Navlink1>
        <span>/</span>
        <Navlink2 to="/products">Products</Navlink2>
        <span>/</span>
        <Navlink>Product Show</Navlink>
      </Content1>
      <ProductShow />
      <Div1>
        <Hr />
        <Hed3>Related Items</Hed3>
      </Div1>
      <Footer />
    </>
  );
}
