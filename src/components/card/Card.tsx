import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import style from "./Card.module.scss";
import { cardInfo } from "../../types/card.type";
import { CARD_INFO } from "../../constants/cardInfo";
import Button from "../UI/button/Button";

const Card = () => {
  const card = useMemo(() => CARD_INFO, []);
  const [answered, setAnswered] = useState<answeredType>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentCard, setCurrentCard] = useState<cardInfo>(CARD_INFO[0]);

  useEffect(() => {
    setCurrentCard(CARD_INFO[currentQuestion - 1]);
  }, [currentQuestion]);

  // const handleCheckboxChange = (event: any) => {
  //   setAnswered((prev)=>{[{id:currentQuestion,currentCard.answers[currentQuestion].text, ...prev}]})
  // };

  type answeredType = {
    id: number;
    answerId: number;
    text: string;
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setAnswered((prev) => ({
      ...prev,
      [currentQuestion]: {
        id: currentQuestion,
        answerId: id,
        text: currentCard.answers[Number(id) - 1].text,
      },
    }));
  };
  console.log(answered);
  const handleResultButton = useCallback(() => {
    console.log("User's Answers:", answered);
  }, []);

  return (
    <section className={style["card"]}>
      <div className={style["card-wrapper"]}>
        <div className={style["progress"]}>
          <div className={style["progress-container"]}>
            {CARD_INFO.map((card, index) => (
              <div
                key={index}
                className={`${style["progress-item"]} ${
                  index + 1 === currentQuestion ? style["active"] : ""
                }`}
              ></div>
            ))}
          </div>
          <p className={style["progress-title"]}>
            Вопрос {currentQuestion} из {CARD_INFO.length}
          </p>
        </div>
        <div className={style["wrapper"]}>
          <h2 className={style["card__question"]}>{currentCard?.question}</h2>
        </div>
        {currentCard?.answers?.map((answer) => (
          <div className={style["card__inner"]} key={answer.id}>
            <label htmlFor={answer.id.toString()} style={{ display: "none" }}>
              {answer.text}
            </label>
            <input
              className={style["card__inner-input"]}
              type="radio"
              name="radio-group"
              id={answer.id.toString()}
              onChange={(event) => handleCheckboxChange(event)}
              checked={
                answer.id == answered.answerId && currentQuestion == answered.id
                  ? true
                  : false
              }
            />
            <p className={style["card__inner-answer"]}>{answer.text}</p>
          </div>
        ))}
        <div className={style["card__inner"]}>
          {currentQuestion >= 2 && (
            <Button
              type={"primary"}
              onClick={() => setCurrentQuestion((prev) => --prev)}
            >
              Назад
            </Button>
          )}
          {currentQuestion != card.length && (
            <Button onClick={() => setCurrentQuestion((prev) => ++prev)}>
              Дальше
            </Button>
          )}

          {currentQuestion == card.length && (
            <Button onClick={handleResultButton}>Результат</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
