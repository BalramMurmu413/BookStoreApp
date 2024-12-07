import React from 'react'
import Header from '../componants/Header.jsx'
import Footer from '../componants/Footer.jsx'



export default function Contact() {

  const phoneNumber = "7979729392"; // Replace with the recipient's phone number
  const message = "Hello, I need help!"; // You can customize the message

  const handleRedirect = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;

  }

  return (
<section className='h-screen w-full  dark:bg-slate-800 dark:text-white'>
<Header/>

<section className='mt-44 px-20 m-auto flex flex-col md:flex-row gap-5 items-center justify-between' >
<div className="card  image-full w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Phone</h2>
    <p>7979729293</p>
    <p>Feel free to reach us.</p>
    <p>Give us your valuable feedback and suggestion </p>
  </div>
</div>
{/*  */}

<div className="card  image-full w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Email</h2>
    <p>Balramm41@gmail.com</p>
    <p>Feel free to reach us.</p>
    <p>Give us your valuable feedback and suggestion </p>
  </div>
</div>

{/*  */}
<div className="card  image-full w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">WhatsApp</h2>
    <p  onClick={handleRedirect} className=' cursor-pointer text-blue-300 border px-1 rounded-lg' >Click here to chat with us...</p>
    <p>Feel free to reach us.</p>
    <p>Give us your valuable feedback and suggestion </p>
  </div>
</div>




</section>

<Footer/>
</section>

  )
}