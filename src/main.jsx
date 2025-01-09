import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/index.css';

import LandingPage from './components/LandingPage.jsx';
import SearchPage from "./components/SearchPage.jsx";
import BookDetails from './components/BookDetails.jsx';
import CheckOutPage from './components/CheckOutPage.jsx';
import PaidPage from './components/PaidPage.jsx';
import WhoWeArePage from './components/WhoWeArePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/paid" element={<PaidPage />} />
          <Route path="/WhoWeArePage" element={<WhoWeArePage />} />
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>
);
