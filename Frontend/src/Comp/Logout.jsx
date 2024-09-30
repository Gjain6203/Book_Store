import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";


function Logout() {
    const [authUser,setAuthUser] =useAuth();

    const handleLogout = async()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('Users');
            toast.success("Logout Successfully")
           
            setTimeout(()=>{
             
              window.location.reload();
             
            },2000)
           
        } catch (error) {
            toast.error(error.message)
            setTimeout(()=>{})
        }
    }


  return (
   <>
    <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout}>Logout</button>
    </div>
   </>
  )
}

export default Logout