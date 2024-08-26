import React, { useState } from "react";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import Product from "../Screens/Product";
import styled from "styled-components";
import { Link } from "react-router-dom";
import productsData from "../Data/Data.json";

const Content1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 60px 200px 0px 120px;

  @media screen and (min-width: 40px) and (max-width: 1280px) {
    margin: 60px 100px 0px 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 1080px) {
    margin: 60px 100px 0px 70px;
  }

  @media screen and (min-width: 40px) and (max-width: 941px) {
    margin: 60px 100px 0px 130px;
  }

  @media screen and (min-width: 40px) and (max-width: 860px) {
    margin: 60px 100px 0px 130px;
  }

  @media screen and (min-width: 40px) and (max-width: 760px) {
    margin: 60px 100px 0px 90px;
  }

  @media screen and (min-width: 40px) and (max-width: 690px) {
    margin: 60px 100px 0px 50px;
  }


`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Navlink1 = styled(Link)`
  text-decoration: none;
  color: gray;
`;

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <NavBar searchQuery={searchQuery} onSearch={handleSearchChange} />
      <Content1>
        <Navlink1 to="/">Home</Navlink1>
        <span>/</span>
        <Navlink>Products</Navlink>
      </Content1>
      <Product products={filteredProducts} />
      <Footer />
    </>
  );
};

export default ProductList;
