import React from 'react'

const Pricecard = ({title, subtitle,price,item1,item1icon,item2,item2icon,item3,item3icon,item4,item4icon,item5, item5icon,item6,item6icon,btnlink}) => {
  return (

    <div className='hover:shadow-2xl h-auto text-center flex flex-col  justify-center rounded-2xl'>
      <div className=' rounded-t-xl text-white bg-gray-600 p-5 mb-6'>
        <h1 className='font-semibold text-3xl'>{title}</h1>
        <p className='text-sm pt-3'>{subtitle}</p>
        </div>
      
      <div className='flex justify-center'>
        <p>AED</p>
      <h1 className='text-6xl font-semibold'>{price}</h1>
      
      </div>
      <p>Per Ticket</p>
     <div className='flex flex-col justify-center'>
     <div className='flex gap-5 p-5'><img src={item1icon} alt="" srcset="" className='w-10' /> <p className='self-center'>{item1}</p> </div>
      <div className='flex gap-5 p-5'><img src={item2icon} alt="" srcset="" className='w-10' /> <p className='self-center'>{item2}</p> </div>
      <div className='flex gap-5 p-5'> <img src={item3icon} alt="" srcset="" className='w-10' /> <p className='self-center '>{item3}</p></div>
      <div className='flex gap-5 p-5'> <img src={item4icon} alt="" srcset="" className='w-10' /> <p className='self-center'>{item4}</p> </div>
      <div className='flex gap-5 p-5'><img src={item5icon} alt="" srcset="" className='w-10' /> <p className='self-center'>{item5}</p> </div>
      <div className='flex gap-5 p-5'><img src={item6icon} alt="" srcset="" className='w-10' /> <p className='self-center'>{item6}</p> </div>
     </div>
      
      <a href={btnlink} className=" w-1/3 self-center font-semibold bg-orange-400 hover:bg-orange-500 text-white rounded-lg p-3 border-2">Book Now</a>
<p className='m-5 italic text-gray-400 '>Children under 3 are free of charge</p>
    </div>
  )
}

export default Pricecard;
