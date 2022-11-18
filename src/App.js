import './App.css';
import NavBar from './homePage/NavBar';
import HomePage from './homePage/HomePage'
import About from './aboutPage/About';
import Product from './productPage/Product';
import Fashion from './fashionPage/Fashion';
import News from './newsPage/News';
import Contact from './contactPage/Contact';

function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <About/>
      <Product/>
      <Fashion/>
      <News/>
      <Contact/>
    </div>
  );
}

export default App;
