import './project.css'

export default function Project() {

    let projects = [
       {
        title: 'StudyEct',
        desc: 'Application built for the KPN pitch challenge. That allows students to connect with resources, study and find communication channels to assist in the studying process',
        link: 'https://github.com/Tundoor/StudyEct',
        techstack: [ 'HTML', 'CSS', 'React']
       },
       {
        title: 'Focus Flow',
        desc: 'Group project I was apart of that let a user manage and create multiple lists of various tasks.',
        link: 'https://github.com/The-DigitalAcademy/FocusFlow',
        techstack: ['HTML', 'CSS', 'Angular']
       },
       {
        title: 'Starbucks Homepage Duplication',
        desc: 'A clone of the starbucks homepage that I built to help me better understand jQuery and get more comfortable with UX and UI design',
        link: 'https://github.com/Tundoor/Starbucks-Homepage-Duplicate',
        techstack: ['HTML', 'CSS', 'jQuery']
       },
       {
        title: 'Chorelist',
        desc: 'A simple to do list application to help people keep up with their chores',
        link: 'https://github.com/Tundoor/Chorelist',
        techstack: ['HTML', 'CSS', 'JavaScript']
       },
       {
        title: 'Moodies',
        desc: 'Current project that I am actively working on. It is a virtual diary that can be used to track moods.',
        link: 'https://github.com/Tundoor/Moodies',
        techstack: ['HTML', 'CSS', 'Angular', 'Springboot']
       }
    ]

    return(
        <>
        <div className='project-section' id='Projects'>
        <div className='project-header'>
            <h1>Projects</h1>
            <p>Overview of project I have worked on, or been a part of.</p>
        </div>
        {projects.map((project) => {
                return(
                    <>
                    <div className='project'>
                        <div className='project-info'>
                            <a href={project.link} target='_blank'>
                            <h1>{project.title}</h1>
                            <p>{project.desc}</p>
                            </a>
                        </div>
                        <div className='project-stack'>
                           {project.techstack.map(
                             (stack) => {
                                return(
                                    <div className='stack-div'>
                                        <h1>{stack}</h1>
                                    </div>
                                )
                             }
                           )}
                        </div>
                    </div>
                    </>
                )
            }
        )}
        </div>
        </>
    )
}