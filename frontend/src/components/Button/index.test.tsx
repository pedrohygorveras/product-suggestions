import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the correct default classes", () => {
    const { container } = render(<Button>Click Me</Button>);
    expect(container.firstChild).toHaveClass(
      "py-3 bg-primary text-slate-950 text-sm font-semibold uppercase rounded min-w-52 outline-none transition-all duration-200",
    );
  });

  it("applies additional classes passed via props", () => {
    const { container } = render(
      <Button className="extra-class">Click Me</Button>,
    );
    expect(container.firstChild).toHaveClass("extra-class");
  });

  it("renders as a link when href is provided", () => {
    render(
      <Button href="https://example.com" target="_blank">
        Visit Site
      </Button>,
    );
    const link = screen.getByText("Visit Site");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.tagName).toBe("A");
  });

  it("renders as a button when href is not provided", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText("Click Me");
    expect(button.tagName).toBe("BUTTON");
  });

  it("handles click events", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled styles and prevents click events when disabled", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Disabled
      </Button>,
    );
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50");
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows loading state for a disabled submit button", () => {
    render(
      <Button type="submit" disabled>
        Submit
      </Button>,
    );
    const loadingText = screen.getByText("Aguarde");
    expect(loadingText).toBeInTheDocument();
    const parentElement = loadingText.closest("div");
    expect(parentElement).toHaveClass("flex items-center justify-center");
  });
});
