import { FC, useState } from "react";
import { IProduct } from "../../types/product.type";
import style from "./Product.module.scss";

type ProductType = {
	product: IProduct;
};
const Product: FC<ProductType> = ({ product }) => {
	const [isFavorited, setIsFavorited] = useState<boolean>(false);
	return (
		<div className={style["product"]}>
			<div className={style["product-wrapper"]}>
				<svg
					onClick={() => setIsFavorited((prev) => !prev)}
					className={style["product__svg"]}
					width="32"
					height="28"
					viewBox="0 0 32 28"
					fill={isFavorited ? "#cf3f3f" : "none"}
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M27.7867 4.14666C27.1057 3.46533 26.2971 2.92485 25.4071 2.5561C24.5172 2.18735 23.5633 1.99756 22.6 1.99756C21.6367 1.99756 20.6828 2.18735 19.7929 2.5561C18.9029 2.92485 18.0943 3.46533 17.4133 4.14666L16 5.55999L14.5867 4.14666C13.2111 2.77107 11.3454 1.99827 9.4 1.99827C7.45462 1.99827 5.58892 2.77107 4.21333 4.14666C2.83774 5.52225 2.06494 7.38795 2.06494 9.33332C2.06494 11.2787 2.83774 13.1444 4.21333 14.52L5.62666 15.9333L16 26.3067L26.3733 15.9333L27.7867 14.52C28.468 13.839 29.0085 13.0304 29.3772 12.1405C29.746 11.2505 29.9358 10.2966 29.9358 9.33332C29.9358 8.37001 29.746 7.41613 29.3772 6.52618C29.0085 5.63624 28.468 4.82767 27.7867 4.14666Z"
						stroke={isFavorited ? "#cf3f3f" : "#D2D2D2"}
						strokeWidth="2.7"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<img
					className={style["product__img"]}
					src={product.image}
					alt="Картинка продукта"
				/>
			</div>

			<h3 className={style["product__title"]}>{product.title}</h3>
			<div className={style["product__inner"]}>
				<span className={style["product__inner-old-price"]}>
					{product.oldPrice}
				</span>
				<h4 className={style["product__inner-new-price"]}>
					{product.price} руб.
				</h4>
			</div>
		</div>
	);
};
export default Product;
