import React from 'react'

import Header from '../componants/Header.jsx'
import Footer from '../componants/Footer.jsx'
import Card from '../componants/Card.jsx'
import list from '../../public/List.json'

export default function Service() {
  return (

<section className='h-screen w-full dark:bg-slate-800 dark:text-white'>
<Header/>

<section className=' grid grid-cols-3 mt-44'>

{ list.map((item)=> <Card item={item} key={item.id}/>)}





</section>
<Footer/>
</section>

  )
}
