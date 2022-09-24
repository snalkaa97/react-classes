// import logo from './logo.svg';
import './App.scss';
import banner from "./assets/banner.jpg"
import articleImg1 from "./assets/img_1.png"
import articleImg2 from "./assets/img_2.png"
import img1 from "./assets/img_4.png"
import img2 from "./assets/img_5.png"
import img3 from "./assets/img_6.png"
import img4 from "./assets/img_7.png"
// import articleImg2 from "../src/assets/img_2.jpg"

const App = () => {
  const showArticle = true;
  const greeting = () => {
    alert('email submitted');
  }
  return (
    <div className="App">
        <div id="banner">
          <img src={banner} alt="" className='image' />
        </div>
        {showArticle ? (
        <div className="article article-1">
          <div className='image-wrapper'>
            <img src={articleImg1} alt="" className='image' />
          </div>
          <div className='content-wrapper'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum temporibus, natus placeat omnis molestiae! Reiciendis voluptates est temporibus, aperiam, placeat iusto vero laboriosam eum eveniet aliquam odio tempora quis beatae ut sapiente aliquid unde error harum? Ipsum repudiandae amet suscipit tempore a ut dolorem quo perspiciatis beatae corrupti veniam, voluptatem corporis soluta atque maxime! Incidunt, delectus quas! Doloribus vel recusandae obcaecati excepturi, rerum neque ab similique molestias earum explicabo doloremque officiis aspernatur eius ea eveniet fugiat totam, perferendis assumenda, nulla consequatur? Quasi, commodi accusamus! Quidem doloribus at quo dolores. Necessitatibus natus quae voluptates voluptatibus itaque in illum ut impedit.
            </p>
          </div>
          {/* <div className='image-wrapper'>
            <img src={articleImg1} alt="" className='image' />
          </div> */}
        </div> 
        ) : (
          <></>
        )}
        {showArticle ? (
        <div className="article article-2">
          <div className="image-wrapper-mobile">
            <img src={articleImg2} alt="" className='image' />
          </div>
          <div className='content-wrapper'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit debitis cumque consectetur nam doloremque sunt fuga amet! Perspiciatis sit necessitatibus qui quas fuga reprehenderit dolorem excepturi, in maiores sunt sed quasi perferendis quaerat, eius recusandae placeat, aut deleniti! Dolorem sed maxime est. Nulla, delectus. Distinctio sint nam error voluptates quas aliquam nemo! Reiciendis, obcaecati eos nobis, asperiores aspernatur porro dolor numquam omnis quasi eius deleniti consequuntur recusandae magni tempora doloremque hic esse iusto eligendi eum deserunt nihil ipsa? Illo magnam tempore, quasi architecto sunt vero, officia labore ducimus deserunt, dolorum cupiditate dolorem? Quibusdam eveniet iure et, consequuntur commodi sequi.
            </p>
          </div>
          <div className="image-wrapper">
            <img src={articleImg2} alt="" className='image' />
          </div>
        </div>
        ) : (
          <></>
        )}
        <div id="horizontal">
          <div className="image-wrapper">
            <img src={img1} alt="" className='image' />
          </div>
          <div className="image-wrapper">
            <img src={img2} alt="" className='image' />
          </div>
          <div className="image-wrapper">
            <img src={img3} alt="" className='image' />
          </div>
          <div className="image-wrapper">
            <img src={img4} alt="" className='image' />
          </div>
        </div>
        <div id="newsletter">
          <div className='title-wrapper'>
            <h3>NEWSLETTER</h3>
          </div>
          <div className='forms-wrapper'>
            <input type="text" placeholder='Email' />
            <button onClick={greeting}>SUBMIT</button>
          </div>
        </div>
    </div>
  );
}

export default App;
