import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../../components/OpenAccount";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
