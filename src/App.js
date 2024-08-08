import Header from './components/Header';
import './App.css';
import HeroMain from './components/HeroMain';
import About from './components/About';
import Projects from './components/Projects';
// import Background from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <HeroMain></HeroMain>
      <About></About>
      <Projects/>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
}

export default App;
