import logo from './logo.svg';
import './App.css';
import Header from './Componentes Generales/Header';
import Footer from './Componentes Generales/Footer';
import Conocenos from './Conocenos/Conocenos';
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
