import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import SignInModal from './components/SignInModal';
function App() {
  


useEffect(() => {
  const disableRightClick = (e) => e.preventDefault();
  document.addEventListener("contextmenu", disableRightClick);

  return () => {
    document.removeEventListener("contextmenu", disableRightClick);
  };
}, []);

  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signin" element={<SignInModal />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
    
  
  );
}

export default App;
