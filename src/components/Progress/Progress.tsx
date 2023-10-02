import { FC, memo } from "react";
import style from "./Progress.module.scss";
import { ICardInfo } from "../../types/card.type";

type ProgressType = {
  CARD_INFO: ICardInfo[];
  currentQuestion: number;
};

const Progress: FC<ProgressType> = ({ CARD_INFO, currentQuestion }) => {
  return (
    <div className={style["progress"]}>
      <div className={style["progress-container"]}>
        {CARD_INFO.map((card, index) => (
          <div
            key={index}
            className={`${style["progress__circle"]} ${
              index + 1 === currentQuestion
                ? style["progress__circle--active"]
                : ""
            }`}
          ></div>
        ))}
      </div>
      <p className={style["progress__title"]}>
        Вопрос {currentQuestion} из {CARD_INFO.length}
      </p>
    </div>
  );
};

export default memo(Progress);
