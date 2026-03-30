import './globals.css'
import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro-section';
import AboutMe from './components/about-me/about-me'
import Skills from './components/skills/skills'
import Project from './components/projects/project';
import Footer from './components/footer/footer'
import nodemailer from 'nodemailer'


  const sendMail = async (data: { name: string, email: string, message: string }) => {
    'use server'

    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ set' : '✗ undefined');

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
      console.error("Mail error:", error)
       return {
         success: false,
         error: 'Oops! An error occured'
       }
    }
  }

export default function Home() {
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
