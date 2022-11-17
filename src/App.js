import './App.css';
import NavBar from './homePage/NavBar';
import HomePage from './homePage/HomePage'
import About from './aboutPage/About';
import Product from './productPage/Product';

function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <About/>
      <Product/>
    </div>
  );
}

export default App;
