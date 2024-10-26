import { AiOutlineMail } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


import 'react-toastify/dist/ReactToastify.css'; // Make sure this is imported

function Footer() {
    let mobile="+91 - 9881910567"
    let email="kamanesaurabh68@gmail.com"
  function textCopied(id) {
    navigator.clipboard.writeText(id)
    if(id==="+91 - 9881910567"){
        toast.success("+91 - 9881910567 copied", {
            position: "top-center",
            autoClose: 3000,  
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
    }else if(id==="kamanesaurabh68@gmail.com"){
        toast.success("kamanesaurbh68@gmail.com is copied", {
            position: "top-center",
            autoClose: 3000,  
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
    }
  }

  return (
    <>
      <footer className="bg-[#030712] w-[100vw] grow  pt-20 p-10 flex flex-col gap-5 ">
        <div className="w-full h-[20%] flex justify-center items-center">
          <h2 className="text-gray-300 bg-gray-800 font-semibold p-1 rounded-lg opacity-12">
            Get in touch
          </h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[40%] flex justify-center items-center">
            <p className="text-center text-white text-sm">
              What’s next? Feel free to reach out to me if you're looking for a designer or a developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full justify-center">
          <AiOutlineMail className="text-gray-400 text-3xl" />
          <h1 className="text-xl text-white font-semibold">
            Kamanesaurabh68@gmail.com
          </h1>
          <FaRegCopy onClick={()=>textCopied(email)} className="text-gray-400 text-2xl cursor-pointer" />
        </div>
        <div className="flex gap-2 w-full justify-center">
          <LuPhone className="text-gray-400 text-3xl" />
          <h1 className="text-xl text-white font-semibold">
            +91 - 9881910567
          </h1>
          <FaRegCopy id="number" onClick={()=>textCopied(mobile)} className="text-gray-400 text-2xl cursor-pointer" />
        </div>
        <div className="bg-[#030712] w-full flex flex-col items-center gap-2 ">
            <p className="text-gray-400">
            You may also find me on these platforms!
            </p>
            <div className="flex gap-4">
            <FaLinkedin className="text-white text-xl"/>
            <FaGithub className="text-white text-xl"/>
            </div>
        </div>
        <ToastContainer />
        
      </footer>
      <div className="bg-gray-800 w-[100vw] justify-center items-center gap-4 flex h-[10vh]">
      <FaRegCopyright className="text-white text-2xl"/>
      <p className="text-white">2024 | Designed and coded with ❤️️ by Saurabh kamane</p>
      </div>
    </>
  );
}

export default Footer;
