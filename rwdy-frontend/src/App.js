import "./App.css";
import Footer from "./Components/FooterComponents/Footer";
import Header from "./Components/HeaderComponents/Header";
import HomePage from "./Components/HomePageComponents/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
