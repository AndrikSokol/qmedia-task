import { useCallback, useEffect, useMemo, useState } from "react";
import style from "./Card.module.scss";
import { ICardInfo } from "../../types/card.interface";
import { CARD_INFO } from "../../constants/cardInfo";
import Button from "../UI/Button/Button";
import Progress from "../Progress/Progress";
import { IAnswered } from "../../types/answered.interface";
import RadioInputGroup from "../UI/RadioInputGroup/RadioInputGroup";
import { Link } from "react-router-dom";

const Card = () => {
	const card = useMemo(() => CARD_INFO, []);
	const [answered, setAnswered] = useState<IAnswered>({});
	const [currentQuestion, setCurrentQuestion] = useState<number>(1);
	const [currentCard, setCurrentCard] = useState<ICardInfo>({} as ICardInfo);
	useEffect(() => {
		setCurrentCard(CARD_INFO[currentQuestion - 1]);
	}, [currentQuestion]);

	const buttonHandlerIncrease = useCallback(
		(flag: boolean) => () => {
			flag
				? setCurrentQuestion((prev) => ++prev)
				: setCurrentQuestion((prev) => --prev);
		},
		[]
	);
	return (
		<section className={style["card"]}>
			<div className={style["card-wrapper"]}>
				<Progress
					cardLength={CARD_INFO.length}
					currentQuestion={currentQuestion}
				/>
				<div className={style["wrapper"]}>
					<h2 className={style["card__question"]}>{currentCard?.question}</h2>
				</div>
				<RadioInputGroup
					currentCard={currentCard}
					currentQuestion={currentQuestion}
					setAnswered={setAnswered}
					answered={answered}
				/>

				<div className={style["card__inner"]}>
					{currentQuestion >= 2 && (
						<Button type={"primary"} onClick={buttonHandlerIncrease(false)}>
							Назад
						</Button>
					)}

					{currentQuestion != card.length && (
						<Button onClick={buttonHandlerIncrease(true)}>Дальше</Button>
					)}
					{}
					{currentQuestion == card.length && (
						<Link to="/product">
							<Button>Результат</Button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default Card;
