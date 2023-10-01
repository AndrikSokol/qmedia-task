import React, { FC, useEffect, useState } from "react";
import style from "./Card.module.scss";
import { cardInfo } from "../../types/card.type";
import { CARD_INFO } from "../../constants/cardInfo";
import Button from "../UI/button/Button";

const Card = () => {
  const [card, setCard] = useState(CARD_INFO);
  const [answered, setAnswered] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentCard, setCurrentCard] = useState<cardInfo>(CARD_INFO[0]);
  useEffect(() => {
    setCurrentCard(CARD_INFO[currentQuestion - 1]);
  }, [currentQuestion]);

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked) {
      const answer = event;
      console.log(answer);
    }
  };

  const handleResultButton = () => {
    console.log("User's Answers:", answered);
  };

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
              type="checkbox"
              id={answer.id.toString()}
              onChange={(event) => handleCheckboxChange(event)}
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
