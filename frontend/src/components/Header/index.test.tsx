import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("renders the title correctly", () => {
    render(<Header title="Main Title" goBack={() => {}} />);
    expect(screen.getByText("Main Title")).toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    render(<Header title="Main Title" subtitle="Subtitle" goBack={() => {}} />);
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  it("does not render the subtitle if not provided", () => {
    render(<Header title="Main Title" goBack={() => {}} />);
    expect(screen.queryByText("Subtitle")).not.toBeInTheDocument();
  });

  it("applies custom classes to the title", () => {
    render(
      <Header title="Main Title" className="custom-class" goBack={() => {}} />,
    );
    expect(screen.getByText("Main Title")).toHaveClass("custom-class");
  });

  it("renders the badge when badge prop is true", () => {
    render(
      <Header
        title="Main Title"
        subtitle="Subtitle"
        badge={true}
        goBack={() => {}}
      />,
    );
    const badge = screen.getByText("Subtitle").closest("div");
    expect(badge).toHaveClass("badge badge-ghost");
  });

  it("does not render the badge when badge prop is false", () => {
    render(
      <Header
        title="Main Title"
        subtitle="Subtitle"
        badge={false}
        goBack={() => {}}
      />,
    );
    const subtitle = screen.getByText("Subtitle");
    expect(subtitle.closest("div")).not.toHaveClass("badge badge-ghost");
  });

  it("renders the go back button when goBack is provided", () => {
    const goBackMock = jest.fn();
    render(
      <Header title="Main Title" subtitle="Subtitle" goBack={goBackMock} />,
    );
    const goBackButton = screen.getByRole("button");
    expect(goBackButton).toBeInTheDocument();
    fireEvent.click(goBackButton);
    expect(goBackMock).toHaveBeenCalledTimes(1);
  });
});
