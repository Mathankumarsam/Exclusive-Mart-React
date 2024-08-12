import React from "react";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import Offer from "../Screens/Offer"
import Category from "../Screens/Category";
import Services from "../Screens/Services";
import Product from "../Screens/Product";

export default function Home() {
  return (
    <>
    <NavBar/>
      <Offer/>
      <Category/>
      <Product/>
      <Services/>
      <Footer />
    </>
  );
}
