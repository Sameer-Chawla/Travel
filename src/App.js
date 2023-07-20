import React from "react"
import './app.css';
import './components/Navbar/navbar.scss';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
       
        <div>
          <Navbar/>
          <Home />
          <Main />
          <Footer />
          
        </div>

    )
}

export default App;
