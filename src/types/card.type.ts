export interface ICardInfo {
  id: number;
  question: string;
  answers: { id: number; text: string }[];
}
