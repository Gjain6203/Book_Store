
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function FreeBook() {


  const [free,setFree] =useState([])

  const filterData = async()=>{
    try {
      const response = await axios.get(`http://localhost:3000/books/getBook`)
      
      const result = response.data.data.filter((data)=>
        data.category ==="Free")
      console.log(result)
      setFree(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    filterData();
  },[])
  console.log(free)


    // const result = free.filter((data)=>
    //     data.category ==="Free"
    // )
    // console.log(filterData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
            <h1 className="font-semibold text-xl pb-2 " >Free Offered Courses </h1>
            <p>If you are looking for free resources to download short content books or e-books, here are some popular websites where you can find free e-books, including those on writing, content creation, and more:
            </p>
            </div>
            <div className="slider-container">
      <Slider {...settings}>
       {free.map((item)=>(
        <Card item ={item} key={item.id}/>
       ))}
      </Slider>
        </div>

        </div>
        
    </>
  )
}

export default FreeBook