import React  from "react";
import computer from '../../public/computerwithman.png'
function TopBanner(){
return (
    <>
<section className="w-full  p-10 h-screen items-center flex flex-col-reverse md:flex-row md:mt-14 mt-40 ">
    {/* ? left */}
    <div className="md:w-1/2 w-full mx-2  h-3/4  flex flex-col justify-around ">
<div>
 
    <h1 className="text-2xl md:text-4xl  font-bold"> Lorem ipsum dolor sit amet.</h1>
    <br />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius laborum maxime sunt odit beatae temporibus maiores provident quisquam et at.</p>
</div>

<div className=" mt-">
<label className="input input-bordered dark:bg-slate-800 dark:text-white dark:border-white border flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
</div>

<div className="mt-">
<dialog id="my_modal_1" className="modal">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <h3 className="font-bold text-lg">Thanks! For Subscribing Us...</h3>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn dark:bg-slate-800 dark:text-white  dark:hover:bg-slate-700">Close</button>
      </form>
    </div>
  </div>
</dialog>


<button onClick={()=>document.getElementById('my_modal_1').showModal()} className="dark:bg-slate-800 dark:text-white dark:border-white  border dark:hover:bg-slate-700  bg-slate-200 rounded-md py-2 px-5 shodow-sm  "> Subscribe</button>
</div>

    </div>
    {/* Right  */}


<div className=" md:w-1/2 w-full flex items-center justify-center">
<img src={computer} alt="" />

</div>
</section>
<hr className="w-1/2 m-auto "/>


    
    </>
)
}
export default TopBanner;