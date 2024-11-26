import { render, screen } from "@testing-library/react";
import { ProductList } from ".";
import { ProductProps } from "@/types/product.types";

const mockProducts: ProductProps[] = [
  {
    id: 1,
    thumbnail: "https://example.com/thumbnail1.jpg",
    title: "Product 1",
    category_url: "https://example.com/category1",
    category_title: "Category 1",
    link: "https://example.com/product1",
  },
  {
    id: 2,
    thumbnail: "https://example.com/thumbnail2.jpg",
    title: "Product 2",
    category_url: "https://example.com/category2",
    category_title: "Category 2",
    link: "https://example.com/product2",
  },
];

describe("ProductList", () => {
  it("renders a message when the product list is empty", () => {
    render(<ProductList products={[]} />);
    expect(
      screen.getByText("Nenhuma recomendação encontrada."),
    ).toBeInTheDocument();
  });

  it("renders a list of ProductCard components", () => {
    render(<ProductList products={mockProducts} />);
    const productTitles = mockProducts.map(product => product.title);

    productTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders the correct number of ProductCard components", () => {
    render(<ProductList products={mockProducts} />);
    const productCards = screen.getAllByRole("img");
    expect(productCards.length).toBe(mockProducts.length);
  });

  it("renders the grid layout with the correct classes", () => {
    const { container } = render(<ProductList products={mockProducts} />);
    const gridContainer = container.firstChild;
    expect(gridContainer).toHaveClass(
      "mb-6 grid grid-cols-1 gap-6 md:grid-cols-3",
    );
  });
});
