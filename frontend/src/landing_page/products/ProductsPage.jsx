import React from "react";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";

import kiteImg from "../../assets/kite.png";
import productsCoin from "../../assets/products-coin.png";
import varsityMobile from "../../assets/varsity-products.svg";
import productsConsole from "../../assets/products-console.png";
import landing from "../../assets/landing.svg";

export default function ProductsPage() {
  return (
    <div>
      <Hero />
      <RightSection
        imageUrl={kiteImg}
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        links={["Try demo", "Learn more"]}
      />
      <LeftSection
        imageUrl={productsConsole}
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        links={["Learn more"]}
      />{" "}
      <RightSection
        imageUrl={productsCoin}
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        links={["Coin"]}
      />
      <LeftSection
        imageUrl={landing}
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        links={["Kite Connect"]}
      />{" "}
      <RightSection
        imageUrl={varsityMobile}
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <p className="text-center fs-5 text-muted mt-5 pt-5 fw-medium">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" className="text-decoration-none">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </div>
  );
}
