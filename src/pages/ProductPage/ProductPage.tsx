import { useEffect, useState } from "react";
import response from "../../db/products.json";
import { IProduct } from "../../types/product.type";
import style from "./ProductPage.module.scss";
import Product from "../../components/Product/Product";
import Pagination from "../../components/UI/Pagination/Pagination";
import { LIMIT } from "../../constants/pagination";
const ProductPage = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [activePage, setActivePage] = useState<number>(1);
	useEffect(() => {
		const fetchData = new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve(response as any);
			}, 1000);
		});

		fetchData.then((response) => {
			setProducts(response as any);
		});
	}, []);

	const startIndex = (activePage - 1) * LIMIT;
	const displayedProducts = products.slice(startIndex, startIndex + LIMIT);

	return (
		<div>
			<h1>Результат</h1>
			<h2>Мы подобрали для вас наиболее подходящие средства</h2>
			<div className={style["container"]}>
				{displayedProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
			<Pagination
				value={activePage}
				onChange={setActivePage}
				total={products.length}
			/>
		</div>
	);
};

export default ProductPage;
