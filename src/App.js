// import logo from './logo.svg';
import "./App.scss";
import { useState, useEffect } from "react";

import { ThemeContext, theme } from "./utils/context/theme-context";
import Banner from "./components/Banner";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Horizontal from "./components/Horizontal";
import Newsletter from "./components/Newsletter";

import banner from "./assets/banner.jpg";
import articleImg1 from "./assets/img_1.png";
import articleImg2 from "./assets/img_2.png";
import img1 from "./assets/img_4.png";
import img2 from "./assets/img_5.png";
import img3 from "./assets/img_6.png";
import img4 from "./assets/img_7.png";
// import articleImg2 from "../src/assets/img_2.jpg"

const App = () => {
	// const showArticle = true;
	const [showArticle, setShowArticle] = useState(true);
	const [changeTheme, setTheme] = useState("light");

	useEffect(() => {
		console.log(`initial value of showArticle is`, showArticle);
	}, [showArticle]);

	const greeting = () => {
		// alert("email submitted");
		// setShowArticle(!showArticle);
		setTheme(changeTheme == "light" ? "dark" : "light");
	};
	return (
		<ThemeContext.Provider value={theme[changeTheme]}>
			<div className="App">
				<Banner img={banner} />
				{showArticle && <Article1 img={articleImg1} />}
				{showArticle && <Article2 img={articleImg2} />}
				<Horizontal images={[img1, img2, img3, img4]} />
				<Newsletter greetingFn={greeting} />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
