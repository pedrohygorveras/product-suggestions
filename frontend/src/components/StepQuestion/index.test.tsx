import { render, screen, fireEvent } from "@testing-library/react";
import { StepQuestion } from ".";

describe("StepQuestion", () => {
  const mockOnAnswer = jest.fn();

  const defaultProps = {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green"],
    type: "single",
    onAnswer: mockOnAnswer,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the question and options", () => {
    render(<StepQuestion {...defaultProps} />);
    expect(
      screen.getByText("What is your favorite color?"),
    ).toBeInTheDocument();
    expect(screen.getByText("Red")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
    expect(screen.getByText("Green")).toBeInTheDocument();
  });

  it("calls onAnswer with the selected option for single-choice", () => {
    render(<StepQuestion {...defaultProps} />);
    const redOption = screen.getByLabelText("Red");
    fireEvent.click(redOption);
    expect(mockOnAnswer).toHaveBeenCalledWith(["Red"]);
  });

  it("allows multiple options to be selected for multi-choice", () => {
    render(<StepQuestion {...defaultProps} type="multi" />);

    const redOption = screen.getByLabelText("Red");
    const blueOption = screen.getByLabelText("Blue");

    fireEvent.click(redOption);
    fireEvent.click(blueOption);

    expect(mockOnAnswer).toHaveBeenCalledWith(["Red"]);
    expect(mockOnAnswer).toHaveBeenCalledWith(["Red", "Blue"]);
  });

  it("deselects an option for multi-choice", () => {
    render(<StepQuestion {...defaultProps} type="multi" />);

    const redOption = screen.getByLabelText("Red");
    fireEvent.click(redOption);
    fireEvent.click(redOption);

    expect(mockOnAnswer).toHaveBeenCalledWith(["Red"]);
    expect(mockOnAnswer).toHaveBeenCalledWith([]);
  });

  it("only allows one option to be selected for single-choice", () => {
    render(<StepQuestion {...defaultProps} />);
    const redOption = screen.getByLabelText("Red");
    const blueOption = screen.getByLabelText("Blue");

    fireEvent.click(redOption);
    fireEvent.click(blueOption);

    expect(mockOnAnswer).toHaveBeenCalledWith(["Red"]);
    expect(mockOnAnswer).toHaveBeenCalledWith(["Blue"]);
  });
});
