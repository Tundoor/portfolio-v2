"use client"

import './footer.css'
import { useForm } from 'react-hook-form'
import formSchema from '@/app/utils/validation/contact.form.validation'
import { zodResolver } from '@hookform/resolvers/zod'


export default function Footer({ sendMail }) {

    const {
       register,
       handleSubmit,
       reset,
       formState: { errors, isSubmitting }
      } = useForm({ resolver: zodResolver(formSchema) })
    const onSubmit = async (data) => {
     const result = await sendMail(data)
    if (result.success) {
        reset()
        alert('Message sent!')
    } else {
        alert(result.error)
    }
  }

    return(
        <>
        <div className='footer' id='Contact'>
         <div className='contact-details-div'>
           <div className='in-touch-div'>
             <h1>Get in touch</h1>
             <p>Feel Free to reach out if you have any job offers or an interest in my account.</p>
           </div>
           <div className='contact-details'>
             <div className='contact-detail'>
               <i className="fa fa-envelope" aria-hidden="true"></i>
               <h1>thandwem045@gmail.com</h1>
             </div>
              <div className='contact-detail'>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h1>(+27) 082 564 9135</h1>
             </div>
              <div className='contact-detail'>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
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
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' type='text'  {...register('name')}></input>
                { errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                <input placeholder='Email' type='email' {...register('email')}></input>
                 { errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                <textarea placeholder='Message...' {...register('message')}></textarea>
                 { errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                <button type='submit'>{ isSubmitting ? 'Processing' : 'Send'}</button>
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
            <a href="https://github.com/Tundoor" target='_blank' ><i className="fab fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/thandolwethu-mbokazi-9bb309287/" target="_blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://discordapp.com/users/1245762518681649229/" target='_blank'><i className="fab fa-discord" aria-hidden="true"></i></a>
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