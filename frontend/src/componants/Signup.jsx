import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
const [authTab , setAuthTab] = useState(false)

  return (
    
   
    // <dialog id="my_modal_1" method="post" className="modal ">
    //   <div className="modal-box dark:bg-slate-800 dark:text-white ">
    //     <div className="flex flex-row justify-between">
    //     <h3 className="font-bold text-lg">Login!</h3>
    //     <form method="dialog">
    //         {/* if there is a button in form, it will close the modal */}
    //         <button className=" dark:bg-slate-800 dark:text-white dark:border-white "><IoCloseSharp className="  cursor-pointer"/></button>
    //       </form>
    //     </div>
    
    //     <div>
    //       <label htmlFor="" className="mb-10 "> Email<br />
    //       <input type="email"required className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white " />
    //       <br />
    //       <span className="text-red-400"></span>
    
    //       </label> <br />
    
    //       <label htmlFor=""  className="mb-10 ">Password <br />
    //       <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
    //       <br />
    //       <span className="text-red-400"></span>
    //       </label> <br />
    
    //       <label htmlFor=""  className="mb-10 ">Confirm Password <br />
    //       <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
    //       <br />
    //       <span className="text-red-400"></span>
    //       </label> <br />
    //     </div>
          
    //     <div className="modal-action flex flex-row items-center justify-between" >
    
    //       <div className="flex flex-row ">
    //       <input type="radio" name="termAndCondiction" id="" />
    // <div className='flex flex-col items-center justify-center'>
    //   <p> Lorem ipsum dolor sit. <span><a href="">T&C</a></span></p>
    // <p>Not Regestered ? <a href="" className='text-blue-500 underline cursor-pointer' >Sign up</a> {" "}</p>
    
    // </div>
    //       </div>
    //       <button type="submit" className="btn">Submit</button>
    //     </div>
    //   </div>
    // </dialog>
<div>
<div>
<div>
   <div>

<dialog id="my_modal_1" method="post" className="modal ">
  <div className="modal-box dark:bg-slate-800 dark:text-white ">
    <div className="flex flex-row justify-between">
    <div>
  <div role="tablist" className="tabs tabs-lifted">
  <a role="tab" className="tab tab-active">
  <h3 className="font-semibold px-10 text-lg">Login</h3>
  </a>

  <a role="tab" className="tab">
    <h3 className="font-semibold px-10 text-lg">Signup</h3>
  </a>
</div>
  </div>
    <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className=" dark:bg-slate-800 dark:text-white dark:border-white "><IoCloseSharp className="  cursor-pointer"/></button>
      </form>
    </div>

    <div className=' mt-5'>
      <label htmlFor="" className="mb-10 "> Email<br />
      <input type="email"required className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white " />
      <br />
      <span className="text-red-400"></span>

      </label> <br />

      <label htmlFor=""  className="mb-10 ">Password <br />
      <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
      <br />
      <span className="text-red-400"></span>
      </label> <br />

      <label htmlFor=""  className="mb-10 ">Confirm Password <br />
      <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
      <br />
      <span className="text-red-400"></span>
      </label> <br />
    </div>
      
    <div className="modal-action flex flex-row items-center justify-between" >

      <div className="flex flex-row ">
      <input type="radio" name="termAndCondiction" id="" />
<div className='flex flex-col items-center justify-center'>
  <p> Lorem ipsum dolor sit. <span><a href="">T&C</a></span></p>

<p>Not Regestered ?  <Link to='/signup'> <button className='text-blue-500 underline cursor-pointer'>Signup</button> {" "}</Link></p>

</div>
      </div>
      <button type="submit" className="btn">Submit</button>
    </div>
  </div>
</dialog>

  </ div>
</div>






// sample


<dialog id="my_modal_7" >
  <div className="modal-box dark:bg-slate-800 dark:text-white ">
    <div className="flex flex-row justify-between">
    <div>
  <div role="tablist" className="tabs tabs-lifted">
  <a role="tab" className="tab tab-active">
  <h3 className="font-semibold px-10 text-lg" > Login</h3>
  </a>
  <a role="tab" className="tab">
  <h3 className="font-semibold px-10 text-lg" > Singup</h3>
  </a>
</div>
  </div>
</div>




{/* Login form */}
  { authTab ?
    
    <form  >
        {/* if there is a button in form, it will close the modal */}
        <span className=" text-red-500 dark:bg-slate-800 dark:text-white dark:border-white absolute top-5 right-5 cursor-pointer btn"><IoCloseSharp/></span>

    <div className=' mt-5'>
      <label htmlFor="" className="mb-10 "> Email<br />
      <input type="email"required className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white " />
      <br />
      <span className="text-red-400"></span>

      </label> <br />

      <label htmlFor=""  className="mb-10 ">Password <br />
      <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
      <br />
      <span className="text-red-400"></span>
      </label> <br />

      <label htmlFor=""  className="mb-10 ">Confirm Password <br />
      <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
      <br />
      <span className="text-red-400"></span>
      </label> <br />
    </div>
      
    <div className="modal-action flex flex-row items-center justify-between" >

      <div className="flex flex-row ">
      <input type="radio" name="termAndCondiction" id="" />
<div className='flex flex-col items-center justify-center'>
  <p> Lorem ipsum dolor sit. <span><a href="">T&C</a></span></p>

<p>Not Regestered ?  <Link to='/signup'> <button className='text-blue-500 underline cursor-pointer'>Signup</button> {" "}</Link></p>

</div>
      </div>
      <button type="submit" className="btn">Submit</button>
    </div>
      </form>

      :


      <form>
      {/* if there is a button in form, it will close the modal */}
      <span className="modal-backdrop text-red-500 dark:bg-slate-800 dark:text-white dark:border-white absolute top-5 right-5 cursor-pointer btn"><IoCloseSharp/></span>

  <div className=' mt-5'>
    <label htmlFor="" className="mb-10 "> Name<br />
    <input type="name"required className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white " />
    <br />
    <span className="text-red-400"></span>

    </label> <br />

    <label htmlFor=""  className="mb-10 ">Password <br />
    <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
    <br />
    <span className="text-red-400"></span>
    </label> <br />

    <label htmlFor=""  className="mb-10 ">Confirm Password <br />
    <input type="password" className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white" />
    <br />
    <span className="text-red-400"></span>
    </label> <br />
  </div>
    
  <div className="modal-action flex flex-row items-center justify-between" >

    <div className="flex flex-row ">
    <input type="radio" name="termAndCondiction" id="" />
<div className='flex flex-col items-center justify-center'>
<p> Lorem ipsum dolor sit. <span><a href="">T&C</a></span></p>

<p>Not Regestered ? <button className='text-blue-500 underline cursor-pointer'>Signup</button></p>

</div>
    </div>
    <button type="submit" className="btn">Submit</button>
  </div>
    </form>
}
  </div>
</dialog>

  </ div>
</div>
    
    
      )
    }
    