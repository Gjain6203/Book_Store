import { useForm } from "react-hook-form"


function Contact() {

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20  px-4  justify-center items-center  w-[500px] h-[400px] shadow-2xl  ">
        <h1 className="text-3xl text-blue-700 mt-16" >Contact us</h1>
        <form   onSubmit={handleSubmit(onSubmit)} >
        <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input type="text"  placeholder="Enter Your Name" className=" dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border rounded-md outline-none" {...register("name", { required: true })} />
        <br/>
        {errors.name && <span className="text-sm text-red-500" >This field is required</span>}
        </div>
        <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email"  placeholder="Enter Your Email" className="dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })} />
        <br/>
        {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
        </div>
        <div className="mt-4 space-y-2">
        <span>Message</span>
        <br/>
        <input type="text"  placeholder="Enter Your Message" className="dark:bg-slate-900 dark:text-white w-80 h-20 px-3 py-1 border rounded-md outline-none" {...register("message", { required: true })} />
        <br/>
        {errors.message && <span className="text-sm text-red-500" >This field is required</span>}
        </div>

        <div className=" flex justify-around   mt-4">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Send Message</button>
        
        </div>

        </form>

        </div>
        
    
    </>
  )
}

export default Contact