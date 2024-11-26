import React from "react";

import { AppContainer } from "@/components/AppContainer";
import { ThemeSection } from "@/components/ThemeSection";
import { QuestionFlowContent } from "@/components/QuestionFlowContent";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import questionsData from "@/data/questions.json";
import { ThemeToggle } from "./components/ThemeToggle";

export const App: React.FC = () => {
  const { questions, currentStep, recommendations, isNextDisabled, actions } =
    useQuestionFlow(questionsData);

  return (
    <AppContainer>
      {currentStep < questions.length ? (
        <div className="min flex min-h-screen items-center justify-center">
          <div className="w-full py-6 md:w-auto">
            <ThemeSection />
            <QuestionFlowContent
              questions={questions}
              currentStep={currentStep}
              isNextDisabled={isNextDisabled}
              onAnswer={actions.handleAnswer}
              onNext={actions.handleNext}
              onPrevious={actions.handlePrevious}
            />
          </div>
        </div>
      ) : (
        <div className="mt-6 w-full">
          <div className="border-b border-base-200 pb-3 text-right">
            <ThemeToggle />
          </div>
          <ProductRecommendations
            recommendations={recommendations}
            onRestart={actions.handleRestart}
          />
        </div>
      )}
    </AppContainer>
  );
};
