import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import ApiPage from "./pages/Api";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
