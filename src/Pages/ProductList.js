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
  margin-top: 50px;
  gap: 10px;
  margin: 60px 200px 0px 175px;
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
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProducts = productsData.filter(product =>
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
