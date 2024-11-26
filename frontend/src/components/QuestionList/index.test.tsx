import { QuestionProps, QuestionOptionsProps } from "@/types/question.types";

describe("QuestionOptionsProps and QuestionProps Types", () => {
  it("validates a correct QuestionOptionsProps object", () => {
    const validOption: QuestionOptionsProps = {
      text: "Option 1",
      tags: ["tag1", "tag2"],
    };

    expect(validOption.text).toBe("Option 1");
    expect(validOption.tags).toEqual(["tag1", "tag2"]);
  });

  it("validates an empty tags array for QuestionOptionsProps", () => {
    const validOption: QuestionOptionsProps = {
      text: "Option 1",
      tags: [],
    };

    expect(validOption.text).toBe("Option 1");
    expect(validOption.tags).toEqual([]);
  });

  it("validates a correct QuestionProps object with multiple options", () => {
    const validQuestion: QuestionProps = {
      id: 1,
      question: "What is your favorite color?",
      type: "single-choice",
      options: [
        { text: "Red", tags: ["color"] },
        { text: "Blue", tags: ["color"] },
      ],
    };

    expect(validQuestion.id).toBe(1);
    expect(validQuestion.question).toBe("What is your favorite color?");
    expect(validQuestion.type).toBe("single-choice");
    expect(validQuestion.options).toHaveLength(2);
    expect(validQuestion.options[0].text).toBe("Red");
    expect(validQuestion.options[0].tags).toEqual(["color"]);
  });

  it("validates a QuestionProps object with no options", () => {
    const validQuestion: QuestionProps = {
      id: 2,
      question: "What is your favorite food?",
      type: "single-choice",
      options: [],
    };

    expect(validQuestion.id).toBe(2);
    expect(validQuestion.options).toEqual([]);
  });
});
