import { cardInfo } from "../types/card.type";

export const CARD_INFO: cardInfo[] = [
  {
    id: 1,
    question: "Сколько вам лет?",
    answers: [
      { id: 1, text: "Нужны средства для ребёнка младше 10 лет" },
      { id: 2, text: "Мне меньше 25 лет" },
      { id: 3, text: "От 25 до 35 лет" },
      { id: 4, text: "От 35 до 45 лет" },
      { id: 5, text: "Мне больше 45 лет" },
    ],
  },
  {
    id: 2,
    question: "Какой у вас тип кожи?",
    answers: [
      { id: 1, text: "Сухая" },
      { id: 2, text: "Нормальная" },
      { id: 3, text: "Комбинированная" },
      { id: 4, text: "Жирная" },
    ],
  },
  {
    id: 3,
    question: "Беспокоят ли воспления на лице?",
    answers: [
      { id: 1, text: "Да" },
      { id: 2, text: "Нет" },
      { id: 3, text: "Иногда" },
    ],
  },
];
