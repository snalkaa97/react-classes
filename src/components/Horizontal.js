import React from "react";

const Horizontal = (props) => {
	// console.log(props.images);
	return (
		<div id="horizontal">
			{props.images.map((item, i) => {
				return (
					<div className="image-wrapper" key={i}>
						<img src={item} alt="" className="image" />
					</div>
				);
			})}
		</div>
	);
};

export default Horizontal;
