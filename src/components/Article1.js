import { useContext} from "react";
import { ThemeContext } from "../utils/context/theme-context";

const Article1 = (props) => {
	const theme = useContext(ThemeContext);

	if(props.state) {
		return (
			<div
				className="article article-1"
				style={{ backgroundColor: theme.background, color: theme.color }}
			>
				<div className="image-wrapper">
					<img src={props.img} alt="" className="image" />
				</div>
				<div className="content-wrapper">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						laborum temporibus, natus placeat omnis molestiae! Reiciendis
						voluptates est temporibus, aperiam, placeat iusto vero laboriosam eum
						eveniet aliquam odio tempora quis beatae ut sapiente aliquid unde
						error harum? Ipsum repudiandae amet suscipit tempore a ut dolorem quo
						perspiciatis beatae corrupti veniam, voluptatem corporis soluta atque
						maxime! Incidunt, delectus quas! Doloribus vel recusandae obcaecati
						excepturi, rerum neque ab similique molestias earum explicabo
						doloremque officiis aspernatur eius ea eveniet fugiat totam,
						perferendis assumenda, nulla consequatur? Quasi, commodi accusamus!
						Quidem doloribus at quo dolores. Necessitatibus natus quae voluptates
						voluptatibus itaque in illum ut impedit.
					</p>
				</div>
				{/* <div className='image-wrapper'>
		  <img src={articleImg1} alt="" className='image' />
		</div> */}
			</div>
		);
	}
	return <></>
};

export default Article1;
