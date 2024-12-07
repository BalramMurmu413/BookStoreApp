import React from 'react'
import Header from '../componants/Header.jsx'
import Footer from '../componants/Footer.jsx'
import Courses from './Courses.jsx' 



// componants

export default function Course() {


  return (
    <>
  <Header/>
<div className=' w-full h-auto flex flex-col items-center justify-center'>


<div className='h-78 mt-20 md:mt-44 w-full flex items-center justify-center flex-col m-auto sm:px-5 md:px-20 '>
  <h1 className='text-2xl'>Lorem ipsum dolor sit . <span className='text-pink-500 font-bold'>Hellow :) </span></h1>
  <p className='text-center mt-5'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et consequatur porro cumque autem molestiae eligendi, nesciunt at voluptate odit! Obcaecati autem et repudiandae nam odit quisquam numquam, nobis expedita excepturi? Reiciendis voluptatum molestiae veritatis rerum necessitatibus doloremque, tenetur suscipit culpa totam voluptate quidem laborum quod ab illum sit nemo. lLorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod quisquam !</p>
<button className='bg-pink-500 text-white hover:bg-pink-600 duration-100  px-4 py-2 rounded-md mt-8 transition-all ease-in-out '> Back</button>
</div>

  <div>
  <Courses/>
  </div>
   </div>





  <Footer/>
    </>
  )
}
