import React from "react";

import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";

import Trending from "../components/ui/Trending-section/Trending";

import StepSection from "../components/ui/Step-section/StepSection";
import HomeFeed from "./HomeFeed";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeFeed />
      <StepSection />
    </>
  );
};

export default Home;
