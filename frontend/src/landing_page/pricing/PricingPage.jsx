import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../../components/OpenAccount";

export default function PricingPage() {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
}
