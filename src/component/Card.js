import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { clickhandler } from '../redux/slices/likedslice';
const Card = (data) => {
  
  const state=useSelector((state)=>state.like.likedarray)
  const dispatch=useDispatch();
  
  return (
    <div className=' w-[300px] h-[300px] border rounded-md m-2 overflow-hidden'>

     <div className='relative'>
        <img src={data.image.url} alt={data.image.alt}></img>
        <button onClick={()=>dispatch(clickhandler(data.id))} className='w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute right-2 bottom-[-12px]'>
          {
            state.includes(data.id)?(<GoHeartFill fontSize="1.75rem"/>):(<GoHeart fontSize="1.75rem"/>)
          }
        </button>
     </div>

     <div className='text-white m-3 mx-0 '>
      {data.title}
     </div>
     
     <div className='text-white '>
      {data.description.length>100?(data.description.substr(0,100)+"..."):(data.description)}
     </div>
    </div>
  )
}

export default Card