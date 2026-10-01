import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProsListPage from './pages/ProsListPage';
import ProProfilePage from './pages/ProProfilePage';
import ServicesPage from './pages/ServicesPage';
import GetQuotesPage from './pages/GetQuotesPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"            element={<HomePage />} />
            <Route path="/pros"        element={<ProsListPage />} />
            <Route path="/pros/:id"    element={<ProProfilePage />} />
            <Route path="/services"    element={<ServicesPage />} />
            <Route path="/get-quotes"  element={<GetQuotesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
