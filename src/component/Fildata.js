import { filterData } from "../data";

import React from 'react'

const Fildata = ({setcategory}) => {
   

   function categoryhandler(title){
     setcategory(title);
   }
   
  return (
    <div className="w-full h-[50px]  flex justify-center gap-x-12 text-xl font-bold text-white mt-4">
        {
            filterData.map((data)=>{
                return <button onClick={()=>categoryhandler(data.title)} className="px-[10px] py-1 border-2 bg-slate-500 rounded-md focus:border-4 focus:border-white">{data.title}</button>
            })
        }
    </div>
  )
}

export default Fildata