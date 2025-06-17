import React from "react";
import Hero from "../components/Hero";
import ShopCategories from "../components/ShopCategories";
import Getdiscount from "../Components/Getdiscount";
import BestDeals from "../Components/BestDeals";
import PopularProducts from "../Components/PopularProducts";
import Herotwo from "../Components/Herotwo";
import BestDestTwo from "../Components/ProductList";
import Footer from "../Components/footer";
import ProductList from "../Components/ProductList";
import TrendingProducts from "../Components/TrendingProducts";
import GetCash from "../Components/GetCash";
import About from "../Components/C_About";

function Home() {
  return (
    <div>
      <Hero />
      <ShopCategories />
      <BestDeals />
      <Getdiscount />
      <PopularProducts />
      <Herotwo />
      <ProductList />
      <GetCash />
      <TrendingProducts />
      {/* <About/> */}
      {/* <About/> */}
    </div>
  );
}

export default Home;
