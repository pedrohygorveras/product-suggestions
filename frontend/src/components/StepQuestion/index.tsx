import React, { useState, useEffect } from "react";

interface StepQuestionProps {
  question: string;
  options: string[];
  type: string;
  onAnswer: (answers: string[]) => void;
}

export const StepQuestion: React.FC<StepQuestionProps> = ({
  question,
  options,
  type,
  onAnswer,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleChange = (option: string) => {
    if (type === "single") {
      setSelectedAnswers([option]);
    } else {
      setSelectedAnswers(prev =>
        prev.includes(option)
          ? prev.filter(item => item !== option)
          : [...prev, option],
      );
    }
  };

  useEffect(() => {
    onAnswer(selectedAnswers);
  }, [selectedAnswers]);

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">{question}</h2>
      {options.map(option => (
        <label key={option} className="mb-3 flex cursor-pointer items-center">
          <input
            type={type === "single" ? "radio" : "checkbox"}
            name={type === "single" ? "single-answer" : undefined}
            className={`mr-2 ${
              type === "single"
                ? "radio-primary radio"
                : "checkbox-primary checkbox"
            }`}
            checked={selectedAnswers.includes(option)}
            onChange={() => handleChange(option)}
          />
          <span className="text-lg">{option}</span>
        </label>
      ))}
    </>
  );
};
