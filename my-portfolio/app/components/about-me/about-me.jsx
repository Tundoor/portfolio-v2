import './about-me.css'

export default function AboutMe() {
    return(
        <>
           <div class="About-Me" id="About-Me">
            <div class="about-me-image-div">
                <img className="about-me-image" src="/images/Thando'sPorfolio.png" alt="Thando's Portfolio Photo" />
            </div>
            <div class="About-me-article">
                <h1 class="About-me-header">About Me</h1>
                <p class="About-me-paragraph"> 
                    I began my journey in programming in 2023, when I was introduced to coding at a careers expo. There, I had my first experience building with the p5.js JavaScript library. After being given a challenge to solve, I discovered how much I enjoyed the process of debugging and overcoming problems—and from that moment, I knew this was the path I wanted to pursue.
                </p>
                <p class="About-me-paragraph">
                    Breaking into software development wasn’t easy. I faced multiple rejections, which at times made me question whether it was truly meant for me.
                </p>
                 <p class="About-me-paragraph"> 
                    I later secured my first internship at Shaper, where I was introduced to full-stack development. This experience allowed me to understand how different technologies connect and how complete applications are built from end to end.
                 </p>
                <p class="About-me-paragraph">
                    Throughout my journey, I’ve had to navigate challenges like imposter syndrome and uncertainty about where I fit in the industry. One piece of advice had a lasting impact on me: to give myself grace. I was reminded that growth takes time, and that everyone starts somewhere and that once upon a time we all depended on someone for our very exisence. That perspective has helped me approach both learning and challenges with patience and resilience.
                </p>
                 <p class="About-me-paragraph">

Today, I continue to grow as a developer, driven by curiosity, persistence, and a genuine passion for solving problems through code.
                 </p>
            </div>
        </div>
        </>
    )
}