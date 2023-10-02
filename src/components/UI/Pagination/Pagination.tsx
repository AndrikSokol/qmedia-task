import { FC, useState, useEffect } from "react";
import { LIMIT } from "../../../constants/pagination";
import style from "./Pagination.module.scss";

type PaginatonType = {
	total: number;
	value: number;
	onChange: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: FC<PaginatonType> = ({ total, value, onChange }) => {
	const [pages, setPages] = useState<number>(0);

	useEffect(() => {
		setPages(Math.ceil(total / LIMIT));
	}, [total]);

	return (
		<div className={style["pagination"]}>
			{Array.from({ length: pages }).map((_, i) => (
				<div
					onClick={() => onChange(i + 1)}
					key={i}
					className={`${style["pagination__item"]} ${
						i + 1 === value ? style["pagination__item--active"] : ""
					}`}>
					{i + 1}
				</div>
			))}
		</div>
	);
};

export default Pagination;
