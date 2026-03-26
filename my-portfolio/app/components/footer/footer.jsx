import './footer.css'

export default function Footer() {
    return(
        <>
        <div className='footer'>
         <div className='contact-details-div'>
           <div className='in-touch-div'>
             <h1>Get in touch</h1>
             <p>Feel Free to reach out if you have any job offers or an interest in my account.</p>
           </div>
           <div className='contact-details'>
             <div className='contact-detail'>
               <i class="fa fa-envelope" aria-hidden="true"></i>
               <h1>thandwem045@gmail.com</h1>
             </div>
              <div className='contact-detail'>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <h1>(+27) 082 564 9135</h1>
             </div>
              <div className='contact-detail'>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <h1>Based in South Africa</h1>
             </div>
           </div>
         </div>

         {/* Contact Form */}
          <div className='contact-form-div'>
            <div className='form-header'>
               <h1>Say Something</h1>
               <p>Don't be a stranger. Say Hi!</p>
            </div>
            <form className='contact-form'>
                <input placeholder='Name' type='text'></input>
                <input placeholder='Email' type='text'></input>
                <textarea placeholder='Message...'></textarea>
                <button>Send</button>
            </form>
         </div>

         {/* footer */ }
          <div className='footer-div'>
        <div>
          <div className='footer-header'>
            <h1>THANDO</h1>
            <p>Reader, writer, gamer, creative, artist and dreamer.</p>
          </div>
          <div className='footer-links'>
            <a><i class="fab fa-github" aria-hidden="true"></i></a>
            <a><i class="fab fa-linkedin" aria-hidden="true"></i></a>
            <a><i class="fab fa-discord" aria-hidden="true"></i></a>
          </div>
         </div>

          <div className='footer-copyright'>
            <h1>&copy; Thandolwethu Mbokazi. All rights reserved</h1>
          </div>

         </div>
         </div>
        </>       
    )
}