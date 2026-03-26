import './about-me.css'

export default function AboutMe() {
    return(
        <>
           <div class="About-Me" id="About-Me">
            <div class="about-me-image-div">
                <img className="about-me-image" src="../public/images/Thando'sPorfolio.png" />
            </div>
            <div class="About-me-article">
                <h1 class="About-me-header">About Me</h1>
                <p class="About-me-paragraph"> My journey with programming began in 2023. I was introduced to coding at
                    a careers expo where I got a taste of developing using the
                    p5.js javascript library. After we were given a challenge to try and solve I fell in love with the
                    feeling
                    of overcoming challenges and figuring out bugs. From then on I knew exactly what I wanted to do.
                </p>
                <p class="About-me-paragraph">Getting into the land of software development for me was no easy feat.
                    From rejection after
                    rejection and beginning to feel like maybe it wasn't meant to be. I was introduced to CodeSpace.
                    I did a software development certification with them and now I can proudly say that I am a competent
                    junior front-end developer.
                </p>
            </div>
        </div>
        </>
    )
}