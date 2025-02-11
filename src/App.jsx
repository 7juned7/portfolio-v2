

import './App.css'


import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ParticleAnimation from './Components/ParticleAnimation';
import Projects from './Components/Projects';

function App() {


  return (
    <div className='flex-colitems-center justify-center flex'>

      <div className='flex-col max-w-[1600px] items-center justify-center flex '>
        <ParticleAnimation />
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </div>
  )
}

export default App;
