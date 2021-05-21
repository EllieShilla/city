import logo from './logo.svg';
import './App.css';
import img1 from './image/153932427114128827.jpg';
import img2 from './image/botanicheskij_sad.jpg';
import img3 from './image/lodochnaya-stanciya.jpg';


function App() {
  return (
    <div className="App">
     <h1>Кривой Рог, Украина</h1>
     <p>Год основания: 1775</p>
     <img src={img1} alt={"img1"}/>
     <img src={img2} alt={"img2"}/>
     <img src={img3} alt={"img3"}/>
    </div>
  );
}

export default App;
