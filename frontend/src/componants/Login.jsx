import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";



export default function Login() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [toggleState, setToggleState] = useState(1)
  const tabToggle = (index)=>{
    setToggleState(index)
  }



  function modalTime (){
    setTimeout(() => {
 return(
        <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Welcome!</h3>
    <p className="py-4">Your are now logged In...</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
)

 }, 2000);
  }
  return (
     <>

<section >
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal  ">
  <div className="modal-box  dark:bg-slate-800 ">
    <form method="dialog" className="modal-backdrop dark:bg-slate-800 ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn dark:text-white btn-sm btn-circle btn-ghost absolute right-1 top-1 text-black">✕</button>
    </form>
<section className='bloc tabs'>
    <form action="" >
    <div role="tablist" className="tabs tabs-lifted tabs-lg">
  <a role="tab" className= {toggleState === 1 ? "tab tab-active dark:bg-slate-800 dark:text-green-500 font-bold " : "dark:bg-slate-800 dark:text-green-500 font-bold tab"} onClick={()=> tabToggle(1)}>Login</a>
  <a role="tab" className= {toggleState === 2 ? "tab tab-active dark:bg-slate-800 dark:text-green-500 font-bold " : "dark:bg-slate-800 dark:text-green-500 font-bold tab"}  onClick={()=> tabToggle(2)} >Signup</a>
</div>
</form>
  <form   className='content-tabs mt-10 '>
    <div className= {toggleState === 2 ? "content active-content" : "hidden"}>
      <label htmlFor="" className="mb-10 " > Full Name <br />
      <input type="email" 
      className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white "
       placeholder='Enter your fullname' />
      <br />
      <span className="text-red-400"></span>

      </label> <br />

      <label htmlFor=""  className="mb-10 ">Email <br />
      <input type="Email"   className="input input-bordered  dark:bg-slate-800 dark:text-white   dark:border-white" placeholder='Enter your password' />
      <br />
      <span className="text-red-400"></span>
      </label> <br />

      <label htmlFor=""  className="mb-10 ">Create Password <br />
      <input type="password" className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white" placeholder='Please create your Password' />
      <br />
      <span className="text-red-400"></span>
      </label> <br />

      <label htmlFor=""  className="mb-10 ">Confirm Password <br />
      <input type="password" className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white"  placeholder='Please Confirm Your Password'/>
      <br />
      <span className="text-red-400"></span>
      </label>
      
    <div className="modal-action flex flex-row items-center justify-between" >
<div className='flex flex-col '>

  <div className='flex flex-row gap-3'>
    <input type="radio" name="termAndCondiction" id="checkTwo" className=''/>
  <p> Lorem ipsum dolor sit. <span><a href="">T&C</a></span></p>
  </div>
<p className='ml-6'>Already Regestered? <button className={toggleState === 2? "text-blue-500 underline cursor-pointer content active-content" : "hidden"} onClick={()=> tabToggle(1)}>Login</button> </p>
    </div>

    <button className="btn" onClick={modalTime}>Submit</button>


</div>
    </div>
      </form>

{/* login side */}

<form  
onSubmit={handleSubmit(onSubmit)}
className='content-tabs mt-6'>

    <div className= {toggleState === 1? "content active-content" : "hidden"}>
      <label htmlFor="" className="mb-10 "> Email / Mobile<br />
      <input type="email"
      {...register("email", {required: true})} 
      className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white " 
      placeholder='Enter Your Email / Mobile' />
<br />
      {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
      </label> 
      <br />





      <label htmlFor=""  className="mb-10 ">Password <br />
      <input type="password"  
      {...register("password", {required: true}) } 
      className="input input-bordered  dark:bg-slate-800 dark:text-white dark:border-white"  placeholder='Enter Your Password'/>
      <br />
      {errors.password && <span  className='text-sm text-red-500'>This field is required</span>}
      </label> <br />



      <button type="submit" className="btn">Submit</button>
     

    <div className="modal-action flex flex-row items-center justify-between" >
<div className='flex flex-row items-center justify-center'>
  <div className='flex flex-col'>
<br />
     <div className='flex flex-row gap-3'>
       <input type="radio" name="termAndCondiction" id="checkOne" 
      {...register("radio", {required: true}) } 
      />
      <br />
      {errors.radio && <span  className='text-sm text-red-500'>Please accept term and condicton</span>} <br />
  <p > Lorem ipsum dolor sit. <span className='underline text-blue-500'><a href="">T&C</a></span></p>
     </div>
<p className='ml-6' >Not Regestered? <button className={toggleState === 1? "text-blue-500 underline cursor-pointer content active-content" : "hidden"} onClick={()=> tabToggle(2)}>Signup</button> </p>
    </div>
      </div>
  </div>
    </div>
      </form>

  </section>  



  </div>
</dialog>

</section>
    </>

  )
}
