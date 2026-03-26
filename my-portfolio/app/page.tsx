import './globals.css'
import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro-section';
import AboutMe from './components/about-me/about-me'

export default function Home() {
  return (
   <>
 <Navbar />
 <Intro />
 <AboutMe />
   </>
  );
}
