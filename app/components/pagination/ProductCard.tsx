import React from "react";
import Image from "next/image";

export interface ProductProps {
  product: {
    id: number;
    title: string;
    thumbnail: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="flex justify-center">
        <Image
          className="rounded-md object-cover"
          src={product.thumbnail}
          alt={product.title}
          width={180}
          height={180}
          loading="lazy"
        />
      </div>
      <h1 className="text-center text-sm sm:text-lg font-semibold mt-2">
        {product.title}
      </h1>
    </div>
  );
};

export default ProductCard;
