"use client";
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-async-client-component */

import React, { useEffect, useState } from "react";
import ProductItem from "./item/ProductItem";
import { Product } from "@/utils/ProductType";

function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error ", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="container mx-auto mt-8 text-center ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {products.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
