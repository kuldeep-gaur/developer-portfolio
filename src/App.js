import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact }from './components/Contact';
import { Footer } from './components/Footer';
import { GithubProjects } from './components/GithubProjects';
import { Certifications } from './components/Certifications';
import { ScrollToTopButton }  from './components/ScrollTopToBottom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Certifications />
      <GithubProjects />
      <Contact />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
