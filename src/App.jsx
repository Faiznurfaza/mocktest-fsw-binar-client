import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
