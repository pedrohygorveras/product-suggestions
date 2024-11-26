import { render, screen } from "@testing-library/react";
import { ProductProps } from "@/types/product.types";
import { ProductCard } from ".";

const mockProduct: ProductProps = {
  id: 1,
  thumbnail: "https://example.com/thumbnail.jpg",
  title: "Product Title",
  category_url: "https://example.com/category",
  category_title: "Category Title",
  link: "https://example.com/product",
};

describe("ProductCard", () => {
  it("renders the product thumbnail with correct alt text", () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByRole("img", { name: /Product Title/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.thumbnail);
  });

  it("renders the category link with correct href", () => {
    render(<ProductCard product={mockProduct} />);
    const categoryLink = screen.getByText(mockProduct.category_title);
    expect(categoryLink).toBeInTheDocument();
    expect(categoryLink.closest("a")).toHaveAttribute(
      "href",
      mockProduct.category_url,
    );
  });

  it("renders the product title", () => {
    render(<ProductCard product={mockProduct} />);
    const title = screen.getByText(mockProduct.title);
    expect(title).toBeInTheDocument();
  });

  it("renders the 'SAIBA MAIS' button with correct link", () => {
    render(<ProductCard product={mockProduct} />);
    const button = screen.getByText("SAIBA MAIS");
    expect(button).toBeInTheDocument();
    const buttonLink = button.closest("a");
    expect(buttonLink).toHaveAttribute("href", mockProduct.link);
  });

  it("renders the arrow icon inside the 'SAIBA MAIS' button", () => {
    render(<ProductCard product={mockProduct} />);
    const arrowIcon = screen.getByRole("img", { hidden: true });
    expect(arrowIcon).toBeInTheDocument();
  });

  it("applies correct classes to the card container", () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    expect(container.firstChild).toHaveClass(
      "bg-card rounded border border-base-300 shadow-md",
    );
  });

  it("renders the button with the correct classes", () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    const button = container.querySelector("a.block.rounded.bg-blue-600");
    expect(button).toBeInTheDocument();
  });
});
