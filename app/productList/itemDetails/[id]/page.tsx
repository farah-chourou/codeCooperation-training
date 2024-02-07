"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/utils/ProductType";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function ProductDescription({ params }: { params: { id: string } }) {
  const [productData, setProductData] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();
      setProductData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  if (isLoading) {
    return "Loading...";
  } else {
    return (
      <div className="flex justify-center mt-16">
        <div className="max-w-2xl border border-gray-300 p-4 rounded-md shadow-md">
          <div>
            <MoveLeft />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {productData?.image && (
                <Image
                  src={productData.image}
                  alt="image"
                  className="rounded-md"
                  width={350}
                  height={350}
                />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {productData?.title}
                </h2>
                <p className="text-gray-900 mb-2">{productData?.description}</p>
                <p className="text-gray-900 font-bold">
                  Category: {productData?.category}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 font-bold text-black-1000">
                  Price: ${productData?.price}
                </p>
                <ShoppingCart className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
