import { useState } from "react";

import { getRecommendations } from "@/services/recommendation.service";

import { QuestionProps } from "@/types/question.types";
import { RecommendationProps } from "@/types/recommendation.types";

export const useQuestionFlow = (questionsData: QuestionProps[]) => {
  const questions = questionsData as QuestionProps[];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [recommendations, setRecommendations] = useState<RecommendationProps[]>(
    [],
  );

  const handleAnswer = (answersForStep: string[]) => {
    setAnswers(prev => ({ ...prev, [currentStep]: answersForStep }));
  };

  const handleNext = async () => {
    if (!answers[currentStep] || answers[currentStep].length === 0) return;

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      try {
        const recs = await getRecommendations(answers);
        setRecommendations(recs);
        setCurrentStep(prev => prev + 1);
      } catch {
        setRecommendations([]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations([]);
  };

  const isNextDisabled =
    !answers[currentStep] || answers[currentStep].length === 0;

  return {
    questions,
    currentStep,
    recommendations,
    isNextDisabled,
    actions: {
      handleAnswer,
      handleNext,
      handlePrevious,
      handleRestart,
    },
  };
};
