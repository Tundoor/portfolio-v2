import './intro-section.css'

export default function Intro() {
  return (
     <div className="intro">
            <div className="svg-upper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#DEDAF4" fillOpacity="1"
                        d="M0,96L30,117.3C60,139,120,181,180,208C240,235,300,245,360,224C420,203,480,149,540,106.7C600,64,660,32,720,37.3C780,43,840,85,900,128C960,171,1020,213,1080,240C1140,267,1200,277,1260,256C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div className="intro-info">
                <p>The future belongs to those who believe in the beauty of their dreams." -Eleanor
                    Roosevelt</p>
                <h1 className="intro-title">Thandolwethu Mbokazi</h1>
                <p>Web Developer | Front-End Developer | FullStack Developer</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="white" fillOpacity="1"
                    d="M0,96L30,117.3C60,139,120,181,180,208C240,235,300,245,360,224C420,203,480,149,540,106.7C600,64,660,32,720,37.3C780,43,840,85,900,128C960,171,1020,213,1080,240C1140,267,1200,277,1260,256C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                </path>
            </svg>
        </div>
  );
}