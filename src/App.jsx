import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
// https://www.youtube.com/watch?v=0fYi8SGA20k&list=WL&index=24&t=218s
// Build and Deploy an Amazing 3D Web Developer Portfolio in React JS | Beginner Three.js 
// 2:30
function App() {
  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
