export interface IAnswered {
  [questionNumber: number]: {
    id: number;
    answerId: number;
    text: string;
  };
}
