import './globals.css'
import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro-section';
import AboutMe from './components/about-me/about-me'
import Skills from './components/skills/skills'
import Project from './components/projects/project';
import Footer from './components/footer/footer'

export default function Home() {
  return (
   <>
 <Navbar />
 <Intro />
 <AboutMe />
 <Skills />
 <Project />
 <Footer />
   </>
  );
}
