import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from ".";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute("data-theme", "app");
  });

  it("renders correctly with the default theme", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(document.documentElement.getAttribute("data-theme")).toBe("app");
  });

  it("toggles theme to dark when clicked", () => {
    render(<ThemeToggle />);
    const toggleButton = screen.getByRole("checkbox");

    fireEvent.click(toggleButton);

    expect(toggleButton).toBeChecked();
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("toggles theme back to app when clicked again", () => {
    render(<ThemeToggle />);
    const toggleButton = screen.getByRole("checkbox");

    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);

    expect(toggleButton).not.toBeChecked();
    expect(document.documentElement.getAttribute("data-theme")).toBe("app");
    expect(localStorage.getItem("theme")).toBe("app");
  });

  it("initializes with theme from localStorage", () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);
    const toggleButton = screen.getByRole("checkbox");

    expect(toggleButton).toBeChecked();
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("saves the theme to localStorage on toggle", () => {
    render(<ThemeToggle />);
    const toggleButton = screen.getByRole("checkbox");

    fireEvent.click(toggleButton);
    expect(localStorage.getItem("theme")).toBe("dark");

    fireEvent.click(toggleButton);
    expect(localStorage.getItem("theme")).toBe("app");
  });
});
