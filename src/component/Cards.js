import { useSelector,useDispatch} from "react-redux"
import { fetchdata } from "../redux/slices/courseslice";
import React, { useState } from 'react'
import { useEffect } from "react";
import Card from './Card'
import Spinner from "./Spinner";
const Cards = ({category}) => {

    
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchdata());
    }, [dispatch]);
    const {data,isLaoding}=useSelector((state)=>state.course);
    
    const [course,setcourse]=useState();

   useEffect(()=>{

    if(data){
      setcourse(data.data);
    }
    else{
      setcourse([]);
    }
   },[data])

   function getcourses(){
    
    if(!course) return [];
    if(category==="All"){
      let allcourses=[]
      Object.values(course).forEach((array)=>{
        array.forEach((coursedata)=>{
         allcourses.push(coursedata)
        })
     })
     return allcourses;
    }
    else{
      return course[category];
    }
   }

  
   
  return (
    <div className=" mx-40 my-4 w-6/6 min-h-[50vh] flex flex-wrap justify-center items-center">
      {
       isLaoding?( <div className="w-full h-full flex justify-center items-center"><Spinner ></Spinner></div>):(getcourses().map((data)=>{
        return <Card key={data.id} {...data}/>
       }))
      }
    </div>
  )
}

export default Cards;