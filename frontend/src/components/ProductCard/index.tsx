import React from "react";

import { Button } from "@/components/Button";
import { ProductProps } from "@/types/product.types";
import { MdArrowForward } from "react-icons/md";

interface ProductCardProps {
  product: ProductProps;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-card rounded border border-base-300 shadow-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-36 w-full border-b border-base-300 object-cover"
      />
      <div className="p-6">
        <a
          href={product.category_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="inline rounded bg-base-300 px-3 py-2 text-sm font-semibold uppercase"
            title={product.category_title}
          >
            {product.category_title}
          </div>
        </a>
        <h3
          className="mb-4 mt-6 truncate text-lg font-bold"
          title={product.title}
        >
          {product.title}
        </h3>
        <Button
          href={product.link}
          target="_blank"
          className="block rounded bg-blue-600 px-4 py-2 text-center text-white"
        >
          <div className="flex items-center justify-center font-semibold">
            SAIBA MAIS
            <MdArrowForward className="ml-2 text-lg" />
          </div>
        </Button>
      </div>
    </div>
  );
};
