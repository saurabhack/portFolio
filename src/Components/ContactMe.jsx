function ContactMe(){
    return(
        <>
        <div className="w-[100vw]  flex flex-col gap-10 items-center pt-20 bg-[#030712]">
        <div  className='bg-gray-400 p-3 w-40 flex justify-center rounded-xl '>
            <p className='text-white text-xl font-semibold '>Contact Me</p>
        </div>
        <div className="w-full flex justify-center items-center">
            <p className="text-white font-semibold text-lg text-center w-[50%]">Have a project or idea you'd like to discuss? Fill out the form below, and I'll get back to you as soon as possible!</p>
        </div>
        <div className="text-white w-full flex justify-center ">
            <form className="flex flex-col  gap-4 w-[50%]">
            <label>Name</label>
            <input type="text" className="bg-[#030712] border h-10 rounded-lg border-gray-400" placeholder=""/>
            <label>Email Id</label>
            <input type="email" className="bg-[#030712] border rounded-lg h-10 border-gray-400" placeholder=""/>
            <label>Message</label>
            <textarea type="text" className="bg-[#030712] border h-40 rounded-lg border-gray-400"  placeholder=""/>    
            <div className="w-full flex justify-center">
            <button className="bg-slate-300 p-2 rounded-lg text-black w-[50%]">Submit</button>
            </div>
            </form>
        </div>
        </div>
        </>
    )
}
export default ContactMe