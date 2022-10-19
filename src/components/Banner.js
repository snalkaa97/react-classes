import { useEffect, useState } from "react";
import axios from "axios";
const Banner = (props) => {
	const [image, setImage] = useState("");
	useEffect(() => {
		axios
			.get(
				"https://api.unsplash.com/photos/random?client_id=fQm0v3q0FwbW8p5PH18jJ_SDx1aTNffpQRgfUfVneDU"
			)
			.then((response) => {
				console.log(response.data);
				setImage(response.data.urls.full);
			});
	}, []);
	return (
		<div id="banner">
			<img src={image} alt="" className="image" />
		</div>
	);
};
export default Banner;
