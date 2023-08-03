import ContentWrapper from './Contentwrapper/ContentWrapper';
import "../App.css";

const Home = () => {
  return (
    <>
      <div>
        <nav className='navbar'>
          <li><img src="./public/images/brand_logo.png" alt=""/></li>
          <li> <a href="#">Home</a></li>
          <li> <a href="#">Location</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Contact</a></li>
          <li> <button className='login'>login</button></li>
        </nav>
        <div className='mainPoster'>
          <div className='item item1'>
            <p className='mainTag'>
              YOUR FEET DESERVES THE<br/>BEST
            </p>
            <p className='below_mainTag'>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE 
              BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className='button_section'>
            <button>
              Shop Now
            </button>
            <button>
              Category
            </button>
            </div>
          </div>
          <div className='item  item2'>
            <img src="./public/images/shoe_image.png" alt="" className='shoe_img'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;