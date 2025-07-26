import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import AIEngine from './pages/AIEngine';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import SupplierProfile from './pages/SupplierProfile';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isAuthenticated={isAuthenticated} user={user} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/ai-engine" element={<AIEngine />} />
          <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/supplier/:id" element={<SupplierProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;