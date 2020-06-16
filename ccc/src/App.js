import React from "react";
import "./App.css";
import Header from "../src/components/header.jsx";
import Footer from "../src/components/footer.jsx";
import Home from "../src/pages/home.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
