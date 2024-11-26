import { render, screen, fireEvent } from "@testing-library/react";
import { ProductRecommendations } from ".";
import { RecommendationProps } from "@/types/recommendation.types";

const mockRecommendations: RecommendationProps[] = [
  {
    id: 1,
    thumbnail: "https://example.com/thumbnail1.jpg",
    title: "Recommendation 1",
    category_url: "https://example.com/category1",
    category_title: "Category 1",
    link: "https://example.com/recommendation1",
  },
  {
    id: 2,
    thumbnail: "https://example.com/thumbnail2.jpg",
    title: "Recommendation 2",
    category_url: "https://example.com/category2",
    category_title: "Category 2",
    link: "https://example.com/recommendation2",
  },
];

describe("ProductRecommendations", () => {
  it("renders the header with the correct title and subtitle", () => {
    render(
      <ProductRecommendations
        recommendations={mockRecommendations}
        onRestart={jest.fn()}
      />,
    );
    expect(screen.getByText("Ferramentas")).toBeInTheDocument();
    expect(
      screen.getByText("Ferramentas gratuitas de marketing e vendas"),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no recommendations", () => {
    render(
      <ProductRecommendations recommendations={[]} onRestart={jest.fn()} />,
    );
    expect(
      screen.getByText("Nenhuma recomendação encontrada."),
    ).toBeInTheDocument();
  });

  it("renders a list of ProductList components when there are recommendations", () => {
    render(
      <ProductRecommendations
        recommendations={mockRecommendations}
        onRestart={jest.fn()}
      />,
    );
    mockRecommendations.forEach(recommendation => {
      expect(screen.getByText(recommendation.title)).toBeInTheDocument();
    });
  });

  it("calls the onRestart function when the go back button is clicked", () => {
    const onRestartMock = jest.fn();
    render(
      <ProductRecommendations
        recommendations={mockRecommendations}
        onRestart={onRestartMock}
      />,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onRestartMock).toHaveBeenCalledTimes(1);
  });
});
