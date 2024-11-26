import React from "react";

import { QuestionList } from "@/components/QuestionList";
import { StepQuestion } from "@/components/StepQuestion";
import { Button } from "@/components/Button";
import { MdArrowForward } from "react-icons/md";
import { QuestionOptionsProps } from "@/types/question.types";

interface QuestionFlowContentProps {
  questions: any[];
  currentStep: number;
  isNextDisabled: boolean;
  onAnswer: (answers: string[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

interface QuestionFlowContentProps {
  questions: any[];
  currentStep: number;
  isNextDisabled: boolean;
  onAnswer: (answers: string[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const QuestionFlowContent: React.FC<QuestionFlowContentProps> = ({
  questions,
  currentStep,
  isNextDisabled,
  onAnswer,
  onNext,
  onPrevious,
}) => (
  <div className="flex w-full flex-col gap-6 space-y-0 rounded-lg border border-base-300 bg-base-100 p-6 shadow-lg md:min-w-[32rem] md:max-w-lg">
    <QuestionList questions={questions} currentStep={currentStep} />
    <StepQuestion
      question={questions[currentStep].question}
      options={questions[currentStep].options.map(
        (option: QuestionOptionsProps) => {
          return option.text;
        },
      )}
      type={questions[currentStep].type}
      onAnswer={onAnswer}
    />
    <div className="flex flex-col gap-1">
      <Button onClick={onNext} disabled={isNextDisabled}>
        <div className="flex items-center justify-center">
          {currentStep === questions.length - 1 ? "Finalizar" : "Avançar"}
          <MdArrowForward className="ml-2 text-lg" />
        </div>
      </Button>
      {currentStep !== 0 && (
        <Button onClick={onPrevious} disabled={currentStep === 0}>
          Voltar
        </Button>
      )}
    </div>
  </div>
);
