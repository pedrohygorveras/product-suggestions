import React from "react";

import { ProductCard } from "@/components/ProductCard";
import { ProductProps } from "@/types/product.types";

interface ProductListProps {
  products: ProductProps[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p className="">Nenhuma recomendação encontrada.</p>;
  }

  return (
    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
