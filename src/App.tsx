import { useEffect } from 'react';
import './App.css'
import Furniture from './components/Furniture/Furniture'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import About from './components/About/About';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <Furniture/>
      <Features/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
