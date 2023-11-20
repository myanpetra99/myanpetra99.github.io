import "./App.css";
import About from "./pages/about";
import Hero from "./pages/hero";
import Project from "./pages/project";
import AOS from 'aos';
import 'aos/dist/aos.css';


import {useEffect} from "react";
import Achievements from "./pages/achievement";
import { Working } from "./pages/working";
import { Contact } from "./pages/contact";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
    <Navbar/>
  <Hero/>
  <About/>
  <Project/>
  <Achievements/>
  <Working/>
  <Contact/>
    </>
  );
}

export default App;
