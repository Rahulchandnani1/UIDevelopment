
import './App.css';
import dp from "./dp.png";
import ic1 from "./ic1.png";
import ic2 from "./ic2.png";
import img1 from "./scr1.png";
import img2 from "./scr2.png";
import img3 from "./scr3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import sl1 from "./sl1.jpg";
import sl2 from "./sl2.jpeg";
import sl3 from "./sl3new.jpg";
import sl4 from "./sl4.jpg";
function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15%',
    autoplay: true,
    autoplaySpeed: 1600,
  };
  let text="Event: Oasis Bus tour , JLN Stadium , Delhi  Collection Live :";
  const images = [
    sl1,
    sl2,
    sl3,
    sl4,
  ];
  return (
    <div className="App">
      {/* Left div */}
     <div className='div1'>
      <img src={dp}/>
      <div className='textc'>
      <span className='p'>ASTR</span>
      <span className='p'>IX</span></div>
      <div className='textc1'>
      <span className='p'>EVE</span>
      <span className='p'>NTS</span>
     </div>
     {/* Carousel Logic */}
     <div className="carousel-container" style={{ width: '90%', margin: '0 auto',position:'absolute',top:"25%",marginLeft:"5%" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className='imgs' style={{ width: '70%', height: '70vh' }} />
          </div>
        ))}
      </Slider>
    </div>
     
     </div>
     {/* center div */}
     <div className='div2'>
     <span>Event: Oasis Bus tour, JLN Stadium, Delhi Collection:</span>
     </div>

     {/* Right div */}
     <div className='div3'>
      <div className='t1div'>
      <span className='t1'>Explore Your First</span>
      <br/>
      <span className='t1'>Event</span></div>
      <div className='eventdiv'>
        <span className='et1'>Event Name</span>
        <p className='et2'><img src={ic1}/>  Venue    <img src={ic2}/>  04/03/2024 @19:00</p>
        <span className='et3'>Lorem ipsum dolar sit amet consectetur.Lorem ipsum dolar sit amet consectetur.Lorem ipsum dolar sit amet consectetur.Lorem ipsum dolar sit amet consectetur</span>
        <p className='t1'>Artist Lineup</p>
      </div>
      <div className='imgdiv'>
        <img className='limg' src={img1}/>
        <img className="midimg" src={img2}/>
        <img className="rimg"src={img3}/>
      </div>
     </div>
    </div>
  );
}

export default App;
