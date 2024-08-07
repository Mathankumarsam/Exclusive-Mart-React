import React from "react";
import NavBar from "../Components/Header";
import Footer from "../Components/Footer";
import Offer from "../Screens/Offer"
import Category from "../Screens/Category";
import Services from "../Screens/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Offer/>
      <Category/>
      <Services/>
      <Footer />
    </>
  );
}
