
import Header  from "./component/Header"
import Fildata from "./component/Fildata"
import Cards from "./component/Cards"
import { useState } from "react"
import { filterData } from "./data"
export default function App() {

  const [category,setcategory]=useState(filterData[0].title);
  return (
    <div className='max-w-full min-h-screen  bg-slate-500 '>
      <Header></Header>
      <Fildata setcategory={setcategory}></Fildata>
      <Cards category={category}></Cards>
    </div>
  )
}