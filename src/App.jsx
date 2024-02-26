import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CenturyList from "./components/CenturyList/CenturyList";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <CenturyList />
      </div>
      <Footer />
    </>
  );
}

export default App;
