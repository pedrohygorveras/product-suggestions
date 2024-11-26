import React from "react";

import { QuestionProps } from "@/types/question.types";

export const QuestionList: React.FC<{
  questions: QuestionProps[];
  currentStep: number;
}> = ({ questions, currentStep }) => (
  <div className="steps steps-horizontal w-full justify-between px-0 pb-6">
    {questions.map((question, index) => (
      <div
        key={question.id}
        className={`step ${index <= currentStep ? "step-primary" : ""}`}
      ></div>
    ))}
    <div
      className={`step ${currentStep === questions.length ? "step-primary" : ""}`}
    ></div>
  </div>
);
