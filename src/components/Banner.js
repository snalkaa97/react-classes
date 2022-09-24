import React from "react";

const Banner = (props) => {
	return (
		<div id="banner">
			<img src={props.img} alt="" className="image" />
		</div>
	);
};
export default Banner;
