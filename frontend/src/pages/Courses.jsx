import React from 'react'
import list from '../../public/List.json'
import Card from '../componants/Card.jsx'

function Courses() {
 


  return (
    
    <section className='dark:bg-slate-800 dark:text-white '>

    <div className='mt-14 grid grid-cols-1  md:grid-cols-3 dark:bg-slate-80 dark:text-white '>
{list.map((item) => <Card item={item} key={item.id}/>)}
    </div>
<hr className='w-1/2 m-auto'/>
    </section>
  )
}

export default Courses