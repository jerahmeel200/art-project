"use client";

import Hero from "@/components/hero/Hero";
import NewArivals from "@/components/newArivals/NewArivals";
import MostPopular from "@/components/popular/MostPopular";
import Products from "@/components/popular/Products";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <NewArivals />
      <MostPopular />
    </div>
  );
}

export default page;
