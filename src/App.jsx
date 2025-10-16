import CenturyList from "./components/CenturyList/CenturyList";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: '70px' }}>
        <CenturyList />
      </div>
      <Footer />
    </>
  );
}

export default App;
