import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Footer from "./Components/FooterComponents/Footer";
import Header from "./Components/HeaderComponents/Header";
import HomePage from "./Components/HomePageComponents/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./Components/MyAccountComponents/MyProfile";

function App() {
  const { user, isAuthenticated } = useAuth0();

  console.log("user", user, isAuthenticated);
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/profile" element={<MyProfile></MyProfile>}></Route>
        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
