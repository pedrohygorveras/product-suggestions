import { render, screen, fireEvent } from "@testing-library/react";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import { App } from "@/App";

jest.mock("@/data/questions.json", () => [
  {
    id: 1,
    question: "Qual é o seu objetivo principal?",
    type: "multiple",
    options: [
      {
        text: "Criar ou melhorar estratégias de marketing digital",
        tags: ["Ferramentas de Marketing"],
      },
      {
        text: "Otimizar o gerenciamento de leads e vendas",
        tags: ["CRM e Vendas"],
      },
      {
        text: "Criar páginas de captura (Landing Pages)",
        tags: ["Landing Page"],
      },
      {
        text: "Melhorar campanhas de email marketing",
        tags: ["Email Marketing"],
      },
      {
        text: "Melhorar a presença em mídias sociais",
        tags: ["Mídias Sociais"],
      },
    ],
  },
]);

jest.mock("@/hooks/useQuestionFlow", () => ({
  useQuestionFlow: jest.fn(),
}));

jest.mock("@/components/AppContainer", () => ({
  AppContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="app-container">{children}</div>
  ),
}));

jest.mock("@/components/ThemeSection", () => ({
  ThemeSection: () => <div data-testid="theme-section">Theme Section</div>,
}));

jest.mock("@/components/QuestionFlowContent", () => ({
  QuestionFlowContent: ({
    onAnswer,
    onNext,
    onPrevious,
    isNextDisabled,
  }: any) => (
    <div data-testid="question-flow-content">
      <button onClick={() => onAnswer(["Answer"])}>Answer</button>
      <button onClick={onNext} disabled={isNextDisabled}>
        Next
      </button>
      <button onClick={onPrevious}>Previous</button>
    </div>
  ),
}));

jest.mock("@/components/ProductRecommendations", () => ({
  ProductRecommendations: ({ onRestart }: any) => (
    <div data-testid="product-recommendations">
      Recommendations
      <button onClick={onRestart}>Restart</button>
    </div>
  ),
}));

describe("App", () => {
  it("renders the question flow when the current step is less than the total number of questions", () => {
    (useQuestionFlow as jest.Mock).mockReturnValue({
      questions: [
        { id: 1, question: "Test Question", type: "single", options: [] },
      ],
      currentStep: 0,
      recommendations: [],
      isNextDisabled: false,
      actions: {
        handleAnswer: jest.fn(),
        handleNext: jest.fn(),
        handlePrevious: jest.fn(),
        handleRestart: jest.fn(),
      },
    });

    render(<App />);

    expect(screen.getByTestId("app-container")).toBeInTheDocument();
    expect(screen.getByTestId("theme-section")).toBeInTheDocument();
    expect(screen.getByTestId("question-flow-content")).toBeInTheDocument();
    expect(
      screen.queryByTestId("product-recommendations"),
    ).not.toBeInTheDocument();
  });

  it("renders the recommendations section when the current step equals the total number of questions", () => {
    (useQuestionFlow as jest.Mock).mockReturnValue({
      questions: [
        { id: 1, question: "Test Question", type: "single", options: [] },
      ],
      currentStep: 1,
      recommendations: [],
      isNextDisabled: false,
      actions: {
        handleAnswer: jest.fn(),
        handleNext: jest.fn(),
        handlePrevious: jest.fn(),
        handleRestart: jest.fn(),
      },
    });

    render(<App />);

    expect(screen.getByTestId("app-container")).toBeInTheDocument();
    expect(screen.queryByTestId("theme-section")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("question-flow-content"),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("product-recommendations")).toBeInTheDocument();
  });

  it("calls handleAnswer and navigates through the flow correctly", () => {
    const mockActions = {
      handleAnswer: jest.fn(),
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      handleRestart: jest.fn(),
    };

    (useQuestionFlow as jest.Mock).mockReturnValue({
      questions: [
        { id: 1, question: "Test Question", type: "single", options: [] },
      ],
      currentStep: 0,
      recommendations: [],
      isNextDisabled: false,
      actions: mockActions,
    });

    render(<App />);

    fireEvent.click(screen.getByText("Answer"));
    expect(mockActions.handleAnswer).toHaveBeenCalledWith(["Answer"]);

    fireEvent.click(screen.getByText("Next"));
    expect(mockActions.handleNext).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Previous"));
    expect(mockActions.handlePrevious).toHaveBeenCalled();
  });

  it("restarts the flow when the restart button is clicked", () => {
    const mockActions = {
      handleAnswer: jest.fn(),
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      handleRestart: jest.fn(),
    };

    (useQuestionFlow as jest.Mock).mockReturnValue({
      questions: [
        { id: 1, question: "Test Question", type: "single", options: [] },
      ],
      currentStep: 1,
      recommendations: [],
      isNextDisabled: false,
      actions: mockActions,
    });

    render(<App />);

    fireEvent.click(screen.getByText("Restart"));
    expect(mockActions.handleRestart).toHaveBeenCalled();
  });
});
