import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PageWithForm from './components/PageWithForm';
import PageWithoutForm from './components/PageWithoutForm';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/form" element={<PageWithForm />} />
          <Route path="/participants" element={<PageWithoutForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
