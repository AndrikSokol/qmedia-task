import React, { FC, memo } from "react";
import style from "./RadioInputGroup.module.scss";
import { ICardInfo } from "../../../types/card.type";
import { IAnswered } from "../../../types/answered.type";

type RadioInputGroupType = {
	currentQuestion: number;
	currentCard: ICardInfo;
	setAnswered: React.Dispatch<React.SetStateAction<IAnswered>>;
	answered: IAnswered;
};

const RadioInputGroup: FC<RadioInputGroupType> = ({
	currentQuestion,
	currentCard,
	setAnswered,
	answered,
}) => {
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id } = event.target;
		setAnswered((prev) => ({
			...prev,
			[currentQuestion]: {
				id: currentQuestion,
				answerId: Number(id),
				text: currentCard.answers[Number(id) - 1].text,
			},
		}));
	};

	return (
		<div>
			{currentCard?.answers?.map((answer) => (
				<div className={style["radio__inner"]} key={answer.id}>
					<label htmlFor={answer.id.toString()} style={{ display: "none" }}>
						{answer.text}
					</label>
					<input
						className={style["radio__inner-input"]}
						type="radio"
						name="radio-group"
						id={answer.id.toString()}
						onChange={(event) => handleCheckboxChange(event)}
						checked={
							!!answered[currentQuestion] &&
							answered[currentQuestion].answerId === answer.id
						}
					/>
					<p className={style["radio__inner-answer"]}>{answer.text}</p>
				</div>
			))}
		</div>
	);
};
export default memo(RadioInputGroup);
