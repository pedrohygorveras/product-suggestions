import questions from "@/data/questions.json";

interface Option {
  text: string;
  tags: string[];
}

interface Question {
  id: number;
  question: string;
  type: "single" | "multiple";
  options: Option[];
}

interface Product {
  id: number;
  thumbnail: string;
  link: string;
  category_title: string;
  category_url: string;
  title: string;
}

interface RecommendationResponse extends Product {}

interface AnswerToTagMap {
  [answer: string]: string[];
}

const buildAnswerToTagMap = (questions: Question[]): AnswerToTagMap => {
  return questions.reduce<AnswerToTagMap>((map, question) => {
    question.options.forEach(option => {
      map[option.text] = option.tags;
    });
    return map;
  }, {});
};

const getAnswerToTagMap = (): AnswerToTagMap => {
  return buildAnswerToTagMap(questions as Question[]);
};

const mapAnswersToTags = (answers: Record<number, string[]>): string[] => {
  const answerToTagMap = getAnswerToTagMap();
  return Object.values(answers)
    .flat()
    .reduce<string[]>((tags, answer) => {
      const mappedTags = answerToTagMap[answer] || [];
      return [...tags, ...mappedTags];
    }, []);
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://api-rdstation.pedrohygorveras.ip-ddns.com/api/products",
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados.");
  }

  return response.json();
};

const filterProductsByTags = (
  products: Product[],
  tags: string[],
): RecommendationResponse[] => {
  return products.filter(product => tags.includes(product.category_title));
};

const getRecommendations = async (
  answers: Record<number, string[]>,
): Promise<RecommendationResponse[]> => {
  const products = await fetchProducts();
  const tags = mapAnswersToTags(answers);
  return filterProductsByTags(products, tags);
};

export { getRecommendations };
