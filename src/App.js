import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordian></Accordian>
      <RandomColor></RandomColor>
      <StarRating noOfStars={10}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}></ImageSlider>
    </div>
  );
}

export default App;
