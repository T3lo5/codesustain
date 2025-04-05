import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TutorialsPage from "./pages/TutorialsPage";
import CalculatorPage from "./pages/CalculatorPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
