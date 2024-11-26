export interface QuestionOptionsProps {
  text: string;
  tags: string[];
}

export interface QuestionProps {
  id: number;
  question: string;
  type: string;
  options: QuestionOptionsProps[];
}
