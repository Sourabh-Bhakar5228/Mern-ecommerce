import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import NewCollection from "../components/NewCollection/NewCollection";
import NewsLatter from "../components/NewsLatter/NewsLatter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLatter />
    </div>
  );
};

export default Shop;
