// src/App.tsx
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;
