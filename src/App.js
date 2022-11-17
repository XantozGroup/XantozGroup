import './App.css';
import NavBar from './homePage/NavBar';
import HomePage from './homePage/HomePage'
import About from './aboutPage/About';
import Product from './productPage/Product';
import Fashion from './fashionPage/Fashion';

function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <About/>
      <Product/>
      <Fashion/>
    </div>
  );
}

export default App;
