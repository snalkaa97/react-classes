import { useContext } from "react";
import { ThemeContext } from "../utils/context/theme-context";
const Article2 = (props) => {
	const theme = useContext(ThemeContext);
	return (
		<div
			className="article article-2"
			style={{ backgroundColor: theme.background, color: theme.color }}
		>
			<div className="image-wrapper-mobile">
				<img src={props.img} alt="" className="image" />
			</div>
			<div className="content-wrapper">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit
					debitis cumque consectetur nam doloremque sunt fuga amet! Perspiciatis
					sit necessitatibus qui quas fuga reprehenderit dolorem excepturi, in
					maiores sunt sed quasi perferendis quaerat, eius recusandae placeat,
					aut deleniti! Dolorem sed maxime est. Nulla, delectus. Distinctio sint
					nam error voluptates quas aliquam nemo! Reiciendis, obcaecati eos
					nobis, asperiores aspernatur porro dolor numquam omnis quasi eius
					deleniti consequuntur recusandae magni tempora doloremque hic esse
					iusto eligendi eum deserunt nihil ipsa? Illo magnam tempore, quasi
					architecto sunt vero, officia labore ducimus deserunt, dolorum
					cupiditate dolorem? Quibusdam eveniet iure et, consequuntur commodi
					sequi.
				</p>
			</div>
			<div className="image-wrapper">
				<img src={props.img} alt="" className="image" />
			</div>
		</div>
	);
};

export default Article2;
