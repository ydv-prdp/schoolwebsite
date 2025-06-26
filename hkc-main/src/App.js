import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './App.css';
import About from "./components/About";
import About_About from "./components/About_About";
import About_Campus from "./components/About_Campus";
import About_Princiapl from "./components/About_Princiapl";
import About_Vision_Misson from "./components/About_Vision_Misson";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Learning from "./components/Learning";
import PhotoGallery from "./components/PhotoGallery";
import { GlobalStyle } from "./GlobalStyle";
import GoToTop from "./components/GoToTop";
import Downloads from "./components/Downloads";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/learning" element={<Learning/>} />
        <Route path="/admission" element={<Admission/>} />
        <Route path="/photogallery" element={<PhotoGallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about_us" element={<About_About/>} />
        <Route path="/about_campus" element={<About_Campus/>} />
        <Route path="/about_vision" element={<About_Vision_Misson/>} />
        <Route path="/about_principal" element={<About_Princiapl/>} />
        <Route path="/downloads" element={<Downloads/>} />
      </Routes>
      <GoToTop/>
      <Footer></Footer>
    </Router>
    </ThemeProvider>
  );
}

export default App;
