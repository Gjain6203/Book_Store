
import Courses from "./Comp/Courses/Courses"
import Home from "./Comp/Home/Home"
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom"
import Signup from "./Comp/Signup"

import Aboutus from "./Comp/About/Aboutus"
import ContactUs from "./Comp/Contact/ContactUs"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider"



function App() {

  const [authUser,setAuthUser] =useAuth();
  console.log(useAuth)
  return (
  <>
   <div className="dark:bg-slate-900 dark:text-white">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<Aboutus/>}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
   </div> 

   
  </>
  )
}

export default App