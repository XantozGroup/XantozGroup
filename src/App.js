import './App.css';
import NavBar from './homePage/NavBar';
import HomePage from './homePage/HomePage'
import About from './aboutPage/About';
import Product from './productPage/Product';
import Fashion from './fashionPage/Fashion';
import News from './newsPage/News';

function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <About/>
      <Product/>
      <Fashion/>
      <News/>
    </div>
  );
}

export default App;
