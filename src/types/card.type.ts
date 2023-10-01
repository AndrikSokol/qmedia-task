export interface cardInfo {
  id: number;
  question: string;
  answers: { id: number; text: string }[];
}
