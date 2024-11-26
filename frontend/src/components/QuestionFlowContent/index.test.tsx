import { render, screen, fireEvent } from "@testing-library/react";
import { QuestionFlowContent } from ".";
import { QuestionProps } from "@/types/question.types";

const mockQuestions: QuestionProps[] = [
  {
    id: 1,
    question: "What is your favorite color?",
    type: "single-choice",
    options: [
      { text: "Red", tags: ["color"] },
      { text: "Blue", tags: ["color"] },
    ],
  },
  {
    id: 2,
    question: "Select your hobbies",
    type: "multi-choice",
    options: [
      { text: "Reading", tags: ["hobby"] },
      { text: "Sports", tags: ["hobby"] },
    ],
  },
];

describe("QuestionFlowContent", () => {
  it("renders the current question and options", () => {
    render(
      <QuestionFlowContent
        questions={mockQuestions}
        currentStep={0}
        isNextDisabled={true}
        onAnswer={jest.fn()}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
      />,
    );
    expect(
      screen.getByText("What is your favorite color?"),
    ).toBeInTheDocument();
    expect(screen.getByText("Red")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
  });

  it("disables the next button when isNextDisabled is true", () => {
    render(
      <QuestionFlowContent
        questions={mockQuestions}
        currentStep={0}
        isNextDisabled={true}
        onAnswer={jest.fn()}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
      />,
    );

    const nextButton = screen.getByRole("button", { name: "Avançar" });
    expect(nextButton).toBeDisabled();
  });

  it("enables the next button when isNextDisabled is false", () => {
    render(
      <QuestionFlowContent
        questions={mockQuestions}
        currentStep={0}
        isNextDisabled={false}
        onAnswer={jest.fn()}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
      />,
    );
    expect(screen.getByText("Avançar")).not.toBeDisabled();
  });

  it("calls onNext when the next button is clicked", () => {
    const onNextMock = jest.fn();
    render(
      <QuestionFlowContent
        questions={mockQuestions}
        currentStep={0}
        isNextDisabled={false}
        onAnswer={jest.fn()}
        onNext={onNextMock}
        onPrevious={jest.fn()}
      />,
    );
    fireEvent.click(screen.getByText("Avançar"));
    expect(onNextMock).toHaveBeenCalledTimes(1);
  });

  it("renders the 'Voltar' button and calls onPrevious when clicked", () => {
    const onPreviousMock = jest.fn();
    render(
      <QuestionFlowContent
        questions={mockQuestions}
        currentStep={1}
        isNextDisabled={false}
        onAnswer={jest.fn()}
        onNext={jest.fn()}
        onPrevious={onPreviousMock}
      />,
    );
    fireEvent.click(screen.getByText("Voltar"));
    expect(onPreviousMock).toHaveBeenCalledTimes(1);
  });

  it("renders the 'Finalizar' button on the last step", () => {
    render(
      <QuestionFlowContent
        questions={mockQuestions}
        currentStep={mockQuestions.length - 1}
        isNextDisabled={false}
        onAnswer={jest.fn()}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
      />,
    );
    expect(screen.getByText("Finalizar")).toBeInTheDocument();
  });
});
