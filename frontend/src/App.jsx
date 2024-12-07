import React from "react";

import {  Routes, Route } from "react-router-dom";
// routes 
import Home from './pages/Home.jsx'
import Course from './pages/Course.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Service from './pages/Service.jsx'



function App() {

  return (
    <>

    <div className="dark:bg-slate-800 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        {/* <Route path="/signup" element={<Signup/>}></Route> */}
      </Routes>
    </div>
    </>
  )
}

export default App
