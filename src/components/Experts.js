import React from 'react'


function Experts() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2">
    <div  className='col-span-1 md:w-[80%] text-center'>
   
    <img src="https://raw.githubusercontent.com/bhagirath-wscubetech/tailwind-wsucbe-app/f28f822999e0f13f4395e1e3751909f28328959d/src/assets/laptop.jpg" alt="abc" className='inline'/>

  </div>
    <div className='col-span-1 flex flex-col justify-center'>
    <h1 className='text-[#00df9a] font-bold my-2' >Learn From Exports</h1>
    <p className='my-2 text-justify center'>Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard
     dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
     it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essentially unchanged</p>
     <button className='w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
    </div>
    </div>
  )
}

export default Experts