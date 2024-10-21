import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Footer from "./Components/FooterComponents/Footer";
import Header from "./Components/HeaderComponents/Header";
import HomePage from "./Components/HomePageComponents/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./Components/MyAccountComponents/MyProfile";
import styled from "styled-components";
import MyAddress from "./Components/MyAccountComponents/MyAddress";

const RouteWrapper = styled.div`
  margin-top: 12rem;
`;

function App() {
  const { user, isAuthenticated } = useAuth0();

  console.log("user", user, isAuthenticated);
  return (
    <div className="App">
      <Header></Header>
      <RouteWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/profile" element={<MyProfile></MyProfile>}></Route>
            <Route path="/address" element={<MyAddress></MyAddress>}></Route>
          </Routes>
        </Router>
      </RouteWrapper>

      <Footer></Footer>
    </div>
  );
}

export default App;
