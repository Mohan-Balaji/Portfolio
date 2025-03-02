import Header from './components/Navbar/Header';
import './App.css';
// import Hero from './components/Heropage/Hero';
// import HeroMain from './components/old/HeroMain';
// import About from './components/old/About';
// import Projects from './components/old/Projects';
// import Contact from './components/old/Contact';
// import Resume from './components/old/Resume';
// import Hyperspeed from './components/old/Hyperspeed';
// import Squares from './components/Squares';
// import ClickSpark from './components/ClickSpark';
// import Ballpit from './components/Ballpit';
// import mohan from '../src/components/Landingpage/mohan'
import Homepage from './components/Landingpage/mohan'



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero/> */}
      <Homepage/>
  

    </div>
  );
}

export default App;
