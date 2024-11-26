import React from "react";

import { ProductList } from "@/components/ProductList";
import { Header } from "@/components/Header";
import { RecommendationProps } from "@/types/recommendation.types";

export const ProductRecommendations: React.FC<{
  recommendations: RecommendationProps[];
  onRestart: () => void;
}> = ({ recommendations, onRestart }) => (
  <div>
    <Header
      goBack={onRestart}
      title="Ferramentas"
      subtitle="Ferramentas gratuitas de marketing e vendas"
    />
    {recommendations.length > 0 ? (
      <ProductList products={recommendations} />
    ) : (
      <p className="">Nenhuma recomendação encontrada.</p>
    )}
  </div>
);
