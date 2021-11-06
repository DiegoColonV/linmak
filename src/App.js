import logo from './logo.svg';
import './App.css';
import Header from './home_page/Header';
import Footer from './home_page/Footer';
import Conocenos from './home_page/Conocenos';
import HomePage from './home_page/home_page';

function App() {
  return (
    <div>
      {/* ======= Header ======= */}
      <Header />
      <HomePage/>
      {/* ======= Footer ======= */}
      <Footer />
    </div>
  );
}

export default App;
