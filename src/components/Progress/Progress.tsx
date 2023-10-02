import { FC, memo } from "react";
import style from "./Progress.module.scss";

type ProgressType = {
	cardLength: number;
	currentQuestion: number;
};

const Progress: FC<ProgressType> = ({ cardLength, currentQuestion }) => {
	return (
		<div className={style["progress"]}>
			<div className={style["progress-container"]}>
				{Array.from({ length: cardLength }).map((_, i) => (
					<div
						key={i}
						className={`${style["progress__circle"]} ${
							i + 1 === currentQuestion ? style["progress__circle--active"] : ""
						}`}></div>
				))}
			</div>
			<p className={style["progress__title"]}>
				Вопрос {currentQuestion} из {cardLength}
			</p>
		</div>
	);
};

export default memo(Progress);
