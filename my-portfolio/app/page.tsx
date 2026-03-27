import './globals.css'
import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro-section';
import AboutMe from './components/about-me/about-me'
import Skills from './components/skills/skills'
import Project from './components/projects/project';
import Footer from './components/footer/footer'
import nodemailer from 'nodemailer'


export default function Home() {

  const sendMail = async (data: { name: string, email: string, message: string }) => {
    'use server'

    try {

      // transporter setup
       const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

     const mailOptions = {
        from: data.email,
        to: process.env.MAIL_RECEIVER_ADDRESS,
        subject: `${data.name} is trying to reach out!`,
        text: data.message,
        html: '',
     }

     // send mail
     await transporter.sendMail(mailOptions);

     return {
       success: true,
       error: null
     };
    } catch (error) {
       return {
         success: false,
         error: 'Oops! An error occured'
       }
    }
  }
  return (
   <>
 <Navbar />
 <Intro />
 <AboutMe />
 <Skills />
 <Project />
 <Footer sendMail={sendMail} />
   </>
  );
}
