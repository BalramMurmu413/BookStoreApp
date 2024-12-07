import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import avatar from '../../public/avatar.jpg'
import Login from './Login.jsx'



function Header(){

    const [sticky, setSticky] = useState(false)
const [theme, setTheme]= useState(localStorage.getItem('theme')? localStorage.getItem("theme"): "dark")

const element=document.documentElement
useEffect(()=>{
  if(theme === "dark"){
    element.classList.add("dark")
    localStorage.getItem("dark")
    document.body.classList.add("dark")
    }else{
      element.classList.remove("dark")
localStorage.getItem("theme", "light")      
document.body.classList.remove("dark")
}
},[theme])





    useEffect(()=>{
      const handleScroll =()=>{
        if(window.screenY>1){
          setSticky(true)
        }
        else{
          setSticky(false )
        }

      }
window.addEventListener('scroll', handleScroll)
return()=>{
  window.addEventListener('scroll', handleScroll)
}
},[])






           
    
    return(
    <>
 <section className={ `w-full h-12 md:h-14  dark:bg-slate-800 dark:text-white items-center justify-center flex cursor-default select-none fixed top-0 right-0 left-0  ${sticky ? "sticky-navbar z-20 bg-white  shadow-md  ": ""}`}>
  <nav className=" w-11/12 m-auto  flex flex-row justify-between items-center" >
<div className="w-2/5">
  <h1 className="font-bold text-xl md:text-3xl cursor-pointer text-blue-400"> <sup className="text-yellow-600">Balram</sup>CyberHub</h1>
</div>

<div className="w-3/5 justify-between hidden lg:flex">
<ul className="flex flex-row gap-10 text-sm">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/course'>Course</Link></li>
    <li><Link to='/service'>Service</Link></li>
    <li>  <Link to='/blog'>Blog</Link></li>
    <li>  <Link to='/contact'>Contact</Link></li>
  </ul>
</div>







<div className="flex flex-row gap-5 items-center" >
  <div className="hidden lg:block">
  <label className="flex input items-center dark:text-white dark:border-white border-slate-500 border dark:bg-slate-700">
  <input type="text" className=" grow  " placeholder="Search"   />
  <svg
    viewBox="0 0 12 12"
    fill="currentColor"
    className="h-4 w-4 opacity-70  cursor-pointer">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>

<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller " value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme ==="dark"? "light": "dark")}>
      
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme ==="light"? "dark": "light")}>
    
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>


<img  src={avatar} className="md:h-10  md:w-10  h-7 w-7  cursor-pointer rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}/>
<Login/>




{/* responsive menu */}
<div className="lg:hidden z-50  block">
<div className=" dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="">
    
    {
      sticky ?
      <FaBarsStaggered className="md:h-8  md:w-8  h-5 w-5 cursor-pointer" onClick={()=> setSticky (false)} />
      :
      <IoCloseSharp className="md:h-8  md:w-8   h-5 w-5  cursor-pointer"  onClick={()=> setSticky(true)}/>
      
    }
    </div>
  <ul tabIndex={0} className="dropdown-content dark:bg-slate-800 dark:text-white  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li className="dark:hover:bg-slate-400 rounded-sm" > <a href="">Home</a></li>
    <li className="dark:hover:bg-slate-400 rounded-sm" > <a href="">Course</a></li>
    <li className="dark:hover:bg-slate-400 rounded-sm" > <a href="">Service</a></li>
    <li className="dark:hover:bg-slate-400 rounded-sm" > <a href="">Blog</a></li>
    <li className="dark:hover:bg-slate-400 rounded-sm" > <a href="">Contact</a></li>
  </ul>
</div>
      </div>

</div>
  </nav>
 </section>
<div>


</div>
    </>
    )
}

export default Header;