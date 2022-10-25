import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Banner = (props) => {
	const [image, setImage] = useState("");
	useEffect(() => {
		axios
			.get(
			`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}`
			)
			.then((response) => {
				// setTimeout(() => {
				// 	setImage(response.data.urls.full);
				// }, 3000);
				setImage(response.data.urls.full);
			});
	}, []);
	useEffect(() => {}, [image]);
	return (
		<div id="banner">
			{image ? (
				<img src={image} alt="" className="image" />
			) : (
				<Skeleton height={30} />
			)}
		</div>
	);
};
export default Banner;
