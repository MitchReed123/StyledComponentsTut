import React from "react";
import Listing from "../components/Listing";
import { SliderData } from "../data/SliderData";

const Homes = () => {
  return <Listing slides={SliderData} />;
};

export default Homes;
