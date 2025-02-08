import Header from './components/Header';
import './App.css';
import HeroMain from './components/HeroMain';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Hyperspeed from './components/Hyperspeed';
import Squares from './components/Squares';
import ClickSpark from './components/ClickSpark';
// import Ballpit from './components/Ballpit';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
      <Header></Header>
      
      <Hyperspeed></Hyperspeed>
      
     
      
      <HeroMain></HeroMain>
      <About></About>
      {/* <Squares></Squares> */}
      <Projects/>
      <Resume></Resume>
      <Contact></Contact>
      {/* <Footer> */}
      </div>
  );
}

export default App;
