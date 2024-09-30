import Card from "./Card"
import {Link} from "react-router-dom"
import axios from "axios"
// import List from "../../public/list.json"
import { useEffect, useState } from "react"


function Course() {

  const [book ,setBook ] =useState([])


  const fetchData = async()=>{     
    try {
      const response = await axios.get(`http://localhost:3000/books/getBook`);
      console.log(response.data)
      setBook (response.data.data)


    } catch (error) {
      console.log(error)
    }
   }



  useEffect(()=>{
     fetchData();
  },[])
  console.log(book)

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  "  >
        <div className=" justify-center items-center text-center mt-28  ">
            <h1 className="text-2xl font-semibold md:text-4xl ">We are delighted to have you <span className="text-pink-500" >Here!:)</span></h1>
            <p className="mt-12">Bookshop has absolutely transformed our business, and I am just so continually grateful for your service and, ultimately, support. Thank you so much for your vision and your commitment to us indies.</p>
           <Link to={"/"}>
           <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700  duration-300" >Back</button>
           </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
            {
               book?.map((item)=>(
                  <div key={item._id}>
                  <Card item={item} />
                  </div>
                  
               ))}
        </div>
      </div>
    </>
  )
}

export default Course