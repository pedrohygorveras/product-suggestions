import { render, screen } from "@testing-library/react";
import { AppContainer } from ".";

describe("AppContainer", () => {
  it("renders children correctly", () => {
    render(
      <AppContainer>
        <div>Test Child</div>
      </AppContainer>,
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("applies the correct classes", () => {
    const { container } = render(
      <AppContainer>
        <div>Test Child</div>
      </AppContainer>,
    );
    expect(container.firstChild).toHaveClass(
      "min-h-screen bg-base-100 text-base text-letter",
    );
  });
});
