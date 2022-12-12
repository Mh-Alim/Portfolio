
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FrontPage from './components/FrontPage/FrontPage';
import FrontPageContent from './components/FrontPageContent/FrontPageContent';
import Navbar from './components/Navbar/Navbar';
import OtherProjects from './components/OtherProjects/OtherProjects';
import Projects from './components/Projects/Projects';
import RightBar from './components/RightSideBar/RightBar';
import SocialHandle from './components/SideBarSocialHandle/SocialHandle';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <SocialHandle />
      <RightBar />
      <FrontPageContent />
      <About />
      <Skills />
      <Projects />
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
