import { render, screen } from "@testing-library/react";
import { ThemeSection } from ".";

jest.mock("@/components/ThemeToggle", () => ({
  ThemeToggle: () => (
    <div data-testid="theme-toggle">Theme Toggle Component</div>
  ),
}));

describe("ThemeSection", () => {
  it("renders the ThemeToggle component", () => {
    render(<ThemeSection />);
    const themeToggle = screen.getByTestId("theme-toggle");
    expect(themeToggle).toBeInTheDocument();
    expect(themeToggle).toHaveTextContent("Theme Toggle Component");
  });
});
