import './navbar.css'

export default function Navbar() {
  return (
    <div> 
        <nav className="nav-bar">
          <div className='name-div'>
            <h1 className='name'>Thandolwethu</h1>
          </div>
          <div className='nav-links'>
            <a href="#About-Me" className="nav-link">About</a>
            <a href="#Projects" className="nav-link">Work</a>
            <a href="#Contact" className="nav-link">Contact</a>
            <a target="_blank"
                href="https://docs.google.com/document/d/1HE5MsPX7Q8ikRNckXLktjGSUvHZDW9fFU1usBjt2zUw/edit?usp=sharing"
                className="nav-link">Resume</a>
           </div>     
        </nav>  
    </div>
  );
}
